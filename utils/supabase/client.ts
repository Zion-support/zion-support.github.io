<<<<<<< HEAD
import { createClient } from "@supabase/supabase-js",;
;
const supabaseUrl =;
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",;
const supabaseAnonKey =;
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key",;
;
export const supabase = createClient(supabaseUrl, supabaseAnonKey),;
=======
import { createClient } from "@supabase/supabase-js",
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https: //placeholder.supabase.co",
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key",

export const supabase = createClient(supabaseUrl, supabaseAnonKey),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
