import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building Scalable AI Infrastructure | Zion Tech Group',
  description: 'Design and implement AI infrastructure that scales: data pipelines, feature stores, training platforms, and serving stacks.',
  keywords: ['AI Infrastructure', 'MLOps', 'Scalability', 'Data Pipelines', 'Model Serving'],
  openGraph: {
    title: 'Building Scalable AI Infrastructure',
    description: 'Blueprints for scalable data, training, and serving architectures in 2025.',
    type: 'article',
    publishedTime: '2025-01-25T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['MLOps', 'Infrastructure'],
  },
};

export default function ScalableAIInfrastructure() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Scalable AI Infrastructure</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>January 25, 2025</div>
              <div>20 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A resilient AI platform aligns data engineering, training, and serving into a cohesive lifecycle. This guide outlines pragmatic patterns we deploy across industries.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Core Components</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Reliable data ingestion and feature pipelines with backfills</li>
            <li>Feature store with online/offline parity</li>
            <li>Training orchestration and experiment tracking</li>
            <li>Model registry and progressive delivery</li>
            <li>Observability: data/feature, training, serving</li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reference Stack</h2>
          <p className="text-gray-700 mb-6">Cloud-native, IaC-managed, with cost and latency SLOs enforced in CI/CD.</p>
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Outcomes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">-40%</div>
                <div className="text-gray-700">Infra costs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">3x</div>
                <div className="text-gray-700">Release cadence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">99.9%</div>
                <div className="text-gray-700">Uptime</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Build With Confidence</h3>
            <p className="text-gray-700 mb-6">We design and implement scalable AI platforms, from MVP to enterprise scale.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Get in Touch</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Explore More Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

