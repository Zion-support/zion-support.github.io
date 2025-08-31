import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  Globe,
  Users,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Car,
  Building
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeServicesShowcase2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'emerging', name: 'Emerging Tech', icon: TrendingUp }
  ];

  const innovativeServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-manager',
      category: 'ai',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages your entire business operations, from strategy to execution.',
      features: [
        '24/7 Business Monitoring & Optimization',
        'Automated Decision Making',
        'Real-time Performance Analytics',
        'Predictive Market Analysis',
        'Automated Resource Allocation',
        'Intelligent Risk Management'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$12,000/month'
      },
      marketPrice: '$8,000 - $25,000/month',
      benefits: [
        'Reduce operational costs by 40-60%',
        'Improve decision-making speed by 80%',
        'Increase business efficiency by 50%',
        '24/7 autonomous operation',
        'Real-time market adaptation'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      link: '/services/ai-autonomous-business-manager'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      category: 'quantum',
      title: 'AI-Quantum Hybrid Computing Platform',
      description: 'Revolutionary platform combining AI and quantum computing for solving previously impossible problems.',
      features: [
        '1000+ Qubit Quantum Processing',
        'AI-Quantum Algorithm Optimization',
        'Real-time Problem Solving',
        'Quantum-Safe Cryptography',
        'Hybrid Neural Networks',
        'Quantum Machine Learning'
      ],
      pricing: {
        starter: '$8,500/month',
        professional: '$18,000/month',
        enterprise: '$45,000/month'
      },
      marketPrice: '$25,000 - $100,000/month',
      benefits: [
        'Solve complex problems 1000x faster',
        'Unbreakable quantum encryption',
        'Revolutionary AI capabilities',
        'Future-proof technology',
        'Competitive advantage'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: '/services/quantum-ai-hybrid-platform'
    },
    {
      id: 'ai-autonomous-vehicle-management',
      category: 'ai',
      title: 'AI Autonomous Vehicle Management Platform',
      description: 'Complete platform for managing autonomous vehicle fleets with AI-powered optimization and safety.',
      features: [
        'Fleet Management & Optimization',
        'Real-time Safety Monitoring',
        'Predictive Maintenance',
        'Route Optimization',
        'Traffic Pattern Analysis',
        'Emergency Response Systems'
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$7,500/month',
        enterprise: '$18,000/month'
      },
      marketPrice: '$10,000 - $30,000/month',
      benefits: [
        'Reduce fleet costs by 35%',
        'Improve safety by 90%',
        'Optimize routes in real-time',
        'Predictive maintenance alerts',
        'Compliance automation'
      ],
      icon: Car,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: '/services/ai-autonomous-vehicle-management-platform'
    },
    {
      id: 'ai-smart-city-infrastructure',
      category: 'ai',
      title: 'AI Smart City Infrastructure Management',
      description: 'Intelligent platform for managing smart city infrastructure with real-time monitoring and optimization.',
      features: [
        'Infrastructure Monitoring',
        'Energy Optimization',
        'Traffic Management',
        'Waste Management',
        'Public Safety Systems',
        'Environmental Monitoring'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$12,000/month',
        enterprise: '$30,000/month'
      },
      marketPrice: '$15,000 - $50,000/month',
      benefits: [
        'Reduce city operational costs by 25%',
        'Improve citizen satisfaction by 40%',
        'Optimize resource usage',
        'Real-time problem detection',
        'Data-driven decision making'
      ],
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      featured: true,
      link: '/services/ai-smart-city-infrastructure-management'
    },
    // Micro SAAS Services
    {
      id: 'ai-powered-seo-platform',
      category: 'micro-saas',
      title: 'AI-Powered SEO Platform',
      description: 'Complete SEO solution powered by AI for automatic optimization and ranking improvement.',
      features: [
        'AI Content Optimization',
        'Keyword Research & Analysis',
        'Competitor Monitoring',
        'Performance Tracking',
        'Automated Reporting',
        'Technical SEO Audits'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$799/month'
      },
      marketPrice: '$200 - $1,000/month',
      benefits: [
        'Improve search rankings by 40%',
        'Save 20+ hours per week',
        'Automated optimization',
        'Real-time performance tracking',
        'Competitive advantage'
      ],
      icon: Search,
      color: 'from-orange-500 to-red-500',
      featured: false,
      link: '/services/ai-seo'
    },
    {
      id: 'ai-customer-support-automation',
      category: 'micro-saas',
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support system that handles inquiries automatically with human-like responses.',
      features: [
        '24/7 Customer Support',
        'Multi-language Support',
        'Ticket Management',
        'Knowledge Base Integration',
        'Analytics & Reporting',
        'Human Handoff System'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$999/month'
      },
      marketPrice: '$300 - $1,500/month',
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        '24/7 availability',
        'Scalable support',
        'Customer satisfaction improvement'
      ],
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      featured: false,
      link: '/services/ai-customer-support-automation'
    },
    {
      id: 'ai-project-management',
      category: 'micro-saas',
      title: 'AI Project Management Platform',
      description: 'Intelligent project management with AI-powered planning, tracking, and optimization.',
      features: [
        'AI Project Planning',
        'Resource Optimization',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Automated Reporting'
      ],
      pricing: {
        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$150 - $600/month',
      benefits: [
        'Improve project success rate by 30%',
        'Reduce planning time by 50%',
        'Better resource utilization',
        'Risk mitigation',
        'Real-time insights'
      ],
      icon: Workflow,
      color: 'from-green-500 to-teal-500',
      featured: false,
      link: '/services/ai-project-management'
    },
    // IT Services
    {
      id: 'cloud-finops-optimizer',
      category: 'it',
      title: 'Cloud FinOps Optimization Platform',
      description: 'Complete cloud cost optimization and financial operations management platform.',
      features: [
        'Cost Monitoring & Analysis',
        'Resource Optimization',
        'Budget Management',
        'Cost Allocation',
        'Automated Scaling',
        'ROI Tracking'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      benefits: [
        'Reduce cloud costs by 30-50%',
        'Improve resource utilization',
        'Better budget control',
        'Automated optimization',
        'ROI maximization'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/cloud-finops-optimizer'
    },
    {
      id: 'zero-trust-network-access',
      category: 'security',
      title: 'Zero Trust Network Access Platform',
      description: 'Advanced zero trust security platform for secure remote access and network protection.',
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Threat Detection',
        'Compliance Management',
        'Audit Logging'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$699/month',
        enterprise: '$1,799/month'
      },
      marketPrice: '$600 - $3,000/month',
      benefits: [
        'Eliminate network vulnerabilities',
        'Comply with security standards',
        'Secure remote access',
        'Real-time threat protection',
        'Comprehensive audit trails'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
      link: '/services/zero-trust-network-access'
    },
    // Emerging Technology Services
    {
      id: 'space-tech-platform',
      category: 'emerging',
      title: 'Space Technology Platform',
      description: 'Cutting-edge platform for space technology applications and satellite management.',
      features: [
        'Satellite Management',
        'Space Data Analytics',
        'Orbital Calculations',
        'Launch Planning',
        'Mission Control',
        'Space Weather Monitoring'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: '$50,000/month'
      },
      marketPrice: '$20,000 - $100,000/month',
      benefits: [
        'Access to space technology',
        'Satellite data insights',
        'Launch optimization',
        'Mission success improvement',
        'Innovation leadership'
      ],
      icon: Satellite,
      color: 'from-purple-500 to-indigo-500',
      featured: false,
      link: '/services/space-tech'
    },
    {
      id: 'sustainable-technology-platform',
      category: 'emerging',
      title: 'Sustainable Technology Platform',
      description: 'Platform for implementing and managing sustainable technology solutions.',
      features: [
        'Carbon Footprint Tracking',
        'Energy Optimization',
        'Waste Management',
        'Sustainability Reporting',
        'Green Technology Integration',
        'Compliance Management'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      benefits: [
        'Reduce environmental impact',
        'Meet sustainability goals',
        'Cost savings through efficiency',
        'Regulatory compliance',
        'Brand enhancement'
      ],
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/sustainable-technology'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? innovativeServices 
    : innovativeServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Discover Zion Tech Group's cutting-edge 2028 services: AI, Quantum Computing, Micro SAAS, and emerging technologies. Transform your business with the future of technology."
        keywords="AI services, quantum computing, micro SAAS, IT services, cybersecurity, 2028 technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2028 Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
              Pioneering the future with cutting-edge AI, Quantum Computing, Micro SAAS, and emerging technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Starter:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.starter}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Professional:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.professional}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Enterprise:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.enterprise}</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-slate-700 rounded text-xs text-slate-300">
                    Market Average: {service.marketPrice}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our innovative 2028 services can drive your business forward and give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;
