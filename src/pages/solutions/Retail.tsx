import React from 'react';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Globe, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Building,
  Smartphone,
  Target,
  Shield,
  Activity,
  CreditCard
} from 'lucide-react';

export default function RetailSolutions() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Excellence',
      description: 'AI-powered online shopping experiences',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Personalized shopping and customer service',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Retail Analytics',
      description: 'Data-driven insights for business decisions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Omnichannel Retail',
      description: 'Seamless experience across all channels',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Real-time Operations',
      description: 'Live inventory and order management',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Strategies to increase sales and revenue',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const solutions = [
    {
      title: 'E-commerce Platform',
      description: 'Complete online retail solution with AI features',
      features: ['Product Management', 'Shopping Cart', 'Payment Processing', 'Order Fulfillment']
    },
    {
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences',
      features: ['Customer Segmentation', 'Purchase Patterns', 'Lifetime Value', 'Personalization']
    },
    {
      title: 'Inventory Management',
      description: 'Smart inventory control and optimization',
      features: ['Stock Monitoring', 'Demand Forecasting', 'Automated Reordering', 'Multi-location']
    },
    {
      title: 'Marketing Automation',
      description: 'AI-powered marketing and customer engagement',
      features: ['Email Marketing', 'Social Media', 'Retargeting', 'A/B Testing']
    }
  ];

  const retailTypes = [
    {
      title: 'Online Retail',
      description: 'E-commerce and digital storefronts',
      icon: Globe
    },
    {
      title: 'Brick & Mortar',
      description: 'Physical retail locations and stores',
      icon: Building
    },
    {
      title: 'Mobile Commerce',
      description: 'Mobile apps and mobile shopping',
      icon: Smartphone
    },
    {
      title: 'Marketplace',
      description: 'Multi-vendor platforms and marketplaces',
      icon: ShoppingCart
    }
  ];

  const benefits = [
    'Increase online sales by 45%',
    'Improve customer retention by 35%',
    'Reduce cart abandonment by 30%',
    'Optimize inventory management',
    'Enhance customer experience',
    'Enable data-driven decisions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Retail Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform retail operations with AI-powered solutions that enhance customer experience and drive sales growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Retail-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for retail with customer experience, sales optimization, and operational efficiency at the core
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Retail Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address retail challenges and drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retail Types Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Retail Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different retail models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retailTypes.map((retailType, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <retailType.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{retailType.title}</h3>
                <p className="text-gray-300 text-sm">{retailType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Retail Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for retail organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-800 p-6 rounded-lg border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Retail?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading retail organizations that have already improved customer experience and sales with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
              Contact Sales
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}