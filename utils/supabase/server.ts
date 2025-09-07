<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseUrl = $2;
const serviceRoleKey = $2;
let cachedClient: SupabaseClient | null = $2;
<<<<<<< HEAD
export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient,
  cachedClient = createClient($2);
  return cachedClient
}

if (!supabaseServiceKey) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
}

export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseServiceKey, {
=======
>>>>>>> merged-prs-20250907-203621
export function getServerSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
<<<<<<< HEAD
=======
  return cachedClient;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

export function getClientSupabase() {
  return createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
}
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
