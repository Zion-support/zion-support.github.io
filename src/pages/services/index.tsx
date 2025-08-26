import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ZION_SERVICES } from '@/data/services';

export default function ServicesIndexPage() {
	return (
		<div className="pt-28 pb-20 container mx-auto px-4">
			<Head>
				<title>Services | Zion Tech Group</title>
				<meta name="description" content="AI, Micro SaaS, and IT services by Zion Tech Group. Predictive lead scoring, OCR AP automation, uptime monitoring, MLOps, LLM fine-tuning, and more." />
			</Head>

			<h1 className="text-4xl font-bold mb-3">Zion Tech Group Services</h1>
			<p className="text-gray-600 mb-8">Innovative AI solutions, diversified micro SaaS, and enterprise IT services. No legacy features removed—this is an expansion.</p>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{ZION_SERVICES.map((svc) => (
					<div key={svc.id} className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm">
						<div className="flex items-start justify-between mb-3">
							<h2 className="text-xl font-semibold">{svc.title || svc.name}</h2>
							<span className="text-xs uppercase tracking-wide text-gray-500">{svc.category}</span>
						</div>
						<p className="text-gray-700 mb-4">{svc.description}</p>

						{svc.features?.length ? (
							<ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
								{svc.features.slice(0, 5).map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
						) : null}

						<div className="flex items-center justify-between mt-4">
							<div className="text-sm text-gray-800">
								{typeof svc.price === 'object' ? (
									<div>
										{svc.price.monthly ? <div><span className="font-semibold">${svc.price.monthly}</span>/mo</div> : null}
										{svc.price.yearly ? <div><span className="font-semibold">${svc.price.yearly}</span>/yr</div> : null}
										{svc.price.oneTime ? <div>From <span className="font-semibold">${svc.price.oneTime}</span> one-time</div> : null}
										<div className="text-xs text-gray-500">{svc.price.currency} • {svc.price.pricingModel}</div>
									</div>
								) : (
									<div className="text-sm text-gray-500">Custom pricing</div>
								)}
							</div>

							<div className="flex items-center gap-3 mt-4">
								<a href={`tel:${svc.contactInfo.phone}`} className="inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">Call</a>
								<a href={`mailto:${svc.contactInfo.email}`} className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50">Email</a>
								<Link href={svc.contactInfo.website} target="_blank" className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50">Learn more</Link>
							</div>

							{svc.benefits?.length ? (
								<div className="mt-4 text-xs text-gray-600">
									<strong>Benefits:</strong> {svc.benefits.slice(0, 3).join(' • ')}
								</div>
							) : null}

							{svc.marketPrice ? (
								<div className="mt-2 text-xs text-gray-500">Market price: {svc.marketPrice}</div>
							) : null}
						</div>
					</div>
				))}
			</div>

			<div className="mt-10 text-sm text-gray-600">
				For custom solutions or RFPs, contact us at <a href="mailto:kleber@ziontechgroup.com" className="underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="underline">+1 302 464 0950</a>. Address: 364 E Main St STE 1008 Middletown DE 19709.
			</div>
		</div>
	);
}