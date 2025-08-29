import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Code, Globe, DollarSign, ExternalLink } from 'lucide-react';

const SecurityHeadersCSP: React.FC = () => {
	const items = [
		{ icon: Shield, title: 'Best-Practice Headers', desc: 'HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and more.' },
		{ icon: Code, title: 'CSP Builder', desc: 'Generate strict Content Security Policy with nonces/hashes and report-only rollout.' },
		{ icon: Globe, title: 'Multi-Domain Management', desc: 'Manage policies across environments and domains with change tracking.' },
		{ icon: Lock, title: 'Reports & Alerts', desc: 'Real-time violation reporting, triage, and guided remediation.' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
				<h1 className="text-4xl font-bold sm:text-5xl">Security Headers & CSP Manager</h1>
				<p className="mt-4 max-w-2xl text-slate-300">Harden your web apps with automated header audits and CSP rollout—without breaking your site.</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Get started</Link>
					<Link to="/contact" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((i) => (
						<div key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
							<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
								<i.icon className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold">{i.title}</h3>
							<p className="mt-2 text-sm text-slate-300">{i.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
					<div className="mb-2 font-semibold text-white">Pricing</div>
					<ul className="grid gap-2 sm:grid-cols-2">
						<li>Subscription: from $49/mo per domain</li>
						<li>Implementation: $1,000–$6,000</li>
						<li>Security review + training: $2,000–$5,000</li>
					</ul>
					<div className="mt-4 flex items-center gap-2 text-xs">
						<DollarSign className="h-3 w-3" />
						Includes staging rollout, report-only period, and rollback plan.
					</div>
					<a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/it-services" target="_blank" rel="noreferrer">
						See security services <ExternalLink className="ml-1 h-3 w-3" />
					</a>
					<div className="mt-6 text-xs text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
				</div>
			</section>
		</div>
	);
};

export default SecurityHeadersCSP;