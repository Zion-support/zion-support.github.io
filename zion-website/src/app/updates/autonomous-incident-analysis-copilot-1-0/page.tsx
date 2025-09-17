export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 lg:px-8">
        <p className="text-sm font-semibold leading-7 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Incident Analysis Copilot v1.0
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Automated incident timelines, causal graphs, and remediation suggestions with audit-ready evidence bundles
          and linked runbooks. Integrates with tracing, guardrail events, and eval signals to accelerate postmortems
          and reduce MTTR.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">Highlights</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Auto-generated incident timelines and causal graphs</li>
              <li>Evidence bundles with traces, evals, and policy events</li>
              <li>Actionable remediation suggestions and linked runbooks</li>
              <li>Exportable, audit-ready incident reports</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">Who it’s for</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>SRE and incident response teams</li>
              <li>Platform and reliability engineering</li>
              <li>Governance, risk, and compliance</li>
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

