import React from 'react';
import Head from 'next/head';

export default function ResearchDevelopmentPage() {
	return (
		<>
			<Head>
				<title>Research & Development | Zion Tech Group</title>
				<meta name="description" content="Research & Development at Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/research-development" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-4xl font-bold mb-4">Research & Development</h1>
					<p className="text-white/80 max-w-2xl">Exploring AI, quantum, and autonomous systems.</p>
				</div>
			</main>
		</>
	);
}