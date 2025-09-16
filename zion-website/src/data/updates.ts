export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

// Final resolved list (newest first); we also sort on read for safety
export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Playbook: Production RAG Latency Budgets (2026)'
    , summary: 'Define SLOs, budgets, and guardrails for low‑latency, high‑quality retrieval.'
    , href: '/updates/production-rag-latency-budgets-2026'
    , date: '2025-09-16'
    , tag: 'Playbook'
  },
  {
    title: 'Case Study: 40% Cost Reduction with Agent Routing'
    , summary: 'Dynamic routing and caching cut costs while improving quality in production.'
    , href: '/updates/rag-agents-case-study'
    , date: '2025-09-16'
    , tag: 'Case Study'
  },
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)'
    , summary: 'Practical controls, eval gates, and incident playbooks for safe AI ops.'
    , href: '/updates/ai-risk-mitigation-guide-2026'
    , date: '2025-09-16'
    , tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0'
    , summary: 'Automated routing and dynamic budgets reduce inference costs by 27%.'
    , href: '/updates/real-time-agent-cost-optimizer-1-0'
    , date: '2025-09-16'
    , tag: 'Release'
  },
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)'
    , summary: 'Observability patterns for production agent systems with tracing and metrics.'
    , href: '/blog/ai-2026-enterprise-agent-observability-deep-dive'
    , date: '2025-09-15'
    , tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)'
    , summary: 'End-to-end guide to implementing autonomous operations with AI agents.'
    , href: '/blog/ai-2026-autonomous-business-operations-complete-guide'
    , date: '2025-09-15'
    , tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)'
    , summary: 'Enforce executable policies across CI/CD and runtime with eval gates.'
    , href: '/blog/ai-2026-policy-as-code-production-blueprint'
    , date: '2025-09-15'
    , tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0'
    , summary: 'Predictive insights, anomaly detection, performance visualization for AI systems.'
    , href: '/updates/real-time-ai-analytics-dashboard-v3-0'
    , date: '2025-09-15'
    , tag: 'Launch'
  }
]

export function getLatestUpdates(limit: number = 6): SiteUpdate[] {
  const toTime = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => toTime(b.date) - toTime(a.date))
    .slice(0, limit)
}
