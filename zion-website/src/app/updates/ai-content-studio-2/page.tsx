
export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Content Studio 2.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Create high-quality AI articles, videos, and social assets with one click. This 2.0
            release introduces new templates, collaborative workflows, and faster generation with
            built-in quality checks.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Team collaboration with roles and approvals</li>
              <li>Template marketplace and custom template builder</li>
              <li>One-click multi-format export (web, PDF, social)</li>
              <li>Editorial quality gates and content evals</li>
              <li>Faster generation with cost controls</li>
            </ul>
            <p>
              Looking to modernize your content pipeline? Enable Content Studio 2.0 in your
              workspace or request a guided demo.
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

