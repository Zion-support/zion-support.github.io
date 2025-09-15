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
    id: "ai-governance-2025",
    title: "AI Governance Playbook 2025",
    summary: "A practical guide to building safe, compliant AI systems at scale.",
    href: "/resources/ai-governance-2025",
    tag: "Guide",
    date: "2025-09-10",
  },
  {
    id: "autonomous-support-agents-2026",
    title: "AI 2026: Autonomous Customer Support Agents",
    summary: "Deploy guardrailed support agents with routing, evals, and observability for higher CSAT.",
    href: "/blog/ai-2026-autonomous-customer-support-agents",
    tag: "Guide",
    date: "2025-09-15",
  },
  {
    id: "evaluation-harness-blueprint-2026",
    title: "AI 2026: Evaluation Harness Blueprint",
    summary: "Scenario suites, metrics, and policy gates to ship reliable autonomous agents.",
    href: "/content/ai-2026-evaluation-harness-blueprint",
    tag: "Blueprint",
    date: "2025-09-15",
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
  },
  {
    id: "agentic-risk-safety-2026",
    title: "AI 2026: Agentic Risk and Safety Playbook",
    summary: "Safeguards, monitoring, and governance patterns for production agent systems.",
    href: "/blog/ai-2026-agentic-risk-and-safety-playbook",
    tag: "Playbook",
    date: "2025-09-15",
  },
  {
    id: "production-guardrails-2026",
    title: "AI 2026: Production Guardrails for Autonomous Agents",
    summary: "Isolation domains, policy-as-code, eval gates, and telemetry to ship safely.",
    href: "/blog/ai-2026-production-guardrails-for-autonomous-agents",
    tag: "Guide",
    date: "2025-09-15",
  },
];

