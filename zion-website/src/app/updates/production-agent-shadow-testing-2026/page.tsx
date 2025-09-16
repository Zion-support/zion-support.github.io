"use client"
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Guide: Production Agent Shadow Testing (2026)</h1>
        <p className="mt-4 text-gray-300">Implement shadow traffic, guardrail signals, and automatic rollback to de‑risk changes.</p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>Use shadow traffic and live eval gates to validate agent changes before exposing them to users.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mirror production requests with strict privacy and safety controls</li>
            <li>Compare traces, tool calls, and outcomes under guardrail budgets</li>
            <li>Trigger automatic rollback on risk threshold violations</li>
          </ul>
          <p className="mt-6"><a href="/contact" className="text-blue-300 hover:text-blue-200">Talk to an expert →</a></p>
        </div>
      </div>
    </div>
  )
}

