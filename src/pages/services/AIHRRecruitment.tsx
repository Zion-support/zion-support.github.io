import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, Target, BarChart3, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, UserCheck } from 'lucide-react';

export default function AIHRRecruitment() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Candidate Matching',
      description: 'Advanced algorithms that match candidates to job requirements with 95% accuracy.'
    },
    {
      icon: Users,
      title: 'Intelligent Talent Pool',
      description: 'Build and maintain a dynamic talent pool with AI-driven candidate engagement.'
    },
    {
      icon: Target,
      title: 'Predictive Hiring Analytics',
      description: 'Forecast hiring needs and identify the best candidates for future positions.'
    },
    {
      icon: BarChart3,
      title: 'Performance Prediction',
      description: 'AI models that predict candidate success and cultural fit within your organization.'
    },
    {
      icon: Zap,
      title: 'Automated Screening',
      description: 'Automate initial candidate screening and assessment processes.'
    },
    {
      icon: Shield,
      title: 'Bias-Free Hiring',
      description: 'Ensure fair and unbiased hiring decisions with AI-powered diversity analytics.'
    }
  ];

  const benefits = [
    'Reduce time-to-hire by 60-80% with AI automation',
    'Improve candidate quality by 40-60%',
    'Reduce hiring costs by 30-50%',
    'Increase diversity in hiring by 35-45%',
    'Improve employee retention by 25-40%',
    'Automate 70% of repetitive HR tasks'
  ];

  const useCases = [
    {
      title: 'Recruitment',
      description: 'AI-powered candidate sourcing, screening, and matching for all positions.',
      icon: '🎯'
    },
    {
      title: 'Employee Onboarding',
      description: 'Automated onboarding processes with personalized learning paths.',
      icon: '🚀'
    },
    {
      title: 'Performance Management',
      description: 'Continuous performance monitoring and development recommendations.',
      icon: '📊'
    },
    {
      title: 'Talent Development',
      description: 'AI-driven career path planning and skill development programs.',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            AI HR & Recruitment
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your HR processes with AI-powered recruitment, talent management, and employee development. 
            Find the best talent faster and build stronger teams with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
            >
              Get Started
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
              Intelligent HR Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI HR platform combines cutting-edge artificial intelligence with proven HR practices 
              to revolutionize your talent management processes.
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
              Measurable HR Improvements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real improvements in your HR metrics with our AI-powered platform 
              that delivers quantifiable results across all aspects of talent management.
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
              HR Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From recruitment to employee development, our AI platform optimizes 
              every aspect of your human resources management.
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
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution in human resources and build stronger teams 
              with intelligent talent management. Start your transformation today.
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