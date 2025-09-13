export default function ZionOS15RealtimeAgents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Zion OS 1.5: Real-Time Agents with First-Class Observability</h1>
          <div className="text-white/50 text-sm mb-10">Sep 12, 2025</div>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p>
              Zion OS 1.5 introduces streaming agent orchestration with end-to-end tracing, budget-aware
              routing, and built-in safety guardrails for enterprise deployments. Teams can monitor agent
              performance live, enforce SLAs, and triage incidents with trace-level visibility.
            </p>
            <h2>What’s New</h2>
            <ul>
              <li>Real-time streaming agents with incremental outputs and tool usage</li>
              <li>Trace-level observability with spans, budgets, and token/cost accounting</li>
              <li>Policy-as-code guardrails with redaction, classification, and risk tiers</li>
              <li>SLA tooling: latency budgets, fallback routing, and circuit breakers</li>
            </ul>
            <h2>Getting Started</h2>
            <p>
              Open the Launch Wizard and enable Real-Time Agents. Configure observability exporters, set
              budget policies, and attach guardrails per workflow. Use the provided templates to deploy
              reliable production agents in minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

