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