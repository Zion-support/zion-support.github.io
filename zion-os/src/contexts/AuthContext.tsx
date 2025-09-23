"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void> | void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function signOut() {
    setIsAuthenticated(false);
  }

  async function signIn(_email: string, _password: string) {
    setIsAuthenticated(true);
  }

  const value: AuthContextValue = { isAuthenticated, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    return {
      isAuthenticated: false,
      signIn: async () => {},
      signOut: () => {},
    };
  }
  return ctx;
}

export default AuthContext;























































































