import React from 'react'

export default function AutonomousOpsPlaybook2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Ops Playbook (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A step-by-step playbook to stand up autonomous operations with policy-as-code, safety guardrails,
          and measurable SLAs. This 2026 preview distills production learnings into an actionable framework
          for CIOs, COOs, and platform teams.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Inside, you will find operating models, RACI charts, policy libraries, and evaluation harnesses that
            enable reliable automation across incident response, change management, and routine runbooks.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Policy-as-code templates for approvals, rollbacks, and change windows</li>
            <li>Guardrail patterns for cost, security, and data residency</li>
            <li>SLI/SLO blueprints for automation health and value tracking</li>
            <li>Playbooks for auditability and human-in-the-loop escalation</li>
          </ul>
          <p>
            Ready to implement? Contact us to tailor the playbook to your environment and compliance needs.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Talk to an expert →
          </a>
        </div>
      </div>
    </div>
  )
}

