// @ts-nocheck
import React from 'react'

export default function OperationalRiskMetricsForAgents() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-2">AI Safety • Sep 16, 2025 • 8 min read</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2026: Operational Risk Metrics for Agents
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Standardize override rates, policy violations, groundedness, and incident MTTR across teams. This guide proposes
            a unified schema for operational risk signals and how to wire them into dashboards and release gates.
          </p>
          <div className="prose prose-lg max-w-none">
            <h2>Why shared metrics matter</h2>
            <p>
              Teams need a common language for agent reliability and risk. We define core metrics, collection points,
              and targets to drive continuous improvement.
            </p>
            <h3>Core signals</h3>
            <ul>
              <li>Override Rate (human takeovers per 100 tasks)</li>
              <li>Policy Violations (blocked actions per 1,000 tool calls)</li>
              <li>Groundedness Score (evidence alignment from eval harnesses)</li>
              <li>Incident MTTR (time to detect, mitigate, and resolve)</li>
            </ul>
            <h3>Implementation</h3>
            <p>
              Emit structured telemetry with signed events. Route to your observability stack and attach to deployment
              gates with SLO budgets.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

