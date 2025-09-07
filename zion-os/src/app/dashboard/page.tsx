
;
"use client",import { useAuth } from "@/contexts/AuthContext",import { useRouter } from "next/navigation",import { useEffect } from "react",import Link from "next/link",export default function DashboardPage() {const { user, isAuthenticated, isLoading } = useAuth(),const router = useRouter()useEffect(() => {if (!isLoading && !isAuthenticated) {router.push("/auth/signin")}
  }, [isAuthenticated, isLoading, router])if (isLoading) {return (<div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;<div className="min-h-screen flex items-center justify-center">;
          <p className="text-zinc-400">Loading...</p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;
        </div>;
      </div>;
<<<<<<< HEAD
    );
  }
<<<<<<< HEAD
=======
    )}if (!isAuthenticated) {return null;
  }return (<div className="space-y-8">;
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">;
        <h1 className="text-3xl font-bold text-white mb-2">;// Check condition;
if ( {) {$2;
}
    return null;
  }
  return (<div className="space - y-8">;
      {/* Welcome Header */}
      <div className="bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 rounded - xl p - 8 border border - blue - 500 / 20">;
        <h1 className="text - 3xl font - bold text - white mb - 2">;
          Welcome back, {user?.name || "User"}! 👋;</h1>;
        <p className="text - zinc - 300 text - lg">;
  if (!isAuthenticated) {return null;
}if (!isAuthenticated) {return null;
  }</h1>;
        <p className="text - zinc - 300 text-lg">;
    );
  }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
        </h1>;
        <p className="text - zinc - 300 text - lg">;
<<<<<<< HEAD
=======
  if (!isAuthenticated) {return null
};
  if (!isAuthenticated) {;
    return null;
  }
;        </h1>;
        <p className="text - zinc - 300 text-lg">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          Ready to continue building your digital economy? Here's what you can do next.;
        </p>;
      </div>;
      {/* Quick Actions */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
        <Link;
          href="/multiverse / launch";
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - blue - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;
          <div className="text - center space - y-3">;
            <div className="w - 16 h - 16 bg - blue - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;
              <span className="text - 3xl">🚀</span>;
            </div>;
            <h3 className="font - semibold text - white text - lg">Launch New Instance</h3>;
            <p className="text - zinc - 400 text - sm">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap-6">;
        <Link;
          href="/multiverse / launch";
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - blue - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;
          <div className="text - center space - y-3">;
            <div className="w - 16 h - 16 bg - blue - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;
              <span className="text - 3xl">🚀</span>;
            </div>;
<<<<<<< HEAD
            <h3 className="font - semibold text - white text-lg">Launch New Instance</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <h3 className="font - semibold text - white text - lg">Launch New Instance</h3>;
            <p className="text - zinc - 400 text - sm">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              Create a new digital economy with marketplace and governance tools;
            </p>;
          </div>;
        </Link>;
        <Link;
          href="/admin / instances";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - purple - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;
          <div className="text - center space - y-3">;
            <div className="w - 16 h - 16 bg - purple - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;
              <span className="text - 3xl">⚙️</span>;
            </div>;
            <h3 className="font - semibold text - white text - lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text - sm">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - purple - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space - y-3">;
            <div className="w - 16 h - 16 bg - purple - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;
              <span className="text - 3xl">⚙️</span>;
            </div>;
<<<<<<< HEAD
            <h3 className="font - semibold text - white text-lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <h3 className="font - semibold text - white text - lg">Manage Instances</h3>;
            <p className="text - zinc - 400 text - sm">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              Monitor and configure your deployed instances and settings;
            </p>;
          </div>;
        </Link>;
        <Link;
          href="/docs";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration - 200";
        >;
          <div className="text - center space - y-3">;
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;
              <span className="text - 3xl">📚</span>;
            </div>;
            <h3 className="font - semibold text - white text - lg">Documentation</h3>;
            <p className="text - zinc - 400 text - sm">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          className="group p - 6 bg - zinc - 800 / 50 rounded - xl border border - zinc - 700 / 50 hover:border - green - 500 / 50 hover:bg - zinc - 800 / 70 transition - all duration-200";
        >;
          <div className="text - center space - y-3">;
            <div className="w - 16 h - 16 bg - green - 600 / 20 rounded - full flex items - center justify - center mx - auto group - hover:scale - 110 transition - transform">;
              <span className="text - 3xl">📚</span>;
            </div>;
<<<<<<< HEAD
            <h3 className="font - semibold text - white text-lg">Documentation</h3>;
            <p className="text - zinc - 400 text-sm">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <h3 className="font - semibold text - white text - lg">Documentation</h3>;
            <p className="text - zinc - 400 text - sm">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              Learn more about features and best practices;
            </p>;
          </div>;
        </Link>;
      </div>;
      {/* Recent Activity */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;
        <h2 className="text - xl font - semibold text - white mb - 4">Recent Activity</h2>;
        <div className="space - y-3">;
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;
            <div className="w - 2 h - 2 bg - blue - 500 rounded - full"></div>;
            <span > Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text - zinc - 500">Just now</span>;
          </div>;
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;
            <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;
            <span > Onboarding completed. You're ready to start building!</span>;
            <span className="text - zinc - 500">Just now</span>;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Recent Activity</h2>;
        <div className="space-y-3">;
          <div className="flex items - center gap - 3 text - sm text - zinc-400">;
            <div className="w - 2 h - 2 bg - blue - 500 rounded-full"></div>;
            <span > Welcome to Zion OS! Your account has been created successfully.</span>;
            <span className="text - zinc - 500">Just now</span>;
          </div>;
          <div className="flex items - center gap - 3 text - sm text - zinc - 400">;
            <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;
            <span > Onboarding completed. You're ready to start building!</span>;
<<<<<<< HEAD
            <span className="text - zinc-500">Just now</span>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <span className="text - zinc - 500">Just now</span>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          </div>;
        </div>;
      </div>;
      {/* Account Info */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;
        <h2 className="text - xl font - semibold text - white mb - 4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <div>;
          </div>;
=======
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc - 700 / 30">;
        <h2 className="text - xl font - semibold text - white mb - 4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <div>;<label className="block text - sm font - medium text - zinc - 400 mb - 1">Name</label>;
            <p className="text - white">{user?.name || "Not provided"}</p>;</div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Email</label>;
            <p className="text - white">{user?.email}</p>;
          </div>;
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Role</label>;
            <p className="text - white capitalize">{user?.role}</p>;
          </div>;
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Member Since</label>;
            <p className="text - white">Today</p>;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="bg - zinc - 800 / 30 rounded - xl p - 6 border border - zinc-700 / 30">;
        <h2 className="text - xl font - semibold text - white mb-4">Account Information</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
          <div></div>;
          <div>;
          </div>;
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Email</label>;
            <p className="text - white">{user?.email}</p>;
          </div>;
          <div>;
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Role</label>;
            <p className="text - white capitalize">{user?.role}</p>;
          </div>;
          <div>;
<<<<<<< HEAD
            <label className="block text - sm font - medium text - zinc - 400 mb-1">Member Since</label>;
            <p className="text-white">Today</p>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <label className="block text - sm font - medium text - zinc - 400 mb - 1">Member Since</label>;
            <p className="text - white">Today</p>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          </div>;
        </div>;
      </div>;
    </div>)}