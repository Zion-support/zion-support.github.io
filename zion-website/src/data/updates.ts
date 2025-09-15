export type UpdateItem = {
  id: string
  title: string
  summary: string
  date: string
  href?: string
}

export const updates: UpdateItem[] = [
  {
    id: 'advanced-blockchain-course',
    title: 'New Course: Advanced Blockchain Development',
    summary:
      'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
    date: '2025-09-10',
    href: '/updates/advanced-blockchain-course',
  },
  {
    id: 'dapp-challenge',
    title: 'Community Challenge: Build a DApp',
    summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
    date: '2025-09-08',
    href: '/updates/dapp-challenge',
  },
  {
    id: 'web3-learning-path',
    title: 'New Learning Path: Web3 Fundamentals',
    summary: 'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
    date: '2025-09-05',
    href: '/updates/web3-learning-path',
  },
  {
    id: 'ai-research-lab',
    title: 'AI Research Lab: September Highlights',
    summary: 'Breakthroughs in autonomous research agents and multimodal retrieval.',
    date: '2025-09-01',
    href: '/updates/ai-research-lab-sept',
  },
]

