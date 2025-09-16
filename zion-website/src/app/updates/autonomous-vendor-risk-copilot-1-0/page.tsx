"use client"
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Autonomous Vendor Risk Copilot v1.0</h1>
        <p className="mt-4 text-gray-300">Automates third‑party AI vendor assessments with policy‑as‑code, evidence capture, and risk scoring.</p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>Assess AI vendors faster and safer with standardized controls, automated evidence collection, and audit‑ready bundles.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Policy‑as‑code checklists mapped to leading frameworks</li>
            <li>Evidence capture, sign‑off workflows, and exportable bundles</li>
            <li>Live risk scoring informed by eval and guardrail signals</li>
          </ul>
          <p className="mt-6"><a href="/contact" className="text-blue-300 hover:text-blue-200">Request a demo →</a></p>
        </div>
      </div>
    </div>
  )
}

