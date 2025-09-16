<<<<<<< HEAD
export default function Page() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard Page</h1>
        <p className="text-white/70">Content coming soon.</p>
      </div>
    </div>
  );
=======

;
"use client",import { useAuth } from "@/contexts/AuthContext",import { useRouter } from "next/navigation",import { useEffect } from "react",import Link from "next/link",export default function DashboardPage() {const { user, isAuthenticated, isLoading } = useAuth(),const router = useRouter()useEffect(() => {if (!isLoading && !isAuthenticated) {router.push("/auth/signin")}
  }, [isAuthenticated, isLoading, router])if (isLoading) {return (<div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;<div className="min-h-screen flex items-center justify-center">;
          <p className="text-zinc-400">Loading...</p>;
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
      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>;
          <p className="text-zinc-400">Loading...</p>;
        </div>;
      </div>;
    )}if (!isAuthenticated) {return null;
  }return (<div className="space-y-8">;
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">;
        <h1 className="text-3xl font-bold text-white mb-2">;// Check condition;
if ( {) {$2;
>>>>>>> origin/merge-pr-12271
}
