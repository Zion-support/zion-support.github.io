
export default function MttrReductionEvalsInProdPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Case Study</span>
          <time dateTime="2025-09-14">September 14, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">50% MTTR Reduction with Evals-in-Prod</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          How a platform team halved mean time to recovery using live evals, guardrails, and cost-aware routing in production.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">Key outcomes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Incident triage time reduced by 37% with signal-driven alerts</li>
            <li>50% MTTR reduction across critical agent workflows</li>
            <li>20% cost savings via dynamic model routing under load</li>
            <li>Improved quality with golden task regressions caught pre-release</li>
          </ul>
          <p>We share the dashboards, SLIs, and policy checks used to drive these results.</p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Talk to our team E
          </a>
        </div>
      </div>
    </div>
  )
}

