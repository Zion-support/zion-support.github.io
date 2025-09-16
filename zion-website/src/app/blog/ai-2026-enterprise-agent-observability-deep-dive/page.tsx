import React from 'react'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function AI2026EnterpriseAgentObservabilityDeepDivePage() {
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
              Observability
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              2025-09-16
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              14 min read
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            AI 2026: Enterprise Agent Observability — Deep Dive
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
              Operating agentic systems in production requires deep, actionable observability. This guide covers
              traces, metrics, logs, and policy signals that together create a trustworthy operating picture.
            </p>
            <h2>Signals to instrument</h2>
            <ul>
              <li>Trace spans per tool call, retrieval step, and model invocation</li>
              <li>Quality signals: groundedness, correctness, helpfulness, safety rubric scores</li>
              <li>Cost and latency SLIs per route, model, and tenant</li>
              <li>Guardrail events: policy violations, overrides, auto‑rollback triggers</li>
            </ul>
            <h2>Architecture blueprint</h2>
            <p>
              Use an event bus to aggregate agent events, a time‑series DB for SLIs, and an index for traces.
              Correlate user sessions to agent tasks with IDs carried across services.
            </p>
            <h2>Dashboards and alerts</h2>
            <ul>
              <li>Experience: p50/p95 latency, error rate, satisfaction proxy</li>
              <li>Quality: eval pass rate by scenario, drift over time</li>
              <li>Cost: tokens, external API spend, cache hit ratio</li>
              <li>Risk: violation rate, override rate, incident MTTR</li>
            </ul>
            <h2>Runbooks</h2>
            <p>
              Standardize diagnosis steps: check traces, recent deploys, eval regressions, and model routing changes.
              Encode remediations like route switch, cache warm, or canary rollback.
            </p>
            <h2>Governance</h2>
            <p>
              Emit audit‑ready evidence: what policy ran, which checks fired, and why a route was chosen.
              Version policies and attach hashes to spans for compliance.
            </p>
          </div>
        </article>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on observability and safe agent operations.
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

