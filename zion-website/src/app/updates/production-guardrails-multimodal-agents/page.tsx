import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Guide: Production Guardrails for Multimodal Agents</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15 · Guide</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A practical guide to shipping safe image, audio, and text agents in production. Learn sandboxing patterns,
            content safety pipelines, evaluation harnesses, and layered policy enforcement to reduce incident MTTR.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold text-white">What’s Inside</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Threat modeling for multimodal inputs and tool use</li>
              <li>Runtime guardrails: isolation, quotas, and allow/deny lists</li>
              <li>Continuous red-teaming with representative datasets</li>
              <li>Observability: tracing, SLIs, and incident playbooks</li>
              <li>Compliance and audit artifacts with policy-as-code</li>
            </ul>
            <p>
              Use this guide to define quality gates, monitor drift, and create measurable safety scorecards for every release.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Request a workshop
            </a>
            <a href="/updates" className="inline-flex items-center text-blue-400 hover:text-blue-300">Back to Updates →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
