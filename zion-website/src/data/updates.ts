export type UpdateTag = 'Launch' | 'Guide' | 'Case Study' | 'Report' | 'Announcement' | 'Course' | 'Challenge' | 'Research' | 'Release'

export interface UpdateItem {
	title: string
	summary: string
	href: string
	date: string
	tag: UpdateTag
}

// Consolidated, deduplicated updates list (most recent first)
export const updates: UpdateItem[] = [
	{
		title: 'Launch: AI Security Evidence Vault v1.0',
		summary: 'Centralized evidence bundles with automated chain-of-custody and policy checks.',
		href: '/updates/ai-security-evidence-vault-v1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: Autonomous Marketing Copilot v1.0',
		summary: 'Campaign generation, eval-gated creatives, and governed tool-use for growth teams.',
		href: '/updates/autonomous-marketing-copilot-1-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Report: State of AI Evaluations (2026 Preview)',
		summary: 'Methods, metrics, and real-world eval gate patterns shaping production AI.',
		href: '/updates/state-of-ai-evaluations-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: Production RAG Observability Suite v1.0',
		summary: 'Unified traces, retrieval KPIs, and drift alerts purpose‑built for RAG.',
		href: '/updates/production-rag-observability-suite-1-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Agentic Change Management in Production (2026 Preview)',
		summary: 'Safe rollout strategies with canaries, eval gates, and policy‑as‑code.',
		href: '/updates/agentic-change-management-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing and token budgeting with live cost/quality trade‑offs.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Real-Time Evals Control Plane',
		summary: 'Centralize eval gates, rollout policies, and live scorecards across services.',
		href: '/updates/real-time-evals-control-plane',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Report: State of Agent Reliability (2026 Preview)',
		summary: 'Incident patterns, SLOs, and resilience tactics from large-scale agent systems.',
		href: '/updates/agent-reliability-report-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: Real‑Time Agent Observability Console v1.1',
		summary: 'Live traces, tool metrics, and eval overlays for production agents.',
		href: '/updates/agent-observability-console-1-1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: Autonomous Support Copilot v1.2',
		summary: 'Faster resolutions with evidence bundles, safer tool-use, and proactive guardrails.',
		href: '/updates/autonomous-support-copilot-1-2',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
		summary: 'Evaluate retrieval quality, sync, and latency across text, image, and video pipelines.',
		href: '/updates/multimodal-rag-benchmarking-2026',
		date: '2025-09-15',
		tag: 'Guide',
	},
	{
		title: 'Case Study: 50% MTTR Reduction with Evals-in-Prod',
		summary: 'Incident-driven improvements using live evals, guardrails, and cost-aware routing.',
		href: '/updates/mttr-reduction-evals-in-prod',
		date: '2025-09-14',
		tag: 'Case Study',
	},
	{
		title: 'Launch: Compliance Auditor v1.0',
		summary: 'Automated compliance checks with policy-as-code and evidence collection.',
		href: '/updates/compliance-auditor-1-0',
		date: '2025-09-15',
		tag: 'Launch',
	},
	{
		title: 'Report: State of AI Automation (2026 Preview)',
		summary: 'Trends, metrics, and adoption patterns shaping the next wave of AI-led automation.',
		href: '/insights/state-of-ai-automation-2025',
		date: '2025-09-15',
		tag: 'Report',
	},
	{
		title: 'Announcement: Website UX Refresh and Accessibility Upgrades',
		summary: 'Improved navigation, performance, and WCAG-focused accessibility enhancements across the site.',
		href: '/updates/website-ux-refresh-2025',
		date: '2025-09-13',
		tag: 'Announcement',
	},
	{
		title: 'New Course: GenAI Engineering Masterclass',
		summary: 'Hands-on RAG, agents, evals, safety, and productionization.',
		href: '/updates/genai-engineering-masterclass',
		date: '2025-09-13',
		tag: 'Course',
	},
	{
		title: 'Community Challenge: Build a DApp',
		summary: 'Join the DApp challenge and win prizes up to $1000 in ZION tokens.',
		href: '/updates/dapp-challenge',
		date: '2025-09-05',
		tag: 'Challenge',
	},
	{
		title: 'Research Release: Autonomous Agents for IT Operations',
		summary: 'New paper and demo exploring agentic automation for enterprise IT workflows.',
		href: '/updates/ai-research-it-ops',
		date: '2025-09-03',
		tag: 'Research',
	},
	{
		title: 'Zion OS v1.2 Released',
		summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
		href: '/updates/zion-os-1-2',
		date: '2025-09-01',
		tag: 'Release',
	},
]

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
	return [...updates]
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.slice(0, limit)
}

// Compatibility exports for pages expecting these names
export type SiteUpdate = UpdateItem
export const siteUpdates: SiteUpdate[] = updates

