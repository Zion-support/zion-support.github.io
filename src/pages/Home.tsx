import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build and scale with{' '}
            <span className="text-blue-600">AI</span>,{' '}
            <span className="text-green-600">Micro SaaS</span>{' '}
            and{' '}
            <span className="text-purple-600">Enterprise IT</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
            automation, cloud infra, and secure micro SaaS products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Services
            </Link>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Visit Main Site
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Micro SaaS</h3>
            <p className="text-gray-600">
              End-to-end product engineering with billing, auth, analytics and growth.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Services</h3>
            <p className="text-gray-600">
              LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">IT Services</h3>
            <p className="text-gray-600">
              Cloud migration, DevOps, SRE, security hardening and cost optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}