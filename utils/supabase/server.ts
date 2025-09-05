
const _supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const _serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

let cachedClient: SupabaseClient | null = null;

export function getServerSupabase(): SupabaseClient {_if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, _serviceRoleKey, _{
    auth: { persistSession: false, _autoRefreshToken: false}});
  return cachedClient;
}
