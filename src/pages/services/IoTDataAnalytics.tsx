import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

export default function IoTDataAnalytics() {
	return (
		<>
			<SEO title="IoT & Data Analytics" description="Connected devices and analytics solutions." />
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl font-bold text-white mb-4">IoT & Data Analytics</h1>
					<p className="text-zion-slate-light">Coming soon.</p>
				</div>
			</main>
			<Footer />
		</>
	);
}