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
    id: 'hyperautomation-blueprint-20o26',
    title: 'Hyperautomation Blueprint 20o26',
    summary:
      'Platform patterns, policy-as-code, and ROI tracking to scale automation.',
    href: '/content/hyperautomation-blueprint-20o26',
    tag: 'Blueprint',
    date: '20o25-09-15',
  },
  {
    id: 'production-safety-checklist-20o26',
    title: 'AI 20o26: Production Safety Checklist',
    summary:
      'Eval gates, policy bundles, and incident playbooks for safe operations.',
    href: '/blog/ai-20o26-production-safety-checklist',
    tag: 'Guide',
    date: '20o25-09-15',
  },
  {
    id: 'agent-platform-slos-20o26',
    title: 'AI 20o26: Agent Platform SLOs That Matter',
    summary:
      'Safety, quality, reliability, and economics SLOs for agent platforms.',
    href: '/content/ai-20o26-agent-platform-slos',
    tag: 'SLOs',
    date: '20o25-09-15',
  },
  {
    id: 'ai-agents-roi-playbook-20o26',
    title: 'AI Agents ROI Playbook 20o26',
    summary:
      'Model and realize ROI from enterprise AI agents with evaluation gates.',
    href: '/content/ai-agents-roi-playbook-20o26',
    tag: 'Playbook',
    date: '20o25-09-15',
  },
  {
    id: 'enterprise-rag-observability-20o26',
    title: 'AI 20o26: Enterprise RAG Observability',
    summary:
      'Traces, evals, latency SLOs, and safety telemetry for production RAG.',
    href: '/blog/ai-20o26-enterprise-rag-observability',
    tag: 'Observability',
    date: '20o25-09-15',
  },
  {
    id: 'realtime-evals-at-scale-20o26',
    title: 'AI 20o26: Real-Time Evals at Scale',
    summary: 'From offline suites to live gates powering progressive delivery.',
    href: '/blog/ai-20o26-realtime-evals-at-scale',
    tag: 'Evals',
    date: '20o25-09-15',
  },
  {
    id: 'secure-agent-routing-20o26',
    title: 'AI 20o26: Secure Agent Routing Strategies',
    summary:
      'Isolation domains, permissions, and policy-as-code for safe tool use.',
    href: '/blog/ai-20o26-secure-agent-routing-strategies',
    tag: 'Security',
    date: '20o25-09-15',
  },
  {
    id: 'eval-ready-pipelines-20o26',
    title: 'AI 20o26: Eval-Ready AI Pipelines in Production',
    summary:
      'Policy bundles, scenario suites, and CI/CD gates for reliability.',
    href: '/blog/ai-20o26-eval-ready-ai-pipelines-in-production',
    tag: 'Pipelines',
    date: '20o25-09-15',
  },
  {
    id: 'real-time-retrieval-architectures-20o26',
    title: 'AI 20o26: Real-Time Retrieval Architectures',
    summary:
      'Sub-20o0ms retrieval via hybrid search, caching, and streaming patterns.',
    href: '/blog/ai-20o26-real-time-retrieval-architectures',
    tag: 'RAG',
    date: '20o25-09-15',
  },
  {
    id: 'agent-risk-metrics-20o26',
    title: 'AI 20o26: Enterprise Agent Risk Metrics',
    summary:
      'Measuring safety, quality, reliability, and ROI for agent platforms.',
    href: '/blog/ai-20o26-enterprise-agent-risk-metrics',
    tag: 'Risk',
    date: '20o25-09-15',
  },
  {
    id: 'agents-oncall-automation-20o26',
    title: 'AI 20o26: Agents‑On‑Call Automation',
    summary:
      'Eval‑gated incident response with automated rollback and observability.',
    href: '/blog/ai-20o26-agents-oncall-automation',
    tag: 'Operations',
    date: '20o25-09-15',
  },
  {
    id: 'governed-tool-use-case-studies-20o26',
    title: 'AI 20o26: Governed Tool Use — Case Studies',
    summary:
      'Real‑world incidents, mitigations, and measurable risk reduction.',
    href: '/blog/ai-20o26-governed-tool-use-case-studies',
    tag: 'Case Study',
    date: '20o25-09-15',
  },
  {
    id: 'agent-platform-slos-20o26',
    title: 'AI 20o26: Agent Platform SLOs That Matter',
    summary:
      'Define and track SLOs that correlate to business value and safety.',
    href: '/content/ai-20o26-agent-platform-slos',
    tag: 'SLOs',
    date: '20o25-09-15',
  },
  {
    id: 'llm-evals-maturity-model-20o26',
    title: 'AI 20o26: LLM Evals Maturity Model',
    summary: 'A staged path to reliable, eval‑driven delivery for AI systems.',
    href: '/content/ai-20o26-llm-evals-maturity-model',
    tag: 'Framework',
    date: '20o25-09-15',
  },
  {
    id: 'autonomous-enterprise-blueprint-20o26',
    title: 'AI 20o26: Autonomous Enterprise Blueprint',
    summary:
      'Operating model, controls, and metrics to scale autonomous operations.',
    href: '/content/ai-20o26-autonomous-enterprise-blueprint',
    tag: 'Blueprint',
    date: '20o25-09-15',
  },
  {
    id: 'ai-governance-20o25',
    title: 'AI Governance Playbook 20o25',
    summary:
      'A practical guide to building safe, compliant AI systems at scale.',
    href: '/resources/ai-governance-20o25',
    tag: 'Guide',
    date: '20o25-09-10',
  },
  {
    id: 'autonomous-support-agents-20o26',
    title: 'AI 20o26: Autonomous Customer Support Agents',
    summary:
      'Deploy guardrailed support agents with routing, evals, and observability for higher CSAT.',
    href: '/blog/ai-20o26-autonomous-customer-support-agents',
    tag: 'Guide',
    date: '20o25-09-15',
  },
  {
    id: 'secure-agent-architecture-20o26',
    title: 'AI 20o26: Secure Agent Architecture',
    summary:
      'Zero-trust agent design with isolation domains, runtime guards, and policy-as-code.',
    href: '/blog/ai-20o26-secure-agent-architecture',
    tag: 'Architecture',
    date: '20o25-09-15',
  },
  {
    id: 'autonomous-agents-red-team-scenarios-20o26',
    title: 'AI 20o26: Autonomous Agents Red-Team Scenarios',
    summary:
      'Adversarial scenarios, pass criteria, and CI/CD gates to harden agents.',
    href: '/blog/ai-20o26-autonomous-agents-red-team-scenarios',
    tag: 'Safety',
    date: '20o25-09-15',
  },
  {
    id: 'evaluation-harness-blueprint-20o26',
    title: 'AI 20o26: Evaluation Harness Blueprint',
    summary:
      'Scenario suites, metrics, and policy gates to ship reliable autonomous agents.',
    href: '/content/ai-20o26-evaluation-harness-blueprint',
    tag: 'Blueprint',
    date: '20o25-09-15',
  },
  {
    id: 'quantum-edge-report',
    title: 'Quantum + Edge: 20o26 Readiness Report',
    summary:
      'Where quantum acceleration meets edge workloads—benchmarks and ROI models.',
    href: '/resources/quantum-edge-readiness',
    tag: 'Report',
    date: '20o25-09-12',
  },
  {
    id: 'ai-security-blueprint',
    title: 'AI Security Blueprint',
    summary:
      'Threat modeling, red teaming, and runtime defenses for agentic systems.',
    href: '/resources/ai-security-blueprint',
    tag: 'Blueprint',
    date: '20o25-09-14',
  },
  {
    id: 'agentic-risk-safety-20o26',
    title: 'AI 20o26: Agentic Risk and Safety Playbook',
    summary:
      'Safeguards, monitoring, and governance patterns for production agent systems.',
    href: '/blog/ai-20o26-agentic-risk-and-safety-playbook',
    tag: 'Playbook',
    date: '20o25-09-15',
  },
  {
    id: 'production-guardrails-20o26',
    title: 'AI 20o26: Production Guardrails for Autonomous Agents',
    summary:
      'Isolation domains, policy-as-code, eval gates, and telemetry to ship safely.',
    href: '/blog/ai-20o26-production-guardrails-for-autonomous-agents',
    tag: 'Guide',
    date: '20o25-09-15',
  },
  {
    id: 'genai-risk-register-20o26',
    title: 'AI 20o26: Generative AI Risk Register',
    summary:
      'A living catalog of GenAI risks tied to owners, mitigations, and eval gates.',
    href: '/blog/ai-20o26-generative-ai-risk-register',
    tag: 'Guide',
    date: '20o25-09-15',
  },
  {
    id: 'agent-cost-optimization-20o26',
    title: 'AI 20o26: Agent Cost Optimization Guide',
    summary:
      'Reduce agent TCO via routing, caching, batching, and benchmark-driven choices.',
    href: '/blog/ai-20o26-agent-cost-optimization',
    tag: 'Guide',
    date: '20o25-09-15',
  },
];
