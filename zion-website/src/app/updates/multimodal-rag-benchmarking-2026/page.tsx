export const metadata = {
  title: 'Guide: Benchmarking Multimodal RAG (2026 Preview)',
  description: 'Evaluate retrieval quality and latency across text, image, and video pipelines.'
}

export default function Page() {
  return (
    <main className="prose prose-invert mx-auto px-6 py-16">
      <h1>Guide: Benchmarking Multimodal RAG (2026 Preview)</h1>
      <p>
        Learn how to benchmark multimodal retrieval-augmented generation across text, image, and video inputs.
      </p>
      <ul>
        <li>Dataset design and alignment</li>
        <li>Latency budgets and QoS</li>
        <li>Synchronization and caching strategies</li>
        <li>Evaluation metrics and gating</li>
      </ul>
      <p>
        See all recent updates on the <a href="/updates">updates page</a>.
      </p>
    </main>
  )
}

