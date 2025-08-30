import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Target,
  Palette,
  Truck,
  Play,
  Scale,
  Gavel,
  CreditCard,
  Package,
  Route,
  Eye,
  AlertTriangle,
  TrendingUp as TrendingUpIcon,
  Clock,
  PieChart,
  Activity,
  Bell,
  RefreshCw,
  Search,
  BookOpen as BookOpenIcon,
  Factory,
  Car,
  Thermometer,
  Tag,
  Monitor as MonitorIcon,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Financial Services Platform',
      description: 'Transform financial services with AI-powered risk assessment, investment management, fraud detection, and personalized financial planning',
      icon: CreditCard,
      href: '/services/ai-financial-services-platform',
      color: 'from-green-600 to-blue-600',
      features: ['AI risk assessment', 'Investment management', 'Fraud detection', 'Financial planning'],
      pricing: 'From $299/month',
      category: 'AI & Financial Services',
      benefits: ['300% ROI improvement', '99.9% fraud detection', '10x faster processing', '100% compliance']
    },
    {
      name: 'AI Supply Chain Intelligence Platform',
      description: 'Revolutionize supply chain operations with real-time visibility, AI-powered demand forecasting, route optimization, and risk management',
      icon: Truck,
      href: '/services/ai-supply-chain-intelligence-platform',
      color: 'from-blue-600 to-green-600',
      features: ['Real-time visibility', 'Demand forecasting', 'Route optimization', 'Risk management'],
      pricing: 'From $499/month',
      category: 'AI & Supply Chain',
      benefits: ['25% cost reduction', '40% faster delivery', '100% visibility', 'Risk mitigation']
    },
    {
      name: 'AI Legal Tech Platform',
      description: 'Transform legal practice with AI-powered document analysis, legal research automation, contract generation, and compliance monitoring',
      icon: Scale,
      href: '/services/ai-legal-tech-platform',
      color: 'from-purple-600 to-blue-600',
      features: ['Document analysis', 'Legal research', 'Contract generation', 'Compliance monitoring'],
      pricing: 'From $199/month',
      category: 'AI & Legal Tech',
      benefits: ['80% time savings', '60% cost reduction', '99.9% accuracy', 'Increased efficiency']
    },
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time monitoring'],
      pricing: 'Custom pricing',
      category: 'AI & Analytics',
      benefits: ['300% efficiency gain', 'Real-time insights', 'Scalable operations', 'Cost optimization']
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Risk assessment'],
      pricing: 'From $799/month',
      category: 'Cybersecurity',
      benefits: ['99.9% threat detection', 'Real-time response', 'Compliance automation', 'Risk reduction']
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support', 'Hybrid computing'],
      pricing: 'Custom pricing',
      category: 'Emerging Tech',
      benefits: ['Quantum advantage', 'Complex optimization', 'Research acceleration', 'Future-proofing']
    }
  ];

  const microSaaSProducts = [
    {
      name: 'AI Sales Copilot',
      description: 'Complete sales automation suite with AI-powered insights and lead scoring',
      icon: TrendingUp,
      href: '/services/ai-sales-copilot',
      price: '$299/month',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline management', 'Performance analytics'],
      category: 'Sales & Marketing'
    },
    {
      name: 'AI Support Helpdesk',
      description: 'Intelligent customer support platform with 24/7 availability and automated responses',
      icon: MessageCircle,
      href: '/services/ai-support-helpdesk',
      price: '$199/month',
      features: ['24/7 support', 'AI responses', 'Ticket management', 'Customer satisfaction'],
      category: 'Customer Support'
    },
    {
      name: 'AI Content Generator',
      description: 'AI-powered content creation and optimization platform for marketing and communications',
      icon: BookOpen,
      href: '/services/ai-content-generator',
      price: '$149/month',
      features: ['Content creation', 'SEO optimization', 'Brand consistency', 'Multi-format support'],
      category: 'Content Marketing'
    },
    {
      name: 'AI Project Management',
      description: 'Intelligent project management platform with AI-driven insights and automation',
      icon: Settings,
      href: '/services/ai-project-management-platform',
      price: '$399/month',
      features: ['Task automation', 'Resource optimization', 'Risk prediction', 'Performance tracking'],
      category: 'Project Management'
    }
  ];

  const industrySolutions = [
    {
      title: 'Healthcare & Life Sciences',
      description: 'AI-powered solutions for healthcare analytics, predictive diagnostics, and patient care optimization',
      icon: Heart,
      services: [
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', price: 'From $1,299/month' },
        { name: 'Predictive Diagnostics', href: '/services/ai-healthcare-predictive-analytics', price: 'From $899/month' },
        { name: 'Patient Care Optimization', href: '/services/ai-healthcare-platform', price: 'Custom pricing' }
      ]
    },
    {
      title: 'Financial Services',
      description: 'Comprehensive AI solutions for banking, insurance, and financial technology',
      icon: DollarSign,
      services: [
        { name: 'AI Financial Platform', href: '/services/ai-financial-services-platform', price: 'From $299/month' },
        { name: 'Fraud Detection', href: '/services/ai-cybersecurity-threat-detection', price: 'From $599/month' },
        { name: 'Risk Assessment', href: '/services/ai-financial-compliance-assistant', price: 'From $799/month' }
      ]
    },
    {
      title: 'Manufacturing & Supply Chain',
      description: 'AI-driven solutions for manufacturing optimization and supply chain intelligence',
      icon: Factory,
      services: [
        { name: 'Supply Chain Intelligence', href: '/services/ai-supply-chain-intelligence-platform', price: 'From $499/month' },
        { name: 'Predictive Maintenance', href: '/services/ai-predictive-maintenance', price: 'From $399/month' },
        { name: 'Quality Control', href: '/services/ai-iot-edge-computing-platform', price: 'From $699/month' }
      ]
    },
    {
      title: 'Legal & Compliance',
      description: 'AI-powered legal technology solutions for law firms and corporate legal departments',
      icon: Gavel,
      services: [
        { name: 'AI Legal Tech Platform', href: '/services/ai-legal-tech-platform', price: 'From $199/month' },
        { name: 'Document Analysis', href: '/services/ai-legal-document-analyzer', price: 'From $299/month' },
        { name: 'Compliance Automation', href: '/services/soc2-compliance-tracker', price: 'From $499/month' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Innovative Services 2025
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Zion Tech Group
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Innovative Services Showcase 2025
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Discover our cutting-edge AI services, micro SaaS solutions, and innovative IT services designed to 
              transform your business and drive digital innovation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative AI solutions that are transforming industries and driving business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="text-lg font-bold text-green-400">{service.pricing}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {benefit}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy AI-powered software solutions with transparent pricing and instant value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaaSProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                <Link
                  to={product.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions designed for the unique challenges of different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.services.map((service, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                      <Link
                        to={service.href}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                      <span className="text-green-400 font-medium">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with our innovative AI services? Contact us to learn more 
              and get started on your digital transformation journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 text-blue-400 mr-3" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="h-5 w-5 text-blue-400 mr-3" />
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">15+ years of experience in AI and technology</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">200+ enterprise clients worldwide</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">98% client satisfaction rate</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">24/7 support and dedicated account management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">Custom solutions tailored to your business needs</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already accelerated their growth with our AI solutions. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
