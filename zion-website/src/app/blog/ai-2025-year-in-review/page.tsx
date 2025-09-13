import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI 2025 Year in Review: Breakthroughs, Adoption, and What’s Next | Zion Tech Group',
  description: 'A concise review of 2025 AI breakthroughs, enterprise adoption, unit economics, and where the space is heading in 2026.',
  keywords: 'AI 2025 review, enterprise AI, AI adoption 2025, AI outlook 2026',
  openGraph: {
    title: 'AI 2025 Year in Review',
    description: 'Breakthroughs, adoption, and what’s next for AI.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Strategy', 'Trends']
  }
};

export default function AI2025YearInReview() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI 2025 Year in Review</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />25 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A focused recap of 2025: foundational model advances, realtime agents, unit economics under pressure, and how enterprises actually shipped value with governance and observability.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Major Breakthroughs</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Realtime multimodal agents with tool-use and safe interruptibility</li>
            <li>Efficient inference: quantization, distillation, caching, and routing</li>
            <li>Policy-as-code guardrails with production evaluations</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Enterprise Adoption</h2>
          <p className="text-gray-700 mb-6">Patterns that worked: small surface, measurable ROI, and tight loops between telemetry and product iteration.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">What’s Next in 2026</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Trustworthy realtime agents with enterprise SLAs</li>
              <li>Composable evaluation and governance platforms</li>
              <li>Edge-native deployments for privacy and latency</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Continue Your Journey</h3>
            <p className="text-gray-700 mb-6">Explore our latest case studies and implementation guides to ship reliable AI faster.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/case-studies" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">View Case Studies</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Explore Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

