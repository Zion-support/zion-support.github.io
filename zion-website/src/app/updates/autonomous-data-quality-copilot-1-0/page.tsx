export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Data Quality Copilot 1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Autonomous Data Quality Copilot continuously monitors datasets, retrieval corpora, and
            generated outputs against policy-aware checks. It tracks drift, freshness, coverage, and
            quality with evaluation gates and produces signed, audit-ready evidence bundles.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Policy-aware data quality checks with configurable thresholds</li>
            <li>Live eval IDs, pass/fail status, and regression tracking</li>
            <li>Drift and freshness monitoring with alerting and rollbacks</li>
            <li>One-click exportable evidence bundles (JSON/CSV/PDF)</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Request access to the copilot or a guided demo via the <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

