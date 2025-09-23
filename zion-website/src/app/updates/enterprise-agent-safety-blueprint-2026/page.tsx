export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Enterprise Agent Safety Blueprint (2026)
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A practical blueprint for enterprise-grade agent safety: risk tiers, permissioned tool
            use, sandboxes, approval workflows, and production monitoring with safety telemetry.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Risk-tiered tool access and scoped credentials</li>
              <li>Sandboxing strategies and containment controls</li>
              <li>Design reviews and pre-deploy checklists</li>
              <li>Runtime monitoring, safety SLIs, and alerting</li>
              <li>Incident response and post-incident reviews</li>
            </ul>
            <p>
              Use this blueprint to level up safety practices across agent development and
              operations with measurable guardrails.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Get the full guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

