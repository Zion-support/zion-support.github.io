"use client";
'use client';

import React, { useState, useEffect } from 'react';

const AdvancedROICalculator2027 = () => {
  const [formData, setFormData] = useState({
    currentRevenue: 1000000,
    employeeCount: 100,
    automationLevel: 30,
    industry: 'technology',
    companySize: 'enterprise',
    currentEfficiency: 70
  });

  const [results, setResults] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    calculateROI();
  }, [formData]);

  const industries = [
    { value: 'technology', label: 'Technology', multiplier: 1.2 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.4 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'finance', label: 'Finance', multiplier: 1.5 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'education', label: 'Education', multiplier: 1.0 }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 employees)', multiplier: 2.0 },
    { value: 'small', label: 'Small (11-50 employees)', multiplier: 1.8 },
    { value: 'medium', label: 'Medium (51-200 employees)', multiplier: 1.5 },
    { value: 'enterprise', label: 'Enterprise (200+ employees)', multiplier: 1.2 },
    { value: 'fortune500', label: 'Fortune 500', multiplier: 1.0 }
  ];

  const calculateROI = () => {
    const industry = industries.find(i => i.value === formData.industry);
    const size = companySizes.find(s => s.value === formData.companySize);
    
    // Base calculations
    const efficiencyGain = (100 - formData.currentEfficiency) * 0.8; // Max 80% improvement
    const automationImpact = formData.automationLevel * 0.3; // 30% impact per automation level
    const employeeSavings = formData.employeeCount * 0.15 * formData.automationLevel * 75000; // $75k per employee saved
    const revenueIncrease = formData.currentRevenue * (efficiencyGain / 100) * industry.multiplier;
    
    // Total benefits
    const totalSavings = employeeSavings + revenueIncrease;
    const totalInvestment = formData.currentRevenue * 0.05 * size.multiplier; // 5% of revenue as investment
    const netBenefit = totalSavings - totalInvestment;
    const roi = ((netBenefit / totalInvestment) * 100);
    
    // Additional metrics
    const timeToROI = Math.ceil(totalInvestment / (netBenefit / 12)); // months
    const annualSavings = totalSavings;
    const efficiencyImprovement = Math.min(efficiencyGain, 95);
    
    setResults({
      roi: Math.round(roi),
      totalSavings: Math.round(totalSavings),
      totalInvestment: Math.round(totalInvestment),
      netBenefit: Math.round(netBenefit),
      timeToROI: Math.max(timeToROI, 3),
      annualSavings: Math.round(annualSavings),
      efficiencyImprovement: Math.round(efficiencyImprovement),
      employeeSavings: Math.round(employeeSavings),
      revenueIncrease: Math.round(revenueIncrease)
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getROIColor = (roi) => {
    if (roi >= 1000) return 'text-green-600';
    if (roi >= 500) return 'text-blue-600';
    if (roi >= 200) return 'text-purple-600';
    if (roi >= 100) return 'text-orange-600';
    return 'text-red-600';
  };

  const getROIBadge = (roi) => {
    if (roi >= 1000) return { text: 'EXCEPTIONAL', color: 'bg-green-100 text-green-800' };
    if (roi >= 500) return { text: 'OUTSTANDING', color: 'bg-blue-100 text-blue-800' };
    if (roi >= 200) return { text: 'EXCELLENT', color: 'bg-purple-100 text-purple-800' };
    if (roi >= 100) return { text: 'GOOD', color: 'bg-orange-100 text-orange-800' };
    return { text: 'NEEDS IMPROVEMENT', color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">💰 ADVANCED ROI CALCULATOR 2027</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your AI Transformation ROI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the potential return on investment for implementing AI technologies in your organization. 
              Get personalized projections based on your specific business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h3>
              
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
                    placeholder="Enter annual revenue"
                  />
                </div>

                {/* Employee Count */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter employee count"
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {companySizes.map(size => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
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
                    {industries.map(industry => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Current Efficiency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>20%</span>
                    <span className="font-medium">{formData.currentEfficiency}%</span>
                    <span>95%</span>
                  </div>
                </div>

                {/* Automation Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Automation Level (%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={formData.automationLevel}
                    onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>10%</span>
                    <span className="font-medium">{formData.automationLevel}%</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {results && (
                <>
                  {/* Main ROI Display */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getROIBadge(results.roi).color}`}>
                        {getROIBadge(results.roi).text} ROI
                      </span>
                    </div>
                    <div className={`text-6xl font-bold mb-2 ${getROIColor(results.roi)}`}>
                      {results.roi.toLocaleString()}%
                    </div>
                    <p className="text-xl text-gray-600">Expected Return on Investment</p>
                  </div>

                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ${(results.totalSavings / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-sm text-gray-600">Total Annual Savings</div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        ${(results.totalInvestment / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-sm text-gray-600">Required Investment</div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {results.timeToROI}
                      </div>
                      <div className="text-sm text-gray-600">Months to ROI</div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        {results.efficiencyImprovement}%
                      </div>
                      <div className="text-sm text-gray-600">Efficiency Improvement</div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Savings Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Employee Cost Savings</span>
                        <span className="font-semibold">${(results.employeeSavings / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Revenue Increase</span>
                        <span className="font-semibold">${(results.revenueIncrease / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total Annual Benefit</span>
                        <span className="font-bold text-green-600">${(results.netBenefit / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our AI implementation experts can help you achieve and exceed these ROI projections. 
                Get a personalized consultation and implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Expert Consultation
                </a>
                <a
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Implementation Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedROICalculator2027;