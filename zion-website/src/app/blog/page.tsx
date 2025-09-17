import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'ai-2026-operational-evals-blueprint',
    title: 'AI 2026: Operational Evals Blueprint',
    summary:
      'Wire objective evals into CI/CD and runtime with canaries and rollbacks.'
  },
  {
    slug: 'ai-2026-risk-and-guardrails-operating-model',
    title: 'AI 2026: Risk & Guardrails Operating Model',
    summary:
      'Policy-as-code, permissioned tools, safety telemetry, and incident-ready runbooks.'
  },
  {
    slug: 'ai-2026-trustworthy-model-routing-2026-preview',
    title: 'AI 2026: Trustworthy Model Routing — 2026 Preview',
    summary: 'Policy-as-code routing with eval gates, SLOs, and cost-aware decisions for safe, efficient AI operations.',
    date: '2025-09-16'
  },
  {
    slug: 'ai-2026-autonomous-workflow-architecture',
    title: 'AI 2026: Autonomous Workflow Architecture — Enterprise Blueprint',
    summary: 'Comprehensive guide to building intelligent workflow engines with ML-powered optimization and enterprise security.',
    date: '2025-09-16'
  },
  {
    slug: 'ai-2026-production-agent-postmortems',
    title: 'AI 2026: Production Agent Postmortems',
    summary: 'Structured postmortems with causal graphs, objective signals, and remediation workflows.',
    date: '2025-09-15'
  },
  {
    slug: 'ai-2026-real-time-model-routing-playbook',
    title: 'AI 2026: Real-Time Model Routing — Playbook',
    summary: 'Latency‑ and quality‑aware routing with eval gates, budgets, and audit‑ready evidence.',
    date: '2025-09-15'
  },
  {
    slug: 'ai-2026-agent-orchestration-enterprise-guide',
    title: 'AI 2026: Agent Orchestration — Enterprise Multi-Agent Coordination Guide',
    summary: 'Comprehensive guide to enterprise multi-agent coordination with intelligent routing, load balancing, and real-time monitoring.',
    date: '2025-09-14'
  },
  {
    slug: 'ai-2026-eval-ready-ai-pipelines-blueprint',
    title: 'AI 2026: Eval‑Ready AI Pipelines — Blueprint',
    summary: 'From datasets to live canaries with objective rubrics and rollbacks.',
    date: '2025-09-14'
  },
  {
    slug: 'ai-2026-agent-observability-blueprint',
    title: 'AI 2026: Agent Observability — Blueprint',
    summary: 'Traces, eval signals, and guardrail events to operate agent fleets reliably.',
    date: '2025-09-13'
  },
  {
    slug: 'ai-2026-governed-tool-use-blueprint',
    title: 'AI 2026: Governed Tool Use — Blueprint',
    summary: 'Permissioned tool adapters with policy‑as‑code, risk tiers, and runtime checks.',
    date: '2025-09-13'
  }
];

export default function BlogIndexPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Research & Insights
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Deep dives into enterprise AI, autonomous systems, and production-ready AI operations.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 text-xs text-blue-300 mb-3">
                  <time dateTime={post.date} className="text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{post.summary}</p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}