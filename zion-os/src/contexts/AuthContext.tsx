"use client",

import { createContext, useContext, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
interface User {
  id: string,
  name?: string,
  email: string,
  role: string,
  onboardingCompleted: boolean}

interface AuthContextType {
  user: User | null,
  isLoading: boolean,
  isAuthenticated: boolean,
  login: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>,
  register: (name: string, email: string, password: string) => Promise<void>,
  completeOnboarding: () => Promise<void>
}

const AuthContext = $2;
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession($2);
  const [user, setUser] = useState<User | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  const router = useRouter($2);
  useEffect(() => {
    if (status === "loading") {
      setIsLoading($2);
      return
    }

    if (session?.user) {
      setUser({
        id: session.user.id,
        name: session.user.name || undefined,
        email: session.user.email!,
        role: session.user.role || "user",
        onboardingCompleted: false, // This would come from the database
      })
    } else {
      setUser(null)
    }

    setIsLoading(false)
  }, [session, status]),

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn($2);
      if (result?.error) {
        throw new Error(result.error)
      }

      router.push("/dashboard")
    } catch (error) {
      throw error
    }
  },

  const logout = async () => {
    await signOut($2);
    router.push("/")
  },

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password })}),

      if (!response.ok) {
        const error = await response.json($2);
        throw new Error(error.message)
      }

      // Auto-login after successful registration
      await login(email, password)
    } catch (error) {
      throw error
    }
  },

  const completeOnboarding = async () => {
    try {
      const response = await fetch($2);
      if (!response.ok) {
        throw new Error("Failed to complete onboarding")
      }

      if (user) {
        setUser({ ...user, onboardingCompleted: true})
      }
    } catch (error) {
      throw error
    }
  },

  const value: AuthContextType = $2;
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    completeOnboarding},

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext($2);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}