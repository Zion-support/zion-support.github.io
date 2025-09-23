export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Agent Governance Toolkit v2.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A comprehensive upgrade of policy-as-code templates, runtime guards, and audit trails to
            accelerate safe agent adoption across the enterprise.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Expanded policy library with industry presets</li>
              <li>Granular tool permissions and dynamic risk tiers</li>
              <li>Signed policy bundles and change-management workflows</li>
              <li>Evidence capture with immutable audit logs</li>
              <li>Dashboards for control coverage and drift detection</li>
            </ul>
            <p>
              Adopt v2.0 to standardize controls, reduce risk, and prove compliance with
              end-to-end observability.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

