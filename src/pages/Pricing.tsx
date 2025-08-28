import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Satellite,
  Radar,
  Camera,
  Video,
  FileText,
  Calendar,
  Tag,
  TrendingUp,
  PieChart,
  LineChart,
  Scatter,
  Layers,
  Cube,
  Box,
  Package,
  Truck,
  Building,
  Factory,
  Warehouse,
  Home,
  Car,
  Plane,
  Ship,
  Database,
  Cloud,
  Eye,
  Brain,
  Network,
  Rocket,
  Clock,
  Users,
  Code
} from 'lucide-react';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: any;
  cta: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$499',
    period: '/month',
    features: [
      'AI-powered business intelligence dashboard',
      'Basic cloud infrastructure setup',
      'Security monitoring & alerts',
      'Email support',
      'Monthly performance reports',
      'Up to 5 team members',
      'Basic API access',
      'Standard compliance features'
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: Zap,
    cta: 'Get Started',
    ctaLink: '/contact'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: '$1,299',
    period: '/month',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Advanced AI workflow automation',
      'Custom cloud architecture design',
      'Priority support with 4-hour response',
      'Advanced analytics & reporting',
      'Up to 25 team members',
      'Custom integrations',
      'Advanced security features',
      'Compliance automation',
      'Performance optimization'
    ],
    color: 'from-purple-500 to-pink-500',
    icon: Star,
    cta: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 'Custom',
    period: '/month',
    features: [
      'Everything in Professional, plus:',
      'Custom AI model development',
      'Dedicated infrastructure',
      '24/7 dedicated support',
      'Unlimited team members',
      'Custom SLA agreements',
      'Advanced compliance features',
      'Multi-region deployment',
      'Custom integrations',
      'White-label solutions'
    ],
    color: 'from-zion-cyan to-zion-purple',
    icon: Shield,
    cta: 'Contact Sales',
    ctaLink: '/contact'
  }
];

const servicePricing = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Workflow Orchestrator', price: '$299/month', description: 'Automate complex business processes' },
      { name: 'AI Data Governance', price: '$199/month', description: 'Manage and secure your data' },
      { name: 'AI Customer Analytics', price: '$249/month', description: 'Deep insights into customer behavior' },
      { name: 'AI Sales Copilot', price: '$179/month', description: 'Boost sales performance with AI' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    services: [
      { name: 'Cloud Infrastructure', price: '$399/month', description: 'Scalable cloud solutions' },
      { name: 'DevOps Automation', price: '$349/month', description: 'Streamline development workflows' },
      { name: 'FinOps Optimization', price: '$199/month', description: 'Optimize cloud costs' },
      { name: 'Security Monitoring', price: '$299/month', description: '24/7 security oversight' }
    ]
  },
  {
    category: 'Micro SaaS Solutions',
    icon: Rocket,
    services: [
      { name: 'Micro CRM', price: '$99/month', description: 'Lightweight customer management' },
      { name: 'Helpdesk Platform', price: '$149/month', description: 'Customer support system' },
      { name: 'Website Analytics', price: '$79/month', description: 'Performance insights' },
      { name: 'Affiliate Tracking', price: '$129/month', description: 'Manage affiliate programs' }
    ]
  }
];

const addOns = [
  {
    name: 'Custom Integration',
    description: 'Connect with your existing tools and systems',
    price: '$2,500',
    icon: Settings
  },
  {
    name: 'Training & Onboarding',
    description: 'Get your team up to speed quickly',
    price: '$1,500',
    icon: Users
  },
  {
    name: 'Priority Support',
    description: '24/7 dedicated support with 1-hour response',
    price: '$500/month',
    icon: Bell
  },
  {
    name: 'Custom Development',
    description: 'Tailored solutions for your specific needs',
    price: '$150/hour',
    icon: Code
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI services 
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10' 
                    : 'border-zion-cyan/20 bg-white/5 backdrop-blur-sm hover:border-zion-cyan/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
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
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.ctaLink}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center block transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Individual services can be purchased separately or bundled with our main plans.
            </p>
          </motion.div>

          <div className="space-y-12">
            {servicePricing.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 + serviceIndex * 0.05 }}
                    >
                      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                        <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                        <Link
                          to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="w-full py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium text-center block"
                        >
                          Learn More
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Services & Add-ons
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your experience with our additional services and custom solutions.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-zion-cyan">{addon.price}</div>
                <Link
                  to="/contact"
                  className="mt-4 inline-block px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  Add Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-xl p-6 hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business and start transforming your operations with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
