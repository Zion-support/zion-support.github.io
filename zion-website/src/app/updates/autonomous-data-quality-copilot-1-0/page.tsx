export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Data Quality Copilot v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Autonomous Data Quality Copilot continuously profiles datasets, detects anomalies, and
            proposes policy-aware fixes with audit-ready evidence. It integrates with warehouses and
            lakes to enforce quality SLAs and reduce incident MTTR.
          </p>
          <h2>What’s included</h2>
          <ul>
            <li>Schema and drift monitors with adaptive thresholds</li>
            <li>Test generation for critical tables with guardrail policies</li>
            <li>Automated remediation suggestions and safe change workflows</li>
            <li>Signed evidence bundles for audits and reviews</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Data quality directly impacts agent reliability and business outcomes. With always-on
            checks and evidence, teams can prevent incidents and ship changes confidently.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

