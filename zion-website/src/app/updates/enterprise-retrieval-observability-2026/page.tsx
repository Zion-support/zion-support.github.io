export default function EnterpriseRetrievalObservability2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-amber-300">Report</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Enterprise Retrieval Observability (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Metrics, traces, and dashboards to monitor retrieval quality, drift, and SLIs at scale. This report covers
          design patterns and benchmarks for production‑grade retrieval systems.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Key Metrics</h2>
          <ul>
            <li>Coverage, freshness, and groundedness scores</li>
            <li>Latency distributions and tail behavior</li>
            <li>Drift detection and dataset health</li>
            <li>Per‑step spans and evidence bundling</li>
          </ul>
          <h2 className="mt-8">Benchmarks & Patterns</h2>
          <p>
            Compare hybrid retrieval stacks and instrument pipelines end‑to‑end with actionable SLIs and SLOs.
          </p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request the full report →</a>
          </p>
        </div>
      </div>
    </div>
  )
}


