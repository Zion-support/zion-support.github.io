export default function ZionGPTCoreV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">ZionGPT Core v2: 10x Context + Tools API</h1>
          <div className="text-white/50 text-sm mb-10">Sep 12, 2025</div>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p>
              ZionGPT Core v2 delivers a major leap in model capability with 10x larger context windows,
              a native Tools API for safe function calling, and faster, more cost‑efficient inference across Zion OS.
            </p>
            <h2>Highlights</h2>
            <ul>
              <li>Context window increased up to 1M tokens for complex workflows</li>
              <li>First‑class Tools API with type‑safe schema execution</li>
              <li>Latency reduced by 35% and throughput improved by 2.1x</li>
              <li>Seamless upgrade path for existing agents and RAG pipelines</li>
            </ul>
            <h2>How to Enable</h2>
            <p>
              Navigate to Settings → AI → Models and switch default runtime to <strong>ZionGPT Core v2</strong>.
              Enable Tools API in your agent definitions to start invoking verified capabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

