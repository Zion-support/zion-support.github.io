
"use client"

export default function AgentRunbooksLiveEvalsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Guide • 2025-09-15</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Evaluating Agent Runbooks with Live E2E Evals
          </h1>
          <p className="mt-4 text-gray-300">
            Score and harden operational agent runbooks using real traffic, guardrails, and rollout gates.
          </p>
        </div>
        <div className="prose prose-invert prose-headings:text-white prose-a:text-blue-300">
          <h2>Why live evals</h2>
          <p>
            Offline tests miss production drift. Live end-to-end evals provide objective signals—success rate,
            rollback triggers, and incident MTTR—under real workloads.
          </p>
          <h2>Implementation steps</h2>
          <ol>
            <li>Define measurable outcomes and guardrails for each runbook</li>
            <li>Instrument traces and metrics for every step</li>
            <li>Introduce canary gates with auto-rollback</li>
            <li>Continuously review failures and expand coverage</li>
          </ol>
          <p>
            Explore more updates or <a href="/contact">contact us</a> to set up a pilot.
          </p>
        </div>
      </div>
    </div>
  )
}

