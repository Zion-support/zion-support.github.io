export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  // New content added 2025-09-16
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary: 'How to evaluate retrieval quality and latency across text, image, and video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
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
    title: 'Playbook: Production RAG Latency Budgets (2026)',
    summary: 'Define SLOs, budgets, and guardrails for low‑latency, high‑quality retrieval.',
    href: '/updates/production-rag-latency-budgets-2026',
    date: '2025-09-16',
    tag: 'Playbook'
  },
  {
    title: 'Toolkit: Eval-Driven Rollouts for Agent Features',
    summary: 'Gate new agent tools and prompts behind live evals with a repeatable workflow.',
    href: '/updates/eval-driven-rollouts-toolkit-2026',
    date: '2025-09-16',
    tag: 'Toolkit'
  },
  {
    title: 'Blueprint: Trustworthy Model Routing (2026)',
    summary: 'Policy- and cost-aware routing with safety backstops and budget enforcement.',
    href: '/updates/trustworthy-model-routing-2026',
    date: '2025-09-16',
    tag: 'Blueprint'
  },

  // Existing featured items
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary: 'Observability patterns for production agent systems with tracing, metrics, and alerting.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary: 'End-to-end guide to implementing autonomous business operations with AI agents.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary: 'Enforce executable policies across CI/CD and runtime with eval gates and evidence.',
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
  }
]

export function getLatestUpdates(count: number = 6): SiteUpdate[] {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, count)
}