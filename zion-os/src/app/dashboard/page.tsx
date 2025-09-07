"use client",;
import { useAuth } from "@/contexts/AuthContext",;
import { useRouter } from "next/navigation",;
import { useEffect } from "react",;
import Link from "next/link",;
export default function DashboardPage() {;
  const { user, isAuthenticated, isLoading } = useAuth(),;
  const router = useRouter();
  useEffect(() => {;
    if (!isLoading && !isAuthenticated) {;
      router.push("/auth/signin");
    }
  }, [isAuthenticated, isLoading, router]);
  if (isLoading) {;
    return (;

      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;

"use client",
import { use_auth  } from '@/contexts / AuthContext';,
import { use_router  } from './next / navigation';,
import { useEffect  } from './react';,
import Link from './next / link';,
export default /**
 * DashboardPage - Function description
 */
function DashboardPage() {
  const { user, is_authenticated, is_loading } = use_auth (),
  const router = use_router ();
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      router.push ("/auth / signin");
    }
  }, [is_authenticated, is_loading, router]);
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <div className="text - center">;
          <div className="animate - spin rounded - full h - 12 w - 12 border - b-2 border - blue - 500 mx - auto mb - 4"></div>;
          <p className="text - zinc - 400">Loading...</p>;

"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
export default function DashboardPage() {const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {if (!isLoading && !isAuthenticated) {;
      router.push("/auth/signin");
    }
  }, [isAuthenticated, isLoading, router]);
  if (isLoading) {return (;

"use client",;
import { useAuth } from "@/contexts/AuthContext",;
import { useRouter } from "next/navigation",;
import { useEffect } from "react",;
import Link from "next/link",;
export default function DashboardPage() {;
  const { user, isAuthenticated, isLoading } = useAuth(),;
  const router = useRouter();
  useEffect(() => {;
    if (!isLoading && !isAuthenticated) {;
      router.push("/auth/signin");
    }
  }, [isAuthenticated, isLoading, router]);
  if (isLoading) {;
    return (;

      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;

        </div>;
      </div>;
    );
  }

;
  if (!isAuthenticated) {;
    return null;
  }
;

  return (;"
    <div className="space-y-8">;
      {/* Welcome Header */}"
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">;"
        <h1 className="text-3xl font-bold text-white mb-2">;

          Welcome back, {user?.name || "User"}! 👋;

        </h1>;
        <p className="text-zinc-300 text-lg">;

        <Link;
          href="/multiverse / launch";
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - blue - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - blue - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">🚀</span>;
            </div>;

        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">📚</span>;
            </div>;

            <span > Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text - zinc-500">Just now</span>;
          </div>;

          <div className="flex items - center gap - 3 text - sm text - zinc-400">;
            <div className="w - 2 h - 2 bg - green - 500 rounded-full"></div>;
            <span > Onboarding completed. You're ready to start building!</span>;
            <span className="text - zinc-500">Just now</span>;

          </div>;
        </div>;
      </div>;
      {/* Account Info */}

          <div>;

            <p className="text-white">{user?.name || "Not provided"}</p>;

          </div>;
          <div>;
            <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>;
            <p className="text-white">{user?.email}</p>;
          </div>;
          <div>;
            <label className="block text-sm font-medium text-zinc-400 mb-1">Role</label>;
            <p className="text-white capitalize">{user?.role}</p>;
          </div>;
          <div>;
            <label className="block text-sm font-medium text-zinc-400 mb-1">Member Since</label>;

          <div>;

            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Name</label>;
            <p className="text - white">{user?.name || "Not provided"}</p>;

            <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>;

            <p className="text-white">{user?.name || "Not provided"}</p>;

          </div>;
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb-1">Email</label>;
            <p className="text-white">{user?.email}</p>;
          </div>;
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb-1">Role</label>;
            <p className="text-white capitalize">{user?.role}</p>;
          </div>;
          <div>;

            <p className="text-white">Today</p>;

          </div>;
        </div>;
      </div>;