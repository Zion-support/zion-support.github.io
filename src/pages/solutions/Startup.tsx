import React from 'react';
import { 
  Rocket, 
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Star
} from 'lucide-react';

export default function StartupSolutions() {
  const features = [
    {
      icon: Rocket,
      title: 'Rapid Growth',
      description: 'Accelerate your startup growth with proven strategies and tools',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quick Launch',
      description: 'Get to market faster with our streamlined development process',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team Scaling',
      description: 'Tools and processes that grow with your team and company',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Market Focus',
      description: 'Stay focused on your core business while we handle the tech',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Built to handle growth from 10 to 10,000+ users',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Support',
      description: 'Cutting-edge technology to keep you ahead of the competition',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const solutions = [
    {
      title: 'MVP Development',
      description: 'Fast-track your minimum viable product to validate ideas',
      features: ['Rapid Prototyping', 'User Testing', 'Iteration Support', 'Launch Ready']
    },
    {
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies to acquire and retain customers',
      features: ['SEO & Content', 'Social Media', 'Email Marketing', 'Analytics']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand your users and optimize for growth',
      features: ['User Behavior', 'Conversion Tracking', 'A/B Testing', 'Insights']
    },
    {
      title: 'Team Collaboration',
      description: 'Tools to keep your growing team aligned and productive',
      features: ['Project Management', 'Communication', 'Documentation', 'Workflows']
    }
  ];

  const stages = [
    {
      title: 'Ideation',
      description: 'Validate your concept and market fit',
      icon: Lightbulb
    },
    {
      title: 'MVP',
      description: 'Build and launch your first product',
      icon: Rocket
    },
    {
      title: 'Growth',
      description: 'Scale your user base and operations',
      icon: TrendingUp
    },
    {
      title: 'Scale',
      description: 'Optimize and expand to new markets',
      icon: Globe
    }
  ];

  const benefits = [
    'Launch 3x faster than traditional development',
    'Reduce development costs by 60%',
    'Get to market in weeks, not months',
    'Focus on your core business',
    'Scale without technical debt',
    'Stay ahead of competition'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Startup Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your startup journey with AI-powered solutions designed for rapid growth and market success
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
              Startup-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for startups with speed, flexibility, and growth in mind
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
              Startup Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address startup challenges and accelerate growth
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

      {/* Stages Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Startup Journey Stages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We support you at every stage of your startup journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{stage.title}</h3>
                <p className="text-gray-300 text-sm">{stage.description}</p>
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
              Why Choose Startup Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for startups
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
            Ready to Accelerate Your Startup?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of startups that have already accelerated their growth with our solutions
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