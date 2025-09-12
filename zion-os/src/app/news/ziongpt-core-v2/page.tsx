<<<<<<< HEAD
export default function ZiongptCoreV2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block rounded-full px-4 py-1 text-sm bg-fuchsia-600/20 text-fuchsia-300 mb-4">
            Release
          </div>
          <h1 className="text-5xl font-bold mb-4">ZionGPT Core v2: 10x Context + Tools API</h1>
          <p className="text-white/70">Sep 12, 2025</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert">
          <p>
            We are excited to ship ZionGPT Core v2, a major upgrade that expands context windows by 10x and
            introduces a native Tools API across the platform. This release dramatically improves reasoning over
            long documents, multi-turn workflows, and complex enterprise data.
          </p>
          <h2>Whats new</h2>
          <ul>
            <li>10x larger context windows for long-form understanding</li>
            <li>First-class Tools API for safe, auditable tool invocation</li>
            <li>Faster, lower-cost inference with dynamic routing</li>
            <li>Improved observability with span-level tracing</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Customers can now run retrieval-augmented generation over large corpora, orchestrate multi-step agent
            workflows, and integrate third-party systems with strong guarantees.
          </p>
          <h2>Availability</h2>
          <p>
            ZionGPT Core v2 is available today for all deployments. Enable it in your instance settings or contact
            support for rollout assistance.
          </p>
=======
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
>>>>>>> cursor/create-and-deploy-new-content-9b6a
        </div>
      </section>
    </div>
  );
}

