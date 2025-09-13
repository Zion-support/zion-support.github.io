import React from 'react';
import { Metadata } from 'next';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LLM Safety Evaluations 2025: From Offline to Production | Zion Tech Group',
  description: 'Practical blueprint for LLM safety evaluations across offline tests, red-teaming, canary deploys, and continuous production feedback loops.',
  keywords: 'LLM safety, evaluations, red teaming, AI guardrails, production AI, policy-as-code',
  openGraph: {
    title: 'LLM Safety Evaluations 2025: From Offline to Production',
    description: 'How to design, run, and operationalize LLM safety evaluations that actually improve production reliability and trust.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI Safety', 'Evaluation', 'Production'],
  },
};

export default function LLMSafetyEvaluations2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-rose-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LLM Safety Evaluations 2025: From Offline to Production
            </h1>

            <div className="flex flex-wrap items-center text-rose-100 text-sm space-x-6">
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
                16 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Safety evaluations must move beyond static benchmarks. This guide outlines a practical framework for offline tests, structured red teaming, gated rollouts, and live production evaluations that create measurable improvements to safety and reliability.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Evaluation Lifecycle</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-8">
            <li>Offline policy tests and jailbreak resistance suites</li>
            <li>Structured red teaming with prompts, tools, and adversarial personas</li>
            <li>Canary deploys with policy-as-code guardrails</li>
            <li>Continuous production feedback with incident reviews</li>
          </ol>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-rose-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">↘</div>
              <div className="text-gray-700">Incident Rate</div>
            </div>
            <div className="bg-fuchsia-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-fuchsia-600 mb-2">↑</div>
              <div className="text-gray-700">Policy Coverage</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">↓</div>
              <div className="text-gray-700">Unsafe Output</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operationalizing Guardrails</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Policy-as-code with versioning and approvals</li>
            <li>Runtime validators for tools and external calls</li>
            <li>Quarantine flows and human-in-the-loop for high risk</li>
            <li>Post-incident reviews and playbooks</li>
          </ul>

          <div className="bg-gradient-to-r from-rose-50 to-indigo-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a Safety Readiness Review?</h3>
            <p className="text-gray-700 mb-6">
              We help teams stand up practical safety evaluations and guardrails that ship. Start with a targeted assessment and roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors text-center"
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/content-showcase" 
                className="border border-rose-600 text-rose-700 px-6 py-3 rounded-lg hover:bg-rose-50 transition-colors text-center"
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

