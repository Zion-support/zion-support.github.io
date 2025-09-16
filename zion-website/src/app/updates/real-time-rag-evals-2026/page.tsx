export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Guide: Real-Time RAG Evals (2026)
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A practical guide to instrument retrieval pipelines and run continuous, low-overhead live evals.
            Covers tail latency, hit-rate, grounding quality, and answer helpfulness at production scale.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <h2 className="text-xl font-semibold text-white">What you'll learn</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designing eval-ready retrieval and reranking stages</li>
              <li>Choosing golden sets vs. shadow traffic vs. canaries</li>
              <li>Metrics: hit-rate@k, grounding, latency SLOs, cost per answer</li>
              <li>Operationalizing evals with dashboards and alerting</li>
              <li>Common pitfalls and how to mitigate drift</li>
            </ul>
            <p>
              This guide includes templates and reference dashboards to accelerate your rollout.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Get the implementation kit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

