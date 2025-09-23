"use client";
import React, { createContext, useContext } from "react";

<<<<<<< HEAD
type AuthContextValue = {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
};
=======
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047

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
<<<<<<< HEAD
=======

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
    // Initialize from localStorage if present
    try {
      const stored = typeof window !== "undefined" ? window.localStorage.getItem("zion-os:user") : null;
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {}
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login
    const mockUser: User = {
      id: "local-user",
      name: email.split("@")[0],
      email,
      role: "user",
      onboardingCompleted: false,
    };
    setUser(mockUser);
    try { window.localStorage.setItem("zion-os:user", JSON.stringify(mockUser)); } catch {}
    router.push("/dashboard");
  };

  const logout = async () => {
    setUser(null);
    try { window.localStorage.removeItem("zion-os:user"); } catch {}
    router.push("/");
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock register
    await login(email, password);
  };

  const completeOnboarding = async () => {
    if (user) {
      const updated = { ...user, onboardingCompleted: true };
      setUser(updated);
      try { window.localStorage.setItem("zion-os:user", JSON.stringify(updated)); } catch {}
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
<<<<<<< HEAD

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
