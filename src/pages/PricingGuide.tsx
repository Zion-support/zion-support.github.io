import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Users,
  Globe,
  Lock,
  Cpu,
  Database,
  Heart,
  Building
} from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per month',
    description: 'Perfect for small businesses and startups',
    icon: Star,
    color: 'from-blue-400 to-cyan-500',
    features: [
      'AI Business Intelligence Basic',
      'Cloud Infrastructure Setup',
      'Basic Security Implementation',
      'Email Support',
      'Monthly Reports',
      'Up to 5 Users'
    ],
    limitations: [
      'Limited AI model training',
      'Basic cloud monitoring',
      'Standard security features'
    ],
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: 'per month',
    description: 'Ideal for growing businesses and mid-market companies',
    icon: Award,
    color: 'from-purple-400 to-pink-500',
    features: [
      'AI Business Intelligence Pro',
      'Advanced Cloud DevOps',
      'Enhanced Security Suite',
      'Priority Support',
      'Weekly Reports',
      'Up to 25 Users',
      'Custom AI Models',
      'Advanced Analytics'
    ],
    limitations: [
      'Some advanced features limited',
      'Standard compliance packages'
    ],
    cta: 'Start Free Trial',
    href: '/contact',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large enterprises with complex requirements',
    icon: Building,
    color: 'from-yellow-400 to-orange-500',
    features: [
      'Full AI Suite Access',
      'Custom Cloud Architecture',
      'Enterprise Security',
      '24/7 Dedicated Support',
      'Real-time Monitoring',
      'Unlimited Users',
      'Custom Development',
      'White-label Solutions',
      'On-site Implementation',
      'Compliance Certifications'
    ],
    limitations: [],
    cta: 'Contact Sales',
    href: '/contact'
  }
];

const servicePricing = [
  {
    category: 'AI & Analytics',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    services: [
      {
        name: 'AI Business Intelligence',
        price: 'From $3,000/month',
        description: 'Machine learning-powered analytics and insights',
        features: ['Predictive Analytics', 'Custom Dashboards', 'Real-time Insights', 'AI Model Training']
      },
      {
        name: 'AI Sales Copilot',
        price: 'From $2,500/month',
        description: 'AI-driven sales automation and optimization',
        features: ['Lead Scoring', 'Sales Forecasting', 'CRM Integration', 'Performance Analytics']
      },
      {
        name: 'LLM Content Studio',
        price: 'From $1,800/month',
        description: 'AI-powered content creation and management',
        features: ['Content Generation', 'Brand Consistency', 'Multi-format Output', 'SEO Optimization']
      }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    services: [
      {
        name: 'Cloud DevOps',
        price: 'From $5,000/month',
        description: 'End-to-end cloud infrastructure and automation',
        features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Cloud Migration', 'Performance Optimization']
      },
      {
        name: 'Cloud FinOps Optimizer',
        price: 'From $3,500/month',
        description: 'Cloud cost optimization and management',
        features: ['Cost Monitoring', 'Resource Optimization', 'Budget Management', 'ROI Analysis']
      }
    ]
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-400 to-orange-500',
    services: [
      {
        name: 'AI Compliance Copilot',
        price: 'From $4,500/month',
        description: 'AI-powered security and compliance automation',
        features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Auditing']
      },
      {
        name: 'Zero Trust Architecture',
        price: 'From $8,000/month',
        description: 'Modern security framework implementation',
        features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring']
      }
    ]
  },
  {
    category: 'Digital Solutions',
    icon: Rocket,
    color: 'from-green-400 to-emerald-500',
    services: [
      {
        name: 'Digital Twin',
        price: 'From $12,000/month',
        description: 'Real-time digital simulation and monitoring',
        features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics']
      },
      {
        name: 'Micro SaaS Solutions',
        price: 'From $6,000/month',
        description: 'Custom SaaS applications for niche markets',
        features: ['Custom Development', 'User Management', 'Analytics Dashboard', 'API Integration']
      }
    ]
  }
];

const pricingFactors = [
  {
    title: 'Project Complexity',
    description: 'More complex implementations require additional resources and time',
    icon: Cpu,
    color: 'from-blue-400 to-cyan-500',
    factors: ['Integration requirements', 'Custom development needs', 'Data migration complexity']
  },
  {
    title: 'User Scale',
    description: 'Larger user bases require more robust infrastructure and support',
    icon: Users,
    color: 'from-purple-400 to-pink-500',
    factors: ['Number of users', 'Concurrent usage patterns', 'Geographic distribution']
  },
  {
    title: 'Compliance Requirements',
    description: 'Industry-specific compliance adds complexity and cost',
    icon: Lock,
    color: 'from-red-400 to-orange-500',
    factors: ['Industry regulations', 'Data privacy requirements', 'Security certifications']
  },
  {
    title: 'Support Level',
    description: 'Higher support levels provide better response times and dedicated resources',
    icon: Clock,
    color: 'from-green-400 to-emerald-500',
    factors: ['Response time guarantees', 'Dedicated support team', 'On-site assistance']
  }
];

const costOptimization = [
  {
    title: 'Start Small, Scale Smart',
    description: 'Begin with essential services and expand as your business grows',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Bundle Services',
    description: 'Combine multiple services for better pricing and integration',
    icon: Zap,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Long-term Commitments',
    description: 'Commit to longer terms for better pricing and priority support',
    icon: Award,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Custom Solutions',
    description: 'Work with our team to create tailored solutions that fit your budget',
    icon: Rocket,
    color: 'from-green-400 to-emerald-500'
  }
];

export default function PricingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing Guide - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's technology services. Choose from flexible plans or get custom enterprise pricing."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Pricing Guide
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our comprehensive technology services. Choose the plan that fits your business needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/30"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 h-full">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-slate-400 ml-2">{tier.period}</span>
                    </div>
                    <p className="text-slate-300">{tier.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {tier.limitations.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-400 mb-4">Limitations</h4>
                      <ul className="space-y-2">
                        {tier.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="text-sm text-slate-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Link
                    to={tier.href}
                    className={`w-full px-6 py-3 rounded-xl font-semibold text-center block transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-400/25'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {servicePricing.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + serviceIndex * 0.05 }}
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                      <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to="/contact"
                        className="w-full px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors duration-300 text-center block"
                      >
                        Get Quote
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understanding the factors that influence service costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${factor.color} rounded-lg flex items-center justify-center`}>
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{factor.title}</h3>
                </div>
                
                <p className="text-slate-300 mb-4">{factor.description}</p>
                
                <ul className="space-y-2">
                  {factor.factors.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cost Optimization Tips
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Smart strategies to maximize value while minimizing costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costOptimization.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tip.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                <p className="text-slate-300 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your needs and find the perfect pricing solution
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-600/50">
              <p className="text-slate-400 text-sm">
                Questions about pricing? Contact our sales team at{' '}
                <a href="mailto:sales@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  sales@ziontechgroup.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}