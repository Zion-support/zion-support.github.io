export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Incident Simulation Toolkit v1.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ship safer agents faster with scenario-driven incident simulations. Run red-team drills,
            validate mitigations, and harden your runtime policies with evidence you can trust.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Curated library of failure and abuse scenarios</li>
              <li>Policy-as-code checks with pass/fail criteria</li>
              <li>Live telemetry hooks for traces, metrics, and alerts</li>
              <li>CI/CD integration for canary and pre-prod gates</li>
              <li>Executive-ready reports with trends and risk scores</li>
            </ul>
            <p>
              Install the toolkit to continuously validate safety and reliability in development and
              production, and to document controls for audits.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

