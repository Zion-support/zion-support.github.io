// Supabase utilities
export const supabase = {
  // Add supabase functionality here
  auth: {
    signIn: (email: string, password: string) => null
    signOut: () => null
    getUser: () => null
  }
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        single: () => null
      })
    })
    insert: (data: any) => ({
      select: (columns: string) => ({
        single: () => null
      })
    })
<<<<<<< HEAD
  })
}
=======
  });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
