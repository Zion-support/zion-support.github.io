export interface UpdateItem {
  id: string
  title: string
  summary: string
  href: string
  date: string
  tag:
    | 'Product'
    | 'Guide'
    | 'Course'
    | 'Community'
    | 'Research'
    | 'Release'
    | 'Launch'
    | 'Case Study'
}

// Canonical updates list powering homepage and updates index
export const updates: UpdateItem[] = [
  {
    id: 'agentic-evals-blueprint',
    title: 'Launch: Agentic Evals Blueprint (v1)',
    summary:
      'End-to-end framework to evaluate autonomous agents with task suites, rubrics, and guardrails.',
    href: '/updates/agentic-evals-blueprint',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    id: 'rag-agents-case-study',
    title: 'Case Study: 38% Cost Reduction with Retrieval-Augmented Agents',
    summary:
      'How a Fortune 500 reduced support costs and MTTR with production-grade RAG agents.',
    href: '/updates/rag-agents-case-study',
    date: '2025-09-14',
    tag: 'Case Study'
  },
  {
    id: 'ai-content-studio-2',
    title: 'Launch: AI Content Studio 2.0',
    summary:
      'Create high-quality AI articles, videos, and social assets with one click. New templates, workflows, and team collaboration.',
    href: '/updates/ai-content-studio-2',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    id: 'enterprise-ai-playbook',
    title: 'Guide: Enterprise AI Adoption Playbook',
    summary:
      'A practical playbook covering strategy, data readiness, security, and ROI measurement to scale AI across the enterprise.',
    href: '/updates/enterprise-ai-playbook',
    date: '2025-09-10',
    tag: 'Guide'
  },
  {
    id: 'advanced-blockchain-course',
    title: 'Course: Advanced Blockchain Development',
    summary:
      'Smart contracts, DeFi primitives, L2 scaling, security audits, and production-grade tooling hands-on.',
    href: '/updates/advanced-blockchain-course',
    date: '2025-09-05',
    tag: 'Course'
  },
  {
    id: 'web3-dapp-challenge',
    title: 'Community: Web3 DApp Challenge',
    summary: 'Build a DApp and win prizes up to $1000 in ZION tokens.',
    href: '/updates/web3-dapp-challenge',
    date: '2025-09-03',
    tag: 'Community'
  },
  // Existing content in repo
  {
    id: 'ai-research-assistant-2-0',
    title: 'AI Research Assistant 2.0',
    summary:
      'Multi-agent orchestration, faster retrieval, and improved research planning for enterprise research teams.',
    href: '/updates/ai-research-assistant-2-0',
    date: '2025-09-15',
    tag: 'Release'
  },
  {
    id: 'rag-production-patterns',
    title: 'Guide: RAG Production Patterns',
    summary:
      'Architectural patterns for robust retrieval-augmented generation in production workloads.',
    href: '/updates/rag-production-patterns',
    date: '2025-09-07',
    tag: 'Guide'
  },
  {
    id: 'web3-fundamentals-track',
    title: 'Learning Path: Web3 Fundamentals Track',
    summary:
      'Blockchain basics, wallets, NFTs, and Web3 security essentials for beginners.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-06',
    tag: 'Course'
  }
]

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
  return updates
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit)
}

