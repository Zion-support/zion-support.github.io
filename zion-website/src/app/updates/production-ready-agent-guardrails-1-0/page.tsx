export default function ProductionReadyAgentGuardrails10() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Release</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Production-Ready Agent Guardrails v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical, deployable set of guardrail patterns for agent systems, including
          policy-as-code checks, capability-scoped tools, budget-aware execution, and
          objective eval gates before and after release.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            This release bundles reference policies, adapters, and evaluation harness hooks
            that integrate with CI/CD to prevent unsafe changes from shipping, and with
            runtime controllers to stop risky actions.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Executable policies with severity tiers and remediations</li>
            <li>Tool permission scoping and approval workflows</li>
            <li>Pre-prod eval gates and canary checks with rollback triggers</li>
            <li>Runtime monitors for violations, overrides, and budget drift</li>
          </ul>
          <p>
            Use these guardrails to improve safety, reduce incidents, and accelerate compliant
            delivery of agent capabilities across teams.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Request implementation support →
          </a>
        </div>
      </div>
    </div>
  )
}

