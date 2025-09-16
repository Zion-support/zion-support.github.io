export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Agent Change Management Runbook (2026)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            This runbook standardizes approvals, progressive rollouts, and incident response for
            autonomous agent updates. It integrates policy-as-code checks and live evaluation gates
            to prevent regressions and ensure auditability.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>Risk tiers and approval matrices with objective criteria</li>
            <li>Canary strategies and auto-rollback rules using eval signals</li>
            <li>Release scorecards and evidence bundle templates</li>
            <li>Incident drills and on-call playbooks for agent operations</li>
          </ul>
          <h2>Download templates</h2>
          <p>
            Reach out via the <a href="/contact">contact page</a> for editable policy packs and SOP templates.
          </p>
        </div>
      </div>
    </div>
  )
}

