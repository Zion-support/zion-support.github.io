export default function Article() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-semibold text-purple-700">Security</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Enterprise AI Security Blueprint (2025)</h1>
        <p className="mt-4 text-gray-700">
          Layered controls for model, data, runtime, and supply chain risk.
        </p>
        <div className="mt-8 prose prose-lg max-w-none">
          <h2>Control Layers</h2>
          <ul>
            <li>Model: guardrails, prompt filters, and response sanitizers</li>
            <li>Data: classification, encryption, tokenization, and minimization</li>
            <li>Runtime: sandboxing, rate limits, and anomaly detection</li>
            <li>Supply Chain: SBOMs, provenance, and signed artifacts</li>
          </ul>
          <h2>Operational Safeguards</h2>
          <p>Adopt policy-as-code, continuous threat modeling, and red-teaming.</p>
        </div>
      </article>
    </div>
  )
}

