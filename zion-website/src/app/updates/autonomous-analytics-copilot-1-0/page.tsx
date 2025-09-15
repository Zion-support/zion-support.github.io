export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← All updates</a>
        <p className="mt-4 text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Analytics Copilot v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Autonomous Analytics Copilot generates trustworthy dashboards, narratives, and alerts grounded in your
            telemetry and KPIs. It proposes experiments, tracks results, and packages audit-ready evidence for reviews.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Natural language queries over metrics with lineage-aware citations</li>
            <li>Auto-generated KPI briefs, weekly digests, and anomaly narratives</li>
            <li>Guardrailed insights with policy-as-code and signed evidence bundles</li>
            <li>Experiment planner with eval gates and rollback recommendations</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams make faster, safer, evidence-backed decisions with explainable insights that connect directly to
            production telemetry and governance controls.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

