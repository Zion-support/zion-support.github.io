export default function Web3StackChecklistForEnterprise() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Enterprise Web3 Stack Checklist</h1>
          <p className="text-pink-100 text-lg">
            From smart contracts to infra, a minimal-but-complete list to get production-ready.
          </p>
        </div>
      </header>

      <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
        <h2>Core Components</h2>
        <ul>
          <li>Identity and Access: DID, wallet connections, and session security.</li>
          <li>Smart Contracts: upgradeable patterns, testing, and audits.</li>
          <li>Data and Indexing: subgraphs, ETL, and analytics.</li>
          <li>Governance: proposals, quorum, and treasury management.</li>
        </ul>

        <h2>Operations Checklist</h2>
        <ul>
          <li>Observability: logs, metrics, traces across on/off-chain systems.</li>
          <li>Compliance: KYC/AML where required; regional rules.</li>
          <li>Security: key management, role separation, and incident response.</li>
          <li>Cost Controls: gas strategy, caching, and rate limits.</li>
        </ul>

        <p>
          Zion OS provides reference implementations for each of these layers with enterprise-ready
          defaults. Leverage our modules to accelerate delivery while maintaining control.
        </p>

        <p className="mt-8">
          Need a readiness review? <a className="underline" href="/contact">Get in touch</a> to run a
          gap analysis and deployment plan.
        </p>
      </article>
    </div>
  );
}

