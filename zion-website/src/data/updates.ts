export type UpdateTag = 'Launch' | 'Guide' | 'Case Study' | 'Report' | 'Announcement' | 'Course' | 'Challenge' | 'Research' | 'Release' | 'Blueprint' | 'Field Guide' | 'Blog'

export interface UpdateItem {
	title: string
	summary: string
	href: string
	date: string
	tag: UpdateTag
}

// Consolidated, deduplicated updates list (most recent first)
export const updates: UpdateItem[] = [
    // AI Lab fresh articles (2025-09-17)
    {
        title: 'Guide: Evals‑in‑Prod — Rollbacks and Safe Iteration',
        summary: 'Shadow, canary, and progressive delivery with objective gates and clear rollbacks.',
        href: '/reports/ai-lab/articles/new-ai-lab-content-evals-in-prod-rollback-1758134400000.md',
        date: '2025-09-17',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Agent Evidence Bundles',
        summary: 'Standardize capture for incidents and audits with signed provenance and eval metrics.',
        href: '/reports/ai-lab/articles/new-ai-lab-content-agent-evidence-bundles-1758132600000.md',
        date: '2025-09-17',
        tag: 'Blueprint',
    },
    {
        title: 'Field Guide: Grounded RAG Guardrails',
        summary: 'Layered retrieval and answer constraints with objective eval gates in production.',
        href: '/reports/ai-lab/articles/new-ai-lab-content-guardrails-for-rag-1758130800000.md',
        date: '2025-09-17',
        tag: 'Field Guide',
    },
    // Newly added updates (2025-09-16 - additional)
    {
        title: 'Launch: Real‑Time Agent Benchmark Suite v1.0',
        summary: 'Unified latency, quality, and cost benchmarking with shareable scorecards.',
        href: '/updates/real-time-agent-benchmark-suite-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Agent Postmortems — Evidence‑First Templates',
        summary: 'Step-by-step templates for reproducible agent incident analysis with signed evidence.',
        href: '/updates/production-agent-postmortems-evidence-first',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // Newly added updates (2025-09-16)
    {
        title: 'Launch: Real‑Time Agent FinOps Dashboard v1.0',
        summary: 'Live spend, latency, and quality scorecards with budget alerts and routing controls.',
        href: '/updates/real-time-agent-finops-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Zero‑Downtime Agent Releases',
        summary: 'Canary and shadow releases with eval gates, rollback plans, and signed evidence.',
        href: '/updates/zero-downtime-agent-releases-1758081600000',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Zero‑Trust Agent Controllers v1.0',
        summary: 'Scoped permissions, runtime enforcement, and evidence capture for tool use.',
        href: '/updates/zero-trust-agent-controllers-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Agent Change Management Runbook (2026)',
        summary: 'Approval workflows, eval gates, and rollback patterns for safe agent changes.',
        href: '/updates/agent-change-management-runbook-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Trustworthy AI Evidence Vault v1.2',
        summary: 'Faster evidence bundling, expanded policy checks, and auditor-ready exports.',
        href: '/updates/trustworthy-ai-evidence-vault-1-2',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Launch: Autonomous Incident Response Copilot v1.0',
        summary: 'Real-time triage, evidence bundling, and guided remediation for AI systems.',
        href: '/updates/autonomous-incident-response-copilot-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Agent Incident Playbooks (2026)',
        summary: 'Standard response patterns with eval gates, lineage capture, and rollback plans.',
        href: '/blog/ai-2026-production-agent-incident-playbooks',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Enterprise Retrieval Guardrails (2026)',
        summary: 'Grounded generation with constraints, eval gates, and policy-as-code checks.',
        href: '/updates/enterprise-retrieval-guardrails-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Secure Tool Access for Agents',
        summary: 'Scoped tokens, least-privilege adapters, and real-time policy enforcement.',
        href: '/updates/secure-tool-access-for-agents-2026',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Field Guide: Evaluating Multimodal RAG',
        summary: 'Practical rubrics and KPIs for image, audio, and text retrieval pipelines.',
        href: '/updates/field-guide-evaluating-multimodal-rag',
        date: '2025-09-16',
        tag: 'Field Guide',
    },
    {
        title: 'Blog: Shipping Safer Agents with Canary + Shadow',
        summary: 'A pragmatic rollout path that reduces risk while increasing iteration speed.',
        href: '/blog/ai-2026-canary-shadow-for-agent-rollouts',
        date: '2025-09-16',
        tag: 'Blog',
    },
    {
        title: 'Deep Dive: Real‑Time Agent Cost Optimizer v2.0',
        summary: 'Architecture, KPIs, and rollout lessons from cost‑aware, eval‑gated routing.',
        href: '/blog/ai-2026-real-time-agent-cost-optimizer-deep-dive',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Agent Evidence Bundles — 2026 Blueprint',
        summary: 'Design signed evidence bundles with provenance, policy checks, and eval signals.',
        href: '/blog/ai-2026-agent-evidence-bundles-blueprint',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Enterprise Agent Risk Scorecards',
        summary: 'Standardize cross-team risk metrics, thresholds, and alerts for autonomous agents.',
        href: '/blog/ai-2026-enterprise-agent-risk-scorecards',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Autonomous Ops Control Center v2.4',
        summary: 'New playbooks, real-time eval gates, and risk scorecards for safer ops.',
        href: '/updates/autonomous-ops-control-center-2-4',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Agent Observability Blueprint (2026)',
        summary: 'End-to-end traces, SLIs/SLOs, eval overlays, and evidence bundles for agents.',
        href: '/updates/agent-observability-blueprint-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Agent Reliability — 2026 Blueprint',
        summary: 'Standardize SLOs, eval gates, and evidence bundles for reliable production agents.',
        href: '/blog/ai-2026-agent-reliability-blueprint',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Agent Safety Evidence Bundles',
        summary: 'Design evidence bundles with evals, lineage, and policy checks for audits.',
        href: '/blog/ai-2026-agent-safety-evidence-bundles',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Production Evals Control Plane',
        summary: 'Centralize rubrics, thresholds, and rollout gates with live scorecards.',
        href: '/blog/ai-2026-production-evals-control-plane',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Multimodal Guardrails — 2026',
        summary: 'Layered guardrails for image/audio/video agents with risk tiers and eval gates.',
        href: '/blog/ai-2026-multimodal-guardrails-blueprint',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Real‑Time Agent FinOps Dashboard v1.0',
        summary: 'Live spend, latency, and quality scorecards with budget alerts and routing controls.',
        href: '/updates/real-time-agent-finops-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Blog: Continuous Agent Evidence Bundles',
        summary: 'Designing continuous evidence capture for autonomous agents with policy gates and provenance.',
        href: '/blog/ai-2026-continuous-agent-evidence-bundles',
        date: '2025-09-16',
        tag: 'Announcement',
    },
    {
        title: 'Launch: Autonomous Experimentation Toolkit v1.0',
        summary: 'Safe A/Bs and shadow tests with eval gates, policy checks, and audit evidence.',
        href: '/updates/autonomous-experimentation-toolkit-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Guardrails for Multimodal Agents (2026)',
        summary: 'Design patterns to gate image/audio/text tools with continuous evals and risk tiers.',
        href: '/updates/production-guardrails-multimodal-agents-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Agent Risk Dashboard v1.0',
        summary: 'Unified risk scoring for agents with policy checks and incident drill‑downs.',
        href: '/updates/agent-risk-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Prompt Risk Scoring (2026 Preview)',
        summary: 'Measure and mitigate prompt risks with eval gates and red‑team playbooks.',
        href: '/updates/production-prompt-risk-scoring-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
	{
		title: 'Launch: Autonomous Knowledge Ops Suite v1.1',
		summary: 'Deeper integrations, evidence bundling, and safer tool-use across workflows.',
		href: '/updates/autonomous-knowledge-ops-suite-1-1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Announcement: ZionGPT 2.1 Real‑Time Reasoning',
		summary: 'Faster step planning, improved tool arbitration, and lower latency streaming.',
		href: '/updates/ziongpt-2-1-real-time-reasoning',
		date: '2025-09-16',
		tag: 'Announcement',
	},
	{
		title: 'Report: State of Agent Observability (2026 Preview)',
		summary: 'Traces, metrics, and eval overlays that speed up incident resolution.',
		href: '/updates/state-of-agent-observability-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Guide: E2E AI Change Evidence Playbook (2026 Preview)',
		summary: 'Practical patterns for evidence bundles, lineage, and policy-as-code at scale.',
		href: '/updates/ai-change-evidence-playbook-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Case Study: 70% Content Velocity with AI Factory',
		summary: 'How a content team scaled output safely using eval gates and guardrails.',
		href: '/updates/ai-content-factory-velocity-70',
		date: '2025-09-16',
		tag: 'Case Study',
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing with budgeted quality, latency and spend controls for production.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Evals‑in‑Prod Best Practices (2026)',
		summary: 'Canaries, metric gates, auto‑rollbacks, and risk scoring for safe iteration.',
		href: '/updates/evals-in-prod-best-practices-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Report: Autonomous Failure Analysis Toolkit',
		summary: 'Trace diffs, evidence bundles, and reproducible post‑mortems for agent incidents.',
		href: '/updates/autonomous-failure-analysis-toolkit-1-0',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: AI Security Evidence Vault v1.0',
		summary: 'Centralized evidence bundles with automated chain-of-custody and policy checks.',
		href: '/updates/ai-security-evidence-vault-v1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: AI Governance Dashboard v5',
		summary: 'Cross-env policy posture, eval gates, exceptions, and signed audit evidence.',
		href: '/updates/ai-governance-dashboard-v5',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Report: State of Real-Time RAG (2026 Preview)',
		summary: 'Streaming retrieval benchmarks for latency, hit rate, and answer quality.',
		href: '/updates/state-of-real-time-rag-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: Agent Reliability Scorecards v1.0',
		summary: 'Standardized SLIs, risk signals, and trend analytics for agent reliability.',
		href: '/updates/agent-reliability-scorecards-1-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing and token budgeting with live cost/quality trade‑offs.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: Real‑Time Agent Observability Console v1.1',
		summary: 'Live traces, tool metrics, and eval overlays for production agents.',
		href: '/updates/agent-observability-console-1-1',
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
  // Newly added updates (2025-09-16)
  {
    title: 'Launch: Agent Playbook Library v1.0',
    summary: 'Curated incident, rollout, and governance playbooks with eval gates and evidence bundles.',
    href: '/updates/agent-playbook-library-1-0',
    date: '2025-09-16',
    tag: 'Launch',
  },
  {
    title: 'Blueprint: Production Evidence Bundles (2026)',
    summary: 'Standardized artifacts for audits: inputs, outputs, policies, evals, and traces.',
    href: '/updates/production-evidence-bundles-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Field Guide: Canary + Shadow Testing for Agents (2026)',
    summary: 'Incremental rollout patterns with objective gates to de-risk production launches.',
    href: '/updates/canary-and-shadow-testing-for-agents-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Blueprint: Grounded Generation Guardrails (2026)',
    summary: 'Reduce hallucinations in production using retrieval, constraints, and objective eval gates.',
    href: '/updates/grounded-generation-guardrails-2026',
    date: '2025-09-16',
    tag: 'Launch',
  },
  {
    title: 'Guide: Evals‑in‑Prod Control Plane (2026)',
    summary: 'Blueprint for live evals, policy gates, and evidence bundles across environments.',
    href: '/updates/evals-in-prod-control-plane-2026',
    date: '2025-09-16',
    tag: 'Guide',
  },
  {
    title: 'Report: Autonomous Failure Analysis Toolkit (2026)',
    summary: 'Trace diffs, lineage captures, and reproducible post‑mortems for agent incidents.',
    href: '/updates/autonomous-failure-analysis-toolkit-2026',
    date: '2025-09-16',
    tag: 'Report',
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

