import React from 'react'

export default function GenAIEngineeringMasterclassPage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
				<p className="text-sm text-blue-300">Course • 2025-09-13</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">GenAI Engineering Masterclass</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">Hands‑on RAG, agents, evals, safety, and productionization.</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>What you'll learn</h2>
					<ul>
						<li>Designing eval‑ready AI pipelines</li>
						<li>Production guardrails and observability</li>
						<li>Agent safety, reliability, and rollout strategies</li>
					</ul>
					<p className="mt-6"><a className="text-blue-400" href="/contact">Request syllabus →</a></p>
				</div>
			</div>
		</div>
	)
}

