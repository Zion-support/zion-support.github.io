export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Production Agent Runbooks (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Standardized incident runbooks, approval workflows, and audit-ready checklists to operate agentic systems
          safely and efficiently across environments.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What&apos;s Inside</h2>
          <ul>
            <li>Runbook templates for common agent incidents</li>
            <li>Approval flows with policy-as-code checks</li>
            <li>Post-incident review structure and evidence capture</li>
            <li>SLIs, SLOs, and alerting guidance</li>
          </ul>
          <h2 className="mt-8">Get the Guide</h2>
          <p>Reach out to receive the comprehensive 2026 runbook kit for your teams.</p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request the guide →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

