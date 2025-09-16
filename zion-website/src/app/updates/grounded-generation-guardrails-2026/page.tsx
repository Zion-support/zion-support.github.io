// @ts-nocheck
export default function GroundedGenerationGuardrails2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Blueprint</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Grounded Generation Guardrails (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Reduce hallucinations in production using retrieval, constraints, and objective eval gates.
          This blueprint outlines reference architectures and controls to ensure responses remain faithful to sources.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            The approach combines retrieval augmentation, policy-as-code constraints, and live evaluation gates to
            ensure safe and reliable outputs. It supports streaming generation, tool-use with allowlists, and
            budget-aware fallbacks when uncertainty is detected.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Groundedness checks with citation coverage and answerability tests</li>
            <li>Structured outputs validated against JSON Schemas and policy constraints</li>
            <li>Risk-tiered routing with conservative fallbacks for high-uncertainty queries</li>
            <li>Objective eval gates for launch, canary, and rollback decisions</li>
          </ul>
          <p>
            Adopt these guardrails to improve trust, reduce incident rates, and maintain quality under cost and latency budgets.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Request implementation workshop →
          </a>
        </div>
      </div>
    </div>
  )
}
