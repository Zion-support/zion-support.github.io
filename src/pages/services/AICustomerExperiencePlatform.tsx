import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, Heart, Star, TrendingUp, Zap, Shield, BarChart3, Globe, Smartphone, Headphones, CheckCircle, ArrowRight, ExternalLink, Brain, Cpu, Database, Lock, Monitor, Target } from 'lucide-react';

const AICustomerExperiencePlatform = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Omnichannel AI Support',
      description: 'Seamless customer support across chat, email, phone, and social media with intelligent routing and response generation.',
      benefits: [
        '24/7 automated support',
        'Intelligent ticket routing',
        'Multi-language support',
        'Sentiment analysis'
      ],
      price: 'From $199/month'
    },
    {
      icon: Heart,
      title: 'Customer Journey Mapping',
      description: 'AI-powered customer journey analysis with predictive insights and personalized experience optimization.',
      benefits: [
        'Real-time journey tracking',
        'Predictive behavior analysis',
        'Personalization engine',
        'Conversion optimization'
      ],
      price: 'From $299/month'
    },
    {
      icon: Star,
      title: 'Intelligent Feedback Analysis',
      description: 'Advanced sentiment analysis and feedback processing with actionable insights and trend detection.',
      benefits: [
        'Real-time sentiment analysis',
        'Automated feedback categorization',
        'Trend detection and alerts',
        'Actionable insights dashboard'
      ],
      price: 'From $149/month'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Customer Analytics',
      description: 'Machine learning-powered customer behavior prediction and churn prevention with proactive engagement.',
      benefits: [
        'Churn prediction models',
        'Customer lifetime value analysis',
        'Next-best-action recommendations',
        'Proactive engagement campaigns'
      ],
      price: 'From $399/month'
    }
  ];

  const channels = [
    {
      title: 'Web Chat & Widgets',
      description: 'Intelligent chat widgets with AI-powered responses and seamless integration.',
      icon: Monitor,
      features: ['Smart responses', 'Context awareness', 'Escalation handling', 'Analytics dashboard']
    },
    {
      title: 'Mobile App Support',
      description: 'Native mobile support with push notifications and in-app messaging.',
      icon: Smartphone,
      features: ['Push notifications', 'In-app messaging', 'Offline support', 'Mobile analytics']
    },
    {
      title: 'Voice & Call Center',
      description: 'AI-powered voice support with natural language processing and call analytics.',
      icon: Headphones,
      features: ['Voice recognition', 'Call transcription', 'Sentiment analysis', 'Call routing']
    },
    {
      title: 'Social Media Integration',
      description: 'Unified social media monitoring and response management across all platforms.',
      icon: Globe,
      features: ['Multi-platform monitoring', 'Automated responses', 'Brand sentiment tracking', 'Crisis management']
    }
  ];

  const integrations = [
    { name: 'Salesforce', description: 'Seamless CRM integration with customer data sync' },
    { name: 'HubSpot', description: 'Marketing automation and lead management' },
    { name: 'Zendesk', description: 'Advanced ticketing and knowledge base' },
    { name: 'Slack', description: 'Team collaboration and notification system' },
    { name: 'Microsoft Teams', description: 'Enterprise communication and workflow' },
    { name: 'Shopify', description: 'E-commerce platform integration' }
  ];

  const useCases = [
    {
      title: 'E-commerce Customer Support',
      description: 'Automated order tracking, returns processing, and product recommendations.',
      roi: '200% increase in customer satisfaction'
    },
    {
      title: 'SaaS Customer Success',
      description: 'Proactive onboarding, feature adoption, and renewal management.',
      roi: '35% reduction in churn rate'
    },
    {
      title: 'Financial Services',
      description: 'Compliance-aware support with secure document handling and fraud detection.',
      roi: '150% improvement in resolution time'
    },
    {
      title: 'Healthcare Patient Experience',
      description: 'HIPAA-compliant patient support with appointment scheduling and health information.',
      roi: '40% increase in patient engagement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-pink-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-slate-900/50 px-4 py-1 text-purple-300">
            <Brain className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">AI CUSTOMER EXPERIENCE</span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Revolutionize Customer Experience with
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> AI-Powered Intelligence</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Deliver exceptional customer experiences across all channels with intelligent automation, predictive analytics, and personalized engagement.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 font-semibold hover:from-purple-400 hover:to-pink-500 transition-all">
              Start Free Trial
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-purple-400/40 px-6 py-3 font-semibold text-purple-300 hover:bg-white/5 transition-all">
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-purple-400/30 hover:bg-white/10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 text-purple-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 mb-6">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-purple-300">{feature.price}</div>
            </div>
          ))}
        </div>

        {/* Channel Support */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Omnichannel Customer Support</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 text-purple-300">
                  <channel.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{channel.description}</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  {channel.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industry-Specific Solutions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{useCase.description}</p>
                <div className="text-sm font-semibold text-green-400">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Seamless Integrations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-300 mb-6">$199<span className="text-lg text-slate-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Up to 1,000 conversations/month</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Basic AI support</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Email & chat support</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Standard integrations</li>
              </ul>
              <Link to="/contact" className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 py-3 text-center font-semibold hover:from-purple-400 hover:to-pink-500 transition-all">
                Get Started
              </Link>
            </div>

            <div className="rounded-xl border-2 border-purple-400 bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 backdrop-blur-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-300 mb-6">$499<span className="text-lg text-slate-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Up to 10,000 conversations/month</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Advanced AI & analytics</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />All channels supported</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Premium integrations</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Priority support</li>
              </ul>
              <Link to="/contact" className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 py-3 text-center font-semibold hover:from-purple-400 hover:to-pink-500 transition-all">
                Start Free Trial
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-300 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Unlimited conversations</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Custom AI models</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />White-label solution</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />Dedicated support</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-400" />SLA guarantees</li>
              </ul>
              <Link to="/contact" className="w-full rounded-lg border border-purple-400 px-6 py-3 text-center font-semibold text-purple-300 hover:bg-purple-400 hover:text-white transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-600/10 p-12 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Experience?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading companies already delivering exceptional customer experiences with AI-powered intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 font-semibold hover:from-purple-400 hover:to-pink-500 transition-all">
                Start Your Free Trial
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-purple-400 px-8 py-4 font-semibold text-purple-300 hover:bg-purple-400 hover:text-white transition-all">
                Schedule a Demo
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICustomerExperiencePlatform;