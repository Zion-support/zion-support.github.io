
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Blueprint: Production Agent Telemetry 2026</h1>
          <p className="mt-2 text-gray-300">Unified tracing, eval signals, and guardrail events for operating agent fleets reliably.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>Reference architecture</h2>
          <ul>
            <li>Trace propagation across tools, calls, and sub-agents</li>
            <li>Eval signal streams and aggregation for SLOs</li>
            <li>Guardrail event schema and incident hooks</li>
            <li>Long-term storage and analytics patterns</li>
          </ul>
          <h2>Implementation guide</h2>
          <p>Adopt the schema, instrument agents, and wire dashboards to monitor reliability and safety.</p>
        </section>
      </article>
    </div>
  )
}

