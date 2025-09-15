export default function KnowledgeGraphCopilotUpdate() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Launch</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Knowledge Graph Copilot v1.0
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Automatically builds and maintains enterprise knowledge graphs with policy-aware ingestion and live evaluations.
          </p>
        </div>
        <div className="prose prose-invert mt-10">
          <h2>What’s new</h2>
          <ul>
            <li>Policy-aware ingestion with lineage and signed evidence bundles</li>
            <li>Schema discovery, entity resolution, and relationship extraction</li>
            <li>Live eval gates for precision/recall and drift detection</li>
            <li>APIs for querying and embedding-aware traversal</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Reliable knowledge graphs power grounded copilots and analytics. This release standardizes ingestion,
            observability, and evaluation for enterprise readiness.
          </p>
          <h2>Get started</h2>
          <p>
            Contact us to enable Knowledge Graph Copilot in your environment and receive deployment guides and eval packs.
          </p>
          <p>
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact us →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

