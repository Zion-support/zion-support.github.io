export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Autonomous Support Copilot v1.1
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Incremental release focused on reliability, faster retrieval, and lower cost-per-resolution.
            Adds real-time retrieval observability, improved grounding, and safety guardrails.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Retrieval observability with per-step traces and citations</li>
              <li>Cost-aware routing and dynamic model selection</li>
              <li>Enhanced safety checks for tools and external calls</li>
              <li>Live evals for answer quality and latency</li>
              <li>Improved CRM grounding with privacy controls</li>
            </ul>
            <p>
              Enable the upgrade in your workspace or request a guided rollout with our team.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request rollout support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

