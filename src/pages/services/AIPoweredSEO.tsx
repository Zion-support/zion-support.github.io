import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Settings, Sparkles, DollarSign, ExternalLink } from 'lucide-react';

const AIPoweredSEO: React.FC = () => {
	const features = [
		{ icon: Search, title: 'Semantic Keyword Intelligence', desc: 'Topic clusters, intent mapping, and internal linking powered by embeddings.' },
		{ icon: TrendingUp, title: 'On-Page Optimization', desc: 'Titles, headings, schema, and Core Web Vitals suggestions with impact scoring.' },
		{ icon: Settings, title: 'Technical Audits', desc: 'Sitemaps, indexability, canonicalization, redirects, and crawl budget diagnostics.' },
		{ icon: Sparkles, title: 'Content Briefs & Outlines', desc: 'AI-generated briefs with sources, questions, and E-E-A-T guidance.' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-bold sm:text-5xl">AI-Powered SEO Optimization</h1>
					<p className="max-w-2xl text-slate-300">Boost organic growth with AI-assisted audits, briefs, and optimization workflows. Built for small businesses and enterprises.</p>
					<div className="text-xs text-slate-400">Avg market budgets: $3k–$30k for projects; retainers from $1.5k/mo.</div>
					<div className="mt-2 flex flex-wrap gap-3">
						<Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Talk to SEO lead</Link>
						<Link to="/contact" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
					</div>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((f) => (
						<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
							<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
								<f.icon className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold">{f.title}</h3>
							<p className="mt-2 text-sm text-slate-300">{f.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
					<div className="mb-2 font-semibold text-white">Pricing</div>
					<ul className="grid gap-2 sm:grid-cols-2">
						<li>Audit & roadmap: $3,000–$8,000</li>
						<li>Implementation sprint: $5,000–$20,000</li>
						<li>Monthly optimization: $1,500–$6,000/mo</li>
						<li>Enterprise SEO ops: custom</li>
					</ul>
					<div className="mt-4 flex items-center gap-2 text-xs">
						<DollarSign className="h-3 w-3" />
						ROI tracked in GA4/Search Console; dashboards provided.
					</div>
					<a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
						See service overview <ExternalLink className="ml-1 h-3 w-3" />
					</a>
					<div className="mt-6 text-xs text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
				</div>
			</section>
		</div>
	);
};

export default AIPoweredSEO;