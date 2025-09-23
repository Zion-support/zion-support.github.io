export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Real-Time Agent Debugger v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Real-Time Agent Debugger adds live traces, prompt diffs, tool-call timelines, and redaction-aware logs
            so you can diagnose production behavior safely without exposing sensitive data.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Streaming trace viewer with spans for retrieval, reasoning, and actions</li>
            <li>Prompt diffing across retries, tools, and model routes</li>
            <li>Timeline view of tool calls, inputs, outputs, and guardrail events</li>
            <li>Pseudonymization and field-level redaction for safe troubleshooting</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams reduce MTTR and improve reliability by quickly pinpointing failure modes without needing to
            reproduce complex, stateful agent runs locally.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

