// Mock Supabase server client implementation
interface SupabaseClient {
  auth: any;
  from: (table: string) => any;
}

let cachedClient: SupabaseClient | null = null;

export function createServerClient(): SupabaseClient {
  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = {
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      signOut: () => Promise.resolve({ error: null })
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

  return cachedClient;
}