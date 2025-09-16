export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: AI Platform 2.0</h1>
      <p className="mt-4 text-gray-300">
        Introducing AI Platform 2.0 — realtime reasoning, tool-use, and retrieval observability built-in.
        Ship safer, faster, and with measurable quality gates.
      </p>
      <div className="mt-8 space-y-4 text-gray-300">
        <p>
          Highlights include cost-aware model routing, streaming RAG, end-to-end tracing, and live evals that
          continuously validate changes in production.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Realtime reasoning with low-latency retrieval</li>
          <li>Guardrails and safety signals surfaced in a unified console</li>
          <li>Policy-as-code governance with audit trails</li>
        </ul>
        <p>
          Get started by contacting us or exploring the full documentation and blueprints.
        </p>
      </div>
    </div>
  )
}

