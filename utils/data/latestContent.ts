export type ContentItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  tag: string;
  date: string;
};

export const latestContent: ContentItem[] = [
  {
    id: "ai-2026-trusted-genai-patterns-regulated-enterprises",
    title: "AI 2026: Trusted GenAI Patterns for Regulated Enterprises",
    summary: "Compliant, observable, and cost-aware GenAI architectures that scale safely.",
    href: "/blog/ai-2026-trusted-genai-patterns-regulated-enterprises",
    tag: "Governance",
    date: "2025-09-15",
  },
  {
    id: "agentic-crm-autonomous-revenue-workflows-2026",
    title: "Agentic CRM: Autonomous Revenue Workflows (2026)",
    summary: "Lead routing, outreach, and pipeline hygiene with evaluation-gated agents.",
    href: "/blog/agentic-crm-autonomous-revenue-workflows-2026",
    tag: "Revenue",
    date: "2025-09-15",
  },
  {
    id: "real-time-agent-observability-2026",
    title: "Real-Time Agent Observability (2026)",
    summary: "Traces, metrics, and evals for production agent workflows.",
    href: "/blog/real-time-agent-observability-2026",
    tag: "Observability",
    date: "2025-09-15",
  },
  {
    id: "hyperautomation-blueprint-2026",
    title: "Hyperautomation Blueprint 2026",
    summary: "Platform patterns, policy-as-code, and ROI tracking to scale automation.",
    href: "/content/hyperautomation-blueprint-2026",
    tag: "Blueprint",
    date: "2025-09-15",
  },
  {
    id: "production-safety-checklist-2026",
    title: "AI 2026: Production Safety Checklist",
    summary: "Eval gates, policy bundles, and incident playbooks for safe operations.",
    href: "/blog/ai-2026-production-safety-checklist",
    tag: "Blueprint",
    date: "2025-09-15",
  },
  {
    id: "ai-governance-2025",
    title: "AI Governance Playbook 2025",
    summary: "A practical guide to building safe, compliant AI systems at scale.",
    href: "/resources/ai-governance-2025",
    tag: "Guide",
    date: "2025-09-10",
  },
  {
    id: "quantum-edge-report",
    title: "Quantum + Edge: 2026 Readiness Report",
    summary: "Where quantum acceleration meets edge workloads—benchmarks and ROI models.",
    href: "/resources/quantum-edge-readiness",
    tag: "Report",
    date: "2025-09-12",
  },
  {
    id: "ai-security-blueprint",
    title: "AI Security Blueprint",
    summary: "Threat modeling, red teaming, and runtime defenses for agentic systems.",
    href: "/resources/ai-security-blueprint",
    tag: "Blueprint",
    date: "2025-09-14",
  }
];