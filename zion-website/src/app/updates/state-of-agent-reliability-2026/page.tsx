export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">State of Agent Reliability 2026</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Uptime, SLO adherence, failure taxonomy, and incident patterns across production agent systems.
            This report synthesizes production telemetry, eval signals, and postmortem data to benchmark reliability.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Top failure modes and mitigation effectiveness</li>
              <li>Reliability KPIs and maturity scoring rubric</li>
              <li>Architecture patterns that improve mean time between incidents</li>
              <li>Guidance for budget- and eval-aware rollout safety</li>
            </ul>
            <p>Request a briefing for tailored benchmarks and roadmap recommendations.</p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Request briefing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

