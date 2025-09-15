export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Enterprise Agent SLO Dashboards
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Define SLOs for agent quality, latency, and safety, then wire live telemetry and eval signals
            to visualize performance and trigger alerts. This guide covers metrics design, golden tasks,
            and evidence capture for audits.
          </p>
          <h2>What you will learn</h2>
          <ul>
            <li>Choosing SLI metrics for retrieval, grounding, and tool use</li>
            <li>Connecting eval pipelines to dashboards and alerts</li>
            <li>Establishing error budgets and rollback rules</li>
            <li>Automating audit-ready evidence bundles</li>
          </ul>
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

