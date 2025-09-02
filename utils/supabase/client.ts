// Mock: Supabase client for development
export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ data: nul,l, error: null, }),
    signOut: () => Promise.resolve({ error: null, }),
    getUser: () => Promise.resolve({ data: { user: null, }, error: null, })},
  from: (_table: string) => ({
    select: () => Promise.resolve({ data: [,], error: null, }),
    insert: () => Promise.resolve({ data: nul,l, error: null, }),
    update: () => Promise.resolve({ data: nul,l, error: null, }),
    delete: () => Promise.resolve({ data: nul,l, error: null, })})
}