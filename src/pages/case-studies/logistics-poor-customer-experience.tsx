import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building2, 
  BarChart3, 
  CheckCircle2,
  Trophy 
} from 'lucide-react';

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>Logistics Case Study: 99% accuracy improvement | Zion Tech Group</title>
        <meta name="description" content="Learn how we helped Logistics Solutions Inc achieve 99% accuracy improvement through Anomaly detection." />
        <meta property="og:title" content="Logistics Case Study | Zion Tech Group" />
        <meta property="og:description" content="99% accuracy improvement" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies/logistics-poor-customer-experience" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Header */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-semibold text-gray-700">Logistics Industry</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                How Logistics Solutions Inc Achieved 99% accuracy improvement
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                A comprehensive case study on transforming logistics operations through 
                anomaly detection and AI automation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Logistics Solutions Inc was facing significant challenges with poor customer experience. 
                  This was impacting their ability to compete effectively and serve their customers at the level they expected.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The leadership team recognized that traditional approaches wouldn't be sufficient to address 
                  these issues. They needed a comprehensive solution that could leverage cutting-edge technology 
                  while remaining practical and cost-effective.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Key Challenges:</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Poor customer experience</li>
                    <li>• Outdated legacy systems limiting innovation</li>
                    <li>• High operational costs reducing profitability</li>
                    <li>• Difficulty scaling operations to meet demand</li>
                    <li>• Lack of real-time insights for decision-making</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Zion Tech Group partnered with Logistics Solutions Inc to implement anomaly detection 
                  that would address their challenges comprehensively. Our approach combined cutting-edge AI 
                  technology with proven implementation methodologies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                    <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery Phase</h3>
                    <p className="text-gray-700">
                      Comprehensive analysis of existing systems, workflows, and pain points to identify 
                      the optimal solution architecture.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                    <CheckCircle2 className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
                    <p className="text-gray-700">
                      Phased rollout of anomaly detection with minimal disruption to ongoing operations.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                    <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Support</h3>
                    <p className="text-gray-700">
                      Comprehensive training program to ensure the team could fully leverage the new capabilities.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
                    <CheckCircle2 className="w-10 h-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
                    <p className="text-gray-700">
                      Continuous monitoring and refinement to maximize performance and ROI over time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-12 h-12" />
                <h2 className="text-4xl font-bold">The Results</h2>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Within 12 months of implementation, Logistics Solutions Inc achieved remarkable results that 
                exceeded all expectations. The transformation was so successful that they've now become 
                a model for other organizations in the logistics industry.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">99%</div>
                  <div className="text-blue-100">Primary Metric Improvement</div>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">50%</div>
                  <div className="text-blue-100">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-blue-100">Customer Satisfaction</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Key Achievements:</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>99% accuracy improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Significant reduction in manual processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Enhanced real-time analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Improved employee satisfaction and productivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Scalable infrastructure for future growth</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 shadow-2xl text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help your organization transform through AI automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-10 py-4 bg-gray-100 text-gray-700 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
                >
                  View More Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
