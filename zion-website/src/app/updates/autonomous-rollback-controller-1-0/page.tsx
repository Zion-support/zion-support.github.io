export const metadata = {
  title: 'Autonomous Rollback Controller v1.0 — Launch',
  description: 'Automated policy-gated rollbacks with signed evidence and objective thresholds.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Autonomous Rollback Controller v1.0</h1>
      <p className="mt-2 text-gray-400">2025-09-16</p>
      <p className="mt-4 text-lg text-gray-300">Automated policy-gated rollbacks with signed evidence and objective thresholds.</p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Automatic canary detection with metric thresholds and eval signals</li>
          <li>Signed evidence bundles for each rollback decision</li>
          <li>Integration hooks for incident runbooks and paging</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Get Started</h2>
        <p className="text-gray-300">Talk to our team to integrate with your CI/CD and policy engines.</p>
      </section>

      <div className="mt-10">
        <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
      </div>
    </main>
  )
}

