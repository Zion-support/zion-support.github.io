export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Launch: Evaluation-Driven FinOps (Starter Kit)',
    summary: 'Reduce LLM cost-to-value with eval gates, routing policies, and safety budgets.',
    href: '/updates/evaluation-driven-finops',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Guide: Real-Time Model Routing Playbook (2026 Preview)',
    summary: 'Production patterns for cost-aware, safety-aware routing with live telemetry and rollback.',
    href: '/updates/real-time-model-routing-playbook-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Advanced real-time monitoring with predictive insights and anomaly detection.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  }
]

export function getLatestUpdates(limit: number = 6): SiteUpdate[] {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}

