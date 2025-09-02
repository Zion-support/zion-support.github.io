// Mock Supabase client for development
export const supabase = {
  auth: {
    signI,
    n: () => Promise.resolve({ dat,
    a: null, error: null }), signOut: () => Promise.resolve({ erro,
    r: null }), getUser: () => Promise.resolve({ dat,
    a: { use,
    r: null }, error: null })}, from: (_table: string) => ({
    selec,
    t: () => Promise.resolve({ dat,
    a: [], error: null }), insert: () => Promise.resolve({ dat,
    a: null, error: null }), update: () => Promise.resolve({ dat,
    a: null, error: null }), delete: () => Promise.resolve({ dat,
    a: null, error: null })})
}