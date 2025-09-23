
"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
	const { user, isAuthenticated, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			router.push("/auth/signin");
		}
	}, [isAuthenticated, isLoading, router]);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
					<p className="text-zinc-400">Loading...</p>
				</div>
			</div>
		);
	}

	if (!isAuthenticated) return null;

	return (
		<div className="space-y-8 p-8">
			<div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">
				<h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.name || "User"}! 👋</h1>
				<p className="text-zinc-300 text-lg">Ready to continue building your digital economy?</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Link href="/multiverse/launch" className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800/70 transition-all duration-200">Launch New Instance</Link>
				<Link href="/admin/instances" className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/70 transition-all duration-200">Manage Instances</Link>
				<Link href="/docs" className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-green-500/50 hover:bg-zinc-800/70 transition-all duration-200">Documentation</Link>
			</div>
		</div>
	);
}

