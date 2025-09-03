import React from 'react';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
			<section className="max-w-5xl mx-auto px-6 py-20">
				<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Zion Tech Group</h1>
				<p className="mt-4 text-lg text-gray-300">
					AI, Micro SaaS, and IT solutions that drive growth. Explore innovative, production-ready services built to
					optimize revenue, automate operations, and accelerate product delivery.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4">
					<Link href="/services.page" className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 font-semibold">
						Explore Services
					</Link>
					<a href="https://ziontechgroup.com" className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 font-semibold">
						Visit Main Site
					</a>
				</div>
				<div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">
					<div>
						<div className="text-gray-400">Mobile</div>
						<a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
					</div>
					<div>
						<div className="text-gray-400">E-mail</div>
						<a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
					</div>
					<div>
						<div className="text-gray-400">Address</div>
						<div>364 E Main St STE 1008, Middletown, DE 19709</div>
					</div>
				</div>
			</section>
		</main>
	);
}

