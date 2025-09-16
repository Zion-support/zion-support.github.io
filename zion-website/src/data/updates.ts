export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  // Fresh content added 2025-09-16
  {
<<<<<<< HEAD
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
=======
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary:
      'How to evaluate retrieval quality, synchronization, and latency across text, image, and video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
>>>>>>> origin/cursor/create-and-deploy-new-content-9b28
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
<<<<<<< HEAD
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0',
    summary: 'Automated routing and dynamic budgets to reduce agent inference costs by 27%.',
    href: '/updates/real-time-agent-cost-optimizer-1-0',
    date: '2025-09-16',
    tag: 'Release'
  },
	// Fresh content added 2025-09-16 (new)
	{
		title: 'Playbook: Production RAG Latency Budgets (2026)',
		summary: 'Define SLOs, budgets, and guardrails for low‑latency, high‑quality retrieval pipelines.',
		href: '/updates/production-rag-latency-budgets-2026',
		date: '2025-09-16',
		tag: 'Playbook'
	},
	{
		title: 'Case Study: 40% Cost Reduction with Agent Routing',
		summary: 'How dynamic model routing and caching cut costs while improving response quality.',
		href: '/updates/rag-agents-case-study',
		date: '2025-09-16',
		tag: 'Case Study'
	},

  // Existing highlights
=======
    title: 'Track: Web3 Fundamentals (Learning Path)',
    summary:
      'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security with hands-on labs.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-16',
    tag: 'Course'
  },
  {
    title: 'Launch: Real-Time Agent Metrics Widgets (v1.0)',
    summary:
      'Drop-in UI components for latency, cost, and policy signals to observe agent behavior live.',
    href: '/updates/real-time-agent-metrics-widgets-1-0',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Case Study: Cost-Aware Routing with Live Evals',
    summary:
      'Reducing spend while maintaining quality by routing with real-time eval signals in production.',
    href: '/updates/cost-aware-routing-live-evals',
    date: '2025-09-16',
    tag: 'Case Study'
  },

  // Existing featured items
>>>>>>> origin/cursor/create-and-deploy-new-content-9b28
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary:
      'Comprehensive observability patterns for production agent systems with distributed tracing, metrics, and alerting.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary:
      'End-to-end guide to implementing autonomous business operations with AI agents, covering strategy, architecture, and rollout.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary:
      'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Predictive insights, anomaly detection, and performance visualization for AI systems.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
<<<<<<< HEAD
]

export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}

=======
<<<<<<< HEAD
  {
    title: 'Launch: AI Autonomous Workflow Engine v1.0',
    summary:
      'End-to-end workflow automation with intelligent routing, error handling, and comprehensive audit trails.',
    href: '/updates/ai-autonomous-workflow-engine-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Compliance Auditor v1.0',
    summary:
      'Automated compliance checks for AI systems with policy-as-code and evidence collection.',
    href: '/updates/compliance-auditor-1-0',
    date: '2025-09-15',
    tag: 'Launch'
=======
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-6f93
export function getLatestUpdates(count: number = 6): SiteUpdate[] {
  return siteUpdates.slice(0, count)
}
=======
export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  // Fresh content added 2025-09-16
  {
    title: 'Launch: Evaluation-Driven FinOps (Starter Kit)'
    , summary: 'Reduce LLM cost-to-value with eval gates, routing policies, and safety budgets.'
    , href: '/updates/evaluation-driven-finops'
    , date: '2025-09-16'
    , tag: 'Launch'
  },
  {
    title: 'Guide: Real-Time Model Routing Playbook (2026 Preview)'
    , summary: 'Production patterns for cost-aware, safety-aware routing with live telemetry and rollback.'
    , href: '/updates/real-time-model-routing-playbook-2026'
    , date: '2025-09-16'
    , tag: 'Guide'
  },
  // Existing recent content (kept)
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)'
    , summary: 'Comprehensive observability patterns for production agent systems with distributed tracing, metrics, and alerting.'
    , href: '/blog/ai-2026-enterprise-agent-observability-deep-dive'
    , date: '2025-09-15'
    , tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)'
    , summary: 'End-to-end guide to implementing autonomous business operations with AI agents, covering strategy, architecture, and rollout.'
    , href: '/blog/ai-2026-autonomous-business-operations-complete-guide'
    , date: '2025-09-15'
    , tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)'
    , summary: 'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.'
    , href: '/blog/ai-2026-policy-as-code-production-blueprint'
    , date: '2025-09-15'
    , tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0'
    , summary: 'Advanced real-time monitoring and analytics platform with predictive insights, anomaly detection, and comprehensive performance visualization.'
    , href: '/updates/real-time-ai-analytics-dashboard-v3-0'
    , date: '2025-09-15'
    , tag: 'Launch'
  },
  {
    title: 'Launch: AI Agent Orchestration Platform v2.0'
    , summary: 'Next-generation multi-agent coordination with intelligent routing, load balancing, and real-time monitoring for enterprise AI operations.'
    , href: '/updates/ai-agent-orchestration-platform-2-0'
    , date: '2025-09-15'
    , tag: 'Launch'
  },
  {
    title: 'Launch: AI Autonomous Testing Framework v1.0'
    , summary: 'Self-healing test automation with intelligent test generation, execution, and maintenance for enterprise applications.'
    , href: '/updates/ai-autonomous-testing-framework-1-0'
    , date: '2025-09-15'
    , tag: 'Launch'
  }
]

export function getLatestUpdates(count: number = 6): SiteUpdate[] {
  return siteUpdates.slice(0, count)
}
    summary:
      'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
    href: '/updates/web3-fundamentals',
    date: '2025-09-08',
    tag: 'Course',
>>>>>>> origin/feat/updates-content-and-advertising
  },
  {
    id: 'dapp-challenge',
    title: 'Community Challenge: Build a DApp',
    summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-6f93
    href: '/updates/dapp-challenge',
    date: '2025-09-05',
    tag: 'Challenge',
  },
  {
    id: 'ai-research-release',
    title: 'Research Release: Autonomous Agents for IT Operations',
    summary: 'New paper and demo exploring agentic automation for enterprise IT workflows.',
    href: '/updates/ai-research-it-ops',
    date: '2025-09-03',
    tag: 'Research',
  },
  {
    id: 'zion-os-1-2-release',
    title: 'Zion OS v1.2 Released',
    summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
    href: '/updates/zion-os-1-2',
    date: '2025-09-01',
    tag: 'Release',
  },
];

export const getLatestUpdates = (limit = 6) => {
  return [...updates]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
};

>>>>>>> origin/feat/updates-content-and-advertising
>>>>>>> cursor/create-and-deploy-new-content-376e
>>>>>>> origin/cursor/create-and-deploy-new-content-ec50
  }
]

export function getLatestUpdates(count: number = 6): SiteUpdate[] {
  return siteUpdates.slice(0, count)
}
>>>>>>> origin/cursor/create-and-deploy-new-content-9b28
