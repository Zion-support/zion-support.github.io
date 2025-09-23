"use client"

export default function AILabResearchDatasetsPortalPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-cyan-300">Report</span>
            <time dateTime="2025-09-15">September 15, 2025</time>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Lab Research Datasets Portal
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl">
            Curated, enterprise-ready datasets with licenses, schemas, and quality metrics for rapid prototyping.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Dataset metadata with provenance and license clarity</li>
            <li>Schema previews and sampling endpoints</li>
            <li>Quality metrics and drift indicators updated weekly</li>
          </ul>

          <h2>Access</h2>
          <p>
            Browse the full index in the AI Lab portal or request enterprise access via <a href="/contact">Contact</a>.
          </p>
        </article>
      </div>
    </div>
  )
}


// duplicate default export removed

