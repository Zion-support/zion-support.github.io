export default function AILabOpenBenchmarksPortalPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">AI Lab Open Benchmarks Portal</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Transparent tasks, datasets, and harnesses for reproducible, enterprise‑ready AI benchmarking. Explore
          leaderboards, download corpora, and run evals with one‑click notebooks.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What you get</h2>
          <ul>
            <li>Standardized tasks and rubrics across domains</li>
            <li>Versioned datasets with licenses and quality metrics</li>
            <li>Evaluation harness with CI/CD and canary examples</li>
            <li>APIs for programmatic submissions and dashboards</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Get access →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

