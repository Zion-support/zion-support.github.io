export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-white">
      <p className="text-sm text-blue-300">Launch</p>
      <h1 className="mt-2 text-3xl font-bold">Agent Playbook Library v1.0</h1>
      <p className="mt-4 text-gray-300">
        Curated incident, rollout, and governance playbooks with eval gates and evidence bundles. This library
        provides opinionated, production‑ready playbooks for common agent operations scenarios.
      </p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">What’s inside</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-300">
            <li>Incident response runbooks with objective rollback gates</li>
            <li>Change management workflows with policy‑as‑code checks</li>
            <li>Shadow + canary rollout patterns and SLO guardrails</li>
            <li>Evidence bundle templates for audits and post‑mortems</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Get started</h2>
          <p className="mt-2 text-gray-300">
            Explore the full set of playbooks and adapt them to your environment. Pair with our
            <a href="/updates/evals-in-prod-control-plane-2026" className="underline decoration-blue-300/60 underline-offset-4 ml-1">Evals‑in‑Prod Control Plane</a>
            {" "}for policy‑gated releases.
          </p>
        </section>
      </div>
      <div className="mt-10">
        <a href="/updates" className="text-blue-400 hover:text-blue-300">← All updates</a>
      </div>
    </div>
  )
}

