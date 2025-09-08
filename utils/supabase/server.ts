// Mock Supabase client for development
export function getServerSupabase() {
  return {
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          gte: (column: string, value: any) => ({
            data: [],
            error: null
          })
        }),
        order: (column: string, options: any) => ({
          data: [],
          error: null
        })
      })
    })
  };
}