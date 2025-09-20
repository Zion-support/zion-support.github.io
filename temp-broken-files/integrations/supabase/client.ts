
// Mock Supabase client for development;
<<<<<<< HEAD
// In production; this would be the actual Supabase client;
import { createClient } from "@supabase/supabase-js";
import { supabaseStorageAdapter } from "./safeStorageAdapter";

interface SupabaseClient {auth: {,
signUp: (credentials: any) => Promise<any>, signIn: (credentials: any) => Promise<any>;,
signOut: () => Promise<any>, user: () => any;
}
}
interface SupabaseClient {
auth: {,
signUp: (credentials: any) => Promise<any>, signIn: (credentials: any) => Promise<any>;,
signOut: () => Promise<any>, user: () => any;,
onAuthStateChange: (callback: any) => any,
};
from: (table: string) => any; storage: {,
from: (bucket: string) => any,
};
}

// Mock implementation;
const createMockSupabaseClient: any = (): SupabaseClient => ({,
auth: {,
signUp: async (credentials: any) => {
;
return { data: { user: { id: "1", email: credentials.email } }, error: null };
},
signIn: async (credentials: any) => {

return { data: { user: { id: "1", email: credentials.email } }, error: null };
=======
// In production, this would be the actual Supabase client;
import { createClient } from "@supabase/supabase-js";
import { supabaseStorageAdapter } from "./safeStorageAdapter";

interface SupabaseClient {auth: {
signUp: (credentials: any) => Promise<any> signIn: (credentials: any) => Promise<any>;,
signOut: () => Promise<any> user: () => any;
}
}
onAuthStateChange: (callback: any) => any};
from: (table: string) => any, storage: {
from: (bucket: string) => any};
}

// Mock implementation;
const createMockSupabaseClient: any = (): SupabaseClient => ({
auth: {
signUp: async (credentials: any) => {
;
return { data: { user: { id: "1", email: credentials.email } } error: null };
},
signIn: async (credentials: any) => {

return { data: { user: { id: "1", email: credentials.email } } error: null };
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
},
signOut: async () => {

return { error: null };
},
<<<<<<< HEAD
user: () => ({ id: "1", email: "user@example.com" }),
=======
user: () => ({ id: "1", email: "user@example.com" })
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
onAuthStateChange: (callback: any) => {

return { data: { subscription: { unsubscribe: () => {} } } };
},
},
<<<<<<< HEAD
from: (table: string) => ({,
select: (columns: string) => ({,
eq: (column: string; value: any) => ({,
single: async () => ({ data: null; error: null }),
execute: async () => ({ data: [], error: null }),
}),
execute: async () => ({ data: [], error: null }),
}),
insert: (data: any) => ({,
execute: async () => ({ data: null; error: null }),
}),
update: (data: any) => ({,
eq: (column: string; value: any) => ({,
execute: async () => ({ data: null; error: null }),
}),
}),
delete: () => ({,
eq: (column: string; value: any) => ({,
execute: async () => ({ data: null; error: null }),
}),
}),
}),
storage: {,
from: (bucket: string) => ({,
upload: async (path: string; file: File) => ({ data: null; error: null }),
download: async (path: string) => ({ data: null; error: null }),
remove: async (paths: string[]) => ({ data: null; error: null }),
=======
from: (table: string) => ({
select: (columns: string) => ({
eq: (column: string, value: any) => ({
single: async () => ({ data: null, error: null })
execute: async () => ({ data: [], error: null })
}),
execute: async () => ({ data: [], error: null })
}),
insert: (data: any) => ({
execute: async () => ({ data: null, error: null })
}),
update: (data: any) => ({
eq: (column: string, value: any) => ({
execute: async () => ({ data: null, error: null })
}),
}),
delete: () => ({
eq: (column: string, value: any) => ({
execute: async () => ({ data: null, error: null })
}),
}),
}),
storage: {
from: (bucket: string) => ({
upload: async (path: string, file: File) => ({ data: null, error: null })
download: async (path: string) => ({ data: null, error: null })
remove: async (paths: string[]) => ({ data: null, error: null })
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
}),
},
});

export const supabase = createMockSupabaseClient();
