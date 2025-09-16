export const metadata = {
	title: 'AI Security Evidence Vault v1.0 — Launch',
	description:
		'Centralized evidence bundles with automated chain-of-custody and policy checks.',
}

export default function Page() {
	return (
		<main className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
				<p className="text-sm text-blue-300">Launch • 2025-09-16</p>
				<h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">AI Security Evidence Vault v1.0</h1>
				<p className="mt-6 text-lg text-gray-300">
					Secure storage and verification for AI change evidence with signed artifacts, policy
					validation, and audit-ready exports.
				</p>
				<section className="mt-10 space-y-4">
					<h2 className="text-2xl font-semibold text-white">Highlights</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Immutable evidence bundles with chain-of-custody</li>
						<li>Automated policy conformance checks and alerts</li>
						<li>Compliance exports for audits and certifications</li>
					</ul>
				</section>
				<div className="mt-10">
					<a href="/updates" className="text-blue-400 hover:text-blue-300">Back to updates →</a>
				</div>
			</div>
		</main>
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
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 text-gray-200">
				<p className="text-sm text-blue-300">Launch</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Security Evidence Vault v1.0</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					Ship responsibly with signed evidence bundles, end-to-end lineage, and automated audit trails for every AI change across environments.
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
						Enable signed evidence in deployment pipelines, configure lineage collectors, and export reports to your compliance vault.
					</p>
				</section>

				<div className="mt-10">
					<a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Contact us</a>
				</div>
			</div>
		</div>
	)
}
