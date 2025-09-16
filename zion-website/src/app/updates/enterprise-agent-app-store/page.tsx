import React from 'react'

export default function EnterpriseAgentAppStorePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Preview • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Enterprise Agent App Store (Preview)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Curated, governable agent apps with permissions, telemetry, and billing integrations.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What you can do</h2>
          <ul>
            <li>Discover vetted agent apps for enterprise use</li>
            <li>Enforce permissions and data boundaries by policy</li>
            <li>View usage telemetry and cost reports</li>
            <li>Integrate with SSO and internal billing</li>
          </ul>
          <h2>Join the preview</h2>
          <p>We are onboarding a limited set of customers to the private preview.</p>
          <p>
            <a href="/contact" className="text-blue-400">Request access →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

