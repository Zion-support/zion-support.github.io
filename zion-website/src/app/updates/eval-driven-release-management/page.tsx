export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Evaluation-Driven Release Management
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            This guide shows how to wire objective evaluation signals into each stage of
            the release process. Use canary live evals, abort switches, and quality budgets
            to ship faster without compromising safety.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>Defining service-level quality budgets for AI features</li>
            <li>Designing canary evals and rollback criteria</li>
            <li>Automating gates in CI/CD with policy-as-code</li>
            <li>Capturing audit-ready evidence bundles</li>
          </ul>
          <h2>Getting started</h2>
          <p>
            Begin with a minimal set of golden tasks and guardrails. Add streaming
            traces and eval hooks where it matters most, then expand coverage.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Implement with our team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
