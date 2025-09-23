export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Secure Prompt Engineering (2025 Edition)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Threat-model prompts, enforce guardrails, and prevent prompt injection with patterns tested
            in production. Includes policy-as-code checks and sandboxing strategies.
          </p>
          <h2>Key patterns</h2>
          <ul>
            <li>Role isolation and tool permissioning</li>
            <li>Context segmentation and provenance tags</li>
            <li>Red-team prompts and automated regression suites</li>
          </ul>
          <h2>Outcomes</h2>
          <p>
            Reduce security incidents, improve groundedness, and maintain auditable evidence for reviews
            and certifications.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Download the guide
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

