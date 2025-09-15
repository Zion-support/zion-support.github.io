
export default function StateOfAgentTooling2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-teal-300">Report</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            State of Agent Tooling (2026 Preview)
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            A data-driven preview of frameworks, tracing, evals, and policy enforcement for agentic systems in 2026.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Convergence on standard tracing and telemetry schemas</li>
            <li>Eval-native development workflows become mainstream</li>
            <li>Policy-as-code runtime enforcement gains adoption</li>
            <li>Model routing governed by quality and cost SLIs</li>
          </ul>

          <h2>Download</h2>
          <p>
            Full report available upon request.
            <a href="/contact" className="text-blue-400 hover:text-blue-300"> Request access →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

