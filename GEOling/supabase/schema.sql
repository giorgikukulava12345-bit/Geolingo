-- Run once in a NEW Supabase project, then run upgrade-v2.sql.
-- For an existing project run ONLY upgrade-v2.sql; do not recreate these tables.
begin;
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
create table private.lesson_catalog (
 id text primary key,
 course text not null check (course in ('en','ru')),
 ordinal integer not null check (ordinal between 0 and 19),
 answers jsonb not null,
 unique(course,ordinal)
);
create table public.profiles (
 id uuid primary key references auth.users on delete cascade,
 nickname text not null check (length(nickname) between 2 and 24),
 created_at timestamptz not null default now()
);
create table public.completions (
 user_id uuid not null references auth.users on delete cascade,
 unit_id text not null references private.lesson_catalog(id),
 score integer not null check (score between 13 and 16),
 xp integer not null default 40 check(xp=40),
 completed_at timestamptz not null default now(),
 primary key(user_id,unit_id)
);
alter table public.profiles enable row level security;
alter table public.completions enable row level security;
revoke all on public.profiles,public.completions from anon,authenticated;
grant select on public.profiles,public.completions to authenticated;
create policy own_profile on public.profiles for select to authenticated using (id=auth.uid());
create policy own_completions on public.completions for select to authenticated using (user_id=auth.uid());
create function private.create_profile() returns trigger language plpgsql security definer set search_path='' as $$
begin
 insert into public.profiles(id,nickname) values(new.id,left(coalesce(nullif(trim(new.raw_user_meta_data->>'nickname'),''),'Learner'),24));
 return new;
end; $$;
create trigger on_new_user after insert on auth.users for each row execute function private.create_profile();
create function private.normalized(t text) returns text language sql immutable set search_path='' as $$
 select trim(regexp_replace(regexp_replace(lower(normalize(t,NFKC)), '[.,!?;:„“”"''’—–-]', '', 'g'), '\s+', ' ', 'g'));
$$;
create function public.my_progress() returns jsonb language sql security definer set search_path='' as $$
 select jsonb_build_object(
 'completed',coalesce((select jsonb_agg(c.unit_id order by c.completed_at) from public.completions c where c.user_id=auth.uid()),'[]'::jsonb),
 'xp',coalesce((select sum(c.xp) from public.completions c where c.user_id=auth.uid()),0),
 'days',coalesce((select jsonb_object_agg(d.study_day,d.xp) from (select to_char(c.completed_at at time zone 'Asia/Tbilisi','YYYY-MM-DD') study_day,sum(c.xp) xp from public.completions c where c.user_id=auth.uid() group by 1) d),'{}'::jsonb),
 'mistakes','[]'::jsonb);
$$;
create function public.submit_lesson(p_unit text,p_answers jsonb) returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); catalog private.lesson_catalog; correct integer:=0; awarded integer:=0; i integer;
begin
 if u is null then raise exception 'Sign in required'; end if;
 perform pg_advisory_xact_lock(hashtextextended(u::text,0));
 select * into catalog from private.lesson_catalog where id=p_unit;
 if not found then raise exception 'Unknown lesson'; end if;
 if jsonb_typeof(p_answers) is distinct from 'array' or jsonb_array_length(p_answers)<>16 then raise exception '16 answers required'; end if;
 if catalog.ordinal>0 and not exists(select 1 from public.completions c where c.user_id=u and c.unit_id=catalog.course||'-'||(catalog.ordinal-1)::text) then raise exception 'Complete the preceding lesson first'; end if;
 for i in 0..15 loop
   if length(p_answers->>i)>1000 then raise exception 'Answer too long'; end if;
   if private.normalized(p_answers->>i)=private.normalized(catalog.answers->>i) then correct:=correct+1; end if;
 end loop;
 if correct>=13 then
   insert into public.completions(user_id,unit_id,score) values(u,p_unit,correct) on conflict do nothing;
   if found then awarded:=40; end if;
 end if;
 return jsonb_build_object('passed',correct>=13,'score',correct,'awarded',awarded);
end; $$;
create function public.leaderboard() returns table(nickname text,xp bigint) language sql stable security definer set search_path='' as $$
 select p.nickname,sum(c.xp) xp from public.profiles p join public.completions c on c.user_id=p.id group by p.id,p.nickname order by xp desc,min(c.completed_at),p.id limit 50;
$$;
revoke all on function public.my_progress(),public.submit_lesson(text,jsonb),public.leaderboard() from public;
grant execute on function public.my_progress(),public.submit_lesson(text,jsonb) to authenticated;
grant execute on function public.leaderboard() to anon,authenticated;
commit;

