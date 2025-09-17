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
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0',
    summary: 'Automated routing and dynamic budgets to reduce agent inference costs by 27%.',
    href: '/updates/real-time-agent-cost-optimizer-1-0',
    date: '2025-09-16',
    tag: 'Release'
  },
  // Fresh content added 2025-09-16 (new)
  {
    title: 'Playbook: Production RAG Latency Budgets (2026)',
    summary: 'Define SLOs, budgets, and guardrails for low‑latency, high‑quality retrieval pipelines.',
    href: '/updates/production-rag-latency-budgets',
    date: '2025-09-16',
    tag: 'Playbook'
  },
  {
    title: 'Blueprint: Agent Evidence Bundles (2026)',
    summary: 'Structured evidence collection, signing, and audit trails for production agent systems.',
    href: '/updates/agent-evidence-bundles-blueprint-2026',
    date: '2025-09-16',
    tag: 'Blueprint'
  },
  {
    title: 'Report: Enterprise Retrieval Observability (2026)',
    summary: 'Metrics, traces, and dashboards to monitor retrieval quality, drift, and SLIs at scale.',
    href: '/updates/enterprise-retrieval-observability-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Portal: AI Lab Open Benchmarks',
    summary: 'Transparent tasks, datasets, and harnesses for reproducible, enterprise-ready AI benchmarking.',
    href: '/updates/ai-lab-open-benchmarks-portal',
    date: '2025-09-15',
    tag: 'Portal'
  },
  {
    title: 'Course: Advanced Blockchain Development',
    summary: 'Comprehensive course covering smart contracts, DeFi protocols, and Web3 security.',
    date: '2025-09-08',
    href: '/updates/dapp-challenge',
    tag: 'Course'
  },
  {
    title: 'New Learning Path: Web3 Fundamentals',
    summary: 'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
    date: '2025-09-05',
    href: '/updates/web3-learning-path',
    tag: 'Learning Path'
  },
  {
    title: 'AI Research Lab: September Highlights',
    summary: 'Breakthroughs in autonomous research agents and multimodal retrieval.',
    date: '2025-09-01',
    href: '/updates/ai-research-lab-sept',
    tag: 'Research'
  }
]

export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}