export type UpdateItem = {
  title: string
  summary: string
  href: string
  date?: string
  tag?: string
}

// Consolidated, deduplicated updates list (most recent first)
export const updates: UpdateItem[] = [
    // New content additions (2025-09-16)
    {
        title: 'Blueprint: Real‑Time Model Routing Playbook (2026)'
        ,summary: 'Dynamic, budgeted routing across models using eval signals, SLOs, and guardrails.'
        ,href: '/updates/real-time-model-routing-playbook-2026'
        ,date: '2025-09-16'
        ,tag: 'Blueprint'
    },
    {
        title: 'Guide: Real‑Time Retrieval Architectures (2026)'
        ,summary: 'Low‑latency, high‑accuracy retrieval with hybrid indexes and freshness controls.'
        ,href: '/updates/real-time-retrieval-architectures-2026'
        ,date: '2025-09-16'
        ,tag: 'Guide'
    },
    // New AI Lab content (2025-09-17)
    {
        title: 'Guide: Evidence‑Led Ops Scorecards',
        summary: 'Align SLOs, eval gates, and incident evidence into auditable scorecards.',
        href: '/reports/ai-lab/articles/new-ai-lab-content-evidence-led-ops-scorecards-1758145200000.md',
        date: '2025-09-17',
        tag: 'Guide',
    },
    {
        title: 'Field Guide: Agent Safety Drills',
        summary: 'Quarterly exercises with eval gates and signed evidence to validate controls.',
        href: '/reports/ai-lab/articles/new-ai-lab-content-agent-safety-drills-1758148800000.md',
        date: '2025-09-17',
        tag: 'Field Guide',
    },
    // New content (2025-09-16 - additional featured additions)
    {
        title: 'Launch: Autonomous Knowledge Graph Builder v1.0',
        summary: 'Automated entity extraction, linking, and provenance with eval-gated updates.',
        href: '/updates/autonomous-knowledge-graph-builder-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Evidence-First Release Management (2026)',
        summary: 'Plan, gate, and verify AI releases with signed evidence and rollback triggers.',
        href: '/updates/evidence-first-release-management-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // Fresh AI Lab content (2025-09-17)
    {
        title: 'Field Guide: Real-Time Agent SLO Blueprints',
        summary: 'Define and enforce latency, quality, and cost SLOs with eval gates and evidence.',
        href: '/reports/ai-lab/articles/real-time-agent-slo-blueprints-1758141600000.md',
        date: '2025-09-17',
        tag: 'Field Guide',
    },
    {
        title: 'Guide: Agent Guardrails for Synthetic Data',
        summary: 'Safe generation patterns using policy-as-code, dual eval gates, and evidence.',
        href: '/reports/ai-lab/articles/new-agent-guardrails-for-synthetic-data-1758139800000.md',
        date: '2025-09-17',
        tag: 'Guide',
    },
    // Fresh blog content (2025-09-16)
    {
        title: 'Guide: Zero‑Downtime Agent Rollouts (2026)',
        summary: 'Ship agent changes with canaries, shadow, eval gates, and safe auto‑rollback.',
        href: '/blog/ai-2026-zero-downtime-agent-rollouts',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // Fresh content (2025-09-16 - newly added set)
    {
        title: 'Launch: Agent Safety Center v1.0',
        summary: 'Unified hub for guardrails, eval gates, and signed evidence in one place.',
        href: '/updates/agent-safety-center-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Agent Change Windows (2026)',
        summary: 'Plan, gate, and verify agent changes with SLOs, evals, and rollback criteria.',
        href: '/updates/production-agent-change-windows-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Evidence Ledger for AI Systems',
        summary: 'Tamper‑evident ledger of artifacts, policies, eval signals, and lineage.',
        href: '/updates/evidence-ledger-for-ai-systems-2026',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Report: Agent Posture Trends Q3 2025',
        summary: 'Top risks, common violations, and control effectiveness across enterprise agents.',
        href: '/updates/agent-posture-trends-q3-2025',
        date: '2025-09-16',
        tag: 'Report',
    },
    // New blog content (2025-09-16)
    {
        title: 'Blueprint: Agent Posture Scorecards (2026)',
        summary: 'Define SLIs/SLOs, thresholds, and alerts for live agent posture.',
        href: '/blog/ai-2026-agent-posture-scorecards-blueprint',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Blueprint: Evidence‑Led Operations (2026)',
        summary: 'Operate with eval gates, policy‑as‑code, and signed evidence bundles.',
        href: '/blog/ai-2026-evidence-led-operations-blueprint',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    // Added new blog posts (2025-09-16)
    {
        title: 'Blueprint: Runtime Policy Enforcement for Production Agents',
        summary: 'Tiered permissions, runtime checks, and signed evidence for safer operations.',
        href: '/blog/ai-2026-runtime-policy-enforcement-blueprint',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Guide: Production Agent Incident Playbooks (2026)',
        summary: 'Standardized runbooks for containment, rollback, and RCA with signed evidence.',
        href: '/blog/ai-2026-production-agent-incident-playbooks',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // New content (2025-09-16)
    {
        title: 'Launch: Real‑Time Agent Posture Monitor v1.0',
        summary: 'Continuous policy posture checks, alerts, and remediation guidance for agents.',
        href: '/updates/real-time-agent-posture-monitor-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Evidence‑Driven Rollback Playbook (2026)',
        summary: 'How to trigger, execute, and verify safe rollbacks with signed evidence.',
        href: '/updates/evidence-driven-rollback-playbook-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // New blog (2025-09-16)
    {
        title: 'Blueprint: Runtime Policy Enforcement for Production Agents',
        summary: 'Tiered permissions, runtime checks, and signed evidence for safer operations.',
        href: '/blog/ai-2026-runtime-policy-enforcement-blueprint',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    // New content (2025-09-16 - additional batch)
    {
        title: 'Guide: Agent Safety Governance Checklist (2026)',
        summary: 'Operational checklist covering policies, eval gates, incident runbooks, and evidence.',
        href: '/updates/agent-safety-governance-checklist-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Autonomous Rollback Controller v1.0',
        summary: 'Automated policy-gated rollbacks with signed evidence and objective thresholds.',
        href: '/updates/autonomous-rollback-controller-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    // AI Lab fresh articles (2025-09-17)
    {
        title: 'Blueprint: Runtime Policy Enforcement for Production Agents',
        summary: 'Tiered permissions, runtime checks, and signed evidence for safer operations.',
        href: '/reports/ai-lab/articles/new-agent-runtime-policy-enforcement-1758138000000.md',
        date: '2025-09-17',
        tag: 'Blueprint',
    },
    {
        title: 'Field Guide: Eval Gates and Scorecards',
        summary: 'Operationalize quality, latency, and cost with enforceable gates and live scorecards.',
        href: '/reports/ai-lab/articles/new-eval-gates-scorecards-1758136200000.md',
        date: '2025-09-17',
        tag: 'Field Guide',
    },
    // New content (2025-09-16 - batch 3)
    {
        title: 'Launch: Agentic Evidence Hub v1.0',
        summary: 'Central place to browse, search, and share signed evidence bundles and scorecards.',
        href: '/updates/agentic-evidence-hub-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Report: State of Enterprise Agent Safety (2026 Preview)',
        summary: 'Key risks, posture trends, and control patterns from early enterprise deployments.',
        href: '/updates/state-of-enterprise-agent-safety-2026',
        date: '2025-09-16',
        tag: 'Report',
    },
    // Newly added updates (2025-09-16 - batch 2)
    {
        title: 'Launch: Real‑Time Guardrail Metrics Widgets v1.0',
        summary: 'Drop-in UI widgets for live safety, latency and quality guardrails with alerts.',
        href: '/updates/real-time-agent-metrics-widgets-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Incident Simulation Toolkit v1.1',
        summary: 'Run realistic failure drills with eval gates, evidence capture, and rollback practice.',
        href: '/updates/incident-simulation-toolkit-1-1',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // Fresh content (2025-09-16 - new additions)
    {
        title: 'Launch: Autonomous Change Approvals v1.0',
        summary: 'Policy-gated approvals with eval signals and signed evidence for AI changes.',
        href: '/updates/autonomous-change-approvals-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Agent Safety Red‑Team Playbooks (2026)',
        summary: 'Reusable red‑team scenarios, risk tiers, and remediation patterns for agents.',
        href: '/updates/agent-safety-redteam-playbooks-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Real‑Time Guardrail Metrics v1.1',
        summary: 'Expanded live metrics for tool‑use violations, remediation speed, and risk posture.',
        href: '/updates/real-time-guardrail-metrics-1-1',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    // Newly added updates (2025-09-16 - set 2)
    {
        title: 'Blueprint: Production Agent Safety Runbooks (2026)',
        summary: 'Incident-ready runbooks with eval gates, rollback plans, and signed evidence.',
        href: '/updates/production-agent-safety-runbooks-2026',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Report: State of Multimodal RAG (2026 Preview)',
        summary: 'Benchmarks for groundedness, sync, and latency across image, audio, and text.',
        href: '/updates/state-of-multimodal-rag-2026',
        date: '2025-09-16',
        tag: 'Report',
    },
    // Newly added updates (2025-09-16 - additional)
    {
        title: 'Launch: Real‑Time Agent Benchmark Suite v1.0',
        summary: 'Unified latency, quality, and cost benchmarking with shareable scorecards.',
        href: '/updates/real-time-agent-benchmark-suite-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Agent Postmortems — Evidence‑First Templates',
        summary: 'Step-by-step templates for reproducible agent incident analysis with signed evidence.',
        href: '/updates/production-agent-postmortems-evidence-first',
        date: '2025-09-16',
        tag: 'Guide',
    },
    // Fresh content (2025-09-16)
    {
        title: 'Blueprint: Agent Posture Management — Continuous Controls',
        summary: 'Live posture checks, policy gates, and evidence logs for production agents.',
        href: '/updates/agent-posture-management-2026',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Guide: Real‑Time Guardrail Metrics',
        summary: 'Operational metrics to monitor tool‑use safety, violations, and remediation speed.',
        href: '/updates/real-time-guardrail-metrics-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Report: Evidence‑First Incident Postmortems',
        summary: 'Trace diffs, lineage, and policy exception trails for reproducible analysis.',
        href: '/updates/evidence-first-incident-postmortems-2026',
        date: '2025-09-16',
        tag: 'Report',
    },
    {
        title: 'Launch: Agent Billing Controls v1.0',
        summary: 'Budgets, quotas, and safe degradation with policy‑aware cost routing.',
        href: '/updates/agent-billing-controls-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    // Newly added updates (2025-09-16)
    {
        title: 'Launch: Real‑Time Agent FinOps Dashboard v1.0',
        summary: 'Live spend, latency, and quality scorecards with budget alerts and routing controls.',
        href: '/updates/real-time-agent-finops-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Zero‑Downtime Agent Releases',
        summary: 'Canary and shadow releases with eval gates, rollback plans, and signed evidence.',
        href: '/updates/zero-downtime-agent-releases-1758081600000',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Zero‑Trust Agent Controllers v1.0',
        summary: 'Scoped permissions, runtime enforcement, and evidence capture for tool use.',
        href: '/updates/zero-trust-agent-controllers-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Agent Change Management Runbook (2026)',
        summary: 'Approval workflows, eval gates, and rollback patterns for safe agent changes.',
        href: '/updates/agent-change-management-runbook-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Trustworthy AI Evidence Vault v1.2',
        summary: 'Faster evidence bundling, expanded policy checks, and auditor-ready exports.',
        href: '/updates/trustworthy-ai-evidence-vault-1-2',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Launch: Autonomous Incident Response Copilot v1.0',
        summary: 'Real-time triage, evidence bundling, and guided remediation for AI systems.',
        href: '/updates/autonomous-incident-response-copilot-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Agent Incident Playbooks (2026)',
        summary: 'Standard response patterns with eval gates, lineage capture, and rollback plans.',
        href: '/blog/ai-2026-production-agent-incident-playbooks',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Enterprise Retrieval Guardrails (2026)',
        summary: 'Grounded generation with constraints, eval gates, and policy-as-code checks.',
        href: '/updates/enterprise-retrieval-guardrails-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Secure Tool Access for Agents',
        summary: 'Scoped tokens, least-privilege adapters, and real-time policy enforcement.',
        href: '/updates/secure-tool-access-for-agents-2026',
        date: '2025-09-16',
        tag: 'Blueprint',
    },
    {
        title: 'Field Guide: Evaluating Multimodal RAG',
        summary: 'Practical rubrics and KPIs for image, audio, and text retrieval pipelines.',
        href: '/updates/field-guide-evaluating-multimodal-rag',
        date: '2025-09-16',
        tag: 'Field Guide',
    },
    {
        title: 'Blog: Shipping Safer Agents with Canary + Shadow',
        summary: 'A pragmatic rollout path that reduces risk while increasing iteration speed.',
        href: '/blog/ai-2026-canary-shadow-for-agent-rollouts',
        date: '2025-09-16',
        tag: 'Blog',
    },
    {
        title: 'Deep Dive: Real‑Time Agent Cost Optimizer v2.0',
        summary: 'Architecture, KPIs, and rollout lessons from cost‑aware, eval‑gated routing.',
        href: '/blog/ai-2026-real-time-agent-cost-optimizer-deep-dive',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Agent Evidence Bundles — 2026 Blueprint',
        summary: 'Design signed evidence bundles with provenance, policy checks, and eval signals.',
        href: '/blog/ai-2026-agent-evidence-bundles-blueprint',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Enterprise Agent Risk Scorecards',
        summary: 'Standardize cross-team risk metrics, thresholds, and alerts for autonomous agents.',
        href: '/blog/ai-2026-enterprise-agent-risk-scorecards',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Autonomous Ops Control Center v2.4',
        summary: 'New playbooks, real-time eval gates, and risk scorecards for safer ops.',
        href: '/updates/autonomous-ops-control-center-2-4',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Agent Observability Blueprint (2026)',
        summary: 'End-to-end traces, SLIs/SLOs, eval overlays, and evidence bundles for agents.',
        href: '/updates/agent-observability-blueprint-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Agent Reliability — 2026 Blueprint',
        summary: 'Standardize SLOs, eval gates, and evidence bundles for reliable production agents.',
        href: '/blog/ai-2026-agent-reliability-blueprint',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Agent Safety Evidence Bundles',
        summary: 'Design evidence bundles with evals, lineage, and policy checks for audits.',
        href: '/blog/ai-2026-agent-safety-evidence-bundles',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Blueprint: Production Evals Control Plane',
        summary: 'Centralize rubrics, thresholds, and rollout gates with live scorecards.',
        href: '/blog/ai-2026-production-evals-control-plane',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Guide: Multimodal Guardrails — 2026',
        summary: 'Layered guardrails for image/audio/video agents with risk tiers and eval gates.',
        href: '/blog/ai-2026-multimodal-guardrails-blueprint',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Real‑Time Agent FinOps Dashboard v1.0',
        summary: 'Live spend, latency, and quality scorecards with budget alerts and routing controls.',
        href: '/updates/real-time-agent-finops-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Blog: Continuous Agent Evidence Bundles',
        summary: 'Designing continuous evidence capture for autonomous agents with policy gates and provenance.',
        href: '/blog/ai-2026-continuous-agent-evidence-bundles',
        date: '2025-09-16',
        tag: 'Announcement',
    },
    {
        title: 'Launch: Autonomous Experimentation Toolkit v1.0',
        summary: 'Safe A/Bs and shadow tests with eval gates, policy checks, and audit evidence.',
        href: '/updates/autonomous-experimentation-toolkit-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Guardrails for Multimodal Agents (2026)',
        summary: 'Design patterns to gate image/audio/text tools with continuous evals and risk tiers.',
        href: '/updates/production-guardrails-multimodal-agents-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
    {
        title: 'Launch: Agent Risk Dashboard v1.0',
        summary: 'Unified risk scoring for agents with policy checks and incident drill‑downs.',
        href: '/updates/agent-risk-dashboard-1-0',
        date: '2025-09-16',
        tag: 'Launch',
    },
    {
        title: 'Guide: Production Prompt Risk Scoring (2026 Preview)',
        summary: 'Measure and mitigate prompt risks with eval gates and red‑team playbooks.',
        href: '/updates/production-prompt-risk-scoring-2026',
        date: '2025-09-16',
        tag: 'Guide',
    },
	{
		title: 'Launch: Autonomous Knowledge Ops Suite v1.1',
		summary: 'Deeper integrations, evidence bundling, and safer tool-use across workflows.',
		href: '/updates/autonomous-knowledge-ops-suite-1-1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Announcement: ZionGPT 2.1 Real‑Time Reasoning',
		summary: 'Faster step planning, improved tool arbitration, and lower latency streaming.',
		href: '/updates/ziongpt-2-1-real-time-reasoning',
		date: '2025-09-16',
		tag: 'Announcement',
	},
	{
		title: 'Report: State of Agent Observability (2026 Preview)',
		summary: 'Traces, metrics, and eval overlays that speed up incident resolution.',
		href: '/updates/state-of-agent-observability-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Guide: E2E AI Change Evidence Playbook (2026 Preview)',
		summary: 'Practical patterns for evidence bundles, lineage, and policy-as-code at scale.',
		href: '/updates/ai-change-evidence-playbook-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Case Study: 70% Content Velocity with AI Factory',
		summary: 'How a content team scaled output safely using eval gates and guardrails.',
		href: '/updates/ai-content-factory-velocity-70',
		date: '2025-09-16',
		tag: 'Case Study',
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing with budgeted quality, latency and spend controls for production.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Evals‑in‑Prod Best Practices (2026)',
		summary: 'Canaries, metric gates, auto‑rollbacks, and risk scoring for safe iteration.',
		href: '/updates/evals-in-prod-best-practices-2026',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Report: Autonomous Failure Analysis Toolkit',
		summary: 'Trace diffs, evidence bundles, and reproducible post‑mortems for agent incidents.',
		href: '/updates/autonomous-failure-analysis-toolkit-1-0',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: AI Security Evidence Vault v1.0',
		summary: 'Centralized evidence bundles with automated chain-of-custody and policy checks.',
		href: '/updates/ai-security-evidence-vault-v1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: AI Governance Dashboard v5',
		summary: 'Cross-env policy posture, eval gates, exceptions, and signed audit evidence.',
		href: '/updates/ai-governance-dashboard-v5',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Report: State of Real-Time RAG (2026 Preview)',
		summary: 'Streaming retrieval benchmarks for latency, hit rate, and answer quality.',
		href: '/updates/state-of-real-time-rag-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: Agent Reliability Scorecards v1.0',
		summary: 'Standardized SLIs, risk signals, and trend analytics for agent reliability.',
		href: '/updates/agent-reliability-scorecards-1-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: Real‑Time Agent Cost Optimizer v2.0',
		summary: 'Dynamic routing and token budgeting with live cost/quality trade‑offs.',
		href: '/updates/real-time-agent-cost-optimizer-2-0',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Launch: Real‑Time Agent Observability Console v1.1',
		summary: 'Live traces, tool metrics, and eval overlays for production agents.',
		href: '/updates/agent-observability-console-1-1',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Real-Time Evals Control Plane',
		summary: 'Centralize eval gates, rollout policies, and live scorecards across services.',
		href: '/updates/real-time-evals-control-plane',
		date: '2025-09-16',
		tag: 'Guide',
	},
	{
		title: 'Report: State of Agent Reliability (2026 Preview)',
		summary: 'Incident patterns, SLOs, and resilience tactics from large-scale agent systems.',
		href: '/updates/agent-reliability-report-2026',
		date: '2025-09-16',
		tag: 'Report',
	},
	{
		title: 'Launch: Autonomous Support Copilot v1.2',
		summary: 'Faster resolutions with evidence bundles, safer tool-use, and proactive guardrails.',
		href: '/updates/autonomous-support-copilot-1-2',
		date: '2025-09-16',
		tag: 'Launch',
	},
	{
		title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
		summary: 'Evaluate retrieval quality, sync, and latency across text, image, and video pipelines.',
		href: '/updates/multimodal-rag-benchmarking-2026',
		date: '2025-09-15',
		tag: 'Guide',
	},
	{
		title: 'Case Study: 50% MTTR Reduction with Evals-in-Prod',
		summary: 'Incident-driven improvements using live evals, guardrails, and cost-aware routing.',
		href: '/updates/mttr-reduction-evals-in-prod',
		date: '2025-09-14',
		tag: 'Case Study',
	},
	{
		title: 'Launch: Compliance Auditor v1.0',
		summary: 'Automated compliance checks with policy-as-code and evidence collection.',
		href: '/updates/compliance-auditor-1-0',
		date: '2025-09-15',
		tag: 'Launch',
	},
	{
		title: 'Report: State of AI Automation (2026 Preview)',
		summary: 'Trends, metrics, and adoption patterns shaping the next wave of AI-led automation.',
		href: '/insights/state-of-ai-automation-2025',
		date: '2025-09-15',
		tag: 'Report',
	},
	{
		title: 'Announcement: Website UX Refresh and Accessibility Upgrades',
		summary: 'Improved navigation, performance, and WCAG-focused accessibility enhancements across the site.',
		href: '/updates/website-ux-refresh-2025',
		date: '2025-09-13',
		tag: 'Announcement',
	},
	{
		title: 'New Course: GenAI Engineering Masterclass',
		summary: 'Hands-on RAG, agents, evals, safety, and productionization.',
		href: '/updates/genai-engineering-masterclass',
		date: '2025-09-13',
		tag: 'Course',
	},
	{
		title: 'Community Challenge: Build a DApp',
		summary: 'Join the DApp challenge and win prizes up to $1000 in ZION tokens.',
		href: '/updates/dapp-challenge',
		date: '2025-09-05',
		tag: 'Challenge',
	},
	{
		title: 'Research Release: Autonomous Agents for IT Operations',
		summary: 'New paper and demo exploring agentic automation for enterprise IT workflows.',
		href: '/updates/ai-research-it-ops',
		date: '2025-09-03',
		tag: 'Research',
	},
	{
		title: 'Zion OS v1.2 Released',
		summary: 'Performance improvements, modular deployments, and enhanced governance tooling.',
		href: '/updates/zion-os-1-2',
		date: '2025-09-01',
		tag: 'Release',
	},
  // Newly added updates (2025-09-16)
  {
    title: 'Deep Dive: Enterprise Agent Observability (2026)',
    summary:
      'Unified command center with live evals, guardrails, and automated incident workflows for agent ops.',
    href: '/updates/autonomous-ops-control-center-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Compliance Auditor v1.0',
    summary:
      'Automated compliance checks for AI systems with policy-as-code and evidence collection.',
    href: '/updates/compliance-auditor-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Support Copilot v1.1',
    summary:
      'Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.',
    href: '/updates/autonomous-support-copilot-1-1',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    title: 'Guide: Real-Time Evals Starter Kit',
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
    summary:
      'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Autonomous Sales Copilot v1.0',
    summary:
      'Operational framework for running autonomous agents with SLOs, guardrails, and runbooks.',
    href: '/updates/autonomous-ops-sre-for-agents',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Agent Safety Certification (Beta)',
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
  },
  // Added 2025-09-15 (new content for homepage promotion)
  {
    title: 'Launch: Autonomous Incident Simulation Toolkit v1.1',
    summary:
      'New real-time scenarios, eval-gated rollbacks, and signed evidence exports to drill agent safety.',
    href: '/updates/incident-simulation-toolkit-1-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (brand new content)
  {
    title: 'Launch: AI Governance Dashboard v5',
    summary:
      'Cross-env policy posture, eval gates, exception workflows, and signed audit evidence with exportable trails. Faster, deeper integrations.',
    href: '/updates/ai-governance-dashboard-v5',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (brand new content)
  {
    title: 'Launch: AI Autonomous Workflow Engine v1.0',
    summary:
      'End-to-end workflow automation with intelligent routing, error handling, and comprehensive audit trails.',
    href: '/updates/ai-autonomous-workflow-engine-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Newly added 2025-09-15 (to advertise on homepage)
  {
    title: 'Report: Enterprise Retrieval Observability (2026)',
    summary:
      'Metrics, traces, and dashboards to monitor retrieval quality, drift, and SLIs at scale.',
    href: '/updates/enterprise-retrieval-observability-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Launch: AI Autonomous Workflow Engine v1.0',
    summary:
      'Transparent tasks, datasets, and harnesses for reproducible, enterprise-ready AI benchmarking.',
    href: '/updates/ai-lab-open-benchmarks-portal',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (new content created now)
  {
    title: 'Launch: Autonomous Security Copilot v1.0',
    summary: 'Advanced security automation with real-time threat detection and response capabilities.',
    href: '/updates/autonomous-security-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production Guardrails for Tool Use (2026)',
    summary:
      'Design runtime policies, sandboxing, and least-privilege adapters with live eval gates.',
    href: '/updates/production-guardrails-tool-use-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  // Added 2025-09-15 (brand new content)
  {
    title: 'Launch: AI Governance Dashboard v5',
    summary:
      'Cross-env policy posture, eval gates, exception workflows, and signed audit evidence with exportable trails. Faster, deeper integrations.',
    href: '/updates/ai-governance-dashboard-v5',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (brand new content)
  {
    title: 'Launch: Autonomous IT Operations Copilot (v1.0)',
    summary:
      'Proactive incident detection, remediation playbooks, and SLA-aware routing with live evals.',
    href: '/updates/autonomous-it-ops-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Analytics Copilot v1.0',
    summary:
      'Trustworthy dashboards, KPI narratives, and anomaly alerts grounded in telemetry with audit-ready evidence.',
    href: '/updates/autonomous-analytics-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Innovation Hub v1.0',
    summary:
      'Unified workspace with blueprints, live eval gates, and policy‑as‑code to accelerate safe AI launches.',
    href: '/updates/autonomous-innovation-hub-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: AI 2026 Platform Readiness Checklist',
    summary:
      'Engineer-ready checklist across data, governance, evals, and observability to ship enterprise AI safely.',
    href: '/updates/ai-2026-platform-readiness-checklist',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Guide: Evaluating Agent Runbooks with Live E2E Evals',
    summary:
      'How to score and harden operational runbooks using real traffic, guardrails, and rollout gates.',
    href: '/updates/agent-runbooks-live-evals',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: AI Platform 2.0',
    summary:
      'Realtime reasoning, tool-use, retrieval observability, and eval-backed releases baked in.',
    href: '/updates/ai-platform-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Customer Win: Finance - MTTR -42%',
    summary:
      'How a Fortune 100 finance org cut MTTR and boosted FCR with real-time RAG + guardrails.',
    href: '/updates/customer-win-finance',
    date: '2025-09-15',
    tag: 'Case Study'
  },
  {
    title: 'Launch: Agentic Ops Control Center (v1.0)',
    summary:
      'Unified runbooks, eval gates, and incident workflows for reliable agent operations.',
    href: '/updates/agentic-ops-control-center-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  // Added 2025-09-15 (featured)
  {
    title: 'Launch: Autonomous Strategy Copilot v1.0',
    summary:
      'Exec-grade copilot for roadmaps, ROI modeling, and policy-aware program plans with live eval gates.',
    href: '/updates/autonomous-strategy-copilot-1-0',
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
    title: 'Guide: Production Agent Postmortems (2026 Edition)',
    summary:
      'Structured incident reviews with causal graphs, evidence bundles, and remediation playbooks.',
    href: '/updates/production-agent-postmortems-2026',
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
    title: 'Guide: AI Governance Field Guide (2026)',
    summary:
      'Practical, audit-ready patterns to operationalize AI governance with policy-as-code and live evidence.',
    href: '/updates/ai-governance-field-guide-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Real-Time Agent Metrics Widgets v1.0',
    summary:
      'Drop-in dashboards for traces, guardrail events, and eval signals to monitor agent reliability.',
    href: '/updates/real-time-agent-metrics-widgets-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production RAG Latency Tuning (2026)',
    summary:
      'Hands-on techniques to hit sub-second latency with hybrid retrieval, caching, and routing.',
    href: '/updates/production-rag-latency-tuning-2026',
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
    title: 'Launch: Real-Time Agent Observability Console v1.0',
    summary:
      'Unified traces, eval signals, and guardrail events with drilldowns and exportable evidence bundles.',
    href: '/updates/real-time-agent-observability-console-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Agent Change Management Runbook (2026)',
    summary:
      'Standardize eval-gated approvals, progressive rollouts, and incident playbooks for safer autonomy.',
    href: '/updates/agent-change-management-runbook-2026',
    date: '2025-09-15',
    tag: 'Guide'
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
  // New blog posts added 2025-09-15 (to feature on homepage)
  {
    title: 'Playbook: Production Agent Postmortems (2026)',
    summary:
      'Structured postmortems with causal graphs, objective signals, and remediation workflows.',
    href: '/blog/ai-2026-production-agent-postmortems',
    date: '2025-09-15',
    tag: 'Playbook'
  },
  {
    title: 'Guide: Real-Time Model Routing (2026)',
    summary:
      'Latency- and quality-aware routing with eval gates, budgets, and audit-ready evidence.',
    href: '/blog/ai-2026-real-time-model-routing-playbook',
    date: '2025-09-15',
    tag: 'Guide'
  },
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
    summary:
      'Practical architecture to enforce executable policies across CI/CD and runtime with eval gates and evidence.',
    href: '/blog/ai-2026-policy-as-code-production-blueprint',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Autonomous Sales Copilot v1.0',
    summary:
      'Pipeline insights, meeting prep, and safe CRM automation with policy-as-code and live evals.',
    href: '/updates/autonomous-sales-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Deep Dive: Production Agent Telemetry (2025)',
    summary:
      'Unified tracing, eval signals, and guardrail events to operate agent fleets reliably.',
    href: '/blog/ai-2025-production-agent-telemetry-deep-dive',
    date: '2025-09-15',
    tag: 'Deep Dive'
  },
  {
    title: 'Guide: AI Governance Maturity Model (2025)',
    summary:
      'A staged model to level up governance across policy, controls, telemetry, and auditability.',
    href: '/blog/ai-2025-ai-governance-maturity-model',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Guide: Vendor Risk Management for AI (2026 Preview)',
    summary:
      'Templates, control mapping, and evidence bundles to assess AI vendors responsibly.',
    href: '/updates/ai-vendor-risk-management-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Report: State of Production Agent Incidents (2026 Preview)',
    summary:
      'Incident typologies, common root causes, and prevention controls across autonomous agents.',
    href: '/updates/state-of-agent-incidents-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Blueprint: Evaluation-Driven FinOps for AI',
    summary:
      'Unify cost, quality, and latency with eval signals to drive model routing and budgets.',
    href: '/updates/evaluation-driven-finops',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Feature: Audit-Ready Evidence Bundles',
    summary:
      'One-click export of evals, guardrail events, and policy checks for audits and reviews.',
    href: '/updates/audit-ready-evidence-bundles',
    date: '2025-09-15',
    tag: 'Feature'
  },
  {
    title: 'Guide: Production Guardrails for Multimodal Agents (2026)',
    summary:
      'Risk tiers, live eval gates, and audit-ready evidence for safe multimodal agent deployments.',
    href: '/updates/production-guardrails-multimodal-agents',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Agent Benchmark Suite v1',
    summary:
      'Standard task suites, rubrics, and golden datasets with CI and canary integrations.',
    href: '/updates/agent-benchmark-suite-v1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Secure Prompt Engineering (2025 Edition)',
    summary:
      'Threat modeling, guardrails, and regression suites to harden prompts and tool use.',
    href: '/updates/secure-prompt-engineering-2025',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Guide: Operationalizing Live Evals in Production (2026)',
    summary:
      'Blueprint to stand up live eval pipelines with canaries, abort switches, and audit evidence.',
    href: '/blog/ai-2026-operationalizing-live-evals-in-production',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Playbook: Incident Response for Agentic Systems (2026)',
    summary:
      'Runbooks, drills, and telemetry to reduce MTTR and improve safety for autonomous agents.',
    href: '/blog/ai-2026-incident-response-for-agentic-systems',
    date: '2025-09-15',
    tag: 'Playbook'
  },
  {
    title: 'Guide: Operationalizing Live Evals in Production (2026)',
    summary:
      'Blueprint to stand up live eval pipelines with canaries, abort switches, and audit evidence.',
    href: '/blog/ai-2026-operationalizing-live-evals-in-production',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Playbook: Incident Response for Agentic Systems (2026)',
    summary:
      'Runbooks, drills, and telemetry to reduce MTTR and improve safety for autonomous agents.',
    href: '/blog/ai-2026-incident-response-for-agentic-systems',
    date: '2025-09-15',
    tag: 'Playbook'
  },
  {
    title: 'Guide: AI 2026 Production Safety Checklist',
    summary:
      'Risk tiers, guardrails, evals, canaries, and audit evidence to ship safer AI.',
    href: '/blog/ai-2026-production-safety-checklist',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Autonomous Support Copilot v1.2',
    summary:
      'Faster triage, safer tool use, and improved retrieval observability with new eval gates.',
    href: '/updates/autonomous-support-copilot-1-2',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: AI Compliance Readiness 2026',
    summary:
      'Benchmarks, controls, and audit evidence patterns to meet emerging AI regulations.',
    href: '/updates/ai-compliance-readiness-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Launch: Agentic Ops Control Center v2.2',
    summary:
      'Deeper incident drilldowns, runbook automation, and cross-environment policy status.',
    href: '/updates/agentic-ops-control-center-2-2',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Blueprint: Sovereign AI Commerce (2026)',
    summary:
      'Reference architecture and rollout checklist for launching autonomous AI marketplaces with policy gates and evals.',
    href: '/blog/ai-2026-sovereign-ai-commerce',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Incident Simulation Toolkit v1.0',
    summary:
      'Scenario-driven drills, policy checks, and CI/CD gates to harden agent systems.',
    href: '/updates/incident-simulation-toolkit-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Agent Governance Toolkit v2.0',
    summary:
      'Expanded policy library, evidence capture, and signed bundles for enterprise rollout.',
    href: '/updates/agent-governance-toolkit-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Incident Response v1.0',
    summary:
      'End-to-end automated incident detection, triage, and remediation workflows for AI systems.',
    href: '/updates/autonomous-incident-response-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Lab Research Portal 2.0',
    summary:
      'Revamped portal with live benchmarks, datasets, and research pipelines for teams.',
    href: '/updates/ai-lab-research-portal-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: Enterprise Retrieval Observability (2026)',
    summary:
      'Metrics, traces, and dashboards to monitor retrieval quality, drift, and SLIs at scale.',
    href: '/updates/enterprise-retrieval-observability-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Launch: AI Lab Research Portal',
    summary:
      'Central hub for publications, datasets, and live benchmarks from Zion AI Lab.',
    href: '/updates/ai-lab-research-portal',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Ops Control Center 2.0',
    summary:
      'Unified command center with live evals, guardrails, and automated incident workflows for agent ops.',
    href: '/updates/autonomous-ops-control-center-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Compliance Auditor v1.0',
    summary:
      'Automated compliance checks for AI systems with policy-as-code and evidence collection.',
    href: '/updates/compliance-auditor-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Support Copilot v1.1',
    summary:
      'Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.',
    href: '/updates/autonomous-support-copilot-1-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Content Studio 2.1',
    summary:
      'Refinements to workflows, new templates, and 20% faster asset generation for teams.',
    href: '/updates/ai-content-studio-2-1',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    title: 'Guide: Production RAG Evals Starter Pack',
    summary:
      'Ready-to-run eval suites, rubrics, and canary tests to ship reliable RAG systems.',
    href: '/updates/production-rag-evals-starter-pack',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Report: State of AI Governance 2026 (Preview)',
    summary:
      'Key findings on policy-as-code adoption, auditability, and enterprise readiness.',
    href: '/updates/state-of-ai-governance-2026-preview',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Report: State of Real-Time RAG (2026)',
    summary:
      'Benchmarks, latency profiles, and production design patterns for sub-second RAG at scale.',
    href: '/updates/state-of-real-time-rag-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Guide: Secure Prompt Engineering (2025)',
    summary:
      'Permissioning, input validation, and defense-in-depth patterns to harden LLM prompts.',
    href: '/updates/secure-prompt-engineering-2025',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Guide: Real-Time RAG Evals (2026)',
    summary:
      'Live canaries, streaming metrics, and rollout gates to continuously evaluate real-time RAG.',
    href: '/updates/real-time-rag-evals-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Autonomous Ops Control Center 2.0',
    summary:
      'Unified command center with live evals, guardrails, and automated incident workflows for agent ops.',
    href: '/updates/autonomous-ops-control-center-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Compliance Auditor v1.0',
    summary:
      'Automated compliance checks for AI systems with policy-as-code and evidence collection.',
    href: '/updates/compliance-auditor-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Autonomous Support Copilot v1.1',
    summary:
      'Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.',
    href: '/updates/autonomous-support-copilot-1-1',
    date: '2025-09-15',
    tag: 'Product'
  },
  {
    title: 'Guide: Real-Time Evals Starter Kit',
    summary:
      'A practical starter kit with metrics, harnesses, and examples to begin live evaluation in production.',
    href: '/updates/real-time-evals-starter-kit',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Launch: Agent Safety Toolkit (v1)',
    summary:
      'End-to-end safety reviews, red-teaming templates, and policy-as-code checks for agentic systems.',
    href: '/updates/agent-safety-toolkit-v1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: AI Governance Maturity Model (2026 Preview)',
    summary:
      'A staged model to assess and level-up AI governance across policy, controls, and telemetry.',
    href: '/updates/ai-governance-maturity-model-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Launch: Autonomous Research Copilot (v1.1)',
    summary:
      'Context-grounded copilots for research teams with retrieval observability, evals, and live citations.',
    href: '/updates/autonomous-research-copilot-1-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production-Grade Agent Safety Reviews',
    summary:
      'Lightweight but rigorous design reviews, checklists, and scorecards to ship safer agents.',
    href: '/updates/production-agent-safety-reviews',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Blueprint: Cost-Aware Routing with Live Evals',
    summary:
      'Combine offline evals with canary live tests to continuously optimize quality, latency, and cost.',
    href: '/updates/cost-aware-routing-live-evals',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Launch: Autonomous Data Governance Suite (v3)',
    summary:
      'End-to-end governance with policy-as-code, lineage, and real-time audit trails for AI systems.',
    href: '/updates/auto-data-governance-v3',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: State of Agent Observability (2025)',
    summary:
      'Benchmarks and best practices for tracing, metrics, and safety signals across autonomous agents.',
    href: '/updates/agent-observability-2025',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Guide: Cost-Aware Model Routing (2025)',
    summary:
      'Strategies to optimize quality, latency, and cost with dynamic model selection and guardrails.',
    href: '/updates/cost-aware-model-routing',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Course: Web3 Fundamentals Track',
    summary:
      'Beginner-friendly curriculum covering wallets, NFTs, smart contracts, and L2 ecosystems with hands-on projects.',
    href: '/updates/web3-fundamentals-track',
    date: '2025-09-01',
    tag: 'Course'
  },
  {
    title: 'Launch: AI Research Assistant 2.0',
    summary:
      'Major upgrade with better sources, multimodal inputs, and faster research pipelines.',
    href: '/updates/ai-research-assistant-2-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: Mentor Office Hours',
    summary:
      'Weekly live sessions with expert mentors for Q&A, portfolio reviews, and roadmap guidance.',
    href: '/updates/mentor-office-hours',
    date: '2025-09-15',
    tag: 'Community'
  },
  {
    title: 'Feature: Progress Streaks and Badges',
    summary:
      'Stay motivated with learning streaks and new achievement badges across courses and labs.',
    href: '/updates/progress-streaks-badges',
    date: '2025-09-15',
    tag: 'Feature'
  },
  {
    title: 'Course Update: AI Fundamentals v2.1',
    summary:
      'Refreshed modules on contrastive learning, retrieval patterns, and production evals with labs.',
    href: '/updates/ai-fundamentals-v2-1',
    date: '2025-09-14',
    tag: 'Course'
  },
  {
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
  },
  // New updates added 2025-09-15
  {
    title: 'Launch: Agentic Ops Control Center v2.1',
    summary:
      'New runbooks, real-time eval alerts, and SOC2-ready audit trails for agent operations.',
    href: '/updates/agentic-ops-control-center-2-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: State of Real-Time RAG 2026 (Preview)',
    summary:
      'Latency budgets, streaming architectures, and eval frameworks for production-grade real-time RAG.',
    href: '/updates/state-of-real-time-rag-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Guide: Secure Prompt Engineering (2025 Edition)',
    summary:
      'Threat modeling prompts, policy-as-code checks, and red-teaming patterns to harden LLM systems.',
    href: '/updates/secure-prompt-engineering-2025',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Case Study: RAG Agents Reduce MTTR by 42%',
    summary:
      'Deep dive on observability-driven RAG agents that lowered incident MTTR and support volume.',
    href: '/updates/rag-agents-case-study',
    date: '2025-09-15',
    tag: 'Case Study'
  },
  {
    title: 'Launch: Autonomous Finance OS v1.1',
    summary:
      'Enhanced controls, real-time guardrails, and automated reconciliations for finance-grade agent ops.',
    href: '/updates/autonomous-finance-os-1-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Launch: AI Governance Dashboard v3',
    summary:
      'Unified governance KPIs with policy-as-code status, eval gates, and exception workflows.',
    href: '/updates/ai-governance-dashboard-v3',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Evaluating Multimodal Agents (2026 Preview)',
    summary:
      'A practical rubric and harnesses to evaluate multimodal grounding, tool use, and safety.',
    href: '/updates/evaluating-multimodal-agents-2026-preview',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Course: GenAI for Executives',
    summary:
      'Executive-focused program on AI strategy, governance, and ROI with hands-on frameworks.',
    href: '/updates/genai-executive-course',
    date: '2025-09-15',
    tag: 'Course'
  },
  {
    title: 'Launch: Agent Benchmark Suite v1',
    summary:
      'Task suites, rubrics, and golden datasets for production agents across domains.',
    href: '/updates/agent-benchmark-suite-v1',
    date: '2025-09-15',
    tag: 'Launch'
  }
  ,
  // New updates added by background automation on 2025-09-15 (even later batch)
  {
    title: 'Launch: Autonomous Customer Insights Copilot v1.0',
    summary:
      'Automatic theme detection, sentiment analysis, and action recommendations across support, sales, and product feedback with policy-aware data handling.',
    href: '/updates/autonomous-customer-insights-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Enterprise AI Change Management (2026)',
    summary:
      'Governance workflows, rollout strategies, and live eval gates to safely introduce AI changes across teams.',
    href: '/updates/enterprise-ai-change-management-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Report: State of AI Evaluations 2026',
    summary:
      'Survey of eval practices, rubrics, and live telemetry adoption across industries with maturity benchmarks.',
    href: '/updates/state-of-ai-evaluations-2026',
    date: '2025-09-15',
    tag: 'Report'
  }
  ,
  // Added 2025-09-15 (night batch)
  {
    title: 'Launch: Real-Time Retrieval Evals 2026',
    summary:
      'Streaming metrics, canary routing, and automated rollback to safely evolve retrieval.',
    href: '/updates/real-time-retrieval-evals-2026',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Blueprint: Enterprise Agent Safety 2026',
    summary:
      'Standardized safety reviews, incident drills, and audit-ready evidence across agent fleets.',
    href: '/updates/enterprise-agent-safety-blueprint-2026',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Report: AI Readiness Index 2026',
    summary:
      'A composite readiness score across data, governance, and platform maturity.',
    href: '/updates/enterprise-ai-readiness-index-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Guide: Production Agent Runbooks 2026',
    summary:
      'Runbooks, approvals, and controls to standardize safe operations of AI agents.',
    href: '/updates/production-agent-runbooks-2026',
    date: '2025-09-15',
    tag: 'Guide'
  }
  ,
  // Fresh content added 2025-09-15 (new)
  {
    title: 'Launch: Autonomous Procurement Copilot v1.0',
    summary:
      'Automates vendor sourcing, RFPs, contract analysis, and approvals with policy-as-code and live cost benchmarks.',
    href: '/updates/autonomous-procurement-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production RAG Observability (2026 Preview)',
    summary:
      'Practical telemetry for retrieval systems: coverage, freshness, drift, and grounding quality with per-step spans.',
    href: '/updates/production-rag-observability-2026',
    date: '2025-09-15',
    tag: 'Guide'
  }
  ,
  // Added 2025-09-15 (new content)
  {
    title: 'Launch: Autonomous Knowledge Base Copilot v1.0',
    summary:
      'Self-updating KB copilot that drafts, reviews, and publishes articles with guardrails, evals, and audit trails.',
    href: '/updates/autonomous-knowledge-base-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: State of Agent Tooling 2026',
    summary:
      'Landscape, gaps, and maturity of agent debugging, evals, and governance tools across the enterprise.',
    href: '/updates/state-of-agent-tooling-2026',
    date: '2025-09-15',
    tag: 'Report'
  }
  ,
  {
    title: 'Guide: Generative AI Risk Register (2026)',
    summary:
      'Template and practices to track risks, owners, mitigations, and audit evidence for AI programs.',
    href: '/blog/ai-2026-generative-ai-risk-register',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Guide: Agent Cost Optimization (2026)',
    summary:
      'Cut spend via routing, caching, batching, and benchmark-driven model selection with guardrails.',
    href: '/blog/ai-2026-agent-cost-optimization',
    date: '2025-09-15',
    tag: 'Guide'
  }
  ,
  {
    title: 'Launch: Autonomous Compliance Auditor v1.1',
    summary:
      'Continuous policy checks, evidence bundles, and SOC2-ready exports integrated into CI/CD.',
    href: '/updates/autonomous-compliance-auditor-1-1',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Blueprint: Production Agent Telemetry 2026',
    summary:
      'Unified tracing, eval signals, and guardrail events for operating agent fleets reliably.',
    href: '/updates/production-agent-telemetry-2026',
    date: '2025-09-15',
    tag: 'Blueprint'
  },
  {
    title: 'Report: Enterprise AI Readiness Index (2026 Preview)',
    summary:
      'A composite index to score data, governance, and platform maturity across enterprises.',
    href: '/updates/enterprise-ai-readiness-index-2026',
    date: '2025-09-15',
    tag: 'Report'
  }
  ,
  // New updates added by automation on 2025-09-15
  {
    title: 'Launch: Agent Policy-as-Code Starter Kit',
    summary:
      'Ready-to-run policy packs, CI checks, and audit trails to operationalize AI governance in weeks.',
    href: '/updates/agent-policy-as-code-starter-kit',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: AI Lab Research Datasets Portal',
    summary:
      'Curated, enterprise-ready datasets with licenses, schemas, and quality metrics for rapid prototyping.',
    href: '/updates/ai-lab-research-datasets-portal',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Blueprint: Secure Agent Operations 2026',
    summary:
      'End-to-end controls, telemetry, and incident response for safe, compliant, and resilient agent ops.',
    href: '/updates/secure-agent-operations-blueprint-2026',
    date: '2025-09-15',
    tag: 'Blueprint'
  }
  ,
  {
    title: 'Launch: Autonomous Compliance Copilot v1.0',
    summary:
      'Interactive copilot to draft policies, generate evidence, and enforce controls with policy-as-code.',
    href: '/updates/autonomous-compliance-copilot-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: AI Procurement Playbook (2026 Preview)',
    summary:
      'Practical steps, templates, and guardrails to source, evaluate, and buy AI systems responsibly.',
    href: '/updates/ai-procurement-playbook-2026',
    date: '2025-09-15',
    tag: 'Guide'
  }
  ,
  // Added 2025-09-15
  {
    title: 'Launch: Real-Time Agent Debugger v1.0',
    summary:
      'Live traces, prompt diffs, and tool-call timelines to debug production agents safely.',
    href: '/updates/real-time-agent-debugger-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Report: Agent Risk Metrics 2026 (Preview)',
    summary:
      'Unified risk taxonomy, baseline metrics, and evaluation harnesses for autonomous agents.',
    href: '/updates/agent-risk-metrics-2026',
    date: '2025-09-15',
    tag: 'Report'
  },
  {
    title: 'Guide: Production Rollouts with Canary AI Evals',
    summary:
      'Blueprint for shipping AI safely: canaries, live evals, abort switches, and evidence trails.',
    href: '/updates/canary-ai-evals-rollouts',
    date: '2025-09-15',
    tag: 'Guide'
  }
  ,
  // New content added 2025-09-15 (evening batch)
  {
    title: 'Launch: Autonomous Knowledge Base v1.0',
    summary:
      'Self-maintaining, policy-aware knowledge base with freshness checks and signed evidence.',
    href: '/updates/autonomous-knowledge-base-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Production Agent Runbooks (2026)',
    summary:
      'Standard runbooks, approval flows, and audit-ready checklists for safe agent operations.',
    href: '/updates/production-agent-runbooks-2026',
    date: '2025-09-15',
    tag: 'Guide'
  },
  {
    title: 'Feature: Real-Time Agent Shadow Testing',
    summary:
      'Validate changes with shadow traffic, guardrail signals, and automatic rollback rules.',
    href: '/updates/real-time-agent-shadow-testing',
    date: '2025-09-15',
    tag: 'Feature'
  },
  {
    title: 'Launch: Autonomous Data Lineage Monitor v1.0',
    summary:
      'Continuous provenance tracking and signed evidence bundles across ingestion, retrieval, and generation.',
    href: '/updates/autonomous-data-lineage-monitor-1-0',
    date: '2025-09-15',
    tag: 'Launch'
  },
  {
    title: 'Guide: Eval‑Ready Agent Release Automation',
    summary:
      'Wire eval gates, shadow tests, and rollback policies into CI/CD with audit‑ready evidence.',
    href: '/updates/eval-ready-agent-release-automation',
    date: '2025-09-15',
    tag: 'Guide'
  }
]

// Export aliases for compatibility
export type SiteUpdate = UpdateItem

export const getLatestUpdates = (limit = 6): UpdateItem[] => {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  return [...siteUpdates]
    .sort((a, b) => safeDate(b.date) - safeDate(a.date))
    .slice(0, limit)
}

