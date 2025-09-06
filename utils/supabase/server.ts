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
