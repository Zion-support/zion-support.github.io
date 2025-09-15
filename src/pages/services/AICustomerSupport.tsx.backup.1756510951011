import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  MessageCircle, 
  Headphones, 
  Zap, 
  Brain, 
  Shield, 
  Clock,
  CheckCircle,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Target,
  Smartphone,
  Mail,
  Phone,
  Bot
} from 'lucide-react';

export default function AICustomerSupport() {
  const features = [
    {
      icon: Bot,
      title: '24/7 AI Chat Support',
      description: 'Intelligent chatbots that provide instant responses and handle customer inquiries around the clock'
    },
    {
      icon: Brain,
      title: 'Smart Ticket Routing',
      description: 'AI automatically categorizes and routes support tickets to the right agents for faster resolution'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Unified support across email, chat, phone, social media, and messaging platforms'
    },
    {
      icon: Target,
      title: 'Personalized Responses',
      description: 'AI learns customer preferences and provides tailored support experiences'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Identify support trends and proactively address common customer issues'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline support processes with intelligent automation and self-service options'
    }
  ];

  const benefits = [
    'Reduce response time by 80% with instant AI support',
    'Increase customer satisfaction scores by 45%',
    'Cut support costs by 60% through automation',
    'Handle 5x more support requests with AI assistance',
    'Provide 24/7 support coverage without additional staff',
    'Improve first-call resolution rates by 35%'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses starting with AI support',
      features: [
        'Up to 1,000 support interactions/month',
        'Basic AI chatbot',
        'Email and chat support',
        'Basic analytics dashboard',
        'Email support',
        'Standard response templates'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses with moderate support volume',
      features: [
        'Up to 10,000 support interactions/month',
        'Advanced AI chatbot with learning',
        'Multi-channel support (email, chat, phone)',
        'Smart ticket routing',
        'Priority support',
        'Advanced analytics and reporting',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high support demands',
      features: [
        'Unlimited support interactions',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security features',
        'Custom workflows',
        'Multi-language support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI Customer Support - 24/7 Intelligent Support Solution"
        description="Transform your customer support with AI-powered chatbots, smart ticket routing, and multi-channel support. Reduce response time by 80% and boost satisfaction scores."
        canonical="/services/ai-customer-support"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-600/10 to-teal-600/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                AI Customer Support
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Provide 24/7 intelligent customer support with AI-powered chatbots, 
                smart ticket routing, and multi-channel assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                AI-Powered Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to provide exceptional customer support 
                that's fast, accurate, and available around the clock.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of companies that have transformed their customer support 
                with AI-powered automation and intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your support volume and requirements. 
                All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies using AI to provide exceptional customer support 
                that's fast, efficient, and available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}