export default function ProductionRagLatencyBudgetsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Production RAG Latency Budgets (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A pragmatic framework to define, enforce, and monitor latency budgets for production RAG systems.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Key concepts</h2>
          <ul>
            <li>End‑to‑end budgets with component SLIs and SLOs</li>
            <li>Streaming policies and early‑return strategies</li>
            <li>Continuous evals to detect regressions</li>
          </ul>
          <p className="mt-6">
            Explore our reference dashboard: <a href="/updates/real-time-ai-analytics-dashboard-v3-0" className="text-blue-400 hover:text-blue-300">AI Analytics v3.0 →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

 
