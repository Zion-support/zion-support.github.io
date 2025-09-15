import Link from 'next/link'

export const metadata = {
  title: 'AI Governance Maturity Model: 2025 Practical Guide',
  description:
    'A staged model to level up AI governance across policy, controls, telemetry, and auditability.'
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Governance Maturity Model: 2025 Practical Guide
        </h1>
        <p className="mt-4 text-gray-300">
          Enterprises need a pragmatic path to govern AI systems as they scale. This guide presents a maturity model
          with clear capabilities, signals, and outcomes.
        </p>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-white font-semibold">Levels overview</h2>
          <ol className="mt-3 list-decimal pl-5 text-gray-300 space-y-2">
            <li>Ad hoc: Manual controls, limited visibility</li>
            <li>Basic: Documented policies, partial reviews</li>
            <li>Managed: Policy-as-code checks in CI/CD, incident runbooks</li>
            <li>Advanced: Live eval gates, evidence bundles, centralized dashboards</li>
            <li>Optimized: Continuous improvement loops and signed attestations</li>
          </ol>
        </div>
        <div className="mt-8">
          <Link href="/updates" className="text-blue-300 hover:text-blue-200">
            Back to Updates →
          </Link>
        </div>
      </div>
    </div>
  )
}

