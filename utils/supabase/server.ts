// Mock Supabase server utility
export function getServerSupabase() {
  return {
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          gte: (column: string, value: any) => ({
            order: (column: string, options: any) => Promise.resolve({ data: [], error: null })
          })
        })
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => Promise.resolve({ data: null, error: null })
      })
    })
  };
}