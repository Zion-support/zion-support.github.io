export type UpdateItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  date: string; // ISO YYYY-MM-DD
  tag: 'Course' | 'Announcement' | 'Challenge' | 'Research' | 'Release' | 'Guide' | 'Case Study' | 'Blueprint' | 'Product' | 'Report';
};

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
    id: 'quantum-partnership',
    title: 'Partnership: Quantum Computing Center of Excellence',
    summary:
      'We partnered with leading research institutions to accelerate quantum neural networks for enterprise.',
    href: '/updates/quantum-partnership',
    date: '2025-09-14',
    tag: 'Announcement',
  },
  {
    id: 'ai-governance-bootcamp',
    title: 'New Bootcamp: Enterprise AI Governance (Oct 2025)',
    summary:
      'Hands-on governance bootcamp covering risk management, policy, evals, and controls for enterprise AI.',
    href: '/updates/ai-governance-bootcamp',
    date: '2025-09-15',
    tag: 'Course',
  },
  {
    id: 'agent-observability-q3-2025',
    title: 'Research: Agent Observability Insights (Q3 2025)',
    summary:
      'Key findings on monitoring agent behaviors, failure modes, and safe interventions at scale.',
    href: '/updates/agent-observability-q3-2025',
    date: '2025-09-14',
    tag: 'Research',
  },
  {
    id: 'website-ux-refresh-2025',
    title: 'Announcement: Website UX Refresh and Accessibility Upgrades',
    summary:
      'Improved navigation, better performance, and WCAG-focused accessibility enhancements across the site.',
    href: '/updates/website-ux-refresh-2025',
    date: '2025-09-13',
    tag: 'Announcement',
  },
  {
    id: 'advanced-blockchain-development',
    title: 'New Course: Advanced Blockchain Development',
    summary:
      'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
    href: '/updates/advanced-blockchain-development',
    date: '2025-09-10',
    tag: 'Course',
  },
  {
    id: 'web3-fundamentals',
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
    id: 'ai-research-it-ops',
    title: 'Research Release: Autonomous Agents for IT Operations',
    summary: 'New paper and demo exploring agentic automation for enterprise IT workflows.',
    href: '/updates/ai-research-it-ops',
    date: '2025-09-03',
    tag: 'Research',
  },
  {
    id: 'zion-os-1-2',
    title: 'Zion OS v1.2 Released',
    summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
    href: '/updates/zion-os-1-2',
    date: '2025-09-01',
    tag: 'Release',
  },
  // New content (added now)
  {
    id: 'real-time-evals-starter-kit',
    title: 'Guide: Real-Time Evals Starter Kit',
    summary: 'Kickstart eval-driven development with ready-to-use metrics, gates, and CI recipes.',
    href: '/updates/real-time-evals-starter-kit',
    date: '2025-09-16',
    tag: 'Guide',
  },
  {
    id: 'production-guardrails-playbook',
    title: 'Launch: Production Guardrails Playbook',
    summary: 'Executable policies, runtime protections, and rollouts for safe AI at scale.',
    href: '/updates/production-guardrails-playbook',
    date: '2025-09-16',
    tag: 'Blueprint',
  },
  {
    id: 'mttr-reduction-case-study',
    title: 'Case Study: 50% MTTR Reduction with Evals-in-Prod',
    summary: 'Live evals and safe rollouts halved incident resolution time in a Fortune 500.',
    href: '/updates/mttr-reduction-evals-in-prod',
    date: '2025-09-16',
    tag: 'Case Study',
  },
];

export const getLatestUpdates = (limit: number = 6): UpdateItem[] => {
  return [...updates]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
};
