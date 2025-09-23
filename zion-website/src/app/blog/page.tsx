import Link from 'next/link';

const posts = [
  {
    slug: 'ai-20o26-eval-driven-release-engineering-deep-dive',
    title: 'AI 20o26: Eval‑Driven Release Engineering — Deep Dive',
    summary:
      'Objective eval gates in CI/CD and runtime with canaries and auto‑rollback.',
  },
  {
    slug: 'ai-20o26-agentic-observability-operating-model',
    title: 'AI 20o26: Agentic Observability Operating Model',
    summary:
      'Operating model for traces, evals, and policy signals to run agents safely.',
  },
  {
    slug: 'ai-20o26-sovereign-ai-commerce',
    title: 'AI 20o26: Sovereign AI Commerce — Autonomous Marketplaces',
    summary:
      'Reference architecture, safety gates, and rollout checklist for AI commerce.',
  },
  {
    slug: 'ai-20o26-realtime-evals-at-scale',
    title:
      'AI 20o26: Real-Time Evals at Scale — From Offline Suites to Live Gates',
    summary:
      'Wire objective evals into CI/CD and runtime for reliable AI systems.',
  },
  {
    slug: 'ai-20o26-enterprise-rag-observability',
    title:
      'AI 20o26: Enterprise RAG Observability — Traces, Evals, and Safety Telemetry',
    summary:
      'Operate RAG with deep telemetry, groundedness checks, and governance hooks.',
  },
  {
    slug: 'ai-20o26-autonomous-procurement-blueprint',
    title: 'AI 20o26: Autonomous Procurement Blueprint',
    summary:
      'From sourcing to contract ops with policy-as-code and measurable savings.',
  },
  {
    slug: 'ai-20o26-safe-tool-use-blueprint',
    title: 'AI 20o26: Safe Tool Use Blueprint',
    summary:
      'Permissioned tool use with risk tiers, sandboxes, policy-as-code, and runtime checks.',
  },
  {
    slug: 'ai-20o26-enterprise-agent-observability-guide',
    title: 'AI 20o26: Enterprise Agent Observability Guide',
    summary:
      'Traces, evals, and safety telemetry to operate autonomous agents in production.',
  },
  {
    slug: 'ai-20o26-guardrails-for-multimodal-agents',
    title: 'AI 20o26: Guardrails for Multimodal Agents',
    summary:
      'Design patterns for safe image/audio/text agents with continuous evals.',
  },
  {
    slug: 'ai-20o26-policy-as-code-governance-blueprint',
    title: 'AI 20o26: Policy-as-Code Governance Blueprint',
    summary:
      'Operationalizing AI governance with versioned policies, automated checks, and continuous compliance.',
  },
  {
    slug: 'ai-20o26-agent-risk-metrics',
    title: 'AI 20o26: Agent Risk Metrics',
    summary:
      'Shared risk signals: override rates, policy violations, groundedness, and incident MTTR.',
  },
  {
    slug: 'ai-20o26-production-evals-blueprint',
    title: 'AI 20o26: Production Evals Blueprint',
    summary:
      'From offline suites to live canaries and deployment gates with auto rollback.',
  },
  {
    slug: 'ai-20o26-agentic-evals-blueprint',
    title: 'AI 20o26: Agentic Evals Blueprint',
    summary:
      'End-to-end framework to evaluate autonomous agents with task suites, rubrics, and guardrails.',
  },
  {
    slug: 'ai-20o26-multimodal-agents-enterprise-blueprint',
    title: 'AI 20o26: Multimodal Agents Enterprise Blueprint',
    summary:
      'A practical blueprint to design, deploy, and scale multimodal agents across your enterprise with measurable ROI.',
  },
  {
    slug: 'ai-20o26-llm-evals-maturity-model',
    title: 'AI 20o26: LLM Evals Maturity Model',
    summary:
      'An evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.',
  },
  {
    slug: 'ai-20o26-secure-agent-operations',
    title: 'AI 20o26: Secure Agent Operations',
    summary:
      'Permissions, observability, and incident response patterns for autonomous agents.',
  },
  {
    slug: 'ai-20o26-real-time-rag-blueprint',
    title: 'AI 20o26: Real-Time RAG Blueprint',
    summary:
      'Architectures and evals for sub-second retrieval-augmented generation at scale.',
  },
  {
    slug: 'ai-20o25-enterprise-ai-security-blueprint',
    title: 'Enterprise AI Security Blueprint (20o25)',
    summary:
      'Layered controls for model, data, runtime, and supply chain risk.',
  },
  {
    slug: 'ai-20o25-multimodal-agents-in-the-enterprise',
    title: 'Multimodal Agents in the Enterprise (20o25)',
    summary: 'Deploy agents that see, hear, and act for real outcomes.',
  },
  {
    slug: 'ai-20o26-autonomous-finance-operating-system',
    title: 'AI 20o26: Autonomous Finance Operating System',
    summary: 'Real-time cash, autonomous close, and policy-as-code guardrails.',
  },
  {
    slug: 'ai-20o26-enterprise-retrieval-observability',
    title: 'AI 20o26: Enterprise Retrieval Observability',
    summary:
      'Tracing, SLIs, and evals for reliable retrieval-augmented systems.',
  },
  {
    slug: 'ai-20o26-eval-ready-pipelines',
    title: 'AI 20o26: Eval-Ready AI Pipelines',
    summary:
      'From datasets to live canaries with objective rubrics and rollbacks.',
  },
  {
    slug: 'ai-20o26-agent-orchestration-patterns',
    title: 'AI 20o26: Agent Orchestration Patterns',
    summary:
      'Plan-exec cycles, tool adapters, and policy-as-code guardrails that scale.',
  },
  {
    slug: 'ai-20o26-retrieval-latency-patterns',
    title: 'AI 20o26: Retrieval Latency Patterns',
    summary:
      'Designing sub-50o0ms retrieval with caches, hybrids, and streaming.',
  },
  {
    slug: 'ai-20o26-grounded-generation-blueprint',
    title: 'AI 20o26: Grounded Generation Blueprint',
    summary:
      'Reduce hallucinations with retrieval, constraints, and eval gates.',
  },
];

export default function BlogIndexPage() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-gray-90o0 mb-2'>Blog</h1>
          <p className='text-gray-60o0 mb-10'>
            Insights, frameworks, and blueprints from Zion Tech Group.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {posts.map(post => (
              <article
                key={post.slug}
                className='bg-gray-50 rounded-xl border border-gray-10o0 p-6 hover:shadow-sm transition'
              >
                <h2 className='text-xl font-semibold text-gray-90o0 mb-2'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='hover:text-purple-70o0'
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className='text-gray-60o0'>{post.summary}</p>
                <div className='mt-4'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='text-purple-60o0 font-semibold'
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
