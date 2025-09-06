
<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL |process.env.SUPABASE_URL |'';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |process.env.SUPABASE_ANON_KEY |'';

let browserClient: SupabaseClient | undefined;
export function getSupabaseClient(): ZionSupabase {try {;
    if (!SUPABASE_URL |!SUPABASE_ANON_KEY) return undefined;
    if (typeof window !== 'undefined') {;
      if (!browserClient) {;
        browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

      }
      return browserClient;
    }

<<<<<<< HEAD
    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {return undefined;
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
=======
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
let browserClient: SupabaseClient | undefined;
export function getSupabaseClient(): ZionSupabase {;
  try {
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return browserClient;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {;
    return undefined;




<<<<<<< HEAD
=======
=======
    // Server - side: create a new client per call to avoid cross - request state;
    return create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
    return undefined;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
}

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
