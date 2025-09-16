import React from 'react'

export default function EvalsInProdBestPractices2026Page() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
				<p className="text-sm text-blue-300">Guide • 2025-09-16</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Evals‑in‑Prod Best Practices (2026 Preview)
				</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					Blueprint for safe iteration using canaries, auto‑rollbacks, and quality gates.
				</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>Key practices</h2>
					<ol>
						<li>Start with narrow canaries and clear abort criteria</li>
						<li>Use automatic rollbacks tied to eval regressions</li>
						<li>Promote only through metric‑based quality gates</li>
					</ol>
					<p className="mt-6">
						<a href="/contact" className="text-blue-400">Get the full guide →</a>
					</p>
				</div>
			</div>
		</div>
	)
}

