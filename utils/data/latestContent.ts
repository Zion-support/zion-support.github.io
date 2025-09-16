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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    id: "autonomous-support-agents-2026-new",
    title: "AI 2026: Autonomous Customer Support Agents",
    summary: "Deploy guardrailed support agents with routing, evals, and observability for higher CSAT.",
    href: "/blog/ai-2026-autonomous-customer-support-agents",
>>>>>>> origin/feat/new-content-2025-09-15
=======
    id: "ai-2026-eval-cookbook",
    title: "AI 2026: Evaluations Cookbook",
    summary: "Hands-on recipes and templates to operationalize evals in CI/CD.",
    href: "/content/ai-2026-eval-cookbook",
>>>>>>> origin/feat/new-content-sept-15-2025
    tag: "Guide",
    date: "2025-09-15",
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "agent-platform-slos-2026",
    title: "AI 2026: Agent Platform SLOs That Matter",
    summary: "Safety, quality, reliability, and economics SLOs for agent platforms.",
    href: "/content/ai-2026-agent-platform-slos",
    tag: "SLOs",
    date: "2025-09-15",
  },
  {
    id: "ai-agents-roi-playbook-2026",
    title: "AI Agents ROI Playbook 2026",
    summary: "Model and realize ROI from enterprise AI agents with evaluation gates.",
    href: "/content/ai-agents-roi-playbook-2026",
    tag: "Playbook",
    date: "2025-09-15",
  },
  {
    id: "enterprise-rag-observability-2026",
    title: "AI 2026: Enterprise RAG Observability",
    summary: "Traces, evals, latency SLOs, and safety telemetry for production RAG.",
    href: "/blog/ai-2026-enterprise-rag-observability",
    tag: "Observability",
    date: "2025-09-15",
  },
  {
    id: "realtime-evals-at-scale-2026",
    title: "AI 2026: Real-Time Evals at Scale",
    summary: "From offline suites to live gates powering progressive delivery.",
    href: "/blog/ai-2026-realtime-evals-at-scale",
    tag: "Evals",
    date: "2025-09-15",
  },
  {
    id: "secure-agent-routing-2026",
    title: "AI 2026: Secure Agent Routing Strategies",
    summary: "Isolation domains, permissions, and policy-as-code for safe tool use.",
    href: "/blog/ai-2026-secure-agent-routing-strategies",
    tag: "Security",
    date: "2025-09-15",
  },
  {
    id: "eval-ready-pipelines-2026",
    title: "AI 2026: Eval-Ready AI Pipelines in Production",
    summary: "Policy bundles, scenario suites, and CI/CD gates for reliability.",
    href: "/blog/ai-2026-eval-ready-ai-pipelines-in-production",
    tag: "Pipelines",
    date: "2025-09-15",
  },
  {
    id: "real-time-retrieval-architectures-2026",
    title: "AI 2026: Real-Time Retrieval Architectures",
    summary: "Sub-200ms retrieval via hybrid search, caching, and streaming patterns.",
    href: "/blog/ai-2026-real-time-retrieval-architectures",
    tag: "RAG",
    date: "2025-09-15",
  },
  {
    id: "agent-risk-metrics-2026",
    title: "AI 2026: Enterprise Agent Risk Metrics",
    summary: "Measuring safety, quality, reliability, and ROI for agent platforms.",
    href: "/blog/ai-2026-enterprise-agent-risk-metrics",
    tag: "Risk",
    date: "2025-09-15",
  },
  {
    id: "agents-oncall-automation-2026",
    title: "AI 2026: Agents‑On‑Call Automation",
    summary: "Eval‑gated incident response with automated rollback and observability.",
    href: "/blog/ai-2026-agents-oncall-automation",
    tag: "Operations",
    date: "2025-09-15",
  },
  {
    id: "governed-tool-use-case-studies-2026",
    title: "AI 2026: Governed Tool Use — Case Studies",
    summary: "Real‑world incidents, mitigations, and measurable risk reduction.",
    href: "/blog/ai-2026-governed-tool-use-case-studies",
    tag: "Case Study",
    date: "2025-09-15",
  },
  {
    id: "agent-platform-slos-2026",
    title: "AI 2026: Agent Platform SLOs That Matter",
    summary: "Define and track SLOs that correlate to business value and safety.",
    href: "/content/ai-2026-agent-platform-slos",
    tag: "SLOs",
    date: "2025-09-15",
  },
  {
    id: "llm-evals-maturity-model-2026",
    title: "AI 2026: LLM Evals Maturity Model",
    summary: "A staged path to reliable, eval‑driven delivery for AI systems.",
    href: "/content/ai-2026-llm-evals-maturity-model",
    tag: "Framework",
    date: "2025-09-15",
  },
  {
    id: "autonomous-enterprise-blueprint-2026",
    title: "AI 2026: Autonomous Enterprise Blueprint",
    summary: "Operating model, controls, and metrics to scale autonomous operations.",
    href: "/content/ai-2026-autonomous-enterprise-blueprint",
=======
    id: "evaluation-harness-blueprint-2026-new",
    title: "AI 2026: Evaluation Harness Blueprint",
    summary: "Scenario suites, metrics, and policy gates to ship reliable autonomous agents.",
    href: "/content/ai-2026-evaluation-harness-blueprint",
>>>>>>> origin/feat/new-content-2025-09-15
    tag: "Blueprint",
    date: "2025-09-15",
  },
  {
<<<<<<< HEAD
=======
>>>>>>> origin/feat/latest-content-home
=======
>>>>>>> origin/feat/new-content-2025-09-15
=======
    id: "ai-2026-reliability-checklists",
    title: "AI 2026: Reliability Release Checklists",
    summary: "Preflight, rollout, and incident guides to ship dependable autonomous agents.",
    href: "/content/ai-2026-reliability-checklists",
    tag: "Checklist",
    date: "2025-09-15",
  },
  {
>>>>>>> origin/feat/new-content-sept-15-2025
    id: "ai-governance-2025",
    title: "AI Governance Playbook 2025",
    summary: "A practical guide to building safe, compliant AI systems at scale.",
    href: "/resources/ai-governance-2025",
    tag: "Guide",
    date: "2025-09-10",
  },
  {
<<<<<<< HEAD
    id: "autonomous-support-agents-2026",
    title: "AI 2026: Autonomous Customer Support Agents",
    summary: "Deploy guardrailed support agents with routing, evals, and observability for higher CSAT.",
    href: "/blog/ai-2026-autonomous-customer-support-agents",
    tag: "Guide",
    date: "2025-09-15",
  },
  {
    id: "secure-agent-architecture-2026",
    title: "AI 2026: Secure Agent Architecture",
    summary: "Zero-trust agent design with isolation domains, runtime guards, and policy-as-code.",
    href: "/blog/ai-2026-secure-agent-architecture",
    tag: "Architecture",
    date: "2025-09-15",
  },
  {
    id: "autonomous-agents-red-team-scenarios-2026",
    title: "AI 2026: Autonomous Agents Red-Team Scenarios",
    summary: "Adversarial scenarios, pass criteria, and CI/CD gates to harden agents.",
    href: "/blog/ai-2026-autonomous-agents-red-team-scenarios",
    tag: "Safety",
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
=======
>>>>>>> origin/feat/latest-content-home
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
<<<<<<< HEAD
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
  {
    id: "genai-risk-register-2026",
    title: "AI 2026: Generative AI Risk Register",
    summary: "A living catalog of GenAI risks tied to owners, mitigations, and eval gates.",
    href: "/blog/ai-2026-generative-ai-risk-register",
    tag: "Guide",
    date: "2025-09-15",
  },
  {
    id: "agent-cost-optimization-2026",
    title: "AI 2026: Agent Cost Optimization Guide",
    summary: "Reduce agent TCO via routing, caching, batching, and benchmark-driven choices.",
    href: "/blog/ai-2026-agent-cost-optimization",
    tag: "Guide",
    date: "2025-09-15",
  },
=======
>>>>>>> origin/feat/latest-content-home
];

