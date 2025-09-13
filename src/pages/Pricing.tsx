import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  TrendingUp,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Shield },
    { id: 'saas', name: 'Micro SAAS', icon: Cpu },
    { id: 'solutions', name: 'Solutions', icon: HardDrive }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'ai',
      description: 'Advanced AI-powered threat detection and response system',
      features: [
        'Real-time threat detection',
        'AI behavioral analysis',
        'Automated incident response',
        '24/7 monitoring',
        'Compliance reporting'
      ],
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      popular: true,
      icon: ShieldCheck,
      link: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics',
      category: 'ai',
      description: 'Predictive healthcare analytics and patient care optimization',
      features: [
        'Patient risk assessment',
        'Treatment optimization',
        'Predictive diagnostics',
        'HIPAA compliance',
        'Real-time monitoring'
      ],
      monthlyPrice: 3999,
      yearlyPrice: 39990,
      popular: false,
      icon: Activity,
      link: '/services/ai-healthcare-platform'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      category: 'ai',
      description: 'Intelligent supply chain management and optimization',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Risk assessment',
        'Cost analysis'
      ],
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      popular: false,
      icon: Workflow,
      link: '/services/ai-supply-chain-optimization'
    },
    {
      id: 'ai-quantum',
      name: 'AI-Quantum Hybrid Platform',
      category: 'ai',
      description: 'Next-generation quantum-AI hybrid computing platform',
      features: [
        'Quantum algorithm optimization',
        'AI model acceleration',
        'Hybrid computing',
        'Research collaboration',
        'Custom development'
      ],
      monthlyPrice: 9999,
      yearlyPrice: 99990,
      popular: false,
      icon: Atom,
      link: '/services/ai-quantum-hybrid-platform'
    },

    // IT Services
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Services',
      category: 'it',
      description: 'Comprehensive cloud infrastructure and DevOps automation',
      features: [
        'Cloud migration',
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Monitoring & alerting',
        'Security compliance'
      ],
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      popular: false,
      icon: Shield,
      link: '/services/cloud-devops'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'it',
      description: 'Enterprise-grade cybersecurity and compliance solutions',
      features: [
        'Security audits',
        'Penetration testing',
        'Compliance management',
        'Incident response',
        'Security training'
      ],
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      popular: false,
      icon: Lock,
      link: '/services/cybersecurity'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      category: 'it',
      description: 'End-to-end digital transformation consulting and implementation',
      features: [
        'Strategy development',
        'Process optimization',
        'Technology implementation',
        'Change management',
        'ROI tracking'
      ],
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      popular: false,
      icon: TrendingUp,
      link: '/services/digital-transformation'
    },

    // Micro SAAS
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'saas',
      description: 'Intelligent project management with AI-powered insights',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Risk prediction',
        'Team collaboration',
        'Analytics dashboard'
      ],
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: true,
      icon: Workflow,
      link: '/services/ai-project-management-platform'
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Platform',
      category: 'saas',
      description: 'Comprehensive HR management with AI-powered recruitment',
      features: [
        'AI candidate matching',
        'Performance analytics',
        'Employee engagement',
        'Compliance tracking',
        'Integration APIs'
      ],
      monthlyPrice: 149,
      yearlyPrice: 1490,
      popular: false,
      icon: Users,
      link: '/services/ai-hr-platform'
    },
    {
      id: 'micro-crm',
      name: 'Micro CRM Solution',
      category: 'saas',
      description: 'Lightweight CRM designed for small to medium businesses',
      features: [
        'Contact management',
        'Sales pipeline',
        'Email integration',
        'Basic analytics',
        'Mobile app'
      ],
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: false,
      icon: Database,
      link: '/services/micro-crm'
    },

    // Industry Solutions
    {
      id: 'healthcare-solutions',
      name: 'Healthcare Technology Solutions',
      category: 'solutions',
      description: 'Comprehensive healthcare technology and compliance solutions',
      features: [
        'HIPAA compliance',
        'Patient data security',
        'Telemedicine platforms',
        'Medical device integration',
        'Regulatory support'
      ],
      monthlyPrice: 3999,
      yearlyPrice: 39990,
      popular: false,
      icon: Activity,
      link: '/solutions/healthcare'
    },
    {
      id: 'financial-solutions',
      name: 'Financial Technology Solutions',
      category: 'solutions',
      description: 'Secure financial technology and regulatory compliance',
      features: [
        'PCI DSS compliance',
        'Fraud detection',
        'Regulatory reporting',
        'Secure transactions',
        'Audit trails'
      ],
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      popular: false,
      icon: Coins,
      link: '/solutions/financial'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      category: 'solutions',
      description: 'Cutting-edge quantum computing applications and research',
      features: [
        'Quantum algorithm development',
        'Research collaboration',
        'Custom applications',
        'Training programs',
        'Consulting services'
      ],
      monthlyPrice: 7999,
      yearlyPrice: 79990,
      popular: false,
      icon: Atom,
      link: '/solutions/quantum-computing'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getMonthlyPrice = (service: any) => {
    return billingCycle === 'monthly' ? service.monthlyPrice : Math.round(service.yearlyPrice / 12);
  };

  const getYearlyPrice = (service: any) => {
    return billingCycle === 'yearly' ? service.yearlyPrice : service.monthlyPrice * 12;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Comprehensive pricing for AI services, IT solutions, and micro SAAS platforms. Competitive rates for enterprise and SMB solutions."
        keywords="pricing, AI services, IT solutions, micro SAAS, cybersecurity, healthcare, quantum computing"
      />

      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Transparent Pricing for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              {" "}Innovation
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-slate-light mb-8"
          >
            Choose the perfect plan for your business needs. All prices include enterprise-grade support, 
            regular updates, and comprehensive documentation.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              <span className="ml-1 text-zion-cyan">(Save 10%)</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-12 px-4"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 ${
                  service.popular ? 'ring-2 ring-zion-cyan' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">
                      {formatPrice(getMonthlyPrice(service))}
                    </span>
                    <span className="text-zion-slate-light ml-2">/month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-zion-cyan mt-1">
                      Billed annually ({formatPrice(getYearlyPrice(service))})
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 px-4 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="block w-full bg-transparent border border-zion-purple text-zion-purple text-center py-3 px-4 rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enterprise Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-zion-blue-dark border-t border-zion-purple/30 py-16"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            We offer custom enterprise solutions tailored to your specific requirements. 
            Contact us for a personalized quote and consultation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">Middletown, DE 19709</p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-8 py-4 rounded-lg font-medium hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/25"
          >
            <span>Get Custom Quote</span>
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-zion-slate-light">
                We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.
              </p>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Do you offer free trials?
              </h3>
              <p className="text-zion-slate-light">
                Yes, we offer 14-day free trials for most of our SAAS solutions. Contact us for enterprise trial arrangements.
              </p>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-zion-slate-light">
                Absolutely! You can cancel your subscription at any time with no penalties or hidden fees.
              </p>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What kind of support do you provide?
              </h3>
              <p className="text-zion-slate-light">
                We provide 24/7 technical support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
