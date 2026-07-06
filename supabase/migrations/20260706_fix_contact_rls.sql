-- =====================================================================
-- INFYNUX — Definitive Contact Form Fix
-- PASTE THIS ENTIRE SCRIPT into Supabase → SQL Editor → New Query → RUN
-- =====================================================================

-- STEP 1: Drop every existing policy to start completely clean
drop policy if exists "Allow anon insert"           on public.contact_inquiries;
drop policy if exists "Allow authenticated select"  on public.contact_inquiries;
drop policy if exists "anon_insert"                 on public.contact_inquiries;
drop policy if exists "Allow insert for all"        on public.contact_inquiries;
drop policy if exists "Enable insert for all users" on public.contact_inquiries;

-- STEP 2: Make sure RLS is on
alter table public.contact_inquiries enable row level security;

-- STEP 3: Create the INSERT policy for the anon role
create policy "contact_anon_insert"
  on public.contact_inquiries
  for insert
  to anon
  with check (true);

-- STEP 4: Grant schema + table-level privileges to anon
--         *** THIS IS THE FIX — RLS policy alone is not enough. ***
--         PostgreSQL requires BOTH:
--           (a) a table-level GRANT that allows the role to access the table
--           (b) an RLS policy that allows the specific rows/operation
--         Without the GRANT, PostgREST returns HTTP 401 + pg code 42501
--         ("new row violates row-level security policy") even if the
--         policy itself is correct.
grant usage  on schema public                    to anon;
grant insert on table  public.contact_inquiries  to anon;

-- STEP 5: Verify — you should see the green "success" message
select
  schemaname,
  tablename,
  policyname,
  cmd,
  roles
from pg_policies
where tablename = 'contact_inquiries';
