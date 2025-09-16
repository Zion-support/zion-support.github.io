export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production RAG Latency Tuning (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Hands-on techniques to hit sub-second latency with hybrid retrieval, caching, and routing.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Techniques</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Partial decoding and streaming response strategies</li>
              <li>Hybrid retrieval with prefetch, cache stamps, and fallbacks</li>
              <li>Latency-aware model routing with budgets and canaries</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

