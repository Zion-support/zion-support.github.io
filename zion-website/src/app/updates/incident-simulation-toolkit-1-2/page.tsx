// @ts-nocheck
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Launch • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Incident Simulator v1.2</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Drill realistic agent incidents with live eval gates, budget policies, and automated rollback rehearsals.
        </p>
        <div className="mt-10 grid gap-6">
          <section className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">What’s new in v1.2</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Scenario templates for prompt drift, tool failures, and retrieval outages</li>
              <li>Live eval gates to enforce safety and quality SLIs during drills</li>
              <li>Automated rollback playbooks with evidence bundles for audits</li>
            </ul>
          </section>
          <section className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Get started</h2>
            <p className="mt-2 text-gray-300">
              Contact us to enable the simulator in your environment and customize scenarios to your systems and policies.
            </p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">Request access</a>
          </section>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

