export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 lg:px-8">
        <p className="text-sm font-semibold leading-7 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Evaluating Real-Time Retrieval in Production (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A practical guide to evaluate and evolve real-time retrieval systems: streaming metrics,
          budgeted latency, rollout strategies, and evidence-backed decisions with guardrails and live evals.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">Key practices</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Streaming SLIs for recall, freshness, and groundedness</li>
              <li>Latency budgets and route-aware thresholds</li>
              <li>Shadow tests and canary routing with abort switches</li>
              <li>Signed evidence bundles for audits and reviews</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">Who it’s for</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Platform/ML engineers operating retrieval</li>
              <li>Observability and reliability teams</li>
              <li>Leads owning quality, safety, and compliance</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Talk to an expert
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-400">Published on 2025-09-15</div>
      </div>
    </div>
  )
}

