"use client";

import { createContext, useContext, useState } from "react";

interface User {
  id: string;
  name?: string;
  email: string;
  role: string;
  onboardingCompleted: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  completeOnboarding: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading] = useState(false);

  const login = async (email: string) => {
    setUser({ id: "mock", email, role: "user", onboardingCompleted: false });
  };

  const logout = async () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string) => {
    setUser({ id: "mock", name, email, role: "user", onboardingCompleted: false });
  };

  const completeOnboarding = async () => {
    if (user) setUser({ ...user, onboardingCompleted: true });
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    completeOnboarding,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
