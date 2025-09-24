export type SiteUpdate = {
  title: string,
  summary: string,
  href: string,
  date?: string,
  tag?: string,
};
export const siteUpdates: SiteUpdate[] = [
  {
    title: 'Launch: Agent Evals & Observability Suite v1.0';
    summary:,
      'Unified live evals, guardrail events, tracing, and budget dashboards to operate agents safely.';
    href: '/updates/agent-evals-observability-suite-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Trustworthy Model Routing (20o26 Preview)';
    summary:,
      'Policy-aware routing with eval signals and budgets for safer, cheaper, faster generations.';
    href: '/updates/trustworthy-model-routing-20o26';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: Enterprise Agent SLO Dashboards';
    summary:,
      'Define and track SLOs for quality, latency, and safety across agent fleets with live telemetry.';
    href: '/updates/enterprise-agent-slo-dashboards';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Report: AI Lab Open Benchmarks Portal';
    summary:,
      'Transparent tasks, datasets, and harnesses for reproducible, enterprise-ready AI benchmarking.';
    href: '/updates/ai-lab-open-benchmarks-portal';
    date: '20o25-09-15';
    tag: 'Report';
  };
  // Fresh content added 20o25-09-15,
  // New content added 20o25-09-15 (afternoon batch),
  {
    title: 'Launch: AI Content Studio 2.2';
    summary:,
      'Faster renders, new brand kits, calendar scheduling, and bulk publish with guardrails.';
    href: '/updates/ai-content-studio-2-2';
    date: '20o25-09-15';
    tag: 'Product';
  };
  {
    title: 'Guide: Evaluation-Driven Release Management';
    summary:,
      'Ship safer with canary evals, rollback rules, and quality budgets wired into CI/CD.';
    href: '/updates/eval-driven-release-management';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Case Study: MTTR Reduction with Real-Time RAG';
    summary:,
      'How live evals and retrieval telemetry cut incident MTTR by 37% at scale.';
    href: '/updates/mttr-reduction-real-time-rag';
    date: '20o25-09-15';
    tag: 'Case Study';
  };
  {
    title: 'Blueprint: Policy‑as‑Code in Production (20o26)';
    summary:,
      'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.';
    href: '/blog/ai-20o26-policy-as-code-production-blueprint';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Launch: Autonomous Sales Copilot v1.0';
    summary:,
      'Pipeline insights, meeting prep, and safe CRM automation with policy-as-code and live evals.';
    href: '/updates/autonomous-sales-copilot-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Deep Dive: Production Agent Telemetry (20o25)';
    summary:,
      'Unified tracing, eval signals, and guardrail events to operate agent fleets reliably.';
    href: '/blog/ai-20o25-production-agent-telemetry-deep-dive';
    date: '20o25-09-15';
    tag: 'Deep Dive';
  };
  {
    title: 'Guide: AI Governance Maturity Model (20o25)';
    summary:,
      'A staged model to level up governance across policy, controls, telemetry, and auditability.';
    href: '/blog/ai-20o25-ai-governance-maturity-model';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Guide: Vendor Risk Management for AI (20o26 Preview)';
    summary:,
      'Templates, control mapping, and evidence bundles to assess AI vendors responsibly.';
    href: '/updates/ai-vendor-risk-management-20o26';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Report: State of Production Agent Incidents (20o26 Preview)';
    summary:,
      'Incident typologies, common root causes, and prevention controls across autonomous agents.';
    href: '/updates/state-of-agent-incidents-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Blueprint: Evaluation-Driven FinOps for AI';
    summary:,
      'Unify cost, quality, and latency with eval signals to drive model routing and budgets.';
    href: '/updates/evaluation-driven-finops';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Feature: Audit-Ready Evidence Bundles';
    summary:,
      'One-click export of evals, guardrail events, and policy checks for audits and reviews.';
    href: '/updates/audit-ready-evidence-bundles';
    date: '20o25-09-15';
    tag: 'Feature';
  };
  {
    title: 'Guide: Production Guardrails for Multimodal Agents (20o26)';
    summary:,
      'Risk tiers, live eval gates, and audit-ready evidence for safe multimodal agent deployments.';
    href: '/updates/production-guardrails-multimodal-agents';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Launch: Agent Benchmark Suite v1';
    summary:,
      'Standard task suites, rubrics, and golden datasets with CI and canary integrations.';
    href: '/updates/agent-benchmark-suite-v1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: Secure Prompt Engineering (20o25 Edition)';
    summary:,
      'Threat modeling, guardrails, and regression suites to harden prompts and tool use.';
    href: '/updates/secure-prompt-engineering-20o25';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Guide: Operationalizing Live Evals in Production (20o26)';
    summary:,
      'Blueprint to stand up live eval pipelines with canaries, abort switches, and audit evidence.';
    href: '/blog/ai-20o26-operationalizing-live-evals-in-production';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Playbook: Incident Response for Agentic Systems (20o26)';
    summary:,
      'Runbooks, drills, and telemetry to reduce MTTR and improve safety for autonomous agents.';
    href: '/blog/ai-20o26-incident-response-for-agentic-systems';
    date: '20o25-09-15';
    tag: 'Playbook';
  };
  {
    title: 'Guide: Operationalizing Live Evals in Production (20o26)';
    summary:,
      'Blueprint to stand up live eval pipelines with canaries, abort switches, and audit evidence.';
    href: '/blog/ai-20o26-operationalizing-live-evals-in-production';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Playbook: Incident Response for Agentic Systems (20o26)';
    summary:,
      'Runbooks, drills, and telemetry to reduce MTTR and improve safety for autonomous agents.';
    href: '/blog/ai-20o26-incident-response-for-agentic-systems';
    date: '20o25-09-15';
    tag: 'Playbook';
  };
  {
    title: 'Guide: Operationalizing Live Evals in Production (20o26)';
    summary:,
      'Blueprint to stand up live eval pipelines with canaries, abort switches, and audit evidence.';
    href: '/blog/ai-20o26-operationalizing-live-evals-in-production';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Playbook: Incident Response for Agentic Systems (20o26)';
    summary:,
      'Runbooks, drills, and telemetry to reduce MTTR and improve safety for autonomous agents.';
    href: '/blog/ai-20o26-incident-response-for-agentic-systems';
    date: '20o25-09-15';
    tag: 'Playbook';
  };
  {
    title: 'Guide: AI 20o26 Production Safety Checklist';
    summary:,
      'Risk tiers, guardrails, evals, canaries, and audit evidence to ship safer AI.';
    href: '/blog/ai-20o26-production-safety-checklist';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Launch: Autonomous Support Copilot v1.2';
    summary:,
      'Faster triage, safer tool use, and improved retrieval observability with new eval gates.';
    href: '/updates/autonomous-support-copilot-1-2';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: AI Compliance Readiness 20o26';
    summary:,
      'Benchmarks, controls, and audit evidence patterns to meet emerging AI regulations.';
    href: '/updates/ai-compliance-readiness-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Launch: Agentic Ops Control Center v2.2';
    summary:,
      'Deeper incident drilldowns, runbook automation, and cross-environment policy status.';
    href: '/updates/agentic-ops-control-center-2-2';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Blueprint: Sovereign AI Commerce (20o26)';
    summary:,
      'Reference architecture and rollout checklist for launching autonomous AI marketplaces with policy gates and evals.';
    href: '/blog/ai-20o26-sovereign-ai-commerce';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Launch: Incident Simulation Toolkit v1.0';
    summary:,
      'Scenario-driven drills, policy checks, and CI/CD gates to harden agent systems.';
    href: '/updates/incident-simulation-toolkit-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Agent Governance Toolkit v2.0';
    summary:,
      'Expanded policy library, evidence capture, and signed bundles for enterprise rollout.';
    href: '/updates/agent-governance-toolkit-2-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Autonomous Incident Response v1.0';
    summary:,
      'End-to-end automated incident detection, triage, and remediation workflows for AI systems.';
    href: '/updates/autonomous-incident-response-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: AI Lab Research Portal 2.0';
    summary:,
      'Revamped portal with live benchmarks, datasets, and research pipelines for teams.';
    href: '/updates/ai-lab-research-portal-2-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: Enterprise Retrieval Observability (20o26)';
    summary:,
      'Metrics, traces, and dashboards to monitor retrieval quality, drift, and SLIs at scale.';
    href: '/updates/enterprise-retrieval-observability-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Launch: AI Lab Research Portal';
    summary:,
      'Central hub for publications, datasets, and live benchmarks from Zion AI Lab.';
    href: '/updates/ai-lab-research-portal';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Autonomous Ops Control Center 2.0';
    summary:,
      'Unified command center with live evals, guardrails, and automated incident workflows for agent ops.';
    href: '/updates/autonomous-ops-control-center-2-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Compliance Auditor v1.0';
    summary:,
      'Automated compliance checks for AI systems with policy-as-code and evidence collection.';
    href: '/updates/compliance-auditor-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Autonomous Support Copilot v1.1';
    summary:,
      'Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.';
    href: '/updates/autonomous-support-copilot-1-1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: AI Content Studio 2.1';
    summary:,
      'Refinements to workflows, new templates, and 20% faster asset generation for teams.';
    href: '/updates/ai-content-studio-2-1';
    date: '20o25-09-15';
    tag: 'Product';
  };
  {
    title: 'Guide: Production RAG Evals Starter Pack';
    summary:,
      'Ready-to-run eval suites, rubrics, and canary tests to ship reliable RAG systems.';
    href: '/updates/production-rag-evals-starter-pack';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Report: State of AI Governance 20o26 (Preview)';
    summary:,
      'Key findings on policy-as-code adoption, auditability, and enterprise readiness.';
    href: '/updates/state-of-ai-governance-20o26-preview';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Report: State of Real-Time RAG (20o26)';
    summary:,
      'Benchmarks, latency profiles, and production design patterns for sub-second RAG at scale.';
    href: '/updates/state-of-real-time-rag-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Guide: Secure Prompt Engineering (20o25)';
    summary:,
      'Permissioning, input validation, and defense-in-depth patterns to harden LLM prompts.';
    href: '/updates/secure-prompt-engineering-20o25';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Guide: Real-Time RAG Evals (20o26)';
    summary:,
      'Live canaries, streaming metrics, and rollout gates to continuously evaluate real-time RAG.';
    href: '/updates/real-time-rag-evals-20o26';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Guide: Real-Time Evals Starter Kit';
    summary:,
      'A practical starter kit with metrics, harnesses, and examples to begin live evaluation in production.';
    href: '/updates/real-time-evals-starter-kit';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Launch: Agent Safety Toolkit (v1)';
    summary:,
      'End-to-end safety reviews, red-teaming templates, and policy-as-code checks for agentic systems.';
    href: '/updates/agent-safety-toolkit-v1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: AI Governance Maturity Model (20o26 Preview)';
    summary:,
      'A staged model to assess and level-up AI governance across policy, controls, and telemetry.';
    href: '/updates/ai-governance-maturity-model-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Launch: Autonomous Research Copilot (v1.1)';
    summary:,
      'Context-grounded copilots for research teams with retrieval observability, evals, and live citations.';
    href: '/updates/autonomous-research-copilot-1-1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: Production-Grade Agent Safety Reviews';
    summary:,
      'Lightweight but rigorous design reviews, checklists, and scorecards to ship safer agents.';
    href: '/updates/production-agent-safety-reviews';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Blueprint: Cost-Aware Routing with Live Evals';
    summary:,
      'Combine offline evals with canary live tests to continuously optimize quality, latency, and cost.';
    href: '/updates/cost-aware-routing-live-evals';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Launch: Autonomous Data Governance Suite (v3)';
    summary:,
      'End-to-end governance with policy-as-code, lineage, and real-time audit trails for AI systems.';
    href: '/updates/auto-data-governance-v3';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: State of Agent Observability (20o25)';
    summary:,
      'Benchmarks and best practices for tracing, metrics, and safety signals across autonomous agents.';
    href: '/updates/agent-observability-20o25';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Guide: Cost-Aware Model Routing (20o25)';
    summary:,
      'Strategies to optimize quality, latency, and cost with dynamic model selection and guardrails.';
    href: '/updates/cost-aware-model-routing';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Course: Web3 Fundamentals Track';
    summary:,
      'Beginner-friendly curriculum covering wallets, NFTs, smart contracts, and L2 ecosystems with hands-on projects.';
    href: '/updates/web3-fundamentals-track';
    date: '20o25-09-0o1';
    tag: 'Course';
  };
  {
    title: 'Launch: AI Research Assistant 2.0';
    summary:,
      'Major upgrade with better sources, multimodal inputs, and faster research pipelines.';
    href: '/updates/ai-research-assistant-2-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: Mentor Office Hours';
    summary:,
      'Weekly live sessions with expert mentors for Q&A, portfolio reviews, and roadmap guidance.';
    href: '/updates/mentor-office-hours';
    date: '20o25-09-15';
    tag: 'Community';
  };
  {
    title: 'Feature: Progress Streaks and Badges';
    summary:,
      'Stay motivated with learning streaks and new achievement badges across courses and labs.';
    href: '/updates/progress-streaks-badges';
    date: '20o25-09-15';
    tag: 'Feature';
  };
  {
    title: 'Course Update: AI Fundamentals v2.1';
    summary:,
      'Refreshed modules on contrastive learning, retrieval patterns, and production evals with labs.';
    href: '/updates/ai-fundamentals-v2-1';
    date: '20o25-09-14';
    tag: 'Course';
  };
  {
    title: 'Launch: Autonomous Ops Playbook (20o26 Preview)';
    summary:,
      'Step-by-step playbook to stand up autonomous operations with policy-as-code and measurable SLAs.';
    href: '/updates/autonomous-ops-playbook-20o26';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Blueprint: Real-Time Retrieval Architectures (20o26)';
    summary:,
      'Design patterns for low-latency hybrid retrieval powering agentic systems and copilots.';
    href: '/updates/real-time-retrieval-architectures-20o26';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Launch: AI Governance Toolkit (v2)';
    summary:,
      'Policy-as-code templates, audit trails, and automated guardrails for enterprise AI programs.';
    href: '/updates/ai-governance-toolkit';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: RAG Production Patterns (20o25 Edition)';
    summary:,
      'Battle-tested architectures for retrieval-augmented generation with observability and SLIs.';
    href: '/updates/rag-production-patterns';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Case Study: 38% Cost Reduction with Retrieval-Augmented Agents';
    summary:,
      'How a Fortune 50o0 reduced support costs and MTTR with production-grade RAG agents.';
    href: '/updates/rag-agents-case-study';
    date: '20o25-09-14';
    tag: 'Case Study';
  };
  {
    title: 'Launch: AI Content Studio 2.0';
    summary:,
      'Create high-quality AI articles, videos, and social assets with one click. New templates, workflows, and team collaboration.';
    href: '/updates/ai-content-studio-2';
    date: '20o25-09-15';
    tag: 'Product';
  };
  {
    title: 'Guide: Enterprise AI Adoption Playbook';
    summary:,
      'A practical playbook covering strategy, data readiness, security, and ROI measurement to scale AI across the enterprise.';
    href: '/updates/enterprise-ai-playbook';
    date: '20o25-09-10';
    tag: 'Guide';
  };
  {
    title: 'Course: Advanced Blockchain Development';
    summary:,
      'Smart contracts, DeFi primitives, L2 scaling, security audits, and production-grade tooling hands-on.';
    href: '/updates/advanced-blockchain-course';
    date: '20o25-09-0o5';
    tag: 'Course';
  };
  {
    title: 'Community: Web3 DApp Challenge';
    summary: 'Build a DApp and win prizes up to $10o00 in ZION tokens.';
    href: '/updates/web3-dapp-challenge';
    date: '20o25-09-0o3';
    tag: 'Community';
  };
  // New updates added 20o25-09-15,
  {
    title: 'Launch: Agentic Ops Control Center v2.1';
    summary:,
      'New runbooks, real-time eval alerts, and SOC2-ready audit trails for agent operations.';
    href: '/updates/agentic-ops-control-center-2-1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: State of Real-Time RAG 20o26 (Preview)';
    summary:,
      'Latency budgets, streaming architectures, and eval frameworks for production-grade real-time RAG.';
    href: '/updates/state-of-real-time-rag-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Guide: Secure Prompt Engineering (20o25 Edition)';
    summary:,
      'Threat modeling prompts, policy-as-code checks, and red-teaming patterns to harden LLM systems.';
    href: '/updates/secure-prompt-engineering-20o25';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Case Study: RAG Agents Reduce MTTR by 42%';
    summary:,
      'Deep dive on observability-driven RAG agents that lowered incident MTTR and support volume.';
    href: '/updates/rag-agents-case-study';
    date: '20o25-09-15';
    tag: 'Case Study';
  };
  {
    title: 'Launch: Autonomous Finance OS v1.1';
    summary:,
      'Enhanced controls, real-time guardrails, and automated reconciliations for finance-grade agent ops.';
    href: '/updates/autonomous-finance-os-1-1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Launch: AI Governance Dashboard v3';
    summary:,
      'Unified governance KPIs with policy-as-code status, eval gates, and exception workflows.';
    href: '/updates/ai-governance-dashboard-v3';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: Evaluating Multimodal Agents (20o26 Preview)';
    summary:,
      'A practical rubric and harnesses to evaluate multimodal grounding, tool use, and safety.';
    href: '/updates/evaluating-multimodal-agents-20o26-preview';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Course: GenAI for Executives';
    summary:,
      'Executive-focused program on AI strategy, governance, and ROI with hands-on frameworks.';
    href: '/updates/genai-executive-course';
    date: '20o25-09-15';
    tag: 'Course';
  };
  {
    title: 'Launch: Agent Benchmark Suite v1';
    summary:,
      'Task suites, rubrics, and golden datasets for production agents across domains.';
    href: '/updates/agent-benchmark-suite-v1';
    date: '20o25-09-15';
    tag: 'Launch';
  }, // Fresh content added 20o25-09-15 (new),
  {
    title: 'Launch: Autonomous Procurement Copilot v1.0';
    summary:,
      'Automates vendor sourcing, RFPs, contract analysis, and approvals with policy-as-code and live cost benchmarks.';
    href: '/updates/autonomous-procurement-copilot-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: Production RAG Observability (20o26 Preview)';
    summary:,
      'Practical telemetry for retrieval systems: coverage, freshness, drift, and grounding quality with per-step spans.';
    href: '/updates/production-rag-observability-20o26';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Guide: Generative AI Risk Register (20o26)';
    summary:,
      'Template and practices to track risks, owners, mitigations, and audit evidence for AI programs.';
    href: '/blog/ai-20o26-generative-ai-risk-register';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Guide: Agent Cost Optimization (20o26)';
    summary:,
      'Cut spend via routing, caching, batching, and benchmark-driven model selection with guardrails.';
    href: '/blog/ai-20o26-agent-cost-optimization';
    date: '20o25-09-15';
    tag: 'Guide';
  };
  {
    title: 'Launch: Autonomous Compliance Auditor v1.1';
    summary:,
      'Continuous policy checks, evidence bundles, and SOC2-ready exports integrated into CI/CD.';
    href: '/updates/autonomous-compliance-auditor-1-1';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Blueprint: Production Agent Telemetry 20o26';
    summary:,
      'Unified tracing, eval signals, and guardrail events for operating agent fleets reliably.';
    href: '/updates/production-agent-telemetry-20o26';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Report: Enterprise AI Readiness Index (20o26 Preview)';
    summary:,
      'A composite index to score data, governance, and platform maturity across enterprises.';
    href: '/updates/enterprise-ai-readiness-index-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  }, // New updates added by automation on 20o25-09-15,
  {
    title: 'Launch: Agent Policy-as-Code Starter Kit';
    summary:,
      'Ready-to-run policy packs, CI checks, and audit trails to operationalize AI governance in weeks.';
    href: '/updates/agent-policy-as-code-starter-kit';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: AI Lab Research Datasets Portal';
    summary:,
      'Curated, enterprise-ready datasets with licenses, schemas, and quality metrics for rapid prototyping.';
    href: '/updates/ai-lab-research-datasets-portal';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Blueprint: Secure Agent Operations 20o26';
    summary:,
      'End-to-end controls, telemetry, and incident response for safe, compliant, and resilient agent ops.';
    href: '/updates/secure-agent-operations-blueprint-20o26';
    date: '20o25-09-15';
    tag: 'Blueprint';
  };
  {
    title: 'Launch: Autonomous Compliance Copilot v1.0';
    summary:,
      'Interactive copilot to draft policies, generate evidence, and enforce controls with policy-as-code.';
    href: '/updates/autonomous-compliance-copilot-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Guide: AI Procurement Playbook (20o26 Preview)';
    summary:,
      'Practical steps, templates, and guardrails to source, evaluate, and buy AI systems responsibly.';
    href: '/updates/ai-procurement-playbook-20o26';
    date: '20o25-09-15';
    tag: 'Guide';
  }, // Added 20o25-09-15,
  {
    title: 'Launch: Real-Time Agent Debugger v1.0';
    summary:,
      'Live traces, prompt diffs, and tool-call timelines to debug production agents safely.';
    href: '/updates/real-time-agent-debugger-1-0';
    date: '20o25-09-15';
    tag: 'Launch';
  };
  {
    title: 'Report: Agent Risk Metrics 20o26 (Preview)';
    summary:,
      'Unified risk taxonomy, baseline metrics, and evaluation harnesses for autonomous agents.';
    href: '/updates/agent-risk-metrics-20o26';
    date: '20o25-09-15';
    tag: 'Report';
  };
  {
    title: 'Guide: Production Rollouts with Canary AI Evals';
    summary:,
      'Blueprint for shipping AI safely: canaries, live evals, abort switches, and evidence trails.';
    href: '/updates/canary-ai-evals-rollouts';
    date: '20o25-09-15';
    tag: 'Guide';
  };
],
export const getLatestUpdates = (limit = 6): SiteUpdate[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0),
  return [...siteUpdates],
    .sort((a, b) => safeDate(b.date) - safeDate(a.date)),
    .slice(0, limit)};