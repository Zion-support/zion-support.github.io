// Supabase utilities
export const supabase = {
  // Add supabase functionality here
  auth: {
<<<<<<< HEAD
=======

    getUser: () => Promise<any>;
    signIn: (credentials: any) => Promise<any>;
    signOut: () => Promise<any>;
  };
}
// Mock Supabase client for development
export function createSupabaseClient(config: SupabaseConfig): SupabaseClient {
  return {
    from: (table: string) => ({
      select: (columns: string = "*") => ({
        eq: (column: string, value: any) => ({
          single: () => Promise.resolve({ data: null, error: null }),
          then: (callback: (result: any) => any) =>
            callback({ data: [], error: null }),
        }),
        insert: (data: any) => ({
          select: (columns: string = "*") => ({
            single: () => Promise.resolve({ data: data, error: null }),
          }),
        }),
        update: (data: any) => ({
          eq: (column: string, value: any) => ({
            select: (columns: string = "*") => ({
              single: () => Promise.resolve({ data: data, error: null }),
            }),
          }),
        }),
        delete: () => ({
          eq: (column: string, value: any) => ({
            then: (callback: (result: any) => any) =>
              callback({ data: null, error: null }),
          }),
        }),
      }),
    }),
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      signIn: (credentials: any) =>
        Promise.resolve({ data: { user: null }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
  };
}
// Default configuration
const supabaseConfig: SupabaseConfig = {
  url:
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key",
};
export const supabase = createSupabaseClient(supabaseConfig);
