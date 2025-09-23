
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Guide: Hardening LLM Integrations for SOC 2</h1>
          <p className="mt-2 text-gray-300">Practical controls for secrets, PII redaction, change management, and eval-backed releases.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-15</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            This guide outlines a pragmatic approach to ship LLM-powered features while meeting SOC 2 controls.
            It focuses on data handling, access management, and measurable guardrails validated by evaluations.
          </p>
          <h2>Controls checklist</h2>
          <ul>
            <li>Secret isolation via dedicated service accounts and short-lived tokens</li>
            <li>PII detection and redaction before transit; deterministic logs with hashing</li>
            <li>Change management with eval score thresholds as gates</li>
            <li>Fine-grained RBAC on prompts, tools, and connectors</li>
          </ul>
          <h2>Next steps</h2>
          <p>Adopt the reference controls and wire up CI checks using your existing pipelines.</p>
        </section>
      </article>
    </div>
  )
}

