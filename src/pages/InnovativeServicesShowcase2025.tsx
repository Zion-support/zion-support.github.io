import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Eye,
  Workflow,
  Bot,
  Activity,
  Gamepad2,
  Coins,
  Palette,
  Target,
  Handshake,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Watch,
  Headphones,
  Speaker,
  Camera,
  Image,
  File,
  Folder,
  HardDrive,
  Wifi,
  Bluetooth,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Leaf as LeafIcon
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Quantum Neural Interface',
      description: 'Revolutionary brain-computer interface with quantum processing for unprecedented human-AI collaboration',
      icon: Brain,
      href: '/services/AI-Quantum-Neural-Interface',
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum neural processing', 'Real-time brain interface', 'AI consciousness simulation', 'Neural security protocols'],
      pricing: 'Starting at $2,500/month',
      category: 'AI & Neuroscience'
    },
    {
      name: 'AI Space Mining Platform',
      description: 'Autonomous space exploration and resource extraction using advanced AI algorithms',
      icon: Rocket,
      href: '/services/AI-Space-Mining-Platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Autonomous mining operations', 'Resource detection AI', 'Space logistics management', 'Environmental impact analysis'],
      pricing: 'Starting at $15,000/month',
      category: 'Space Technology'
    },
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-green-600 to-emerald-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time optimization'],
      pricing: 'Starting at $8,500/month',
      category: 'Enterprise AI'
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Zero-day protection'],
      pricing: 'Starting at $6,500/month',
      category: 'Cybersecurity'
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-indigo-600 to-purple-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support', 'Hybrid computing'],
      pricing: 'Starting at $12,000/month',
      category: 'Quantum Computing'
    },
    {
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      color: 'from-pink-600 to-rose-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization', 'Patient monitoring'],
      pricing: 'Starting at $4,500/month',
      category: 'Healthcare AI'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', price: '$3,500/month' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform', price: '$2,800/month' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', price: '$4,200/month' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform', price: '$3,800/month' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Threat Detection', href: '/services/ai-cybersecurity-threat-detection', price: '$5,500/month' },
        { name: 'Zero Trust Architecture', href: '/services/Zero-Trust-Network-Architecture', price: '$7,200/month' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform', price: '$4,800/month' },
        { name: 'SOC2 Compliance Tracker', href: '/services/SOC2ComplianceTracker', price: '$3,900/month' }
      ]
    },
    {
      name: 'Quantum & Advanced Tech',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network-platform', price: '$18,000/month' },
        { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform', price: '$25,000/month' },
        { name: 'Space Technology Solutions', href: '/services/space-tech', price: '$15,000/month' },
        { name: 'Green IT Solutions', href: '/services/green-it', price: '$6,500/month' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Digital Transformation', href: '/services/digital-transformation', price: '$12,000/month' },
        { name: 'Cloud DevOps Platform', href: '/services/cloud-devops', price: '$8,500/month' },
        { name: 'IT Infrastructure Management', href: '/services/ITInfrastructure', price: '$9,200/month' },
        { name: 'Enterprise AI Solutions', href: '/services/ai-enterprise-orchestrator', price: '$15,000/month' }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered diagnostics, predictive analytics, and patient care optimization',
      services: ['AI Healthcare Analytics', 'Predictive Diagnostics', 'Patient Monitoring', 'Care Optimization'],
      pricing: 'Starting at $4,500/month'
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'AI trading platforms, compliance automation, and financial intelligence',
      services: ['AI Trading Platform', 'Financial Compliance', 'Risk Management', 'Business Intelligence'],
      pricing: 'Starting at $6,800/month'
    },
    {
      name: 'Manufacturing',
      icon: Settings,
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      services: ['Predictive Maintenance', 'Quality Control AI', 'Supply Chain Optimization', 'IoT Edge Computing'],
      pricing: 'Starting at $5,200/month'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Customer experience analytics, inventory optimization, and personalized marketing',
      services: ['Customer Analytics', 'Inventory Optimization', 'Personalized Marketing', 'AI Chatbots'],
      pricing: 'Starting at $3,800/month'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge AI, IT, and Micro SAAS solutions that are transforming industries 
              and driving the future of technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                View All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most innovative and cutting-edge solutions that are setting new industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-zion-cyan font-semibold uppercase tracking-wide">{service.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions organized by technology domain and industry focus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center justify-between p-3 bg-zion-blue rounded-lg hover:bg-zion-purple/10 transition-colors">
                      <Link to={service.href} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {service.name}
                      </Link>
                      <span className="text-zion-cyan font-semibold text-sm">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{solution.description}</p>
                <div className="mb-4">
                  <span className="text-zion-cyan font-semibold text-sm">{solution.pricing}</span>
                </div>
                <ul className="text-left space-y-1 mb-4">
                  {solution.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-zion-slate-light text-xs flex items-center">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Contact our team of experts to discuss how our innovative solutions can drive your business forward.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Globe className="w-5 h-5 text-zion-cyan mr-3" />
                  <a href={contactInfo.website} className="hover:text-zion-cyan transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">15+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">200+ Enterprise Clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">98% Success Rate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">24/7 Expert Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Cutting-Edge Technology</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Custom Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
