export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm font-semibold text-cyan-300">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production-Grade RAG Latency Budgets (2026)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Set, monitor, and enforce latency SLOs for RAG systems with streaming evals and automated rollbacks.
        </p>
        <div className="mt-10 prose prose-invert prose-a:text-blue-400">
          <h2>Key practices</h2>
          <ul>
            <li>Budget allocation across retrieval, reranking, and generation</li>
            <li>Per-step tracing with percentile and tail guardrails</li>
            <li>Shadow tests and canary routing for safe rollout</li>
            <li>Abort switches wired to eval signals and SLOs</li>
          </ul>
          <h2>Implementation tips</h2>
          <p>
            Use streaming metrics and step-level spans to localize regressions and keep user experience snappy under load.
          </p>
        </div>
      </div>
    </div>
  )
}

