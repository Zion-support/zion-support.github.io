import React from 'react'

export const metadata = {
  title: 'Agent Reliability Scorecards v1.0 — Launch',
  description:
    'Standardized SLIs, risk signals, and trend analytics to measure and improve agent reliability at scale.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Agent Reliability Scorecards v1.0</h1>
      <p className="mt-4 text-lg text-gray-300">
        Establish a shared language for reliability across teams with SLIs like task success rate, policy violation
        rate, latency budgets adherence, and drift indicators. Track trends and regressions with exec-ready views.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Included Metrics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Success rate, deflection rate, escalation rate by scenario.</li>
          <li>Policy violations, guardrail interventions, and exception workflows.</li>
          <li>Latency budget adherence and tail performance (p95/p99).</li>
          <li>Data/behavior drift signals and remediation lead time.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Rollout</h2>
        <p className="text-gray-300">
          Connect your observability pipeline and evals to populate scorecards automatically. Use weekly reviews to
          prioritize fixes, experiment safely, and gate releases.
        </p>
      </section>
    </main>
  )
}

import React from 'react'

export default function AgentReliabilityScorecardsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            Release
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Agent Reliability Scorecards v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Standardized SLIs, risk signals, and trend analytics for agent reliability at scale.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>Highlights</h2>
          <ul>
            <li>Unified SLIs: task success, tool error rate, escalation rate</li>
            <li>Risk signals: hallucination risk, PII leak probability, safety blocks</li>
            <li>Trends and cohorts: reliability by agent version, scenario, and customer segment</li>
            <li>APIs and exporters for Grafana, Datadog, and BigQuery</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Contact our team to enable scorecards in your environment and connect your telemetry sources.
          </p>
        </div>
      </div>
    </div>
  )
}

