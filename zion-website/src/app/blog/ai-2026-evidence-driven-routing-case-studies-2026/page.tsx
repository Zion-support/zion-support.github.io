// @ts-nocheck
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <article className="prose prose-invert mx-auto max-w-3xl px-6 py-16">
        <h1>AI 2026: Evidence‑Driven Routing — Case Studies</h1>
        <p className="text-gray-300">Real‑world wins from eval‑ and cost‑aware model routing under latency budgets.</p>
        <h2>Highlights</h2>
        <ul>
          <li>30% cost reduction via dynamic provider mix</li>
          <li>+6pp groundedness with retrieval‑aware routing</li>
          <li>99.9th latency under 750ms with streaming + caches</li>
        </ul>
        <h2>Patterns</h2>
        <ol>
          <li>Define SLIs/SLOs for quality, latency, and cost</li>
          <li>Attach eval gates to shards and canaries</li>
          <li>Route on policy signals and live telemetry</li>
          <li>Automate rollback with incident runbooks</li>
        </ol>
      </article>
    </div>
  )
} 
