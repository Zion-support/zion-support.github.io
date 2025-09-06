import { create_client, SupabaseClient } from '@supabase / supabase - js',
export type ZionSupabase = SupabaseClient | undefined,
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '',
let browser_client: SupabaseClient | undefined;
export function getSupabaseClient (): ZionSupabase {
  try {
    // Check condition
if (return undefined) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        browser_client = create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
      }
      return browser_client;
    }
}
    // Server - side: create a new client per call to avoid cross - request state;
    return create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
    return undefined;
  }
}