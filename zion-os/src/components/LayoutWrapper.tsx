<<<<<<< HEAD
"use client";
import { useWalkthroughTarget } from "./OnboardingWalkthrough";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
export function LayoutWrapper({ children }: { children: React.ReactNode }) {const { user, isAuthenticated, logout } = useAuth();
  return (;
    <>;
      <nav className="border - b border - white / 10 sticky top - 0 z - 50 bg - zinc - 900 / 50 backdrop - blur" {...useWalkthroughTarget ("nav - menu")}>;
        <div className="max - w-6xl mx - auto px - 4 py - 3 flex items - center justify - between">;
          <div className="flex items - center gap - 6">;
            <Link href="/" className="font - semibold text - lg">Zion OS</Link>;
            <div className="hidden md:flex items - center gap - 4">;
              <Link href="/multiverse / launch" className="text - sm opacity - 80 hover:opacity - 100 transition - opacity">;
                Launch;
              </Link>;
              <Link href="/admin / os - deploy" className="text - sm opacity - 80 hover:opacity - 100 transition - opacity">;
                Admin Deploy;
              </Link>;
              <Link href="/admin / instances" className="text - sm opacity - 80 hover:opacity - 100 transition - opacity">;
=======
  return (;  return (;
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
              <Link href="/admin / instances" className="text - sm opacity - 80 hover:opacity - 100 transition-opacity">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Instances;
              </Link>;
            </div>;
          </div>;
<<<<<<< HEAD
          <div className="flex items - center gap - 4">;
=======
          <div className="flex items - center gap-4">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {is_authenticated ? (
              <>;
                <Link;
                  href="/dashboard";
<<<<<<< HEAD
                  className="text - sm text - zinc - 300 hover:text - white transition - colors";
=======
                  className="text - sm text - zinc - 300 hover:text - white transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                >;
                  Dashboard;
                </Link>;
                  </span>;
                  <button;
                    on_click={logout}
<<<<<<< HEAD
                    className="text - sm text - zinc - 400 hover:text - white transition - colors";
=======
                    className="text - sm text - zinc - 400 hover:text - white transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  >;
                    Sign Out;
                  </button>;
                </div>;
              </>) : (
<<<<<<< HEAD
              <div className="flex items - center gap - 3">;
                <Link;
                  href="/auth / signin";
                  className="text - sm text - zinc - 400 hover:text - white transition - colors";
=======
              <div className="flex items - center gap-3">;
                <Link;
                  href="/auth / signin";
                  className="text - sm text - zinc - 400 hover:text - white transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                >;
                  Sign In;
                </Link>;
                <Link;
                  href="/auth / signup";
<<<<<<< HEAD
                  className="px - 4 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors";
=======
                  className="px - 4 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
