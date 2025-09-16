
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

