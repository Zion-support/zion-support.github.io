import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BookOpen, Bot, Workflow, Bell, DollarSign, ExternalLink } from 'lucide-react';

const HelpdeskPlatform: React.FC = () => {
	const capabilities = [
		{ icon: MessageSquare, title: 'Omnichannel Tickets', desc: 'Email, chat, and social inbox with SLAs and macros.' },
		{ icon: BookOpen, title: 'Knowledge Base', desc: 'SEO-friendly docs with feedback, search, and versioning.' },
		{ icon: Bot, title: 'AI Assistant', desc: 'LLM-trained on your docs to suggest answers and draft replies.' },
		{ icon: Workflow, title: 'Automation', desc: 'Routing, escalations, and workflows integrating Slack/Teams/Jira.' },
		{ icon: Bell, title: 'Status & Incidents', desc: 'Public status page, maintenance windows, and postmortems.' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
				<h1 className="text-4xl font-bold sm:text-5xl">Helpdesk & Support Platform</h1>
				<p className="mt-4 max-w-2xl text-slate-300">Everything you need to support customers at scale—tickets, docs, chat, and AI—deployed in weeks, not months.</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Book a demo</Link>
					<Link to="/contact" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{capabilities.map((c) => (
						<div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
							<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
								<c.icon className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold">{c.title}</h3>
							<p className="mt-2 text-sm text-slate-300">{c.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
					<div className="mb-2 font-semibold text-white">Pricing</div>
					<ul className="grid gap-2 sm:grid-cols-2">
						<li>Starter: from $99/mo</li>
						<li>Pro: from $399/mo</li>
						<li>Enterprise: custom, SSO + audit logging</li>
					</ul>
					<div className="mt-4 flex items-center gap-2 text-xs">
						<DollarSign className="h-3 w-3" />
						Implementation: $2k–$20k depending on data migration and SSO.
					</div>
					<a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
						See support solutions <ExternalLink className="ml-1 h-3 w-3" />
					</a>
					<div className="mt-6 text-xs text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
				</div>
			</section>
		</div>
	);
};

export default HelpdeskPlatform;