export type UpdateTag = 'Launch' | 'Guide' | 'Case Study' | 'Report' | 'Announcement' | 'Course' | 'Challenge' | 'Research' | 'Release' | 'Blueprint' | 'Field Guide' | 'Blog'

export interface UpdateItem {
  id: string
  title: string
  description: string
  href: string
  date: string
  category: UpdateTag
}

export const updates: UpdateItem[] = [
  {
    id: 'agentic-ops-dashboard-1-0',
    title: 'Launch: Agentic Ops Dashboard (v1.0)',
    description: 'Real-time health, SLIs, and policy signals for agents and copilots. Purpose-built dashboards and alerts.',
    href: '/updates/agentic-ops-dashboard-1-0',
    date: '2025-09-15',
    category: 'Launch'
  },
  {
    id: 'multimodal-rag-benchmarking-2026',
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    description: 'How to evaluate retrieval quality, synchronization, and latency across text, image, and video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-15',
    category: 'Guide'
  },
  {
    id: 'mttr-reduction-evals-in-prod',
    title: 'Case Study: 50% MTTR Reduction with Evals-in-Prod',
    description: 'Incident-driven improvements using live evals, guardrails, and cost-aware routing to halve MTTR.',
    href: '/updates/mttr-reduction-evals-in-prod',
    date: '2025-09-14',
    category: 'Case Study'
  },
  {
    id: 'autonomous-ops-control-center-2-0',
    title: 'Launch: Autonomous Sales Copilot (v1.0)',
    description: 'Unified command center with live evals, guardrails, and automated incident workflows for agent ops.',
    href: '/updates/autonomous-ops-control-center-2-0',
    date: '2025-09-15',
    category: 'Launch'
  },
  {
    id: 'compliance-auditor-1-0',
    title: 'Launch: Compliance Auditor v1.0',
    description: 'Automated compliance checks for AI systems with policy-as-code and evidence collection.',
    href: '/updates/compliance-auditor-1-0',
    date: '2025-09-15',
    category: 'Launch'
  },
  {
    id: 'autonomous-support-copilot-1-1',
    title: 'Launch: Autonomous Support Copilot v1.1',
    description: 'Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.',
    href: '/updates/autonomous-support-copilot-1-1',
    date: '2025-09-15',
    category: 'Launch'
  }
]

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...updates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}