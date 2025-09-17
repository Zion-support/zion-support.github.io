import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm text-blue-300">Guide · 2026</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Production RAG Latency Budgets</h1>
          <p className="mt-4 text-gray-300 text-lg">A pragmatic framework to set and enforce latency budgets for production RAG systems.</p>
        </header>

        <section className="prose prose-invert prose-blue max-w-none">
          <h2>Why latency budgets matter</h2>
          <p>
            Retrieval‑Augmented Generation (RAG) workloads often regress as knowledge bases grow
            and traffic patterns shift. Latency budgets keep your experience predictable and
            measurable across query types, content domains, and device classes.
          </p>

          <h2>Define user‑centric budgets</h2>
          <ul>
            <li>Cold start: ≤ 1.5s P95 for first token</li>
            <li>Interactive follow‑ups: ≤ 800ms P95 end‑to‑end</li>
            <li>Background tasks: ≤ 3s P95 with streaming feedback</li>
          </ul>

          <h2>Enforce with guardrails</h2>
          <ol>
            <li>Pre‑compute embeddings and cache top‑K for hot shards</li>
            <li>Use hybrid retrieval and early‑exit strategies with quality floors</li>
            <li>Set eval‑gated rollouts for changes that affect latency or quality</li>
          </ol>

          <h2>Operational playbook</h2>
          <p>
            Track SLIs for retrieval latency, grounding quality, and cache hit rate. Trigger
            auto‑rollback when budgets or groundedness fall below thresholds.
          </p>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 flex items-center justify-between">
          <Link href="/blog" className="text-blue-400 hover:text-white">← Back to Blog</Link>
          <Link href="/contact" className="text-blue-400 hover:text-white">Talk to us →</Link>
        </footer>
      </article>
    </main>
  )
}

export const metadata = {
  title: 'Guide: Production RAG Latency Budgets (2026)',
  description: 'A pragmatic framework to set and enforce latency budgets for production RAG systems.',
}

// Removed duplicate default component to fix build error. The page above is the intended default export.
