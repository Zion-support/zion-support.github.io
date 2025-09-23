<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { Check, ShieldCheck, TrendingUp, Clock, Phone, Mail, MapPin, ExternalLink } from 'lucide-react',
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
=======
import React from 'react';
import Head from 'next/head';
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground';

import { Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react';
>>>>>>> origin/auto/autonomy-17186719616

export default function AIEvalsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
<<<<<<< HEAD
	},

	const features = [
		'Golden datasets and synthetic evalsHallucination and grounding score',
		'Toxicity, bias and safety metricsLLM version comparison reports',
		'CI quality gates and webhooksLatency and cost KPIs with budgets'
	],

	return (
		<QuantumHolographicMatrixBackground>
			<Head>
				<title>AI Evals & Observability | Zion Tech Group</title>
				<meta name="description" content="Ship reliable AI with continuous evaluation, red‑teaming, regression tests and live observability. Guardrails, datasets, dashboards and CI gates included." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-evals" />
			</Head>

			<section className="min-h-screen pt-28 pb-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Evals & Observability</h1>
						<p className="mt-4 text-xl text-gray-300">Continuous evaluation, drift detection, and quality gates to ship safe, trustworthy AI.</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
						<Card className="lg:col-span-2 bg-black/30 border border-cyan-500/30">
							<div className="p-6">
								<h2 className="text-2xl font-semibold text-white mb-4">What you get</h2>
								<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
									{features.map((f) => (
										<li key={f} className="flex items-start gap-2 text-gray-200"><Check className="w-5 h-5 text-emerald-400 mt-0.5" /> <span>{f}</span></li>
									))}
								</ul>
							</div>
						</Card>
						<Card className="bg-black/30 border border-cyan-500/30">
							<div className="p-6">
								<div className="text-3xl font-bold text-white">Starting at $99<span className="text-base text-gray-400">/month</span></div>
								<div className="text-sm text-gray-400 mt-1">14-day trial • Setup: 45 minutes</div>
								<div className="flex items-center gap-2 text-yellow-400 mt-3"><TrendingUp className="w-4 h-4" /> Reduce regressions 30–60%</div>
								<div className="mt-4">
									<Button href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Request Demo</Button>
								</div>
							</div>
						</Card>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						<Card className="p-6 bg-black/30 border border-purple-500/30">
							<h3 className="text-lg font-semibold mb-2">Guardrails & Policies</h3>
							<p className="text-gray-300 text-sm">Safety checks for toxicity, PII/PHI, jailbreaks and policy enforcement before responses reach users.</p>
						</Card>
						<Card className="p-6 bg-black/30 border border-emerald-500/30">
							<h3 className="text-lg font-semibold mb-2">Observability</h3>
							<p className="text-gray-300 text-sm">Latency, cost, and quality KPIs with prompt/version diffs and canary alerts in CI and prod.</p>
						</Card>
						<Card className="p-6 bg-black/30 border border-cyan-500/30">
							<h3 className="text-lg font-semibold mb-2">Integrations</h3>
							<p className="text-gray-300 text-sm">GitHub Actions, CircleCI, Datadog, Slack and PagerDuty. SDKs for Node and Python.</p>
						</Card>
					</div>

					<div className="bg-black/20 border border-cyan-500/30 rounded-2xl p-6">
						<h3 className="text-xl font-semibold text-white mb-4 text-center">Contact</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
							<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /> <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo.mobile}</a></div>
							<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
							<div className="flex items-center justify-center gap-2 text-emerald-400"><MapPin className="w-4 h-4" /> <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs">{contactInfo.address}</a></div>
						</div>
						<div className="text-center mt-6">
							<Button href="/services" variant="outline" className="border-cyan-500 text-cyan-400">Explore Services <ExternalLink className="w-4 h-4 ml-2" /></Button>
						</div>
					</div>
				</div>
			</section>
		</QuantumHolographicMatrixBackground>
	),
=======
	};

	const plans = [
		{ name: 'Startup', price: '$149/month', items: ['5K eval calls', 'Latency/Cost tracking', 'Toxicity/PII checks', 'CSV export'] },
		{ name: 'Growth', price: '$499/month', items: ['50K eval calls', 'Custom metrics (BLEU/ROUGE/F1)', 'CI evals via API', 'Slack alerts'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Private cloud/VPC', 'SLA & audit logs', 'SOC2 support', 'SAML/SSO'] },
	];

	return (
		<QuantumHolographicMatrixBackground intensity={1.5}>
			<Head>
				<title>AI Evaluations Platform | Zion Tech Group</title>
				<meta name="description" content="Automated LLM evaluation with accuracy, faithfulness, latency, and cost metrics. Integrate with CI and guardrails." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-evals" />
			</Head>

			<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto mb-12">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Evaluations</h1>
					<p className="text-xl text-gray-300">Benchmark models and prompts with real metrics and safety checks. Ship reliable AI faster.</p>
					<div className="mt-6 flex justify-center gap-3">
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Get a Demo</a>
						<a href="/resources" className="border-gray-600 text-gray-200">Read Docs</a>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
					{plans.map((p) => (
						<div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
							<h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
							<div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
							<ul className="space-y-2 text-gray-300 text-sm">
								{p.items.map((i) => (
									<li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Key Metric</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-cyan-400"><Gauge /> Accuracy & Faithfulness</div>
						<p className="text-gray-400 mt-2 text-sm">Track quality with BLEU/ROUGE/F1 and hallucination/faithfulness scores across datasets.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Ops Metric</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-purple-400"><Gauge /> Latency & Cost</div>
						<p className="text-gray-400 mt-2 text-sm">Measure P50/P95 latency and per-call costs to optimize throughput and budget.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Safety Metric</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-rose-400"><Gauge /> Guardrails</div>
						<p className="text-gray-400 mt-2 text-sm">PII redaction, toxicity/abuse detection, jailbreak detection, exportable audit logs.</p>
					</div>
				</div>

				<div className="max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
						<div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
						<div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
						<div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
					</div>
					<div className="text-center">
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</a>
					</div>
				</div>
			</div>
		</QuantumHolographicMatrixBackground>
	);
>>>>>>> origin/auto/autonomy-17186719616
}