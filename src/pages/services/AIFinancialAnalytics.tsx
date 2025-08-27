import React from 'react';
import { SEO } from '@/components/SEO';
import { TrendingUp, BarChart3, DollarSign, Shield, Check, ExternalLink, Phone, Mail, ArrowRight, Calculator, PieChart, LineChart, Target, Zap } from 'lucide-react';

export default function AIFinancialAnalytics() {
  const features = [
    'AI-powered financial forecasting and trend analysis',
    'Real-time market data integration and analysis',
    'Automated financial reporting and insights generation',
    'Risk assessment and portfolio optimization',
    'Predictive analytics for investment decisions',
    'Compliance monitoring and regulatory reporting',
    'Multi-currency support and global market coverage',
    'Advanced visualization and interactive dashboards'
  ];

  const benefits = [
    'Improve investment returns by 15-25%',
    'Reduce financial risk by 30-40%',
    'Save 20+ hours per week on financial analysis',
    'Make data-driven decisions with confidence',
    'Stay compliant with automated reporting'
  ];

  const pricingTiers = [
    {
      name: 'Professional',
      price: '$199',
      period: '/mo',
      users: 'Up to 5 users',
      features: ['Basic AI analytics', 'Real-time market data', 'Standard reporting', 'Email support', '5 portfolio tracking']
    },
    {
      name: 'Business',
      price: '$499',
      period: '/mo',
      users: 'Up to 20 users',
      features: ['Advanced AI insights', 'Unlimited portfolios', 'Custom dashboards', 'Priority support', 'API access', 'Advanced risk analysis']
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/mo',
      users: 'Unlimited users',
      features: ['Full AI suite', 'White-label options', 'Dedicated support', 'SAML/SSO', 'Custom integrations', 'Compliance automation']
    }
  ];

  const useCases = [
    'Investment firms and hedge funds',
    'Corporate finance departments',
    'Financial advisors and planners',
    'Banks and credit unions',
    'Insurance companies',
    'Real estate investment trusts'
  ];

  const integrations = [
    'Bloomberg Terminal', 'Reuters Eikon', 'Yahoo Finance', 'Alpha Vantage', 'Quandl',
    'Salesforce', 'QuickBooks', 'Xero', 'Sage', 'NetSuite',
    'Trading platforms', 'Bank APIs', 'Payment processors', 'Accounting software'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Financial Analytics Platform - Zion Tech Group"
        description="Advanced AI financial analytics platform providing real-time insights, predictive modeling, and automated reporting for investment and financial decision-making."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" /> AI Financial Analytics Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Financial Analytics
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your financial decision-making with AI that analyzes markets in real-time, 
            predicts trends, and provides actionable insights for maximum returns and minimal risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 border border-emerald-400/30 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AI Financial Analytics?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes financial analysis by providing real-time insights, 
              predictive modeling, and automated reporting that traditional tools simply can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Financial Impact</h2>
            <p className="text-xl text-slate-300">See how AI transforms your financial performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How AI Financial Analytics Works</h2>
            <p className="text-xl text-slate-300">Intelligent, automated, and accurate financial analysis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-slate-300">AI continuously gathers real-time financial data from multiple sources and markets</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-slate-300">Advanced algorithms analyze patterns, predict trends, and identify opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-slate-300">Get clear, actionable recommendations for investment and financial decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your financial analysis needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  tier.name === 'Business' 
                    ? 'border-emerald-500/50 bg-emerald-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">
                    {tier.price}<span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-400">{tier.users}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://ziontechgroup.com/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    tier.name === 'Business'
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-slate-300">Works with your existing financial tools and platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/50 transition-all duration-300">
                <p className="text-sm font-medium text-slate-300">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect For</h2>
            <p className="text-xl text-slate-300">Financial professionals who need intelligent, data-driven insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <DollarSign className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise-Grade Security</h2>
            <p className="text-xl text-slate-300">Your financial data is protected with bank-level security</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SOC 2 Type II Certified</h3>
              <p className="text-slate-300">Highest level of security compliance for financial applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-slate-300">All data is encrypted in transit and at rest</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GDPR & CCPA Compliant</h3>
              <p className="text-slate-300">Full compliance with international data protection regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Financial Analysis?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of financial professionals already using AI to make smarter, 
            more profitable investment and business decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border border-emerald-400/30 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" /> Schedule Demo
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-emerald-400">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-emerald-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Website</h4>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 inline-flex items-center"
                >
                  ziontechgroup.com <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}