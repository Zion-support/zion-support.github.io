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

