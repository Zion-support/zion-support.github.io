// @ts-nocheck

export const metadata = {
	title: 'AI Lab Content Drop — Observability & Safety — Announcement',
	description:
		'Fresh AI Lab articles on agentic observability, safety playbooks, and governance checklists.',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
			<h1 className="text-3xl sm:text-4xl font-bold text-white">AI Lab Content Drop — Observability, Safety, and Governance</h1>
			<p className="mt-4 text-lg text-gray-300">
				We published new articles covering observability for agent systems, enterprise safety playbooks, and a
				practical governance checklist.
			</p>
			<section className="mt-10 space-y-6">
				<h2 className="text-2xl font-semibold text-white">Highlights</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>The Agentic Observability Blueprint</li>
					<li>Enterprise Agent Safety Playbook</li>
					<li>Agent Governance Checklist</li>
					<li>Operational Risk Scorecards for Production Agents</li>
					<li>Real‑Time Guardrail Metrics for Safer Tool‑Use</li>
				</ul>
				<p className="text-gray-300">Explore them in the AI Lab section.</p>
			</section>
		</main>
	)
}

