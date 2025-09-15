"use client"

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Finance OS v1.1
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Enhanced financial automation with real-time risk scoring, immutable audit trails, and policy-as-code
          guardrails. Version 1.1 introduces live evaluation hooks, explainable routing, and compliance-ready logs.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            With v1.1, finance teams can automate reconciliation, anomaly detection, and routing while maintaining
            transparent, verifiable controls. Integrations include leading ERPs, data warehouses, and payment rails.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time risk scoring with adjustable thresholds and drift monitors</li>
            <li>Policy-as-code templates for approvals, segregation of duties, and audit evidence</li>
            <li>Built-in evaluation harnesses for accuracy, latency, and cost SLIs</li>
            <li>Exportable, immutable audit logs for internal and external reviews</li>
          </ul>
          <p>
            Contact us to pilot v1.1 with your ledger and treasury workflows.
          </p>
        </div>
      </div>
    </div>
  )
}

