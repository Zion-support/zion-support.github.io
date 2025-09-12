import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Workforce Transformation 2025: Reskilling at Scale | Zion Tech Group',
  description: 'Practical blueprint for enterprise-wide AI reskilling and workforce transformation with measurable outcomes.',
  keywords: 'AI reskilling, workforce transformation, AI training 2025, enterprise learning',
  openGraph: {
    title: 'AI Workforce Transformation 2025',
    description: 'Blueprint for reskilling at scale with measurable outcomes.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Workforce', 'Strategy']
  }
};

export default function AIWorkforceTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Workforce Transformation 2025</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />18 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A field-tested playbook for reskilling at scale: capability matrices, role maps, and program design that turns AI curiosity into real productivity.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Program Architecture</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Role-based tracks: maker, operator, reviewer</li>
            <li>Hands-on labs and production-adjacent projects</li>
            <li>Measurement: time-to-task, deflection, and quality</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Change Management</h2>
          <p className="text-gray-700 mb-6">Incentives, champions, and lightweight governance that unlock adoption without blocking delivery.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Outcomes</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>42% faster handling time in customer ops</li>
              <li>30% deflection via guided self-service</li>
              <li>Higher compliance through in-flow guardrails</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h3>
            <p className="text-gray-700 mb-6">Use our templates and workshops to accelerate your training rollout.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/resources" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Download Templates</Link>
              <Link href="/contact" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Talk to Experts</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

