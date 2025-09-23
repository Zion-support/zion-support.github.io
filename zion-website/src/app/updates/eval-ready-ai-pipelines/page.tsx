"use client"
import React from 'react'

export default function EvalReadyAIPipelinesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Guide • 2025-09-15</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building Eval-Ready AI Pipelines
          </h1>
          <p className="mt-4 text-gray-300">
            Instrument datasets, harnesses, and live canaries to ship trustworthy AI changes.
          </p>
        </div>
        <div className="prose prose-invert prose-headings:text-white prose-a:text-blue-300">
          <p>
            This guide outlines a practical approach to integrate offline suites with live canaries and
            deployment gates. Measure quality, latency, and cost with consistent rubrics and observability.
          </p>
          <h2>Key steps</h2>
          <ol>
            <li>Define datasets and ground-truth where possible</li>
            <li>Build a repeatable evaluation harness and scoring</li>
            <li>Roll out with canaries and automatic rollback criteria</li>
          </ol>
          <p>
            See our blog for deeper implementation patterns and examples.
          </p>
          <p>
            <a href="/blog" className="text-blue-300 hover:text-blue-200">Read the blog →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

