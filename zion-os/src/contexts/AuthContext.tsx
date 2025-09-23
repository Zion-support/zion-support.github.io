"use client";
import React, { createContext, useContext } from "react";

type AuthContextValue = {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const signIn = async () => Promise.resolve();
  const signUp = async () => Promise.resolve();

  return (
    <AuthContext.Provider value={{ signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
