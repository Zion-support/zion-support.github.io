

export const metadata = {
  title: 'Real‑Time Agent Benchmark Suite v1.0 — Launch',
  description: 'Unified latency, quality, and cost benchmarking with shareable scorecards.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Real‑Time Agent Benchmark Suite v1.0</h1>
      <p className="mt-4 text-lg text-gray-300">Unified latency, quality, and cost benchmarking with shareable scorecards.</p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Scenario packs for RAG, tool-use, and multi-step planning.</li>
          <li>Dashboards for throughput, p95 latency, and budget adherence.</li>
          <li>Exportable reports with signed evidence for audits.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Get Started</h2>
        <p className="text-gray-300">Contact us for integration guidance, or continue exploring more updates.</p>
      </section>

      <div className="mt-10">
        <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
      </div>
    </main>
  )
}

