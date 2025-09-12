import React from 'react';
import Link from 'next/link';

export default function GenAIEvalsObservabilityPage() {
	return (
		<div className='min-h-screen bg-white'>
			<article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<header className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2'>GenAI Evals & Observability: The Practical 2025 Guide</h1>
					<p className='text-gray-600'>Published on 2025-09-11 · 10 min read · Category: AI Engineering</p>
				</header>
				<section className='prose prose-lg max-w-none'>
					<p>
						Consistent quality requires automated evals and rich telemetry across prompts, tools, retrieval,
						and cost. This guide shows a pragmatic, vendor-neutral setup.
					</p>
					<h2>What to Measure</h2>
					<ul>
						<li>Task success, factuality, safety incidents</li>
						<li>Latency, token usage, cache hit rate</li>
						<li>Tool failure modes, retries, fallbacks</li>
					</ul>
					<h2>Workflow</h2>
					<ol>
						<li>Capture traces with spans for prompt, retrieval, tools</li>
						<li>Run offline evals nightly; gate risky changes with CI evals</li>
						<li>Dashboards with budget alerts; weekly red-teaming</li>
					</ol>
				</section>
				<footer className='mt-10'>
					<Link href='/blog' className='text-blue-600 font-semibold hover:underline'>← Back to Blog</Link>
				</footer>
			</article>
		</div>
	);
}

