export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm text-blue-300">Launch — 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Strategy Copilot v1.0
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Exec-grade copilot for roadmaps, ROI modeling, and policy-aware program plans. Built-in
          live evaluation gates, evidence capture, and audit-ready exports ensure safe rollouts.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            The Strategy Copilot helps leadership teams translate AI ambitions into actionable, governed
            roadmaps. It blends market research, internal telemetry, and policy-as-code to recommend
            prioritized initiatives with measurable outcomes.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scenario planning with quality, latency, and cost budgets</li>
            <li>Canary evals and rollback rules wired into delivery plans</li>
            <li>Signed evidence bundles for executive reviews and audits</li>
            <li>Integration with existing CI/CD and observability stacks</li>
          </ul>
          <p>
            Get a private demo and explore how it can accelerate your AI program while maintaining
            safety, compliance, and ROI.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-block mt-10 text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
        >
          Request a demo →
        </a>
      </div>
    </div>
  )
}

