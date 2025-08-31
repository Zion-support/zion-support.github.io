import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      ]
    }
  ];

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
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
              className="mb-20"
            >
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
};

export default ServicesPricingPage;
