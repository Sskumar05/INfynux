-- ============================================================
-- INFYNUX — Contact Inquiries Table
-- Run this in Supabase SQL Editor:
--   Dashboard → SQL Editor → New Query → paste → Run
-- ============================================================

-- Drop old contact_submissions table if it exists and is empty
-- (comment this out if you want to keep old data)
-- DROP TABLE IF EXISTS public.contact_submissions;

-- Create the canonical contact_inquiries table
create table if not exists public.contact_inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) >= 2 and char_length(name) <= 100),
  email       text not null check (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  message     text not null check (char_length(message) >= 10 and char_length(message) <= 5000),
  created_at  timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.contact_inquiries enable row level security;

-- Drop any existing policies to avoid conflicts
drop policy if exists "Allow anon insert" on public.contact_inquiries;
drop policy if exists "Allow authenticated select" on public.contact_inquiries;

-- Allow INSERT from the anon key (used by the contact form server function)
create policy "Allow anon insert"
  on public.contact_inquiries
  for insert
  to anon
  with check (true);

-- Allow authenticated users (admins) to read all rows
create policy "Allow authenticated select"
  on public.contact_inquiries
  for select
  to authenticated
  using (true);

-- Confirm success
select 'contact_inquiries table ready ✓' as status;
