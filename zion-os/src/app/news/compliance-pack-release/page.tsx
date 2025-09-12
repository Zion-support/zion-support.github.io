export default function CompliancePackReleasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block rounded-full px-4 py-1 text-sm bg-rose-600/20 text-rose-300 mb-4">
            New Pack
          </div>
          <h1 className="text-5xl font-bold mb-4">Compliance Pack: SOC 2 Playbooks + KYC/AML APIs</h1>
          <p className="text-white/70">Sep 09, 2025</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert">
          <p>
            Launch faster with prebuilt SOC 2 controls, audit-ready checklists, and turnkey KYC/AML integrations.
            The Compliance Pack accelerates enterprise deployments with documented controls and automated evidence
            collection.
          </p>
          <h2>Includes</h2>
          <ul>
            <li>Policy templates and control mappings</li>
            <li>Automated evidence collection workflows</li>
            <li>KYC/AML provider integrations</li>
            <li>Dashboards for audits and reports</li>
          </ul>
          <h2>Getting started</h2>
          <p>
            Enable the Compliance Pack from your instance marketplace and connect your preferred identity provider.
          </p>
        </div>
      </section>
    </div>
  );
}

