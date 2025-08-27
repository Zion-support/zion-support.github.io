import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  ShoppingCart, 
  Users, 
  Building, 
  Rocket, 
  Crown, 
  Target, 
  Clock, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle,
  Lightbulb,
  Code,
  Server,
  Database,
  Smartphone,
  Truck,
  GraduationCap,
  BookOpen,
  Video,
  Image,
  FileText,
  Link,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Globe,
  Lock,
  BarChart3,
  Heart,
  Cpu,
  Atom,
  Network,
  Eye,
  Leaf,
  Satellite
} from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billing: string;
  features: string[];
  highlights: string[];
  icon: any;
  color: string;
  popular?: boolean;
  category: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  cta: string;
  ctaLink: string;
}

interface ServicePricing {
  category: string;
  icon: any;
  description: string;
  plans: PricingPlan[];
}

const servicePricing: ServicePricing[] = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    description: 'Advanced artificial intelligence and machine learning solutions',
    plans: [
      {
        id: 'ai-starter',
        name: 'AI Starter',
        description: 'Perfect for small businesses getting started with AI',
        price: '$2,500',
        billing: 'per month',
        features: [
          'AI-powered analytics dashboard',
          'Basic machine learning models',
          'Data preprocessing tools',
          'Email support',
          'Monthly reports',
          'Up to 10,000 data points'
        ],
        highlights: [
          'Quick setup in 2 weeks',
          'Basic AI training included',
          'Standard integrations'
        ],
        icon: Brain,
        color: 'from-blue-500 to-indigo-500',
        category: 'Starter',
        cta: 'Get Started',
        ctaLink: '/contact'
      },
      {
        id: 'ai-professional',
        name: 'AI Professional',
        description: 'Comprehensive AI solutions for growing businesses',
        price: '$8,500',
        billing: 'per month',
        features: [
          'Everything in AI Starter',
          'Advanced ML algorithms',
          'Custom model training',
          'Priority support',
          'Weekly reports',
          'Up to 100,000 data points',
          'API access',
          'Custom integrations'
        ],
        highlights: [
          'Advanced AI capabilities',
          'Custom model development',
          'Dedicated support team'
        ],
        icon: Brain,
        color: 'from-purple-500 to-pink-500',
        category: 'Professional',
        popular: true,
        cta: 'Start Free Trial',
        ctaLink: '/contact'
      },
      {
        id: 'ai-enterprise',
        name: 'AI Enterprise',
        description: 'Enterprise-grade AI solutions with full customization',
        price: '$25,000',
        billing: 'per month',
        features: [
          'Everything in AI Professional',
          'Unlimited data processing',
          'Custom AI model development',
          '24/7 dedicated support',
          'Real-time analytics',
          'Advanced security features',
          'White-label solutions',
          'Custom SLA agreements'
        ],
        highlights: [
          'Full AI customization',
          'Enterprise security',
          'Dedicated account manager'
        ],
        icon: Brain,
        color: 'from-indigo-500 to-purple-500',
        category: 'Enterprise',
        cta: 'Contact Sales',
        ctaLink: '/contact'
      }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Scalable cloud solutions and infrastructure management',
    plans: [
      {
        id: 'cloud-starter',
        name: 'Cloud Starter',
        description: 'Essential cloud infrastructure for small teams',
        price: '$1,500',
        billing: 'per month',
        features: [
          'Cloud migration support',
          'Basic infrastructure setup',
          'Monitoring and alerts',
          'Email support',
          'Monthly cost optimization',
          'Up to 5 environments'
        ],
        highlights: [
          'Quick cloud migration',
          'Cost optimization',
          'Basic monitoring'
        ],
        icon: Cloud,
        color: 'from-cyan-500 to-blue-500',
        category: 'Starter',
        cta: 'Get Started',
        ctaLink: '/contact'
      },
      {
        id: 'cloud-professional',
        name: 'Cloud Professional',
        description: 'Advanced cloud solutions for growing organizations',
        price: '$5,000',
        billing: 'per month',
        features: [
          'Everything in Cloud Starter',
          'Advanced DevOps automation',
          'Multi-cloud management',
          'Priority support',
          'Weekly optimization',
          'Up to 20 environments',
          'Custom automation scripts',
          'Performance optimization'
        ],
        highlights: [
          'DevOps automation',
          'Multi-cloud support',
          'Performance optimization'
        ],
        icon: Cloud,
        color: 'from-green-500 to-emerald-500',
        category: 'Professional',
        cta: 'Start Free Trial',
        ctaLink: '/contact'
      },
      {
        id: 'cloud-enterprise',
        name: 'Cloud Enterprise',
        description: 'Enterprise-grade cloud infrastructure and management',
        price: '$15,000',
        billing: 'per month',
        features: [
          'Everything in Cloud Professional',
          'Unlimited environments',
          'Custom automation',
          '24/7 dedicated support',
          'Real-time optimization',
          'Advanced security features',
          'Custom SLA agreements',
          'Dedicated cloud architects'
        ],
        highlights: [
          'Unlimited scalability',
          'Custom automation',
          'Dedicated support team'
        ],
        icon: Cloud,
        color: 'from-emerald-500 to-teal-500',
        category: 'Enterprise',
        cta: 'Contact Sales',
        ctaLink: '/contact'
      }
    ]
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    description: 'Advanced security and compliance solutions',
    plans: [
      {
        id: 'security-starter',
        name: 'Security Starter',
        description: 'Essential security for small businesses',
        price: '$3,000',
        billing: 'per month',
        features: [
          'Basic security assessment',
          'Vulnerability scanning',
          'Security monitoring',
          'Email support',
          'Monthly security reports',
          'Basic compliance support'
        ],
        highlights: [
          'Essential security coverage',
          'Regular monitoring',
          'Compliance support'
        ],
        icon: Shield,
        color: 'from-red-500 to-orange-500',
        category: 'Starter',
        cta: 'Get Started',
        ctaLink: '/contact'
      },
      {
        id: 'security-professional',
        name: 'Security Professional',
        description: 'Comprehensive security for growing organizations',
        price: '$10,000',
        billing: 'per month',
        features: [
          'Everything in Security Starter',
          'Advanced threat detection',
          'AI-powered security',
          'Priority support',
          'Weekly security updates',
          'Advanced compliance features',
          'Incident response support',
          'Security training'
        ],
        highlights: [
          'AI-powered security',
          'Advanced compliance',
          'Incident response'
        ],
        icon: Shield,
        color: 'from-orange-500 to-red-500',
        category: 'Professional',
        popular: true,
        cta: 'Start Free Trial',
        ctaLink: '/contact'
      },
      {
        id: 'security-enterprise',
        name: 'Security Enterprise',
        description: 'Enterprise-grade security with full protection',
        price: '$30,000',
        billing: 'per month',
        features: [
          'Everything in Security Professional',
          'Full security coverage',
          'Custom security solutions',
          '24/7 dedicated support',
          'Real-time threat response',
          'Advanced compliance features',
          'Custom SLA agreements',
          'Dedicated security team'
        ],
        highlights: [
          'Full security coverage',
          'Custom solutions',
          'Dedicated security team'
        ],
        icon: Shield,
        color: 'from-red-600 to-pink-600',
        category: 'Enterprise',
        cta: 'Contact Sales',
        ctaLink: '/contact'
      }
    ]
  },
  {
    category: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Specialized software solutions for specific needs',
    plans: [
      {
        id: 'saas-starter',
        name: 'SaaS Starter',
        description: 'Basic SaaS platform for small businesses',
        price: '$500',
        billing: 'per month',
        features: [
          'Basic SaaS platform',
          'Up to 100 users',
          'Standard features',
          'Email support',
          'Basic customization',
          'Monthly updates'
        ],
        highlights: [
          'Quick SaaS deployment',
          'Basic customization',
          'Affordable pricing'
        ],
        icon: ShoppingCart,
        color: 'from-purple-500 to-pink-500',
        category: 'Starter',
        cta: 'Get Started',
        ctaLink: '/contact'
      },
      {
        id: 'saas-professional',
        name: 'SaaS Professional',
        description: 'Advanced SaaS platform with customization',
        price: '$2,000',
        billing: 'per month',
        features: [
          'Everything in SaaS Starter',
          'Up to 1,000 users',
          'Advanced customization',
          'Priority support',
          'Custom integrations',
          'Advanced analytics',
          'White-label options',
          'API access'
        ],
        highlights: [
          'Advanced customization',
          'Custom integrations',
          'White-label options'
        ],
        icon: ShoppingCart,
        color: 'from-pink-500 to-rose-500',
        category: 'Professional',
        cta: 'Start Free Trial',
        ctaLink: '/contact'
      },
      {
        id: 'saas-enterprise',
        name: 'SaaS Enterprise',
        description: 'Full-featured SaaS platform for enterprises',
        price: '$8,000',
        billing: 'per month',
        features: [
          'Everything in SaaS Professional',
          'Unlimited users',
          'Full customization',
          '24/7 dedicated support',
          'Custom development',
          'Advanced security',
          'Custom SLA agreements',
          'Dedicated success manager'
        ],
        highlights: [
          'Full customization',
          'Custom development',
          'Dedicated support'
        ],
        icon: ShoppingCart,
        color: 'from-rose-500 to-pink-600',
        category: 'Enterprise',
        cta: 'Contact Sales',
        ctaLink: '/contact'
      }
    ]
  }
];

