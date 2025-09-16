import React from 'react'

export default function Post() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <a href="/news" className="text-sm text-blue-400">← Back to News</a>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">New research on quantum neural search</h1>
        <p className="mt-2 text-sm text-gray-400">September 2, 2025</p>

        <div className="prose prose-invert mt-8">
          <p>
            Our research team published a peer-reviewed paper on hybrid classical-quantum retrieval that 
            establishes a new state of the art on multiple benchmarks.
          </p>
          <h2>Key findings</h2>
          <ul>
            <li>Hybrid attention improves retrieval quality at lower energy cost</li>
            <li>Robustness under adversarial noise exceeds classical baselines</li>
            <li>Composable with enterprise observability and governance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

