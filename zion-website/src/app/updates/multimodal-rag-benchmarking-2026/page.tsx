export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-blue-300">Guide • 2026 Preview</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Benchmarking Multimodal RAG</h1>
          <p className="mt-4 text-lg text-gray-300">Evaluate retrieval quality, synchronization, and latency across text, image, and video pipelines.</p>
          <hr className="my-8 border-white/10" />
          <div className="prose prose-invert max-w-none">
            <p>Multimodal RAG introduces cross-signal synchronization challenges. This brief outlines:</p>
            <ul>
              <li>Dataset construction and relevance metrics</li>
              <li>Latency budgeting and pipeline instrumentation</li>
              <li>Grounding quality and hallucination checks</li>
              <li>Reproducible benchmarking methodology</li>
            </ul>
            <p>Adopt these practices to compare architectures and drive measurable improvements.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

