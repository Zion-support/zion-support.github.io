<<<<<<< HEAD


=======
<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;
<<<<<<< HEAD
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL |process.env.SUPABASE_URL |'';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |process.env.SUPABASE_ANON_KEY |'';
=======
<<<<<<< HEAD
import { createClient, SupabaseClient } from '@supabase/supabase-js',;
export type ZionSupabase = SupabaseClient | undefined,;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
let browserClient: SupabaseClient | undefined;
export function getSupabaseClient(): ZionSupabase {try {;
    if (!SUPABASE_URL |!SUPABASE_ANON_KEY) return undefined;
    if (typeof window !== 'undefined') {;
      if (!browserClient) {;
        browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      }
      return browser_client;
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD
    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {return undefined;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {;
    return undefined;
<<<<<<< HEAD


  }

}

=======
    // Server - side: create a new client per call to avoid cross - request state;
    return create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
    return undefined;
  }
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
