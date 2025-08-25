<<<<<<< HEAD:utils.disabled/supabase/client.ts
// Minimal supabase client for fallback functionality
export const supabase = {
  from: (table: string) => ({
    select: (columns: string, options?: any) => ({
      order: (column: string, orderOptions?: any) => Promise.resolve({ data: [], error: null, count: 0 }),
      eq: (column: string, value: any) => Promise.resolve({ data: [], error: null, count: 0 })
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => Promise.resolve({ data: [], error: null }),
      neq: (column: string, value: any) => Promise.resolve({ data: [], error: null })
    }),
    delete: () => ({
      eq: (column: string, value: any) => Promise.resolve({ data: [], error: null })
    })
  }),
  channel: (name: string) => ({
    on: (event: string, options: any, callback: (payload: any) => void) => ({
      subscribe: () => ({})
    })
  }),
  removeChannel: (channel: any) => {}
};
=======
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/supabase/client.ts
