export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Governance Field Guide (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Practical, audit-ready patterns to operationalize AI governance with policy-as-code and live evidence.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">What you&apos;ll learn</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Mapping policies to executable controls and CI/CD checks</li>
              <li>Capturing signed evidence for audits and vendor due diligence</li>
              <li>Rolling out governance incrementally with measurable KPIs</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

