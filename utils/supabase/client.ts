import { createClient } from "@supabase/supabase-js";

<<<<<<< HEAD
=======
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
