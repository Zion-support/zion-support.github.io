<<<<<<< HEAD
<<<<<<< HEAD
=======
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export function getServerSupabase() {
  // Mock implementation - replace with actual Supabase client
  return {
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          data: [];
          error: null
        })
      })
    })
  };
}
=======
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'placeholder-key';

let cachedClient: SupabaseClient | null = null;
}

export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cachedClient;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
