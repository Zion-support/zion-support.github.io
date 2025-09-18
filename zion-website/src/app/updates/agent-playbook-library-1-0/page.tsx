import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Agent Playbook Library v1.0</h1>
        <p className="mt-4 text-gray-300">Curated incident, rollout, and governance playbooks with eval gates and evidence bundles.</p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            The Agent Playbook Library provides standardized, field‑tested procedures for safe, observable,
            and cost‑aware operations across environments. Each playbook is instrumented with evaluator gates
            and evidence capture for audit‑readiness.
          </p>
          <h2 className="text-xl font-semibold text-white">Included Playbooks</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Canary and Shadow Rollouts</li>
            <li>Policy Exception Handling</li>
            <li>Incident Response and Post‑mortems</li>
          </ul>
          <div className="mt-8">
            <a href="/updates" className="text-blue-400 hover:text-blue-300 font-semibold">Back to updates →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
