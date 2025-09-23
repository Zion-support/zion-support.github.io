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
    // Restore user from localStorage if present
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("zion_user") : null;
      if (raw) {
        setUser(JSON.parse(raw));
      }
    } catch {}
    setIsLoading(false);
  }, []);

  const persist = (u: User | null) => {
    if (typeof window === "undefined") return;
    if (u) localStorage.setItem("zion_user", JSON.stringify(u));
    else localStorage.removeItem("zion_user");
  };

  const login = async (email: string, _password: string) => {
    const fakeUser: User = {
      id: "local-user",
      name: email.split("@")[0],
      email,
      role: "user",
      onboardingCompleted: false,
    };
    setUser(fakeUser);
    persist(fakeUser);
    router.push("/dashboard");
  };

  const logout = async () => {
    setUser(null);
    persist(null);
    router.push("/");
  };

  const register = async (name: string, email: string, password: string) => {
    // For stub, registration just logs in
    await login(email, password);
    setUser((prev) => (prev ? { ...prev, name } : prev));
  };

  const completeOnboarding = async () => {
    if (user) {
      const updated = { ...user, onboardingCompleted: true };
      setUser(updated);
      persist(updated);
    }
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

