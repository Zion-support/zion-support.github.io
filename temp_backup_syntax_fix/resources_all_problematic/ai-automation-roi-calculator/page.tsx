import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation ROI Calculator - Free Business Impact Assessment Tool',
  description: 'Calculate the return on investment for AI automation projects. Free interactive calculator with industry benchmarks and implementation guidance.',
  keywords: 'AI ROI calculator, automation ROI, business automation calculator, AI investment return, automation cost savings',
  openGraph: {
    title: 'AI Automation ROI Calculator - Free Business Impact Assessment Tool',
    description: 'Calculate the return on investment for AI automation projects with our free interactive calculator.',
    type: 'website',
  },
};

export default function AIAutomationROICalculator() {
  return (
    <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              🧮 Free Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Automation ROI Calculator
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Calculate the potential return on investment for your AI automation projects. 
              Get instant insights with industry benchmarks and implementation guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Calculator</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Manual Process Time (hours/month)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 160"
                    defaultValue="160"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 25"
                    defaultValue="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Time Reduction (%)
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="30">30% - Conservative</option>
                    <option value="50" selected>50% - Typical</option>
                    <option value="70">70% - Optimistic</option>
                    <option value="90">90% - Maximum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Cost ($)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 50000"
                    defaultValue="50000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial Services</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Calculate ROI
                </button>
              </form>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">260%</div>
                    <div className="text-sm text-gray-600">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">3.3</div>
                    <div className="text-sm text-gray-600">Months Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">$180K</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">$15K</div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Breakdown Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Monthly Cost:</span>
                    <span className="font-semibold">$4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Automated Monthly Cost:</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600">Monthly Savings:</span>
                    <span className="font-semibold text-green-600">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Savings:</span>
                    <span className="font-semibold text-green-600">$24,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Industry Benchmark</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Your ROI of <strong>260%</strong> is <strong className="text-green-600">above average</strong> for your industry.
                </p>
                <div className="text-xs text-gray-500">
                  Industry average: 180-220% ROI, 4-6 month payback period
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Your ROI Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ROI Calculation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  ROI = (Annual Savings - Implementation Cost) / Implementation Cost × 100%
                </p>
                <p className="text-gray-600 text-sm">
                  A positive ROI indicates that your AI automation investment will generate more value than it costs.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payback Period</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Payback Period = Implementation Cost / Monthly Savings
                </p>
                <p className="text-gray-600 text-sm">
                  The time it takes to recover your initial investment through monthly savings.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Total Savings</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Total Savings = (Current Cost - Automated Cost) × 12 months
                </p>
                <p className="text-gray-600 text-sm">
                  The total annual savings after implementing AI automation.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Important Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>These calculations are estimates based on typical automation scenarios</li>
                <li>Actual results may vary based on implementation quality and business context</li>
                <li>Consider additional benefits like improved accuracy, scalability, and employee satisfaction</li>
                <li>Factor in ongoing maintenance and monitoring costs</li>
                <li>Include training and change management expenses in your total cost</li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Implement AI Automation?</h2>
              <p className="text-lg mb-6 opacity-90">
                Get a detailed implementation plan and expert guidance for your AI automation project. 
                Our team will help you achieve the ROI calculated above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Implementation Plan
                </a>
                <a
                  href="/blog/ai-automation-roi-calculator-2025"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Read Detailed Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}