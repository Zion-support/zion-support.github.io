
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Report: State of Real-Time RAG (2026 Preview)</h1>
          <p className="mt-2 text-gray-300">Benchmarks of streaming retrieval latency, hit rate, and quality across architectures.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-15</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            We benchmarked multiple real-time retrieval architectures including hybrid dense/sparse,
            vector-only, and cache-augmented pipelines. The report summarizes median and p95 latency,
            retrieval hit rate, and answer quality under realistic load and drift scenarios.
          </p>
          <h2>Key findings</h2>
          <ul>
            <li>Cache-augmented hybrid retrieval reduced p95 latency by up to 42%</li>
            <li>Freshness-aware indexing improved hit rate by 9–14% on dynamic corpora</li>
            <li>Guardrail filters minimally impacted latency when compiled to WASM</li>
          </ul>
          <h2>Download</h2>
          <p>
            Contact us for the full dataset and methodology or to run the suite on your stack.
          </p>
        </section>
      </article>
    </div>
  )
}

