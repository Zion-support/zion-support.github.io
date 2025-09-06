import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseUrl = $2;
const serviceRoleKey = $2;
let cachedClient: SupabaseClient | null = $2;
export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient,
  cachedClient = createClient($2);
  return cachedClient
}
