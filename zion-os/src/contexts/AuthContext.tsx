"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

<<<<<<< HEAD
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
=======
type AuthUser = { id: string; email: string } | null;

type AuthContextValue = {
	user: AuthUser;
	signIn: (email: string, _password: string) => Promise<void>;
	signOut: () => Promise<void>;
>>>>>>> origin/main
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

<<<<<<< HEAD
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
=======
export function AuthProvider({ children }: { children: React.ReactNode }): React.ReactElement {
	const [user, setUser] = useState<AuthUser>(null);

	const signIn = async (email: string): Promise<void> => {
		setUser({ id: "demo-user", email });
	};

	const signOut = async (): Promise<void> => {
		setUser(null);
	};

	const value = useMemo<AuthContextValue>(() => ({ user, signIn, signOut }), [user]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
	const ctx = useContext(AuthContext);
	if (!ctx) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return ctx;
}

>>>>>>> origin/main





  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });


      router.push("/dashboard");
    } catch (error) {
      throw error as Error;
    }
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


      await login(email, password);
    } catch (error) {
      throw error as Error;
    }
  };

  const completeOnboarding = async () => {
    try {
      const response = await fetch("/api/user/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (user) {
        setUser({ ...user, onboardingCompleted: true });
      }
    } catch (error) {
      throw error as Error;
    }
  };



export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
