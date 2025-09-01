import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Check, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesPricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 299, annual: 2999 },
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Machine Learning Models',
        'Email Support',
        '5 User Licenses',
        'Standard Security Features',
        'Monthly Reports'
      ],
      popular: false,
      icon: Brain
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      price: { monthly: 799, annual: 7999 },
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Custom ML Model Training',
        'Priority Support',
        '25 User Licenses',
        'Advanced Security',
        'Real-time Monitoring',
        'API Access'
      ],
      popular: true,
      icon: Zap
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Full-scale solutions for large organizations',
      price: { monthly: 1999, annual: 19999 },
      features: [
        'Everything in Professional',
        'Custom AI Solutions',
        'Dedicated Support Team',
        'Unlimited User Licenses',
        'Enterprise Security',
        'Custom Integrations',
        'SLA Guarantees',
        'On-site Training'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Solutions',
      description: 'Machine learning, automation, and intelligent systems',
      startingPrice: 299,
      icon: Brain,
      features: [
        'AI Business Intelligence',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Custom ML Models'
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable infrastructure and automated deployment',
      startingPrice: 199,
      icon: Cloud,
      features: [
        'Cloud Migration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Security & Compliance'
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced threat protection and compliance',
      startingPrice: 399,
      icon: Shield,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ]
    },
    {
      name: 'Data & Analytics',
      description: 'Data processing, analysis, and visualization',
      startingPrice: 249,
      icon: Database,
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Data Visualization',
        'ETL Processes',
        'Performance Analytics'
=======
import { 
  Brain, Cloud, Shield, Zap, Rocket, Atom, Globe, Cpu, 
  Database, Lock, Smartphone, BarChart3, Code, Server, 
  Chip, Wifi, Bot, GitFork, Eye, Sparkles, Star, 
  TrendingUp, Award, Users, Target, ArrowRight, CheckCircle,
  Phone, Mail, MapPin, MessageSquare, FileText, Search,
  Clock, Calendar, DollarSign, ShieldCheck, Network,
  Satellite, Truck, Building, PenTool, Eye, Server,
  Crown, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  color: string;
  icon: React.ComponentType<any>;
}

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricingPlans: PricingPlan[];
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

const ServicesPricingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const services: Service[] = [
    {
      id: 'ai-autonomous-business-manager',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages your entire business operations, from decision-making to execution.',
      category: 'AI & Autonomous Systems',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Autonomous decision-making engine',
        'Real-time business intelligence',
        'Predictive analytics and forecasting',
        'Automated resource allocation',
        'Multi-channel communication management',
        'Performance optimization algorithms'
      ],
      benefits: [
        '24/7 autonomous operation',
        'Data-driven decision making',
        'Cost reduction through automation',
        'Scalable business growth',
        'Risk mitigation and compliance'
      ],
      useCases: [
        'Enterprise business management',
        'Multi-location operations',
        'E-commerce optimization',
        'Service industry automation'
      ],
      pricingPlans: [
        {
          name: 'Starter',
          price: '$15,000',
          period: '/month',
          description: 'Perfect for small businesses starting their AI journey',
          features: [
            'Basic autonomous decision making',
            'Core business intelligence',
            'Process automation (up to 10 workflows)',
            'Standard integrations',
            'Email support',
            'Monthly reporting'
          ],
          cta: 'Get Started',
          popular: false,
          color: 'from-purple-500 to-pink-500',
          icon: Brain
        },
        {
          name: 'Professional',
          price: '$35,000',
          period: '/month',
          description: 'Ideal for growing businesses with complex operations',
          features: [
            'Advanced autonomous decision making',
            'Comprehensive business intelligence',
            'Unlimited process automation',
            'Advanced integrations',
            'Priority support',
            'Real-time reporting',
            'Custom dashboards',
            'API access'
          ],
          cta: 'Get Started',
          popular: true,
          color: 'from-purple-600 to-pink-600',
          icon: Crown
        },
        {
          name: 'Enterprise',
          price: '$75,000',
          period: '/month',
          description: 'For large enterprises requiring maximum automation',
          features: [
            'Full autonomous business management',
            'Enterprise-grade intelligence',
            'Custom AI model development',
            'White-label solutions',
            'Dedicated support team',
            'Custom integrations',
            'Advanced analytics',
            'Multi-tenant architecture'
          ],
          cta: 'Contact Sales',
          popular: false,
          color: 'from-purple-700 to-pink-700',
          icon: Crown
        }
      ]
    },
    {
      id: 'quantum-ai-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with advanced AI for solving previously impossible problems.',
      category: 'Quantum Computing & AI',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      features: [
        '1000+ qubit quantum access',
        'AI-quantum hybrid algorithms',
        'Quantum machine learning',
        'Cryptographic security',
        'Real-time quantum simulation',
        'Hybrid classical-quantum workflows'
      ],
      benefits: [
        'Exponential computational power',
        'Unprecedented problem-solving capability',
        'Future-proof technology investment',
        'Competitive advantage in research',
        'Breakthrough innovation potential'
      ],
      useCases: [
        'Drug discovery and molecular modeling',
        'Financial portfolio optimization',
        'Climate change modeling',
        'Cryptography and cybersecurity'
      ],
      pricingPlans: [
        {
          name: 'Quantum Starter',
          price: '$25,000',
          period: '/month',
          description: 'Perfect for research institutions and startups exploring quantum computing',
          features: [
            '100 qubit access',
            'Basic quantum algorithms',
            'AI-quantum integration',
            'Standard support',
            'Monthly reporting',
            'Basic quantum training'
          ],
          cta: 'Get Started',
          popular: false,
          color: 'from-blue-500 to-cyan-500',
          icon: Atom
        },
        {
          name: 'Quantum Professional',
          price: '$75,000',
          period: '/month',
          description: 'Ideal for growing companies requiring advanced quantum capabilities',
          features: [
            '500+ qubit access',
            'Advanced quantum algorithms',
            'Full AI-quantum hybrid',
            'Priority support',
            'Real-time analytics',
            'Custom quantum models',
            'API access',
            'Advanced training'
          ],
          cta: 'Get Started',
          popular: true,
          color: 'from-blue-600 to-cyan-600',
          icon: Crown
        },
        {
          name: 'Quantum Enterprise',
          price: '$150,000',
          period: '/month',
          description: 'For large enterprises requiring maximum quantum computing power',
          features: [
            '1000+ qubit access',
            'Custom quantum development',
            'White-label solutions',
            'Dedicated quantum team',
            'Custom integrations',
            'Advanced security',
            'Multi-tenant access',
            'Research collaboration'
          ],
          cta: 'Contact Sales',
          popular: false,
          color: 'from-blue-700 to-cyan-700',
          icon: Crown
        }
      ]
    },
    {
      id: 'ai-cybersecurity-elite',
      title: 'AI-Powered Cybersecurity Elite',
      description: 'Next-generation cybersecurity platform using AI to predict, detect, and respond to threats in real-time.',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: [
        'AI threat prediction',
        'Zero-day attack detection',
        'Automated incident response',
        'Behavioral analysis',
        'Threat intelligence fusion',
        'Compliance automation'
      ],
      benefits: [
        'Proactive threat prevention',
        'Reduced false positives',
        '24/7 security monitoring',
        'Compliance assurance',
        'Cost-effective security'
      ],
      useCases: [
        'Financial institutions',
        'Healthcare organizations',
        'Government agencies',
        'Enterprise corporations'
      ],
      pricingPlans: [
        {
          name: 'Security Starter',
          price: '$20,000',
          period: '/month',
          description: 'Essential cybersecurity for growing businesses',
          features: [
            'Basic AI threat detection',
            'Standard security monitoring',
            'Email support',
            'Monthly security reports',
            'Basic compliance tools',
            'Up to 100 endpoints'
          ],
          cta: 'Get Started',
          popular: false,
          color: 'from-red-500 to-orange-500',
          icon: Shield
        },
        {
          name: 'Security Professional',
          price: '$50,000',
          period: '/month',
          description: 'Comprehensive security for established enterprises',
          features: [
            'Advanced AI threat detection',
            'Real-time monitoring',
            'Priority support',
            'Custom security policies',
            'Advanced compliance',
            'Unlimited endpoints',
            'Custom integrations',
            '24/7 monitoring'
          ],
          cta: 'Get Started',
          popular: true,
          color: 'from-red-600 to-orange-600',
          icon: Crown
        },
        {
          name: 'Security Enterprise',
          price: '$100,000',
          period: '/month',
          description: 'Maximum security for large organizations',
          features: [
            'Full AI cybersecurity suite',
            'Custom threat models',
            'Dedicated security team',
            'White-label solutions',
            'Advanced analytics',
            'Custom development',
            'Multi-tenant security',
            'Research collaboration'
          ],
          cta: 'Contact Sales',
          popular: false,
          color: 'from-red-700 to-orange-700',
          icon: Crown
        }
      ]
    },
    {
      id: 'micro-saas-launch-platform',
      title: 'Micro-SaaS Launch Platform',
      description: 'Complete platform for launching, scaling, and managing micro-SaaS businesses with proven templates.',
      category: 'Micro-SaaS Solutions',
      icon: Rocket,
      color: 'from-yellow-600 to-orange-600',
      features: [
        'Pre-built SaaS templates',
        'Payment processing integration',
        'User management system',
        'Analytics and reporting',
        'Multi-tenant architecture',
        'API management platform'
      ],
      benefits: [
        'Rapid time to market',
        'Proven business models',
        'Scalable architecture',
        'Reduced development costs',
        'Built-in monetization'
      ],
      useCases: [
        'Startup entrepreneurs',
        'Small business owners',
        'Digital agencies',
        'Enterprise innovation teams'
      ],
      pricingPlans: [
        {
          name: 'Launch Starter',
          price: '$5,000',
          period: '/month',
          description: 'Perfect for launching your first SaaS product',
          features: [
            'Basic SaaS template',
            'Payment integration',
            'User management',
            'Basic analytics',
            'Email support',
            'Standard hosting'
          ],
          cta: 'Launch Now',
          popular: false,
          color: 'from-yellow-500 to-orange-500',
          icon: Rocket
        },
        {
          name: 'Launch Professional',
          price: '$15,000',
          period: '/month',
          description: 'Ideal for growing SaaS businesses',
          features: [
            'Advanced templates',
            'Advanced analytics',
            'Custom integrations',
            'Priority support',
            'Custom branding',
            'Advanced security',
            'API access',
            'Custom development'
          ],
          cta: 'Launch Now',
          popular: true,
          color: 'from-yellow-600 to-orange-600',
          icon: Crown
        },
        {
          name: 'Launch Enterprise',
          price: '$25,000',
          period: '/month',
          description: 'For large-scale SaaS operations',
          features: [
            'Custom SaaS development',
            'White-label solutions',
            'Dedicated support team',
            'Custom integrations',
            'Advanced analytics',
            'Multi-tenant management',
            'Custom security',
            'Research collaboration'
          ],
          cta: 'Contact Sales',
          popular: false,
          color: 'from-yellow-700 to-orange-700',
          icon: Crown
        }
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      ]
    }
  ];

<<<<<<< HEAD
  const addOns = [
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: { monthly: 199, annual: 1999 },
      icon: Clock
    },
    {
      name: 'Custom Development',
      description: 'Tailored solutions for specific business needs',
      price: { monthly: 499, annual: 4999 },
      icon: Zap
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive training programs for your team',
      price: { monthly: 299, annual: 2999 },
      icon: Users
    },
    {
      name: 'Advanced Security',
      description: 'Enhanced security features and compliance',
      price: { monthly: 399, annual: 3999 },
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Inc.',
      content: 'Zion Tech Group transformed our infrastructure with their AI solutions. The pricing is transparent and the value is incredible.',
      rating: 5,
      company: 'TechFlow Inc.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP Engineering, DataSphere',
      content: 'Their enterprise plan gave us everything we needed at a fraction of the cost of building in-house.',
      rating: 5,
      company: 'DataSphere'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, Quantum Labs',
      content: 'The professional plan exceeded our expectations. Great ROI and excellent support.',
      rating: 5,
      company: 'Quantum Labs'
    }
  ];

  const calculatePrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
  };

  const calculateSavings = (plan: any) => {
    if (billingCycle === 'annual') {
      return Math.round((plan.price.monthly * 12 - plan.price.annual) / (plan.price.monthly * 12) * 100);
    }
    return 0;
  };

  return (
    <>
      <SEO 
        title="Services & Pricing - Zion Tech Group"
        description="Explore our comprehensive AI, cloud, and cybersecurity services with transparent pricing. Find the perfect plan for your business needs."
        keywords="AI services pricing, cloud solutions cost, cybersecurity pricing, technology consulting rates, Zion Tech Group pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Award className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Transparent Pricing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Services & Pricing
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Choose the perfect plan for your business. Our transparent pricing ensures you know exactly 
                what you're getting and how much it costs.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    billingCycle === 'annual' ? 'bg-purple-500' : 'bg-slate-400'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
                <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
                  Annual
                  {billingCycle === 'annual' && (
                    <span className="ml-2 text-sm bg-purple-500 text-white px-2 py-1 rounded-full">
                      Save up to 20%
                    </span>
                  )}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Start with our starter plan and scale up as your business grows. 
                All plans include our core features with different levels of support and customization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${
                    plan.popular 
                      ? 'ring-2 ring-purple-500 scale-105' 
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-full transition-all duration-300 hover:scale-105 rounded-xl p-8 border ${
                    plan.popular 
                      ? 'bg-purple-500/10 border-purple-500/50' 
                      : 'bg-slate-800/50 border-slate-700/50'
                  } backdrop-blur-sm`}>
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                        plan.popular 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-cyan-500 text-slate-900'
                      }`}>
                        <plan.icon className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white">
                        {plan.name}
                      </h3>
                      
                      <p className="text-slate-300">
                        {plan.description}
                      </p>
                      
                      <div className="mt-6">
                        <div className="text-4xl font-bold text-white">
                          ${calculatePrice(plan)}
                          <span className="text-lg text-slate-400">
                            /{billingCycle === 'monthly' ? 'mo' : 'year'}
                          </span>
                        </div>
                        {billingCycle === 'annual' && (
                          <div className="text-sm text-purple-400 font-medium mt-2">
                            Save {calculateSavings(plan)}% with annual billing
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                          plan.popular 
                            ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                            : 'bg-cyan-500 hover:bg-cyan-600 text-slate-900'
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
=======
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai-autonomous', name: 'AI & Autonomous', icon: Brain },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => {
        if (activeCategory === 'ai-autonomous') return service.category.includes('AI');
        if (activeCategory === 'quantum-ai') return service.category.includes('Quantum');
        if (activeCategory === 'cybersecurity') return service.category.includes('Cybersecurity');
        if (activeCategory === 'micro-saas') return service.category.includes('Micro-SaaS');
        return true;
      });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge AI, quantum computing, and technology solutions. 
              Choose the plan that fits your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.map((service, serviceIndex) => (
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
              className="mb-20"
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services. 
                Each category can be customized to meet your specific requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                      
                      <p className="text-slate-300">
                        {category.description}
                      </p>
                      
                      <div className="text-2xl font-bold text-cyan-400">
                        Starting at ${category.startingPrice}/mo
                      </div>
                    </div>
                    
                    <div>
                      <ul className="space-y-2 mb-6">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        className="w-full py-3 px-6 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Enhance your plan with these additional services. 
                Mix and match to create the perfect solution for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-4">
                        <addon.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white">
                        {addon.name}
                      </h3>
                      
                      <p className="text-slate-300">
                        {addon.description}
                      </p>
                      
                      <div className="text-2xl font-bold text-cyan-400">
                        ${addon.price[billingCycle as keyof typeof addon.price]}/{billingCycle === 'monthly' ? 'mo' : 'year'}
                      </div>
                    </div>
                    
                    <div>
                      <button 
                        className="w-full py-3 px-6 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 rounded-lg transition-colors"
                      >
                        Add Service
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say 
                about our services and pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-slate-300 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t border-slate-600/50 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                      <div className="text-xs text-slate-400">{testimonial.company}</div>
                    </div>
                  </div>
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get answers to common questions about our services and pricing structure.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold mb-4">What's included in each plan?</h3>
                <p className="text-slate-300">
                  All our services include implementation, training, documentation, and 24/7 support. 
                  Custom integrations and additional features can be added based on your requirements.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold mb-4">Do you offer custom pricing?</h3>
                <p className="text-slate-300">
                  Yes, we provide custom pricing for enterprise solutions and specialized requirements. 
                  Contact us for a personalized quote tailored to your business needs.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold mb-4">What payment terms do you offer?</h3>
                <p className="text-slate-300">
                  We offer flexible payment terms including upfront payment, milestone-based payments, 
                  and monthly/annual subscription options for ongoing services.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold mb-4">Is there a money-back guarantee?</h3>
                <p className="text-slate-300">
                  We offer a satisfaction guarantee. If you're not completely satisfied with our services 
                  within the first 30 days, we'll work to make it right or provide a refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-8 text-center text-white mx-4 sm:mx-6 lg:mx-8 mb-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 text-slate-200">
            Let's discuss your project requirements and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-purple-600 hover:bg-slate-100 py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center"
              onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Service Consultation`, '_blank')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Schedule Consultation
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
=======
              {/* Service Header */}
              <div className="text-center mb-12">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">{service.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Plans */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.pricingPlans.map((plan, planIndex) => (
                  <motion.div
                    key={planIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: planIndex * 0.1 }}
                    className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                      plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-gray-700/50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-1">
                        {plan.price}
                        <span className="text-lg text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button 
                      onClick={() => setShowContactModal(true)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      {plan.cta}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Service Details */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TargetIcon className="w-5 h-5 text-green-400" />
                    Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">• {useCase}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <ZapIcon className="w-5 h-5 text-purple-400" />
                    Why Choose This
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {service.description.split('.')[0]}. Get started today and transform your business with cutting-edge technology.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Ready to Get Started?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Request Custom Quote
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">Contact Sales Team</h2>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Our sales team is ready to help you choose the perfect plan for your business needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default ServicesPricingPage;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
