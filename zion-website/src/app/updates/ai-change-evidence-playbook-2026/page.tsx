// @ts-nocheck

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
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					E2E AI Change Evidence Playbook (2026 Preview)
				</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					Implement evidence bundles and lineage tracking to make every AI release auditable and
					trustworthy.
				</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>Key Patterns</h2>
					<ul>
						<li>Evidence bundle schema with signed artifacts and hashes</li>
						<li>Lineage graph across datasets, prompts, models, and tools</li>
						<li>Policy-as-code gates for safety, security, and compliance</li>
						<li>Promotion workflows with environment scopes and approvals</li>
					</ul>

					<h2>Quickstart</h2>
					<ol>
						<li>Define your evidence bundle and storage policy</li>
						<li>Instrument pipelines to emit lineage and metrics</li>
						<li>Apply eval gates and guardrails before rollout</li>
						<li>Publish signed bundles to your evidence vault</li>
					</ol>

					<p>
						<a href="/contact" className="text-blue-400">Talk to our team →</a>
					</p>
				</div>
			</div>
		</main>
	)
}

