export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Release: Real-Time Evals Control Plane (v1.0)</h1>
        <p className="mt-4 text-lg text-gray-300">Ship safer, run faster. Centralized gates, rollback, and audit-ready evidence for AI releases.</p>
        <div className="mt-8 space-y-6 text-gray-300">
          <p>
            The Real-Time Evals Control Plane orchestrates pre- and post-deployment evaluation gates, integrates with
            CI/CD, and captures evidence for audits. Reduce incidents and accelerate iteration with automatic rollback
            when SLOs or guardrails are at risk.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>CI/CD integration for canaries, shadow tests, and rollout policies</li>
            <li>Live telemetry and dashboards for eval outcomes and safety signals</li>
            <li>Automated rollback and notifications tied to policy-as-code</li>
          </ul>
          <p>
            Works seamlessly with the Agent Risk Metrics toolkit and your existing observability stack.
          </p>
        </div>
      </div>
    </div>
  )
}
