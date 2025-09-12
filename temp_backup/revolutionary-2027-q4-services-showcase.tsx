import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { real2027Q4Additions } from '../data/real-2027-q4-additions';

export default function Revolutionary2027Q4Showcase() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground>
			<Head>
				<title>Q4 2027 Services Showcase | Zion Tech Group</title>
				<meta name="description" content="Discover our latest real micro SaaS, IT, and AI services with transparent pricing and direct links." />
				<link rel="canonical" href="https://ziontechgroup.com/revolutionary-2027-q4-services-showcase" />
			</Head>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">New Real Services — Q4 2027</h1>
					<p className="text-neutral-300 max-w-3xl mx-auto">Practical, production-ready services spanning AI governance, FinOps, Zero-Trust, SRE, and Data Quality. Prices reflect typical market rates and deliverables.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					{real2027Q4Additions.map((svc) => (
						<Card key={svc.id} className="bg-neutral-900/50 border border-neutral-800">
							<div className="flex items-center justify-between mb-2">
								<div className="text-2xl" aria-hidden>{svc.icon}</div>
								<span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">{svc.category}</span>
							</div>
							<h2 className="text-xl font-semibold text-white mb-1">{svc.name}</h2>
							<p className="text-neutral-300 text-sm mb-3">{svc.tagline}</p>
							<p className="text-neutral-400 text-sm mb-4">{svc.description}</p>
							<ul className="list-disc list-inside text-neutral-300 text-sm space-y-1 mb-4">
								{svc.features.slice(0, 6).map((f, idx) => (
									<li key={idx}>{f}</li>
								))}
							</ul>
							<div className="flex items-center justify-between mb-4">
								<div>
									<div className="text-2xl font-bold text-white">{svc.price}<span className="text-neutral-400 text-base">{svc.period}</span></div>
									<div className="text-xs text-neutral-400">Avg market: {svc.marketSize} | Growth: {svc.growthRate}</div>
								</div>
								<Button asChild>
									<a href={svc.link} rel="noopener noreferrer">View Service</a>
								</Button>
							</div>
							<div className="text-xs text-neutral-400">
								<span>Tech: {svc.technology.join(', ')}</span>
							</div>
						</Card>
					))}
				</div>

				<div className="mt-12 text-center">
					<h3 className="text-2xl font-semibold text-white mb-3">Talk to Us</h3>
					<p className="text-neutral-300 mb-2">We’ll scope, demo, and get you live fast.</p>
					<div className="text-neutral-300 space-y-1">
						<div>Mobile: <a className="underline" href="tel:+13024640950">+1 302 464 0950</a></div>
						<div>E-mail: <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
						<div>Address: {contact.address}</div>
						<div>Website: <a className="underline" href={contact.website} rel="noopener noreferrer">ziontechgroup.com</a></div>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}