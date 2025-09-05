<<<<<<< HEAD
=======
<<<<<<< HEAD
export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  },
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null })
  })
};
=======
<<<<<<< HEAD
=======
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
>>>>>>> main
>>>>>>> main
export const supabase = { auth: { signIn: () => Promise.resolve({ data: null,error: null }),signOut: () => Promise.resolve({ error: null }),getUser: () => Promise.resolve({ data: { user: null },error: null }) },from: (_table: string) => ({ select: () => Promise.resolve({ data: [],error: null }),insert: () => Promise.resolve({ data: null,error: null }),update: () => Promise.resolve({ data: null,error: null }),delete: () => Promise.resolve({ data: null,error: null }) }) };
>>>>>>> main
