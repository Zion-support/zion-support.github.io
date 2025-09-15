"use client"

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Report: AI Compliance Readiness 2026
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical readiness checklist and maturity model to help enterprises prepare for 2026 AI
          regulations. Learn how to operationalize policy-as-code, evidence collection, and continuous
          monitoring across model, data, runtime, and supply chain.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            This report outlines control families, required artifacts, and implementation patterns for
            auditability and risk management. It includes quick-start templates and reference
            architectures for high-impact programs.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maturity assessment rubric and target state definitions</li>
            <li>Policy-as-code examples with automated evidence capture</li>
            <li>Live guardrails and evaluation strategies for production systems</li>
            <li>Audit trail composition and retention best practices</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

