import React from 'react';
import Head from 'next/head';

const ext = (url: string) => (
	<a className=&quot;text-cyan-400 underline&quot; href={url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>{url.replace('https://', '')}</Link>
);

export default function ServicesAdvertisingPage() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<Head>
				<title>Services Advertising | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Features, benefits, and market references for Zion Tech Group services&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services-advertising&quot; />
			</Head>
			<div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Services Advertising</h1>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>AI Evaluation Orchestrator</h2>
					<p className=&quot;text-slate-300&quot;>Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Vector Search Starter</h2>
					<p className=&quot;text-slate-300&quot;>Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://weaviate.io/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Managed Postgres HA</h2>
					<p className=&quot;text-slate-300&quot;>SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $1,200–$5,000/mo</li>
						<li>References: {ext('https://cloud.google.com/sql/pricing')}, {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>AI Guardrails & Safety</h2>
					<p className=&quot;text-slate-300&quot;>Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $0–$500/mo</li>
						<li>References: {ext('https://openai.com/index/safety/')}, {ext('https://github.com/shreyashankar/gpt-guardrails')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Identity & SSO/SCIM</h2>
					<p className=&quot;text-slate-300&quot;>Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $100–$1,500/mo</li>
						<li>References: {ext('https://auth0.com/pricing')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>API Observability Starter</h2>
					<p className=&quot;text-slate-300&quot;>Distributed tracing, golden signals dashboards, opinionated SLOs and alerting. Go live in under 60 minutes.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $99–$350/mo</li>
						<li>References: {ext('https://www.honeycomb.io/pricing/')}, {ext('https://www.datadoghq.com/pricing/')}, {ext('https://newrelic.com/pricing')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>API Security Scanner</h2>
					<p className=&quot;text-slate-300&quot;>OWASP API Top-10 scanning, auth fuzzing and CI gates with remediation diffs and auditor-ready evidence.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $99–$600/mo</li>
						<li>References: {ext('https://www.stackhawk.com/pricing/')}, {ext('https://snyk.io/plans/')}, {ext('https://owasp.org/www-project-api-security/')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Email Deliverability Monitor</h2>
					<p className=&quot;text-slate-300&quot;>DMARC/SPF/DKIM alignment, inbox placement and reputation tracking across providers with DNS change alerts.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $29–$199/mo</li>
						<li>References: {ext('https://postmarkapp.com/features/deliverability')}, {ext('https://sendgrid.com/pricing/')}, {ext('https://dmarc.org/overview/')}, {ext('https://mxtoolbox.com/problem/dmarc/dmarc-record-not-found')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Cloud Cost Optimizer</h2>
					<p className=&quot;text-slate-300&quot;>Rightsizing, anomaly detection, savings plans coverage and waste cleanups with finance/engineering dashboards.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $199–$1,000/mo + usage</li>
						<li>References: {ext('https://www.cloudzero.com/pricing')}, {ext('https://www.kubecost.com/pricing')}, {ext('https://aws.amazon.com/savingsplans/')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Incident Automation Suite</h2>
					<p className=&quot;text-slate-300&quot;>Runbooks, chatops, SLO-aware alerts and automated postmortems to reduce MTTR and toil.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $149–$600/mo</li>
						<li>References: {ext('https://www.pagerduty.com/pricing/')}, {ext('https://www.firehydrant.com/pricing/')}, {ext('https://rootly.com/pricing')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>PDF Render API</h2>
					<p className=&quot;text-slate-300&quot;>Reliable HTML/URL to PDF with templates, headers/footers, storage and webhooks.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $19–$99/mo + usage</li>
						<li>References: {ext('https://docraptor.com/pricing')}, {ext('https://www.pdfmonkey.io/en/pricing')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>API Latency SLO Tracker</h2>
					<p className=&quot;text-slate-300&quot;>Define latency SLOs, watch error budgets and receive burn-rate alerts for reliable releases.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $39–$149/mo</li>
						<li>References: {ext('https://www.nobl9.com/platform')}, {ext('https://www.datadoghq.com/blog/monitor-slo-error-budget/')}, {ext('https://lightstep.com/service-level-objectives')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Browser Performance Monitor</h2>
					<p className=&quot;text-slate-300&quot;>RUM for Core Web Vitals, user journeys, regressions and device/geography breakdowns.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $39–$199/mo</li>
						<li>References: {ext('https://web.dev/vitals/')}, {ext('https://www.speedcurve.com/pricing/')}, {ext('https://calibreapp.com/pricing')}</li>
					</ul>
				</section>
			</div>
		</div>
	);
}