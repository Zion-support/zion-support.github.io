import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  ArrowRight,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  Target,
  Award,
  Code,
  Server,
  Database,
  Network,
  Lock,
  Globe,
  Rocket,
  Heart,
  Scale,
  Leaf,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  FileText,
  PenTool,
  MessageSquare,
  Settings,
  Gauge,
  Truck,
  BookOpen,
  Play,
  Atom,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 299, annual: 2990 },
      features: [
        'AI-powered business intelligence dashboard',
        'Basic cloud infrastructure setup',
        'Email support',
        'Monthly reports',
        'Up to 5 users',
        'Basic integrations'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 799, annual: 7990 },
      features: [
        'Everything in Starter',
        'Advanced AI analytics and insights',
        'Custom dashboard development',
        'Priority support',
        'Up to 25 users',
        'Advanced integrations',
        'Custom reporting',
        'Training sessions'
      ],
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 1999, annual: 19990 },
      features: [
        'Everything in Professional',
        'Custom AI model development',
        'Dedicated account manager',
        '24/7 priority support',
        'Unlimited users',
        'Custom integrations',
        'White-label solutions',
        'On-site training',
        'SLA guarantees'
      ],
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Legal Document Analyzer Pro',
      description: 'Advanced legal document analysis with AI',
      price: 299,
      period: 'month',
      features: [
        'Contract analysis & risk assessment',
        'Compliance checking',
        'Document review automation',
        'Legal research assistance',
        'Integration with legal tools',
        '24/7 support'
      ],
      icon: FileText,
      color: 'from-blue-500 to-indigo-500',
      category: 'AI & Legal Tech',
      setupTime: '5 minutes',
      roi: '1200% within 12 months'
    },
    {
      name: 'AI Healthcare Analytics Suite',
      description: 'Comprehensive healthcare AI platform',
      price: 799,
      period: 'month',
      features: [
        'Patient data analytics',
        'Predictive medicine',
        'Treatment optimization',
        'Operational efficiency',
        'HIPAA compliance',
        'Medical AI diagnostics'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      category: 'AI & Healthcare',
      setupTime: '2-3 weeks',
      roi: '1500% within 24 months'
    },
    {
      name: 'AI Financial Trading Platform',
      description: 'AI-powered financial trading solutions',
      price: 1299,
      period: 'month',
      features: [
        'Market data analysis',
        'Algorithmic trading',
        'Risk management',
        'Portfolio optimization',
        'Real-time insights',
        'Trading automation'
      ],
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500',
      category: 'FinTech',
      setupTime: '3-4 weeks',
      roi: '2000% within 36 months'
    },
    {
      name: 'AI Marketing Automation Suite',
      description: 'Intelligent marketing automation',
      price: 399,
      period: 'month',
      features: [
        'Campaign automation',
        'Customer journey optimization',
        'Personalization engine',
        'ROI optimization',
        'Multi-channel support',
        'Advanced analytics'
      ],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      category: 'AI & Marketing',
      setupTime: '1 week',
      roi: '900% within 15 months'
    },
    {
      name: 'AI Customer Support Automation',
      description: '24/7 AI customer support',
      price: 299,
      period: 'month',
      features: [
        '24/7 automated support',
        'Issue resolution',
        'Customer satisfaction',
        'Multi-language support',
        'Integration with CRM',
        'Performance analytics'
      ],
      icon: MessageSquare,
      color: 'from-blue-500 to-purple-500',
      category: 'AI & Customer Support',
      setupTime: '1 week',
      roi: '1100% within 12 months'
    },
    {
      name: 'AI HR Platform',
      description: 'Comprehensive HR automation',
      price: 599,
      period: 'month',
      features: [
        'Recruitment automation',
        'Employee onboarding',
        'Performance management',
        'Workforce analytics',
        'HR process automation',
        'Compliance management'
      ],
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      category: 'AI & HR',
      setupTime: '2 weeks',
      roi: '1000% within 18 months'
    },
    {
      name: 'AI Content Creation Studio',
      description: 'AI-powered content generation',
      price: 199,
      period: 'month',
      features: [
        'Article generation',
        'Blog writing',
        'Social media content',
        'SEO optimization',
        'Content planning',
        'Brand voice consistency'
      ],
      icon: PenTool,
      color: 'from-orange-500 to-red-500',
      category: 'AI & Content',
      setupTime: '5 minutes',
      roi: '800% within 10 months'
    },
    {
      name: 'AI Project Management Platform',
      description: 'Intelligent project management',
      price: 399,
      period: 'month',
      features: [
        'Risk prediction',
        'Resource optimization',
        'Task automation',
        'Real-time insights',
        'Team collaboration',
        'Progress tracking'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      category: 'AI & Operations',
      setupTime: '1 week',
      roi: '900% within 15 months'
    },
    {
      name: 'AI Workflow Automation',
      description: 'Smart workflow optimization',
      price: 349,
      period: 'month',
      features: [
        'Process analysis',
        'Automation opportunities',
        'Workflow optimization',
        'Efficiency improvement',
        'Integration support',
        'Performance monitoring'
      ],
      icon: Settings,
      color: 'from-cyan-500 to-blue-500',
      category: 'AI & Operations',
      setupTime: '1-2 weeks',
      roi: '850% within 14 months'
    },
    {
      name: 'AI Predictive Maintenance',
      description: 'IoT-powered maintenance prediction',
      price: 899,
      period: 'month',
      features: [
        'Equipment failure prediction',
        'Maintenance optimization',
        'Downtime reduction',
        'IoT sensor integration',
        'Real-time monitoring',
        'Cost optimization'
      ],
      icon: Gauge,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI & Operations',
      setupTime: '3-4 weeks',
      roi: '1200% within 24 months'
    },
    {
      name: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management',
      price: 499,
      period: 'month',
      features: [
        'Disruption prediction',
        'Inventory optimization',
        'Cost reduction',
        'Risk management',
        'Real-time tracking',
        'Performance analytics'
      ],
      icon: Truck,
      color: 'from-teal-500 to-cyan-500',
      category: 'AI & Operations',
      setupTime: '1-2 weeks',
      roi: '800% within 18 months'
    },
    {
      name: 'AI Autonomous Research Assistant',
      description: 'Autonomous research and analysis',
      price: 599,
      period: 'month',
      features: [
        'Autonomous research',
        'Data analysis',
        'Insight generation',
        'Report creation',
        'Multi-domain support',
        'Research automation'
      ],
      icon: BookOpen,
      color: 'from-violet-500 to-purple-500',
      category: 'AI & Research',
      setupTime: '2 weeks',
      roi: '1000% within 18 months'
    }
  ];

  const advancedServices = [
    {
      name: 'AI Quantum Hybrid Platform',
      description: 'Quantum AI hybrid computing',
      price: 2499,
      period: 'month',
      features: [
        'Quantum advantage',
        'Hybrid computing',
        'Complex optimization',
        'Machine learning acceleration',
        'Quantum algorithms',
        'Enterprise support'
      ],
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      category: 'Quantum Computing',
      setupTime: '6-8 weeks',
      roi: '2000% within 36 months'
    },
    {
      name: 'AI Space Technology Platform',
      description: 'Space AI and satellite operations',
      price: 3999,
      period: 'month',
      features: [
        'Satellite operations',
        'Space debris tracking',
        'Orbital optimization',
        'Mission planning',
        'Autonomous decision-making',
        'Space agency integration'
      ],
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      category: 'Space Technology',
      setupTime: '8-10 weeks',
      roi: '2500% within 48 months'
    },
    {
      name: 'AI Metaverse Platform',
      description: 'Next-gen metaverse experiences',
      price: 1499,
      period: 'month',
      features: [
        'Virtual reality experiences',
        'Digital asset creation',
        'Social interactions',
        'Content generation',
        'Blockchain integration',
        'Immersive environments'
      ],
      icon: Globe,
      color: 'from-purple-500 to-indigo-500',
      category: 'AI & Metaverse',
      setupTime: '4-6 weeks',
      roi: '1800% within 30 months'
    }
  ];

  const enterpriseSolutions = [
    {
      name: 'Enterprise AI Transformation Suite',
      description: 'Comprehensive enterprise AI transformation',
      price: 25000,
      period: 'one-time',
      features: [
        'AI strategy development',
        'Change management',
        'Training & implementation',
        'ROI measurement',
        'Custom AI models',
        'Dedicated support'
      ],
      icon: Building,
      color: 'from-blue-500 to-indigo-500',
      category: 'Enterprise Solutions',
      setupTime: '8-12 weeks',
      roi: '1000% within 18 months'
    },
    {
      name: 'Quantum-Resistant Cryptography Suite',
      description: 'Future-proof cryptography solution',
      price: 15000,
      period: 'one-time',
      features: [
        'Post-quantum cryptography',
        'Migration tools',
        'Compliance support',
        'Future-proof security',
        'Hardware integration',
        'Expert consultation'
      ],
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      category: 'Cybersecurity',
      setupTime: '6-8 weeks',
      roi: '800% within 24 months'
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <SEO 
        title="Transparent Pricing - AI Services & Solutions | Zion Tech Group"
        description="Discover transparent pricing for our comprehensive AI services, micro SaaS solutions, and enterprise offerings. Get started with AI transformation today."
        keywords="AI pricing, micro SaaS pricing, enterprise AI solutions, transparent pricing, AI services cost"
      />

      {/* Header Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
          >
            Choose the perfect plan for your AI transformation journey. 
            All prices are transparent with no hidden fees.
          </motion.p>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              {billingCycle === 'annual' && (
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Save 20%
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Main Pricing Plans */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our starter plan and scale up as your business grows. 
              All plans include our core AI capabilities and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-500 text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${billingCycle === 'annual' ? plan.price.annual / 12 : plan.price.monthly}
                    <span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-gray-500">
                      Billed annually (${plan.price.annual})
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.link}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Micro SaaS Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SaaS AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use AI solutions with transparent pricing. 
              Get started in minutes with our micro SaaS offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    ${service.price}
                    <span className="text-sm font-normal text-gray-500">/{service.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                    <span>Setup: {service.setupTime}</span>
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions for enterprises and organizations 
              requiring advanced AI and quantum computing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{service.description}</p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-white">
                    ${service.price}
                    <span className="text-sm font-normal text-gray-300">/{service.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                    <span>Setup: {service.setupTime}</span>
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom enterprise-grade solutions designed for large organizations 
              requiring comprehensive AI transformation and specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {solution.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.name}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">
                    ${solution.price.toLocaleString()}
                    <span className="text-lg font-normal text-gray-500"> {solution.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>Setup: {solution.setupTime}</span>
                    <span>ROI: {solution.roi}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our team to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in the setup process?
              </h3>
              <p className="text-gray-600">
                Our setup process includes initial configuration, data migration, user training, and integration with your existing systems. We provide comprehensive documentation and ongoing support to ensure a smooth transition.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences in pricing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom pricing for enterprise clients?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs and get a personalized quote.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-600">
                We provide comprehensive support including email support, phone support, live chat, and dedicated account management for enterprise clients. Response times vary by plan level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
