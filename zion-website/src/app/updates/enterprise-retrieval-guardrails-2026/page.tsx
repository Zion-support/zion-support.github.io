// @ts-nocheck
export const metadata = {
  title: 'Enterprise Retrieval Guardrails (2026) — Guide',
  description: 'Patterns to reduce hallucinations using retrieval constraints, eval gates, and policy checks.',
}

export default function Page() {
  return (
    <main className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
        <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Enterprise Retrieval Guardrails (2026)</h1>
        <p className="mt-6 text-lg text-gray-300">
          Practical design patterns for grounded generation: source constraints, eval gates, and policy-as-code checks
          that reduce hallucinations and keep outputs within business guardrails.
        </p>
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-white">What you will learn</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Selecting trustable sources and constraining retrieval domains</li>
            <li>Objective evaluation gates before responses reach end users</li>
            <li>Policy checks for PII leakage, toxicity, and business rules</li>
            <li>Monitoring drift, freshness SLAs, and evidence bundle design</li>
          </ul>
        </section>
        <div className="mt-10">
          <a href="/updates" className="text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </main>
  )
}

