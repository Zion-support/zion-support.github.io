import { createClient } from '@supabase/supabase-js';';';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key''
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
import { createClient, SupabaseClient } from '@supabase/supabase-js';';';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';';
let cachedClient: SupabaseClient | null = null;
export function getServerSupabase(): SupabaseClient {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (cachedClient) return cachedClient
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return cachedClient
}
