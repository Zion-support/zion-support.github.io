export default function ResearchPortal20Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
          AI Lab Research Portal 2.0
        </h1>
        <p className="text-gray-300 text-lg leading-8">
          The revamped AI Lab Research Portal delivers live benchmarks, reproducible datasets, and
          end-to-end research pipelines. Explore continuous leaderboards, download curated corpora,
          and spin up evaluation-ready notebooks with one click.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a href="/news/research-breakthrough" className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
            <h2 className="text-white font-semibold">Live Benchmarks</h2>
            <p className="text-gray-300 text-sm mt-2">Compare models and agents across tasks with continuous evals.</p>
          </a>
          <a href="/blog/ai-2026-agentic-evals-blueprint" className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
            <h2 className="text-white font-semibold">Pipelines</h2>
            <p className="text-gray-300 text-sm mt-2">Forkable pipelines for data prep, training, and guardrailed inference.</p>
          </a>
        </div>

        <div className="mt-12">
          <a href="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
            Get access →
          </a>
        </div>
      </div>
    </div>
  )
}

