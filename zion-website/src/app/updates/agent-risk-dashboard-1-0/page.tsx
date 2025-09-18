import React from 'react'

export default function AgentRiskDashboardPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Agent Risk Dashboard v1.0</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Unified risk scoring for agents with policy checks, incident drill‑downs, and evidence‑based governance.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            The Agent Risk Dashboard provides a consolidated view of operational, safety, and compliance risk across
            autonomous agents. It combines live signals, evaluation scores, and policy check outcomes into a single,
            auditable interface.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Unified risk score with configurable weights for safety, reliability, and cost signals</li>
            <li>Policy checks with pass/fail status and exception workflows</li>
            <li>Incident drill‑downs with evidence bundles and timelines</li>
            <li>Trend analytics with SLO alignment and alert routing</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Deploy the dashboard alongside your agent observability stack. Connect your evaluation pipelines and policy
            engine to unlock risk‑aware deployment decisions.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

