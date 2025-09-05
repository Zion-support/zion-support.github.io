import React from 'react';
import Head from 'next/head';

const _ext = (_url: string) => (
	<a className="text-cyan-400 underline" href={_url} target="_blank" rel="noopener noreferrer">{_url.replace('https://', _'')}</a>
);

export default function ServicesAdvertisingPage() {_return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Services Advertising | Zion Tech Group</title>
				<meta name="description" content="Features, _benefits, _and market references for Zion Tech Group services" />
				<link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
			</Head>
			<div className="max-w-6xl mx-auto space-y-10">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services Advertising</h1>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Evaluation Orchestrator</h2>
					<p className="text-slate-300">Automate LLM evals, _regression tests, _red-teaming, _and leaderboards across OpenAI, _Anthropic, _Groq, _and more.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {_ext('https://www.anthropic.com/pricing')}, {_ext('https://openrouter.ai/models')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Vector Search Starter</h2>
					<p className="text-slate-300">Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {_ext('https://www.pinecone.io/pricing/')}, {_ext('https://weaviate.io/pricing')}, {_ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Managed Postgres HA</h2>
					<p className="text-slate-300">SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $1,200–$5,000/mo</li>
						<li>References: {_ext('https://cloud.google.com/sql/pricing')}, {_ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Guardrails & Safety</h2>
					<p className="text-slate-300">Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $0–$500/mo</li>
						<li>References: {_ext('https://openai.com/index/safety/')}, {_ext('https://github.com/shreyashankar/gpt-guardrails')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Identity & SSO/SCIM</h2>
					<p className="text-slate-300">Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$1,500/mo</li>
						<li>References: {_ext('https://auth0.com/pricing')}, {_ext('https://workos.com/pricing')}, {_ext('https://www.okta.com/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">API Observability Starter</h2>
					<p className="text-slate-300">Distributed tracing, golden signals dashboards, opinionated SLOs and alerting. Go live in under 60 minutes.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $99–$350/mo</li>
						<li>References: {_ext('https://www.honeycomb.io/pricing/')}, {_ext('https://www.datadoghq.com/pricing/')}, {_ext('https://newrelic.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">API Security Scanner</h2>
					<p className="text-slate-300">OWASP API Top-10 scanning, auth fuzzing and CI gates with remediation diffs and auditor-ready evidence.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $99–$600/mo</li>
						<li>References: {_ext('https://www.stackhawk.com/pricing/')}, {_ext('https://snyk.io/plans/')}, {_ext('https://owasp.org/www-project-api-security/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Email Deliverability Monitor</h2>
					<p className="text-slate-300">DMARC/SPF/DKIM alignment, inbox placement and reputation tracking across providers with DNS change alerts.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $29–$199/mo</li>
						<li>References: {_ext('https://postmarkapp.com/features/deliverability')}, {_ext('https://sendgrid.com/pricing/')}, {_ext('https://dmarc.org/overview/')}, {_ext('https://mxtoolbox.com/problem/dmarc/dmarc-record-not-found')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Cloud Cost Optimizer</h2>
					<p className="text-slate-300">Rightsizing, anomaly detection, savings plans coverage and waste cleanups with finance/engineering dashboards.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $199–$1,000/mo + usage</li>
						<li>References: {_ext('https://www.cloudzero.com/pricing')}, {_ext('https://www.kubecost.com/pricing')}, {_ext('https://aws.amazon.com/savingsplans/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Incident Automation Suite</h2>
					<p className="text-slate-300">Runbooks, chatops, SLO-aware alerts and automated postmortems to reduce MTTR and toil.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $149–$600/mo</li>
						<li>References: {_ext('https://www.pagerduty.com/pricing/')}, {_ext('https://www.firehydrant.com/pricing/')}, {_ext('https://rootly.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">PDF Render API</h2>
					<p className="text-slate-300">Reliable HTML/window.URL to PDF with templates, headers/footers, storage and webhooks.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $19–$99/mo + usage</li>
						<li>References: {_ext('https://docraptor.com/pricing')}, {_ext('https://www.pdfmonkey.io/en/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">API Latency SLO Tracker</h2>
					<p className="text-slate-300">Define latency SLOs, watch error budgets and receive burn-rate alerts for reliable releases.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $39–$149/mo</li>
						<li>References: {_ext('https://www.nobl9.com/platform')}, {_ext('https://www.datadoghq.com/blog/monitor-slo-error-budget/')}, {_ext('https://lightstep.com/service-level-objectives')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Browser Performance Monitor</h2>
					<p className="text-slate-300">RUM for Core Web Vitals, user journeys, regressions and device/geography breakdowns.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $39–$199/mo</li>
						<li>References: {_ext('https://web.dev/vitals/')}, {_ext('https://www.speedcurve.com/pricing/')}, {_ext('https://calibreapp.com/pricing')}</li>
					</ul>
				</section>
			</div>
		</div>
	);
}