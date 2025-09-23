export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Case Study</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Case Study: MTTR Reduction with Real-Time RAG
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            A large enterprise integrated real-time retrieval telemetry and live evaluation hooks
            into incident workflows. The result: a 37% reduction in mean time to resolution (MTTR)
            and fewer regressions during peak traffic.
          </p>
          <h2>Key outcomes</h2>
          <ul>
            <li>Automated triage with guardrail events and failure taxonomies</li>
            <li>Faster root-cause isolation using retrieval quality signals</li>
            <li>Safe rollbacks via canary gates and abort switches</li>
            <li>Audit-ready incident timelines with prompt and tool-call diffs</li>
          </ul>
          <h2>Architecture highlights</h2>
          <p>
            Hybrid retrieval with streaming traces, bounded latency budgets, and policy-as-code
            checks to keep agents reliable under load.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Explore this pattern
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
