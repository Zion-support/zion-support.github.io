export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Fundamentals v2.1</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-14</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We refreshed AI Fundamentals with updated modules and new hands-on labs covering
            contrastive learning, retrieval patterns, and production evaluation guardrails.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Contrastive learning basics with toy datasets</li>
              <li>RAG patterns: chunking, embeddings, and evaluators</li>
              <li>Production evals: canaries, rollbacks, and SLIs</li>
              <li>Capstone updates and new practice quizzes</li>
            </ul>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

