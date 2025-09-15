export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  {
    title: "Launch: Real-Time AI Analytics Dashboard v3.0",
    summary: "Advanced real-time monitoring and analytics platform with predictive insights, anomaly detection, and comprehensive performance visualization.",
    href: "/updates/real-time-ai-analytics-dashboard-v3-0",
    date: "2025-09-15",
    tag: "Launch"
  },
  {
    title: "Launch: AI Agent Orchestration Platform v2.0",
    summary: "Next-generation multi-agent coordination with intelligent routing, load balancing, and real-time monitoring for enterprise AI operations.",
    href: "/updates/ai-agent-orchestration-platform-2-0",
    date: "2025-09-15",
    tag: "Launch"
  }
]

export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}
