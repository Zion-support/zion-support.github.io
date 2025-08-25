import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, TrendingUp, Users, Shield, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Analytics',
      description: 'Leverage machine learning algorithms to uncover hidden patterns and insights in your data.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that provide instant visibility into key business metrics and KPIs.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using sophisticated AI prediction models.'
    },
    {
      icon: Users,
      title: 'User Behavior Analysis',
      description: 'Understand customer behavior patterns and preferences for better decision making.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with SOC2 compliance and advanced encryption.'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI-powered automated reporting and intelligent alerting systems.'
    }
  ];

  const benefits = [
    'Increase revenue by 15-25% through data-driven insights',
    'Reduce operational costs by 20-30% with predictive analytics',
    'Improve customer satisfaction by 35% with behavioral analysis',
    'Accelerate decision-making by 50% with real-time dashboards',
    'Reduce manual reporting time by 80% with automation',
    'Achieve 99.9% data accuracy with AI validation'
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, and portfolio optimization using AI analytics.',
      icon: '💰'
    },
    {
      title: 'Healthcare',
      description: 'Patient outcome prediction, resource optimization, and treatment effectiveness analysis.',
      icon: '🏥'
    },
    {
      title: 'Retail',
      description: 'Customer segmentation, inventory optimization, and demand forecasting.',
      icon: '🛒'
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            AI Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with AI-powered analytics, predictive insights, and intelligent decision-making tools. 
            Unlock the full potential of your data with cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
              to deliver actionable insights that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real results with our AI Business Intelligence solutions that deliver 
              quantifiable improvements across all aspects of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform is designed to work across industries, 
              providing tailored solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and unlock the full potential of your data. 
              Get started with AI Business Intelligence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}