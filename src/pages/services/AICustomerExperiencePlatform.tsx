import React from 'react';
import { SEO  } from '../../components/SEO';
import { motion  } from 'framer-motion.ts';
import { Users, 
  Brain, 
  MessageSquare, 
  Heart, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  Zap,
  BarChart3,
  Target,
  Cpu,
  Smartphone,
  Monitor,
  Activity,
  Star,
  Award,
  Clock,
  Target,
  MessageCircle,
  Bot,
  Headphones
 } from 'lucide-react';

export default function AICustomerExperiencePlatform(...args[]):  {
  const features = [
    'AI-powered sentiment analysis and emotion detection',
    'Real-time customer journey mapping and optimization',
    'Intelligent chatbot with natural language processing',
    'Personalized recommendation engine',
    'Omnichannel customer interaction tracking',
    'Predictive customer behavior analytics',
    'Automated customer feedback analysis',
    'Integration with major CRM and marketing platforms'
  ];

  const services = [
    {
      title: 'Customer Experience Assessment',
      description: 'Comprehensive analysis of current customer journey and experience optimization opportunities',
      price: 'From $4,500',
      features['Journey mapping', 'Pain point identification', 'Optimization strategy', 'ROI analysis']
    },
    {
      title: 'AI Platform Implementation',
      description: 'Full implementation of AI-powered customer experience platform',
      price: 'From $12,000',
      features['Platform setup', 'AI model training', 'Integration configuration', 'Team training']
    },
    {
      title: 'Ongoing Optimization',
      description: 'Continuous improvement and optimization of customer experience',
      price: 'From $3,500/month',
      features['Performance monitoring', 'AI model updates', 'Journey optimization', 'Analytics reports']
    },
    {
      title: 'Enterprise CX Suite',
      description: 'Complete enterprise customer experience management with advanced AI capabilities',
      price: 'From $20,000',
      features['Multi-brand management', 'Advanced AI models', 'Custom integrations', '24/7 support']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Personalized product recommendations and shopping experiences',
      benefits['Increase conversion rates by 35%', 'Improve customer retention', 'Boost average order value']
    },
    {
      title: 'Customer Support Enhancement',
      description: 'AI-powered support with intelligent routing and automated responses',
      benefits['Reduce response time by 60%', 'Improve first-call resolution', 'Enhance customer satisfaction']
    },
    {
      title: 'Marketing Campaign Optimization',
      description: 'Data-driven marketing with personalized messaging and targeting',
      benefits['Increase campaign ROI by 45%', 'Improve engagement rates', 'Reduce customer churn']
    },
    {
      title: 'Product Development Insights',
      description: 'Customer feedback analysis and product improvement recommendations',
      benefits['Faster product iteration', 'Better feature prioritization', 'Improved market fit']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for customer behavior analysis' },
    { name: 'Natural Language Processing', description: 'Intelligent text and voice interaction processing' },
    { name: 'Predictive Analytics', description: 'Forecast customer needs and behavior patterns' },
    { name: 'Real-time Processing', description: 'Instant customer interaction analysis and response' },
    { name: 'API Integration', description: 'Seamless integration with existing business systems' },
    { name: 'Cloud Infrastructure', description: 'Scalable and secure cloud-based platform' }
  ];

  const benefits = [
    'Increase customer satisfaction scores by 25-40%',
    'Improve customer retention rates by 30-50%',
    'Reduce customer service costs by 35-45%',
    'Boost customer lifetime value by 20-35%',
    'Enhance brand loyalty and advocacy',
    'Gain actionable insights for product development'
  ];

  const metrics = [
    'Customer Satisfaction Score (CSAT)',
    'Net Promoter Score (NPS)',
    'Customer Effort Score (CES)',
    'Customer Lifetime Value (CLV)',
    'Customer Churn Rate',
    'First Response Time'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Heart className="w-4 h-4 mr-2" /> AI-Powered Customer Experience
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Customer Experience Platform</h1>
          <p className="text-rose-100 text-xl">Revolutionize your customer experience with AI-powered insights, personalization, and automation that delights customers and drives business growth.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary CX Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, GDPR/CCPA compliance, and 99.9% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-pink-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-pink-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-pink-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['25-40% CSAT improvement', 'Real-time insights', 'AI personalization'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-pink-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <MessageCircle className="w-5 h-5 text-pink-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Experience Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your customer experience with AI-powered personalization, omnichannel communication, and predictive analytics that drive loyalty and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Transform CX
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                CX Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful CX Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers personalized, intelligent customer experiences across every touchpoint
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Customer Experience Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial assessment to ongoing optimization, we provide end-to-end CX transformation
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 gap-8">
            {services.map((service, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI-powered customer experience transforms different business functions
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-green-400">
                      <TrendingUp className="w-5 h-5 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI-Powered CX?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of intelligent customer experience management
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies for exceptional customer experiences
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have revolutionized their customer experience with AI-powered personalization and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start CX Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}