<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export function createServerClient() {
  return createClient(supabaseUrl, supabaseKey);
}

export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
=======
import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseUrl = $2;
const serviceRoleKey = $2;
let cachedClient: SupabaseClient | null = $2;
export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient,
  cachedClient = createClient($2);
  return cachedClient
}

if (!supabaseServiceKey) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
}

export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export function getClientSupabase() {
  return createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
}