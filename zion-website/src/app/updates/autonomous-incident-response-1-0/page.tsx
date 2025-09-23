export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <p className="text-sm font-semibold text-emerald-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Autonomous Incident Response (v1.0)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          End-to-end incident triage with real-time retrieval, policy-as-code runbooks, and auditable actions. Reduce MTTR with
          grounded actions, safe tool-use, and live performance evals.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            Version 1.0 ships with automated triage, severity classification, playbook execution, and escalation workflows. Each
            action is grounded with citations and fully auditable.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Policy-as-code runbooks with approvals and rollbacks</li>
            <li>Real-time RAG for context gathering and enrichment</li>
            <li>Live evals for correctness, latency, and safety</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

