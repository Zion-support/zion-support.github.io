export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: AI Governance Dashboard v3
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Unified governance KPIs with policy-as-code status, evaluation gates, and exception workflows. Export
            audit-ready evidence bundles in one click.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Policy pack coverage and drift detection</li>
            <li>Live eval gates and change management timeline</li>
            <li>Exception workflows with approvals and expirations</li>
            <li>Signed evidence bundle exports</li>
          </ul>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Request a demo
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
