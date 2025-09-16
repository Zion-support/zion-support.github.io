export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Real-Time Agent Observability Console v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Real-Time Agent Observability Console brings together traces, evaluation signals, and
            guardrail events into a unified, drillable view. Investigate incidents faster, export audit‑ready
            evidence bundles, and correlate performance with quality and cost in one place.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Cross-run trace timelines with tool-call details</li>
            <li>Live eval IDs with pass/fail and thresholds</li>
            <li>Policy-as-code guardrail events and overrides</li>
            <li>One-click evidence bundle export (JSON/CSV/PDF)</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Visit the <a href="/contact">contact page</a> to enable the console for your environment or request a demo.
          </p>
        </div>
      </div>
    </div>
  )
}

