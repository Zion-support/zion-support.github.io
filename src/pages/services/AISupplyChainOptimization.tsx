import { Truck, BarChart3, Globe, CheckCircle, ArrowRight, ExternalLink, Phone, Mail, Zap, Target, TrendingUp, Shield, Package, Route } from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    'AI-powered demand forecasting and inventory optimization',
    'Real-time supply chain visibility and tracking',
    'Automated route optimization and logistics planning',
    'Supplier performance analytics and risk assessment',
    'Predictive maintenance and equipment monitoring',
    'Multi-warehouse optimization and distribution',
    'Sustainability tracking and carbon footprint analysis',
    'Integration with ERP, WMS, and TMS systems'
  ];

  const benefits = [
    'Reduce inventory costs by 20-30%',
    'Improve delivery times by 25%',
    'Reduce supply chain disruptions by 40%',
    'Optimize warehouse space utilization',
    'Automate routine supply chain tasks',
    'Real-time visibility across the entire network'
  ];

  const pricing = [
    { 
      name: 'Starter', 
      price: '$299/mo', 
      features: ['Up to 5 locations', 'Basic AI forecasting', 'Standard reporting', 'Email support'],
      popular: false
    },
    { 
      name: 'Professional', 
      price: '$799/mo', 
      features: ['Up to 20 locations', 'Advanced AI analytics', 'Real-time tracking', 'Priority support', 'Custom integrations'],
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: '$1,999/mo', 
      features: ['Unlimited locations', 'Full AI suite', 'Custom AI training', 'Dedicated support', 'API access', 'White-label solutions'],
      popular: false
    }
  ];

  const useCases = [
    'Manufacturing supply chain optimization',
    'Retail inventory management',
    'E-commerce fulfillment optimization',
    'Cold chain logistics management',
    'Pharmaceutical supply chains',
    'Automotive parts distribution'
  ];

  const optimizationAreas = [
    'Demand Forecasting',
    'Inventory Management',
    'Route Optimization',
    'Warehouse Operations',
    'Supplier Management',
    'Risk Assessment',
    'Sustainability Tracking',
    'Performance Analytics'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Route className="w-4 h-4 mr-2" /> AI-Powered Supply Chain Optimization
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Supply Chain Optimization</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Transform your supply chain with AI-driven insights, predictive analytics, and automated optimization. 
            Reduce costs, improve efficiency, and gain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Supply Chain Intelligence</h2>
          <p className="text-xl text-gray-600">Everything you need to optimize your supply chain operations</p>
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
                  <TrendingUp className="w-6 h-6 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Optimization Areas</h2>
            <p className="text-xl text-gray-600">From forecasting to sustainability, we optimize every aspect of your supply chain</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <Package className="w-8 h-8 text-teal-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 text-sm">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-xl text-gray-600">Ideal for organizations seeking to optimize their supply chain operations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Target className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Capabilities</h2>
            <p className="text-xl text-gray-600">Leverage artificial intelligence to make smarter supply chain decisions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <BarChart3 className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">AI algorithms predict demand patterns with 90%+ accuracy</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Route className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Route Optimization</h3>
              <p className="text-gray-600">Automatically optimize delivery routes and reduce fuel costs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Management</h3>
              <p className="text-gray-600">Identify and mitigate supply chain risks before they impact operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your supply chain complexity and needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{plan.price}</div>
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
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-teal-600 hover:text-teal-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">20-30%</div>
              <p className="text-gray-700">Reduced inventory costs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">25%</div>
              <p className="text-gray-700">Improved delivery times</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">40%</div>
              <p className="text-gray-700">Fewer disruptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already using AI Supply Chain Optimization to reduce costs and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
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
            <Phone className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our supply chain optimization experts</p>
            <a href="tel:+13024640950" className="text-teal-600 hover:text-teal-700 font-semibold">
              +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-teal-600 hover:text-teal-700 font-semibold">
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
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
          >
            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}