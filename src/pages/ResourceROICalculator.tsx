import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { ArrowRight, Calculator, Target, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourceROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    customerServiceCosts: '',
    contentCreationCosts: '',
    dataAnalysisCosts: '',
    processManagementCosts: '',
    monthlyAIServices: '',
    implementationCosts: ''
  });

  const [results, setResults] = useState({
    totalMonthlyCosts: 0,
    totalMonthlySavings: 0,
    totalMonthlyInvestment: 0,
    monthlyNetBenefit: 0,
    annualNetBenefit: 0,
    roiPercentage: 0,
    paybackPeriod: 0
  });

  const calculateROI = () => {
    const customerService = parseFloat(inputs.customerServiceCosts) || 0;
    const contentCreation = parseFloat(inputs.contentCreationCosts) || 0;
    const dataAnalysis = parseFloat(inputs.dataAnalysisCosts) || 0;
    const processManagement = parseFloat(inputs.processManagementCosts) || 0;
    const monthlyAI = parseFloat(inputs.monthlyAIServices) || 0;
    const implementation = parseFloat(inputs.implementationCosts) || 0;

    const totalMonthlyCosts = customerService + contentCreation + dataAnalysis + processManagement;
    
    // Expected savings percentages
    const customerServiceSavings = customerService * 0.7; // 70% reduction
    const contentCreationSavings = contentCreation * 0.85; // 85% reduction
    const dataAnalysisSavings = dataAnalysis * 0.9; // 90% reduction
    const processManagementSavings = processManagement * 0.7; // 70% reduction
    
    const totalMonthlySavings = customerServiceSavings + contentCreationSavings + dataAnalysisSavings + processManagementSavings;
    
    // Annualize implementation costs
    const monthlyImplementationCost = implementation / 12;
    const totalMonthlyInvestment = monthlyAI + monthlyImplementationCost;
    
    const monthlyNetBenefit = totalMonthlySavings - totalMonthlyInvestment;
    const annualNetBenefit = monthlyNetBenefit * 12;
    const roiPercentage = totalMonthlyInvestment > 0 ? (monthlyNetBenefit / totalMonthlyInvestment) * 100 : 0;
    const paybackPeriod = monthlyNetBenefit > 0 ? (implementation / monthlyNetBenefit) : 0;

    setResults({
      totalMonthlyCosts,
      totalMonthlySavings,
      totalMonthlyInvestment,
      monthlyNetBenefit,
      annualNetBenefit,
      roiPercentage,
      paybackPeriod
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI ROI Calculator Guide 2025: Maximize Your Return on AI Investment | Zion Tech Group"
        description="Maximize your return on AI investment with our comprehensive ROI calculation tools and benchmarks."
        keywords="AI ROI calculator, AI return on investment, AI investment calculator, AI business case"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">
                <Calculator className="h-3 w-3 mr-1" />
                ROI Tool
              </Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                <Target className="h-3 w-3 mr-1" />
                New
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              AI ROI Calculator Guide 2025: Maximize Your Return on AI Investment
            </h1>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              Calculate and maximize your return on AI investment with our comprehensive tools, methodologies, and real-world examples.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calculator className="w-6 h-6 text-teal-400 mr-2" />
                ROI Calculator
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Current Monthly Costs</label>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-300 text-sm mb-1">Customer Service</label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={inputs.customerServiceCosts}
                        onChange={(e) => setInputs({...inputs, customerServiceCosts: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm mb-1">Content Creation</label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={inputs.contentCreationCosts}
                        onChange={(e) => setInputs({...inputs, contentCreationCosts: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm mb-1">Data Analysis</label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={inputs.dataAnalysisCosts}
                        onChange={(e) => setInputs({...inputs, dataAnalysisCosts: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm mb-1">Process Management</label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={inputs.processManagementCosts}
                        onChange={(e) => setInputs({...inputs, processManagementCosts: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">AI Investment</label>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-300 text-sm mb-1">Monthly AI Services</label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={inputs.monthlyAIServices}
                        onChange={(e) => setInputs({...inputs, monthlyAIServices: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm mb-1">Implementation Costs (One-time)</label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={inputs.implementationCosts}
                        onChange={(e) => setInputs({...inputs, implementationCosts: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-teal-500 to-green-600 hover:opacity-90 text-white"
                >
                  Calculate ROI
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                ROI Results
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-slate-400 text-sm">Total Monthly Costs</div>
                    <div className="text-2xl font-bold text-white">${results.totalMonthlyCosts.toLocaleString()}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-slate-400 text-sm">Monthly Savings</div>
                    <div className="text-2xl font-bold text-green-400">${results.totalMonthlySavings.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-slate-400 text-sm">Monthly Investment</div>
                    <div className="text-2xl font-bold text-blue-400">${results.totalMonthlyInvestment.toLocaleString()}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-slate-400 text-sm">Monthly Net Benefit</div>
                    <div className="text-2xl font-bold text-white">${results.monthlyNetBenefit.toLocaleString()}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-slate-400 text-sm mb-2">Return on Investment</div>
                    <div className="text-4xl font-bold text-green-400 mb-2">{results.roiPercentage.toFixed(0)}%</div>
                    <div className="text-slate-300 text-sm mb-4">Annual Net Benefit: ${results.annualNetBenefit.toLocaleString()}</div>
                    <div className="text-slate-400 text-sm">
                      Payback Period: {results.paybackPeriod > 0 ? results.paybackPeriod.toFixed(1) : 'N/A'} months
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Example ROI: Mid-Size Manufacturing Company</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Current Monthly Costs:</span>
                      <span className="text-white">$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Expected AI Savings:</span>
                      <span className="text-green-400">$35,000 (70% reduction)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Monthly AI Investment:</span>
                      <span className="text-blue-400">$1,196</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2">
                      <span className="text-white font-semibold">Annual ROI:</span>
                      <span className="text-green-400 font-bold">3,390%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Maximize Your AI ROI?</h3>
              <p className="text-slate-300 mb-6">
                Get personalized ROI analysis and implementation support from our AI experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-teal-500 to-green-600 hover:opacity-90 text-white px-8 py-3">
                    Get ROI Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-3">
                    View All Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceROICalculator;