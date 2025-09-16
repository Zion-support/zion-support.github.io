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
    title: 'Deep Dive: Grounded Generation in Production (2026)',
    summary: 'Techniques to ensure factual, traceable outputs with retrieval, constraints, and eval gates.',
    href: '/blog/ai-2026-grounded-generation-blueprint',
    date: '2025-09-16',
    tag: 'Deep Dive'
  },
  {
    title: 'Playbook: Real-Time Model Routing (2026)',
    summary: 'Latency- and cost-aware routing strategies with safety envelopes and fallback policies.',
    href: '/blog/ai-2026-real-time-model-routing-playbook',
    date: '2025-09-16',
    tag: 'Playbook'
  },
  {
    title: 'Guide: Production RAG Latency Budgets (2026)',
    summary: 'A pragmatic framework to set and enforce latency budgets for production RAG systems.',
    href: '/blog/ai-2026-production-rag-latency-budgets',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Blueprint: Production Evidence Hub (2026)',
    summary: 'Centralize evals, traces, policy events, and incidents for audits and incident response.',
    href: '/blog/ai-2026-production-evidence-hub-blueprint',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Blueprint: Secure Tooling Permissions (2026)',
    summary: 'Risk‑tiered adapters, approvals, and budgets for safe agent actions in production.',
    href: '/blog/ai-2026-secure-tooling-permissions-blueprint',
    date: '2025-09-16',
    tag: 'Security'
  },
  {
    title: 'Guide: Operational Risk Metrics for Agents (2026)',
    summary: 'Standardize override rates, violations, groundedness, and MTTR across teams.',
    href: '/blog/ai-2026-operational-risk-metrics-for-agents',
    date: '2025-09-16',
    tag: 'Guide'
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
  // Additional fresh content 2025-09-16
  {
    title: 'Blueprint: Real-Time Retrieval Architectures (2026)',
    summary: 'Reference designs and trade-offs for building low-latency retrieval in production.',
    href: '/updates/real-time-retrieval-architectures-2026',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Autonomous Support Copilot 1.1',
    summary: 'Improved handoffs, escalation policies, and grounded responses for enterprise support.',
    href: '/updates/autonomous-support-copilot-1-1',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Guide: Operational Evals for FinOps',
    summary: 'Use evals to enforce cost, latency, and quality budgets across AI pipelines.',
    href: '/updates/evaluation-driven-finops',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Case Study: Hybrid Retrieval Latency',
    summary: 'Empirical results comparing hybrid search latency patterns across real workloads.',
    href: '/updates/hybrid-retrieval-latency-case-study',
    date: '2025-09-16',
    tag: 'Case Study'
  },

  // Existing content
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
    summary:
      'Advanced real-time monitoring and analytics platform with predictive insights, anomaly detection, and comprehensive performance visualization.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Agent Orchestration Platform v2.0',
    summary:
      'Next-generation multi-agent coordination with intelligent routing, load balancing, and real-time monitoring for enterprise AI operations.',
    href: '/updates/ai-agent-orchestration-platform-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Autonomous Testing Framework v1.0',
    summary:
      'Self-healing test automation with intelligent test generation, execution, and maintenance for enterprise applications.',
    href: '/updates/ai-autonomous-testing-framework-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Autonomous Workflow Engine v1.0',
    summary:
      'End-to-end workflow automation with intelligent routing, error handling, and comprehensive audit trails.',
    href: '/updates/ai-autonomous-workflow-engine-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  }
]

export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}
