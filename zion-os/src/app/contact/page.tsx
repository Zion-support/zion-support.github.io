"use client";
import Link from 'next/link';

export default function ContactPage() {
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
				<p className="text-zinc-500">Reach out and we’ll respond shortly.</p>
				<div className="mt-6 flex gap-4">
					<Link className="text-blue-600 underline" href="mailto:info@ziontechgroup.com">info@ziontechgroup.com</Link>
					<Link className="text-blue-600 underline" href="tel:+13024640950">+1 (302) 464-0950</Link>
				</div>
			</div>
		</div>
	);
}
