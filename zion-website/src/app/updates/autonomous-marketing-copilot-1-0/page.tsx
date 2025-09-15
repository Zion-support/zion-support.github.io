export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm font-semibold text-emerald-300">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Marketing Copilot v1.0
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Plan, draft, and schedule multi-channel campaigns with brand-safe guardrails and live evaluation gates.
        </p>
        <div className="mt-10 prose prose-invert prose-a:text-blue-400">
          <h2>What’s new</h2>
          <ul>
            <li>Campaign planner with briefs, assets, and timelines</li>
            <li>Brand kits with tone and terminology guardrails</li>
            <li>Live evals for safety, quality, and factuality</li>
            <li>Calendar scheduling with approvals and audit trails</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams ship consistent campaigns faster while maintaining governance with policy-as-code and audit-ready evidence.
          </p>
        </div>
      </div>
    </div>
  )
}

