<<<<<<< HEAD
import { createClient } from "@supabase/supabase-js",
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https: //placeholder.supabase.co",
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key",

export const supabase = createClient(supabaseUrl, supabaseAnonKey),
=======

const _supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const _supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const _supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
