<<<<<<< HEAD
export type UpdateTag = 'Launch' | 'Guide' | 'Case Study' | 'Report' | 'Announcement' | 'Course' | 'Challenge' | 'Research' | 'Release' | 'Blueprint' | 'Field Guide' | 'Blog'

export interface UpdateItem {
  id: string
=======
>>>>>>> 9773d9320f6bbcbcd66674053ade2fbe286da10f
  title: string
  description: string
  href: string
<<<<<<< HEAD
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
=======
  date?: string
  tag?: string
}

    href: '/updates/ai-governance-maturity-model-2026',
    date: '2025-09-16',
    tag: 'Framework'
  },
  {
    title: 'Guide: Production RAG Latency Budgets (2026)',
    summary: 'A pragmatic framework to set and enforce latency budgets for production RAG systems.',
    href: '/blog/ai-2026-production-rag-latency-budgets',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0',
    summary: 'Automated routing and dynamic budgets to reduce agent inference costs by 27%.',
    href: '/updates/real-time-agent-cost-optimizer-1-0',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
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
    href: '/updates/advanced-blockchain-course',
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
    title: 'Community: Web3 DApp Challenge',
    summary: 'Build a DApp and win prizes up to $1000 in ZION tokens.',
    href: '/updates/web3-dapp-challenge',
    date: '2025-09-03',
    tag: 'Community'
  },
  {
    title: 'AI Research Lab: September Highlights',
    summary: 'Breakthroughs in autonomous research agents and multimodal retrieval.',
    date: '2025-09-01',
    href: '/updates/ai-research-lab-sept',
    tag: 'Research'
>>>>>>> 9773d9320f6bbcbcd66674053ade2fbe286da10f
  }
]

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...updates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
<<<<<<< HEAD
}
=======
>>>>>>> 9773d9320f6bbcbcd66674053ade2fbe286da10f
