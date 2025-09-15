import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Research Assistant 2.0
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are excited to announce version 2.0 of our AI Research Assistant with multi-agent
            orchestration, faster retrieval, and improved research planning. This release focuses on
            reliability, speed, and better human-in-the-loop controls for enterprise research teams.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Multi-agent workflows for literature review and synthesis</li>
              <li>Adaptive retrieval with hybrid dense/sparse search</li>
              <li>Step-by-step research planning with checkpoints</li>
              <li>Improved observability and action logs</li>
              <li>Faster model routing with cost controls</li>
            </ul>
            <p>
              Contact us to enable 2.0 features in your environment or to request a guided demo.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

