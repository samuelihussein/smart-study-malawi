import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://famvbzvtfjlnzvucltaw.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbXZienZ0Zmpsbnp2dWNsdGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NzU0MjcsImV4cCI6MjA5MDM1MTQyN30.uV2r01AfdsfBD9Lzh8FCWlN08ae74hf7XZCBSVApuJU';

export function createClient() {
  return createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
