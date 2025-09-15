"use client"

export default function AgentPolicyAsCodeStarterKitPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
            <time dateTime="2025-09-15">September 15, 2025</time>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Agent Policy-as-Code Starter Kit
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl">
            Ready-to-run policy packs, CI checks, and audit trails to operationalize AI governance in weeks.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>What’s inside</h2>
          <ul>
            <li>Baseline policy packs for tool use, data handling, and safety</li>
            <li>CI integrations for pull request checks and signed evidence bundles</li>
            <li>Runtime guardrails and incident-ready audit trails</li>
          </ul>

          <h2>Getting started</h2>
          <ol>
            <li>Install the policy pack and enable CI checks</li>
            <li>Configure environment-specific exceptions and owners</li>
            <li>Roll out gradually with canary policies and live evals</li>
          </ol>

          <p>
            Questions or enterprise rollout support? Contact us at <a href="/contact">Contact</a>.
          </p>
        </article>
      </div>
    </div>
  )
}


// duplicate default export removed

