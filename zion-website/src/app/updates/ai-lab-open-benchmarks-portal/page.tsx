"use client"

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          AI Lab Open Benchmarks Portal
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Transparent tasks, datasets, and harnesses for reproducible, enterprise-ready AI benchmarking.
          Explore standard suites, evaluation rubrics, and live dashboards designed for real-world production needs.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            The portal curates benchmark tasks across retrieval, reasoning, tool use, and safety. Each task includes
            dataset documentation, licenses, evaluation harness references, and baseline results with reproducible configs.
          </p>
          <p>
            Teams can integrate these benchmarks into CI/CD and production canary pipelines. We provide versioned
            manifests, policy-as-code checks, and evidence bundles for auditability.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Versioned tasks with clear provenance and change logs</li>
            <li>Rubrics aligned to enterprise KPIs: quality, latency, and cost</li>
            <li>Live dashboards and signed evidence bundles</li>
            <li>Starter kits for rapid integration</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-blue-400 hover:text-blue-300 font-semibold">
            ← Back to all updates
          </a>
        </div>
      </div>
    </div>
  )
}
