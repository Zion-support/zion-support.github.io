export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-blue-400 font-semibold">Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Agent Postmortems That Drive Reliability (2026)</h1>
        <p className="mt-4 text-gray-300">
          Structured incident reviews with evidence bundles, causal graphs, and playbook updates.
        </p>
        <div className="mt-8 space-y-4 text-gray-200 leading-7">
          <p>
            This guide outlines a pragmatic, evaluative approach to postmortems for agentic systems. It focuses on
            capturing objective evidence, mapping causal chains, and turning insights into durable playbooks and
            guardrails.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Collect signed evidence: traces, eval IDs, and policy events</li>
            <li>Model causal graphs across data, prompts, tools, and policies</li>
            <li>Update runbooks and rollout gates with measurable success criteria</li>
          </ol>
        </div>
      </section>
    </main>
  )
}

