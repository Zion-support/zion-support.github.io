
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Evidence‑Driven Rollback Playbook (2026)</h1>
        <p className="mt-4 text-gray-300">How to trigger, execute, and verify safe rollbacks with signed evidence.</p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            This playbook codifies a safe rollback process for autonomous systems using objective eval gates
            and signed evidence. It defines when to roll back, how to coordinate actions across services,
            and how to verify recovery using pre‑agreed SLOs and checklists.
          </p>
          <h2 className="text-xl font-semibold text-white">What’s Inside</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rollback triggers and thresholds with evaluator signals</li>
            <li>Operational steps with change evidence and lineage capture</li>
            <li>Post‑rollback verification and audit‑ready reporting</li>
          </ul>
          <div className="mt-8">
            <a href="/updates" className="text-blue-400 hover:text-blue-300 font-semibold">Back to updates →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

