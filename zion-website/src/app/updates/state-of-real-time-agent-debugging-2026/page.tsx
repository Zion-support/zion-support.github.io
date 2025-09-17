export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm text-blue-300">Report — 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          State of Real-Time Agent Debugging — 2026 Preview
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Benchmarks and best practices for live traces, prompt diffs, and tool-call timelines in
          production agent systems. Learn how to reduce MTTR and improve safety with observability.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            This preview report synthesizes findings from early adopters of real-time agent debugging,
            covering streaming traces, prompt delta visualizations, and governed access to sensitive
            tool-call data.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Latency budgets for trace pipelines</li>
            <li>Grounding and retrieval diagnostics that matter</li>
            <li>Guardrail and eval signal overlays</li>
            <li>Evidence bundling for incident reviews</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

