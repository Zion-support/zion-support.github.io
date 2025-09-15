export interface UpdateItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  date: string;
  tag: 'Course' | 'Announcement' | 'Challenge' | 'Research' | 'Release';
}

export const updates: UpdateItem[] = [
  {
    id: 'ai-agents-lab-opening',
    title: 'Launch: AI Agents Innovation Lab',
    summary:
      'Hands-on lab with real-world agentic workflows, evals, and governance. Apply to join the first cohort.',
    href: '/updates/ai-agents-lab-opening',
    date: '2025-09-15',
    tag: 'Announcement',
  },
  {
    id: 'quantum-partnership-announcement',
    title: 'Partnership: Quantum Computing Center of Excellence',
    summary:
      'We partnered with leading research institutions to accelerate quantum neural networks for enterprise.',
    href: '/updates/quantum-partnership',
    date: '2025-09-14',
    tag: 'Announcement',
  },
  {
    id: 'advanced-blockchain-dev-course',
    title: 'New Course: Advanced Blockchain Development',
    summary:
      'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
    href: '/updates/advanced-blockchain-development',
    date: '2025-09-10',
    tag: 'Course',
  },
  {
    id: 'web3-fundamentals-path',
    title: 'New Learning Path: Web3 Fundamentals',
    summary:
      'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
    href: '/updates/web3-fundamentals',
    date: '2025-09-08',
    tag: 'Course',
  },
  {
    id: 'dapp-challenge',
    title: 'Community Challenge: Build a DApp',
    summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
    href: '/updates/dapp-challenge',
    date: '2025-09-05',
    tag: 'Challenge',
  },
  {
    id: 'ai-research-release',
    title: 'Research Release: Autonomous Agents for IT Operations',
    summary: 'New paper and demo exploring agentic automation for enterprise IT workflows.',
    href: '/updates/ai-research-it-ops',
    date: '2025-09-03',
    tag: 'Research',
  },
  {
    id: 'zion-os-1-2-release',
    title: 'Zion OS v1.2 Released',
    summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
    href: '/updates/zion-os-1-2',
    date: '2025-09-01',
    tag: 'Release',
  },
];

export const getLatestUpdates = (limit = 6) => {
  return [...updates]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
};

