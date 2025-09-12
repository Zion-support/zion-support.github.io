import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="AI Success Stories & Case Studies - Real Results from Real Companies"
        description="Discover how leading companies achieve remarkable results with AI. Real case studies with proven outcomes, implementation details, and lessons learned from successful AI transformations."
        keywords="AI case studies, success stories, AI implementation, business transformation, AI results, enterprise AI"
        url="/case-studies"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📊 REAL RESULTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Success Stories & Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how leading companies achieve remarkable results with AI. Real case studies 
              with proven outcomes, implementation details, and lessons learned from successful AI transformations.
            </p>
          </div>

          {/* Featured Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏦</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        Financial Services
                      </span>
                      <span className="text-gray-500 text-sm">Fortune 500 Company</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI Financial Services Transformation: $2.4B Cost Savings Success Story
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      How a Fortune 500 financial services company achieved $2.4B in cost savings, 95% fraud detection accuracy, and 300% operational efficiency through comprehensive AI transformation.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">$2.4B</div>
                        <div className="text-xs text-gray-500">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">95%</div>
                        <div className="text-xs text-gray-500">Fraud Detection</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">300%</div>
                        <div className="text-xs text-gray-500">Efficiency</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏭</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Manufacturing
                      </span>
                      <span className="text-gray-500 text-sm">Global Manufacturing Corp</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      AI Manufacturing Automation: 40% Cost Reduction Success
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Fortune 500 manufacturing company achieves 40% cost reduction and 60% faster processing times through AI-powered automation and predictive maintenance.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">40%</div>
                        <div className="text-xs text-gray-500">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">60%</div>
                        <div className="text-xs text-gray-500">Faster Processing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">$2.3M</div>
                        <div className="text-xs text-gray-500">Annual Savings</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Let us help you achieve similar results with AI. Get a free consultation and 
              discover how AI can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}