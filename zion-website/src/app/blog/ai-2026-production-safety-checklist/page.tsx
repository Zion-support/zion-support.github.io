
export default function ProductionSafetyChecklistPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI 2026: Production Safety Checklist
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical checklist to ship safer AI: risk tiers, guardrails, evals, canaries, and evidence.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>1. Define Risk Tiers</h2>
          <ul>
            <li>Classify features by impact and blast radius</li>
            <li>Gate higher tiers with stricter controls and approvals</li>
          </ul>
          <h2>2. Guardrails & Policies</h2>
          <ul>
            <li>Policy-as-code checks in CI/CD and runtime</li>
            <li>Red-teaming templates and jailbreak detection</li>
          </ul>
          <h2>3. Evaluation Strategy</h2>
          <ul>
            <li>Offline evals for correctness and safety</li>
            <li>Canary live evals with abort switches</li>
          </ul>
          <h2>4. Observability</h2>
          <ul>
            <li>Traces for prompts, tool calls, and model responses</li>
            <li>SLIs for quality, latency, cost, and safety events</li>
          </ul>
          <h2>5. Evidence & Audit</h2>
          <ul>
            <li>Signed artifacts for releases and evaluations</li>
            <li>Retention policies and exportable audit bundles</li>
          </ul>
          <p className="mt-6">Need help implementing this in your environment? <a href="/contact" className="text-blue-400">Talk to our team →</a></p>
        </div>
      </div>
    </div>
  )
}

