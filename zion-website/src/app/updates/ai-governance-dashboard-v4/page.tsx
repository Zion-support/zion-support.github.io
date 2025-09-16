export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: AI Governance Dashboard v4</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Unified governance KPIs with policy status, eval gates, exception workflows, and signed evidence bundles.
          Version 4 adds multi-environment rollups, granular exception analytics, and exportable audit trails.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            What’s new:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cross‑env policy posture and drift detection</li>
            <li>Live eval gate outcomes with abort/rollback trails</li>
            <li>Exception lifecycle analytics with owners and SLAs</li>
            <li>One‑click, signed evidence bundle exports</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Request a demo
          </a>
        </div>
      </div>
    </div>
  )
}

