import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: AI Customer Service Transformation | Zion Tech Group',
  description: 'How a leading e-commerce company achieved 90% CSAT and 60% cost reduction with AI-powered customer service.',
  openGraph: {
    title: 'AI Customer Service Transformation Case Study',
    description: '90% CSAT and 60% cost reduction with AI customer service.',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Customer Service', 'AI'],
  },
};

export default function AICustomerServiceTransformation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              ← Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Customer Service: 90% Satisfaction</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>January 20, 2025</div>
              <div>12 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            This case study details how we transformed a global retailer's customer service using AI assistants, deflection flows, and smart escalation—unlocking major gains in satisfaction and cost efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">90%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">-60%</div>
              <div className="text-gray-700">Support Costs</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">+35%</div>
              <div className="text-gray-700">Agent Productivity</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Solution Overview</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Self-service AI assistant for top intents with dynamic forms</li>
            <li>Knowledge-driven responses with citations and guardrails</li>
            <li>Smart escalation to human agents with context handoff</li>
            <li>Workforce management integration and analytics</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Explore Similar Wins</h3>
            <p className="text-gray-700 mb-6">See how AI drives measurable outcomes across support and operations.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Discuss Your Use Case</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Browse More Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

