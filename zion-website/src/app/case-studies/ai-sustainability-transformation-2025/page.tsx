import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Sustainability Transformation: 60% Energy Reduction | Zion Tech Group',
  description: 'Case study detailing how an enterprise achieved 60% energy reduction and carbon neutrality with AI-led optimizations.',
  keywords: 'AI sustainability, energy reduction, case study, carbon neutrality',
  openGraph: {
    title: 'AI Sustainability Transformation Case Study',
    description: 'How AI delivered 60% energy reduction and carbon neutrality.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Sustainability', 'Case Study']
  }
};

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Sustainability Transformation</h1>
            <div className="flex flex-wrap items-center text-emerald-100 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />12 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            An enterprise energy optimization program driven by AI cut energy usage by 60% and achieved carbon neutrality within 18 months.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Objectives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Reduce energy consumption and peak loads</li>
            <li>Optimize HVAC and industrial equipment schedules</li>
            <li>Transition to renewable sources with storage</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation</h2>
          <p className="text-gray-700 mb-6">We deployed predictive control, anomaly detection, and reinforcement learning for dynamic setpoints with guardrails for safety and comfort.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-emerald-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
              <div className="text-gray-700">Energy Reduction</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">-40%</div>
              <div className="text-gray-700">Peak Load</div>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Neutral</div>
              <div className="text-gray-700">Carbon Status</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get the Playbook</h3>
            <p className="text-gray-700 mb-6">We packaged the approach into templates and checklists.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/resources" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">Download Toolkit</Link>
              <Link href="/contact" className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors text-center">Discuss a Pilot</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

