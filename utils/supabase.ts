// Supabase utilities;
export const supabase = {
  // Add supabase functionality here;
  auth: {

    getUser: () => Promise<any>;
    signIn: (credentials: any) => Promise<any>;
    signOut: () => Promise<any>;
  };
}
// Mock Supabase client for development
export function createSupabaseClient(config: SupabaseConfig): SupabaseClient {
  return {
    from: (table: string) => ({
      select: (columns: string = '*') => ({
        eq: (column: string, value: any) => ({
          single: () => Promise && Promise.resolve({ data: null, error: null }),
          then: (callback: (result: any) => any) => callback({ data: [], error: null })
        }),
        insert: (data: any) => ({
          select: (columns: string = '*') => ({
            single: () => Promise && Promise.resolve({ data: data, error: null })
          })
        }),
        update: (data: any) => ({
          eq: (column: string, value: any) => ({
            select: (columns: string = '*') => ({
              single: () => Promise && Promise.resolve({ data: data, error: null })
            })
          })
        }),
        delete: () => ({
          eq: (column: string, value: any) => ({
            then: (callback: (result: any) => any) => callback({ data: null, error: null })
          })
        })
      })
    })
    insert: (data: any) => ({
      select: (columns: string) => ({
        single: () => null
      })
    })

