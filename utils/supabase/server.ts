<<<<<<< HEAD
<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

let cachedClient: SupabaseClient | null = null;

export function createServerClient() {
  return createClient(supabaseUrl, supabaseServiceKey);
}

=======
import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseUrl = $2;
const serviceRoleKey = $2;
let cachedClient: SupabaseClient | null = $2;
>>>>>>> merged-prs-20250907-203621
export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
  return cachedClient;
}

export function getClientSupabase() {
  return createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
}
<<<<<<< HEAD
=======
const supabaseUrl ="
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey ="
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

import { createClient } from '@supabase/supabase-js';

origin/cursor/expand-services-advertise-and-build-project-c28b

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
import { createClient } from '@supabase/supabase-js';

export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}

// Supabase server utilities
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key';

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';

export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}

export function getClientSupabase() {
  return createClient(supabaseUrl, process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key');

origin/cursor/expand-services-advertise-and-build-project-c28b

import { create_client } from '@supabase / supabase - js';
;
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabase_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder - key';
;
export /**
 * getServerSupabase - Function description
 */
function getServerSupabase() {
  return create_client (supabase_url, supabase_key);
}

export function getServerSupabase() {;
  return createClient(supabaseUrl, supabaseKey);
>>>>>>> origin/chore/fix-lint-and-merge
}
=======
>>>>>>> merged-prs-20250907-203621
