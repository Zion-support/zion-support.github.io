




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








>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {;
    return undefined;




  }
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

