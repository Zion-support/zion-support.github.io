// Mock Supabase client implementation
export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  },
  from: (_table: string) => ({
    select: (_columns?: string) => ({
      eq: (_column: string, _value: any) => ({
        eq: (_column2: string, _value2: any) => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null })
        })
      })
    }),
    insert: (_data: any) => Promise.resolve({ data: null, error: null }),
    update: (_data: any) => ({
      eq: (_column: string, _value: any) => ({
        eq: (_column2: string, _value2: any) => Promise.resolve({ data: null, error: null })
      })
    }),
    delete: () => Promise.resolve({ data: null, error: null })
  })
};