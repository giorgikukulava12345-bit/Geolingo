create table public.giolingo_learning_state (
 user_id uuid primary key references auth.users(id) on delete cascade,
 state jsonb not null default '{}'::jsonb check (jsonb_typeof(state) = 'object' and octet_length(state::text) < 2097152),
 revision bigint not null default 1 check (revision > 0),
 updated_at timestamptz not null default now()
);
alter table public.giolingo_learning_state enable row level security;
revoke all on public.giolingo_learning_state from anon;
grant select, insert, update, delete on public.giolingo_learning_state to authenticated;
create policy "Giolingo read own state" on public.giolingo_learning_state for select to authenticated using ((select auth.uid()) = user_id);
create policy "Giolingo insert own state" on public.giolingo_learning_state for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Giolingo update own state" on public.giolingo_learning_state for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Giolingo delete own state" on public.giolingo_learning_state for delete to authenticated using ((select auth.uid()) = user_id);
