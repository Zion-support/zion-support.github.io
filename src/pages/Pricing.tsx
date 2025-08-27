import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Cloud, Brain, Users, Globe, ArrowRight, Phone, Mail, Star, Crown, Rocket } from 'lucide-react';
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
        { name: 'Advanced Security Suite', price: '$50,000', duration: '12-16 weeks' }
      ]
    },
    {
      name: 'Cloud Infrastructure',
      icon: Cloud,
      packages: [
        { name: 'Cloud Migration', price: '$10,000', duration: '4-6 weeks' },
        { name: 'Cloud Architecture', price: '$30,000', duration: '8-12 weeks' },
        { name: 'Multi-Cloud Strategy', price: '$75,000', duration: '16-20 weeks' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: '$2,000/month',
      icon: Users
    },
    {
      name: 'Custom Development',
      description: 'Tailored software solutions for your specific needs',
      price: '$150/hour',
      icon: Brain
    },
    {
      name: 'Training & Workshops',
      description: 'Team training and knowledge transfer sessions',
      price: '$500/day',
      icon: Users
    },
    {
      name: 'Performance Optimization',
      description: 'Continuous improvement and optimization services',
      price: '$1,500/month',
      icon: Zap
    }
  ];

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI, cybersecurity, and cloud services. Choose the perfect plan for your business needs."
        canonical="/pricing"
      />
      <div className="min-h-screen bg-futuristic py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <motion.section 
            className="text-center py-20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core services with flexible options to scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-neon inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.section>

          {/* Pricing Tiers */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options designed to meet your business needs and budget
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${tier.popular ? 'lg:scale-105' : ''}`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`card-futuristic h-full ${
                    tier.popular ? 'ring-2 ring-purple-500 shadow-2xl' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow">
                          {tier.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <tier.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-300 mb-6">{tier.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400">/{tier.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'btn-futuristic hover:shadow-lg'
                        : 'btn-neon hover:shadow-lg'
                    }`}>
                      {tier.popular ? 'Get Started Now' : 'Choose Plan'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Service Packages */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Individual Service <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Packages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Need specific services? Choose from our individual packages or combine them for a custom solution
              </p>
            </motion.div>
          
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {servicePackages.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="card-futuristic"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.packages.map((pkg, pkgIndex) => (
                      <motion.div 
                        key={pkgIndex} 
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                        whileHover={{ y: -4 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">{pkg.name}</h4>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                        <div className="text-sm text-gray-400 mb-4">Duration: {pkg.duration}</div>
                        <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
                          Learn More
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

          {/* Add-on Services */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                  className="card-futuristic text-center p-6 hover-lift"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <button className="btn-neon px-4 py-2 rounded-lg transition-all duration-300">
                    Add Service
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                  className="card-futuristic p-6 hover-lift"
                  whileHover={{ y: -4 }}
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
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="py-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Started</span>?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Contact us today to discuss your needs and get a personalized quote for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-futuristic inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-neon inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300">
                  Schedule Call
                </button>
              </div>
              
              <motion.div 
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
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
          </motion.section>
        </div>
      </div>
    </>
  );
}
