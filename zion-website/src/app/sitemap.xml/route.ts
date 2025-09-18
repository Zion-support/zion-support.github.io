import { MetadataRoute } from 'next'
import { getLatestUpdates } from '../../data/updates'

export async function GET(): Promise<Response> {
  const updates = getLatestUpdates(100) // Get more updates for sitemap
  
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://zion.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://zion.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://zion.app/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://zion.app/solutions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://zion.app/research',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://zion.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://zion.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://zion.app/updates',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://zion.app/insights',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://zion.app/news',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: 'https://zion.app/case-studies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Add all update pages
  updates.forEach((update) => {
    sitemap.push({
      url: `https://zion.app${update.href}`,
      lastModified: update.date ? new Date(update.date) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  // Add blog pages
  const blogPosts = [
    'ai-2025-ai-governance-maturity-model',
    'ai-2025-enterprise-ai-security-blueprint',
    'ai-2025-multimodal-agents-in-the-enterprise',
    'ai-2025-production-agent-telemetry-deep-dive',
    'ai-2026-agent-cost-optimization',
    'ai-2026-agent-evidence-bundles-blueprint',
    'ai-2026-agent-finops-blueprint',
    'ai-2026-agent-observability-blueprint',
    'ai-2026-agent-orchestration-enterprise-guide',
    'ai-2026-agent-orchestration-patterns',
    'ai-2026-agent-posture-scorecards-blueprint',
    'ai-2026-agent-red-teaming-field-guide',
    'ai-2026-agent-reliability-blueprint',
    'ai-2026-agent-risk-metrics',
    'ai-2026-agent-safety-evidence-bundles',
    'ai-2026-agentic-evals-blueprint',
    'ai-2026-agentic-slo-dashboards-blueprint',
    'ai-2026-autonomous-change-approvals-blueprint',
    'ai-2026-autonomous-experimentation-playbook',
    'ai-2026-autonomous-finance-operating-system',
    'ai-2026-autonomous-ops-sre-for-agents',
    'ai-2026-autonomous-procurement-blueprint',
    'ai-2026-autonomous-workflow-architecture',
    'ai-2026-batch-vs-streaming-rag-tradeoffs',
    'ai-2026-continuous-agent-evidence-bundles',
    'ai-2026-cost-aware-agent-routing',
    'ai-2026-cost-transparency-for-agents',
    'ai-2026-enterprise-agent-architecture',
    'ai-2026-enterprise-agent-observability-deep-dive',
    'ai-2026-enterprise-agent-observability-guide',
    'ai-2026-enterprise-agent-risk-scorecards',
    'ai-2026-enterprise-rag-observability',
    'ai-2026-enterprise-retrieval-observability',
    'ai-2026-eval-ready-ai-pipelines-blueprint',
    'ai-2026-eval-ready-pipelines',
    'ai-2026-evaluating-real-world-rag-latency',
    'ai-2026-evidence-driven-evals-blueprint',
    'ai-2026-evidence-driven-operations',
    'ai-2026-evidence-driven-routing-case-studies-2026',
    'ai-2026-evidence-led-governance-blueprint',
    'ai-2026-evidence-led-operations-blueprint',
    'ai-2026-generative-ai-risk-register',
    'ai-2026-governed-tool-use-blueprint',
    'ai-2026-grounded-generation-blueprint',
    'ai-2026-grounded-generation-guardrails-2026',
    'ai-2026-guardrails-for-multimodal-agents',
    'ai-2026-llm-evals-maturity-model',
    'ai-2026-multimodal-agent-systems',
    'ai-2026-multimodal-agents-enterprise-blueprint',
    'ai-2026-multimodal-guardrails-blueprint',
    'ai-2026-operational-evals-blueprint',
    'ai-2026-operational-risk-metrics-for-agents',
    'ai-2026-operationalizing-agent-slo-gates',
    'ai-2026-platform-readiness-blueprint',
    'ai-2026-policy-as-code-governance-blueprint',
    'ai-2026-production-agent-postmortems',
    'ai-2026-production-evals-blueprint',
    'ai-2026-production-evals-control-plane',
    'ai-2026-production-evidence-hub-blueprint',
    'ai-2026-production-guardrails-toolbox',
    'ai-2026-production-rag-latency-budgets',
    'ai-2026-production-safety-checklist',
    'ai-2026-real-time-agent-benchmark-suite-1-0',
    'ai-2026-real-time-agent-cost-optimizer-deep-dive',
    'ai-2026-real-time-model-routing-playbook',
    'ai-2026-real-time-rag-blueprint',
    'ai-2026-real-time-retrieval-architectures',
    'ai-2026-reliable-autonomy-ops-blueprint',
    'ai-2026-retrieval-latency-patterns',
    'ai-2026-risk-and-guardrails-operating-model',
    'ai-2026-runtime-policy-enforcement-blueprint',
    'ai-2026-safe-agent-actions-blueprint',
    'ai-2026-safe-tool-use-blueprint',
    'ai-2026-secure-agent-operations',
    'ai-2026-secure-tooling-permissions-blueprint',
    'ai-2026-sovereign-ai-commerce',
    'ai-2026-trusted-evidence-pipeline',
    'ai-2026-trustworthy-model-routing',
    'ai-2026-zero-downtime-agent-rollouts',
  ]

  blogPosts.forEach((slug) => {
    sitemap.push({
      url: `https://zion.app/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap.map(item => {
    const lastModifiedInput = item.lastModified ?? new Date()
    const lastMod = (lastModifiedInput instanceof Date
      ? lastModifiedInput
      : new Date(lastModifiedInput as string)
    ).toISOString()
    const changeFreq = item.changeFrequency ?? 'weekly'
    const priority = item.priority ?? 0.5
    return `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('')}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}