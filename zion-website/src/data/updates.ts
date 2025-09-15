export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Launch: Agentic Evals Blueprint (v1)',
    summary:
      'End-to-end framework to evaluate autonomous agents with task suites, rubrics, and guardrails.',
    href: '/updates/agentic-evals-blueprint',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Governance Toolkit',
    summary:
      'Practical guardrails, policy-as-code, and audit trails to safely scale AI across the enterprise.',
    href: '/updates/ai-governance-toolkit',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    title: 'Case Study: 38% Cost Reduction with Retrieval-Augmented Agents',
    summary:
      'How a Fortune 500 reduced support costs and MTTR with production-grade RAG agents.',
    href: '/updates/rag-agents-case-study',
    date: '2025-09-14',
    tag: 'Case Study'
  },
  {
    title: 'Launch: AI Content Studio 2.0',
    summary:
      'Create high-quality AI articles, videos, and social assets with one click. New templates, workflows, and team collaboration.',
    href: '/updates/ai-content-studio-2',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    title: 'Course: Web3 Fundamentals Track',
    summary:
      'New beginner-to-pro track covering wallets, smart contracts, L2s, and dApp development.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-15',
    tag: 'Course'
  },
  {
    title: 'Guide: Enterprise AI Adoption Playbook',
    summary:
      'A practical playbook covering strategy, data readiness, security, and ROI measurement to scale AI across the enterprise.',
    href: '/updates/enterprise-ai-playbook',
    date: '2025-09-10',
    tag: 'Guide'
  },
  {
    title: 'Course: Advanced Blockchain Development',
    summary:
      'Smart contracts, DeFi primitives, L2 scaling, security audits, and production-grade tooling hands-on.',
    href: '/updates/advanced-blockchain-course',
    date: '2025-09-05',
    tag: 'Course'
  },
  {
    title: 'Community: Web3 DApp Challenge',
    summary: 'Build a DApp and win prizes up to $1000 in ZION tokens.',
    href: '/updates/web3-dapp-challenge',
    date: '2025-09-03',
    tag: 'Community'
  }
]

export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}

