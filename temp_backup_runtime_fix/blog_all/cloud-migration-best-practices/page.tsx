import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Cloud & DevOps
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cloud Migration Best Practices: A Complete Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to know about migrating to the cloud successfully, including common pitfalls and proven strategies.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>January 10, 2025</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>By Zion Tech Group Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Migration Strategies</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Rehost (lift and shift) for speed, refactor for long-term ROI</li>
              <li>Prioritize stateless services and define clear rollback plans</li>
              <li>Design for observability: metrics, traces, logs from day one</li>
              <li>Run cost baselines and enforce budgets with guardrails</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reference Architecture</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-600 text-sm">
                A typical migration-ready stack includes IaC (Terraform), containerization (Docker), orchestration (Kubernetes), CI/CD, and a multi-account cloud landing zone.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Mitigation</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Pilot with a non-critical service to validate patterns.</li>
              <li>Use blue-green or canary deployments to control blast radius.</li>
              <li>Automate backups and disaster recovery validation.</li>
              <li>Implement zero-trust networking and secrets management.</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning a Migration?</h3>
              <p className="text-gray-600 mb-6">Our cloud team designs secure, cost-effective migration roadmaps.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Schedule a Call</Link>
                <Link href="/services/cloud-migration" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">Explore Cloud Services</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

