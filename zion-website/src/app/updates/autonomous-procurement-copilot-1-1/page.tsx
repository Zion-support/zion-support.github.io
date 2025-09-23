
export default function AutonomousProcurementCopilotV11() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Autonomous Procurement Copilot (v1.1)
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Supplier intelligence upgrades, policy-as-code for PO approvals, and smarter exception workflows
            with live evals to continuously improve quality and reduce cycle times.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>What’s new</h2>
          <ul>
            <li>Supplier graph enrichment with risk and performance signals</li>
            <li>PO approval policies-as-code with audit-ready traces</li>
            <li>Exception queues with retrieval-grounded context and suggested actions</li>
            <li>Live evals tracking accuracy, latency, and policy compliance</li>
          </ul>

          <h2>Get started</h2>
          <p>
            Connect your ERP and sourcing tools to pilot the copilot in a low-risk sandbox.
            <a href="/contact" className="text-blue-400 hover:text-blue-300"> Contact us →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

