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
        title: 'Launch: Real‑Time Agent FinOps Dashboard v1.0',
        summary: 'Live spend, latency, and quality scorecards with budget alerts and routing controls.',
        href: '/updates/real-time-agent-finops-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch'
    },
    {
        title: 'Blog: Continuous Agent Evidence Bundles',
        summary: 'Designing continuous evidence capture for autonomous agents with policy gates and provenance.',
        href: '/blog/ai-2026-continuous-agent-evidence-bundles',
        date: '2025-09-16',
        tag: 'Announcement'
    },
    {
        title: 'Launch: Autonomous Experimentation Toolkit v1.0',
        summary: 'Safe A/Bs and shadow tests with eval gates, policy checks, and audit evidence.',
        href: '/updates/autonomous-experimentation-toolkit-1-0',
        date: '2025-09-16',
        tag: 'Launch'
    },
    {
        title: 'Guide: Production Guardrails for Multimodal Agents (2026)',
        summary: 'Design patterns to gate image/audio/text tools with continuous evals and risk tiers.',
        href: '/updates/production-guardrails-multimodal-agents-2026',
        date: '2025-09-16',
        tag: 'Guide'
    },
    {
        title: 'Launch: Agent Risk Dashboard v1.0',
        summary: 'Unified risk scoring for agents with policy checks and incident drill‑downs.',
        href: '/updates/agent-risk-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch'
    },
    {
        title: 'Guide: Production Prompt Risk Scoring (2026 Preview)',
        summary: 'Measure and mitigate prompt risks with eval gates and red‑team playbooks.',
        href: '/updates/production-prompt-risk-scoring-2026',
        date: '2025-09-16',
        tag: 'Guide'
    },
	{
		title: 'Launch: Autonomous Knowledge Ops Suite v1.1',
		summary: 'Deeper integrations, evidence bundling, and safer tool-use across workflows.',
		href: '/updates/autonomous-knowledge-ops-suite-1-1',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Announcement: ZionGPT 2.1 Real‑Time Reasoning',
		summary: 'Faster step planning, improved tool arbitration, and lower latency streaming.',
		href: '/updates/ziongpt-2-1-real-time-reasoning',
		date: '2025-09-16',
		tag: 'Announcement'
	},
	{
		title: 'Report: State of Agent Observability (2026 Preview)',
		summary: 'Traces, metrics, and eval overlays that speed up incident resolution.',
		href: '/updates/state-of-agent-observability-2026',
		date: '2025-09-16',
		tag: 'Report'
	},
	{
		title: 'Guide: E2E AI Change Evidence Playbook (2026 Preview)',
		summary: 'Practical patterns for evidence bundles, lineage, and policy-as-code at scale.',
		href: '/updates/ai-change-evidence-playbook-2026',
		date: '2025-09-16',
		tag: 'Guide'
	},
	{
		title: 'Case Study: 70% Content Velocity with AI Factory',
		summary: 'How a content team scaled output safely using eval gates and guardrails.',
		href: '/updates/ai-content-factory-velocity-70',
		date: '2025-09-16',
		tag: 'Case Study'
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing with budgeted quality, latency and spend controls for production.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Guide: Evals‑in‑Prod Best Practices (2026)',
		summary: 'Canaries, metric gates, auto‑rollbacks, and risk scoring for safe iteration.',
		href: '/updates/evals-in-prod-best-practices-2026',
		date: '2025-09-16',
		tag: 'Guide'
	},
	{
		title: 'Report: Autonomous Failure Analysis Toolkit',
		summary: 'Trace diffs, evidence bundles, and reproducible post‑mortems for agent incidents.',
		href: '/updates/autonomous-failure-analysis-toolkit-1-0',
		date: '2025-09-16',
		tag: 'Report'
	},
	{
		title: 'Launch: AI Security Evidence Vault v1.0',
		summary: 'Centralized evidence bundles with automated chain-of-custody and policy checks.',
		href: '/updates/ai-security-evidence-vault-v1',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Launch: AI Governance Dashboard v5',
		summary: 'Cross-env policy posture, eval gates, exceptions, and signed audit evidence.',
		href: '/updates/ai-governance-dashboard-v5',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Report: State of Real-Time RAG (2026 Preview)',
		summary: 'Streaming retrieval benchmarks for latency, hit rate, and answer quality.',
		href: '/updates/state-of-real-time-rag-2026',
		date: '2025-09-16',
		tag: 'Report'
	},
	{
		title: 'Launch: Agent Reliability Scorecards v1.0',
		summary: 'Standardized SLIs, risk signals, and trend analytics for agent reliability.',
		href: '/updates/agent-reliability-scorecards-1-0',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing and token budgeting with live cost/quality trade‑offs.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Launch: Real‑Time Agent Observability Console v1.1',
		summary: 'Live traces, tool metrics, and eval overlays for production agents.',
		href: '/updates/agent-observability-console-1-1',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Guide: Real-Time Evals Control Plane',
		summary: 'Centralize eval gates, rollout policies, and live scorecards across services.',
		href: '/updates/real-time-evals-control-plane',
		date: '2025-09-16',
		tag: 'Guide'
	},
	{
		title: 'Report: State of Agent Reliability (2026 Preview)',
		summary: 'Incident patterns, SLOs, and resilience tactics from large-scale agent systems.',
		href: '/updates/agent-reliability-report-2026',
		date: '2025-09-16',
		tag: 'Report'
	},
	{
		title: 'Launch: Autonomous Support Copilot v1.2',
		summary: 'Faster resolutions with evidence bundles, safer tool-use, and proactive guardrails.',
		href: '/updates/autonomous-support-copilot-1-2',
		date: '2025-09-16',
		tag: 'Launch'
	},
	{
		title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
		summary: 'Evaluate retrieval quality, sync, and latency across text, image, and video pipelines.',
		href: '/updates/multimodal-rag-benchmarking-2026',
		date: '2025-09-15',
		tag: 'Guide'
	},
	{
		title: 'Case Study: 50% MTTR Reduction with Evals-in-Prod',
		summary: 'Incident-driven improvements using live evals, guardrails, and cost-aware routing.',
		href: '/updates/mttr-reduction-evals-in-prod',
		date: '2025-09-14',
		tag: 'Case Study'
	},
	{
		title: 'Launch: Compliance Auditor v1.0',
		summary: 'Automated compliance checks with policy-as-code and evidence collection.',
		href: '/updates/compliance-auditor-1-0',
		date: '2025-09-15',
		tag: 'Launch'
	},
	{
		title: 'Report: State of AI Automation (2026 Preview)',
		summary: 'Trends, metrics, and adoption patterns shaping the next wave of AI-led automation.',
		href: '/insights/state-of-ai-automation-2025',
		date: '2025-09-15',
		tag: 'Report'
	},
	{
		title: 'Announcement: Website UX Refresh and Accessibility Upgrades',
		summary: 'Improved navigation, performance, and WCAG-focused accessibility enhancements across the site.',
		href: '/updates/website-ux-refresh-2025',
		date: '2025-09-13',
		tag: 'Announcement'
	},
	{
		title: 'New Course: GenAI Engineering Masterclass',
		summary: 'Hands-on RAG, agents, evals, safety, and productionization.',
		href: '/updates/genai-engineering-masterclass',
		date: '2025-09-13',
		tag: 'Course'
	},
	{
		title: 'Community Challenge: Build a DApp',
		summary: 'Join the DApp challenge and win prizes up to $1000 in ZION tokens.',
		href: '/updates/dapp-challenge',
		date: '2025-09-05',
		tag: 'Challenge'
	},
	{
		title: 'Research Release: Autonomous Agents for IT Operations',
		summary: 'New paper and demo exploring agentic automation for enterprise IT workflows.',
		href: '/updates/ai-research-it-ops',
		date: '2025-09-03',
		tag: 'Research'
	},
	{
		title: 'Zion OS v1.2 Released',
		summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
		href: '/updates/zion-os-1-2',
		date: '2025-09-01',
		tag: 'Release'
	},
  // Newly added updates (2025-09-16)
  {
    title: 'Launch: Real‑Time Agent Cost Optimizer v2.0 — Deep Dive',
    summary: 'Architecture, KPIs, and rollout lessons from cost‑aware, eval‑gated routing.',
    href: '/updates/real-time-agent-cost-optimizer-2-0-deep-dive',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Guide: Evals‑in‑Prod Control Plane (2026)',
    summary: 'Blueprint for live evals, policy gates, and evidence bundles across environments.',
    href: '/updates/evals-in-prod-control-plane-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Report: Autonomous Failure Analysis Toolkit (2026)',
    summary: 'Trace diffs, lineage captures, and reproducible post‑mortems for agent incidents.',
    href: '/updates/autonomous-failure-analysis-toolkit-2026',
    date: '2025-09-16',
    tag: 'Report'
  }
]

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
	return [...updates]
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.slice(0, limit)
}

// Compatibility exports for pages expecting these names
export type SiteUpdate = UpdateItem
export const siteUpdates: SiteUpdate[] = updates

