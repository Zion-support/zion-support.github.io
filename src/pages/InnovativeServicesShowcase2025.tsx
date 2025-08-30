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
  Coins,
  ChartBar,
  Target,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  HardDrive,
  TrendingUp as TrendingUpIcon,
  Building2,
  FileText as FileTextIcon,
  HelpCircle,
  BarChart3 as BarChart3Icon,
  ArrowUp,
  Award,
  Handshake,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Smartphone as SmartphoneIcon,
  Lock as LockIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Chip,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles as SparklesIcon,
  Leaf as LeafIcon,
  Gamepad2,
  Satellite as SatelliteIcon,
  Activity,
  MessageCircle as MessageCircleIcon,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Dna,
  Microscope,
  Stethoscope,
  Pill,
  Syringe,
  TestTube,
  Beaker,
  Flask,
  Droplets,
  Telescope,
  Globe,
  Orbit,
  Star,
  Sun,
  Moon,
  Atom
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Quantum Financial Platform',
      description: 'Revolutionary platform combining quantum computing, AI, and blockchain for financial markets',
      icon: Atom,
      href: '/services/ai-quantum-financial-platform',
      color: 'from-purple-600 to-pink-600',
      category: 'Financial Technology',
      pricing: 'Starting at $2,999/month',
      features: ['Quantum computing integration', 'AI-powered predictions', 'Blockchain security', 'Real-time analytics']
    },
    {
      name: 'AI Space Technology Platform',
      description: 'Next-generation space exploration and satellite management with AI technology',
      icon: Satellite,
      href: '/services/ai-space-technology-platform',
      color: 'from-blue-600 to-cyan-600',
      category: 'Space Technology',
      pricing: 'Starting at $4,999/month',
      features: ['Satellite constellation management', 'Space debris tracking', 'Exoplanet discovery', 'Orbital optimization']
    },
    {
      name: 'AI Healthcare Genomics Platform',
      description: 'Transform healthcare with AI-powered genomics and personalized medicine',
      icon: Dna,
      href: '/services/ai-healthcare-genomics-platform',
      color: 'from-green-600 to-emerald-600',
      category: 'Healthcare Technology',
      pricing: 'Starting at $3,999/month',
      features: ['Genomic sequencing analysis', 'Predictive disease modeling', 'Drug discovery platform', 'Personalized medicine']
    },
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-indigo-600 to-purple-600',
      category: 'Enterprise AI',
      pricing: 'Starting at $5,999/month',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time monitoring']
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      category: 'Cybersecurity',
      pricing: 'Starting at $4,999/month',
      features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Advanced analytics']
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-cyan-600 to-blue-600',
      category: 'Quantum Computing',
      pricing: 'Starting at $6,999/month',
      features: ['Quantum algorithms', 'Optimization', 'Research support', 'Custom development']
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' }
      ]
    },
    {
      name: 'Cybersecurity & Defense',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'AI Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' },
        { name: 'Smart Contract Risk Scanner', href: '/services/SmartContractRiskScanner' },
        { name: 'Vendor Risk Management', href: '/services/VendorRiskManagement' }
      ]
    },
    {
      name: 'Financial Technology',
      icon: Coins,
      color: 'from-yellow-600 to-orange-600',
      services: [
        { name: 'AI Quantum Financial Platform', href: '/services/ai-quantum-financial-platform' },
        { name: 'AI Financial Compliance', href: '/services/ai-financial-compliance-assistant' },
        { name: 'AI Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Price Intelligence Service', href: '/services/PriceIntelligenceService' }
      ]
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'AI Healthcare Genomics Platform', href: '/services/ai-healthcare-genomics-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Predictive Healthcare', href: '/services/ai-healthcare-predictive-analytics' },
        { name: 'Healthcare Technology Solutions', href: '/services/healthcare-tech' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai' }
      ]
    },
    {
      name: 'Space & Aerospace',
      icon: Satellite,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'AI Space Technology Platform', href: '/services/ai-space-technology-platform' },
        { name: 'Space Technology Solutions', href: '/services/space-tech' },
        { name: 'Satellite Management', href: '/services/ai-space-technology-platform' },
        { name: 'Space Debris Tracking', href: '/services/ai-space-technology-platform' },
        { name: 'Exoplanet Discovery', href: '/services/ai-space-technology-platform' },
        { name: 'Orbital Optimization', href: '/services/ai-space-technology-platform' }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-cyan-600 to-blue-600',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading-platform' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'Quantum Computing Elite', href: '/services/quantum-computing-elite' },
        { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service' },
        { name: 'Quantum Technology Solutions', href: '/services/quantum-technology' }
      ]
    }
  ];

  const stats = [
    { label: 'AI Solutions', value: '50+', icon: Brain },
    { label: 'Enterprise Clients', value: '200+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star },
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Industry Sectors', value: '25+', icon: Briefcase }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp Global',
      company: 'TechCorp Global',
      content: 'Zion Tech Group\'s AI solutions have transformed our operations. The AI Enterprise Orchestrator increased our efficiency by 40%.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Security',
      company: 'SecureBank International',
      content: 'Their AI Cybersecurity Suite provides real-time threat detection that has prevented multiple sophisticated attacks.',
      avatar: 'MR',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Genomics Research Institute',
      content: 'The AI Healthcare Genomics Platform has accelerated our research by 3x while improving accuracy significantly.',
      avatar: 'EW',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation Showcase 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Innovative Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Showcase 2025</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our cutting-edge AI, IT, and Micro SAAS solutions that are transforming industries worldwide. 
              From quantum computing to healthcare genomics, experience the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </Link>
              <Link to="/pricing" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ float: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ float: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services 2025
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our most innovative and cutting-edge solutions that are revolutionizing industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-zion-cyan font-semibold text-sm mb-2">{service.pricing}</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of AI, IT, and Micro SAAS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        to={service.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                    <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light text-sm leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations already using our innovative solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </Link>
              <Link to="/pricing" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
