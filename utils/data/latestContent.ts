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
];

