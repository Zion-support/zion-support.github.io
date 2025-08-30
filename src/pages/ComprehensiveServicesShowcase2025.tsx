import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, Shield, Rocket, Cpu, Globe, Zap, Users, ShoppingCart,
  MessageCircle, BookOpen, Settings, BarChart3, Database, Network,
  Smartphone, Monitor, Server, ShieldCheck, Globe2, Leaf, Satellite,
  Atom, Code, FileText, GraduationCap, Building, Briefcase, Lightbulb,
  Sparkles, ArrowRight, CheckCircle, Star, TrendingUp, DollarSign,
  Heart, Lock, Cloud, Eye, Workflow, Bot, Gamepad2, Coins,
  Activity, MessageCircle, BarChart, Users2, Settings as SettingsIcon,
  Palette, Target, Handshake, Wifi, Chip, Server2, ShieldCheck as ShieldCheckIcon
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge AI solutions for enterprise transformation',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Multi-agent AI coordination & workflow automation',
          price: '$12,000/month',
          href: '/services/ai-enterprise-orchestrator',
          features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration']
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'AI-powered threat detection and response',
          price: '$8,500/month',
          href: '/services/ai-cybersecurity-suite',
          features: ['Threat detection', 'Real-time response', 'Compliance automation']
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Predictive diagnostics and care optimization',
          price: '$15,000/month',
          href: '/services/ai-healthcare-analytics',
          features: ['Predictive analytics', 'Diagnostic support', 'Care optimization']
        },
        {
          name: 'AI Edge Computing Platform',
          description: 'Real-time AI processing at the edge',
          price: '$7,500/month',
          href: '/services/AI-Edge-Computing-Platform',
          features: ['Real-time processing', 'Distributed intelligence', 'IoT integration']
        },
        {
          name: 'AI Digital Twin Platform',
          description: 'Intelligent digital replicas with AI analytics',
          price: '$8,500/month',
          href: '/services/AI-Digital-Twin-Platform',
          features: ['Real-time simulation', 'AI analytics', '3D visualization']
        }
      ]
    },
    {
      name: 'IT Infrastructure & DevOps',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      description: 'Scalable infrastructure solutions for modern businesses',
      services: [
        {
          name: 'Cloud DevOps Platform',
          description: 'End-to-end DevOps automation and management',
          price: '$6,500/month',
          href: '/services/cloud-devops',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting']
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Advanced security framework for modern networks',
          price: '$9,500/month',
          href: '/services/ZeroTrustNetworkArchitecture',
          features: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring']
        },
        {
          name: 'Incident Response Platform',
          description: 'Comprehensive incident management and response',
          price: '$7,500/month',
          href: '/services/incident-response-platform',
          features: ['Real-time alerts', 'Automated response', 'Forensic analysis']
        },
        {
          name: 'Uptime SLA Monitor',
          description: 'Proactive monitoring and SLA management',
          price: '$4,500/month',
          href: '/services/UptimeSLAMonitor',
          features: ['24/7 monitoring', 'SLA tracking', 'Performance analytics']
        }
      ]
    },
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      description: 'Specialized software solutions for specific business needs',
      services: [
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial management',
          price: '$5,500/month',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost optimization', 'Budget management', 'Resource allocation']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting',
          price: '$6,500/month',
          href: '/services/ai-compliance-assistant',
          features: ['Regulatory compliance', 'Automated reporting', 'Risk assessment']
        },
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and business insights',
          price: '$8,500/month',
          href: '/services/ai-business-intelligence',
          features: ['Data analytics', 'Predictive insights', 'Custom dashboards']
        },
        {
          name: 'AI Customer Support Automation',
          description: 'Intelligent customer service automation',
          price: '$4,500/month',
          href: '/services/ai-customer-support-automation',
          features: ['Chatbot automation', 'Ticket routing', 'Customer insights']
        },
        {
          name: 'SOC2 Compliance Tracker',
          description: 'SOC2 compliance management and tracking',
          price: '$7,500/month',
          href: '/services/SOC2ComplianceTracker',
          features: ['Compliance tracking', 'Audit preparation', 'Risk management']
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Atom,
      color: 'from-orange-600 to-red-600',
      description: 'Next-generation technologies for future-ready businesses',
      services: [
        {
          name: 'Quantum AI Trading Platform',
          description: 'Quantum computing enhanced trading algorithms',
          price: '$25,000/month',
          href: '/services/quantum-ai-trading-platform',
          features: ['Quantum algorithms', 'AI trading', 'Risk management']
        },
        {
          name: 'AI IoT Edge Computing',
          description: 'Intelligent IoT solutions with edge processing',
          price: '$6,500/month',
          href: '/services/ai-iot-edge-computing-platform',
          features: ['Edge processing', 'IoT integration', 'Real-time analytics']
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise-grade blockchain implementation',
          price: '$12,000/month',
          href: '/services/blockchain-enterprise-solutions',
          features: ['Smart contracts', 'Supply chain tracking', 'Identity management']
        },
        {
          name: 'Space Tech Solutions',
          description: 'Satellite and space technology applications',
          price: '$18,000/month',
          href: '/services/space-tech',
          features: ['Satellite data', 'Space analytics', 'Global monitoring']
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare solutions for better patient outcomes',
      services: ['AI Diagnostics', 'Patient Monitoring', 'Treatment Optimization']
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      description: 'Smart manufacturing with IoT and AI integration',
      services: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization']
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Secure financial solutions with AI and blockchain',
      services: ['Fraud Detection', 'Risk Assessment', 'Trading Optimization']
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Customer-centric retail solutions with AI insights',
      services: ['Customer Analytics', 'Inventory Management', 'Personalization']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 services',
        'Basic support',
        'Standard features',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 10 services',
        'Priority support',
        'Advanced features',
        'Phone support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited services',
        'Dedicated support',
        'Custom features',
        '24/7 support',
        'White-label options',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and Micro SAAS solutions. Transform your business with cutting-edge technology and expert consulting."
        keywords="AI services, IT services, Micro SAAS, enterprise solutions, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovation Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="block text-zion-cyan">Services Portfolio</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover our complete range of AI, IT, and Micro SAAS solutions designed to 
              transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors flex items-center justify-center">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our comprehensive portfolio covers all aspects of modern business technology needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-colors"
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                      <div className="text-zion-cyan font-semibold mb-4">{service.price}</div>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions designed specifically for your industry's unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-xs text-zion-slate-light">
                      • {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include 
              our core service capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zion-slate-light ml-1">{tier.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark'
                    : 'bg-zion-purple/20 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}>
                  {tier.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
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
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that are already leveraging our comprehensive 
              services for competitive advantage and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
