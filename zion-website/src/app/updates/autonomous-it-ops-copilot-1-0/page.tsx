<<<<<<< HEAD
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous IT Operations Copilot (v1.0)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Autonomous IT Operations Copilot continuously detects incidents, suggests remediation steps,
            and automates safe changes with guardrails. It uses live evaluation gates, policy-as-code,
            and budget-aware routing to balance reliability, latency, and cost.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>Signal fusion across logs, traces, metrics, and user reports</li>
            <li>Playbook recommendations with evidence and risk scores</li>
            <li>Safe automation guarded by approvals, canaries, and rollbacks</li>
            <li>SLO-aware routing and throttling to protect critical paths</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams cut MTTR, reduce toil, and standardize operations with measurable reliability.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Request a demo
            </a>
          </p>
=======

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Autonomous IT Operations Copilot 1.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Proactive incident detection, remediation playbooks, and SLA-aware routing with live evals.
            The IT Ops Copilot watches signals across logs, metrics, and traces to surface actionable
            insights and automate safe responses.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Early anomaly detection from telemetry and agent traces</li>
              <li>Runbook automation with approvals and audit trails</li>
              <li>SLA-aware routing with quality, latency, and cost budgets</li>
              <li>Real-time evals and guardrails on actions and tool use</li>
              <li>Incident evidence bundles for postmortems and audits</li>
            </ul>
            <p>
              See how teams reduce MTTR and noise fatigue with autonomous, governed operations.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Talk to an expert
            </a>
          </div>
>>>>>>> 69252da4b39a233944aebd46f720e5f5b61d8d0f
        </div>
      </div>
    </div>
  )
}

"use client"

export default function AutonomousItOpsCopilotV1Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-15</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Autonomous IT Operations Copilot v1.0
          </h1>
          <p className="mt-4 text-gray-300">
            Proactive incident detection, remediation playbooks, and SLA-aware routing with live evals.
          </p>
        </div>
        <div className="prose prose-invert prose-headings:text-white prose-a:text-blue-300">
          <h2>Overview</h2>
          <p>
            The Autonomous IT Operations Copilot continuously monitors signals across logs, metrics, and traces,
            detects anomalies, and recommends or executes safe remediation steps. It integrates with policy-as-code
            guardrails and evaluates outcomes in real time.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Early incident detection with adaptive baselines</li>
            <li>Step-by-step remediation playbooks with approvals</li>
            <li>SLA-aware traffic and model routing</li>
            <li>Live evals and rollback criteria</li>
          </ul>
          <p>
            Ready to try it in your environment? <a href="/contact">Contact us →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

