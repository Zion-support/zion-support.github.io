// Supabase server utilities
import { createClient } from '@supabase/supabase-js';




export function getClientSupabase() {
  return createClient(supabaseUrl, process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key');

export function getServerSupabase() {;
  return createClient(supabaseUrl, supabaseKey);
}


