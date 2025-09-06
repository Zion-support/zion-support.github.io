<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { createClient } from '@supabase/supabase-js';

<<<<<<< HEAD
<<<<<<< HEAD

export function getServerSupabase() {;
  return createClient(supabaseUrl, supabaseKey);
}

=======

const supabaseUrl = process && process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder && placeholder.supabase.co';
const supabaseServiceKey = process && process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key';

=======
// Supabase server utilities
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD


export function getClientSupabase() {
  return createClient(supabaseUrl, process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key');

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function getServerSupabase() {;
  return createClient(supabaseUrl, supabaseKey);
}

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
