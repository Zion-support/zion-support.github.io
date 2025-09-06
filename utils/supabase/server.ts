import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https: //placeholder.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
let cachedClient: SupabaseClient | null = null;
export function getServerSupabase(): SupabaseClient {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {;
    auth: { persistSession: false, autoRefreshToken: false }});
  return cachedClient;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;