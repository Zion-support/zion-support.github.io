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
origin/cursor/automate-test-improve-and-merge-code-eafe
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
