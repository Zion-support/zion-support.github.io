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
    id: 'advanced-blockchain-dev-course',
    title: 'New Course: Advanced Blockchain Development',
    summary:
      'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
    href: '/updates/advanced-blockchain-development',
    date: '2025-09-10',
    tag: 'Course',
  },
  {
    id: 'genai-systems-design-bootcamp',
    title: 'Bootcamp: Generative AI Systems Design',
    summary:
      'Hands-on bootcamp covering RAG, agents, evaluation, and production GenAI systems.',
    href: '/updates/genai-systems-design-bootcamp',
    date: '2025-09-14',
    tag: 'Course',
  },
  {
    id: 'enterprise-ai-governance-framework',
    title: 'Announcement: Enterprise AI Governance Framework',
    summary:
      'Introducing our comprehensive framework for responsible AI with policy tooling.',
    href: '/updates/enterprise-ai-governance-framework',
    date: '2025-09-13',
    tag: 'Announcement',
  },
  {
    id: 'mlops-observability-challenge',
    title: 'Community Challenge: MLOps Observability Dashboards',
    summary: 'Build dashboards for tracing, drift detection, and model health insights.',
    href: '/updates/mlops-observability-challenge',
    date: '2025-09-12',
    tag: 'Challenge',
  },
  {
    id: 'agentic-automation-research',
    title: 'Research Release: Agentic Automation Patterns',
    summary: 'Field-tested design patterns for robust autonomous workflows in enterprises.',
    href: '/updates/agentic-automation-patterns',
    date: '2025-09-11',
    tag: 'Research',
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