const addOnServices = [
  {
    name: 'Custom Development',
    description: 'Tailored software development for unique requirements',
    price: '$150',
    billing: 'per hour',
    icon: Code,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Training & Support',
    description: 'Comprehensive training and ongoing support',
    price: '$200',
    billing: 'per hour',
    icon: GraduationCap,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Consulting',
    description: 'Strategic technology consulting and planning',
    price: '$300',
    billing: 'per hour',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring',
    price: '$5,000',
    billing: 'per month',
    icon: Clock,
    color: 'from-orange-500 to-red-500'
  }
];

export function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('AI & Machine Learning');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const selectedService = servicePricing.find(service => service.category === selectedCategory);

  const getAnnualDiscount = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
    const annualPrice = price * 12 * 0.8; // 20% discount
    return `$${Math.round(annualPrice / 1000)}K`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and success.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mt-8"
          >
            <div className="bg-zion-slate-dark/50 rounded-lg p-1 border border-cyan-400/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Category Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {servicePricing.map((service) => (
            <button
              key={service.category}
              onClick={() => setSelectedCategory(service.category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === service.category
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-zion-slate-dark/50 text-gray-300 hover:text-white hover:bg-zion-slate-dark/70 border border-cyan-400/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <service.icon className="w-5 h-5" />
                <span>{service.category}</span>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedService && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.category}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{selectedService.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {selectedService.plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`relative bg-zion-slate-dark/50 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular
                      ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                      : 'border-cyan-400/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price : getAnnualDiscount(plan.price)}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {billingCycle === 'monthly' ? plan.billing : '/year'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-sm text-green-400">Save 20% with annual billing</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {plan.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-cyan-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={plan.ctaLink}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your solution with our specialized add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  {service.price}
                  <span className="text-sm text-gray-400 ml-1">{service.billing}</span>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find the perfect plan? We offer custom solutions tailored to your specific needs. Let's discuss your requirements and create a personalized proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="mailto:sales@ziontechgroup.com"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
