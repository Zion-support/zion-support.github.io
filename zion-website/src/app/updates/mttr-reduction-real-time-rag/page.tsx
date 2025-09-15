"use client"
import React from 'react'

export default function MTTRReductionCaseStudy() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <a href="/updates" className="text-blue-400 hover:text-blue-300 text-sm">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Case Study: MTTR -42% With Real-Time RAG</h1>
        <p className="mt-3 text-gray-300">How live retrieval + evals reduced incident time-to-resolution in a Fortune 100 stack.</p>
        <div className="mt-8 space-y-6 text-gray-200 leading-7">
          <p>
            By combining streaming retrieval, incident-aware routing, and action guardrails, our client
            reduced mean-time-to-resolution by 42% across tier-1 incidents while improving answer quality.
          </p>
          <h2 className="text-xl font-semibold text-white">Outcomes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tail latency p95 reduced by 37%</li>
            <li>Escalations reduced by 28%</li>
            <li>Operator confidence increased with live eval dashboards</li>
          </ul>
          <p>
            Learn how to adopt these patterns in your operations and observability stack.
          </p>
        </div>
      </div>
    </div>
  )
}

