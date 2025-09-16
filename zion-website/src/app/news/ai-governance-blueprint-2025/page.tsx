import Link from 'next/link'

export const metadata = {
  title: 'AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy',
  description: 'A pragmatic framework combining machine-enforceable policy with human oversight to safely scale autonomous systems.'
}

export default function AIGovernanceBlueprint2025() {
  return (
    <div className="min-h-screen bg-black text-white">
      <article className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="px-2 py-1 rounded-lg bg-white/10 text-blue-300">AI Governance</span>
            <span>8 min read</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy</h1>
          <p className="mt-4 text-xl text-gray-300">
            A pragmatic framework combining machine-enforceable policy with human oversight to safely scale autonomous systems.
          </p>

          <div className="prose prose-invert mt-8 max-w-none">
            <p>
              Enterprises adopting autonomous AI need governance beyond static checklists. Dual-layer policy couples
              machine-enforceable rules with human exception paths. This blueprint outlines roles, policy grammars,
              escalation thresholds, and audit trails. It includes a rollout sequence and measurable safety KPIs.
            </p>
            <p>
              The framework is organized across five domains: identity, policy, observability, human-in-the-loop, and audit.
              Each domain has a minimum viable control set and a maturity path with objective metrics. We include reference
              architectures and a 90-day implementation plan suitable for regulated environments.
            </p>
            <ul>
              <li>Policy-as-code with verifiable change management</li>
              <li>Risk-tiered escalation with reversible controls</li>
              <li>Continuous evaluation and shadow-mode testing</li>
              <li>End-to-end auditability for regulatory alignment</li>
            </ul>
            <p>
              Outcomes include reduced operational risk, faster approvals, and higher automation coverage with strong safety guarantees.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/news" className="text-blue-400 hover:text-blue-300 font-medium">← Back to News</Link>
          </div>
        </div>
      </article>
    </div>
  )
}

