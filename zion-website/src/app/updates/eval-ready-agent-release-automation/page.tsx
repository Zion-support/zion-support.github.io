export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Eval‑Ready Agent Release Automation
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            A practical blueprint to wire evaluation gates, abort switches, and evidence capture into
            your CI/CD so agent releases are safe, reversible, and measurable.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>Reference pipelines for offline evals and canary live tests</li>
            <li>Quality budgets and rollout policies as code</li>
            <li>Shadow testing and automatic rollback rules</li>
            <li>Audit‑ready evidence bundles and sign‑off workflows</li>
          </ul>
          <h2>Who is this for</h2>
          <p>
            Platform, MLOps, and reliability teams shipping agentic systems who need predictable, compliant,
            and fast release cycles.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Get the implementation playbook
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

