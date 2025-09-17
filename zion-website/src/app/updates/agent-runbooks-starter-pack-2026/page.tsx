export default function AgentRunbooksStarterPack2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Starter Pack</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Agent Runbooks: Starter Pack (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A curated set of production-ready runbooks for common agent incidents and maintenance tasks, including triage steps,
          rollback procedures, and evidence capture for post-incident reviews.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Standardize response to agent failures and degraded behavior with clear, actionable playbooks. Integrates with your
            eval gates and observability to trigger guided remediation.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Hallucination spikes and groundedness regressions</li>
            <li>Budget overages and cost anomalies</li>
            <li>Tool-use permission denials and escalation paths</li>
            <li>Latency budget violations and routing fallbacks</li>
          </ul>
          <p>
            Includes templates for blameless postmortems with objective metrics and corrective actions that feed back into
            policy-as-code and evaluations.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Get the full runbook set →
          </a>
        </div>
      </div>
    </div>
  )
}

