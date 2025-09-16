// @ts-nocheck
import React from 'react'

export default function AutonomousExperimentationToolkitPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Autonomous Experimentation Toolkit v1.0</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Safe A/Bs and shadow tests with eval gates, policy checks, and audit evidence.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            The Autonomous Experimentation Toolkit enables controlled experiments in production with automated guardrails.
            It wires objective evaluation gates, policy-as-code checks, and evidence bundling into every change.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Shadow testing and A/B toggles with blast-radius limits</li>
            <li>Evaluation gates for quality, safety, and cost signals</li>
            <li>Policy checks with exception workflows and approvals</li>
            <li>Signed evidence bundles for audit and incident reviews</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Integrate the toolkit with your CI/CD and observability stack. Define experiment policies, connect eval
            harnesses, and monitor signed evidence during rollouts.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

