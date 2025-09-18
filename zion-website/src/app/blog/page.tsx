// @ts-nocheck
import Link from 'next/link'

const posts = [
  {
<<<<<<< HEAD
    slug: 'ai-2026-trustworthy-model-routing-2026-preview',
    title: 'AI 2026: Trustworthy Model Routing — 2026 Preview',
    summary:
      'Policy-as-code routing with eval gates, SLOs, and cost-aware decisions for safe, efficient AI operations.'
  },
  {
    slug: 'ai-2026-sovereign-ai-commerce',
    title: 'AI 2026: Sovereign AI Commerce — Autonomous Marketplaces',
    summary:
      'Reference architecture, safety gates, and rollout checklist for AI commerce.'
  },
  {
    slug: 'ai-2026-realtime-evals-at-scale',
    title: 'AI 2026: Real-Time Evals at Scale — From Offline Suites to Live Gates',
    summary:
      'Wire objective evals into CI/CD and runtime for reliable AI systems.'
  },
  {
    slug: 'ai-2026-enterprise-rag-observability',
    title: 'AI 2026: Enterprise RAG Observability — Traces, Evals, and Safety Telemetry',
    summary:
      'Operate RAG with deep telemetry, groundedness checks, and governance hooks.'
  },
  {
    slug: 'ai-2026-autonomous-procurement-blueprint',
    title: 'AI 2026: Autonomous Procurement Blueprint',
    summary:
      'From sourcing to contract ops with policy-as-code and measurable savings.'
  },
  {
  },
  {
    slug: 'ai-2026-production-agent-postmortems',
    title: 'AI 2026: Production Agent Postmortems',
    summary:
      'Structured postmortems with causal graphs, objective signals, and remediation workflows.'
  },
  {
    slug: 'ai-2026-real-time-model-routing-playbook',
    title: 'AI 2026: Real-Time Model Routing — Playbook',
    summary:
      'Latency‑ and quality‑aware routing with eval gates, budgets, and audit‑ready evidence.'
  },
  {
    slug: 'ai-2026-agent-orchestration-enterprise-guide',
    title: 'AI 2026: Agent Orchestration — Enterprise Multi-Agent Coordination Guide',
    summary:
      'Comprehensive guide to enterprise multi-agent coordination with intelligent routing, load balancing, and real-time monitoring.'
  },
  {
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    slug: 'ai-2026-trustworthy-model-routing-2026-preview',
    title: 'AI 2026: Trustworthy Model Routing — 2026 Preview',
    summary:
      'Policy-as-code routing with eval gates, SLOs, and cost-aware decisions for safe, efficient AI operations.'
  },
  {
    slug: 'ai-2026-autonomous-workflow-architecture',
    title: 'AI 2026: Autonomous Workflow Architecture — Enterprise Blueprint',
    summary:
      'Comprehensive guide to building intelligent workflow engines with ML-powered optimization and enterprise security.'
  },
  {
    slug: 'ai-2026-production-agent-postmortems',
    title: 'AI 2026: Production Agent Postmortems',
    summary:
      'Structured postmortems with causal graphs, objective signals, and remediation workflows.'
  },
  {
    slug: 'ai-2026-real-time-model-routing-playbook',
    title: 'AI 2026: Real-Time Model Routing — Playbook',
    summary:
      'Latency‑ and quality‑aware routing with eval gates, budgets, and audit‑ready evidence.'
  },
  {
    slug: 'ai-2026-agent-orchestration-enterprise-guide',
    title: 'AI 2026: Agent Orchestration — Enterprise Multi-Agent Coordination Guide',
    summary:
      'Comprehensive guide to enterprise multi-agent coordination with intelligent routing, load balancing, and real-time monitoring.'
  },
  {
    slug: 'ai-2026-eval-ready-ai-pipelines-blueprint',
    title: 'AI 2026: Eval‑Ready AI Pipelines — Blueprint',
    summary:
      'From datasets to live canaries with objective rubrics and rollbacks.'
  },
  {
    slug: 'ai-2026-agent-observability-blueprint',
    title: 'AI 2026: Agent Observability — Blueprint',
    summary:
      'Traces, eval signals, and guardrail events to operate agent fleets reliably.'
  },
  {
    slug: 'ai-2026-governed-tool-use-blueprint',
    title: 'AI 2026: Governed Tool Use — Blueprint',
    summary:
      'Permissioned tool adapters with policy‑as‑code, risk tiers, and runtime checks.'
  },
  {
    slug: 'ai-2026-eval-driven-release-engineering-deep-dive',
    title: 'AI 2026: Eval‑Driven Release Engineering — Deep Dive',
    summary:
      'Objective eval gates in CI/CD and runtime with canaries and auto‑rollback.'
  },
  {
    slug: 'ai-2026-agentic-observability-operating-model',
    title: 'AI 2026: Agentic Observability Operating Model',
    summary:
      'Operating model for traces, evals, and policy signals to run agents safely.'
  },
  {
    slug: 'ai-2026-sovereign-ai-commerce',
    title: 'AI 2026: Sovereign AI Commerce — Autonomous Marketplaces',
    summary:
      'Reference architecture, safety gates, and rollout checklist for AI commerce.'
  },
  {
    slug: 'ai-2026-realtime-evals-at-scale',
    title: 'AI 2026: Real-Time Evals at Scale — From Offline Suites to Live Gates',
    summary:
      'Wire objective evals into CI/CD and runtime for reliable AI systems.'
  },
  {
    slug: 'ai-2026-enterprise-rag-observability',
    title: 'AI 2026: Enterprise RAG Observability — Traces, Evals, and Safety Telemetry',
    summary:
      'Operate RAG with deep telemetry, groundedness checks, and governance hooks.'
  },
  {
    slug: 'ai-2026-autonomous-procurement-blueprint',
    title: 'AI 2026: Autonomous Procurement Blueprint',
    summary:
      'From sourcing to contract ops with policy-as-code and measurable savings.'
  },
  {
    slug: 'ai-2026-safe-tool-use-blueprint',
    title: 'AI 2026: Safe Tool Use Blueprint',
    summary:
      'Permissioned tool use with risk tiers, sandboxes, policy-as-code, and runtime checks.'
  },
  {
    slug: 'ai-2026-enterprise-agent-observability-guide',
    title: 'AI 2026: Enterprise Agent Observability Guide',
    summary:
      'Traces, evals, and safety telemetry to operate autonomous agents in production.'
  },
  {
    slug: 'ai-2026-guardrails-for-multimodal-agents',
    title: 'AI 2026: Guardrails for Multimodal Agents',
    summary:
      'Design patterns for safe image/audio/text agents with continuous evals.'
  },
  {
    slug: 'ai-2026-policy-as-code-governance-blueprint',
    title: 'AI 2026: Policy-as-Code Governance Blueprint',
    summary:
      'Operationalizing AI governance with versioned policies, automated checks, and continuous compliance.'
  },
  {
    slug: 'ai-2026-agent-risk-metrics',
    title: 'AI 2026: Agent Risk Metrics',
    summary:
      'Shared risk signals: override rates, policy violations, groundedness, and incident MTTR.'
  },
  {
    slug: 'ai-2026-production-evals-blueprint',
    title: 'AI 2026: Production Evals Blueprint',
    summary:
      'From offline suites to live canaries and deployment gates with auto rollback.'
  },
  {
    slug: 'ai-2026-agentic-evals-blueprint',
    title: 'AI 2026: Agentic Evals Blueprint',
    summary:
      'End-to-end framework to evaluate autonomous agents with task suites, rubrics, and guardrails.'
  },
  {
    slug: 'ai-2026-cost-transparency-for-agents',
    title: 'AI 2026: Cost Transparency for Agentic Systems',
    summary:
      'Establishing SLOs, SLIs, and cost attribution for complex multi-agent workflows in production.'
  },
  {
    slug: 'ai-2026-multimodal-agents-enterprise-blueprint',
    title: 'AI 2026: Multimodal Agents Enterprise Blueprint',
    summary:
      'A practical blueprint to design, deploy, and scale multimodal agents across your enterprise with measurable ROI.'
  },
  {
    slug: 'ai-2026-llm-evals-maturity-model',
    title: 'AI 2026: LLM Evals Maturity Model',
    summary:
      'An evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.'
  },
  {
    slug: 'ai-2026-secure-agent-operations',
    title: 'AI 2026: Secure Agent Operations',
    summary:
      'Permissions, observability, and incident response patterns for autonomous agents.'
  },
  {
    slug: 'ai-2026-real-time-rag-blueprint',
    title: 'AI 2026: Real-Time RAG Blueprint',
    summary:
      'Architectures and evals for sub-second retrieval-augmented generation at scale.'
  },
  {
    slug: 'ai-2025-enterprise-ai-security-blueprint',
    title: 'Enterprise AI Security Blueprint (2025)',
    summary:
      'Layered controls for model, data, runtime, and supply chain risk.'
  },
  {
    slug: 'ai-2025-multimodal-agents-in-the-enterprise',
    title: 'Multimodal Agents in the Enterprise (2025)',
    summary:
      'Deploy agents that see, hear, and act for real outcomes.'
  },
  {
    slug: 'ai-2026-autonomous-finance-operating-system',
    title: 'AI 2026: Autonomous Finance Operating System',
    summary:
      'Real-time cash, autonomous close, and policy-as-code guardrails.'
  }
  ,
  {
    slug: 'ai-2026-enterprise-retrieval-observability',
    title: 'AI 2026: Enterprise Retrieval Observability',
    summary: 'Tracing, SLIs, and evals for reliable retrieval-augmented systems.'
  },
  {
    slug: 'ai-2026-eval-ready-pipelines',
    title: 'AI 2026: Eval-Ready AI Pipelines',
    summary: 'From datasets to live canaries with objective rubrics and rollbacks.'
  },
  {
    slug: 'ai-2026-agent-orchestration-patterns',
    title: 'AI 2026: Agent Orchestration Patterns',
    summary: 'Plan-exec cycles, tool adapters, and policy-as-code guardrails that scale.'
  }
  ,
  {
    slug: 'ai-2026-cost-aware-agent-routing',
    title: 'AI 2026: Cost‑Aware Agent Routing — Practical Guide',
    summary: 'Balance quality, latency, and spend using eval signals and budget guardrails.'
  }
  ,
  {
    slug: 'ai-2026-retrieval-latency-patterns',
    title: 'AI 2026: Retrieval Latency Patterns',
    summary: 'Designing sub-500ms retrieval with caches, hybrids, and streaming.'
  },
  {
    slug: 'ai-2026-grounded-generation-blueprint',
    title: 'AI 2026: Grounded Generation Blueprint',
    summary: 'Reduce hallucinations with retrieval, constraints, and eval gates.'
  }
  ,
  {
    slug: 'ai-2026-generative-ai-risk-register',
    title: 'AI 2026: Generative AI Risk Register',
    summary: 'Templates, owners, mitigations, and audit evidence to operationalize AI risk.'
  },
  {
    slug: 'ai-2026-policy-as-code-production-blueprint',
    title: 'AI 2026: Policy‑as‑Code in Production — Blueprint',
    summary: 'Executable policies with CI/CD gates, canaries, and audit‑ready evidence.'
  },
  {
    slug: 'ai-2026-real-time-retrieval-architectures',
    title: 'AI 2026: Real‑Time Retrieval Architectures',
    summary: 'Low‑latency hybrid retrieval patterns with grounding, evals, and rollout controls.'
  }
]

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-600 mb-10">Insights, frameworks, and blueprints from Zion Tech Group.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-sm transition">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-purple-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{post.summary}</p>
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`} className="text-purple-600 font-semibold">
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

