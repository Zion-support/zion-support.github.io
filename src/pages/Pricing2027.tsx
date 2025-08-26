import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket, 
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_SERVICES_2027, PRICING_TIERS_2027, CONTACT_INFO } from '@/data/innovativeServices2027';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Pricing2027() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedPlan, setSelectedPlan] = useState<string>('Professional');

  const getDiscountedPrice = (basePrice: number) => {
    if (billingCycle === 'yearly') {
      return Math.round(basePrice * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  const popularServices = INNOVATIVE_SERVICES_2027.filter(service => service.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="2027 Pricing Plans - Zion Tech Group"
        description="Comprehensive pricing for our 2027 innovative services including AI solutions, quantum technology, space tech, and micro SAAS services. Choose the perfect plan for your business."
        keywords="pricing 2027, AI services pricing, quantum computing pricing, Zion Tech Group pricing"
        canonical="https://ziontechgroup.com/pricing-2027"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20" />
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              2027 <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Pricing Plans</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Transparent pricing for our cutting-edge technology solutions. Choose the perfect plan 
              for your business needs and scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-zion-cyan rounded-full p-1 transition-colors duration-300"
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 inline-block px-2 py-1 bg-zion-green text-white text-xs rounded-full">
                    Save 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PRICING_TIERS_2027.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className={`group relative ${
                  selectedPlan === tier.name ? 'ring-2 ring-zion-cyan ring-offset-4 ring-offset-zion-slate-dark' : ''
                }`}
                onClick={() => setSelectedPlan(tier.name)}
              >
                {/* Popular Badge */}
                {tier.name === 'Professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full cursor-pointer">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-zion-cyan mb-2">
                      {formatPrice(getDiscountedPrice(tier.name === 'Starter' ? 2999 : tier.name === 'Professional' ? 19999 : 49999))}
                    </div>
                    <p className="text-zion-slate-light">{tier.description}</p>
                    {billingCycle === 'yearly' && (
                      <p className="text-zion-green text-sm mt-2">Billed annually</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <Check className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mb-6">
                    <span className="inline-block text-sm text-zion-slate-light mb-4">
                      {tier.services.length} services included
                    </span>
                  </div>

                  <div className="space-y-4">
                    <Link 
                      to="/contact"
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105 block text-center"
                    >
                      Get Started
                    </Link>
                    
                    <button
                      onClick={() => setSelectedPlan(tier.name)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 block text-center ${
                        selectedPlan === tier.name
                          ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan'
                          : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                      }`}
                    >
                      {selectedPlan === tier.name ? 'Selected' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Showcase */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our most popular and innovative technology solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-semibold border border-zion-cyan/30">
                        {service.category}
                      </span>
                    </div>
                    {service.featured && (
                      <div className="absolute top-4 left-4">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">{formatPrice(service.price)}</div>
                        <div className="text-sm text-zion-slate-light">Starting Price</div>
                      </div>
                    </div>

                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light/30'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount} reviews)</span>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                            <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link 
                      to={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-xl font-semibold text-center block hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {[
              {
                question: "What's included in each pricing tier?",
                answer: "Each tier includes a specific number of services, support level, and features. The Starter tier includes basic AI integration and core functionality, Professional includes advanced capabilities and priority support, while Enterprise provides full platform access and custom development."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle. Contact our sales team for assistance with plan changes."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements. Our team will work with you to create a tailored package that meets your business needs."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely through our payment partners."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all our services. This allows you to test our solutions and ensure they meet your requirements before committing to a paid plan."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-cyan-100 mb-8 max-w-2xl mx-auto">
              Have questions about our pricing or need help choosing the right plan? 
              Our team is here to help you make the best decision for your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-3 text-zion-cyan-100" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-zion-cyan-100">{CONTACT_INFO.mobile}</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-3 text-zion-cyan-100" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-zion-cyan-100">{CONTACT_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-3 text-zion-cyan-100" />
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-zion-cyan-100">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-blue rounded-xl font-semibold hover:bg-zion-cyan-50 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales Team
              </Link>
              <Link 
                to="/innovative-services-2027" 
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}