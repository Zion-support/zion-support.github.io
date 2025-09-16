import React from 'react'

export default function AIRiskMitigationGuide2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Risk Mitigation in Production (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">Practical controls, eval gates, and incident playbooks for safe AI operations.</p>

        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">What you will learn</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Policy-as-code with evidence capture and approvals.</li>
            <li>Guardrail patterns for tool use and retrieval.</li>
            <li>Incident simulation and response drills.</li>
          </ul>
          <a href="/contact" className="inline-block mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Get the full playbook</a>
        </div>
      </div>
    </div>
  )
}

