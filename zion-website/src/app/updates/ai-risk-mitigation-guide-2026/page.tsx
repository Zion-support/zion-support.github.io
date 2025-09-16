
export default function AIRiskMitigationGuide2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-amber-300">Guide</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">AI Risk Mitigation in Production (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical controls to reduce operational and safety risk across the AI lifecycle. Includes policy-as-code
          examples, evaluation gates, and incident playbooks you can deploy today.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Risk taxonomy: data, model, system, and human-in-the-loop</li>
            <li>Evaluations: pre-deploy, canary, and continuous production evals</li>
            <li>Guardrails: grounding, PII safety, jailbreak resistance</li>
            <li>Governance: ownership, escalation, and response SLAs</li>
          </ul>
          <p>
            Templates provided for audit-ready controls and SOC2-aligned change management for AI features.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-amber-400 hover:text-amber-300">
            Get the templates →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function AiRiskMitigationGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guide: AI Risk Mitigation in Production (2026)</h1>
          <p className="text-gray-600 mb-8">Practical controls, eval gates, and incident playbooks for safe AI operations.</p>
          <div className="prose prose-gray max-w-none">
            <h2>Overview</h2>
            <p>
              This guide outlines actionable practices to mitigate AI risk in production: objective evaluations, policy-as-code
              guardrails, runtime observability, and incident response.
            </p>
            <h3>Key Controls</h3>
            <ul>
              <li>Pre-deploy eval gates with measurable rubrics</li>
              <li>Runtime policy checks and budget guardrails</li>
              <li>Tracing, metrics, and safety telemetry</li>
              <li>Post-incident analysis with causal graphs</li>
            </ul>
            <h3>Rollout Checklist</h3>
            <ol>
              <li>Define SLIs/SLOs for quality, latency, and cost</li>
              <li>Integrate eval suites into CI/CD</li>
              <li>Enable runtime guardrails and alerts</li>
              <li>Establish incident runbooks and evidence capture</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

