export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

export const siteUpdates: SiteUpdate[] = [
  // Fresh content added 2025-09-16
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary: 'How to evaluate retrieval quality and latency across text, image, and video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time Agent Cost Optimizer v1.0',
    summary: 'Automated routing and dynamic budgets to reduce agent inference costs by 27%.',
    href: '/updates/real-time-agent-cost-optimizer-1-0',
    date: '2025-09-16',
    tag: 'Release'
  },
  {
    title: 'Playbook: Production RAG Latency Budgets (2026)',
    summary: 'Define SLOs, budgets, and guardrails for low-latency, high-quality retrieval pipelines.',
    href: '/updates/production-rag-latency-budgets-2026',
    date: '2025-09-16',
    tag: 'Playbook'
  },
  {
    title: 'Toolkit: Eval-Driven Rollouts for Agent Features',
    summary: 'A repeatable workflow to gate new agent tools and prompts behind live evals.',
    href: '/updates/eval-driven-rollouts-toolkit-2026',
    date: '2025-09-16',
    tag: 'Toolkit'
  },
  {
    title: 'Guide: Production Prompt Hardening (SOC2-ready)',
    summary: 'Threat modeling, jailbreak resistance, and evidence capture for regulated environments.',
    href: '/updates/production-prompt-hardening-soc2-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Blueprint: Trustworthy Model Routing (2026)',
    summary: 'Policy- and cost-aware routing with safety backstops and budget enforcement.',
    href: '/updates/trustworthy-model-routing-2026',
    date: '2025-09-16',
    tag: 'Blueprint'
  },

  // Existing highlights
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary: 'Comprehensive observability patterns for production agent systems with distributed tracing, metrics, and alerting.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary: 'End-to-end guide to implementing autonomous business operations with AI agents, covering strategy, architecture, and rollout.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Complete Guide'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary: 'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Predictive insights, anomaly detection, and performance visualization for AI systems.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  }
]

export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const toTime = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => toTime(b.date) - toTime(a.date))
    .slice(0, limit)
}
