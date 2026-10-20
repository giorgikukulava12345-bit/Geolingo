-- Run upgrade-v2.sql (the generated combined version) on an EXISTING GEOling database.
-- Existing profiles, completions, XP and stable legacy lesson IDs are preserved.
begin;
alter table private.lesson_catalog drop constraint if exists lesson_catalog_ordinal_check;
alter table private.lesson_catalog drop constraint if exists lesson_catalog_course_ordinal_key;
alter table private.lesson_catalog add column if not exists prerequisite text;
alter table private.lesson_catalog add column if not exists level text;
alter table private.lesson_catalog add column if not exists question_count integer;
alter table public.completions drop constraint if exists completions_score_check;
alter table public.completions drop constraint if exists completions_xp_check;
alter table public.completions add constraint completions_score_check check(score>=0);
alter table public.completions add constraint completions_xp_check check(xp between 0 and 40);
create or replace function public.submit_lesson_v2(p_unit text,p_answers jsonb,p_hints jsonb default '[]'::jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare
 u uuid:=auth.uid(); catalog private.lesson_catalog; correct integer:=0;
 awarded integer:=0; weighted numeric:=0; total integer; i integer; assisted boolean;
begin
 if u is null then raise exception 'Sign in required'; end if;
 perform pg_advisory_xact_lock(hashtextextended(u::text,0));
 select * into catalog from private.lesson_catalog where id=p_unit;
 if not found then raise exception 'Unknown lesson'; end if;
 total:=jsonb_array_length(catalog.answers);
 if jsonb_typeof(p_answers) is distinct from 'array' then raise exception 'Answers must be an array'; end if;
 if jsonb_array_length(p_answers)<>total then raise exception 'Expected % answers',total; end if;
 if jsonb_typeof(p_hints) is distinct from 'array' then raise exception 'Hints must be an array'; end if;
 if jsonb_array_length(p_hints) not in (0,total) then raise exception 'Hint count must match answers'; end if;
 if catalog.prerequisite is not null
    and not exists(select 1 from public.completions c where c.user_id=u and c.unit_id=catalog.prerequisite)
    and not exists(select 1 from public.completions c where c.user_id=u and c.unit_id=p_unit)
 then raise exception 'Complete the preceding lesson in this level first'; end if;
 for i in 0..total-1 loop
   if jsonb_typeof(p_answers->i) is distinct from 'string' or length(p_answers->>i)>2000 then raise exception 'Invalid answer'; end if;
   assisted:=false;
   if jsonb_array_length(p_hints)>0 then
     if jsonb_typeof(p_hints->i) is distinct from 'boolean' then raise exception 'Hint flags must be boolean'; end if;
     assisted:=(p_hints->>i)::boolean;
   end if;
   if private.normalized(p_answers->>i)=private.normalized(catalog.answers->>i) then
     correct:=correct+1; weighted:=weighted+case when assisted then 0.5 else 1 end;
   end if;
 end loop;
 if correct::numeric/total>=0.8 then
   awarded:=round(weighted*40/total);
   insert into public.completions(user_id,unit_id,score,xp) values(u,p_unit,correct,awarded) on conflict do nothing;
   if not found then awarded:=0; end if;
 end if;
 return jsonb_build_object('passed',correct::numeric/total>=0.8,'score',correct,'awarded',awarded);
end; $$;
-- Old clients keep working for the original curriculum, using the same scoring rules.
create or replace function public.submit_lesson(p_unit text,p_answers jsonb) returns jsonb
language sql security definer set search_path='' as $$
 select public.submit_lesson_v2(p_unit,p_answers,'[]'::jsonb);
$$;
create or replace function public.course_version() returns integer language sql stable set search_path='' as $$select 2$$;
revoke all on function public.submit_lesson_v2(text,jsonb,jsonb),public.submit_lesson(text,jsonb),public.my_progress() from public,anon,authenticated;
grant execute on function public.submit_lesson_v2(text,jsonb,jsonb),public.submit_lesson(text,jsonb),public.my_progress() to authenticated;
grant execute on function public.course_version(),public.leaderboard() to anon,authenticated;
-- Generated lesson catalog follows; COMMIT is appended after the catalog.
