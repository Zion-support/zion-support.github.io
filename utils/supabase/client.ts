<<<<<<< HEAD
// Mock Supabase client for development

export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ data: null, error: null }), signOut: () => Promise.resolve({ error: null }), getUser: () => Promise.resolve({ data: { user: null }, error: null })},
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }), insert: () => Promise.resolve({ data: null, error: null }), update: () => Promise.resolve({ data: null, error: null }), delete: () => Promise.resolve({ data: null, error: null })})};
// Mock: Supabase client for development
export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ data: nul,l, error: null}),
    signOut: () => Promise.resolve({ error: null}),
    getUser: () => Promise.resolve({ data: { user: null}, error: null})},
  from: (_table: string) => ({
    select: () => Promise.resolve({ data: [], error: null}),
    insert: () => Promise.resolve({ data: nul,l, error: null}),
    update: () => Promise.resolve({ data: nul,l, error: null}),
    delete: () => Promise.resolve({ data: nul,l, error: null})});
}
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
    a: null, error: null })});
}
    signIn: () => Promise.resolve({ data: null, error: null }), signOut: () => Promise.resolve({ error: null }), getUser: () => Promise.resolve({ data: { user: null }, error: null })}, from: (_table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }), insert: () => Promise.resolve({ data: null, error: null }), update: () => Promise.resolve({ data: null, error: null }), delete: () => Promise.resolve({ data: null, error: null })});
}
    signIn: () => Promise.resolve({ data: null, error: null }), signOut: () => Promise.resolve({ error: null }), getUser: () => Promise.resolve({ data: { user: null }, error: null })}, from: () => ({
    select: () => Promise.resolve({ data: [], error: null }), insert: () => Promise.resolve({ data: null, error: null }), update: () => Promise.resolve({ data: null, error: null }), delete: () => Promise.resolve({ data: null, error: null })});
}
=======
// Mock Supabase client for development export const supabase = { auth: { signIn () => Promise.resolve({ data: null, error: null }), signOut: () => Promise.resolve({ error: null }), getUser: () => Promise.resolve({ data: { user null }, error: null }), }, from: (table string) => ({ select: () => Promise.resolve({ data: [], error: null }), insert: () => Promise.resolve({ data: null, error: null }), update: () => Promise.resolve({ data: null, error: null }), delete: () => Promise.resolve({ data: null, error: null }), }), }; 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
