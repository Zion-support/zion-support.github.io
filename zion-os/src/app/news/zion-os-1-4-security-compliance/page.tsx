export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion OS 1.4: Security & Compliance Pack</h1>
          <p className="text-xl text-white/80 mb-8">
            Enterprise-grade compliance templates, automated audit trails, and security hardening to accelerate regulated deployments.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>What’s New</h2>
            <ul>
              <li>Prebuilt SOC 2 control mappings and checklist automation</li>
              <li>Integrated KYC/AML APIs with regional policy presets</li>
              <li>Signed webhooks, request provenance, and tamper-evident logs</li>
              <li>Security baselines: CIS hardening, SSO, and secrets rotation</li>
            </ul>
            <h2>Why It Matters</h2>
            <p>
              Launch faster in regulated environments with out-of-the-box guardrails and audit readiness—without slowing teams down.
            </p>
          </div>
          <div className="mt-10">
            <a href="/news" className="btn-secondary">← Back to News</a>
          </div>
        </div>
      </section>
    </div>
  );
}

