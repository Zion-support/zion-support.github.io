"use client";
import React, { useState, useEffect } from 'react';

const UltimateROICalculator2025 = () => {
  const [formData, setFormData] = useState({
    currentRevenue: 1000000,
    employees: 50,
    industry: 'technology',
    automationLevel: 'medium',
    timeFrame: 12
  });

  const [results, setResults] = useState({
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0,
    monthlySavings: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    technology: 1.5,
    healthcare: 1.3,
    finance: 1.4,
    manufacturing: 1.6,
    retail: 1.2,
    education: 1.1
  };

  const automationMultipliers = {
    low: 0.3,
    medium: 0.6,
    high: 1.0,
    extreme: 1.5
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industryMultiplier = industryMultipliers[formData.industry] || 1.0;
      const automationMultiplier = automationMultipliers[formData.automationLevel] || 0.6;
      
      // Base calculations
      const baseCostSavings = formData.currentRevenue * 0.15 * industryMultiplier * automationMultiplier;
      const baseRevenueIncrease = formData.currentRevenue * 0.25 * industryMultiplier * automationMultiplier;
      
      // Time frame adjustment
      const timeMultiplier = formData.timeFrame / 12;
      
      const costSavings = baseCostSavings * timeMultiplier;
      const revenueIncrease = baseRevenueIncrease * timeMultiplier;
      const totalROI = ((costSavings + revenueIncrease) / (formData.currentRevenue * 0.1)) * 100;
      const paybackPeriod = 12 / (totalROI / 100);
      const monthlySavings = (costSavings + revenueIncrease) / formData.timeFrame;

      setResults({
        costSavings: Math.round(costSavings),
        revenueIncrease: Math.round(revenueIncrease),
        totalROI: Math.round(totalROI),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        monthlySavings: Math.round(monthlySavings)
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ultimate AI ROI Calculator 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential return on investment with our advanced AI solutions. See how much you could save and earn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Details</h3>
            
            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="50"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                </select>
              </div>

              {/* Automation Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Automation Level
                </label>
                <select
                  value={formData.automationLevel}
                  onChange={(e) => handleInputChange('automationLevel', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="low">Low (30% automation)</option>
                  <option value="medium">Medium (60% automation)</option>
                  <option value="high">High (100% automation)</option>
                  <option value="extreme">Extreme (150%+ automation)</option>
                </select>
              </div>

              {/* Time Frame */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Time Frame (months)
                </label>
                <input
                  type="number"
                  value={formData.timeFrame}
                  onChange={(e) => handleInputChange('timeFrame', parseInt(e.target.value) || 12)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="12"
                />
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Main ROI Result */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">
                {isCalculating ? '...' : `${results.totalROI}%`}
              </div>
              <div className="text-xl opacity-90">Total ROI</div>
              <div className="text-sm opacity-75 mt-2">
                Over {formData.timeFrame} months
              </div>
            </div>

            {/* Detailed Results */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      ${results.costSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-3xl">💵</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${results.revenueIncrease.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Revenue Increase</div>
                  </div>
                  <div className="text-3xl">📈</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-gray-600">Payback Period</div>
                  </div>
                  <div className="text-3xl">⏱️</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="text-3xl">💰</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Achieve These Results?</h4>
              <p className="text-white/90 mb-4">
                Our AI solutions have helped businesses achieve even higher ROI than calculated.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Real Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,400%</div>
              <div className="text-gray-600 mb-4">ROI Achieved</div>
              <div className="text-sm text-gray-500">
                "Zion Tech 'Group', 's AI solutions transformed our operations completely. The ROI exceeded all expectations."
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-2">- Fortune 500 CEO</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M</div>
              <div className="text-gray-600 mb-4">Cost Savings</div>
              <div className="text-sm text-gray-500">
                "We saved over $50 million in the first year alone with their AI automation solutions."
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-2">- Global Enterprise</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6 months</div>
              <div className="text-gray-600 mb-4">Payback Period</div>
              <div className="text-sm text-gray-500">
                "The investment paid for itself in just 6 months. Incredible results!"
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-2">- Tech Startup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateROICalculator2025;