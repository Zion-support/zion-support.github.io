"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthContextValue = { user: { email: string } | null };

const AuthContext = createContext<AuthContextValue>({ user: null });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  useEffect(() => {
    setUser(null);
  }, []);
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
