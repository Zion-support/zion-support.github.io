import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Success Story: How Global Manufacturing Achieved 340% ROI',
  description: 'Real-world case study of a global manufacturing company that achieved 340% ROI through comprehensive AI transformation using Zion Tech Group solutions.',
  keywords: ['AI Transformation', 'Manufacturing', 'ROI', 'Success Story', 'Enterprise AI'],
  openGraph: {
    title: 'AI Transformation Success Story: How Global Manufacturing Achieved 340% ROI',
    description: 'Real-world case study of a global manufacturing company that achieved 340% ROI through comprehensive AI transformation using Zion Tech Group solutions.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI Transformation', 'Manufacturing', 'ROI', 'Success Story', 'Enterprise AI'],
  },
};

export default function SuccessStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📈 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Transformation Success Story
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              How Global Manufacturing Achieved 340% ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A global manufacturing company with $2.8 billion in annual revenue and 15,000+ employees worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
              <div className="text-gray-600">Annual Revenue</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600">Manufacturing Plants</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges Faced</h2>
            <p className="text-xl text-gray-600">
              The company was facing significant operational and competitive challenges that required immediate attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Inefficiency</h3>
              <p className="text-gray-600 mb-4">
                Manual processes were causing significant delays and errors across multiple departments.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 40% of processes were manual</li>
                <li>• Average processing time: 5-7 days</li>
                <li>• Error rate: 15-20%</li>
                <li>• High operational costs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Control Issues</h3>
              <p className="text-gray-600 mb-4">
                High defect rates and customer complaints were impacting brand reputation and profitability.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Defect rate: 8-12%</li>
                <li>• Customer satisfaction: 65%</li>
                <li>• Quality costs: $3.1M annually</li>
                <li>• Brand reputation at risk</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Complexity</h3>
              <p className="text-gray-600 mb-4">
                Inefficient inventory management and logistics were causing delays and increasing costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Inventory turnover: 4.2x annually</li>
                <li>• Logistics costs: $2.3M annually</li>
                <li>• Delivery delays: 25%</li>
                <li>• Supplier coordination issues</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Slow response times and limited personalization were affecting customer satisfaction.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Response time: 48-72 hours</li>
                <li>• Customer satisfaction: 70%</li>
                <li>• Limited personalization</li>
                <li>• High support costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Implementation</h2>
            <p className="text-xl text-gray-600">
              Our comprehensive three-phase approach delivered measurable results across all business areas.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Foundation Building (Months 1-3)</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive assessment and strategic planning established the groundwork for successful implementation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Assessment Results</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• 150+ processes mapped</li>
                        <li>• 40% automation potential identified</li>
                        <li>• $12.8M savings opportunity</li>
                        <li>• 3-year ROI projection: 340%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategic Planning</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Technology roadmap developed</li>
                        <li>• Change management strategy</li>
                        <li>• Resource allocation plan</li>
                        <li>• Success metrics defined</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Pilot Implementation (Months 4-9)</h3>
                  <p className="text-gray-600 mb-4">
                    Targeted pilot projects demonstrated value and built organizational confidence in AI automation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Production Optimization</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• 45% reduction in downtime</li>
                        <li>• 78% reduction in defects</li>
                        <li>• $2.1M annual savings</li>
                        <li>• 60% quality improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Intelligence</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• 35% forecast accuracy improvement</li>
                        <li>• 25% inventory cost reduction</li>
                        <li>• 30% logistics cost reduction</li>
                        <li>• 40% delivery time improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Enterprise Rollout (Months 10-18)</h3>
                  <p className="text-gray-600 mb-4">
                    Successful pilots were expanded across the organization, delivering enterprise-wide transformation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Customer Service</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• 65% response time reduction</li>
                        <li>• 85% customer satisfaction</li>
                        <li>• 40% engagement increase</li>
                        <li>• 25% conversion improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• 50% faster decision-making</li>
                        <li>• 30% strategic planning improvement</li>
                        <li>• 90% compliance violation reduction</li>
                        <li>• 60% risk assessment improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results and Impact</h2>
            <p className="text-xl text-gray-600">
              The transformation delivered exceptional results across all key business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Total Investment</span>
                  <span className="text-2xl font-bold text-green-600">$15.2M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Total Benefits</span>
                  <span className="text-2xl font-bold text-blue-600">$51.7M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">ROI</span>
                  <span className="text-2xl font-bold text-purple-600">340%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Payback Period</span>
                  <span className="text-2xl font-bold text-orange-600">8 months</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operational Improvements</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Production Efficiency</span>
                  <span className="text-2xl font-bold text-gray-900">35%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Process Automation</span>
                  <span className="text-2xl font-bold text-gray-900">70%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Decision Speed</span>
                  <span className="text-2xl font-bold text-gray-900">50%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Resource Utilization</span>
                  <span className="text-2xl font-bold text-gray-900">40%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Key Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">$12.8M</div>
                <div className="text-green-100">Annual Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">18%</div>
                <div className="text-green-100">Revenue Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-green-100">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-green-100">Compliance Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            <p className="text-xl text-gray-600">
              Key insights and best practices that contributed to the project's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-gray-700">Strong executive sponsorship and support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-gray-700">Phased implementation approach for risk mitigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-gray-700">Focus on data quality and governance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-gray-700">Comprehensive change management strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">!</div>
                  <span className="text-gray-700">Integration with legacy systems and processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">!</div>
                  <span className="text-gray-700">Overcoming resistance to change</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">!</div>
                  <span className="text-gray-700">Addressing skill gaps and training needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">!</div>
                  <span className="text-gray-700">Managing implementation risks and challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you transform your business with proven AI solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}