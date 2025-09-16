
// @ts-nocheck

export const metadata = {
  title: 'Guide: AI Risk Mitigation in Production (2026)',
  description:
    'Practical controls, eval gates, and incident playbooks for safe AI operations.',
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          AI Risk Mitigation in Production (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A practical guide to mitigate AI risks with policy-as-code, objective evaluations, and
          operational guardrails across the deployment lifecycle.
        </p>

        <div className="mt-10 space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">Core Controls</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Executable policies with versioning and change control</li>
              <li>Eval gates at PR, pre‑prod, and rollout stages</li>
              <li>Runtime policy signals and budget guardrails</li>
              <li>Incident response with postmortems and evidence bundles</li>
            </ul>
          </section>
        </div>

        <div className="mt-12">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            See all updates →
          </a>
        </div>
      </div>
    </div>
  )
}
