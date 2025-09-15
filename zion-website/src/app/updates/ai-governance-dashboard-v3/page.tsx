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
            v3 unifies governance KPIs across policy-as-code status, evaluation gates, and exception workflows. It
            brings deeper auditability, real-time compliance views, and integration hooks for CI/CD and ticketing.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Policy pack status with drift detection and evidence bundle exports</li>
            <li>Live eval gate monitoring with pass/fail trends and impact analysis</li>
            <li>Exception workflows with approvals, expiry, and auto-review reminders</li>
            <li>API and webhooks for CI/CD checks and SOC2-ready exports</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams get a single pane of glass to measure governance readiness, reduce audit toil, and ship safer
            agent changes with confidence.
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

