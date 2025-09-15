export default function Article() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-semibold text-purple-700">Finance</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Autonomous Finance Operating System</h1>
        <p className="mt-4 text-gray-700">Real-time cash, autonomous close, and policy-as-code guardrails.</p>
        <div className="mt-8 prose prose-lg max-w-none">
          <h2>Core Components</h2>
          <ul>
            <li>Unified ledger with streaming ingestion</li>
            <li>Reconciliation agents with tool-use</li>
            <li>Policy-as-code approvals and segregation of duties</li>
          </ul>
          <h2>Outcomes</h2>
          <p>Days-to-close reduced to hours, real-time visibility, and audited automations.</p>
        </div>
      </article>
    </div>
  )
}

