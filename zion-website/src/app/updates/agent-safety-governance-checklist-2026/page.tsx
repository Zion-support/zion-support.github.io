export const metadata = {
  title: 'Agent Safety Governance Checklist (2026) — Guide',
  description: 'Operational checklist covering policies, eval gates, incident runbooks, and evidence.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <p className="text-sm font-semibold leading-6 text-blue-400">Guide</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Agent Safety Governance Checklist (2026)</h1>
      <p className="mt-2 text-gray-400">2025-09-16</p>
      <p className="mt-4 text-lg text-gray-300">Operational checklist covering policies, eval gates, incident runbooks, and evidence.</p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Checklist Areas</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Policy-as-code with versioned exceptions</li>
          <li>Live eval gates for quality, latency, and cost</li>
          <li>Incident playbooks and postmortem evidence bundles</li>
          <li>Access controls for tools and data sources</li>
          <li>Audit trails with signed artifacts and lineage</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Get the Templates</h2>
        <p className="text-gray-300">Contact us to receive editable SOPs, policy packs, and scorecard examples.</p>
      </section>

      <div className="mt-10">
        <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
      </div>
    </main>
  )
}

