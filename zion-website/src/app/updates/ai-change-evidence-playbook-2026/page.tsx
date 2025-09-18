import React from 'react'

export const metadata = {
	title: 'E2E AI Change Evidence Playbook (2026 Preview) — Guide',
	description:
		'Practical patterns for evidence bundles, lineage, and policy-as-code at scale.',
}

export default function Page() {
	return (
		<main className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
				<p className="text-sm text-blue-300">Guide • 2025-09-16</p>
				<h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">E2E AI Change Evidence Playbook (2026 Preview)</h1>
				<p className="mt-6 text-lg text-gray-300">
					How to produce, validate, and preserve end-to-end evidence for AI changes: prompts,
					workflows, tools, datasets, and policies.
				</p>
				<section className="mt-10 space-y-4">
					<h2 className="text-2xl font-semibold text-white">What You Will Learn</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Designing evidence bundles with lineage and signed artifacts</li>
						<li>Policy-as-code gates for deploy, canary, and rollback</li>
						<li>Audit-ready exports for regulators and customers</li>
					</ul>
				</section>
				<div className="mt-10">
					<a href="/updates" className="text-blue-400 hover:text-blue-300">Back to updates →</a>
				</div>
			</div>
		</main>
	)
}
