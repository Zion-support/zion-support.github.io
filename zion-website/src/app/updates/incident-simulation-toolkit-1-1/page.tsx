export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 lg:px-8">
        <p className="text-sm font-semibold leading-7 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Incident Simulation Toolkit v1.1
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Scenario-driven drills with real-time eval gates, automatic rollback rules, and signed evidence
          exports to harden agent systems. v1.1 adds new multimodal scenarios, budgeted latency checks,
          and deeper integrations with guardrails and tracing.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">What’s new</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Multimodal attack and failure scenarios</li>
              <li>Eval-gated rollbacks wired to deployment checks</li>
              <li>Signed evidence bundles and export profiles</li>
              <li>Latency budgets and route-specific thresholds</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">Who it’s for</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Platform and SRE teams</li>
              <li>Security and governance leaders</li>
              <li>Product teams piloting agentic features</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Request a demo
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-400">Published on 2025-09-15</div>
      </div>
    </div>
  )
}

