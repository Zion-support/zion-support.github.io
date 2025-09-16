import React from 'react'

export const metadata = {
  title: 'AI Risk Mitigation in Production (2026) — Guide',
  description:
    'Practical controls, eval gates, incident playbooks, and governance patterns for safe AI operations in production.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">AI Risk Mitigation in Production (2026)</h1>
      <p className="mt-4 text-lg text-gray-300">
        This guide outlines a pragmatic approach to identify, mitigate, and continuously monitor operational AI risks
        using evaluation gates, guardrails, signed evidence, and incident response playbooks.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Core Controls</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Eval-gated deploys with rollback triggers tied to SLOs and policy breaches.</li>
          <li>Guardrails for tool-use, data exfiltration prevention, and prompt injection defenses.</li>
          <li>Signed evidence bundles for audits: inputs, outputs, decisions, and policy versions.</li>
          <li>Runbook automation with simulated incidents and paging-on-policy-violations.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Incident Response</h2>
        <p className="text-gray-300">
          Standardize severity levels, ownership, and communication templates. Practice via chaos drills and red-team
          scenarios to validate containment and recovery procedures.
        </p>
      </section>
    </main>
  )
}


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
