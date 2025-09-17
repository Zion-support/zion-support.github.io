export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-blue-400 font-semibold">Report</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">State of Real-Time Agent Telemetry 2026</h1>
        <p className="mt-4 text-gray-300">
          Signals that matter: budgets, guardrail events, eval IDs, and user outcomes.
        </p>
        <div className="mt-8 space-y-4 text-gray-200 leading-7">
          <p>
            This report summarizes emerging telemetry standards for production agents, highlighting the
            metrics and event streams that correlate with reliability, safety, and business outcomes.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Latency, quality, and safety budgets with live alerts</li>
            <li>Guardrail events and incident signals across environments</li>
            <li>Eval IDs linked to deployments and rollouts</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

