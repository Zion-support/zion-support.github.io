"use client";
import React, { useState, useEffect } from 'react';

const InteractiveROICalculator2025 = () => {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'manufacturing',
    currentRevenue: 10000000,
    currentEmployees: 100,
    currentEfficiency: 70,
    aiInvestment: 500000,
    implementationTime: 12
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    costSavings: 0,
    revenueIncrease: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    productivityBoost: 0
  });

  const industryMultipliers = {
    manufacturing: { roi: 1.5, efficiency: 1.3, productivity: 1.4 },
    healthcare: { roi: 1.8, efficiency: 1.5, productivity: 1.6 },
    financial: { roi: 1.6, efficiency: 1.4, productivity: 1.5 },
    retail: { roi: 1.3, efficiency: 1.2, productivity: 1.3 },
    technology: { roi: 1.4, efficiency: 1.3, productivity: 1.4 },
    other: { roi: 1.2, efficiency: 1.1, productivity: 1.2 }
  };

  const sizeMultipliers = {
    small: { baseROI: 800, baseEfficiency: 25, baseProductivity: 200 },
    medium: { baseROI: 1200, baseEfficiency: 35, baseProductivity: 280 },
    large: { baseROI: 1800, baseEfficiency: 45, baseProductivity: 350 },
    enterprise: { baseROI: 2500, baseEfficiency: 55, baseProductivity: 400 }
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const industry = industryMultipliers[formData.industry];
    const size = sizeMultipliers[formData.companySize];
    
    // Base calculations
    const baseROI = size.baseROI * industry.roi;
    const baseEfficiencyGain = size.baseEfficiency * industry.efficiency;
    const baseProductivityBoost = size.baseProductivity * industry.productivity;
    
    // Revenue-based calculations
    const revenueMultiplier = Math.log10(formData.currentRevenue / 1000000) + 1;
    const employeeMultiplier = Math.log10(formData.currentEmployees / 10) + 1;
    
    // Final calculations
    const projectedROI = Math.round(baseROI * revenueMultiplier * employeeMultiplier);
    const costSavings = Math.round(formData.currentRevenue * (baseEfficiencyGain / 100) * 0.3);
    const revenueIncrease = Math.round(formData.currentRevenue * (baseProductivityBoost / 100) * 0.4);
    const paybackPeriod = Math.round((formData.aiInvestment / (costSavings + revenueIncrease)) * 12);
    const efficiencyGain = Math.round(baseEfficiencyGain);
    const productivityBoost = Math.round(baseProductivityBoost);

    setResults({
      projectedROI,
      costSavings,
      revenueIncrease,
      paybackPeriod,
      efficiencyGain,
      productivityBoost
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(1)}B`;
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">🧮</span>
            INTERACTIVE ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Calculate Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI transformation. 
            Get personalized projections based on your company size, industry, and current metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Company Details</h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'small', label: 'Small (10-50 employees)', icon: '🏢' },
                    { value: 'medium', label: 'Medium (51-200 employees)', icon: '🏭' },
                    { value: 'large', label: 'Large (201-1000 employees)', icon: '🏢' },
                    { value: 'enterprise', label: 'Enterprise (1000+ employees)', icon: '🏗️' }
                  ].map((size) => (
                    <button
                      key={size.value}
                      onClick={() => handleInputChange('companySize', size.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.companySize === size.value
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="text-2xl mb-2">{size.icon}</div>
                      <div className="text-sm font-semibold">{size.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="10,000,000"
                  />
                </div>
              </div>

              {/* Current Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="100"
                />
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Operational Efficiency (%)
                </label>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>20%</span>
                  <span className="font-semibold text-purple-600">{formData.currentEfficiency}%</span>
                  <span>95%</span>
                </div>
              </div>

              {/* AI Investment */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Planned AI Investment
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.aiInvestment}
                    onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="500,000"
                  />
                </div>
              </div>

              {/* Implementation Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  min="6"
                  max="36"
                  value={formData.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>6 months</span>
                  <span className="font-semibold text-purple-600">{formData.implementationTime} months</span>
                  <span>36 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Main ROI Result */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 text-center">
              <div className="text-6xl font-black mb-4">{results.projectedROI.toLocaleString()}%</div>
              <div className="text-2xl font-bold mb-2">Projected ROI</div>
              <div className="text-lg opacity-90">Based on your company profile</div>
            </div>

            {/* Detailed Results */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Cost Savings</h4>
                  <div className="text-2xl">💰</div>
                </div>
                <div className="text-3xl font-black text-green-600 mb-2">
                  {formatNumber(results.costSavings)}
                </div>
                <div className="text-sm text-gray-600">Annual operational savings</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Revenue Increase</h4>
                  <div className="text-2xl">📈</div>
                </div>
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {formatNumber(results.revenueIncrease)}
                </div>
                <div className="text-sm text-gray-600">Annual revenue growth</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Payback Period</h4>
                  <div className="text-2xl">⏱️</div>
                </div>
                <div className="text-3xl font-black text-purple-600 mb-2">
                  {results.paybackPeriod} months
                </div>
                <div className="text-sm text-gray-600">Time to break even</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Efficiency Gain</h4>
                  <div className="text-2xl">⚡</div>
                </div>
                <div className="text-3xl font-black text-orange-600 mb-2">
                  +{results.efficiencyGain}%
                </div>
                <div className="text-sm text-gray-600">Operational efficiency improvement</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Productivity Boost</h4>
                  <div className="text-2xl">🚀</div>
                </div>
                <div className="text-3xl font-black text-pink-600 mb-2">
                  +{results.productivityBoost}%
                </div>
                <div className="text-sm text-gray-600">Team productivity increase</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Start Your AI Transformation?</h4>
              <p className="text-sm opacity-90 mb-4">
                Get a detailed implementation roadmap and ROI analysis for your specific needs.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Detailed Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            * These projections are based on industry averages and our experience with 500+ AI implementations. 
            Actual results may vary based on implementation quality, industry specifics, and market conditions. 
            Contact us for a detailed, customized analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator2025;