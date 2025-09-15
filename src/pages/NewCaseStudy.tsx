import React from 'react';
import { SEO } from '../components/SEO';
import { CheckCircle, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

export const NewCaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Case Study: Global Manufacturing Company AI Transformation - Zion Tech Group"
        description="How Zion Tech Group helped a global manufacturing company achieve 40% cost reduction and 60% efficiency improvement through AI implementation."
        keywords="Case Study, AI Implementation, Manufacturing, Cost Reduction, Efficiency"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Study: Global Manufacturing Company AI Transformation
            </h1>
            <p className="text-xl text-green-100 mb-8">
              How we helped a Fortune 500 manufacturer achieve 40% cost reduction and 60% efficiency improvement through AI implementation.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <span>Industry: Manufacturing</span>
              <span>Company Size: 10,000+ employees</span>
              <span>Project Duration: 6 months</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Overview */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Transformation Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">$2.3M</h3>
                <p className="text-gray-600">Annual Cost Savings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">60%</h3>
                <p className="text-gray-600">Efficiency Improvement</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-600 mb-2">45%</h3>
                <p className="text-gray-600">Faster Delivery Times</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-orange-600 mb-2">35%</h3>
                <p className="text-gray-600">Customer Satisfaction Increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Critical Business Issues</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>High operational costs due to inefficient supply chain management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Frequent supply chain disruptions affecting production schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Manual processes leading to errors and delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Lack of real-time visibility into operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Difficulty in predicting demand and optimizing inventory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">AI-Powered Supply Chain Optimization</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Real-time demand forecasting using machine learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Automated inventory management and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Predictive maintenance for equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Intelligent route optimization for logistics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Process Automation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Automated order processing and fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Smart quality control and defect detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Automated reporting and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Intelligent scheduling and resource allocation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Implementation Process</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Assessment & Planning</h3>
                  <p className="text-gray-600">Comprehensive analysis of current operations, identification of optimization opportunities, and development of a customized AI transformation roadmap.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">System Design & Development</h3>
                  <p className="text-gray-600">Custom AI solution development, integration with existing systems, and comprehensive testing to ensure seamless operation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pilot Implementation</h3>
                  <p className="text-gray-600">Phased rollout starting with critical areas, monitoring performance, and making necessary adjustments before full deployment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Full Deployment & Optimization</h3>
                  <p className="text-gray-600">Complete system deployment, staff training, and ongoing optimization to maximize performance and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Let Zion Tech Group help you achieve similar results with our cutting-edge AI solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};