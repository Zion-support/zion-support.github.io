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
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary: 'How to evaluate retrieval quality and latency across multimodal pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0',
    summary: 'Dynamic routing and budgets reduce inference costs while maintaining quality.',
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
    title: 'Case Study: 40% Cost Reduction with Agent Routing',
    summary: 'Dynamic model routing and caching that cut costs while improving responses.',
    href: '/updates/rag-agents-case-study',
    date: '2025-09-16',
    tag: 'Case Study'
  },
  {
    title: 'Track: Web3 Fundamentals (Learning Path)',
    summary: 'Blockchain basics, NFTs, and Web3 security with hands-on labs.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-16',
    tag: 'Course'
  },

  // Featured blog and updates
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary: 'Observability patterns with tracing, metrics, and alerting for agent systems.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary: 'Implement autonomous business operations with agents: strategy to rollout.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary: 'Executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Predictive insights, anomaly detection, and performance visualization.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
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
