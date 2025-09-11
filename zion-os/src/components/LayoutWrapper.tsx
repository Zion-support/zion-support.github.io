>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
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
<<<<<<< HEAD

                    Welcome, {user?.name || user?.email}

                <div className="flex items - center gap - 3">;
                  <span className="text - sm text - zinc - 400">;
                    Welcome, {user?.name || user?.email}
                <div className="flex items-center gap-3">;
                  <span className="text-sm text-zinc-400">;
                    Welcome, {user?.name |user?.email}
                    Welcome, {user?.name || user?.email}
=======
=======

                    Welcome, {user?.name || user?.email}                  </span>;
                  <button;
                    on_click={logout}
                    className="text - sm text - zinc - 400 hover:text - white transition - colors";
                  >;
                    Sign Out;
                  </button>;
                </div>;
              </>) : (
              <div className="flex items - center gap - 3">;
                <Link;
                  href="/auth / signin";
                  className="text - sm text - zinc - 400 hover:text - white transition - colors";
                >;
                  Sign In;
                </Link>;
                <Link;
                  href="/auth / signup";
                  className="px - 4 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors";
                >;
                  Start Free Trial;
                </Link>;
              </div>)}
          </div>;
        </div>;
      </nav>;
      {children}
    </>);
}