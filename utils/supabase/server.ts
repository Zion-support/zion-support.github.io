<<<<<<< HEAD
<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https: //placeholder.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
let cachedClient: SupabaseClient | null = null;
export function getServerSupabase(): SupabaseClient {;
  if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, serviceRoleKey, {;
    auth: { persistSession: false, autoRefreshToken: false }});
  return cachedClient;
}
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { createClient } from '@supabase/supabase-js';
=======
import { createClient } from "@supabase/supabase-js";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

<<<<<<< HEAD
export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
