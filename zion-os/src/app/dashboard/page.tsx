"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/auth/signin");
		}
	}, [user, router]);

	if (!user) {
		return <div className="p-8">Redirecting...</div>;
	}

	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
			<p className="text-white/70 mb-6">This is your dashboard.</p>
			<Link href="/" className="text-blue-400 underline">Go home</Link>
		</div>
	);
}
