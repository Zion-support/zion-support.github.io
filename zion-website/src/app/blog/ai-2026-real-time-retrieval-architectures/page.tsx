export default function RealTimeRetrievalArchitecturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <p className="text-sm text-gray-500">Guide • 2025-09-15</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            AI 2026: Real‑Time Retrieval Architectures
          </h1>
          <p className="mt-3 text-gray-600">
            Low‑latency hybrid retrieval patterns with grounding, streaming evals, and progressive delivery
            controls for production systems.
          </p>
        </header>

        <section className="prose prose-gray max-w-none">
          <h2>Latency budgets first</h2>
          <p>
            Define user‑visible SLOs and derive hop‑by‑hop budgets across retrieval, reranking, and generation.
            Instrument streaming metrics to enforce budgets at runtime.
          </p>

          <h3>Patterns</h3>
          <ul>
            <li>Hybrid indexes: dense + sparse with adaptive fan‑out.</li>
            <li>Rerank on demand using lightweight cross‑encoders.</li>
            <li>Grounding checks and cite‑as‑you‑go prompts.</li>
            <li>Warm caches and prefetch for hot routes.</li>
          </ul>

          <h3>Operations</h3>
          <ol>
            <li>Shadow test index updates with live evals.</li>
            <li>Canary deploy rerankers with rollback switches.</li>
            <li>Track freshness, drift, and groundedness SLIs.</li>
          </ol>

          <p className="mt-8">
            Explore the{' '}
            <a href="/updates/real-time-retrieval-architectures-2026" className="text-blue-700 font-semibold">
              Real‑Time Retrieval Architectures (2026) update
            </a>{' '}and the{' '}
            <a href="/updates/production-rag-observability-2026" className="text-blue-700 font-semibold">
              Production RAG Observability guide
            </a>.
          </p>
        </section>
      </article>
    </div>
  )
}

