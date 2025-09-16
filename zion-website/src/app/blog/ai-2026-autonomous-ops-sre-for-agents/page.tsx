import React from 'react'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Operations
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              2025-09-16
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              12 min read
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            AI 2026: Autonomous Ops and SRE for Agents
          </h1>
          <div className="flex items-center gap-3 text-gray-300">
            <UserIcon className="h-5 w-5" />
            <span className="font-medium">Zion Tech Group</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p>
              Running autonomous agent systems requires a production discipline grounded in SRE. Define SLOs,
              enforce budgets, and wire objective evals into both CI/CD and runtime for continuous assurance.
            </p>
            <h2>Operating model</h2>
            <ul>
              <li>Golden paths with guardrails and canary policies</li>
              <li>Incident taxonomy specific to agent failure modes</li>
              <li>Error budgets per route and per capability</li>
              <li>Blameless postmortems with causal graphs</li>
            </ul>
            <h2>Controls that matter</h2>
            <ul>
              <li>Runtime evals: groundedness, policy compliance, harmful content checks</li>
              <li>Budget policies: token, latency, and external API spend</li>
              <li>Model routing with circuit breakers and auto‑rollback</li>
              <li>Cache strategies and replayable traces for debugging</li>
            </ul>
            <h2>Rollout checklist</h2>
            <ol>
              <li>Define user‑visible SLIs and SLO targets</li>
              <li>Build CI eval suites and production canaries</li>
              <li>Instrument traces and cost telemetry end‑to‑end</li>
              <li>Establish on‑call with playbooks and test them</li>
            </ol>
          </div>
        </article>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Learn practical SRE patterns for reliable autonomous systems.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

