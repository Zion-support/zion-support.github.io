import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

export default function BlockchainEnterpriseSolutions() {
	return (
		<>
			<SEO title="Blockchain Enterprise Solutions" description="Enterprise blockchain consulting and solutions." />
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl font-bold text-white mb-4">Blockchain Enterprise Solutions</h1>
					<p className="text-zion-slate-light">Coming soon.</p>
				</div>
			</main>
			<Footer />
		</>
	);
}