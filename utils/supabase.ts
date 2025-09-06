// Supabase utilities;
export const supabase = {
  // Add supabase functionality here;
  auth: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main

    getUser: () => Promise<any>;
    signIn: (credentials: any) => Promise<any>;
    signOut: () => Promise<any>;
  };
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
// Mock Supabase client for development
export function createSupabaseClient(config: SupabaseConfig): SupabaseClient {
  return {
    from: (table: string) => ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
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
<<<<<<< HEAD
=======
=======
      select: (columns: string = '*') => ({
        eq: (column: string, value: any) => ({
          single: () => Promise && Promise.resolve({ data: null, error: null }),
          then: (callback: (result: any) => any) => callback({ data: [], error: null })
        }),
        insert: (data: any) => ({
          select: (columns: string = '*') => ({
            single: () => Promise && Promise.resolve({ data: data, error: null })
          })
        }),
        update: (data: any) => ({
          eq: (column: string, value: any) => ({
            select: (columns: string = '*') => ({
              single: () => Promise && Promise.resolve({ data: data, error: null })
            })
          })
        }),
        delete: () => ({
          eq: (column: string, value: any) => ({
            then: (callback: (result: any) => any) => callback({ data: null, error: null })
          })
        })
      })
    }),
    auth: {
      getUser: () => Promise && Promise.resolve({ data: { user: null }, error: null }),
      signIn: (credentials: any) => Promise && Promise.resolve({ data: { user: null }, error: null }),
      signOut: () => Promise && Promise.resolve({ error: null })
    }
  };
}
// Default configuration
const supabaseConfig: SupabaseConfig = {
  url: process && process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project && project.supabase.co',
  anonKey: process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'
};
export const supabase = createSupabaseClient(supabaseConfig);

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    sign_in: (email: string, password: string) => null,
    sign_out: () => null,
    get_user: () => null;
  },
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        single: () => null;
      });
    }),
    insert: (data: any) => ({
      select: (columns: string) => ({
<<<<<<< HEAD
        single: () => null;
      });
    });
  });
}
<<<<<<< HEAD
  });
};
}
=======
<<<<<<< HEAD
  });
};
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  });
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
