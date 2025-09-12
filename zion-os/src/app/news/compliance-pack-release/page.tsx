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
        </div>
      </section>
    </div>
  );
}

