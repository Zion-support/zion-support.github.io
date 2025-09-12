import React from 'react';
import Link from 'next/link';

export default function EnterpriseRAGArchitecture2025() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-indigo-50 to-purple-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full mb-6'>
              <span>📚</span>
              Retrieval-Augmented Generation
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Enterprise RAG Architecture 2025: Reliable, Governed, and Cost-Aware
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Reference patterns for hybrid retrieval, governance, evals, and measurable ROI in production. 
              Build enterprise-grade RAG systems that deliver accurate, cost-effective results at scale.
            </p>
            <div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
              <span>📅 January 15, 2025</span>
              <span>⏱️ 10 min read</span>
              <span>👥 2.1K views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
              Retrieval-Augmented Generation (RAG) has become the cornerstone of enterprise AI applications, 
              but building production-ready RAG systems requires careful architectural decisions. This guide 
              covers the essential patterns, governance strategies, and cost controls needed for enterprise RAG success.
            </p>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>The Enterprise RAG Challenge</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              While RAG promises to ground AI responses in accurate, up-to-date information, enterprise 
              implementations face unique challenges around scale, governance, and cost control.
            </p>

            <div className='bg-red-50 border-l-4 border-red-400 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-red-900 mb-2'>Common Enterprise RAG Pitfalls</h3>
              <ul className='text-red-800 space-y-2'>
                <li>• Hallucination and inaccurate responses in production</li>
                <li>• Explosive costs from inefficient retrieval and generation</li>
                <li>• Data privacy and compliance violations</li>
                <li>• Poor performance and user experience</li>
                <li>• Lack of observability and debugging capabilities</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Reference Architecture</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              A well-designed enterprise RAG system consists of several interconnected components, 
              each handling specific aspects of the retrieval and generation pipeline.
            </p>

            <div className='bg-gray-50 rounded-lg p-6 mb-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Core RAG Components</h3>
              <div className='space-y-4'>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>1. Data Ingestion Layer</h4>
                  <p className='text-sm text-gray-600'>Document processing, chunking strategies, and metadata extraction</p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>2. Vector Store & Retrieval</h4>
                  <p className='text-sm text-gray-600'>Embedding storage, similarity search, and hybrid retrieval strategies</p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>3. Generation Engine</h4>
                  <p className='text-sm text-gray-600'>LLM orchestration, prompt engineering, and response synthesis</p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>4. Governance & Control</h4>
                  <p className='text-sm text-gray-600'>Access controls, audit logging, and compliance monitoring</p>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Hybrid Retrieval Strategies</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Effective enterprise RAG systems combine multiple retrieval approaches to balance 
              accuracy, performance, and cost. Here are the key strategies:
            </p>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Dense Retrieval</h3>
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6'>
              <h4 className='font-semibold text-blue-900 mb-2'>Best for: Semantic similarity and conceptual queries</h4>
              <ul className='text-blue-800 space-y-1 text-sm'>
                <li>• Uses vector embeddings for semantic search</li>
                <li>• Excellent for finding conceptually related content</li>
                <li>• Requires high-quality embedding models</li>
                <li>• Can be expensive for large document collections</li>
              </ul>
            </div>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Sparse Retrieval</h3>
            <div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-6'>
              <h4 className='font-semibold text-green-900 mb-2'>Best for: Keyword matching and exact phrase queries</h4>
              <ul className='text-green-800 space-y-1 text-sm'>
                <li>• Uses traditional keyword-based search (BM25, TF-IDF)</li>
                <li>• Fast and cost-effective for large datasets</li>
                <li>• Good for finding specific terms and phrases</li>
                <li>• May miss semantically similar but different wording</li>
              </ul>
            </div>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Hybrid Approach</h3>
            <div className='bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8'>
              <h4 className='font-semibold text-purple-900 mb-2'>Best for: Production enterprise systems</h4>
              <ul className='text-purple-800 space-y-1 text-sm'>
                <li>• Combines dense and sparse retrieval results</li>
                <li>• Uses learned ranking models to optimize results</li>
                <li>• Balances accuracy, performance, and cost</li>
                <li>• Requires more complex implementation and tuning</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Governance and Compliance</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Enterprise RAG systems must meet strict governance requirements for data privacy, 
              security, and regulatory compliance. Here's how to build governance into your architecture:
            </p>

            <div className='grid md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>Data Privacy Controls</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• PII detection and masking in documents</li>
                  <li>• Role-based access to sensitive information</li>
                  <li>• Data retention and deletion policies</li>
                  <li>• Audit trails for all data access</li>
                </ul>
              </div>
              
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>Response Validation</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• Fact-checking against source documents</li>
                  <li>• Confidence scoring for generated responses</li>
                  <li>• Human review workflows for sensitive topics</li>
                  <li>• Automated quality monitoring and alerting</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Cost Optimization Strategies</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              RAG systems can quickly become expensive without proper cost controls. Here are 
              proven strategies to optimize costs while maintaining quality:
            </p>

            <div className='space-y-6 mb-8'>
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>1. Intelligent Caching</h3>
                <p className='text-gray-700 text-sm mb-3'>
                  Cache frequently accessed embeddings and generated responses to reduce API calls.
                </p>
                <div className='bg-green-50 p-3 rounded text-sm text-green-800'>
                  <strong>Impact:</strong> 60-80% reduction in LLM API costs for repeated queries
                </div>
              </div>
              
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>2. Query Routing</h3>
                <p className='text-gray-700 text-sm mb-3'>
                  Route simple queries to cheaper models and complex queries to more capable models.
                </p>
                <div className='bg-green-50 p-3 rounded text-sm text-green-800'>
                  <strong>Impact:</strong> 40-50% cost reduction while maintaining response quality
                </div>
              </div>
              
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>3. Document Preprocessing</h3>
                <p className='text-gray-700 text-sm mb-3'>
                  Optimize document chunking and preprocessing to reduce retrieval noise and improve efficiency.
                </p>
                <div className='bg-green-50 p-3 rounded text-sm text-green-800'>
                  <strong>Impact:</strong> 30-40% improvement in retrieval accuracy and speed
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Evaluation and Monitoring</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Continuous evaluation is critical for maintaining RAG system quality. Implement 
              comprehensive monitoring across multiple dimensions:
            </p>

            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Key Evaluation Metrics</h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>Retrieval Quality</h4>
                  <ul className='text-gray-700 space-y-1 text-sm'>
                    <li>• Precision@K and Recall@K</li>
                    <li>• Mean Reciprocal Rank (MRR)</li>
                    <li>• Hit Rate and Coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>Generation Quality</h4>
                  <ul className='text-gray-700 space-y-1 text-sm'>
                    <li>• Factual accuracy and grounding</li>
                    <li>• Response relevance and completeness</li>
                    <li>• User satisfaction scores</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Implementation Roadmap</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Building an enterprise RAG system is a journey. Follow this phased approach 
              to ensure success:
            </p>

            <div className='space-y-6 mb-8'>
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Phase 1: Foundation (Weeks 1-4)</h3>
                <ul className='text-gray-700 space-y-1 text-sm'>
                  <li>• Set up basic RAG pipeline with single data source</li>
                  <li>• Implement simple dense retrieval</li>
                  <li>• Add basic monitoring and logging</li>
                  <li>• Create initial evaluation framework</li>
                </ul>
              </div>
              
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Phase 2: Enhancement (Weeks 5-8)</h3>
                <ul className='text-gray-700 space-y-1 text-sm'>
                  <li>• Add hybrid retrieval strategies</li>
                  <li>• Implement caching and cost optimization</li>
                  <li>• Add governance and compliance controls</li>
                  <li>• Expand to multiple data sources</li>
                </ul>
              </div>
              
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Phase 3: Scale (Weeks 9-12)</h3>
                <ul className='text-gray-700 space-y-1 text-sm'>
                  <li>• Implement advanced evaluation metrics</li>
                  <li>• Add automated quality monitoring</li>
                  <li>• Optimize for enterprise scale and performance</li>
                  <li>• Deploy to production with full observability</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Real-World Success Story</h2>
            
            <div className='bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 mb-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Fortune 500 Financial Services</h3>
              <p className='text-gray-700 mb-4'>
                "We implemented enterprise RAG for our customer service knowledge base, serving 
                50,000+ daily queries with 95% accuracy. The hybrid retrieval approach reduced 
                response time by 70% while cutting costs by 60% compared to our previous system."
              </p>
              <div className='grid md:grid-cols-3 gap-4 text-center'>
                <div>
                  <div className='text-2xl font-bold text-green-600'>95%</div>
                  <div className='text-sm text-gray-600'>Accuracy Rate</div>
                </div>
                <div>
                  <div className='text-2xl font-bold text-blue-600'>70%</div>
                  <div className='text-sm text-gray-600'>Faster Response</div>
                </div>
                <div>
                  <div className='text-2xl font-bold text-purple-600'>60%</div>
                  <div className='text-sm text-gray-600'>Cost Reduction</div>
                </div>
              </div>
              <div className='text-sm text-gray-600 mt-4 text-center'>
                - Head of AI, Fortune 500 Financial Services
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Getting Started</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Ready to build your enterprise RAG system? Start with our comprehensive 
              implementation guide and get expert support from our team.
            </p>

            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8 text-center'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Build Your Enterprise RAG System?</h3>
              <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                Download our comprehensive Enterprise RAG Implementation Guide and get started 
                with proven patterns that have helped 200+ companies succeed.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/resources/ai-implementation-checklist'
                  className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors'
                >
                  Download Implementation Guide
                </Link>
                <Link
                  href='/contact'
                  className='border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors'
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Related Articles</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Link href='/blog/ai-platform-engineering-2025' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2'>
                  AI Platform Engineering in 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Foundations, guardrails, and patterns to ship AI features safely at scale.
                </p>
              </div>
            </Link>
            <Link href='/blog/ai-cost-optimization-2025' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2'>
                  AI Cost Optimization in 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Practical techniques to reduce LLM and vector costs without hurting outcomes.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}