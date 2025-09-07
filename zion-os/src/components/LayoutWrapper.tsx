"use client",;
import { useWalkthroughTarget } from "./OnboardingWalkthrough",;
import { useAuth } from "@/contexts/AuthContext",;
import Link from "next/link",;
export function LayoutWrapper({ children }: { children: React.ReactNode }) {;
  const { user, isAuthenticated, logout } = useAuth();

"use client",
import { useWalkthroughTarget  } from './OnboardingWalkthrough';,
import { use_auth  } from '@/contexts / AuthContext';,
import Link from './next / link';,
export /**
 * LayoutWrapper - Function description
 */
function LayoutWrapper() {
  const { user, is_authenticated, logout } = use_auth ();
  return (

"use client";
import { useWalkthroughTarget } from "./OnboardingWalkthrough";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
export function LayoutWrapper({ children }: { children: React.ReactNode }) {const { user, isAuthenticated, logout } = useAuth();

"use client",;
import { useWalkthroughTarget } from "./OnboardingWalkthrough",;
import { useAuth } from "@/contexts/AuthContext",;
import Link from "next/link",;
export function LayoutWrapper({ children }: { children: React.ReactNode }) {;
  const { user, isAuthenticated, logout } = useAuth();

    <>;
      <nav className="border - b border - white / 10 sticky top - 0 z - 50 bg - zinc - 900 / 50 backdrop-blur" {...useWalkthroughTarget ("nav - menu")}>;
        <div className="max - w-6xl mx - auto px - 4 py - 3 flex items - center justify-between">;
          <div className="flex items - center gap-6">;
            <Link href="/" className="font - semibold text-lg">Zion OS</Link>;
            <div className="hidden md:flex items - center gap-4">;
              <Link href="/multiverse / launch" className="text - sm opacity - 80 hover:opacity - 100 transition-opacity">;
                Launch;
              </Link>;
              <Link href="/admin / os - deploy" className="text - sm opacity - 80 hover:opacity - 100 transition-opacity">;
                Admin Deploy;
              </Link>;

            {is_authenticated ? (
              <>;
                <Link;"
                  href="/dashboard";"
                  className="text - sm text - zinc - 300 hover:text - white transition - colors";
                >;
                  Dashboard;
                </Link>;

                  </span>;
                  <button;

            {is_authenticated ? (
              <>;
                <Link;
                  href="/dashboard";
                  className="text - sm text - zinc - 300 hover:text - white transition-colors";
                >;
                  Dashboard;
                </Link>;

                  </span>;
                  <button;
                    on_click={logout}

                  >;
                    Sign Out;
                  </button>;
                </div>;

                >;
                  Start Free Trial;
                </Link>;
              </div>)}

          </div>;
        </div>;
      </nav>;
      {children}