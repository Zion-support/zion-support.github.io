export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-16 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Enterprise Agent Risk Playbook (2026 Preview)
        </h1>
        <p className="mt-4 text-gray-300">
          A practical playbook to define, measure, and mitigate agent risks across the enterprise. Includes a unified
          taxonomy, scorecards, and evidence patterns that link design reviews, evals, and policy‑as‑code controls.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <h2 className="text-xl font-semibold text-white">What’s inside</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard risk taxonomy and example scenarios</li>
            <li>Risk scorecards with owners, mitigations, and SLAs</li>
            <li>Live eval hooks and incident drill templates</li>
            <li>Audit‑ready evidence bundles and exception workflows</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Get the playbook
          </a>
        </div>
      </div>
    </div>
  )
}

