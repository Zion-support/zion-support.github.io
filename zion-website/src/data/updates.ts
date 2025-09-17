export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

<<<<<<< HEAD
export const siteUpdates: SiteUpdate[] = [
<<<<<<< HEAD
=======
  // New content added 2025-09-16 (advertised on homepage)
  {
    title: 'Blueprint: Real-Time Evals Control Plane (2026)',
    summary: 'Unify datasets, rubrics, live canaries, and rollback policies under one control plane.',
    href: '/updates/real-time-evals-control-plane',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Realtime Agent Observatory 1.0',
    summary: 'End-to-end traces, metrics, and guardrails with evidence capture for agent actions.',
    href: '/updates/realtime-agent-observatory-1-0',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Deep Dive: State of Agent Tooling (2026)',
    summary: 'An objective look at the rapidly evolving agent tool ecosystem and integration patterns.',
    href: '/updates/state-of-agent-tooling-2026',
    date: '2025-09-16',
    tag: 'Deep Dive'
  },
  // Fresh content added 2025-09-16
  {
    title: 'Blueprint: Secure Tooling Permissions (2026)',
    summary: 'Risk‑tiered adapters, approvals, and budgets for safe agent actions.',
    href: '/blog/ai-2026-secure-tooling-permissions-blueprint',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Risk: Operational Metrics for Agents (2026)',
    summary: 'Standardize override rates, violations, groundedness, and MTTR across teams.',
    href: '/blog/ai-2026-operational-risk-metrics-for-agents',
    date: '2025-09-16',
    tag: 'Risk'
  },
  {
    title: 'Guide: Production RAG Latency Budgets (2026)',
    summary: 'A pragmatic framework to set and enforce latency budgets for production RAG systems.',
    href: '/blog/ai-2026-production-rag-latency-budgets',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Blueprint: Real-Time Retrieval Architectures (2026)',
    summary: 'Design patterns and reference topologies for low-latency, high-recall real-time retrieval.',
    href: '/blog/ai-2026-real-time-retrieval-architectures',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0',
    summary: 'Automated routing and dynamic budgets to reduce agent inference costs by 27%.',
    href: '/updates/real-time-agent-cost-optimizer-1-0',
    date: '2025-09-16',
    tag: 'Release'
  },
  {
    title: 'Blueprint: Eval‑Ready AI Pipelines (2026)',
    summary: 'From datasets to live canaries with objective rubrics and automated rollbacks.',
    href: '/updates/eval-ready-ai-pipelines-guide',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Deep Dive: Enterprise Retrieval Observability (2026)',
    summary: 'Tracing, SLIs, and evals for reliable retrieval‑augmented systems in production.',
    href: '/updates/enterprise-retrieval-observability-2026',
    date: '2025-09-16',
    tag: 'Deep Dive'
  },
  {
    title: 'Launch: Agent Reliability Scorecards v1.0',
    summary: 'Standardized SLIs, risk signals, and trend analytics for agent reliability at scale.',
    href: '/updates/agent-reliability-scorecards-1-0',
    date: '2025-09-16',
    tag: 'Release'
  },
  {
    title: 'Field Guide: Trustworthy Model Routing (2026)',
    summary: 'Objective routing with evals, risk signals, and cost-latency tradeoffs backed by evidence.',
    href: '/blog/ai-2026-trustworthy-model-routing',
    date: '2025-09-16',
    tag: 'Field Guide'
  },

  // Existing content
  {
>>>>>>> origin/feat/content-and-homepage-promos-20250916
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
  },
  // Newly added 2025-09-15 (to advertise on homepage)
  {
    title: 'Report: Enterprise Retrieval Observability (2026)',
    summary:
      'Metrics, traces, and dashboards to monitor retrieval quality, drift, and SLIs at scale.',
    href: '/updates/enterprise-retrieval-observability-2026',
    date: '2025-09-15',
    tag: 'Report'
      'Transparent tasks, datasets, and harnesses for reproducible, enterprise-ready AI benchmarking.',
    href: '/updates/ai-lab-open-benchmarks-portal',
export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}

    id: 'advanced-blockchain-course',
    date: '2025-09-08',
    href: '/updates/dapp-challenge',
  },
  {
    id: 'web3-learning-path',
    title: 'New Learning Path: Web3 Fundamentals',
    summary: 'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
    date: '2025-09-05',
    href: '/updates/web3-learning-path',
  },
  {
    id: 'ai-research-lab',
    title: 'AI Research Lab: September Highlights',
    summary: 'Breakthroughs in autonomous research agents and multimodal retrieval.',
    date: '2025-09-01',
    href: '/updates/ai-research-lab-sept',
  },
=======
// Consolidated, deduplicated updates list (most recent first)
export const updates: UpdateItem[] = [
	{
		title: 'Launch: Zero‑Trust Agent Controllers v1.0',
		summary: 'Runtime approvals, budgets, and adaptive policies for safe tool use.',
		href: '/updates/zero-trust-agent-controllers-1-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Operational Risk Metrics for Agents (2026)',
		summary: 'Standardize violations, overrides, groundedness, and MTTR across teams.',
		href: '/updates/agent-risk-metrics-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Guide: Real‑Time Retrieval Architectures (2026)',
		summary: 'Reference designs and trade‑offs for low‑latency, high‑quality retrieval.',
		href: '/updates/real-time-retrieval-architectures-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Report: Enterprise Retrieval Observability (2026)',
		summary: 'SLIs, traces, and eval overlays for reliable retrieval systems in prod.',
		href: '/updates/enterprise-retrieval-observability-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing and token budgeting with live cost/quality trade‑offs.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Evals‑in‑Prod Best Practices (2026 Preview)',
		summary: 'Blueprint for safe iteration using canaries, auto‑rollbacks, and quality gates.',
		href: '/updates/evals-in-prod-best-practices-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Report: Autonomous Failure Analysis Toolkit v1.0',
		summary: 'Root‑cause analysis for agent incidents with trace diffs and evidence bundles.',
		href: '/updates/autonomous-failure-analysis-toolkit-1-0',
		date: '2025-09-16',
		tag: 'Report',
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
>>>>>>> origin/feat/new-updates-and-promos
]

