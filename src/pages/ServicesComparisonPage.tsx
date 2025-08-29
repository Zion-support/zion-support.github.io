import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Brain, Rocket, Crown, Sparkles, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesComparisonPage() {
  const serviceTiers = [
    {
      name: 'Starter',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Analytics Dashboard',
        '5 AI-powered reports per month',
        'Email support',
        'Standard integrations',
        'Basic training materials'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Analytics Suite',
        'Unlimited AI reports',
        'Priority support',
        'Custom integrations',
        'Advanced training & webinars',
        'Dedicated success manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large enterprises',
      features: [
        'Full AI Platform Access',
        'Custom AI model training',
        '24/7 dedicated support',
        'White-label solutions',
        'On-site training',
        'Custom SLA agreements',
        'Dedicated account team'
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'AI Sales Copilot', starter: 'Limited', professional: 'Full', enterprise: 'Custom' },
        { name: 'AI Compliance Assistant', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'LLM Content Studio', starter: '5/month', professional: 'Unlimited', enterprise: 'Custom' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'Cloud FinOps Optimizer', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'Edge Computing Platform', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'AI Cybersecurity Suite', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'Zero Trust Architecture', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'AI Compliance Copilot', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      services: [
        { name: 'Digital Twin', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'IoT Edge Computing', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
        { name: 'Blockchain Solutions', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Services Comparison - Zion Tech Group"
        description="Compare our AI, cloud, cybersecurity, and digital transformation services. Choose the perfect solution for your business needs."
        canonical="/services-comparison"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services Comparison
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Compare our comprehensive range of AI-powered solutions and choose the perfect fit for your business transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Service Tier
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                From starter packages to enterprise solutions, we have the right level of service for every business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50' 
                      : 'bg-slate-800/50 border border-slate-700'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detailed Service Comparison
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See exactly what's included in each service category across all tiers.
              </p>
            </motion.div>

            <div className="space-y-12">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left py-4 px-4 text-gray-300 font-semibold">Service</th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">Starter</th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">Professional</th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.services.map((service, serviceIndex) => (
                          <tr key={serviceIndex} className="border-b border-slate-700/50">
                            <td className="py-4 px-4 text-white font-medium">{service.name}</td>
                            <td className="py-4 px-4 text-center text-gray-300">{service.starter}</td>
                            <td className="py-4 px-4 text-center text-gray-300">{service.professional}</td>
                            <td className="py-4 px-4 text-center text-gray-300">{service.enterprise}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get in touch with our experts to discuss your specific needs and find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Request Custom Quote
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