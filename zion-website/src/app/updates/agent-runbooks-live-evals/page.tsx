
export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Evaluating Agent Runbooks with Live E2E Evals
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            How to score and harden operational runbooks using real traffic, guardrails, and rollout
            gates. Ground your incident workflows in objective signals and ship safer changes.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <h2 className="text-xl font-semibold text-white">What you’ll learn</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Define task rubrics aligned to incidents and SLOs</li>
              <li>Wire live canary evals and abort switches into runbooks</li>
              <li>Capture signed evidence for audits and postmortems</li>
              <li>Use shadow testing to de-risk changes pre-deploy</li>
              <li>Measure impact on MTTR, CSAT, cost, and safety</li>
            </ul>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Get the guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

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

