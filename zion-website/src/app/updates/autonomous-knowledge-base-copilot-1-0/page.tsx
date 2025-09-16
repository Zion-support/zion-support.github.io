export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Knowledge Base Copilot v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Autonomous Knowledge Base Copilot drafts, reviews, and publishes high‑quality help
            articles with policy‑as‑code guardrails, embedded evaluation gates, and full audit trails.
            It stays synchronized with product changes using traces and retrieval observability.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Draft generation with source citations and style guardrails</li>
            <li>Reviewer workflows, diffs, and sign‑off evidence bundles</li>
            <li>Automatic freshness checks with retrieval coverage metrics</li>
            <li>One‑click publish to web, in‑app, and PDF export</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams reduce backlog and keep documentation accurate with measurable quality signals,
            while remaining compliant via evidence capture and audit‑ready bundles.
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

