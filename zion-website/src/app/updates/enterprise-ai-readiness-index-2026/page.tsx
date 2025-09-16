
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Report: Enterprise AI Readiness Index (2026 Preview)</h1>
          <p className="mt-2 text-gray-300">A composite index to score data, governance, and platform maturity across enterprises.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>Methodology</h2>
          <ul>
            <li>Dimensions: Data, Governance, Platform, Talent</li>
            <li>Signals: SLAs, audit evidence, deployment velocity, policy coverage</li>
            <li>Benchmark cohorts and percentile ranks</li>
          </ul>
          <h2>How to use</h2>
          <p>Assess current state, prioritize gaps, and track progress against peers and targets.</p>
        </section>
      </article>
    </div>
  )
}

