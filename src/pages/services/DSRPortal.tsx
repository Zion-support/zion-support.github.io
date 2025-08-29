import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileSearch, ClipboardCheck, Lock, DollarSign, ExternalLink } from 'lucide-react';

const DSRPortal: React.FC = () => {
	const features = [
		{ icon: FileSearch, title: 'Intake + Verification', desc: 'Hosted forms with ID verification and secure attachments.' },
		{ icon: ClipboardCheck, title: 'Workflow Automation', desc: 'Route to owners, track SLAs, export/delete across systems.' },
		{ icon: Lock, title: 'Security & Audit', desc: 'Encryption, access controls, and immutable audit logs.' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
				<h1 className="text-4xl font-bold sm:text-5xl">Privacy Request Portal (DSR)</h1>
				<p className="mt-4 max-w-2xl text-slate-300">Meet GDPR/CCPA timelines with a managed portal that verifies identities, orchestrates requests, and maintains compliance records.</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Request a demo</Link>
					<Link to="/contact" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
						<li>Subscription: from $99/mo + $0.50/request</li>
						<li>Implementation: $2,000–$12,000 depending on systems</li>
					</ul>
					<div className="mt-4 flex items-center gap-2 text-xs">
						<DollarSign className="h-3 w-3" />
						Includes templates, training, and compliance checklists.
					</div>
					<a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
						See privacy solutions <ExternalLink className="ml-1 h-3 w-3" />
					</a>
					<div className="mt-6 text-xs text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
				</div>
			</section>
		</div>
	);
};

export default DSRPortal;