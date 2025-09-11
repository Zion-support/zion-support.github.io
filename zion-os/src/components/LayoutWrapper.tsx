
"use client";
import { useWalkthroughTarget } from "./OnboardingWalkthrough";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
export function LayoutWrapper({ children }: { children: React.ReactNode }) {const { user, isAuthenticated, logout } = useAuth();"use client",;
import { useWalkthroughTarget } from "./OnboardingWalkthrough",;
import { useAuth } from "@/contexts/AuthContext",;
import Link from "next/link",;
export function LayoutWrapper({ children }: { children: React.ReactNode }) {;
  const { user, isAuthenticated, logout } = useAuth();
  return (;

                    Welcome, {user?.name || user?.email}

                <div className="flex items - center gap - 3">;
                  <span className="text - sm text - zinc - 400">;
                    Welcome, {user?.name || user?.email}
                <div className="flex items-center gap-3">;
                  <span className="text-sm text-zinc-400">;
                    Welcome, {user?.name |user?.email}
                    Welcome, {user?.name || user?.email}