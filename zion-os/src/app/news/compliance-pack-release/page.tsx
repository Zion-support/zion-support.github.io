<<<<<<< HEAD
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
=======
export default function CompliancePackRelease() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Compliance Pack: SOC 2 Playbooks + KYC/AML APIs</h1>
          <div className="text-white/50 text-sm mb-10">Sep 09, 2025</div>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p>
              Ship faster with audit‑ready controls. The Compliance Pack bundles SOC 2 playbooks, controls
              templates, and turnkey KYC/AML integrations to accelerate enterprise readiness.
            </p>
            <h2>Included Assets</h2>
            <ul>
              <li>Prebuilt SOC 2 control mappings and policy templates</li>
              <li>Automated evidence collection integrations</li>
              <li>KYC/AML provider adapters with sandbox environments</li>
              <li>Runbooks for audits, incident response, and data retention</li>
            </ul>
            <h2>Activate</h2>
            <p>
              Go to Settings → Compliance and enable the <strong>Compliance Pack</strong>. Configure your
              provider keys and assign control owners to start tracking readiness.
            </p>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-9b6a
        </div>
      </section>
    </div>
  );
}

