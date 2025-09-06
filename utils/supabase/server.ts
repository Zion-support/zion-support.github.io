<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'placeholder-key';

let cachedClient: SupabaseClient | null = null;

export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cachedClient;
=======
// Mock Supabase server utility
export function getServerSupabase() {
  return {
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          gte: (column: string, value: any) => ({
            order: (column: string, options: any) => Promise.resolve({ data: [], error: null })
          })
        })
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => Promise.resolve({ data: null, error: null })
      })
    })
  };
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
