export type UpdateItem = {
	id: string;
	title: string;
	summary: string;
	href: string;
	date: string; // ISO yyyy-mm-dd
	tag:
		| 'Course'
		| 'Announcement'
		| 'Challenge'
		| 'Research'
		| 'Release'
		| 'Guide'
		| 'Launch'
		| 'Product'
		| 'Case Study'
		| 'Blueprint'
		| 'Report'
		| 'Deep Dive'
		| 'Complete Guide';
};

export const updates: UpdateItem[] = [
	{
		id: 'ai-agents-lab-opening',
		title: 'Launch: AI Agents Innovation Lab',
		summary: 'Hands-on lab with real agentic workflows, evals, and governance. Apply to join.',
		href: '/updates/ai-agents-lab-opening',
		date: '2025-09-15',
		tag: 'Announcement',
	},
	{
		id: 'ai-governance-bootcamp',
		title: 'New Bootcamp: Enterprise AI Governance (Oct 2025)',
		summary: 'Risk, policy, evals, and controls for enterprise AI. Cohort applications open.',
		href: '/updates/ai-governance-bootcamp',
		date: '2025-09-15',
		tag: 'Course',
	},
	{
		id: 'agent-observability-q3-2025',
		title: 'Research: Agent Observability Insights (Q3 2025)',
		summary: 'Findings on monitoring agent behaviors, failure modes, and interventions at scale.',
		href: '/updates/agent-observability-q3-2025',
		date: '2025-09-14',
		tag: 'Research',
	},
	{
		id: 'website-ux-refresh-2025',
		title: 'Announcement: Website UX Refresh and Accessibility Upgrades',
		summary: 'Improved navigation, performance, and WCAG-focused accessibility across the site.',
		href: '/updates/website-ux-refresh-2025',
		date: '2025-09-13',
		tag: 'Announcement',
	},
	{
		id: 'advanced-blockchain-development',
		title: 'New Course: Advanced Blockchain Development',
		summary: 'Smart contracts, DeFi, L2 scaling, and security best practices.',
		href: '/updates/advanced-blockchain-development',
		date: '2025-09-10',
		tag: 'Course',
	},
	{
		id: 'dapp-challenge',
		title: 'Community Challenge: Build a DApp',
		summary: 'Join our DApp challenge and win prizes. Details inside.',
		href: '/updates/dapp-challenge',
		date: '2025-09-05',
		tag: 'Challenge',
	},
	{
		id: 'ai-research-it-ops',
		title: 'Research Release: Autonomous Agents for IT Operations',
		summary: 'Paper and demo exploring agentic automation for enterprise IT workflows.',
		href: '/updates/ai-research-it-ops',
		date: '2025-09-03',
		tag: 'Research',
	},
	{
		id: 'zion-os-1-2',
		title: 'Zion OS v1.2 Released',
		summary: 'Performance improvements, modular deployments, and governance tooling.',
		href: '/updates/zion-os-1-2',
		date: '2025-09-01',
		tag: 'Release',
	},

	// New content (today)
	{
		id: 'ai-2026-production-guardrails',
		title: 'Blueprint: Production Guardrails for AI Systems (2026)',
		summary: 'Executable policies, eval gates, and observability patterns for safe scale.',
		href: '/blog/ai-2026-production-guardrails-blueprint',
		date: '2025-09-16',
		tag: 'Blueprint',
	},
	{
		id: 'real-time-rag-latency-patterns',
		title: 'Guide: Real-Time RAG Latency Patterns',
		summary: 'Sub-500ms retrieval via caches, hybrids, and streaming with groundedness checks.',
		href: '/blog/ai-2026-real-time-rag-latency-patterns',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		id: 'eval-ready-pipelines-starter',
		title: 'Report: Eval-Ready Pipelines Starter',
		summary: 'From offline suites to live canaries and rollback with audit-ready evidence.',
		href: '/insights/eval-ready-pipelines-starter',
		date: '2025-09-16',
		tag: 'Report',
	},
];

export function getLatestUpdates(limit: number = 6): UpdateItem[] {
	const toTs = (d: string) => new Date(d).getTime() || 0;
	return [...updates]
		.sort((a, b) => toTs(b.date) - toTs(a.date))
		.slice(0, limit);
}
