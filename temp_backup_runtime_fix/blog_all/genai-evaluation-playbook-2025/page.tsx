import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GenAI Evaluation Playbook 2025: Ship Quality with Confidence | Zion Tech Group',
  description: 'Master GenAI evaluation and testing strategies for 2025. Learn how to build robust evaluation frameworks, implement automated testing, and ensure quality in production.',
  keywords: 'GenAI evaluation, AI testing, LLM evaluation, AI quality assurance, GenAI testing, AI validation',
  openGraph: {
    title: 'GenAI Evaluation Playbook 2025: Ship Quality with Confidence',
    description: 'Master GenAI evaluation and testing strategies for 2025. Learn how to build robust evaluation frameworks, implement automated testing, and ensure quality in production.',
    type: 'article',
  },
};

export default function GenAIEvaluationPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🧪 EVALUATION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              GenAI Evaluation Playbook 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ship quality GenAI applications with confidence. Master evaluation frameworks, 
              automated testing, and quality assurance strategies for production systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg"
              >
                Get Evaluation Strategy
              </Link>
              <Link
                href="/resources/genai-evaluation-framework-2025"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-lg"
              >
                Download Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-gray-600">Quality Improvement</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-gray-600">Faster Deployment</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-600">Test Coverage</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
              <div className="text-gray-600">Bug Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The GenAI Quality Challenge</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Generative AI applications present unique evaluation challenges. Unlike traditional software, 
              GenAI outputs are non-deterministic, context-dependent, and require sophisticated quality 
              assessment methods. In 2025, proper evaluation is critical for production success.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Why GenAI Evaluation Matters</h3>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">🎯 Key Evaluation Challenges</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Non-Deterministic Outputs</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Same input can produce different outputs</li>
                    <li>• Requires statistical evaluation methods</li>
                    <li>• Need for confidence scoring</li>
                    <li>• A/B testing becomes complex</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Context Sensitivity</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Performance varies by use case</li>
                    <li>• Domain-specific evaluation needed</li>
                    <li>• Cultural and linguistic factors</li>
                    <li>• User-specific preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Evaluation Framework</h3>
            
            <div className="space-y-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">🤖 Automated Evaluation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Intrinsic Metrics</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Perplexity and confidence scoring</li>
                      <li>• BLEU and ROUGE scores</li>
                      <li>• BERTScore for semantic similarity</li>
                      <li>• Task-specific accuracy metrics</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Extrinsic Metrics</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• User satisfaction and engagement</li>
                      <li>• Business impact and ROI</li>
                      <li>• Safety and bias detection</li>
                      <li>• Performance and reliability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">👥 Human Evaluation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Quality Assessment</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Relevance and coherence</li>
                      <li>• Accuracy and completeness</li>
                      <li>• User experience quality</li>
                      <li>• Domain expertise validation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Safety & Bias</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Toxicity and harm detection</li>
                      <li>• Bias and fairness assessment</li>
                      <li>• Privacy and compliance check</li>
                      <li>• Cultural sensitivity evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Success Stories</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🏢 Enterprise AI Platform</h4>
              <p className="text-gray-700 mb-2">
                "Implementing comprehensive GenAI evaluation reduced production issues by 90% and 
                improved user satisfaction by 75%. Our automated testing pipeline catches 99.5% 
                of quality issues before deployment."
              </p>
              <div className="text-sm text-gray-600">- Head of AI Quality, Tech Corp</div>
            </div>

            <div className="bg-orange-600 text-white p-8 rounded-xl text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Ship Quality GenAI?</h4>
              <p className="text-xl mb-6 opacity-90">
                Get expert guidance on GenAI evaluation strategies, implementation, and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Evaluation Strategy Call
                </Link>
                <Link
                  href="/resources/genai-evaluation-framework-2025"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Download Evaluation Framework
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}