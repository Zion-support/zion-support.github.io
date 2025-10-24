'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Target, BarChart, Users, CheckCircle, Zap, Brain, Settings, Globe, Clock, Shield, TrendingUp, Star, MessageCircle, Send, PieChart, Activity, DollarSign, FileText, Database, Building2, CreditCard, Wallet, Lock, Sparkles, ShoppingCart } from 'lucide-react';

export const dynamic = 'force-dynamic';


const AiEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      iconProps: { className: "w-8 h-8 text-cyan-400" },
      title: 'AI-Powered Campaigns',
      description: 'Create intelligent email campaigns that adapt to user behavior and preferences automatically.',
      benefits: ['Smart segmentation', 'Predictive content', 'Optimal send times', 'Personalization engine']
    },
    {
      icon: Target,
      iconProps: { className: "w-8 h-8 text-purple-400" },
      title: 'Advanced Segmentation',
      description: 'Segment your audience with precision using AI-driven behavioral and demographic analysis.',
      benefits: ['Behavioral triggers', 'Demographic targeting', 'Engagement scoring', 'Lifecycle stages']
    },
    {
      icon: BarChart,
      iconProps: { className: "w-8 h-8 text-green-400" },
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with AI-powered insights and recommendations.',
      benefits: ['Real-time metrics', 'Predictive analytics', 'A/B testing', 'ROI tracking']
    },
    {
      icon: Zap,
      iconProps: { className: "w-8 h-8 text-orange-400" },
      title: 'Automation Workflows',
      description: 'Build complex email automation workflows with drag-and-drop visual builder.',
      benefits: ['Visual workflow builder', 'Multi-step sequences', 'Conditional logic', 'Trigger-based actions']
    }
  ];

  const useCases = [
    {
      title: 'Welcome Series',
      description: 'Automated welcome email sequences for new subscribers',
      icon: Mail,
      iconProps: { className: "w-6 h-6 text-blue-400" },
      benefits: ['Increase engagement by 40%', 'Build brand awareness', 'Set expectations']
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart',
      icon: ShoppingCart,
      iconProps: { className: "w-6 h-6 text-green-400" },
      benefits: ['Recover 15-25% of lost sales', 'Personalized offers', 'Multi-touch sequences']
    },
    {
      title: 'Re-engagement Campaigns',
      description: 'Win back inactive subscribers with targeted campaigns',
      icon: Users,
      iconProps: { className: "w-6 h-6 text-purple-400" },
      benefits: ['Reduce churn by 30%', 'Identify at-risk subscribers', 'Personalized content']
    },
    {
      title: 'Post-Purchase Follow-up',
      description: 'Nurture customers after purchase with relevant content',
      icon: Star,
      iconProps: { className: "w-6 h-6 text-yellow-400" },
      benefits: ['Increase customer lifetime value', 'Gather feedback', 'Cross-sell opportunities']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 contacts',
        'Basic automation',
        'Email templates',
        'Analytics dashboard',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50,000 contacts',
        'Advanced automation',
        'AI-powered insights',
        'A/B testing',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Advanced AI features',
        'Dedicated support',
        'Custom development',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '2.5M+', label: 'Emails Sent Daily', icon: Send,
      iconProps: { className: "w-6 h-6" } },
    { number: '40%', label: 'Higher Open Rates', icon: TrendingUp,
      iconProps: { className: "w-6 h-6" } },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield,
      iconProps: { className: "w-6 h-6" } },
    { number: '24/7', label: 'Customer Support', icon: Clock,
      iconProps: { className: "w-6 h-6" } }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation that delivers personalized, engaging campaigns at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI email marketing automation platform comes with everything you need to create, send, and optimize email campaigns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Popular Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how businesses are using our AI email marketing automation to drive growth and engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                  : 'border-white/10 hover:border-cyan-400/50'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free trial today and experience the power of AI-driven email marketing automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEmailMarketingAutomationPage;