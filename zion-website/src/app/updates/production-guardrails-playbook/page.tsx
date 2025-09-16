import React from 'react'

export default function ProductionGuardrailsPlaybookPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production Guardrails Playbook
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Operational guardrails, policy-as-code, and runtime protections for safe AI scale in production.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Inside the playbook</h2>
          <ul>
            <li>Policy-as-code patterns with CI/CD enforcement</li>
            <li>Runtime isolation and containment strategies</li>
            <li>Safety evaluations and promotion gates</li>
            <li>Auditability, evidence, and reporting</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400">Get the playbook →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

