
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Real‑Time Agent Posture Monitor v1.0</h1>
        <p className="mt-4 text-gray-300">Continuous policy posture checks, alerts, and remediation guidance for agents.</p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            The Real‑Time Agent Posture Monitor continuously evaluates agents against organization policies,
            safety guardrails, and compliance requirements. It surfaces risk signals, prioritizes issues,
            and provides guided remediation with signed evidence for audits.
          </p>
          <h2 className="text-xl font-semibold text-white">Highlights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Live policy posture scoring with configurable thresholds</li>
            <li>Inline remediation guidance and rollback recommendations</li>
            <li>Signed evidence bundles for change reviews and audits</li>
          </ul>
          <div className="mt-8">
            <a href="/updates" className="text-blue-400 hover:text-blue-300 font-semibold">Back to updates →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

