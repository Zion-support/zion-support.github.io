
export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Enterprise AI Adoption Playbook
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A practical playbook for scaling AI across the enterprise: from strategy and data
            readiness to governance, security, and measuring ROI.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Operating model and AI center of excellence</li>
              <li>Data readiness, lineage, and access controls</li>
              <li>Security controls across model, data, and runtime</li>
              <li>Policy-as-code, evals, and quality gates</li>
              <li>Value tracking and ROI measurement</li>
            </ul>
            <p>
              Download the playbook or talk with our experts to tailor it for your organization.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Talk to an expert
            </a>
            <a
              href="/api/downloads/enterprise-ai-playbook.pdf"
              className="inline-flex items-center rounded-md border border-white/10 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

