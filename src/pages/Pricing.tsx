import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  Globe, 
  Clock,
  TrendingUp,
  Rocket,
  Crown,
  Sparkles
} from 'lucide-react';

export default function Pricing() {
  const services = [
    {
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task prioritization',
      pricing: [
        { name: 'Starter', price: '$99', period: '/month', features: ['Up to 5 team members', 'Basic AI task prioritization', 'Project templates'] },
        { name: 'Professional', price: '$299', period: '/month', features: ['Up to 25 team members', 'Advanced AI analytics', 'Risk assessment engine'] },
        { name: 'Enterprise', price: '$599', period: '/month', features: ['Unlimited team members', 'Custom AI model training', 'White-label solution'] }
      ],
      icon: '🎯',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'AI Content Generator',
      description: 'Create engaging content 10x faster with AI-powered writing',
      pricing: [
        { name: 'Creator', price: '$49', period: '/month', features: ['Up to 50 AI articles/month', 'Basic image generation', 'SEO optimization tools'] },
        { name: 'Professional', price: '$149', period: '/month', features: ['Up to 200 AI articles/month', 'Advanced image generation', 'Video script generation'] },
        { name: 'Enterprise', price: '$399', period: '/month', features: ['Unlimited AI content', 'Custom AI model training', 'White-label solution'] }
      ],
      icon: '✍️',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'AI Customer Support',
      description: '24/7 intelligent support with AI chatbots and automation',
      pricing: [
        { name: 'Starter', price: '$79', period: '/month', features: ['Up to 1,000 interactions/month', 'Basic AI chatbot', 'Email and chat support'] },
        { name: 'Professional', price: '$199', period: '/month', features: ['Up to 10,000 interactions/month', 'Advanced AI chatbot', 'Multi-channel support'] },
        { name: 'Enterprise', price: '$499', period: '/month', features: ['Unlimited interactions', 'Custom AI model training', 'White-label solution'] }
      ],
      icon: '🤖',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'AI Data Analytics',
      description: 'Transform data into actionable insights with predictive analytics',
      pricing: [
        { name: 'Analyst', price: '$129', period: '/month', features: ['Up to 10GB data storage', 'Basic AI analytics models', 'Standard dashboards'] },
        { name: 'Professional', price: '$299', period: '/month', features: ['Up to 100GB data storage', 'Advanced AI models', 'Custom dashboards'] },
        { name: 'Enterprise', price: '$699', period: '/month', features: ['Unlimited data storage', 'Custom AI model training', 'White-label solution'] }
      ],
      icon: '📊',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'AI Marketing Automation',
      description: 'Optimize campaigns with AI-powered targeting and personalization',
      pricing: [
        { name: 'Starter', price: '$89', period: '/month', features: ['Up to 5,000 contacts', 'Basic AI targeting', 'Email automation'] },
        { name: 'Professional', price: '$199', period: '/month', features: ['Up to 50,000 contacts', 'Advanced AI algorithms', 'Multi-channel automation'] },
        { name: 'Enterprise', price: '$499', period: '/month', features: ['Unlimited contacts', 'Custom AI model training', 'White-label solution'] }
      ],
      icon: '🎯',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const enterpriseFeatures = [
    'Custom AI model training and fine-tuning',
    'White-label solutions and branding',
    'Dedicated account manager and support',
    'SLA guarantees and uptime commitments',
    'Advanced security and compliance features',
    'Custom integrations and API access',
    'Multi-language support and localization',
    'Advanced analytics and reporting',
    'Team training and onboarding',
    'Priority feature development requests'
  ];

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group AI Services"
        description="Transparent pricing for our comprehensive suite of AI-powered services. Choose the plan that fits your business needs and scale as you grow."
        canonical="/pricing"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Choose the perfect plan for your business. All plans include a 14-day free trial 
                and no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Pricing */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI-powered services designed to transform 
                your business operations and drive growth.
              </p>
            </motion.div>

            <div className="space-y-16">
              {services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                  className="bg-glass-dark rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-xl text-gray-300">{service.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.pricing.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                          plan.name === 'Professional' 
                            ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                            : 'border-slate-700/50'
                        }`}
                      >
                        {plan.name === 'Professional' && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          </div>
                        )}
                        
                        <div className="text-center mb-6">
                          <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                          <div className="flex items-baseline justify-center mb-2">
                            <span className="text-3xl font-bold text-cyan-400">{plan.price}</span>
                            <span className="text-gray-400 ml-1">{plan.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 bg-slate-900/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Enterprise Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock advanced capabilities with our enterprise plans designed for large organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI services to transform their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
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
