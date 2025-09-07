// Mock Supabase client type definition
interface SupabaseClient {
  auth: any;
  from: (table: string) => any;
}

export type ZionSupabase = SupabaseClient | undefined;

let browserClient: SupabaseClient | undefined;

export function getSupabaseClient(): ZionSupabase {
  if (typeof window === 'undefined') {
    return undefined;
  }

  if (!browserClient) {
    browserClient = {
      auth: {
        signIn: () => Promise.resolve({ data: null, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        getUser: () => Promise.resolve({ data: { user: null }, error: null })
      },
      from: (table: string) => ({
        select: (columns?: string) => ({
          eq: (column: string, value: any) => ({
            eq: (column2: string, value2: any) => ({
              maybeSingle: () => Promise.resolve({ data: null, error: null })
            })
          })
        }),
        insert: (data: any) => Promise.resolve({ data: null, error: null }),
        update: (data: any) => ({
          eq: (column: string, value: any) => ({
            eq: (column2: string, value2: any) => Promise.resolve({ data: null, error: null })
          })
        }),
        delete: () => Promise.resolve({ data: null, error: null })
      })
    };
  }

  return browserClient;
}