-- =============================================================================
-- INFYNUX Contact Form — Complete Supabase Setup
-- Run this ONCE in: Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================================

-- 1. Create the table (safe to run even if it already exists)
create table if not exists public.contact_inquiries (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  message    text        not null,
  created_at timestamptz not null default now()
);

-- 2. Enable Row Level Security
alter table public.contact_inquiries enable row level security;

-- 3. Drop every existing policy so we start clean (idempotent)
do $$
declare
  pol record;
begin
  for pol in
    select policyname
    from pg_policies
    where schemaname = 'public' and tablename = 'contact_inquiries'
  loop
    execute format(
      'drop policy if exists %I on public.contact_inquiries',
      pol.policyname
    );
  end loop;
end
$$;

-- 4. Create the single INSERT policy for the anon role
create policy "anon_can_insert"
  on public.contact_inquiries
  for insert
  to anon
  with check (true);

-- 5. Grant table-level privileges
--    *** THIS IS THE REQUIRED FIX ***
--    An RLS policy alone is not enough.
--    PostgreSQL requires BOTH:
--      • A table-level GRANT (this step)
--      • An RLS policy that allows the operation (step 4)
--    Without this GRANT, every insert returns HTTP 401 / pg code 42501
--    ("new row violates row-level security policy") even when the policy exists.
grant usage  on schema public                    to anon;
grant insert on table  public.contact_inquiries  to anon;

-- 6. Verify — the result set must show the "anon_can_insert" policy
select
  policyname,
  cmd,
  roles,
  qual,
  with_check
from pg_policies
where schemaname = 'public'
  and tablename  = 'contact_inquiries';
