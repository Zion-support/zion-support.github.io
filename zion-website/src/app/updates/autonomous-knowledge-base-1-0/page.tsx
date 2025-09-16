export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Knowledge Base v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Self-maintaining, policy-aware knowledge base with freshness checks, live evals, and signed evidence bundles.
          Keep your docs up to date while maintaining compliance and reliability.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Automatic content freshness checks and alerts</li>
            <li>Policy-as-code gates for updates and approvals</li>
            <li>Live evals for retrieval quality and grounding</li>
            <li>Signed evidence bundles for audits</li>
          </ul>
          <h2 className="mt-8">Availability</h2>
          <p>Available today for enterprise customers. Contact us to enable it in your environment.</p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

