<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js',
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type ZionSupabase = SupabaseClient | undefined,

<<<<<<< HEAD
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '',
=======
const _SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const _SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

let browserClient: SupabaseClient | undefined,

<<<<<<< HEAD
export function getSupabaseClient(): ZionSupabase {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return undefined,
    if (typeof window !== 'undefined') {
      if (!browserClient) {
        browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      }
      return browserClient
    }
    // Server-side: create a new client per call to avoid cross-request state
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  } catch {
    return undefined
  }
=======
export function getSupabaseClient(): ZionSupabase {_try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return undefined;
    if (typeof window !== 'undefined') {
      if (!browserClient) {
        browserClient = createClient(SUPABASE_URL, _SUPABASE_ANON_KEY);}
      return browserClient;
    }
    // Server-side: create a new client per call to avoid cross-request state
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {_return undefined;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}