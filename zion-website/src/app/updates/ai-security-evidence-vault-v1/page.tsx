import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Security Evidence Vault v1.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-16</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Evidence Vault provides signed artifacts, lineage tracking, and audit‑ready bundles for
            AI changes across prompts, policies, datasets, and models. It enables provable change
            management and simplifies compliance reporting.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Immutable evidence bundles with cryptographic signatures</li>
              <li>Lineage tracking for prompts, datasets, tools, and guardrails</li>
              <li>Policy‑as‑code checks integrated into CI/CD and rollout gates</li>
              <li>One‑click export for SOC2/ISO/PCI evidence packages</li>
              <li>APIs and SDKs for custom integrations</li>
            </ul>
            <p>
              Ready to bring verifiable trust to your AI releases? Get a demo and see how Evidence
              Vault streamlines audits and de‑risks production changes.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

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
