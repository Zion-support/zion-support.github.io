export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Security Evidence Vault v1.0</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-16 · Launch</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Signed artifacts, lineage tracking, and audit-ready bundles for AI changes. Ensure every
            model update, prompt change, and policy tweak is traceable and verifiable.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Immutable evidence bundles with cryptographic signatures</li>
              <li>Lineage graphs for prompts, models, tools, and data sources</li>
              <li>Export to auditors with role-filtered redactions</li>
              <li>CI/CD hooks to enforce approval and separation of duties</li>
              <li>APIs for evidence ingestion from evals, tests, and prod traces</li>
            </ul>
            <p>
              The Evidence Vault helps enterprises meet governance and compliance needs without
              slowing down shipping velocity.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

