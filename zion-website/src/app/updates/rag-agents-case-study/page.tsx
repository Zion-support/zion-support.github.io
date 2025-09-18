<<<<<<< HEAD
'use client'

import React from 'react'

export default function RagAgentsCaseStudyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Case Study: RAG Agents Reduce MTTR by 42%</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          How observability-driven retrieval-augmented agents reduced incident mean time to resolution
          and support costs in a Fortune 500 environment.
        </p>

        <div className="mt-10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Highlights</h2>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li>42% reduction in MTTR across high-severity incidents</li>
              <li>38% reduction in L2/L3 support handoffs</li>
              <li>End-to-end traceability with retrieval observability</li>
              <li>Guardrails for safety and cost-aware model routing</li>
            </ul>
          </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Architecture</h2>
              <p className="mt-2">Hybrid retrieval, structured tools, and feedback loops powering rapid diagnosis.</p>
            </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Learn more</h2>
            <a href="/contact" className="inline-block mt-4 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
              Request the full case study <span aria-hidden>→</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

=======
import React from 'react';

export default function RagAgentsCaseStudyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            RAG Agents Case Study
          </h1>
          
          <div className="text-lg text-gray-300 mb-8">
            Real-world implementation and performance analysis of retrieval-augmented generation agents in production environments.
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              This comprehensive case study examines the implementation and performance of retrieval-augmented generation (RAG) 
              agents in real-world production environments. Learn from actual deployments, performance metrics, and 
              lessons learned from enterprise implementations.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Case Studies</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Enterprise knowledge management systems</li>
              <li>• Customer support automation platforms</li>
              <li>• Research and development assistance tools</li>
              <li>• Document processing and analysis systems</li>
              <li>• Multi-modal content generation platforms</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Insights</h2>
            <p className="text-gray-300 leading-relaxed">
              Discover the key insights, best practices, and performance optimizations learned from real-world 
              RAG agent deployments. Includes performance benchmarks, scalability considerations, and 
              implementation recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
