

export const metadata = {
  title: 'Production Agent Postmortems — Evidence‑First Templates — Guide',
  description: 'Templates for reproducible agent incident analysis with signed evidence.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Production Agent Postmortems — Evidence‑First Templates</h1>
      <p className="mt-4 text-lg text-gray-300">Step-by-step templates for reproducible agent incident analysis with signed evidence.</p>
      <section className="mt-8 space-y-4 text-gray-300">
        <p>
          These templates help teams run consistent, evidence-first postmortems for incidents involving autonomous
          agents. They emphasize reproducibility, provenance, and actionable learnings.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Capture inputs, outputs, and tool traces with timestamps.</li>
          <li>Bundle policy checks, evals, and environment context.</li>
          <li>Document remediation tasks with owners and target dates.</li>
        </ol>
        <p>
          Download the template bundle or contact us for an enterprise-ready workflow with automated evidence
          collection and sign-off.
        </p>
      </section>
      <div className="mt-10">
        <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
      </div>
    </main>
  )
}

