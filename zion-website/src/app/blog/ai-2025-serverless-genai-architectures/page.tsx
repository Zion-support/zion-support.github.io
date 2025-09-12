import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Serverless GenAI Architectures (2025) | Zion Tech Group',
  description: 'Event-driven GenAI on AWS/GCP/Azure with functions, queues, vector DBs, eval pipelines, and policy guardrails.',
  keywords: 'serverless GenAI, event-driven AI, vector database, evaluations, policy guardrails, cloud architecture',
  openGraph: {
    title: 'Serverless GenAI Architectures (2025)',
    description: 'Functions, queues, vector DBs, and guardrails for scalable, cost-efficient GenAI.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Architecture', 'Serverless', 'Cloud'],
  },
};

export default function ServerlessGenAI2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <span className="h-4 w-4 mr-2">←</span>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Serverless GenAI Architectures (2025)</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 14 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Serverless patterns enable bursty, pay-per-use GenAI workloads with high reliability. This playbook
            covers event-driven orchestration, retrieval integration, evaluations, and guardrails to ship safely at
            low cost.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reference Architecture</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>API Gateway / Functions for request ingress and tool actions</li>
            <li>Queues/Streams (SQS, Pub/Sub, EventBridge) for decoupled flows</li>
            <li>Vector DB + Object Store for retrieval and grounding</li>
            <li>Eval pipeline for quality, safety, and cost regression checks</li>
            <li>Policy-as-code guardrails enforced at function boundaries</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Concerns</h3>
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cold starts: provisioned concurrency and connection pooling</li>
              <li>Cost controls: model routing, caching, and batchable stages</li>
              <li>Observability: traces across events, prompts, and tools</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need an Architecture Review?</h3>
            <p className="text-gray-700 mb-6">
              We design serverless GenAI stacks with strong guardrails and cost efficiency across AWS, GCP, and Azure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Talk to Experts</Link>
              <Link href="/case-studies" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">See Case Studies</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

