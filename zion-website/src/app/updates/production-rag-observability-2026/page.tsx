export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Production RAG Observability (2026 Preview)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Operate retrieval‑augmented systems with confidence using practical telemetry: coverage,
            freshness, drift, and groundedness quality across every retrieval and generation step.
          </p>
          <h2>What to measure</h2>
          <ul>
            <li>Coverage and recall across collections and segments</li>
            <li>Freshness, staleness windows, and recrawl efficacy</li>
            <li>Drift detection for embeddings and content distributions</li>
            <li>Groundedness and hallucination risk with task‑level rubrics</li>
          </ul>
          <h2>Operational patterns</h2>
          <ul>
            <li>Span‑level traces for retrieve‑rerank‑generate pipelines</li>
            <li>Canary eval gates with auto‑rollback policies</li>
            <li>Budget‑aware routing with SLOs for latency, cost, and quality</li>
          </ul>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Implement this with us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}