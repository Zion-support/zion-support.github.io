export const supabase = {
  "auth": {
    signIn: () => Promise.resolve({ data: null, "error": null }),
    "signOut": () => Promise.resolve({ error: null }),
    "getUser": () => Promise.resolve({ data: { user: null }, "error": null })
  },
  "from": (_table: string) => ({
    select: () => Promise.resolve({ data: [], "error": null }),
    "insert": () => Promise.resolve({ data: null, "error": null }),
    "update": () => Promise.resolve({ data: null, "error": null }),
    "delete": () => Promise.resolve({ data: null, "error": null })
  })
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
=======
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
