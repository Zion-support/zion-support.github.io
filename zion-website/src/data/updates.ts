export type UpdateTag =
  | 'Announcement'
  | 'Course'
  | 'Challenge'
  | 'Research'
  | 'Release'
  | 'Guide'
  | 'Report'
  | 'Case Study'
  | 'Launch'
  | 'Product'
  | 'Blueprint'

export interface UpdateItem {
  id: string
  title: string
  summary: string
  href: string
  date: string
  tag: UpdateTag
}

export const updates: UpdateItem[] = [
  {
    id: 'quantum-partnership',
    title: 'Partnership: Quantum Computing Center of Excellence',
    summary:
      'We partnered with leading research institutions to accelerate quantum neural networks for enterprise.',
    href: '/updates/quantum-partnership',
    date: '2025-09-14',
    tag: 'Announcement',
  },
  {
    id: 'multimodal-rag-benchmarking-2026',
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary:
      'How to evaluate retrieval quality, synchronization, and latency across text, image, and video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-15',
    tag: 'Guide',
  },
  {
    id: 'mttr-reduction-evals-in-prod',
    title: 'Case Study: 50% MTTR Reduction with Evals-in-Prod',
    summary:
      'Incident-driven improvements using live evals, guardrails, and cost-aware routing to halve MTTR.',
    href: '/updates/mttr-reduction-evals-in-prod',
    date: '2025-09-14',
    tag: 'Case Study',
  },
  {
    id: 'compliance-auditor-1-0',
    title: 'Launch: Compliance Auditor v1.0',
    summary:
      'Automated compliance checks for AI systems with policy-as-code and evidence collection.',
    href: '/updates/compliance-auditor-1-0',
    date: '2025-09-15',
    tag: 'Launch',
  },
  {
    id: 'autonomous-support-copilot-1-1',
    title: 'Launch: Autonomous Support Copilot v1.1',
    summary:
      'Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.',
    href: '/updates/autonomous-support-copilot-1-1',
    date: '2025-09-15',
    tag: 'Product',
  },
  {
    id: 'agentic-ops-dashboard-1-0',
    title: 'Launch: Agentic Ops Dashboard (v1.0)',
    summary:
      'Real-time health, SLIs, and policy signals for agents and copilots. Purpose-built dashboards and alerts.',
    href: '/updates/agentic-ops-dashboard-1-0',
    date: '2025-09-15',
    tag: 'Launch',
  },
  {
    id: 'web3-fundamentals-track',
    title: 'New Learning Path: Web3 Fundamentals',
    summary:
      'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-08',
    tag: 'Course',
  },
  {
    id: 'web3-dapp-challenge',
    title: 'Community Challenge: Build a DApp',
    summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
    href: '/updates/web3-dapp-challenge',
    date: '2025-09-05',
    tag: 'Challenge',
  },
  {
    id: 'ziongpt-2-real-time-reasoning',
    title: 'ZionGPT 2: Real-Time Reasoning',
    summary: 'Next-gen reasoning stack with faster tools, memory, and routing.',
    href: '/updates/ziongpt-2-real-time-reasoning',
    date: '2025-09-06',
    tag: 'Release',
  },
  {
    id: 'enterprise-agent-observability',
    title: 'Guide: Enterprise Agent Observability',
    summary:
      'Traces, evals, and safety telemetry to operate autonomous agents in production environments.',
    href: '/updates/enterprise-agent-observability',
    date: '2025-09-15',
    tag: 'Guide',
  },
]

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
  const toMs = (d: string) => new Date(d).getTime()
  return [...updates].sort((a, b) => toMs(b.date) - toMs(a.date)).slice(0, limit)
}

