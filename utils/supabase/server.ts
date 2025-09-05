<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js',

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https: //placeholder.supabase.co',
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key',
=======

const _supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const _serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

let cachedClient: SupabaseClient | null = null,

<<<<<<< HEAD
export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient,
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }}),
  return cachedClient
=======
export function getServerSupabase(): SupabaseClient {_if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, _serviceRoleKey, _{
    auth: { persistSession: false, _autoRefreshToken: false}});
  return cachedClient;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
