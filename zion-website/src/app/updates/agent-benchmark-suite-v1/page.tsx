export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Agent Benchmark Suite v1
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Standardized task suites, rubrics, and golden datasets to evaluate production agents across
            research, support, finance, and operations. Integrates with CI and live canaries.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Domain packs with baseline scores and acceptance thresholds</li>
            <li>Evaluation harness with trace capture and error taxonomies</li>
            <li>Signed evidence bundles for compliance and audit-readiness</li>
          </ul>
          <h2>Integration</h2>
          <p>
            Drop-in GitHub Actions and Kubernetes jobs to run evals per PR and on a schedule. Export
            metrics to your observability stack for continuous monitoring.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Request access
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

