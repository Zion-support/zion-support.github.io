export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide — 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production AI Change Management (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Practical templates, approval flows, and eval gates to ship AI changes safely across teams
          and environments, with audit-ready evidence.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Use this guide to standardize how AI changes are proposed, tested, and rolled out. Wire
            canary evals, shadow tests, and rollback rules into CI/CD to ensure safe, measurable
            delivery.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Change templates with risk tiers and owners</li>
            <li>Eval harness selection and gating policies</li>
            <li>Signed evidence bundles for reviews and audits</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

