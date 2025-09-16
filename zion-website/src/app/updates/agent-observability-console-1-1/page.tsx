export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Real‑Time Agent Observability Console v1.1</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-16 · Launch</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Live traces, tool metrics, and eval overlays for production agents. Diagnose incidents
            faster with unified timelines and cost insights.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Streamed token, latency, and tool-call metrics</li>
              <li>Policy and eval overlays with failure attribution</li>
              <li>Flow diffs across versions, prompts, and routes</li>
              <li>Evidence export for audits and postmortems</li>
              <li>Programmable alerts with guardrail triggers</li>
            </ul>
            <p>
              Pair with the Evidence Vault to close the loop from incident to documented fix.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

