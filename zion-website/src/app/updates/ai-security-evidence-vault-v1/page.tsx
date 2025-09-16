import React from 'react'

export const metadata = {
	title: 'AI Security Evidence Vault v1.0 — Launch',
	description:
		'Signed artifacts, lineage tracking, and audit-ready bundles for AI changes.',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
			<h1 className="text-3xl sm:text-4xl font-bold text-white">AI Security Evidence Vault v1.0</h1>
			<p className="mt-4 text-lg text-gray-300">
				Ship responsibly with signed evidence bundles, end-to-end lineage, and automated
				audit trails for every AI change across environments.
			</p>

			<section className="mt-10 space-y-6">
				<h2 className="text-2xl font-semibold text-white">Highlights</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Immutable, signed artifacts with cryptographic proofs.</li>
					<li>Lineage tracking across datasets, prompts, models, and tools.</li>
					<li>Audit-ready evidence bundles for SOC2/ISO reviews.</li>
					<li>CI/CD integration and environment scoping by service/team.</li>
				</ul>
			</section>

			<section className="mt-10 space-y-4">
				<h2 className="text-2xl font-semibold text-white">Getting Started</h2>
				<p className="text-gray-300">
					Enable signed evidence in deployment pipelines, configure lineage collectors, and export
					reports to your compliance vault.
				</p>
			</section>
		</main>
	)
}

import React from 'react'

export default function AISecurityEvidenceVaultV1Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Security Evidence Vault v1
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Centralized evidence store for evals, audits, and policy checks with signed artifacts.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What’s included</h2>
          <ul>
            <li>Immutable, signed evidence bundles for audits</li>
            <li>API for pushing eval results and safety signals</li>
            <li>Role-based access with fine-grained permissions</li>
            <li>Evidence lineage and retention policies</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Ship compliant AI systems faster with auditable trails and verifiable artifacts for every release.
          </p>
          <h2>Get started</h2>
          <p>
            Enable the Evidence Vault integration in your environment and configure your CI to publish results.
          </p>
          <p>
            <a href="/contact" className="text-blue-400">Talk to our team →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

