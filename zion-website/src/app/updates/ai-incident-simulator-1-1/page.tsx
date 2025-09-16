export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Incident Simulator v1.1
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          New scenarios, live eval gates, and evidence exports to harden agent systems.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Whats new</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Scenario packs for tooling failures, grounding drift, and budget overruns</li>
              <li>Live eval gates with abort switches and rollback helpers</li>
              <li>One-click evidence bundles for audits and postmortems</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

