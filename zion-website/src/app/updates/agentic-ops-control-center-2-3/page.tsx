export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <p className="text-sm font-semibold text-blue-300">Launch</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Agentic Ops Control Center v2.3
        </h1>
        <p className="mt-4 text-gray-300">2025-09-15</p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          v2.3 delivers faster incident drilldowns, automated runbooks, and cross‑environment policy dashboards
          to operate agent systems safely at scale.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-white font-semibold">What’s new</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-2 text-sm">
              <li>Incident drilldowns with timeline scrubbing and span correlations</li>
              <li>Automated runbooks with approvals and evidence capture</li>
              <li>Cross‑environment policy status and drift detection</li>
              <li>Faster queries and improved dashboard widgets</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-white font-semibold">Why it matters</h2>
            <p className="mt-3 text-gray-300 text-sm">
              Teams resolve incidents faster, ship changes safely, and maintain continuous compliance with
              audit‑ready evidence.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <a href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
            Talk to us about upgrading →
          </a>
        </div>
      </div>
    </div>
  )
}

