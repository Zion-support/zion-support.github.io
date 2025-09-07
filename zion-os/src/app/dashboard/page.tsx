<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      <div className="min-h-screen flex items-center justify-center">;"
        <div className="text-center">;"
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;"
          <p className="text-zinc-400">Loading...</p>;

"
      <div className="min-h-screen flex items-center justify-center">;"
        <div className="text-center">;"
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;"
          <p className="text-zinc-400">Loading...</p>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (!isAuthenticated) {return null;
  }
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  // Check condition
if ( {) {
  $2
}
    return null;
  }
  return (
    <div className="space - y-8">;
      {/* Welcome Header */}
      <div className="bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 rounded - xl p - 8 border border - blue - 500 / 20">;
        <h1 className="text - 3xl font - bold text - white mb - 2">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          Welcome back, {user?.name || "User"}! 👋;

=======

          Welcome back, {user?.name || "User"}! 👋;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        </h1>;
        <p className="text-zinc-300 text-lg">;
=======
  if (!isAuthenticated) {return null
};
  if (!isAuthenticated) {;
    return null;
  }
;        </h1>;
        <p className="text - zinc - 300 text-lg">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  if (!isAuthenticated) {return null
};
  if (!isAuthenticated) {;
    return null;
  }
;        </h1>;
        <p className="text - zinc - 300 text-lg">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  if (!isAuthenticated) {return null;
  }

;
  if (!isAuthenticated) {;
    return null;
  }
;

  return (;
    <div className="space-y-8">;
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">;
        <h1 className="text-3xl font-bold text-white mb-2">;

  // Check condition
if ( {) {
  $2
}
    return null;
  }
  return (
    <div className="space - y-8">;
      {/* Welcome Header */}
      <div className="bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 rounded - xl p - 8 border border - blue - 500 / 20">;
        <h1 className="text - 3xl font - bold text - white mb - 2">;
          Welcome back, {user?.name || "User"}! 👋;

          Welcome back, {user?.name || "User"}! 👋;

        </h1>;
        <p className="text - zinc - 300 text - lg">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          Welcome back, {user?.name || "User"}! 👋;
        </h1>;
        <p className="text-zinc-300 text-lg">;
  if (!isAuthenticated) {return null
};
  if (!isAuthenticated) {;
    return null;
  }
;        </h1>;
        <p className="text - zinc - 300 text-lg">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          Ready to continue building your digital economy? Here's what you can do next.;
        </p>;
      </div>;
      {/* Quick Actions */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
        <Link;
          href="/multiverse/launch";
          className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800/70 transition-all duration-200";
        >;
          <div className="text-center space-y-3">;
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">;
              <span className="text-3xl">🚀</span>;
            </div>;
            <h3 className="font-semibold text-white text-lg">Launch New Instance</h3>;
            <p className="text-zinc-400 text-sm">;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap-6">;
=======
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Link;
          href="/multiverse / launch";
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - blue - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - blue - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">🚀</span>;
            </div>;
<<<<<<< HEAD
            <h3 className="font - semibold text - white text-lg">Launch New Instance</h3>;
            <p className="text - zinc - 400 text-sm">;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


        </h1>;"
        <p className="text - zinc - 300 text - lg">;
          Ready to continue building your digital economy? Here's what you can do next.;
        </p>;
      </div>;
      {/* Quick Actions */}"
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
        <Link;"
          href="/multiverse / launch";"
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - blue - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;"
          <div className="text - center space - y-3">;"
            <div className="w - 16 h - 16 bg - blue - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;"
              <span className="text - 3xl">🚀</span>;
            </div>;"
            <h3 className="font - semibold text - white text - lg">Launch New Instance</h3>;"
            <p className="text - zinc - 400 text - sm">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <h3 className="font - semibold text - white text - lg">Launch New Instance</h3>;
            <p className="text - zinc - 400 text - sm">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
        <Link;
          href="/multiverse/launch";
          className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800/70 transition-all duration-200";
        >;
          <div className="text-center space-y-3">;
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">;
              <span className="text-3xl">🚀</span>;
            </div>;
            <h3 className="font-semibold text-white text-lg">Launch New Instance</h3>;
            <p className="text-zinc-400 text-sm">;
            <h3 className="font - semibold text - white text-lg">Launch New Instance</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Create a new digital economy with marketplace and governance tools;
            </p>;
          </div>;
        </Link>;
<<<<<<< HEAD
        <Link;
<<<<<<< HEAD
<<<<<<< HEAD
          href="/admin/instances";
          className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/70 transition-all duration-200";
        >;
          <div className="text-center space-y-3">;
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">;
              <span className="text-3xl">⚙️</span>;
            </div>;
            <h3 className="font-semibold text-white text-lg">Manage Instances</h3>;
            <p className="text-zinc-400 text-sm">;
=======
          href="/admin / instances";
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - purple - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - purple - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">⚙️</span>;
            </div>;
<<<<<<< HEAD
            <h3 className="font - semibold text - white text-lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          href="/admin / instances";
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - purple - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - purple - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">⚙️</span>;
            </div>;
            <h3 className="font - semibold text - white text-lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <Link;"
          href="/admin / instances";"
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - purple - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;"
          <div className="text - center space - y-3">;"
            <div className="w - 16 h - 16 bg - purple - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;"
              <span className="text - 3xl">⚙️</span>;
            </div>;"
            <h3 className="font - semibold text - white text - lg">Manage Instances</h3>;"
            <p className="text - zinc - 400 text - sm">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <h3 className="font - semibold text - white text - lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text - sm">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          href="/admin/instances";
          className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/70 transition-all duration-200";
        >;
          <div className="text-center space-y-3">;
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">;
              <span className="text-3xl">⚙️</span>;
            </div>;
            <h3 className="font-semibold text-white text-lg">Manage Instances</h3>;
            <p className="text-zinc-400 text-sm">;
            <h3 className="font - semibold text - white text-lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Monitor and configure your deployed instances and settings;
            </p>;
          </div>;
        </Link>;
<<<<<<< HEAD
        <Link;
          href="/docs";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-green-500/50 hover:bg-zinc-800/70 transition-all duration-200";
        >;
          <div className="text-center space-y-3">;
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">;
              <span className="text-3xl">📚</span>;
            </div>;
            <h3 className="font-semibold text-white text-lg">Documentation</h3>;
            <p className="text-zinc-400 text-sm">;
=======
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
=======
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">📚</span>;
            </div>;
<<<<<<< HEAD
            <h3 className="font - semibold text - white text-lg">Documentation</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space-y-3">;
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition-transform">;
              <span className="text-3xl">📚</span>;
            </div>;
            <h3 className="font - semibold text - white text-lg">Documentation</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <Link;"
          href="/docs";"
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;"
          <div className="text - center space - y-3">;"
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;"
              <span className="text - 3xl">📚</span>;
            </div>;"
            <h3 className="font - semibold text - white text - lg">Documentation</h3>;"
            <p className="text - zinc - 400 text - sm">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <h3 className="font - semibold text - white text - lg">Documentation</h3>;
            <p className="text - zinc - 400 text - sm">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-green-500/50 hover:bg-zinc-800/70 transition-all duration-200";
        >;
          <div className="text-center space-y-3">;
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">;
              <span className="text-3xl">📚</span>;
            </div>;
            <h3 className="font-semibold text-white text-lg">Documentation</h3>;
            <p className="text-zinc-400 text-sm">;
            <h3 className="font - semibold text - white text-lg">Documentation</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Learn more about features and best practices;
            </p>;
          </div>;
        </Link>;
      </div>;
<<<<<<< HEAD
      {/* Recent Activity */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">;
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>;
        <div className="space-y-3">;
          <div className="flex items-center gap-3 text-sm text-zinc-400">;
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>;
            <span>Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text-zinc-500">Just now</span>;
          </div>;
          <div className="flex items-center gap-3 text-sm text-zinc-400">;
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
            <span>Onboarding completed. You're ready to start building!</span>;
            <span className="text-zinc-500">Just now</span>;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Recent Activity</h2>;
        <div className="space-y-3">;
          <div className="flex items - center gap - 3 text - sm text - zinc-400">;
            <div className="w - 2 h - 2 bg - blue - 500 rounded-full"></div>;
<<<<<<< HEAD
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;
        <h2 className="text - xl font - semibold text - white mb - 4">Recent Activity</h2>;
        <div className="space - y-3">;
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;
            <div className="w - 2 h - 2 bg - blue - 500 rounded - full"></div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <span > Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text - zinc-500">Just now</span>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Recent Activity</h2>;
        <div className="space-y-3">;
          <div className="flex items - center gap - 3 text - sm text - zinc-400">;
            <div className="w - 2 h - 2 bg - blue - 500 rounded-full"></div>;
            <span > Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text - zinc-500">Just now</span>;
          </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className="flex items - center gap - 3 text - sm text - zinc-400">;
            <div className="w - 2 h - 2 bg - green - 500 rounded-full"></div>;
            <span > Onboarding completed. You're ready to start building!</span>;
            <span className="text - zinc-500">Just now</span>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;
            <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;
            <span > Onboarding completed. You're ready to start building!</span>;
            <span className="text - zinc - 500">Just now</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="flex items - center gap - 3 text - sm text - zinc-400">;
            <div className="w - 2 h - 2 bg - green - 500 rounded-full"></div>;
            <span > Onboarding completed. You're ready to start building!</span>;
            <span className="text - zinc - 500">Just now</span>;
      <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">;
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>;
        <div className="space-y-3">;
          <div className="flex items-center gap-3 text-sm text-zinc-400">;
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>;
            <span>Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text-zinc-500">Just now</span>;
          </div>;
          <div className="flex items-center gap-3 text-sm text-zinc-400">;
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
            <span>Onboarding completed. You're ready to start building!</span>;
            <span className="text-zinc-500">Just now</span>;
            <span className="text - zinc-500">Just now</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>;
        </div>;
      </div>;
      {/* Account Info */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">;
        <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
=======
      {/* Recent Activity */}"
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;"
        <h2 className="text - xl font - semibold text - white mb - 4">Recent Activity</h2>;"
        <div className="space - y-3">;"
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;"
            <div className="w - 2 h - 2 bg - blue - 500 rounded - full"></div>;
            <span > Welcome to Zion OS! Your account has been created successfully.</span>;"
            <span className="text - zinc - 500">Just now</span>;
          </div>;"
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;"
            <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;'
            <span > Onboarding completed. You're ready to start building!</span>;"
            <span className="text - zinc - 500">Just now</span>;
          </div>;
        </div>;
      </div>;
      {/* Account Info */}"
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;"
        <h2 className="text - xl font - semibold text - white mb - 4">Account Information</h2>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div>;


<<<<<<< HEAD
=======
            <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <p className="text-white">{user?.name || "Not provided"}</p>;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;
        <h2 className="text - xl font - semibold text - white mb - 4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
            <label className="block text - sm font - medium text - zinc - 400 mb-1">Member Since</label>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
          <div>;
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
            <label className="block text - sm font - medium text - zinc - 400 mb-1">Member Since</label>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <p className="text-white">Today</p>;
=======
          </div>;
          <div>;"
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Email</label>;"
            <p className="text - white">{user?.email}</p>;
          </div>;
          <div>;"
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Role</label>;"
            <p className="text - white capitalize">{user?.role}</p>;
          </div>;
          <div>;"
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Member Since</label>;"
            <p className="text - white">Today</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Member Since</label>;
            <p className="text - white">Today</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <label className="block text - sm font - medium text - zinc - 400 mb-1">Member Since</label>;
            <p className="text-white">Today</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">;
        <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>;
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
            <p className="text-white">Today</p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
      <div className="min-h-screen flex items-center justify-center">;"
</div>"
        <div className="text-center">;"
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;""
          <p className="text-zinc-400">Loading...</p>;""
          <p className="text-zinc-400">Loading...</p>;"
        </div>;
      </div>;"
    <div className="space-y-8">;"
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">;"
        <h1 className="text-3xl font-bold text-white mb-2">;"
</h1>
        </h1>;"
        <p className="text - zinc - 300 text - lg">;"
</p>
        </p>;
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;"
</div>
        <Link;"
          href="/multiverse / launch";""
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - blue - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";"
        >;
"
          <div className="text - center space - y-3">;"
            <div className="w - 16 h - 16 bg - blue - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;"
              <span className="text - 3xl">🚀</span>;"
            <h3 className="font - semibold text - white text - lg">Launch New Instance</h3>;""
            <p className="text - zinc - 400 text - sm">;"
        ;
          href="/admin / instances";""
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - purple - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";"
            <div className="w - 16 h - 16 bg - purple - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;"
              <span className="text - 3xl">⚙️</span>;"
            <h3 className="font - semibold text - white text - lg">Manage Instances</h3>;""
          href="/docs";""
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";"
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;"
              <span className="text - 3xl">📚</span>;"
            <h3 className="font - semibold text - white text - lg">Documentation</h3>;""
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;"
        <h2 className="text - xl font - semibold text - white mb - 4">Recent Activity</h2>;""
        <div className="space - y-3">;"
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;"
            <div className="w - 2 h - 2 bg - blue - 500 rounded - full"></div>;"
            <span > Welcome to Zion OS! Your account has been created successfully.</span>;"
            <span className="text - zinc - 500">Just now</span>;"
            <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;""
            <span > Onboarding completed. You're ready to start building!</span>;
        <h2 className="text - xl font - semibold text - white mb - 4">Account Information</h2>;""
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Email</label>;""
            <p className="text - white">{user?.email}</p>;"
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Role</label>;""
            <p className="text - white capitalize">{user?.role}</p>;"
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Member Since</label>;""
            <p className="text - white">Today</p>;"
    </div>);"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
