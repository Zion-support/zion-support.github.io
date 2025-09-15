export default function AutonomousDecisionEngineLaunchPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm font-semibold leading-7 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Decision Engine v1.0
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Policy-aware agent decisioning with evaluation gates, budgets, and signed evidence for every action. 
          Make safer, faster, and more cost-effective decisions across your autonomous workflows.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-base font-semibold leading-7 text-white">Key capabilities</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-300">
              <li>Policy-as-code checks with risk tiers and approvals</li>
              <li>Eval gates and canary rollouts with automatic rollback</li>
              <li>Quality, latency, and cost budgets enforced per route</li>
              <li>Signed audit evidence and exportable bundles</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-base font-semibold leading-7 text-white">Outcomes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-300">
              <li>Ship changes faster with measurable safety</li>
              <li>Reduce incidents and MTTR with governed decisions</li>
              <li>Optimize spend via evaluation-driven routing</li>
              <li>Prove compliance with tamper-evident evidence</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
            Talk to us
          </a>
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            See all updates →
          </a>
        </div>
      </div>
    </div>
  )
}

