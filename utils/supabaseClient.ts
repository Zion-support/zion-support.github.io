import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = $2;
const SUPABASE_URL = $2;
const SUPABASE_ANON_KEY = $2;
let browserClient: SupabaseClient | undefined,

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
}