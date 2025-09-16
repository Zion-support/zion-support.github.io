import React from 'react'

export default function AIContentStudio21Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Product • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Content Studio 2.1
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Refinements to workflows, new templates, and 20% faster asset generation for teams.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What’s new</h2>
          <ul>
            <li>Faster multi-asset generation with parallel pipelines</li>
            <li>New long-form article and social carousel templates</li>
            <li>Review queues with version diffs and approvals</li>
            <li>SEO assistant with schema hints and link suggestions</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams can ship more consistent, on-brand content with measurable gains in speed and quality.
          </p>
          <h2>Get started</h2>
          <p>
            Enable Content Studio 2.1 in your workspace settings and invite your team.
          </p>
          <p>
            <a href="/contact" className="text-blue-400">Talk to our team →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

