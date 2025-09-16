export default function AutonomousInnovationHubLaunchPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-blue-400 font-semibold">Launch</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Autonomous Innovation Hub v1.0</h1>
        <p className="mt-4 text-lg text-gray-300">
          A unified workspace to ideate, evaluate, and launch AI initiatives with policy-aware guardrails,
          live evaluation gates, and signed audit evidence. Accelerate from concept to production with
          prebuilt blueprints, benchmarks, and rollout checklists.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-blue-500/20 bg-white/5 p-6">
            <h2 className="text-white font-semibold">What’s inside</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
              <li>Blueprint library for agents, retrieval, and governance</li>
              <li>Live eval harnesses with canary and rollback rules</li>
              <li>Policy-as-code templates and exception workflows</li>
              <li>Evidence bundles export (SOC2/ISO-ready)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-white/5 p-6">
            <h2 className="text-white font-semibold">Outcomes</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
              <li>Faster time-to-first‑launch with standardized patterns</li>
              <li>Lower incidents via evaluation‑driven rollouts</li>
              <li>Improved auditability with signed evidence</li>
              <li>Measurable ROI from cost‑ and quality‑aware routing</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
            Request a demo <span aria-hidden>→</span>
          </a>
        </div>
        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-gray-400">
          <p>Published: 2025-09-15</p>
          <p className="mt-1">Tag: Launch</p>
        </div>
      </div>
    </div>
  )
}

