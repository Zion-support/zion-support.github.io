import { supabaseStorageAdapter } from './safeStorageAdapter, ';
// Mock implementation;
const createMockSupabaseClient = () => ({
    auth: {
        persistSession: true;
        autoRefreshToken: true;
        storage: supabaseStorageAdapter;
    },
});
        storage: supabaseStorageAdapter;}});
export const supabase = createMockSupabaseClient();
