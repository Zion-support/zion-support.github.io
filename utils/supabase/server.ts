<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { createClient } from "@supabase/supabase-js";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

const supabaseUrl ="
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey ="
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

<<<<<<< HEAD
export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { createClient } from '@supabase/supabase-js';



origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

const supabaseUrl = process && process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder && placeholder.supabase.co';
const supabaseServiceKey = process && process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key';

// Supabase server utilities
import { createClient } from '@supabase/supabase-js';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { createClient } from '@supabase/supabase-js';
=======
}import { createClient } from '@supabase/supabase-js';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}
=======

<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';



origin/cursor/expand-services-advertise-and-build-project-c28b



origin/cursor/automate-test-improve-and-merge-code-2533
export function getServerSupabase() {
  // Mock implementation - replace with actual Supabase client
  return {
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          data: [];
          error: null
        })
      })
    })
  };
}

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export function getServerSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

export function getClientSupabase() {
  return createClient(supabaseUrl, process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key');

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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


<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export function getServerSupabase() {;
  return createClient(supabaseUrl, supabaseKey);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4




ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

export function getServerSupabase() {};
  return createClient(supabaseUrl, supabaseKey);
}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
