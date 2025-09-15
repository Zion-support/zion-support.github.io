export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 lg:px-8">
        <p className="text-sm font-semibold leading-7 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Strategy Copilot v1.0
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Exec-ready strategy copilot that drafts roadmaps, OKRs, and investment memos grounded in
          live telemetry, benchmarks, and market signals. Built with policy-aware data access,
          evidence-backed recommendations, and audit-ready decision trails.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">What’s inside</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Roadmap and OKR generation with guardrails</li>
              <li>Portfolio planning with scenario analysis</li>
              <li>Evidence bundles with sources and assumptions</li>
              <li>CI/CD checks for governance and approvals</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-white font-semibold">Who it’s for</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Executives and strategy leads</li>
              <li>PMOs and operations leaders</li>
              <li>Venture and innovation teams</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Request a demo
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-400">Published on 2025-09-15</div>
      </div>
    </div>
  )
}

