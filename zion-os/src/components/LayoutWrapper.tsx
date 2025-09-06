<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
"use client",;
import { useWalkthroughTarget } from "./OnboardingWalkthrough",;
import { useAuth } from "@/contexts/AuthContext",;
import Link from "next/link",;
export function LayoutWrapper({ children }: { children: React.ReactNode }) {;
  const { user, isAuthenticated, logout } = useAuth();


  return (;
<<<<<<< HEAD
=======
=======
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
=======
<<<<<<< HEAD
"use client";
import { useWalkthroughTarget } from "./OnboardingWalkthrough";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
export function LayoutWrapper({ children }: { children: React.ReactNode }) {const { user, isAuthenticated, logout } = useAuth();
=======
"use client",;
import { useWalkthroughTarget } from "./OnboardingWalkthrough",;
import { useAuth } from "@/contexts/AuthContext",;
import Link from "next/link",;
export function LayoutWrapper({ children }: { children: React.ReactNode }) {;
  const { user, isAuthenticated, logout } = useAuth();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <>;
      <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur" {...useWalkthroughTarget("nav-menu")}>;
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">;
          <div className="flex items-center gap-6">;
            <Link href="/" className="font-semibold text-lg">Zion OS</Link>;
            <div className="hidden md:flex items-center gap-4">;
              <Link href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100 transition-opacity">;
                Launch;
              </Link>;
              <Link href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">;
                Admin Deploy;
              </Link>;
              <Link href="/admin/instances" className="text-sm opacity-80 hover:opacity-100 transition-opacity">;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Instances;
              </Link>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex items-center gap-4">;
            {isAuthenticated ? (;
              <>;
                <Link;
                  href="/dashboard";
                  className="text-sm text-zinc-300 hover:text-white transition-colors";
                >;
                  Dashboard;
                </Link>;
<<<<<<< HEAD
                <div className="flex items-center gap-3">;
                  <span className="text-sm text-zinc-400">;
=======
<<<<<<< HEAD
=======

                <div className="flex items - center gap - 3">;
                  <span className="text - sm text - zinc - 400">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    Welcome, {user?.name || user?.email}

=======

                    Welcome, {user?.name || user?.email}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  </span>;
                  <button;
                    onClick={logout}
                    className="text-sm text-zinc-400 hover:text-white transition-colors";
=======
          <div className="flex items - center gap-4">;
            {is_authenticated ? (
              <>;
                <Link;
                  href="/dashboard";
                  className="text - sm text - zinc - 300 hover:text - white transition-colors";
                >;
                  Dashboard;
                </Link>;
=======
          <div className="flex items - center gap-4">;
            {is_authenticated ? (
              <>;
                <Link;
                  href="/dashboard";
                  className="text - sm text - zinc - 300 hover:text - white transition-colors";
                >;
                  Dashboard;
                </Link>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </span>;
                  <button;
                    on_click={logout}
                    className="text - sm text - zinc - 400 hover:text - white transition-colors";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  >;
                    Sign Out;
                  </button>;
                </div>;
<<<<<<< HEAD
              </>;
            ) : (;
              <div className="flex items-center gap-3">;
                <Link;
                  href="/auth/signin";
                  className="text-sm text-zinc-400 hover:text-white transition-colors";
=======
              </>) : (
              <div className="flex items - center gap-3">;
                <Link;
                  href="/auth / signin";
                  className="text - sm text - zinc - 400 hover:text - white transition-colors";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >;
                  Sign In;
                </Link>;
                <Link;
<<<<<<< HEAD
                  href="/auth/signup";
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors";
                >;
                  Start Free Trial;
                </Link>;
              </div>;
            )}
=======
                  href="/auth / signup";
                  className="px - 4 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition-colors";
                >;
                  Start Free Trial;
                </Link>;
              </div>)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </div>;
        </div>;
      </nav>;
      {children}
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
}
=======
    </>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
