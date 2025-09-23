"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

type AuthUser = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signIn = async (email: string, _password: string) => {
    setUser({ id: "demo", email });
  };

  const signOut = async () => {
    setUser(null);
  };

  const register = async (name: string, email: string, _password: string) => {
    setUser({ id: "demo", email, name });
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, signIn, signOut, login: signIn, logout: signOut, register }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}























































































