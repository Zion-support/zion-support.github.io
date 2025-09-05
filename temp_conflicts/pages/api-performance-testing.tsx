import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';

export default function ApiPerformanceTestingPage() {
	const features = [
		'k6/Gatling-compatible test runner',
		'SLO-aware latency reports',
		'Regression baselines per endpoint',
		'CI checks and PR annotations',
		'Synthetic traffic for staging'
	];

	return (
		<>
			<SEO title=&quot;API Performance Testing&quot; description=&quot;Load, latency and regression testing-as-a-service with CI and SLOs.&quot; />
			<main id=&quot;main&quot; className=&quot;container mx-auto px-4 py-24&quot;>
				<section className=&quot;max-w-5xl mx-auto&quot;>
					<h1 className=&quot;text-4xl font-extrabold tracking-tight&quot;>API Performance Testing</h1>
					<p className=&quot;mt-4 text-lg text-gray-300&quot;>Ship with confidence using automated performance tests and guardrails integrated into your pipeline.</p>
					<div className=&quot;mt-8 grid sm:grid-cols-2 gap-6&quot;>
						{features.map((f) => (
							<div key={f} className=&quot;flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10&quot;>
								<Check className=&quot;w-5 h-5 text-cyan-400 mt-1&quot; />
								<p className=&quot;text-gray-200&quot;>{f}</p>
							</div>
						))}
					</div>
					<div className=&quot;mt-8 flex flex-wrap items-center gap-4&quot;>
						<a href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200&quot;>Start from $129/mo</Link>
						<a href=&quot;/market-pricing&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10&quot;>Market Pricing</Link>
						<a href=&quot;https://grafana.com/docs/k6/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> k6 Docs
							</Link>
						<a href=&quot;https://gatling.io/open-source/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> Gatling OSS
							</Link>
					</div>
				</section>
			</main>
		</>
	);
}