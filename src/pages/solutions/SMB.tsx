import React from 'react';
import { 
  Building2, 
  Rocket, 
  Users, 
  Globe, 
  Zap, 
  DollarSign, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Lightbulb,
  ShoppingCart,
  Settings,
  Heart
} from 'lucide-react';

export default function SMBSolutions() {
  const features = [
    {
      icon: Building2,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business from startup to enterprise',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Quick Implementation',
      description: 'Fast deployment with minimal disruption to operations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Tools that enhance productivity and team communication',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Solutions to help you reach new markets and customers',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Cost Efficiency',
      description: 'Affordable solutions that maximize ROI and reduce costs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Focused Results',
      description: 'Targeted solutions for specific business challenges',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const solutions = [
    {
      title: 'AI Business Intelligence',
      description: 'Data-driven insights to make better business decisions',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reporting']
    },
    {
      title: 'Digital Marketing Suite',
      description: 'Comprehensive marketing automation and optimization',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Email Campaigns']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Streamline customer interactions and improve satisfaction',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Analytics']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online selling platform for your products',
      features: ['Online Store', 'Payment Processing', 'Inventory Management', 'Order Fulfillment']
    }
  ];

  const industries = [
    {
      title: 'Retail & E-commerce',
      description: 'Digital transformation for retail businesses',
      icon: ShoppingCart
    },
    {
      title: 'Professional Services',
      description: 'Automation for consulting and service firms',
      icon: Users
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing and supply chain solutions',
      icon: Settings
    },
    {
      title: 'Healthcare',
      description: 'Technology solutions for healthcare practices',
      icon: Heart
    }
  ];

  const benefits = [
    'Increase revenue by 35%',
    'Reduce operational costs by 25%',
    'Improve customer satisfaction by 45%',
    'Accelerate growth by 60%',
    'Streamline business processes',
    'Gain competitive advantage'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              SMB Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable solutions designed specifically for small and medium businesses to compete and grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2">
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
              SMB-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for small and medium businesses with affordability, ease of use, and quick ROI in mind
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
              SMB Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address common SMB challenges and drive growth
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

      {/* Industries Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for different industries and business types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
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
              Why Choose SMB Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for small and medium businesses
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of SMBs that have already transformed their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200">
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