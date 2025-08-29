import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  MessageCircle,
  ArrowRight,
  Crown,
  Sparkles,
  Rocket,
  Brain,
  Cloud,
  Lock,
  FileText,
  Heart,
  TrendingUp,
  Cpu,
  Atom,
  Smartphone,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 299, annual: 249 },
      description: 'Perfect for small businesses getting started with technology',
      features: [
        'AI Business Intelligence Basic',
        'Cloud Infrastructure Setup',
        'Basic Security Monitoring',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users',
        'Basic AI Content Optimization',
        'Standard Backup Services'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      icon: Star,
      price: { monthly: 799, annual: 649 },
      description: 'Ideal for growing companies with advanced technology needs',
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Full Cloud DevOps Suite',
        '24/7 Security Monitoring',
        'Priority Support',
        'Up to 25 Users',
        'Custom Integrations',
        'Quarterly Strategy Sessions',
        'AI Legal Document Automation',
        'Healthcare Analytics Platform',
        'Financial Trading Risk Management',
        'Supply Chain Optimization'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 1999, annual: 1599 },
      description: 'Comprehensive solutions for large enterprises',
      features: [
        'Everything in Professional',
        'Custom AI Solutions',
        'Full Digital Transformation',
        'Zero Trust Security',
        'Dedicated Account Manager',
        'Unlimited Users',
        'Onsite Support',
        'Custom SLA Agreements',
        'Quantum Computing Platform',
        'Space Technology Solutions',
        'Advanced Cybersecurity Suite',
        'Biotech & Health Innovation'
      ],
      color: 'from-amber-500 to-orange-600',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 500, annual: 4500 },
      icon: Brain
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: { monthly: 800, annual: 7200 },
      icon: Cloud
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: { monthly: 300, annual: 2700 },
      icon: Shield
    },
    {
      name: 'AI Legal Document Automation',
      description: 'Legal document automation and compliance',
      price: { monthly: 399, annual: 3591 },
      icon: FileText
    },
    {
      name: 'AI Healthcare Analytics',
      description: 'Predictive healthcare analytics platform',
      price: { monthly: 599, annual: 5391 },
      icon: Heart
    },
    {
      name: 'AI Financial Trading Platform',
      description: 'Financial trading and risk management',
      price: { monthly: 799, annual: 7191 },
      icon: TrendingUp
    },
    {
      name: 'Edge Computing Platform',
      description: 'IoT and edge computing solutions',
      price: { monthly: 699, annual: 6291 },
      icon: Cpu
    },
    {
      name: 'Quantum Computing Platform',
      description: 'Quantum computing and optimization',
      price: { monthly: 999, annual: 8991 },
      icon: Atom
    },
    {
      name: 'Space Technology Solutions',
      description: 'Satellite and space technology management',
      price: { monthly: 1299, annual: 11691 },
      icon: Rocket
    },
    {
      name: 'Blockchain Development',
      description: 'Custom blockchain and smart contract solutions',
      price: { monthly: 449, annual: 4041 },
      icon: Lock
    },
    {
      name: 'Mobile App Development',
      description: 'Custom mobile application development',
      price: { monthly: 1800, annual: 16200 },
      icon: Smartphone
    },
    {
      name: 'Web Development Services',
      description: 'Custom website and e-commerce development',
      price: { monthly: 1200, annual: 10800 },
      icon: Globe
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      services: [
        { name: 'AI Business Intelligence', price: 'From $5,000' },
        { name: 'AI Sales Copilot', price: 'From $3,500' },
        { name: 'AI Content Optimizer Pro', price: 'From $199/month' },
        { name: 'AI Legal Document Automation', price: 'From $399/month' },
        { name: 'AI Healthcare Analytics', price: 'From $599/month' },
        { name: 'AI Financial Trading Platform', price: 'From $799/month' },
        { name: 'AI Supply Chain Optimization', price: 'From $349/month' },
        { name: 'AI HR Platform', price: 'From $249/month' },
        { name: 'AI Education Platform', price: 'From $199/month' },
        { name: 'AI Project Management', price: 'From $299/month' },
        { name: 'AI Customer Success Platform', price: 'From $399/month' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      services: [
        { name: 'Cloud Migration Services', price: 'From $3,200/month' },
        { name: 'DevOps Automation', price: 'From $2,100/month' },
        { name: 'Edge Computing Platform', price: 'From $699/month' },
        { name: 'Micro SaaS Solutions', price: 'From $199/month' },
        { name: 'Cloud FinOps Optimizer', price: 'From $1,500/month' },
        { name: 'FinOps Advisor', price: 'From $800/month' }
      ]
    },
    {
      name: 'Cybersecurity',
      services: [
        { name: 'AI Cybersecurity Suite', price: 'From $599/month' },
        { name: 'Zero Trust Network Architecture', price: 'From $2,500/month' },
        { name: 'Smart Contract Risk Scanner', price: 'From $449/month' },
        { name: 'Cybersecurity Audit & Compliance', price: 'From $1,800/month' },
        { name: 'Network Security Services', price: 'From $1,200/month' },
        { name: 'Email Security Services', price: 'From $600/month' },
        { name: 'Endpoint Security Services', price: 'From $900/month' }
      ]
    },
    {
      name: 'IT Services',
      services: [
        { name: 'Enterprise IT Infrastructure', price: 'From $2,500/month' },
        { name: 'Managed IT Services', price: 'From $1,500/month' },
        { name: 'Data Backup & Recovery', price: 'From $800/month' },
        { name: 'Mobile App Development', price: 'From $1,800/month' },
        { name: 'Web Development Services', price: 'From $1,200/month' },
        { name: 'Data Analytics & BI', price: 'From $1,500/month' },
        { name: 'Digital Transformation', price: 'From $4,500/month' },
        { name: 'IoT Solutions Development', price: 'From $2,800/month' },
        { name: 'Blockchain Development', price: 'From $3,500/month' }
      ]
    },
    {
      name: 'Emerging Technologies',
      services: [
        { name: 'Quantum Computing Solutions', price: 'From $999/month' },
        { name: 'Space Technology', price: 'From $1,299/month' },
        { name: 'Sustainability Solutions', price: 'From $349/month' },
        { name: 'Metaverse Development', price: 'From $599/month' },
        { name: 'Autonomous Systems', price: 'From $799/month' },
        { name: 'Biotech & Health Innovation', price: 'From $899/month' },
        { name: 'FinTech & DeFi Platform', price: 'From $649/month' }
      ]
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive AI, cloud, and technology solutions. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, cloud services pricing, technology solutions pricing, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All our pricing is transparent with no hidden fees, 
              and includes comprehensive support and implementation assistance.
            </p>
            
            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  tier.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white">
                      ${tier.price[billingCycle]}
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-green-400 mt-1">
                        Billed annually (${tier.price.annual * 12})
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105'
                      : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600 hover:border-slate-500'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enhance your solution with our specialized add-on services designed to meet specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${service.price[billingCycle]}
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <Link
                  to="/request-quote"
                  className="w-full text-center py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-colors text-sm"
                >
                  Add Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services with transparent pricing. 
              All services include 24/7 support and regular updates.
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  {category.name === 'AI & Analytics' && <Brain className="w-6 h-6 mr-2 text-purple-600" />}
                  {category.name === 'Cloud & DevOps' && <Cloud className="w-6 h-6 mr-2 text-blue-600" />}
                  {category.name === 'Cybersecurity' && <Shield className="w-6 h-6 mr-2 text-red-600" />}
                  {category.name === 'IT Services' && <Server className="w-6 h-6 mr-2 text-gray-600" />}
                  {category.name === 'Emerging Technologies' && <Rocket className="w-6 h-6 mr-2 text-indigo-600" />}
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team can create a tailored package that perfectly fits your business requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
