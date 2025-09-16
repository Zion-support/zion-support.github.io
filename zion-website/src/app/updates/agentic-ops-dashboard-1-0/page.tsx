
export default function AgenticOpsDashboardPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Agentic Ops Dashboard (v1.0)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Real-time health, SLIs, and policy signals for agents and copilots. Purpose-built dashboards and alerts for incident response.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Live traces for tool use, retrieval, and policy checks</li>
            <li>Golden task suites and canary evals surfaced in one view</li>
            <li>Latency, quality, and cost SLIs with burn-rate alerts</li>
            <li>Guardrail violations and safety incidents with root-cause hints</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white">Get started</h2>
          <p>
            Connect your agent runtime and tracing backend. Enable the default dashboards and customize SLIs to your environment.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
            Request a demo
          </a>
        </div>
      </div>
    </div>
  )
}

