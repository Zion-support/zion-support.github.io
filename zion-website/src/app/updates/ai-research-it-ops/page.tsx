import React from 'react'

export default function AiResearchItOpsPage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
				<p className="text-sm text-blue-300">Research • 2025-09-03</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Agents for IT Operations</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">New paper and demo exploring agentic automation for enterprise IT workflows.</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>Overview</h2>
					<p>We explore incident response, change management, and continuous verification with autonomous agents.</p>
					<p className="mt-6"><a className="text-blue-400" href="/contact">Get the paper →</a></p>
				</div>
			</div>
		</div>
	)
}

