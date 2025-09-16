export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Data Lineage Monitor v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Autonomous Data Lineage Monitor continuously tracks document and dataset provenance across
            ingestion, transformation, retrieval, and generation steps. It captures signed evidence bundles
            so you can answer what inputs shaped any given model output.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>End-to-end lineage graph across embeddings, indices, caches, and generations</li>
            <li>Signed, exportable evidence bundles for audits and incident reviews</li>
            <li>Drift and freshness alerts with per-source SLIs and quality gates</li>
            <li>APIs and SDKs to integrate with CI/CD and data catalogs</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Enterprises gain traceability for compliance, faster incident investigations, and reproducibility
            for research and product teams operating AI at scale.
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

