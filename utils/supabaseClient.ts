<<<<<<< HEAD
<<<<<<< HEAD
=======


      }
      return browserClient;
    }

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
let browserClient: SupabaseClient | undefined;
export function getSupabaseClient(): ZionSupabase {;
  try {
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
<<<<<<< HEAD

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      return browserClient;
    }
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;

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
=======
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return browserClient;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD


    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
<<<<<<< HEAD
=======
  } catch {;
    return undefined;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }

}

    // Server - side: create a new client per call to avoid cross - request state;
    return create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
<<<<<<< HEAD
  } catch {return undefined;
import { createClient, SupabaseClient } from '@supabase/supabase-js';
export type ZionSupabase = SupabaseClient | undefined;
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
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return undefined;
<<<<<<< HEAD
=======


  }

}

=======
    // Server - side: create a new client per call to avoid cross - request state;
    return create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
    return undefined;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
