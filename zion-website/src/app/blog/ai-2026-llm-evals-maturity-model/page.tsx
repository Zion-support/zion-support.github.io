export default function Article() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-semibold text-purple-700">New Framework</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">AI 2026: LLM Evals Maturity Model</h1>
        <p className="mt-4 text-gray-700">
          An evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.
        </p>
        <div className="mt-8 prose prose-lg max-w-none">
          <h2>Maturity Levels</h2>
          <ol>
            <li>Ad-hoc: manual spot-checks</li>
            <li>Basic: golden tests and regression sets</li>
            <li>Managed: CI evals with quality gates</li>
            <li>Advanced: scenario sims and chaos evals</li>
            <li>Optimized: continuous, policy-driven evals</li>
          </ol>
          <h2>Key Metrics</h2>
          <ul>
            <li>Task success and helpfulness</li>
            <li>Risk: toxicity, jailbreaks, data leaks</li>
            <li>Latency, cost, and determinism</li>
          </ul>
        </div>
      </article>
    </div>
  )
}

