import React from 'react';
import { Metadata } from 'next';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LLM Observability 2025: Metrics, Traces, and Guardrails | Zion Tech Group',
  description: 'A practical guide to end-to-end LLM observability in 2025: metrics, traces, evaluations, red teaming, and guardrails in production.',
  keywords: 'LLM observability, AI monitoring, tracing, evaluations, guardrails, red teaming, production AI',
  openGraph: {
    title: 'LLM Observability 2025: Metrics, Traces, and Guardrails',
    description: 'Build reliable AI systems with comprehensive observability: capture metrics, traces, evaluations, and enforce guardrails at runtime.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['LLM', 'Observability', 'AI Safety', 'Monitoring'],
  },
};

export default function LLMObservability2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LLM Observability 2025: Metrics, Traces, and Guardrails
            </h1>
            
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-2" />
                Zion Tech Group
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                September 12, 2025
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" />
                19 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Reliable AI requires deep visibility. In 2025, leading teams unify metrics, traces, evaluations, and policy guardrails to monitor and improve LLM systems across the entire lifecycle.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What To Observe</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Quality: response relevance, faithfulness, toxicity, safety violations</li>
            <li>Latency and cost: per-call latency, token usage, cache hit rates</li>
            <li>Reliability: timeouts, fallbacks, degraded modes, incident rates</li>
            <li>User feedback: thumbs up/down, task completion, satisfaction</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Signals and Telemetry</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Structured traces for every tool call and model hop</li>
              <li>Prompt and response snapshots with PII-safe redaction</li>
              <li>Evaluation hooks: offline test sets and online canaries</li>
              <li>Guardrail events: policy matches, overrides, and mitigations</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Runtime Guardrails</h3>
          <p className="text-gray-700 mb-6">
            Enforce policy-as-code before and after model calls. Use classifiers and regex/AST validators to catch unsafe outputs and route to safer models or human review.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Playbook</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">SLOs</div>
              <div className="text-gray-700">Define quality, latency, and cost SLOs</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Tracing</div>
              <div className="text-gray-700">Propagate request IDs across tools</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">Evals</div>
              <div className="text-gray-700">Continuous evals with feedback loops</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Production-Grade Observability?</h3>
            <p className="text-gray-700 mb-6">
              We help teams implement end-to-end observability and guardrails for LLM applications. Get a roadmap and a working pilot in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/content-showcase" 
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                Explore More Content
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

