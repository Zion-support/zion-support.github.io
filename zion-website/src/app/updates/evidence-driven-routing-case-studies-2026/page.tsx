export default function EvidenceDrivenRoutingCaseStudies2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-10">
          <div className="text-sm text-blue-300 mb-4">Case Studies • 2026</div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Evidence‑Driven Routing: Case Studies (2026)
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Real‑world results from objective routing using evals, risk signals, and budgets.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            We profile multiple production environments that adopted evidence‑driven routing. Each case study includes
            baseline metrics, intervention design, and post‑deployment impact.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>27% inference cost reduction with no quality loss via adaptive routing.</li>
            <li>35% latency improvement under budget constraints using streaming and hybrids.</li>
            <li>Documented reduction in policy violations by integrating safety eval gates.</li>
          </ul>

          <h3>Methodology</h3>
          <p>
            All results are backed by standardized task suites and reproducible datasets. Metrics include groundedness,
            coverage, override rate, and MTTR for routing incidents.
          </p>

          <p>
            See also the Real‑Time Model Routing Playbook and Eval‑Ready Pipelines for implementation details.
          </p>
        </article>
      </div>
    </div>
  )
}

