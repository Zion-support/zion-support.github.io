
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Launch: Autonomous Compliance Auditor v1.1</h1>
          <p className="mt-2 text-gray-300">Continuous policy checks, evidence bundles, and SOC2-ready exports integrated into CI/CD.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>What’s new</h2>
          <ul>
            <li>Policy-as-code checks expanded for data residency and PII handling</li>
            <li>Evidence bundles with signed artifacts and traceable run IDs</li>
            <li>CI integration for PR gating and release approvals</li>
            <li>One-click SOC2/ISO export packs</li>
          </ul>
          <h2>Get started</h2>
          <p>Contact us to enable Compliance Auditor in your CI pipeline and configure controls.</p>
        </section>
      </article>
    </div>
  )
}

