"use client"
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Report: State of Real‑Time Agent Debugging 2026</h1>
        <p className="mt-4 text-gray-300">Evolving tools for live traces, prompt diffs, and tool‑call visibility across stacks.</p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>This report surveys debugging and observability capabilities for production agent systems.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Live trace inspection and span‑level guardrail events</li>
            <li>Prompt/version diffs with reproducible runs</li>
            <li>Policy‑aware redaction and audit evidence bundles</li>
          </ul>
          <p className="mt-6"><a href="/updates" className="text-blue-300 hover:text-blue-200">Read more updates →</a></p>
        </div>
      </div>
    </div>
  )
}

