export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Report</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Report: AI Lab Open Benchmarks Portal
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            We are publishing an open portal with transparent evaluation tasks, golden datasets,
            and reproducible harnesses to accelerate research and enterprise adoption.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Task suites for retrieval, tool use, and reasoning with clear rubrics</li>
            <li>Versioned datasets with licenses, schemas, and quality metrics</li>
            <li>Reference implementations and CI integrations for continuous benchmarking</li>
          </ul>
          <h2>Get involved</h2>
          <p>
            Contribute datasets, propose tasks, or integrate the harness in your CI to track
            quality over time.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

