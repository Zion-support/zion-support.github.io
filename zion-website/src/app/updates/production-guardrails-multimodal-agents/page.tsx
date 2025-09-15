export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Production Guardrails for Multimodal Agents (2026)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Practical controls to ship multimodal agents safely: permissioned tool use, red-team
            harnesses, groundedness checks, and evidence capture integrated into CI/CD and runtime.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>Risk tiers and policy-as-code examples for image, audio, and text tools</li>
            <li>Live eval gates for perception accuracy and tool-call safety</li>
            <li>Incident response playbooks and audit-ready evidence bundles</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Use the templates to add pre-deployment checks and canary evals. Wire safety signals into
            dashboards and alerting for continuous oversight.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

