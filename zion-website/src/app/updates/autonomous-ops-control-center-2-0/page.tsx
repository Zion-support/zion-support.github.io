export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Autonomous Ops Control Center 2.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Version 2.0 of the Autonomous Ops Control Center introduces unified observability for
            agents, real-time policy enforcement, and automated incident workflows with live evals.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Unified traces, metrics, and safety signals dashboard</li>
              <li>Policy-as-code guardrails with just-in-time enforcement</li>
              <li>Runbooks and automated incident workflows with approvals</li>
              <li>Canary live evals with rollback hooks</li>
              <li>Deep integrations: PagerDuty, Slack, Jira, Datadog</li>
            </ul>
            <p>
              Modernize operations for autonomous systems with real-time control, visibility, and
              safety. Contact us to enable Control Center 2.0 in your environment.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

