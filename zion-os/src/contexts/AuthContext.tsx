"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthUser = { id: string; email: string } | null;

type AuthContextValue = {
  user: AuthUser;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("auth:user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (user) window.localStorage.setItem("auth:user", JSON.stringify(user));
    else window.localStorage.removeItem("auth:user");
  }, [user]);

  const signIn = async (email: string, _password: string) => {
    setUser({ id: "demo", email });
  };

  const signOut = async () => {
    setUser(null);
  };

  const value = useMemo<AuthContextValue>(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
























































































