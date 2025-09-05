<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js',;
;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key',;
;
let cachedClient:SupabaseClient | null = null,;
;
export function getServerSupabase():SupabaseClient {;
  if (cachedClient) return cachedClient,;
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {;
    auth:{ persistSession:false, autoRefreshToken:false }}),;
  return cachedClient,;
}
=======
import { createClient, SupabaseClient } from '@supabase/supabase-js',

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https: //placeholder.supabase.co',
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key',
let cachedClient: SupabaseClient | null = null,

export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient,
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }}),
  return cachedClient}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
