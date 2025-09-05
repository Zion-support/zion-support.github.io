import { createClient } from &quot;@supabase/supabase-js&quot;;

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || &quot;https://placeholder.supabase.co&quot;;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || &quot;placeholder-key&quot;;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
