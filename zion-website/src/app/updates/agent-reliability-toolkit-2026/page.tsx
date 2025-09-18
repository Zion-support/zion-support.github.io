import React from 'react'

export default function AgentReliabilityToolkitPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-white">Agent Reliability Toolkit (2026)</h1>
      <p className="mt-4 text-gray-300">
        SLIs, guardrails, and incident workflows to harden autonomous agents in production.
      </p>

      <section className="mt-10 space-y-4 text-gray-300">
        <p>
          The Agent Reliability Toolkit provides reference SLIs, policy-as-code guardrails, and incident workflows
          to help platform teams operate autonomous agents with predictable performance and safety. It integrates with
          evaluation pipelines and telemetry to continuously validate behavior and enforce rollback policies.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reliability SLIs for agent workflows and tool calls</li>
          <li>Guardrails with evidence collection and auditability</li>
          <li>Incident runbooks and automated rollback strategies</li>
          <li>Plug-in adapters for common observability stacks</li>
        </ul>
      </section>
    </main>
  )
}

