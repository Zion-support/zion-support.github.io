import React from 'react';
import { SEO } from '../components/SEO';

export default function Cookies() {
	return (
		<main className="min-h-screen bg-zion-blue pt-24 pb-20">
			<SEO
				title="Cookie Policy | Zion Tech Group"
				description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
				keywords="cookie policy, privacy, data collection, website cookies"
				canonical="https://ziontechgroup.com/cookies"
			/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
				<p className="text-zion-slate-light">We use cookies to improve your experience.</p>
			</div>
		</main>
	);
}
