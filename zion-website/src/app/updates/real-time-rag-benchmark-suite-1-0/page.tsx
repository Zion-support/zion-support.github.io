export default function RealTimeRagBenchmarkSuite10() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Blueprint</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Real-Time RAG Benchmark Suite v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical, production-oriented benchmark for Retrieval-Augmented Generation systems under strict latency budgets.
          It includes standardized tasks, datasets, scoring rubrics, and harness integrations to evaluate quality, latency, and cost.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            This blueprint helps teams compare architectures and routing strategies apples-to-apples, with p95 latency targets and
            groundedness checks. It supports hybrid retrieval, streaming generation, and budget-aware routing.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reference tasks and datasets spanning Q&A, summarization, and decision support</li>
            <li>Objective metrics: groundedness, hallucination rate, answerability, and coverage</li>
            <li>Latency tiers and SLIs: p50/p95 response times with budget compliance</li>
            <li>Harness adapters for popular vector DBs and model providers</li>
          </ul>
          <p>
            Use this suite to guide model routing, cache strategies, and budget policies during pre-prod testing and canary rollouts.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Request access to datasets →
          </a>
        </div>
      </div>
    </div>
  )
}

