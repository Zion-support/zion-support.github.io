export type UpdateItem = {
  id: string
  title: string
  summary: string
  href: string
  date: string
  tag: string
}

export const updates: UpdateItem[] = [
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
  {
    id: 'ai-governance-toolkit',
    title: 'Introducing AI Governance Toolkit',
    summary:
      'A comprehensive governance toolkit enabling safe, auditable AI decision-making across your enterprise.',
    href: '/updates/ai-governance-toolkit',
    date: '2025-09-14',
    tag: 'Product'
  },
  {
    id: 'rag-production-patterns',
    title: 'RAG Production Patterns',
    summary:
      'Battle-tested architectures for latency, cost, and quality with guardrails and evals.',
    href: '/updates/rag-production-patterns',
    date: '2025-09-12',
    tag: 'Guide'
  },
  {
    id: 'ai-research-assistant-2-0',
    title: 'AI Research Assistant 2.0',
    summary:
      'Major update with multimodal retrieval, code-aware reasoning, and experiment tracking.',
    href: '/updates/ai-research-assistant-2-0',
    date: '2025-09-11',
    tag: 'Product'
  }
]

export function getLatestUpdates(limit: number): Pick<UpdateItem, 'title' | 'summary' | 'href'>[] {
  return updates
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit)
    .map(({ title, summary, href }) => ({ title, summary, href }))
}

