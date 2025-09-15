import React from 'react'

export default function Post() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <a href="/news" className="text-sm text-blue-400">← Back to News</a>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Announcing Zion AI Platform 2.0</h1>
        <p className="mt-2 text-sm text-gray-400">September 15, 2025</p>

        <div className="prose prose-invert mt-8">
          <p>
            Today we are unveiling Zion AI Platform 2.0 with significant improvements across performance, 
            observability, and enterprise readiness. Customers can expect up to 3x faster inference, 
            first-class tracing with OpenTelemetry, and expanded role-based access controls.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Accelerated inference pipelines with dynamic batching</li>
            <li>Observability suite with metrics, logs, and traces</li>
            <li>Granular RBAC and SSO integrations</li>
          </ul>
          <p>
            We’re excited to roll this out to all enterprise plans this quarter.
          </p>
        </div>
      </div>
    </div>
  )
}

