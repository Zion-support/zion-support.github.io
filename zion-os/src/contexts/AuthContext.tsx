"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
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
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
      return;
    }

    if (session?.user) {
      setUser({
        id: (session.user as any).id,
        name: session.user.name || undefined,
        email: session.user.email!,
        role: (session.user as any).role || "user",
        onboardingCompleted: false,
      });
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, [session, status]);

  const login = async (email: string, password: string) => {

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if ((result as any)?.error) {
        throw new Error((result as any).error);
      }

      router.push("/dashboard");
    } catch (error) {
      throw error as Error;
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const register = async (name: string, email: string, password: string) => {

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      await login(email, password);
    } catch (error) {
      throw error as Error;
    }
    await login(email, password);
  };

  const completeOnboarding = async () => {

    try {
      const response = await fetch("/api/user/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to complete onboarding");
      }

      if (user) {
        setUser({ ...user, onboardingCompleted: true });
      }
    } catch (error) {
      throw error as Error;
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

