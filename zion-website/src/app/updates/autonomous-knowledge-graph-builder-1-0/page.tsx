// @ts-nocheck
export default function AutonomousKnowledgeGraphBuilderPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Autonomous Knowledge Graph Builder v1.0</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Automated entity extraction, linking, and provenance with eval-gated updates. Build trustworthy knowledge graphs with
            policy‑aware pipelines and signed evidence.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            The Autonomous Knowledge Graph Builder ingests documents and events, extracts entities and relationships, and
            incrementally updates the graph with provenance preserved. Each change is evaluated against quality thresholds and
            recorded as signed evidence for audits.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Entity and relation extraction with confidence thresholds</li>
            <li>Deduplication and canonicalization with lineage tracking</li>
            <li>Eval‑gated graph updates and rollback triggers</li>
            <li>Signed evidence bundles for compliance and reviews</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Connect your document store and event streams, configure extraction models and thresholds, then enable eval gates to
            safeguard updates. Use the included dashboards to monitor quality and provenance.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

