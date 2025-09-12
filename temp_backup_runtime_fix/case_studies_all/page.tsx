import React from 'react';
<<<<<<< HEAD
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Fortune 500 AI Transformation Success: $50M Savings & 300% ROI",
      description: "Complete case study of a Fortune 500 company's successful AI transformation achieving $50M savings and 300% ROI in 18 months.",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      category: "Enterprise AI",
      result: "$50M Savings",
      roi: "300% ROI"
    },
    {
      title: "AI Manufacturing Automation: 40% Cost Reduction Achieved",
      description: "How a Fortune 500 manufacturing company transformed operations with AI automation, achieving unprecedented cost savings and efficiency gains.",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      category: "Manufacturing",
      result: "40% Cost Reduction",
      roi: "60% Efficiency Gain"
    },
    {
      title: "AI Retail Transformation: 300% Revenue Growth",
      description: "How a major retail chain achieved 300% revenue growth through AI-powered personalization, inventory optimization, and customer experience enhancement.",
      href: "/case-studies/ai-retail-transformation-2025",
      icon: "🛒",
      category: "Retail AI",
      result: "300% Growth",
      roi: "60% Cost Reduction"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="AI Success Stories & Case Studies - Real Results | Zion Tech Group"
        description="Discover real AI success stories and case studies showcasing how organizations achieved significant ROI, cost savings, and efficiency gains through AI implementation."
        keywords="AI case studies, AI success stories, AI ROI, AI implementation results, AI transformation case study, enterprise AI success"
        url="/case-studies"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Success Stories & Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover real-world AI transformation success stories showcasing significant ROI, 
                cost savings, and efficiency gains achieved by organizations across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                >
                  Start Your Success Story
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-lg"
                >
                  Download Implementation Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">$2.3B+</div>
                <div className="text-sm opacity-90">Total Client Value Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Successful Implementations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">340%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🏆 Featured Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from real companies. See how AI transformation delivers measurable business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Link key={index} href={study.href} className="group">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                      <div className="text-6xl">{study.icon}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                        <span className="text-gray-500 text-sm">Case Study</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {study.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{study.result}</div>
                          <div className="text-xs text-gray-600">Key Result</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{study.roi}</div>
                          <div className="text-xs text-gray-600">Additional Benefit</div>
                        </div>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
=======
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
>>>>>>> 9fbfc7a36d4591e025989cde08ff7996c1921e36
                        Read Case Study →
                      </span>
                    </div>
                  </div>
<<<<<<< HEAD
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the companies that have transformed their operations with AI. Get expert guidance 
              and proven methodologies to achieve similar results.
=======
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
>>>>>>> 9fbfc7a36d4591e025989cde08ff7996c1921e36
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
<<<<<<< HEAD
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Your AI Transformation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Download Success Framework
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
=======
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
>>>>>>> 9fbfc7a36d4591e025989cde08ff7996c1921e36
  );
}