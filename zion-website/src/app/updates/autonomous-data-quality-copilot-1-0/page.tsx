export default function AutonomousDataQualityCopilot10Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Launch: Autonomous Data Quality Copilot 1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Continuous data quality monitoring with policy‑aware checks, eval gates, and signed evidence. Detect issues
          early, prevent regressions, and maintain trust in downstream retrieval and generation.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Schema, freshness, coverage, and drift checks with thresholds</li>
            <li>Eval‑gated approvals and rollback policies integrated into CI/CD</li>
            <li>Signed evidence bundles for audit‑ready reviews</li>
            <li>Dashboards with alerts and incident handoffs</li>
          </ul>
          <h2 className="mt-8">Get a Demo</h2>
          <p>
            See how teams wire checks into ingestion, retrieval, and agent pipelines to sustain quality at scale.
          </p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Schedule a walkthrough →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

