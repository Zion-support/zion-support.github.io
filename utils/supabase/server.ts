<<<<<<< HEAD
=======
// Supabase server utilities
import { createClient } from '@supabase/supabase-js';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


<<<<<<< HEAD
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export function getServerSupabase() {;
  return createClient(supabaseUrl, supabaseKey);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
