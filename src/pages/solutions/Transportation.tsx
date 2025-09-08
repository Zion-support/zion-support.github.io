import React from 'react';
import { 
  Truck, 
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
  Route
} from 'lucide-react';

export default function TransportationSolutions() {
  const features = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'AI-powered fleet optimization and monitoring',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'Intelligent routing for maximum efficiency',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Driver Management',
      description: 'Driver safety, performance, and compliance',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live insights into operations and performance',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'AI-driven maintenance scheduling and alerts',
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
      title: 'Fleet Management Platform',
      description: 'Comprehensive fleet operations and optimization system',
      features: ['Vehicle Tracking', 'Maintenance Scheduling', 'Fuel Management', 'Driver Safety']
    },
    {
      title: 'Route Optimization Engine',
      description: 'AI-powered routing for maximum efficiency and cost savings',
      features: ['Dynamic Routing', 'Traffic Optimization', 'Multi-stop Planning', 'Real-time Updates']
    },
    {
      title: 'Driver Management System',
      description: 'Comprehensive driver safety and performance management',
      features: ['Safety Monitoring', 'Performance Tracking', 'Compliance Management', 'Training Programs']
    },
    {
      title: 'Transportation Analytics',
      description: 'Data-driven insights for operational excellence',
      features: ['Performance Metrics', 'Cost Analysis', 'Predictive Insights', 'Reporting Dashboard']
    }
  ];

  const transportTypes = [
    {
      title: 'Trucking & Logistics',
      description: 'Long-haul and local trucking operations',
      icon: Truck
    },
    {
      title: 'Public Transit',
      description: 'Bus, rail, and public transportation systems',
      icon: Building
    },
    {
      title: 'Delivery Services',
      description: 'Last-mile and express delivery operations',
      icon: Route
    },
    {
      title: 'Ride Sharing',
      description: 'Passenger transportation and mobility services',
      icon: Users
    }
  ];

  const benefits = [
    'Reduce fuel costs by 25%',
    'Improve delivery times by 30%',
    'Increase fleet utilization by 40%',
    'Enhance driver safety',
    'Optimize maintenance schedules',
    'Enable data-driven decisions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transportation Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform transportation operations with AI-powered solutions that optimize routes, enhance safety, and improve efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center gap-2">
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
              Transportation-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for transportation with safety, efficiency, and optimization at the core
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
              Transportation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address transportation challenges and drive operational excellence
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

      {/* Transport Types Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transportation Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different transportation sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportTypes.map((transportType, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <transportType.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{transportType.title}</h3>
                <p className="text-gray-300 text-sm">{transportType.description}</p>
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
              Why Choose Transportation Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for transportation organizations
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
            Ready to Transform Transportation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading transportation organizations that have already optimized their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
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