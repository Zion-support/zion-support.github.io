import React from 'react';
import { SEO } from '../components/SEO';

export default function Pricing() {
	return (
		<main className="min-h-screen bg-zion-blue pt-24 pb-20">
			<SEO
				title="Pricing - Zion Tech Group"
				description="Choose the perfect plan for your AI and technology needs."
				canonical="https://ziontechgroup.com/pricing"
			/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-white mb-6">Pricing</h1>
				<p className="text-zion-slate-light">Contact us for enterprise pricing and custom solutions.</p>
			</div>
		</main>
	);
}

export { Pricing };
