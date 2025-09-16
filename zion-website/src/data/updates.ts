<<<<<<< HEAD
export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  // Fresh content added 2025-09-15
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
=======
    title: 'Guide: Agent Platform Operations (2026)',
=======
    title: 'Launch: Autonomous Ops and SRE for Agents',
=======
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
=======
    title: 'Report: State of AI Automation (2026 Preview)',
    summary:
      'Trends, metrics, and enterprise adoption patterns shaping the next wave of AI-led automation.',
    href: '/insights/state-of-ai-automation-2025',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Case Study: Autonomous Retail Fulfillment at Scale',
    summary:
      'How autonomous agents improved OTIF by 11% and reduced costs across a global retailer.',
    href: '/updates/autonomous-retail-fulfillment',
    date: '2025-09-15',
    tag: 'Case Study'
  },
  {
    title: 'Launch: Autonomous Ops Playbook (2026 Preview)',
>>>>>>> origin/feat/content-sept15-1757928952
    summary:
      'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Autonomous Sales Copilot v1.0',
>>>>>>> origin/feat/content-policy-as-code
    summary:
      'Operational framework for running autonomous agents with SLOs, guardrails, and runbooks.',
    href: '/updates/autonomous-ops-sre-for-agents',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Agent Safety Certification (Beta)',
>>>>>>> origin/feature/autonomous-ops-sre-content
    summary:
      'SLOs, incident response, and eval-driven change management to run agent platforms at scale.',
    href: '/updates/agent-platform-operations',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Production Guardrails Playbook',
    summary:
      'Operational guardrails, policy-as-code, and runtime protections for safe AI scale in production.',
    href: '/updates/production-guardrails-playbook',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Enterprise Agent Observability',
    summary:
      'Traces, evals, and safety telemetry to operate autonomous agents in production environments.',
    href: '/updates/enterprise-agent-observability',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: AI Governance Toolkit (v2)',
>>>>>>> origin/feature/content-updates-2025-09-15
    summary:
      'Comprehensive observability patterns for production agent systems with distributed tracing, metrics, and alerting.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary:
      'End-to-end guide to implementing autonomous business operations with AI agents, covering strategy, architecture, and rollout.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary:
      'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary:
      'Advanced real-time monitoring and analytics platform with predictive insights, anomaly detection, and comprehensive performance visualization.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Agent Orchestration Platform v2.0',
    summary:
      'Next-generation multi-agent coordination with intelligent routing, load balancing, and real-time monitoring for enterprise AI operations.',
    href: '/updates/ai-agent-orchestration-platform-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Autonomous Testing Framework v1.0',
    summary:
      'Self-healing test automation with intelligent test generation, execution, and maintenance for enterprise applications.',
    href: '/updates/ai-autonomous-testing-framework-1-0',
    date: '2025-09-15',
    tag: 'Launch'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  },
  {
    title: 'Launch: AI Autonomous Workflow Engine v1.0',
    summary:
      'End-to-end workflow automation with intelligent routing, error handling, and comprehensive audit trails.',
    href: '/updates/ai-autonomous-workflow-engine-1-0',
    date: '2025-09-15',
    tag: 'Launch'
>>>>>>> 37ed813ec17d3cae6d99bab99107b0e185e588a7
>>>>>>> cursor/create-and-deploy-new-content-d7eb
  },
  {
    title: 'Launch: AI Autonomous Workflow Engine v1.0',
    summary:
      'End-to-end workflow automation with intelligent routing, error handling, and comprehensive audit trails.',
    href: '/updates/ai-autonomous-workflow-engine-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  }
]

export function getLatestUpdates(count: number = 6): SiteUpdate[] {
  return siteUpdates.slice(0, count)
}
=======
export type UpdateItem = {
  id: string
  title: string
  summary: string
  date: string
  href?: string
}

export const updates: UpdateItem[] = [
  {
<<<<<<< HEAD
    id: 'advanced-blockchain-course',
=======
    id: 'ai-security-blueprint',
    title: 'Guide: AI Security Blueprint 2025',
    summary:
      'Best practices for securing AI systems in production: model, data, and pipeline.',
    href: '/updates/ai-security-blueprint-2025',
    date: '2025-09-14',
    tag: 'Announcement',
  },
  {
    id: 'genai-engineering-course',
    title: 'New Course: GenAI Engineering Masterclass',
    summary:
      'Hands-on masterclass on RAG, agents, evals, safety, and productionization.',
    href: '/updates/genai-engineering-masterclass',
    date: '2025-09-13',
    tag: 'Course',
  },
  {
    id: 'ai-lab-research-update',
    title: 'Research: Long-horizon Planning with Tool-using Agents',
    summary:
      'Our latest results show scalable planning via hierarchical tool-use and memory.',
    href: '/updates/long-horizon-tool-agents',
    date: '2025-09-12',
    tag: 'Research',
  },
  {
    id: 'advanced-blockchain-dev-course',
>>>>>>> origin/feature/updates-2025-09
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

>>>>>>> origin/feature/updates-content
