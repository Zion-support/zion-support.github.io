export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Production Evals Blueprint</h1>
        <p className="text-gray-600 mb-8">From offline suites to live canaries and deployment gates with auto rollback.</p>
        <div className="prose prose-lg max-w-none">
          <p>
            This blueprint shows how to wire evaluation gates throughout the lifecycle: offline benchmarking, pre‑merge checks, canary
            releases, and runtime abort switches. It provides objective guardrails for quality, safety, and latency.
          </p>
          <h2>Key Components</h2>
          <ul>
            <li>Versioned datasets and rubrics with clear SLIs/SLOs</li>
            <li>Pre‑merge and pre‑deploy eval gates</li>
            <li>Live canary traffic with automatic rollback</li>
            <li>Signed, audit‑ready evidence bundles</li>
          </ul>
          <h2>Rollout Checklist</h2>
          <ol>
            <li>Define metrics, thresholds, and budgets</li>
            <li>Automate CI checks with policy‑as‑code</li>
            <li>Enable canary + shadow testing</li>
            <li>Capture and store evidence for audits</li>
          </ol>
        </div>
      </article>
    </div>
  )
}

