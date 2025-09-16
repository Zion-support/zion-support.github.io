export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Vendor Risk Management for AI (2026 Preview)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Templates, control mappings, and evidence bundles to assess AI vendors responsibly, with
            policy-as-code checks and auditable artifacts across the lifecycle.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Risk taxonomy and tiering for AI systems</li>
            <li>Evaluation criteria and red-team requirements</li>
            <li>Evidence bundle schema and automation hooks</li>
            <li>Exception workflows and periodic reviews</li>
          </ul>
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

