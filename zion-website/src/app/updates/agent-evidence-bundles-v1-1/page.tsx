export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Feature: Agent Evidence Bundles v1.1</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Audit‑ready evidence bundles now include policy checks, eval IDs, guardrail events, and signed provenance.
          Version 1.1 adds red‑team scenario lineage, exception links, and export profiles for SOC2/ISO.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>Highlights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Signed bundle manifests with tamper‑evident hashes</li>
            <li>Trace‑aligned guardrail and eval signals</li>
            <li>Prebuilt export profiles (SOC2, ISO 42001)</li>
            <li>Evidence diffs across releases</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}

