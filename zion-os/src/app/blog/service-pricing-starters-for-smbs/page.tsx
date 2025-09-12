export default function ServicePricingStartersForSMBs() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-emerald-600 to-green-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Starter Pricing: AI, IT, and Web3 Service Bundles</h1>
          <p className="text-emerald-100 text-lg">
            Transparent entry pricing and project ranges so teams can budget with confidence.
          </p>
        </div>
      </header>

      <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
        <p>
          We offer clear starter bundles for small and mid-sized teams adopting AI and modern
          infrastructure. These baseline packages are designed to deliver value in weeks, not months.
        </p>

        <h2>Starter Bundles</h2>
        <ul>
          <li>AI Assistant MVP: intake, retrieval, and evaluations.</li>
          <li>Analytics Quickstart: event pipeline, dashboards, and alerts.</li>
          <li>Web3 Foundations: auth, wallets, and basic smart contracts.</li>
        </ul>

        <h2>Pricing Notes</h2>
        <p>
          Pricing depends on scope, integration complexity, and compliance requirements. We provide
          fixed-price options for well-scoped projects and milestone-based estimates for larger builds.
        </p>

        <p className="mt-8">
          Ready to scope a project? <a className="underline" href="/contact">Contact us</a> and we’ll
          tailor a proposal for your needs.
        </p>
      </article>
    </div>
  );
}

