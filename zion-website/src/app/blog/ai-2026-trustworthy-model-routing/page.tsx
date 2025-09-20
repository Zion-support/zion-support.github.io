export default function TrustworthyModelRoutingPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <p className="text-sm text-gray-500">Blueprint • 2025-09-15</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            AI 2026: Trustworthy Model Routing
          </h1>
          <p className="mt-3 text-gray-600">
            A practical blueprint for policy‑aware, evaluation‑driven routing that balances quality, latency,
            and cost while producing audit‑ready evidence for every generation.
          </p>
        </header>

        <section className="prose prose-gray max-w-none">
          <h2>Why model routing?</h2>
          <p>
            No single model dominates across all tasks. Trustworthy routing selects the right model per
            request using signals about task type, sensitivity, latency budgets, and historical evals.
          </p>

          <h3>Core design principles</h3>
          <ul>
            <li>Policy‑as‑code defines risk tiers, prohibited behaviors, and approval thresholds.</li>
            <li>Live evals and guardrail events provide objective signals for routing and rollback.</li>
            <li>Budgets enforce latency and cost SLOs per route with automatic canaries.</li>
            <li>Evidence bundles capture inputs, decisions, and outcomes for audits.</li>
          </ul>

          <h3>Reference architecture</h3>
          <ol>
            <li>Classifier identifies task and sensitivity, attaches policy context.</li>
            <li>Router consults eval registry and budgets to choose candidate models.</li>
            <li>Guardrails validate prompts, tools, and outputs with inline policies.</li>
            <li>Traces, metrics, and evals stream to telemetry for continuous improvement.</li>
          </ol>

          <h3>Rollout playbook</h3>
          <ul>
            <li>Start with offline benchmarks; promote to shadow tests; enable canaries.</li>
            <li>Gate releases with eval thresholds and automatic abort switches.</li>
            <li>Export signed evidence for compliance and post‑release reviews.</li>
          </ul>

          <p className="mt-8">
            See also the{' '}
            <a href="/updates/trustworthy-model-routing-2026" className="text-blue-700 font-semibold">
              Trustworthy Model Routing (2026 Preview)
            </a>{' '}report and our{' '}
            <a href="/updates/cost-aware-routing-live-evals" className="text-blue-700 font-semibold">
              Cost‑Aware Routing blueprint
            </a>.
          </p>
        </section>
      </article>
    </div>
  ) 
} 