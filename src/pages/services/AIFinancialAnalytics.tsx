import { TrendingUp, BarChart3, Shield, CheckCircle, ArrowRight, ExternalLink, Phone, Mail, DollarSign, Target, Zap, Calculator, PieChart } from 'lucide-react';

export default function AIFinancialAnalytics() {
  const features = [
    'AI-powered financial forecasting and trend analysis',
    'Real-time market data integration and analysis',
    'Automated financial reporting and compliance',
    'Risk assessment and portfolio optimization',
    'Predictive analytics for investment decisions',
    'Multi-currency and global market support',
    'Advanced visualization and dashboard tools',
    'Secure, SOC 2 compliant data handling'
  ];

  const benefits = [
    'Improve investment returns by 25-40%',
    'Reduce financial analysis time by 80%',
    'Automate compliance and reporting',
    'Real-time market insights and alerts',
    'Predict market trends with 85% accuracy',
    'Optimize portfolio allocation automatically'
  ];

  const pricing = [
    { 
      name: 'Analyst', 
      price: '$199/mo', 
      features: ['Up to 10 portfolios', 'Basic AI insights', 'Standard reporting', 'Email support'],
      popular: false
    },
    { 
      name: 'Professional', 
      price: '$499/mo', 
      features: ['Up to 50 portfolios', 'Advanced AI analytics', 'Real-time alerts', 'Priority support', 'Custom dashboards'],
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: '$1,299/mo', 
      features: ['Unlimited portfolios', 'Full AI suite', 'Custom AI training', 'Dedicated support', 'API access', 'White-label solutions'],
      popular: false
    }
  ];

  const useCases = [
    'Investment portfolio management',
    'Financial planning and advisory',
    'Risk management and compliance',
    'Market research and analysis',
    'Trading strategy optimization',
    'Corporate financial planning'
  ];

  const analyticsTypes = [
    'Portfolio Performance Analysis',
    'Risk Assessment & Management',
    'Market Trend Prediction',
    'Asset Allocation Optimization',
    'Compliance & Regulatory Reporting',
    'Real-time Market Monitoring',
    'Financial Forecasting',
    'Stress Testing & Scenarios'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <TrendingUp className="w-4 h-4 mr-2" /> AI-Powered Financial Analytics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Financial Analytics Platform</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Transform your financial decision-making with AI-driven insights, predictive analytics, and automated portfolio optimization. 
            Stay ahead of the market with intelligent financial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Pricing
            </a>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Financial Intelligence</h2>
          <p className="text-xl text-gray-600">Everything you need to make smarter financial decisions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Zap className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Analytics Suite</h2>
            <p className="text-xl text-gray-600">From portfolio analysis to market prediction, we cover all your financial analytics needs</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {analyticsTypes.map((analyticsType, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <PieChart className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 text-sm">{analyticsType}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-xl text-gray-600">Ideal for financial professionals and organizations seeking data-driven insights</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600">Your financial data is protected with the highest security standards</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-600">Industry-leading security and compliance standards</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">All data is encrypted in transit and at rest</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Factor Authentication</h3>
              <p className="text-gray-600">Advanced security for account protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your financial analytics needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">25-40%</div>
              <p className="text-gray-700">Better investment returns</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
              <p className="text-gray-700">Faster analysis time</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-700">Market prediction accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Analytics?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of financial professionals already using AI Financial Analytics to make smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions? We're Here to Help</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our financial analytics experts</p>
            <a href="tel:+13024640950" className="text-green-600 hover:text-green-700 font-semibold">
              +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-700 font-semibold">
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Website</h3>
          <p className="text-gray-600 mb-4">
            Learn more about our complete suite of AI-powered business solutions
          </p>
          <a 
            href="https://ziontechgroup.com" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
          >
            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}