import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

const ExpandedServicesPricingGuide2027: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI automation',
      price: billingPeriod === 'yearly' ? '$2,500' : '$3,000',
      period: billingPeriod === 'yearly' ? '/year' : '/month',
      features: [
        'Basic AI Process Automation',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Performance Reports',
        'Basic Analytics Dashboard',
        'Up to 5 Users',
        'Standard Security Features'
      ],
      icon: CogIcon,
      color: 'from-blue-500 to-cyan-600',
      buttonText: 'Get Started',
      buttonVariant: 'secondary'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses needing advanced AI capabilities',
      price: billingPeriod === 'yearly' ? '$5,500' : '$6,500',
      period: billingPeriod === 'yearly' ? '/year' : '/month',
      features: [
        'Advanced AI Automation Suite',
        'Predictive Analytics',
        'Priority Support (24/7)',
        'Weekly Performance Reports',
        'Advanced Analytics & BI',
        'Up to 25 Users',
        'Enhanced Security Features',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      popular: true,
      icon: RocketLaunchIcon,
      color: 'from-purple-500 to-pink-600',
      buttonText: 'Most Popular',
      buttonVariant: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations with complex needs',
      price: 'Custom',
      period: '',
      features: [
        'Full AI Transformation Suite',
        'Custom AI Model Development',
        'Dedicated Account Manager',
        'Real-time Performance Monitoring',
        'Enterprise Analytics Platform',
        'Unlimited Users',
        'Enterprise Security & Compliance',
        'Custom Integrations & APIs',
        'White-label Solutions',
        'On-site Training & Support',
        'SLA Guarantee'
      ],
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-emerald-600',
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary'
    }
  ];

  const addonServices = [
    {
      name: 'Advanced Analytics',
      description: 'Enhanced reporting and business intelligence capabilities',
      price: '+$500/month'
    },
    {
      name: 'Custom AI Development',
      description: 'Tailored AI models for specific business needs',
      price: '+$2,000/month'
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with faster response times',
      price: '+$800/month'
    },
    {
      name: 'Training & Consulting',
      description: 'Comprehensive training and strategic consulting services',
      price: '+$1,200/month'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CurrencyDollarIcon className="w-5 h-5" />
              <span>Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pricing Guide
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 2027</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI automation 
              services with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  billingPeriod === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={itemVariants}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-purple-400/50 ring-2 ring-purple-400/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <StarIcon className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                    tier.buttonVariant === 'primary'
                      ? `bg-gradient-to-r ${tier.color} text-white hover:scale-105 shadow-lg hover:shadow-xl`
                      : 'border-2 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {tier.buttonText}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {addonServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>
                  <span className="text-blue-400 font-bold text-lg">{service.price}</span>
                </div>
                <button className="w-full py-2 px-4 border border-blue-400 text-blue-400 rounded-full font-semibold text-sm hover:bg-blue-400 hover:text-white transition-colors duration-200">
                  Add to Plan
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "What's included in the setup fee?",
                answer: "The setup fee covers initial configuration, data migration, system integration, and basic training for your team. This is a one-time fee."
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Absolutely! Our Enterprise plan is fully customizable to meet your specific requirements. Contact our sales team to discuss your needs."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide email support for Starter plans, priority support for Professional plans, and dedicated account management for Enterprise customers."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss which plan is right for your business and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
                Download Pricing Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExpandedServicesPricingGuide2027;