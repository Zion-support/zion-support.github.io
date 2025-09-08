import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Database, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Network,
  Code,
  Server,
  Chip,
  Atom,
  Rocket,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Satellite,
  Navigation,
  Telescope,
  Planet,
  Orbit,
  Signal,
  Wifi,
  DollarSign,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  Building2,
  Eye,
  Leaf,
  Factory,
  Car,
  Truck,
  Ship,
  Plane,
  Train,
  Cpu,
  HardDrive,
  Activity,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitPullRequestClosed,
  GitBranchPlus,
  GitCommitPlus,
  GitPullRequestPlus,
  GitMergePlus,
  GitComparePlus,
  GitPullRequestClosedPlus,
  GitBranchMinus,
  GitCommitMinus,
  GitPullRequestMinus,
  GitMergeMinus,
  GitCompareMinus,
  GitPullRequestClosedMinus,
  ShoppingCart,
  FileText,
  MessageCircle,
  Settings,
  Calendar,
  Camera,
  Music,
  Gamepad2,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2 as Building2Icon,
  Factory as FactoryIcon,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Home,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: Rocket,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: Satellite,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'fintech',
      name: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-data-intelligence',
      name: 'AI Advanced Data Intelligence Platform',
      category: 'ai',
      description: 'Transform your business with comprehensive AI-powered data intelligence. Real-time processing, advanced analytics, and machine learning capabilities.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      href: '/services/ai-advanced-data-intelligence-platform',
      price: '$2,999/month',
      features: ['Real-time data processing', 'AI-powered analytics', 'Machine learning models', 'Enterprise security'],
      popular: true
    },
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio Pro',
      category: 'ai',
      description: 'Professional AI-powered content creation platform with advanced editing tools and multi-language support.',
      icon: FileText,
      color: 'from-blue-500 to-green-600',
      href: '/services/AI-Content-Creation-Studio-Pro',
      price: '$299/month',
      features: ['AI content generation', 'Multi-language support', 'SEO optimization', 'Team collaboration'],
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      category: 'ai',
      description: 'Intelligent customer support automation with natural language processing and 24/7 availability.',
      icon: MessageCircle,
      color: 'from-green-500 to-blue-600',
      href: '/services/ai-customer-support-automation',
      price: '$149/month',
      features: ['24/7 automated support', 'Multi-channel integration', 'Knowledge base management', 'Performance analytics'],
      popular: false
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics Platform',
      category: 'ai',
      description: 'Advanced healthcare analytics platform with AI-powered diagnostics and predictive modeling.',
      icon: Users,
      color: 'from-green-500 to-teal-600',
      href: '/services/ai-healthcare-analytics-platform',
      price: '$1,999/month',
      features: ['Patient data analysis', 'Predictive diagnostics', 'Treatment optimization', 'Compliance management'],
      popular: false
    },

    // Quantum Computing Services
    {
      id: 'quantum-ai-hybrid',
      name: 'Quantum AI Hybrid Platform',
      category: 'quantum',
      description: 'Revolutionary quantum computing platform that combines quantum power with artificial intelligence.',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/quantum-ai-hybrid-platform',
      price: '$4,999/month',
      features: ['Quantum algorithms', 'AI integration', 'Advanced analytics', 'Quantum security'],
      popular: true
    },
    {
      id: 'quantum-trading',
      name: 'Quantum AI Trading Platform',
      category: 'quantum',
      description: 'Advanced AI-powered trading platform with quantum computing capabilities for optimal performance.',
      icon: DollarSign,
      color: 'from-green-500 to-blue-600',
      href: '/services/Quantum-AI-Trading-Platform',
      price: '$1,999/month',
      features: ['Quantum-enhanced algorithms', 'Real-time analysis', 'Risk management', 'Portfolio optimization'],
      popular: false
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      category: 'quantum',
      description: 'Comprehensive quantum computing solutions for research and enterprise applications.',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      href: '/services/quantum-computing',
      price: '$3,999/month',
      features: ['Quantum algorithms', 'Error correction', 'Quantum simulations', 'Research support'],
      popular: false
    },

    // Micro SAAS Services
    {
      id: 'micro-saas-solutions',
      name: 'Comprehensive Micro SAAS Solutions',
      category: 'micro-saas',
      description: 'Suite of innovative micro SAAS solutions designed to transform business operations.',
      icon: Rocket,
      color: 'from-purple-500 to-blue-600',
      href: '/services/comprehensive-micro-saas-solutions',
      price: 'Starting at $99/month',
      features: ['AI content creation', 'Lead generation', 'Support automation', 'Business analytics'],
      popular: true
    },
    {
      id: 'lead-gen-ai',
      name: 'LeadGen AI Microsite',
      category: 'micro-saas',
      description: 'AI-powered lead generation platform with intelligent targeting and CRM integration.',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      href: '/services/lead-gen-ai',
      price: '$99/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'CRM integration', 'Analytics dashboard'],
      popular: false
    },
    {
      id: 'reporting-studio',
      name: 'Automated Reporting Studio',
      category: 'micro-saas',
      description: 'Intelligent reporting and dashboard creation platform with automated data ingestion.',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      href: '/services/reporting-studio',
      price: '$79/month',
      features: ['Auto-data ingestion', 'Smart dashboards', 'Scheduled reporting', 'Custom templates'],
      popular: false
    },

    // Space Technology Services
    {
      id: 'ai-space-tech',
      name: 'AI Space Technology Platform',
      category: 'space',
      description: 'Cutting-edge space technology platform powered by artificial intelligence.',
      icon: Satellite,
      color: 'from-purple-500 to-indigo-600',
      href: '/services/ai-space-technology-platform',
      price: '$5,999/month',
      features: ['Satellite systems', 'Space navigation', 'Planetary exploration', 'Space analytics'],
      popular: false
    },
    {
      id: 'space-tech',
      name: 'Space Tech Solutions',
      category: 'space',
      description: 'Comprehensive space technology solutions for research and commercial applications.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/space-tech',
      price: '$3,999/month',
      features: ['Space systems', 'Navigation technology', 'Research support', 'Commercial applications'],
      popular: false
    },

    // Financial Technology Services
    {
      id: 'ai-fintech',
      name: 'AI Financial Technology Platform',
      category: 'fintech',
      description: 'Next-generation fintech platform with AI-powered financial services and solutions.',
      icon: DollarSign,
      color: 'from-green-500 to-blue-600',
      href: '/services/ai-financial-technology-platform',
      price: '$3,999/month',
      features: ['AI trading', 'Fraud detection', 'Risk management', 'Digital banking'],
      popular: false
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading',
      category: 'fintech',
      description: 'Advanced AI-powered financial trading platform with real-time market analysis.',
      icon: ChartLine,
      color: 'from-blue-500 to-green-600',
      href: '/services/ai-financial-trading',
      price: '$2,999/month',
      features: ['Real-time analysis', 'AI algorithms', 'Risk management', 'Portfolio optimization'],
      popular: false
    },

    // Cybersecurity Services
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      category: 'cybersecurity',
      description: 'Comprehensive AI-powered cybersecurity solution with advanced threat detection.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      href: '/services/ai-cybersecurity-suite',
      price: '$1,999/month',
      features: ['Threat detection', 'AI monitoring', 'Incident response', 'Compliance management'],
      popular: false
    },
    {
      id: 'zero-trust',
      name: 'Zero Trust Network Access',
      category: 'cybersecurity',
      description: 'Advanced zero-trust security architecture for modern enterprise networks.',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      href: '/services/zero-trust-network-access',
      price: '$2,499/month',
      features: ['Zero trust architecture', 'Identity verification', 'Access control', 'Security monitoring'],
      popular: false
    },

    // Cloud & DevOps Services
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Solutions',
      category: 'cloud',
      description: 'Comprehensive cloud infrastructure and DevOps automation services.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      href: '/services/cloud-devops',
      price: '$1,999/month',
      features: ['Cloud migration', 'Kubernetes', 'DevOps automation', 'Infrastructure as Code'],
      popular: false
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics Platform',
      category: 'cloud',
      description: 'Advanced data analytics and business intelligence platform.',
      icon: BarChart3,
      color: 'from-cyan-500 to-blue-600',
      href: '/services/data-analytics',
      price: '$1,499/month',
      features: ['Data warehousing', 'Business intelligence', 'Real-time analytics', 'Custom dashboards'],
      popular: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cutting-Edge Technology',
      description: 'Access the latest AI, quantum computing, and space technology innovations'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Flexible pricing models that scale with your business needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance certifications and audit trails'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated support from our team of technology experts'
    }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview | Zion Tech Group"
        description="Explore our complete suite of AI, quantum computing, micro SAAS, and technology solutions. Transform your business with cutting-edge innovation."
        keywords="AI services, quantum computing, micro SAAS, technology solutions, business transformation"
        canonicalUrl="https://ziontechgroup.com/services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8">
                  <Star className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 text-lg font-medium">Complete Service Portfolio</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                  Comprehensive
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Services Overview
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Discover our complete suite of cutting-edge technology solutions. From AI and quantum computing 
                  to micro SAAS and space technology, we have everything you need to transform your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                      Get Started Today
                    </button>
                  </Link>
                  <Link to="/comprehensive-pricing-guide-2025">
                    <button className="px-10 py-5 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                      View Pricing Guide
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-1 rounded-2xl`}>
                    <div className="bg-slate-800/90 rounded-2xl p-6 h-full">
                      {service.popular && (
                        <div className="absolute -top-3 left-4">
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Popular
                          </span>
                        </div>
                      )}
                      
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to={service.href}>
                        <button className="w-full py-3 px-6 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold group-hover:bg-white/20">
                          Learn More
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cutting-edge technology solutions that drive real business results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 border border-blue-500/30 rounded-3xl p-16"
              >
                <h2 className="text-5xl font-bold text-white mb-8">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Choose from our comprehensive suite of services and start your transformation journey today. 
                  Our experts are ready to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                      Get Started Today
                    </button>
                  </Link>
                  <Link to="/comprehensive-pricing-guide-2025">
                    <button className="px-10 py-5 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                      View Pricing Guide
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Address</h3>
                  <p className="text-gray-300 text-center text-lg">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesOverview;