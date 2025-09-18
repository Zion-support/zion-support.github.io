// @ts-nocheck

export const metadata = {
	title: 'Agent Governance Checklist (2026 Preview) — Guide',
	description:
		'Practical, auditable controls for safe production agents with eval gates and evidence.',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
			<h1 className="text-3xl sm:text-4xl font-bold text-white">Agent Governance Checklist (2026 Preview)</h1>
			<p className="mt-4 text-lg text-gray-300">
				Implement guardrails that scale: policy-as-code, eval gates, evidence bundles, and safe rollouts.
			</p>

			<section className="mt-10 space-y-6">
				<h2 className="text-2xl font-semibold text-white">Checklist</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Versioned policy-as-code with approvals</li>
					<li>Eval gates enforced at deploy and runtime</li>
					<li>Shadow testing and canaries for risky changes</li>
					<li>Signed evidence bundles for audits</li>
				</ul>
			</section>

			<section className="mt-10 space-y-4">
				<h2 className="text-2xl font-semibold text-white">Get Started</h2>
				<p className="text-gray-300">
					Adopt one control per week, starting with eval gates and evidence publishing in CI/CD.
				</p>
				<p><a href="/contact" className="text-blue-400">Talk to our team →</a></p>
			</section>
		</main>
	)
}

