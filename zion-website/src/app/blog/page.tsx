import Link from 'next/link'

const posts = [
  {
    slug: 'ai-2026-autonomous-procurement-blueprint',
    title: 'AI 2026: Autonomous Procurement Blueprint',
    summary:
      'From sourcing to contract ops with policy-as-code and measurable savings.'
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

