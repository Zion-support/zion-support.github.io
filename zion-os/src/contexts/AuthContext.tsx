"use client";
import { createContext, useContext, useState } from "react";
type AuthContextType = { login: (email: string, password: string) => Promise<void>; register: (name: string, email: string, password: string) => Promise<void>; };
const AuthContext = createContext<AuthContextType>({ login: async () => {}, register: async () => {} });
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const login = async () => {};
  const register = async () => {};
  return <AuthContext.Provider value={{ login, register }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
