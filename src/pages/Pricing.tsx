import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Leaf, 
  Globe, 
  Building, 
  Users, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Award,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Network,
  Lock,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Play,
  BookOpen,
  Code,
  Settings,
  BarChart3,
  Eye,
  FileText,
  HelpCircle,
  Crown,
  Sparkles
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'AI-powered business insights',
        'Basic analytics dashboard',
        'Email support',
        '5 user accounts',
        'Standard security features',
        'Monthly reports',
        'Basic integrations',
        'Community forum access'
      ],
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      cta: 'Get Started',
      href: '/request-quote?plan=starter'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 799, yearly: 7990 },
      features: [
        'Everything in Starter',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Unlimited user accounts',
        'Advanced security features',
        'Real-time monitoring',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Training sessions',
        'Advanced reporting'
      ],
      icon: Crown,
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      cta: 'Start Free Trial',
      href: '/request-quote?plan=professional'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 2499, yearly: 24990 },
      features: [
        'Everything in Professional',
        'Custom AI models',
        'White-label solutions',
        '24/7 dedicated support',
        'Unlimited everything',
        'Enterprise security',
        'Custom development',
        'On-premise deployment',
        'SLA guarantees',
        'Executive dashboard',
        'Custom training programs',
        'Strategic consulting'
      ],
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      cta: 'Contact Sales',
      href: '/request-quote?plan=enterprise'
    }
  ];

  const servicePricing = [
    {
      category: 'AI & Analytics Services',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'AI-powered analytics and business insights',
          pricing: 'From $500/month',
          features: ['Predictive analytics', 'Custom dashboards', 'Real-time insights'],
          icon: Brain,
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'AI Healthcare Platform',
          description: 'Medical AI diagnostics and patient care',
          pricing: 'From $1,200/month',
          features: ['HIPAA compliance', 'Medical imaging AI', 'Patient analytics'],
          icon: Heart,
          color: 'from-red-500 to-pink-500'
        },
        {
          name: 'AI Legal Tech',
          description: 'Document analysis and legal research',
          pricing: 'From $800/month',
          features: ['Contract analysis', 'Legal research', 'Compliance monitoring'],
          icon: Shield,
          color: 'from-blue-500 to-indigo-500'
        }
      ]
    },
    {
      category: 'Infrastructure & Cloud',
      services: [
        {
          name: 'Cloud & DevOps',
          description: 'Cloud infrastructure and automation',
          pricing: 'From $300/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring'],
          icon: Cloud,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Cybersecurity',
          description: 'AI-powered security solutions',
          pricing: 'From $600/month',
          features: ['Threat detection', 'Vulnerability assessment', 'Compliance'],
          icon: Lock,
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Data Analytics',
          description: 'Big data processing and insights',
          pricing: 'From $400/month',
          features: ['Data warehousing', 'ETL processes', 'Business intelligence'],
          icon: BarChart3,
          color: 'from-green-500 to-emerald-500'
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum algorithms and optimization',
          pricing: 'From $2,000/month',
          features: ['Quantum algorithms', 'Optimization problems', 'Research support'],
          icon: Atom,
          color: 'from-purple-500 to-violet-500'
        },
        {
          name: 'Digital Twin',
          description: 'Virtual representations of physical systems',
          pricing: 'From $1,500/month',
          features: ['3D modeling', 'Real-time monitoring', 'Predictive maintenance'],
          icon: Eye,
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge processing',
          pricing: 'From $800/month',
          features: ['Device management', 'Edge analytics', 'Real-time processing'],
          icon: Cpu,
          color: 'from-orange-500 to-red-500'
        }
      ]
    }
  ];

  const addOns = [
    {
      name: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      pricing: 'From $150/hour',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Training & Certification',
      description: 'Team training and skill development',
      pricing: 'From $200/hour',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Strategic Consulting',
      description: 'Expert guidance for technology decisions',
      pricing: 'From $300/hour',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support',
      pricing: 'From $500/month',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const savings = billingCycle === 'yearly' ? 17 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI-powered technology solutions. Choose from flexible plans starting at $299/month. Get started with a free consultation."
        canonical="https://ziontechgroup.com/pricing"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core AI-powered solutions 
              with transparent pricing and no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-slate-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-slate-800/80 border-cyan-400/50 shadow-2xl shadow-cyan-400/20'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price[billingCycle as keyof typeof plan.price]}</span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-400">
                      Save ${Math.round((plan.price.monthly * 12 - plan.price.yearly) / 100) * 100} annually
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.href}
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service-Specific Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for our specialized services and solutions
            </p>
          </motion.div>

          {servicePricing.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/request-quote"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your experience with our professional services and add-ons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${addon.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <div className="text-xl font-bold text-cyan-400 mb-4">{addon.pricing}</div>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements and volume needs.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can accommodate custom payment terms for enterprise clients.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation to discuss your needs and get a personalized quote for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
