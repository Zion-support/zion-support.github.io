import React from 'react';
import { Metadata } from 'next';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: Autonomous Warehouse Orchestration (38% Throughput Lift) | Zion Tech Group',
  description: 'How a logistics leader deployed AI agents for picking and routing, increasing throughput by 38% and cutting errors by 27%.',
  keywords: 'warehouse automation, robotics, AI agents, logistics optimization, case study',
  openGraph: {
    title: 'Autonomous Warehouse Orchestration: 38% Throughput Lift',
    description: 'AI agents orchestrating robots and humans increased throughput 38% and reduced errors 27% across three regional hubs.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Logistics', 'Automation', 'Agents', 'Case Study'],
  },
};

export default function WarehouseAutomationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/case-studies" 
              className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Autonomous Warehouse Orchestration: 38% Throughput Lift
            </h1>

            <div className="flex flex-wrap items-center text-amber-100 text-sm space-x-6">
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
                11 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A tier-1 logistics provider orchestrated robots and human pickers with AI agents, optimizing routes, slotting, and task assignment. Within six months, throughput increased 38% and picking errors fell 27% across three regional hubs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">38%</div>
              <div className="text-gray-700">Throughput Lift</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">27%</div>
              <div className="text-gray-700">Error Reduction</div>
            </div>
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">< 9 mo</div>
              <div className="text-gray-700">Payback Period</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Solution</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Digital twin for slotting and route simulation</li>
            <li>Multi-agent task allocation with safety constraints</li>
            <li>Real-time telemetry and SLA tracking</li>
            <li>Human-in-the-loop for exception handling</li>
          </ul>

          <div className="bg-gradient-to-r from-amber-50 to-red-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Explore the Playbook</h3>
            <p className="text-gray-700 mb-6">
              We deploy autonomous orchestration across warehouses and hubs. Start with a pilot that proves value in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors text-center"
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/content-showcase" 
                className="border border-amber-600 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors text-center"
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

