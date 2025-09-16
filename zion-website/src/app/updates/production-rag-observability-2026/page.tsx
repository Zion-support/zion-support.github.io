export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-purple-700 font-semibold mb-2">Guide</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Production RAG Observability (2026 Preview)</h1>
        <p className="text-gray-600 mb-8">Practical telemetry: coverage, freshness, drift, groundedness, and per‑step spans.</p>
        <div className="prose prose-lg max-w-none">
          <p>
            This 2026 preview lays out pragmatic patterns to make retrieval systems observable and reliable.
            It includes SLIs, span models, and eval hooks to continuously improve quality and reduce MTTR.
          </p>
          <h2>SLIs</h2>
          <ul>
            <li>Retrieval coverage per request</li>
            <li>Content freshness and staleness windows</li>
            <li>Answer groundedness and citation rate</li>
            <li>Latency budgets per stage</li>
          </ul>
          <p>Pair SLIs with SLOs and canary gates to protect releases.</p>
        </div>
      </article>
    </div>
  )
}
