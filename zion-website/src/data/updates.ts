export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

// Newest first
export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary: 'Evaluate retrieval quality, sync, and latency across text/image/video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Track: Web3 Fundamentals (Learning Path)',
    summary: 'Beginner path covering blockchain basics, NFTs, and Web3 security with labs.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-16',
    tag: 'Course'
  },
  {
    title: 'Launch: Real-Time Agent Metrics Widgets (v1.0)',
    summary: 'Drop-in UI for latency, cost, and policy signals to observe agents live.',
    href: '/updates/real-time-agent-metrics-widgets-1-0',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Case Study: Cost-Aware Routing with Live Evals',
    summary: 'Reduce spend while maintaining quality by routing with real-time evals.',
    href: '/updates/cost-aware-routing-live-evals',
    date: '2025-09-16',
    tag: 'Case Study'
  },
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary: 'Observability patterns for production agent systems with tracing and alerts.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary: 'Strategy, architecture, and rollout for autonomous business operations.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary: 'Enforce executable policies across CI/CD and runtime with eval gates.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Predictive insights, anomaly detection, and performance visualization for AI.',
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

