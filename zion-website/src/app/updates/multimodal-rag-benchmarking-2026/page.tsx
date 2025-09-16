
export default function MultimodalRagBenchmarkingPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Benchmarking Multimodal RAG (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Evaluate retrieval quality, synchronization, and latency across text, image, and video pipelines powering agents and copilots.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">What youll learn</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>SLIs and SLAs for multimodal retrieval and fusion</li>
            <li>Golden sets and annotation strategies across modalities</li>
            <li>Streaming vs batched tradeoffs and tail-latency mitigation</li>
            <li>Cost-aware routing for hybrid encoders and retrievers</li>
          </ul>
          <p>Includes example notebooks and a reference dataset with licenses.</p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Get the full guide E
          </a>
        </div>
      </div>
    </div>
  )
}

