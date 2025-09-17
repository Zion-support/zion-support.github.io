export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-blue-700 font-semibold mb-2">Guide</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Operational Evals Blueprint</h1>
        <p className="text-gray-600 mb-8">Production-ready gates and scorecards for safer, faster rollouts.</p>
        <div className="prose prose-lg max-w-none">
          <p>
            Operational evaluations in production move beyond offline benchmarks. This blueprint outlines
            a practical design for eval gates, live scorecards, and incident-driven improvements.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Define typed risks and map them to guardrail policies</li>
            <li>Gate deployments with scenario-driven checks and SLO-aware thresholds</li>
            <li>Stream eval events into tracing for unified debugging</li>
            <li>Use cost- and risk-weighted scoring to guide rollouts</li>
          </ul>
          <h2>Implementation Notes</h2>
          <ul>
            <li>Start with a small set of high-signal scenarios</li>
            <li>Establish latency and cost budgets per eval stage</li>
            <li>Automate post-incident scenario generation and regression tests</li>
          </ul>
          <p>
            Read the full article in the AI Lab: <a href="/reports/ai-lab/articles/new-operational-evals-blueprint-1758052800000.md">Operational Evals Blueprint</a>.
          </p>
        </div>
      </article>
    </div>
  )
}

