export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-blue-700 font-semibold mb-2">Guide</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Zero‑Downtime Agent Deployments (2026 Preview)</h1>
        <p className="text-gray-600 mb-8">Release management patterns with shadow traffic, phased rollout, safety gates, and automated rollbacks.</p>
        <div className="prose prose-lg max-w-none">
          <h2>Key Patterns</h2>
          <ul>
            <li>Shadow traffic and replay to validate behavior without user impact</li>
            <li>Phased rollout by cohort, feature flag, or traffic shard</li>
            <li>Safety gates using offline and online evals with hard error budgets</li>
            <li>Auto‑rollback tied to SLO breaches and incident triggers</li>
            <li>Versioned tools and prompts with immutable artifacts</li>
          </ul>
          <h2>Metrics to Watch</h2>
          <ul>
            <li>Task success rate and groundedness</li>
            <li>Latency and tool invocation error rate</li>
            <li>Cost per successful task</li>
            <li>Guardrail violations and override frequency</li>
          </ul>
          <p>Combine these practices with a change management pipeline and real‑time observability to achieve safe, continuous delivery for production agents.</p>
        </div>
      </article>
    </div>
  )
}

