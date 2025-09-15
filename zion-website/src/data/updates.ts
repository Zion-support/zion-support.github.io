export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Launch: Autonomous Ops Playbook (2026 Preview)',
    summary:
      'Step-by-step playbook to stand up autonomous operations with policy-as-code and measurable SLAs.',
    href: '/updates/autonomous-ops-playbook-2026',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Blueprint: Real-Time Retrieval Architectures (2026)',
    summary:
      'Design patterns for low-latency hybrid retrieval powering agentic systems and copilots.',
    href: '/updates/real-time-retrieval-architectures-2026',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Guide: Agents-On-Call Playbooks (2026)',
    summary:
      'Design eval-gated incident playbooks for autonomous triage, mitigation, and escalation.',
    href: '/updates/agents-oncall-playbooks',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Blueprint: Agent Observability (v1)',
    summary:
      'Tracing, metrics, and evaluations to monitor autonomous systems end-to-end.',
    href: '/updates/agent-observability-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Autonomous Finance OS (Preview)',
    summary:
      'Real-time close, policy-as-code controls, and automated reconciliations for finance.',
    href: '/updates/autonomous-finance-os-preview',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Governance Toolkit (v2)',
    summary:
      'Policy-as-code templates, audit trails, and automated guardrails for enterprise AI programs.',
    href: '/updates/ai-governance-toolkit',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: RAG Production Patterns (2025 Edition)',
    summary:
      'Battle-tested architectures for retrieval-augmented generation with observability and SLIs.',
    href: '/updates/rag-production-patterns',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Agentic Evals Blueprint (v1)',
    summary:
      'End-to-end framework to evaluate autonomous agents with task suites, rubrics, and guardrails.',
    href: '/updates/agentic-evals-blueprint',
    date: '2025-09-15',
    tag: 'Launch'
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

