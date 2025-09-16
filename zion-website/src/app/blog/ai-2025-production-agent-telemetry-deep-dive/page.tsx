import Link from 'next/link'

export const metadata = {
  title: 'Production Agent Telemetry: A 2025 Deep Dive',
  description:
    'A practical guide to unified tracing, eval signals, and guardrail events for operating agent fleets reliably.'
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production Agent Telemetry: A 2025 Deep Dive
        </h1>
        <p className="mt-4 text-gray-300">
          Operating autonomous agents in production requires robust, explainable telemetry. This guide outlines a
          pragmatic telemetry model that unifies traces, evaluation signals, and guardrail events.
        </p>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-white font-semibold">Highlights</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-2">
            <li>Step-level spans across planning, retrieval, reasoning, and tool calls</li>
            <li>Evaluation signals embedded in traces (quality, safety, grounding)</li>
            <li>Guardrail events with policy context and outcomes</li>
            <li>First-class correlation across sessions, tasks, and datasets</li>
          </ul>
        </div>
        <p className="mt-8 text-gray-300">
          For a JSON schema and rollout checklist, see the long-form write-up in our content repository.
        </p>
        <div className="mt-8">
          <Link href="/updates" className="text-blue-300 hover:text-blue-200">
            Back to Updates →
          </Link>
        </div>
      </div>
    </div>
  )
}

