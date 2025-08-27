import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Cloud, Brain, Users, Globe, ArrowRight, Phone, Mail, Star, Crown, Rocket, Code, GraduationCap } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$2,500',
      period: 'per month',
      features: [
        'AI-powered chatbot implementation',
        'Basic cybersecurity assessment',
        'Cloud migration consultation',
        '5 hours of technical support',
        'Monthly performance reports',
        'Basic analytics dashboard'
      ],
      popular: false,
      color: 'from-cyan-400 to-blue-500',
      icon: Zap,
      badge: 'Popular'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprises',
      price: '$7,500',
      period: 'per month',
      features: [
        'Everything in Starter, plus:',
        'Custom AI model development',
        'Advanced cybersecurity implementation',
        'Full cloud infrastructure setup',
        'DevOps automation',
        '24/7 monitoring and support',
        'Advanced analytics and reporting',
        'Dedicated account manager'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      icon: Crown,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: '$15,000',
      period: 'per month',
      features: [
        'Everything in Professional, plus:',
        'Custom enterprise AI solutions',
        'Advanced threat detection systems',
        'Multi-cloud architecture',
        'Digital transformation consulting',
        'Custom software development',
        'Advanced data analytics',
        'Priority support and SLA guarantees',
        'On-site implementation support'
      ],
      popular: false,
      color: 'from-blue-500 to-indigo-600',
      icon: Rocket,
      badge: 'Enterprise'
    }
  ];

  const servicePackages = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      packages: [
        { name: 'Basic AI Integration', price: '$5,000', duration: '2-4 weeks' },
        { name: 'Custom AI Development', price: '$25,000', duration: '8-12 weeks' },
        { name: 'Enterprise AI Platform', price: '$100,000', duration: '16-24 weeks' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      packages: [
        { name: 'Security Assessment', price: '$3,000', duration: '1-2 weeks' },
        { name: 'Security Implementation', price: '$15,000', duration: '4-8 weeks' },
        { name: 'Advanced Security Platform', price: '$50,000', duration: '12-16 weeks' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      packages: [
        { name: 'Cloud Migration', price: '$10,000', duration: '4-8 weeks' },
        { name: 'Infrastructure Setup', price: '$30,000', duration: '8-12 weeks' },
        { name: 'Multi-Cloud Architecture', price: '$75,000', duration: '16-20 weeks' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: '$1,500/month',
      icon: Users
    },
    {
      name: 'Custom Development',
      description: 'Tailored software solutions for your business',
      price: '$150/hour',
      icon: Code
    },
    {
      name: 'Training & Workshops',
      description: 'Team training and skill development programs',
      price: '$2,000/day',
      icon: GraduationCap
    },
    {
      name: 'Consulting',
      description: 'Strategic technology consulting and planning',
      price: '$200/hour',
      icon: Brain
    }
  ];

  return (
    <>
      <SEO
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive technology solutions. Choose the plan that fits your business needs."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <motion.section
          className="py-20 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your business. All plans include our core services with transparent pricing and no hidden fees.
            </p>
          </motion.div>
        </motion.section>

        {/* Pricing Tiers */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your business growth
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                    tier.popular
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25'
                      : 'border-slate-700/50'
                  } hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-400/25'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Service Packages */}
        <motion.section
          className="py-20 bg-slate-800/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Packages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized packages for specific technology needs
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {servicePackages.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {service.packages.map((pkg, pkgIndex) => (
                      <div key={pkgIndex} className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-white">{pkg.name}</h4>
                          <span className="text-cyan-400 font-bold">{pkg.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm">Duration: {pkg.duration}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-medium hover:from-green-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Add-on Services */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your experience with our add-on services and specialized support options
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {addOnServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{service.description}</p>
                  <div className="text-xl font-bold text-blue-400 mb-4 text-center">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-500 hover:to-indigo-600 transition-all duration-300">
                    Add Service
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="py-20 bg-slate-800/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  question: "Can I change my plan at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
                },
                {
                  question: "Do you offer custom pricing for enterprise clients?",
                  answer: "Absolutely! We work with enterprise clients to create custom pricing packages that meet their specific needs and requirements."
                },
                {
                  question: "What's included in the support hours?",
                  answer: "Support hours include technical assistance, troubleshooting, and guidance for all services included in your plan."
                },
                {
                  question: "Is there a setup fee?",
                  answer: "Setup fees vary by plan and complexity. Contact us for a detailed quote based on your specific requirements."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Started</span>?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Contact us today to discuss your needs and get a personalized quote for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-white text-purple-600 px-8 py-4 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Schedule Call
                </button>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-3 hover:underline group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors" />
                  <span className="text-white group-hover:text-yellow-300 transition-colors">+1 302 464 0950</span>
                </motion.a>
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center space-x-3 hover:underline group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors" />
                  <span className="text-white group-hover:text-yellow-300 transition-colors">kleber@ziontechgroup.com</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
