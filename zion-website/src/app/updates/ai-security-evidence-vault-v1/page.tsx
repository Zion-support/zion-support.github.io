import React from 'react'

export const metadata = {
	title: 'AI Security Evidence Vault v1.0 — Launch',
	description: 'Signed artifacts, lineage tracking, and audit-ready bundles for AI changes.',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 text-gray-200 bg-black min-h-screen">
			<h1 className="text-3xl sm:text-4xl font-bold text-white">AI Security Evidence Vault v1.0</h1>
			<p className="mt-2 text-sm text-blue-300">Launch • 2025-09-16</p>
			<p className="mt-6 text-lg text-gray-300">
				Ship responsibly with signed evidence bundles, end-to-end lineage, and automated audit
				trails for every AI change across environments.
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
