// @ts-nocheck

export default function AgentSafetyPostureDashboardPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Agent Safety Posture Dashboard v1.0</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Unified view of safety signals, exceptions, and evidence across environments.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>What’s new</h2>
          <ul>
            <li>Consolidated risk indicators with drill‑downs to traces and sessions</li>
            <li>Exception workflows with approvals and expiry tracking</li>
            <li>Signed evidence bundles attached to every policy decision</li>
            <li>APIs for routing and enforcement integrations</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Safety posture needs to be continuously measured. This dashboard brings policy evaluation, runtime signals, and
            evidence together so teams can respond quickly and confidently.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

