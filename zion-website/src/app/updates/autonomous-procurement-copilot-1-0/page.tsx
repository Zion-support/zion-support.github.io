export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Procurement Copilot v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Autonomous Procurement Copilot streamlines vendor sourcing, RFP workflows, contract
            analysis, and approvals. It embeds policy-as-code, evaluation gates, and live cost
            benchmarks to ensure compliant, cost‑effective decisions.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Smart vendor discovery with deduplication and risk signals</li>
            <li>RFP drafting, scoring rubrics, and side‑by‑side vendor comparisons</li>
            <li>Contract clause extraction with policy checks and exception workflows</li>
            <li>Automated approvals with audit‑ready evidence bundles</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Ready to modernize procurement? Our team can deploy a pilot in weeks with measurable ROI.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
