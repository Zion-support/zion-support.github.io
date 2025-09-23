"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/signin");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Welcome, {user?.name || user?.email}</h1>
        <p className="text-gray-400 mb-8">This is your dashboard.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">Projects</div>
          <div className="card p-6">Instances</div>
          <div className="card p-6">Settings</div>
        </div>
      </div>
    </div>
  );
}