import React from 'react';
import { Metadata } from 'next';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: IT Ops Automation with AI Agents (41% MTTR Reduction) | Zion Tech Group',
  description: 'How a global SaaS platform used AI agents to cut MTTR by 41%, automate runbooks, and boost on-call efficiency without compromising SLOs.',
  keywords: 'AIOps, incident response, SRE, MTTR, SLOs, runbooks, platform engineering, case study',
  openGraph: {
    title: 'IT Ops Automation with AI Agents: 41% MTTR Reduction',
    description: 'AI agents automated triage and remediation, reducing MTTR by 41% while maintaining strict SLOs.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AIOps', 'SRE', 'Platform Engineering', 'Case Study'],
  },
};

export default function ITOpsAutomationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/case-studies" 
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT Ops Automation with AI Agents: 41% MTTR Reduction
            </h1>
            
            <div className="flex flex-wrap items-center text-indigo-100 text-sm space-x-6">
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
                10 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A global SaaS platform faced rising incident volume and on-call fatigue. We deployed AI agents to automate triage, diagnostics, and safe remediation against SLO-aware guardrails—cutting MTTR by 41% and reducing after-hours pages by 29%.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Business Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">41%</div>
              <div className="text-gray-700">Lower MTTR</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">29%</div>
              <div className="text-gray-700">Fewer After-hours Pages</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">+5 pts</div>
              <div className="text-gray-700">On-call Satisfaction</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Solution Overview</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Unified context from tracing, logs, metrics, and deploy history</li>
            <li>Runbook grounding with approvals and audit trails</li>
            <li>SLO-aware throttling and flag controls during incidents</li>
            <li>Post-incident learning to improve future recommendations</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Architecture</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Events bus links alerting, deploys, and feature flags</li>
              <li>Guardrail engine evaluates policy-as-code and SLOs</li>
              <li>Executors integrate with cloud, CI/CD, and ticketing</li>
              <li>Observability loop tracks MTTR, change failure rate, and toil</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Want AIOps Without Sacrificing Reliability?</h3>
            <p className="text-gray-700 mb-6">
              We implement safe, auditable automations aligned to your SRE practices and compliance requirements.
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
                className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
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

