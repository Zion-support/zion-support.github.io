"use client"
import React from 'react'

export default function BlogEvalReadyPipelines() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <p className="text-sm text-gray-500">Blueprint • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Eval-Ready AI Pipelines in Production</h1>
        <p className="mt-4 text-gray-700">
          From datasets to live canaries: a pragmatic approach to ship reliable AI changes.
        </p>
        <div className="prose max-w-none mt-8">
          <h2>Principles</h2>
          <ul>
            <li>Define objective metrics and rubrics</li>
            <li>Instrument tracing and sampling</li>
            <li>Automate rollback based on guardrails</li>
          </ul>
          <p>
            Pair offline evaluations with minimal, representative live checks to de-risk deployments.
          </p>
        </div>
      </article>
    </div>
  )
}

