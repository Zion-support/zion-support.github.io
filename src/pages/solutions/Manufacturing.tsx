import React from 'react';
import { 
  Settings, 
  Shield, 
  Users, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Building,
  Globe,
  Cpu,
  Target,
  Lock,
  Activity
} from 'lucide-react';

export default function ManufacturingSolutions() {
  const features = [
    {
      icon: Settings,
      title: 'Smart Manufacturing',
      description: 'AI-powered automation and optimization',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Advanced quality control and defect detection',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Workforce Management',
      description: 'Optimize human resources and productivity',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast maintenance and optimize operations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Live insights into production processes',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous improvement and efficiency gains',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const solutions = [
    {
      title: 'Smart Factory Platform',
      description: 'Comprehensive IoT and AI manufacturing platform',
      features: ['Production Monitoring', 'Quality Control', 'Predictive Maintenance', 'Analytics Dashboard']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'End-to-end supply chain visibility and optimization',
      features: ['Inventory Management', 'Demand Forecasting', 'Supplier Management', 'Logistics Optimization']
    },
    {
      title: 'Quality Management System',
      description: 'AI-powered quality control and assurance',
      features: ['Defect Detection', 'Quality Metrics', 'Compliance Monitoring', 'Continuous Improvement']
    },
    {
      title: 'Workforce Optimization',
      description: 'Human resource management and productivity tools',
      features: ['Skill Management', 'Performance Tracking', 'Training Programs', 'Safety Monitoring']
    }
  ];

  const industries = [
    {
      title: 'Automotive',
      description: 'Vehicle manufacturing and assembly',
      icon: Settings
    },
    {
      title: 'Electronics',
      description: 'Consumer electronics and components',
      icon: Cpu
    },
    {
      title: 'Pharmaceuticals',
      description: 'Drug manufacturing and quality control',
      icon: Shield
    },
    {
      title: 'Food & Beverage',
      description: 'Food processing and packaging',
      icon: Activity
    }
  ];

  const benefits = [
    'Increase production efficiency by 35%',
    'Reduce quality defects by 60%',
    'Lower operational costs by 25%',
    'Improve equipment uptime by 40%',
    'Enhance worker safety',
    'Enable predictive maintenance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Manufacturing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform manufacturing operations with AI-powered solutions that optimize production, quality, and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 flex items-center justify-center gap-2">
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
              Manufacturing-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for manufacturing with automation, quality, and efficiency at the core
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
              Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address manufacturing challenges and drive operational excellence
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
              Manufacturing Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different manufacturing sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Why Choose Manufacturing Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for manufacturing organizations
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
            Ready to Transform Manufacturing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading manufacturing organizations that have already optimized their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200">
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