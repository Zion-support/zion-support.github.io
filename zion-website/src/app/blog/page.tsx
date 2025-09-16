// @ts-nocheck
import Link from 'next/link'

const posts = [
  {
<<<<<<< HEAD
    slug: 'ai-2026-trustworthy-model-routing-2026-preview',
    title: 'AI 2026: Trustworthy Model Routing — 2026 Preview',
    summary: 'Policy-as-code routing with eval gates, SLOs, and cost-aware decisions for safe, efficient AI operations.'
=======
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
>>>>>>> origin/feat/new-content-promos
  },
  {
<<<<<<< HEAD
    slug: 'ai-2026-autonomous-workflow-architecture',
    title: 'AI 2026: Autonomous Workflow Architecture — Enterprise Blueprint',
    summary: 'Comprehensive guide to building intelligent workflow engines with ML-powered optimization and enterprise security.'
=======
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
>>>>>>> origin/feat/content-sept15-1757928952
  },
  {
    slug: 'ai-2026-production-agent-postmortems',
    title: 'AI 2026: Production Agent Postmortems',
    summary: 'Structured postmortems with causal graphs, objective signals, and remediation workflows.'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
          <p className="mt-4 text-xl text-gray-600">Latest insights and updates</p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}