"use client"
import React from 'react'

export default function CanaryAIEvalsRolloutsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Production Rollouts with Canary AI Evals</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Blueprint for shipping AI safely: canaries, live evals, abort switches, and evidence trails.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>What you will learn</h2>
          <ul>
            <li>Designing canary cohorts and guardrails for risky changes.</li>
            <li>Integrating live evaluation hooks and pass/fail gates.</li>
            <li>Capturing audit evidence and enabling one-click rollbacks.</li>
            <li>Operational dashboards for SLIs, SLOs, and incident readiness.</li>
          </ul>
          <h2>Resources</h2>
          <p>
            Includes templates, CI snippets, and dashboards to accelerate adoption.
          </p>
        </div>
      </div>
    </div>
  )
}

