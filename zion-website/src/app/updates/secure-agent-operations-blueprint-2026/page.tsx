"use client"

export default function SecureAgentOperationsBlueprint2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-purple-300">Blueprint</span>
            <time dateTime="2025-09-15">September 15, 2025</time>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Secure Agent Operations 2026
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl">
            End-to-end controls, telemetry, and incident response for safe, compliant, and resilient agent ops.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>Reference architecture</h2>
          <ul>
            <li>Policy-as-code governance with environment-aware exceptions</li>
            <li>Observability: traces, evals, and safety signals</li>
            <li>Incident response: drills, evidence, and automated workflows</li>
          </ul>

          <h2>Rollout checklist</h2>
          <ol>
            <li>Instrument agents with standardized telemetry</li>
            <li>Gate deployments with CI checks and live canaries</li>
            <li>Run quarterly red teams and capture audit evidence</li>
          </ol>
        </article>
      </div>
    </div>
  )
}


export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Blueprint: Secure Agent Operations 2026</h1>
          <p className="mt-2 text-gray-300">End-to-end controls, telemetry, and incident response for safe, compliant, and resilient agent ops.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>Blueprint pillars</h2>
          <ul>
            <li>Zero-trust tool permissions and time-boxed access</li>
            <li>Eval-gated releases with rollback automation</li>
            <li>Live safety telemetry and incident workflows</li>
            <li>Policy-as-code with auditable evidence</li>
          </ul>
          <h2>Implementation</h2>
          <p>We provide templates, runbooks, and dashboards to get you production-ready quickly.</p>
        </section>
      </article>
    </div>
  )
}

