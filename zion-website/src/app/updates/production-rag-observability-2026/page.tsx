
export default function ProductionRagObservability2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Production RAG Observability (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical telemetry for retrieval systems: coverage, freshness, drift, and grounding quality with per-step spans.
          Instrument your pipelines to detect regressions early and ship reliable RAG at scale.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Define SLIs for retrieval coverage and grounding quality</li>
            <li>Track freshness and drift with dataset and index lineage</li>
            <li>Per-step spans for retrieval, reranking, and synthesis</li>
            <li>Connect evals and canary tests to rollout decisions</li>
          </ul>
          <p>
            Use these patterns to build dashboards and alerts that keep quality high while optimizing cost and latency.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Get the full guide →
          </a>
        </div>
      </div>
    </div>
  )
}

