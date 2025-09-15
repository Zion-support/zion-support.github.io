import React from 'react'

export default function EnterpriseAgentObservabilityGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <header className="mb-8">
          <p className="text-sm font-semibold text-blue-600">Guide</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            AI 2026: Enterprise Agent Observability Guide
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Traces, evals, and safety telemetry to operate autonomous agents in production.
          </p>
        </header>
        <article className="prose prose-lg max-w-none">
          <h2>Why observability for autonomous agents?</h2>
          <p>
            Agentic systems introduce new classes of failure: tool misuse, policy violations, hallucinated actions,
            and hidden long-tail errors. Traditional logs and metrics are not enough. You need rich behavior traces,
            evaluation signals, and guardrail telemetry to understand, debug, and continuously improve these systems.
          </p>
          <h2>Core pillars</h2>
          <ul>
            <li>Behavior traces: intent, plan, tools called, inputs/outputs, and outcomes</li>
            <li>Evaluation signals: task success, safety checks, regressions, and scenario coverage</li>
            <li>Operational metrics: latency, cost, token usage, cache hit-rate, and retriable errors</li>
            <li>Safety telemetry: jailbreak attempts, PII leaks, policy violations, and containment events</li>
          </ul>
          <h2>Reference architecture</h2>
          <p>
            Instrument the agent runtime with standardized events, push traces to a vendor-neutral store, compute evals
            asynchronously, and expose dashboards and alerts. Gate releases with evaluation baselines and SLOs.
          </p>
          <h2>Rollout checklist</h2>
          <ol>
            <li>Define critical user journeys and success criteria</li>
            <li>Instrument traces and safety events</li>
            <li>Implement scenario-based evals in CI/CD</li>
            <li>Set SLOs and alerts; establish incident playbooks</li>
            <li>Review weekly: regressions, unit costs, safety posture</li>
          </ol>
        </article>
      </div>
    </div>
  )
}

