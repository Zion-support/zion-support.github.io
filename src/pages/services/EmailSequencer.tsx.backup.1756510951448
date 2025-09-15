import { Mail, Zap, Calendar, BarChart3, Check, Link as LinkIcon } from 'lucide-react';

export default function EmailSequencer() {
	const features = [
		'Multi-step sequences with A/B testing',
		'AI subject line and body suggestions',
		'CRM/webhook integrations (HubSpot, Salesforce, Slack)',
		'Smart send windows and reply-detection',
		'Per-recipient throttling and warmup controls',
		'Compliance: unsubscribe, custom domains, DKIM/SPF/DMARC tips'
	];

	const plans = [
		{ name: 'Launch', price: '$49/mo', details: ['Up to 2,500 sends', '1 domain', 'Basic templates'] },
		{ name: 'Scale', price: '$149/mo', details: ['Up to 25,000 sends', '3 domains', 'A/B testing, webhooks'] },
		{ name: 'Teams', price: '$399/mo', details: ['100,000+ sends', 'SAML/SSO', 'Priority support'] }
	];

	const references = [
		{ label: 'HubSpot Email Marketing Pricing', href: 'https://www.hubspot.com/pricing/marketing/email' },
		{ label: 'Mailchimp Pricing', href: 'https://mailchimp.com/pricing/marketing/' },
		{ label: 'Lemlist Pricing', href: 'https://lemlist.com/pricing' },
		{ label: 'Salesloft Pricing', href: 'https://salesloft.com/pricing/' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
			<section className="max-w-7xl mx-auto px-6 py-20">
				<div className="text-center mb-12">
					<div className="mx-auto w-16 h-16 rounded-2xl bg-zion-cyan/20 flex items-center justify-center mb-4">
						<Mail className="w-8 h-8 text-zion-cyan" />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white">Email Sequencer</h1>
					<p className="mt-4 text-lg text-zion-slate-light max-w-2xl mx-auto">
						Automate multi-step outreach with AI-assisted copy, throttling, and deep CRM/webhook integrations.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					{features.map((f) => (
						<div key={f} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
							<Check className="w-5 h-5 text-zion-cyan mb-3" />
							<p className="text-white text-sm">{f}</p>
						</div>
					))}
				</div>

				<div className="mb-16">
					<h2 className="text-2xl font-semibold text-white mb-6">Plans</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{plans.map((p) => (
							<div key={p.name} className="p-6 rounded-2xl border border-white/10 bg-white/5">
								<div className="flex items-center justify-between mb-2">
									<h3 className="text-white font-bold">{p.name}</h3>
									<span className="text-zion-cyan font-semibold">{p.price}</span>
								</div>
								<ul className="space-y-2">
									{p.details.map((d) => (
										<li key={d} className="flex items-start text-zion-slate-light text-sm">
											<Check className="w-4 h-4 text-zion-cyan mr-2 mt-0.5" /> {d}
										</li>
									))}
								</ul>
								<button className="mt-4 w-full py-2 rounded-lg bg-zion-cyan/20 text-white hover:bg-zion-cyan/30 transition">Start Trial</button>
							</div>
						))}
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-semibold text-white mb-4">Market reference links</h2>
					<p className="text-zion-slate-light mb-4 text-sm">Compare typical pricing and features across leading platforms:</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{references.map((ref) => (
							<a key={ref.href} href={ref.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
								<LinkIcon className="w-4 h-4 text-zion-cyan mr-2" />
								<span className="text-white text-sm">{ref.label}</span>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

