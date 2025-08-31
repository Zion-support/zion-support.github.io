import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Check,
  X,
  Star,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Building,
  Smartphone,
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Brain,
  Cloud,
  Database,
  Cpu,
  Lock,
  Network,
  Code,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Rocket,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Mock data for services and pricing
const EXPANDED_SERVICES = [
  {
    id: 'ai-autonomous-research',
    title: 'AI Autonomous Research Assistant',
    category: 'AI Automation',
    description: 'Advanced AI-powered research tool that autonomously gathers, analyzes, and synthesizes information from multiple sources.',
    features: [
      'Natural language processing',
      'Multi-source data aggregation',
      'Intelligent content synthesis',
      'Real-time updates',
      'Custom research workflows'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$599/month',
      enterprise: 'Custom'
    }
  },
  {
    id: 'ai-supply-chain',
    title: 'AI Supply Chain Optimization',
    category: 'Supply Chain',
    description: 'Intelligent supply chain management with predictive analytics and automated optimization.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Risk assessment',
      'Real-time monitoring'
    ],
    pricing: {
      starter: '$499/month',
      professional: '$999/month',
      enterprise: 'Custom'
    }
  },
  {
    id: 'ai-content-marketing',
    title: 'AI Content Marketing Suite',
    category: 'Content Marketing',
    description: 'Comprehensive AI-powered content creation and marketing automation platform.',
    features: [
      'Content generation',
      'SEO optimization',
      'Social media automation',
      'Performance analytics',
      'A/B testing'
    ],
    pricing: {
      starter: '$199/month',
      professional: '$399/month',
      enterprise: 'Custom'
    }
  },
  {
    id: 'ai-workflow-orchestrator',
    title: 'AI Workflow Orchestrator',
    category: 'AI Automation',
    description: 'Intelligent workflow automation that learns and optimizes business processes.',
    features: [
      'Process automation',
      'Machine learning optimization',
      'Integration capabilities',
      'Performance monitoring',
      'Custom workflows'
    ],
    pricing: {
      starter: '$399/month',
      professional: '$799/month',
      enterprise: 'Custom'
    }
  },
  {
    id: 'ai-customer-experience',
    title: 'AI Customer Experience Analytics',
    category: 'Customer Intelligence',
    description: 'Advanced analytics platform for understanding and improving customer experiences.',
    features: [
      'Sentiment analysis',
      'Behavior tracking',
      'Predictive analytics',
      'Personalization engine',
      'ROI measurement'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$599/month',
      enterprise: 'Custom'
    }
  },
  {
    id: 'ai-financial-risk',
    title: 'AI Financial Risk Management',
    category: 'FinTech',
    description: 'Intelligent risk assessment and management for financial institutions.',
    features: [
      'Risk modeling',
      'Fraud detection',
      'Compliance monitoring',
      'Real-time alerts',
      'Regulatory reporting'
    ],
    pricing: {
      starter: '$599/month',
      professional: '$1,199/month',
      enterprise: 'Custom'
    }
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI Cybersecurity Solutions',
    category: 'Cybersecurity',
    description: 'Next-generation cybersecurity powered by artificial intelligence and machine learning.',
    features: [
      'Threat detection',
      'Behavioral analysis',
      'Automated response',
      'Vulnerability assessment',
      'Incident management'
    ],
    pricing: {
      starter: '$399/month',
      professional: '$799/month',
      enterprise: 'Custom'
    }
  }
];

const SERVICE_PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$199',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI capabilities',
      'Email support',
      'Standard integrations',
      'Basic analytics',
      'Community forum access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$499',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Advanced AI features',
      'Priority support',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated account manager',
      'Training sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Full AI suite access',
      '24/7 dedicated support',
      'Custom development',
      'White-label options',
      'On-premise deployment',
      'SLA guarantees',
      'Custom training programs'
    ],
    popular: false
  }
];

const SERVICE_BENEFITS = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Leverage cutting-edge artificial intelligence to automate complex tasks and gain valuable insights.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance, encryption, and advanced threat protection.'
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Built on cloud-native architecture that scales with your business needs.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 technical support from our team of AI and technology experts.'
  },
  {
    icon: Rocket,
    title: 'Rapid Implementation',
    description: 'Quick setup and deployment with our streamlined onboarding process.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Trusted by Fortune 500 companies with measurable ROI and success stories.'
  }
];

// Group services by category for better organization
const servicesByCategory = EXPANDED_SERVICES.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as { [key: string]: typeof EXPANDED_SERVICES });

// Pricing comparison features
const pricingFeatures = [
  "AI-Powered Solutions",
  "24/7 Support",
  "Global Coverage",
  "Custom Integration",
  "Training & Documentation",
  "Regular Updates",
  "Security Compliance",
  "Scalable Architecture"
];

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('professional');
  
  const categories = Object.keys(servicesByCategory);
  const filteredServices = selectedCategory === 'all'
    ? EXPANDED_SERVICES
    : servicesByCategory[selectedCategory] || [];

  const getCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'AI Automation': <Zap className="h-5 w-5" />,
      'Customer Intelligence': <Users className="h-5 w-5" />,
      'Content Marketing': <TrendingUp className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Threat Intelligence': <Shield className="h-5 w-5" />,
      'Cloud Management': <Globe className="h-5 w-5" />,
      'DevOps': <Zap className="h-5 w-5" />,
      'Data Analytics': <TrendingUp className="h-5 w-5" />,
      'IoT & Predictive Analytics': <Zap className="h-5 w-5" />,
      'Business Intelligence': <TrendingUp className="h-5 w-5" />,
      'Digital Transformation': <Building className="h-5 w-5" />,
      'Edge Computing': <Globe className="h-5 w-5" />,
      'API Management': <Zap className="h-5 w-5" />,
      'Blockchain & Web3': <Zap className="h-5 w-5" />,
      'Mobile Development': <Smartphone className="h-5 w-5" />,
      'E-commerce': <ShoppingCart className="h-5 w-5" />,
      'Healthcare Technology': <Heart className="h-5 w-5" />,
      'FinTech': <TrendingUp className="h-5 w-5" />,
      'Education Technology': <GraduationCap className="h-5 w-5" />,
      'Supply Chain': <Truck className="h-5 w-5" />
    };
    return categoryIcons[category] || <Zap className="h-5 w-5" />;
  };

  return (
    <>
      <SEO 
        title="Services & Pricing - Zion Tech Group"
        description="Explore our comprehensive AI and technology services with transparent pricing. Choose the perfect plan for your business needs."
        keywords="AI services, pricing, technology solutions, AI automation, cybersecurity, cloud services, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Services &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Choose the perfect AI and technology solutions for your business. 
                Transparent pricing, flexible plans, and enterprise-grade support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get Custom Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI & Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to transform your business through 
                artificial intelligence and cutting-edge technology.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">
                        {service.pricing.professional}
                      </span>
                      <span className="text-gray-400">Professional Plan</span>
                    </div>
                    <a
                      href={`/contact?service=${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business. 
                Start small and grow with us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICE_PRICING_TIERS.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                    tier.popular
                      ? 'border-cyan-400/50 scale-105 shadow-2xl shadow-cyan-400/20'
                      : 'border-white/20 hover:border-cyan-400/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver more than just technology solutions. We provide a partnership 
                that drives your business forward.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_BENEFITS.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and technology solutions can drive your success. 
                Get a custom quote tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
