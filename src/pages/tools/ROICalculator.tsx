import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Download,
  Share2,
  Save,
  RefreshCw,
  Info,
  AlertCircle,
  Lightbulb,
  Zap,
  Users,
  Clock,
  Shield,
  Database,
  Cloud
} from 'lucide-react';

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    initialInvestment: 100000,
    annualRevenue: 150000,
    annualCosts: 80000,
    timeHorizon: 3,
    discountRate: 10,
    implementationCosts: 25000,
    trainingCosts: 15000,
    maintenanceCosts: 10000
  });

  const [results, setResults] = useState({
    netProfit: 0,
    totalROI: 0,
    annualizedROI: 0,
    paybackPeriod: 0,
    npv: 0,
    irr: 0
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const {
      initialInvestment,
      annualRevenue,
      annualCosts,
      timeHorizon,
      discountRate,
      implementationCosts,
      trainingCosts,
      maintenanceCosts
    } = formData;

    const totalInvestment = initialInvestment + implementationCosts + trainingCosts;
    const annualNetProfit = annualRevenue - annualCosts - maintenanceCosts;
    const totalNetProfit = annualNetProfit * timeHorizon;
    
    // Calculate ROI
    const netProfit = totalNetProfit - totalInvestment;
    const totalROI = (netProfit / totalInvestment) * 100;
    const annualizedROI = totalROI / timeHorizon;
    
    // Calculate Payback Period
    const paybackPeriod = totalInvestment / annualNetProfit;
    
    // Calculate NPV
    let npv = -totalInvestment;
    for (let year = 1; year <= timeHorizon; year++) {
      npv += annualNetProfit / Math.pow(1 + discountRate / 100, year);
    }
    
    // Calculate IRR (simplified approximation)
    const irr = (annualNetProfit / totalInvestment) * 100;

    setResults({
      netProfit,
      totalROI,
      annualizedROI,
      paybackPeriod,
      npv,
      irr
    });
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      initialInvestment: 100000,
      annualRevenue: 150000,
      annualCosts: 80000,
      timeHorizon: 3,
      discountRate: 10,
      implementationCosts: 25000,
      trainingCosts: 15000,
      maintenanceCosts: 10000
    });
    setShowResults(false);
  };

  const exportResults = () => {
    const dataStr = JSON.stringify({ formData, results }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'roi-calculator-results.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const benefits = [
    {
      icon: Target,
      title: "Accurate Projections",
      description: "Get precise ROI calculations based on real business metrics"
    },
    {
      icon: BarChart3,
      title: "Multiple Metrics",
      description: "Calculate ROI, NPV, IRR, and payback period simultaneously"
    },
    {
      icon: TrendingUp,
      title: "Scenario Planning",
      description: "Test different investment scenarios and time horizons"
    },
    {
      icon: CheckCircle,
      title: "Professional Results",
      description: "Generate reports suitable for stakeholders and decision-makers"
    }
  ];

  const useCases = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Calculate ROI of moving from on-premise to cloud infrastructure"
    },
    {
      icon: Database,
      title: "Software Implementation",
      description: "Assess the return on enterprise software investments"
    },
    {
      icon: Users,
      title: "Process Automation",
      description: "Evaluate ROI of AI and automation initiatives"
    },
    {
      icon: Shield,
      title: "Security Investments",
      description: "Measure ROI of cybersecurity and compliance projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>ROI Calculator - Zion Tech Group</title>
        <meta name="description" content="Calculate the return on investment for your technology projects with our comprehensive ROI calculator. Get accurate projections for ROI, NPV, IRR, and payback period." />
        <link rel="canonical" href="https://ziontechgroup.com/tools/roi-calculator" />
        <meta name="keywords" content="ROI calculator, return on investment, NPV calculator, IRR calculator, payback period, technology investment analysis, business case calculator" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Calculate the return on investment for your technology projects with precision. 
              Get comprehensive financial metrics including ROI, NPV, IRR, and payback period.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <Calculator className="w-5 h-5 mr-2" />
                <span>Advanced Calculations</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BarChart3 className="w-5 h-5 mr-2" />
                <span>Multiple Metrics</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Download className="w-5 h-5 mr-2" />
                <span>Export Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Use Our ROI Calculator?
            </h2>
            <p className="text-gray-300 text-lg">
              Professional-grade financial analysis tools for technology investments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-gray-300 text-lg">
              Enter your project details to get comprehensive financial analysis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-6">Project Parameters</h3>
              
              <div className="space-y-6">
                {/* Investment Costs */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-blue-400" />
                    Investment Costs
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Initial Investment ($)</label>
                      <input
                        type="number"
                        value={formData.initialInvestment}
                        onChange={(e) => handleInputChange('initialInvestment', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Implementation Costs ($)</label>
                      <input
                        type="number"
                        value={formData.implementationCosts}
                        onChange={(e) => handleInputChange('implementationCosts', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Training Costs ($)</label>
                      <input
                        type="number"
                        value={formData.trainingCosts}
                        onChange={(e) => handleInputChange('trainingCosts', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Revenue & Costs */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                    Revenue & Costs
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Annual Revenue ($)</label>
                      <input
                        type="number"
                        value={formData.annualRevenue}
                        onChange={(e) => handleInputChange('annualRevenue', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Annual Costs ($)</label>
                      <input
                        type="number"
                        value={formData.annualCosts}
                        onChange={(e) => handleInputChange('annualCosts', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Annual Maintenance Costs ($)</label>
                      <input
                        type="number"
                        value={formData.maintenanceCosts}
                        onChange={(e) => handleInputChange('maintenanceCosts', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Time & Discount */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                    Time & Discount
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Time Horizon (Years)</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={formData.timeHorizon}
                        onChange={(e) => handleInputChange('timeHorizon', parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Discount Rate (%)</label>
                      <input
                        type="number"
                        min="0"
                        max="50"
                        step="0.1"
                        value={formData.discountRate}
                        onChange={(e) => handleInputChange('discountRate', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={calculateROI}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate ROI
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Results Display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-6">Results</h3>
              
              {!showResults ? (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Enter your project details and click "Calculate ROI" to see results</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">${results.netProfit.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">Net Profit</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">{results.totalROI.toFixed(1)}%</div>
                      <div className="text-gray-400 text-sm">Total ROI</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-gray-300">Annualized ROI:</span>
                      <span className="text-white font-semibold">{results.annualizedROI.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-gray-300">Payback Period:</span>
                      <span className="text-white font-semibold">{results.paybackPeriod.toFixed(1)} years</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-gray-300">Net Present Value:</span>
                      <span className="text-white font-semibold">${results.npv.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300">Internal Rate of Return:</span>
                      <span className="text-white font-semibold">{results.irr.toFixed(1)}%</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={exportResults}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Results
                    </button>
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Use Cases
            </h2>
            <p className="text-gray-300 text-lg">
              Our ROI calculator is perfect for evaluating various technology investments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tips for Accurate ROI Calculation
            </h2>
            <p className="text-gray-300 text-lg">
              Follow these best practices to get the most reliable results
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-500/20 rounded-full p-2">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Include All Costs</h3>
                <p className="text-gray-300">Don't forget hidden costs like training, maintenance, and opportunity costs.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-green-500/20 rounded-full p-2">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Realistic Revenue Projections</h3>
                <p className="text-gray-300">Base your revenue estimates on market research and historical data.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-purple-500/20 rounded-full p-2">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Consider Time Value of Money</h3>
                <p className="text-gray-300">Use appropriate discount rates to account for inflation and risk.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-yellow-500/20 rounded-full p-2">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Account for Risks</h3>
                <p className="text-gray-300">Include contingency factors and risk mitigation costs in your calculations.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help with Your ROI Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our financial experts can help you create comprehensive business cases and investment analyses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Consult with Experts
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}