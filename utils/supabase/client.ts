>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
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
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
