export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Product</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: AI Content Studio 2.2
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            AI Content Studio 2.2 delivers better team collaboration, reusable prompt blocks, and
            a new audit trail for generated assets. Average generation time improved by 18%, and
            editorial review flows are now built-in.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Reusable prompt blocks with variables and guardrails</li>
            <li>Shared libraries for brand voice and compliance snippets</li>
            <li>Side-by-side diff view for revisions with comments</li>
            <li>Batch export to Markdown, HTML, and social snippets</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams can standardize content quality, speed up approvals, and retain a complete
            history of edits for compliance and learning.
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

