"use client";
import Link from 'next/link';

export default function ContactPage() {
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold mb-6">Contact</h1>
				<p className="text-zinc-500 mb-8">Reach out and we will get back to you.</p>
				<div className="space-x-4">
					<Link href="mailto:info@ziontechgroup.com" className="text-blue-400">Email</Link>
					<Link href="/" className="text-blue-400">Home</Link>
				</div>
			</div>
		</div>
	);
}
