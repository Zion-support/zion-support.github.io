import React from 'react';
import SEO from '../components/SEO';

const ext = (url: string) => (
	<a className="text-cyan-400 underline" href={`/out?u=${encodeURIComponent(url)}`} target="_blank" rel="nofollow noopener noreferrer">{url.replace('https://', '')}</a>
);

export default function ServicesAdvertisingPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<SEO title="Services Advertising | Zion Tech Group" description="Features, benefits, and market references for Zion Tech Group services" url="https://ziontechgroup.com/services-advertising/" />
			<div className="max-w-6xl mx-auto space-y-10">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services Advertising</h1>

  const benefits = [
    '1000% ROI target with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations',
    'No long-term lock-in; cancel anytime',
    'SOC 2-aligned processes and data handling',
    'Flexible deployment: SaaS or self-hosted options'
  ];

				{/* New: Core micro SaaS and AI additions */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Social Media Manager</h2>
					<p className="text-slate-300">Generate, schedule, and optimize multi-platform posts with best-time recommendations and analytics.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$80/mo</li>
						<li>References: {ext('https://buffer.com/pricing')}, {ext('https://www.hootsuite.com/plans')}</li>
						<li>Try: <a href="/services/ai-social-media-manager" className="text-cyan-400 underline">ziontechgroup.com/services/ai-social-media-manager</a></li>
					</ul>
				</section>


				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Document Summarizer</h2>
					<p className="text-slate-300">Concise summaries with citations for PDFs, docs, and URLs with export options.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical budget: $10–$30/mo + usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.pinecone.io/pricing/')}</li>
						<li>Try: <a href="/services/ai-document-summarizer" className="text-cyan-400 underline">ziontechgroup.com/services/ai-document-summarizer</a></li>
					</ul>
				</section>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Services That Ship Outcomes
            </h1>
            <p className="text-gray-300 text-lg">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
                Talk to Sales <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4 border border-gray-600 text-gray-200">
                View Market Pricing <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">New Real Micro SaaS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                { name: 'API Security Scanner', price: '$299/mo', href: '/services/api-security-scanner', points: ['OWASP Top 10', 'CI/CD checks', 'PII detection'] },
                { name: 'Email DMARC Analyzer', price: '$99/mo', href: '/services/email-dmarc-analyzer', points: ['DMARC/SPF/DKIM', 'BIMI readiness', 'Weekly reports'] },
                { name: 'Browser Performance Monitor', price: '$149/mo', href: '/services/browser-performance-monitor', points: ['RUM + Synthetic', 'Core Web Vitals', 'Alerts'] },
                { name: 'Cloud Cost Optimizer', price: '$399/mo', href: '/services/cloud-cost-optimizer', points: ['Anomalies', 'Rightsizing', 'Budgets'] },
                { name: 'API Observability Starter', price: '$149/mo', href: '/services/api-observability-starter', points: ['Traces', 'SLOs', 'Deps map'] }
              ].map((o) => (
                <a key={o.name} href={o.href} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40">
                  <div className="text-sm text-gray-400 mb-1">From</div>
                  <div className="text-2xl font-bold text-white">{o.price}</div>
                  <div className="text-gray-200 mt-2 mb-3">{o.name}</div>
                  <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                    {o.points.map((p) => (<li key={p}>{p}</li>))}
                  </ul>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                    <p className="text-gray-200">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>


				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">API Performance Testing</h2>
					<p className="text-slate-300">Load, latency and regression testing with CI gates and dashboards.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical budget: $30–$150/mo</li>
						<li>References: {ext('https://k6.io/pricing')}, {ext('https://jmeter.apache.org/')}</li>
						<li>Try: <a href="/services/api-performance-testing" className="text-cyan-400 underline">ziontechgroup.com/services/api-performance-testing</a></li>
					</ul>
				</section>


				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Podcast Transcription & Insights</h2>
					<p className="text-slate-300">Transcripts, chapters, show notes, and SEO-ready blog pages.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical budget: $10–$60/mo + usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.descript.com/pricing')}</li>
						<li>Try: <a href="/services/podcast-transcription-insights" className="text-cyan-400 underline">ziontechgroup.com/services/podcast-transcription-insights</a></li>
					</ul>
				</section>

				<section id="ai-evaluation-orchestrator" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Evaluation Orchestrator</h2>
					<p className="text-slate-300">Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openai.com/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Vector Search Starter</h2>
					<p className="text-slate-300">Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://console.weaviate.cloud/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section id="managed-postgres-ha" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Managed Postgres HA</h2>
					<p className="text-slate-300">SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $1,200–$5,000/mo</li>
						<li>References: {ext('https://cloud.google.com/sql/pricing')}, {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Guardrails & Safety</h2>
					<p className="text-slate-300">Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $0–$500/mo</li>
						<li>References: {ext('https://platform.openai.com/docs/guides/safety-best-practices')}, {ext('https://github.com/guardrails-ai/guardrails')}</li>
					</ul>
				</section>
				
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Identity & SSO/SCIM</h2>
					<p className="text-slate-300">Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$1,500/mo</li>
						<li>References: {ext('https://auth0.com/pricing')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
					</ul>
				</section>

}
