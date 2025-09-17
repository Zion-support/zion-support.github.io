export type SiteUpdate = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

// Newest first
export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Guide: AI Risk Mitigation in Production (2026)',
    summary: 'Practical controls, eval gates, and incident playbooks for safe AI operations.',
    href: '/updates/ai-risk-mitigation-guide-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  // Added 2025-09-15 (new content for homepage promotion)
  {
    title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
    summary: 'Evaluate retrieval quality, sync, and latency across text/image/video pipelines.',
    href: '/updates/multimodal-rag-benchmarking-2026',
    date: '2025-09-16',
    tag: 'Guide'
  },
  {
    title: 'Track: Web3 Fundamentals (Learning Path)',
    summary: 'Beginner path covering blockchain basics, NFTs, and Web3 security with labs.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-16',
    tag: 'Course'
  },
  {
    title: 'Launch: Real-Time Agent Metrics Widgets (v1.0)',
    summary: 'Drop-in UI for latency, cost, and policy signals to observe agents live.',
    href: '/updates/real-time-agent-metrics-widgets-1-0',
    date: '2025-09-16',
    tag: 'Launch'
  },
  {
    title: 'Case Study: Cost-Aware Routing with Live Evals',
    summary: 'Reduce spend while maintaining quality by routing with real-time evals.',
    href: '/updates/cost-aware-routing-live-evals',
    date: '2025-09-16',
    tag: 'Case Study'
  },
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary: 'Observability patterns for production agent systems with tracing and alerts.',
    href: '/blog/ai-2026-enterprise-agent-observability-deep-dive',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (featured)
  {
    title: 'Launch: Autonomous Strategy Copilot v1.0',
    summary:
      'Exec-ready strategy copilot that drafts roadmaps, OKRs, and investment memos grounded in telemetry and benchmarks.',
    href: '/updates/autonomous-strategy-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (latest)
  {
    title: 'Launch: Autonomous Decision Engine v1.0',
    summary:
      'Policy-aware agent decisioning with eval gates, budgets, and signed evidence for every action.',
    href: '/updates/autonomous-decision-engine-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (even later night batch - fresh content)
  {
    title: 'Launch: Realtime Agent Observatory 1.0',
    summary:
      'Unified live telemetry for agents: traces, eval signals, budgets, and incident evidence in one place.',
    href: '/updates/realtime-agent-observatory-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Complete Guide: Autonomous Business Operations (2026)',
    summary: 'Strategy, architecture, and rollout for autonomous business operations.',
    href: '/blog/ai-2026-autonomous-business-operations-complete-guide',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Report: Enterprise Retrieval Latency Benchmarks 2026',
    summary:
      'Latency distributions, SLO adherence, and architectural tradeoffs across hybrid retrieval stacks.',
    href: '/updates/enterprise-retrieval-latency-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  // Added 2025-09-15 (new featured content)
  {
    title: 'Launch: Knowledge Graph Copilot v1.0',
    summary:
      'Automatically builds and maintains enterprise knowledge graphs with policy-aware ingestion and live evals.',
    href: '/updates/knowledge-graph-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (late night batch)
  {
    title: 'Launch: AI Governance Dashboard v4',
    summary:
      'Cross‑env policy posture, eval gates, exception workflows, and signed audit evidence with exportable trails.',
    href: '/updates/ai-governance-dashboard-v4',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Feature: Agent Evidence Bundles v1.1',
    summary:
      'Trace‑aligned guardrails and evals, SOC2/ISO export profiles, and tamper‑evident signed manifests.',
    href: '/updates/agent-evidence-bundles-v1-1',
    date: '2025-09-15',
    tag: 'Feature'
  },
  {
    title: 'Launch: Autonomous Knowledge Ops Suite v1.0',
    summary:
      'Governed content lifecycle with eval-gated drafts, reviews, and audit-ready publishing.',
    href: '/updates/autonomous-knowledge-ops-suite-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Agent Postmortems That Drive Reliability (2026)',
    summary:
      'Structured incident reviews with evidence bundles, causal graphs, and playbook updates.',
    href: '/updates/agent-postmortems-reliability-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Report: State of Real-Time Agent Telemetry 2026',
    summary:
      'Signals that matter: budgets, guardrail events, eval IDs, and user outcomes.',
    href: '/updates/state-of-real-time-agent-telemetry-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Report: AI Governance Readiness 2026',
    summary:
      'Composite readiness index across governance, controls, data, and platform maturity with next steps.',
    href: '/updates/ai-governance-readiness-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Launch: Agent Benchmark Suite v2',
    summary:
      'Expanded domain packs, richer rubrics, and native CI canaries to evaluate production agents.',
    href: '/updates/agent-benchmark-suite-v2',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Feature: Agent Ops SLO Dashboards v2',
    summary:
      'Unified quality, latency, and safety SLOs with per-route budgets and evidence exports.',
    href: '/updates/agent-ops-slo-dashboards-v2',
    date: '2025-09-15',
    tag: 'Feature'
  },
  {
    title: 'Launch: Autonomous Marketing Copilot v1.0',
    summary:
      'Plan, draft, and schedule multi-channel campaigns with brand-safe guardrails and live evals.',
    href: '/updates/autonomous-marketing-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production-Grade RAG Latency Budgets (2026)',
    summary:
      'Set, monitor, and enforce latency SLOs for RAG systems with streaming evals and rollbacks.',
    href: '/updates/production-rag-latency-budgets-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Autonomous Marketing Copilot v1.0',
    summary:
      'Plan, draft, and schedule multi-channel campaigns with brand-safe guardrails and live evals.',
    href: '/updates/autonomous-marketing-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production-Grade RAG Latency Budgets (2026)',
    summary:
      'Set, monitor, and enforce latency SLOs for RAG systems with streaming evals and rollbacks.',
    href: '/updates/production-rag-latency-budgets-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Guide: Production RAG Observability (2026 Preview)',
    summary:
      'Telemetry for retrieval systems: coverage, freshness, drift, groundedness with per‑step spans.',
    href: '/updates/production-rag-observability-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Autonomous Marketing Copilot v1.0',
    summary:
      'Plan campaigns, generate assets, and auto‑schedule posts with policy guardrails and live evals.',
    href: '/updates/autonomous-marketing-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Enterprise Agent Risk Playbook (2026 Preview)',
    summary:
      'Unified taxonomy, scorecards, and mitigation patterns to operationalize agent risk management.',
    href: '/updates/enterprise-agent-risk-playbook-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: AI Incident Simulator v1.1',
    summary:
      'New scenarios, live eval gates, and evidence exports to harden agent systems.',
    href: '/updates/ai-incident-simulator-1-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Blueprint: Eval‑Ready AI Pipelines (2026)',
    summary:
      'From datasets to live canaries with rubrics, harnesses, and rollback rules.',
    href: '/blog/ai-2026-eval-ready-ai-pipelines-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Blueprint: Agent Observability (2026)',
    summary:
      'Traces, eval signals, and guardrail events to operate agent fleets reliably.',
    href: '/blog/ai-2026-agent-observability-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Blueprint: Governed Tool Use (2026)',
    summary:
      'Permissioned adapters with policy‑as‑code, risk tiers, and runtime checks.',
    href: '/blog/ai-2026-governed-tool-use-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Guide: Real-Time Model Routing Playbook (2026)',
    summary:
      'Implement latency- and quality-aware routing with budgets, canaries, and audits.',
    href: '/updates/real-time-model-routing-playbook-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Case Study: 48% Cost Savings via Eval-Driven Routing',
    summary:
      'How a global support org cut cost and improved CSAT with eval-driven routing.',
    href: '/updates/case-study-eval-driven-routing-48-savings',
    date: '2025-09-15',
    tag: 'Case Study'
  },
  {
    title: 'Report: State of Agent Tooling 2026 (Preview)',
    summary:
      'Landscape of tracing, guardrails, evals, and policy-as-code across leading stacks.',
    href: '/updates/state-of-agent-tooling-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Launch: Agent Evals & Observability Suite v1.0',
    summary:
      'Unified live evals, guardrail events, tracing, and budget dashboards to operate agents safely.',
    href: '/updates/agent-evals-observability-suite-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Agent Red‑Teaming Field Guide (2026)',
    summary:
      'Scenario design, attack taxonomy, and evidence capture to proactively harden autonomous agents.',
    href: '/blog/ai-2026-agent-red-teaming-field-guide',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Trustworthy Model Routing (2026 Preview)',
    summary:
      'Policy-aware routing with eval signals and budgets for safer, cheaper, faster generations.',
    href: '/updates/trustworthy-model-routing-2026',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Enterprise Agent SLO Dashboards',
    summary:
      'Define and track SLOs for quality, latency, and safety across agent fleets with live telemetry.',
    href: '/updates/enterprise-agent-slo-dashboards',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Report: AI Lab Open Benchmarks Portal',
    summary:
      'Transparent tasks, datasets, and harnesses for reproducible, enterprise-ready AI benchmarking.',
    href: '/updates/ai-lab-open-benchmarks-portal',
    date: '2025-09-15',
    tag: 'Report'
  },
  // Fresh content added 2025-09-15
  // New content added 2025-09-15 (afternoon batch)
  {
    title: 'Launch: AI Content Studio 2.2',
    summary:
      'Faster renders, new brand kits, calendar scheduling, and bulk publish with guardrails.',
    href: '/updates/ai-content-studio-2-2',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    title: 'Guide: Evaluation-Driven Release Management',
    summary:
      'Ship safer with canary evals, rollback rules, and quality budgets wired into CI/CD.',
    href: '/updates/eval-driven-release-management',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Case Study: MTTR Reduction with Real-Time RAG',
    summary:
      'How live evals and retrieval telemetry cut incident MTTR by 37% at scale.',
    href: '/updates/mttr-reduction-real-time-rag',
    date: '2025-09-15',
    tag: 'Case Study'
  },
  {
    title: 'Blueprint: Policy‑as‑Code in Production (2026)',
    summary: 'Enforce executable policies across CI/CD and runtime with eval gates.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Real-Time AI Analytics Dashboard v3.0',
    summary: 'Predictive insights, anomaly detection, and performance visualization for AI.',
    href: '/updates/real-time-ai-analytics-dashboard-v3-0',
    date: '2025-09-15',
    tag: 'Launch'
  }
]

export function getLatestUpdates(count: number = 6): SiteUpdate[] {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, count)
}

