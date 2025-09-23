"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Hydrate user from localStorage (basic stub)
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem("zion:user") : null;
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setIsLoading(false);
  }, []);

  const persist = (u: User | null) => {
    try {
      if (u) window.localStorage.setItem("zion:user", JSON.stringify(u));
      else window.localStorage.removeItem("zion:user");
    } catch {}
  };

  const login = async (email: string, _password: string) => {
    const loggedIn: User = {
      id: "local-user",
      name: email.split("@")[0],
      email,
      role: "user",
      onboardingCompleted: false,
    };
    setUser(loggedIn);
    persist(loggedIn);
    router.push("/dashboard");
  };

  const logout = async () => {
    setUser(null);
    persist(null);
    router.push("/");
  };

  const register = async (name: string, email: string, password: string) => {
    // Simple stub: immediately logs in after "registration"
    await login(email, password);
    setUser((u) => (u ? { ...u, name } : u));
  };

  const completeOnboarding = async () => {
    setUser((u) => {
      if (!u) return u;
      const updated = { ...u, onboardingCompleted: true };
      persist(updated);
      return updated;
    });
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
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

