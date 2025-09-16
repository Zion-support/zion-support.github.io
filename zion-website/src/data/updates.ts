export type SiteUpdate = {
  id: string
  title: string
  summary: string
  href: string
  date: string
  tag: 'Launch' | 'Guide' | 'Report' | 'Case Study' | 'Product' | 'Blueprint' | 'Research' | 'Course' | 'Challenge' | 'Release'
}

export const siteUpdates: SiteUpdate[] = [
  {
    id: 'agent-reliability-toolkit-2026',
    title: 'Launch: Agent Reliability Toolkit (2026)',
    summary: 'SLIs, guardrails, and incident workflows to harden autonomous agents in production.',
    href: '/updates/agent-reliability-toolkit-2026',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    id: 'real-time-ai-analytics-dashboard-v3-0',
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Predictive insights, anomaly detection, and performance visualization for AI systems.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    id: 'multimodal-rag-benchmarking-2026',
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary: 'Evaluate retrieval quality, synchronization, and latency across text, image, and video.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    id: 'autonomous-ops-control-center-2-0',
    title: 'Launch: Autonomous Ops Control Center 2.0',
    summary: 'Unified command center with live evals, guardrails, and automated incident workflows.',
    href: '/updates/autonomous-ops-control-center-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    id: 'autonomous-retail-fulfillment',
    title: 'Case Study: Autonomous Retail Fulfillment at Scale',
    summary: 'Improved OTIF by 11% and reduced costs using production-ready autonomous agents.',
    href: '/updates/autonomous-retail-fulfillment',
    date: '2025-09-15',
    tag: 'Case Study'
  },
  {
    id: 'enterprise-agent-observability',
    title: 'Guide: Enterprise Agent Observability',
    summary: 'Traces, evals, and safety telemetry to operate autonomous agents in production.',
    href: '/updates/enterprise-agent-observability',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    id: 'production-guardrails-playbook',
    title: 'Launch: Production Guardrails Playbook',
    summary: 'Policy-as-code and runtime protections for safe AI scale in production.',
    href: '/updates/production-guardrails-playbook',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    id: 'zion-os-1-2',
    title: 'Zion OS v1.2 Released',
    summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
    href: '/updates/zion-os-1-2',
    date: '2025-09-01',
    tag: 'Release'
  }
]

export const getLatestUpdates = (limit: number = 6): SiteUpdate[] => {
  const parseDate = (value: string) => new Date(value).getTime()
  return [...siteUpdates]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, limit)
}

