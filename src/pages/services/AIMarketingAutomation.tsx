import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, Users, BarChart3, Zap, Shield, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Targeting',
      description: 'Advanced algorithms that identify and target your ideal customers with precision.'
    },
    {
      icon: Target,
      title: 'Personalized Campaigns',
      description: 'Create highly personalized marketing campaigns that resonate with individual customers.'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation based on behavior, preferences, and demographics.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time analytics and insights to optimize your marketing campaigns continuously.'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated marketing workflows that nurture leads and convert prospects.'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Built-in compliance features for GDPR, CCPA, and other privacy regulations.'
    }
  ];

  const benefits = [
    'Increase conversion rates by 40-60% with personalized campaigns',
    'Reduce customer acquisition costs by 25-35%',
    'Improve customer lifetime value by 30-50%',
    'Automate 80% of repetitive marketing tasks',
    'Achieve 3x better ROI on marketing spend',
    'Reduce time-to-market for campaigns by 70%'
  ];

  const useCases = [
    {
      title: 'Email Marketing',
      description: 'AI-powered email campaigns with dynamic content and optimal send times.',
      icon: '📧'
    },
    {
      title: 'Social Media',
      description: 'Automated social media management with intelligent content optimization.',
      icon: '📱'
    },
    {
      title: 'Content Marketing',
      description: 'AI-generated content recommendations and personalized content delivery.',
      icon: '📝'
    },
    {
      title: 'Lead Nurturing',
      description: 'Intelligent lead scoring and automated nurturing sequences.',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <Target className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your marketing with AI-powered automation that delivers personalized experiences, 
            optimizes campaigns in real-time, and drives unprecedented growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Marketing Automation platform combines cutting-edge artificial intelligence 
              with proven marketing strategies to deliver exceptional results.
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
              Proven Business Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See measurable improvements across all your marketing metrics with our 
              AI-powered automation platform.
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
              Marketing Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From email campaigns to social media management, our AI platform 
              optimizes every aspect of your marketing strategy.
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
              Ready to Automate Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their marketing 
              with AI-powered automation. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}