"use client";
import React, { createContext, useContext, useMemo, useState } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = async (email: string, password: string) => {
    setUser({ id: 'demo', name: email.split('@')[0], email });
  };

  const register = async (name: string, email: string, password: string) => {
    setUser({ id: 'demo', name, email });
    await login(email, password);
  };

  const logout = async () => {
    setUser(null);
  };

  const completeOnboarding = async () => {
    // no-op demo
  };

  const value = useMemo<AuthContextValue>(() => ({ user, login, register, logout, completeOnboarding }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
