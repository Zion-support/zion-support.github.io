

export const metadata = {
  title: 'Launch: Agent Reliability Scorecards v1.0',
  description: 'Standardized SLIs, risk signals, and trend analytics for agent reliability at scale.',
}

export default function AgentReliabilityScorecards10() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Launch: Agent Reliability Scorecards v1.0</h1>
          <p className="text-gray-600 mb-8">Standardized SLIs, risk signals, and trend analytics for agent reliability at scale.</p>
          <div className="prose prose-gray max-w-none">
            <h2>Highlights</h2>
            <ul>
              <li>Unified SLIs across latency, correctness, and safety</li>
              <li>Risk scoring with configurable thresholds</li>
              <li>Trends and comparative benchmarks across services</li>
            </ul>
            <h3>How to Use</h3>
            <ol>
              <li>Configure SLIs and target objectives</li>
              <li>Enable data ingestion from production traces</li>
              <li>Review scorecards and export reports</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

