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

export default function Home() {
  const [activeTab, setActiveTab] = useState('ai');

  const featuredServices = [
    {
      id: 'ai-data-intelligence',
      name: 'AI Advanced Data Intelligence Platform',
      description: 'Transform your business with comprehensive AI-powered data intelligence. Real-time processing, advanced analytics, and machine learning capabilities.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      href: '/services/ai-advanced-data-intelligence-platform',
      price: 'Starting at $2,999/month',
      features: ['Real-time data processing', 'AI-powered analytics', 'Machine learning models', 'Enterprise security']
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI Hybrid Platform',
      description: 'Experience the future of computing with our revolutionary Quantum AI Hybrid Platform. Combine quantum computing power with artificial intelligence.',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/quantum-ai-hybrid-platform',
      price: 'Starting at $4,999/month',
      features: ['Quantum algorithms', 'AI integration', 'Advanced analytics', 'Quantum security']
    },
    {
      id: 'micro-saas',
      name: 'Comprehensive Micro SAAS Solutions',
      description: 'Transform your business with our suite of innovative micro SAAS solutions. From AI-powered tools to business automation.',
      icon: Rocket,
      color: 'from-purple-500 to-blue-600',
      href: '/services/comprehensive-micro-saas-solutions',
      price: 'Starting at $99/month',
      features: ['AI content creation', 'Lead generation', 'Support automation', 'Business analytics']
    }
  ];

  const serviceCategories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      services: [
        { name: 'AI Data Intelligence Platform', href: '/services/ai-advanced-data-intelligence-platform', price: '$2,999/month' },
        { name: 'AI Content Creation Studio', href: '/services/AI-Content-Creation-Studio-Pro', price: '$299/month' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', price: '$149/month' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', price: '$1,999/month' }
      ]
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600',
      services: [
        { name: 'Quantum AI Hybrid Platform', href: '/services/quantum-ai-hybrid-platform', price: '$4,999/month' },
        { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', price: '$1,999/month' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', price: '$3,999/month' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', price: '$2,999/month' }
      ]
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: Satellite,
      color: 'from-purple-500 to-indigo-600',
      services: [
        { name: 'AI Space Technology Platform', href: '/services/ai-space-technology-platform', price: '$5,999/month' },
        { name: 'Space Tech Solutions', href: '/services/space-tech', price: '$3,999/month' },
        { name: 'Satellite Systems', href: '/services/satellite-systems', price: '$4,999/month' },
        { name: 'Space Analytics', href: '/services/space-analytics', price: '$2,999/month' }
      ]
    },
    {
      id: 'fintech',
      name: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-blue-600',
      services: [
        { name: 'AI Financial Technology Platform', href: '/services/ai-financial-technology-platform', price: '$3,999/month' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', price: '$2,999/month' },
        { name: 'Financial Risk Management', href: '/services/ai-financial-risk-management', price: '$1,999/month' },
        { name: 'Digital Banking Solutions', href: '/services/digital-banking', price: '$4,999/month' }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '50+', label: 'Quantum Algorithms', icon: Atom },
    { number: '1000+', label: 'Businesses Served', icon: Building2 },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Exponential Growth',
      description: 'Leverage AI and quantum computing to achieve unprecedented business growth'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce operational costs while increasing efficiency and productivity'
    },
    {
      icon: Shield,
      title: 'Future-Proof Security',
      description: 'Stay ahead with quantum-resistant security and advanced threat protection'
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
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
        canonicalUrl="https://ziontechgroup.com"
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
                  <Zap className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 text-lg font-medium">Leading the Future of Technology</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                  Zion Tech
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Group
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge AI solutions, revolutionary quantum computing, 
                  and innovative micro SAAS services. We're leading the future of technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link to="/services/ai-advanced-data-intelligence-platform">
                    <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                      Explore AI Solutions
                    </button>
                  </Link>
                  <Link to="/services/quantum-ai-hybrid-platform">
                    <button className="px-10 py-5 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                      Discover Quantum Computing
                    </button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and powerful technology solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-1 rounded-2xl`}>
                    <div className="bg-slate-800/90 rounded-2xl p-8 h-full">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
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

        {/* Service Categories */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions across all major technology domains
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-16"
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Link key={serviceIndex} to={service.href}>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {service.name}
                            </h4>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
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
        <section className="py-20 bg-slate-800/30">
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
                  Join thousands of businesses already leveraging our cutting-edge technology solutions. 
                  Start your transformation journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                      Get Started Today
                    </button>
                  </Link>
                  <Link to="/services">
                    <button className="px-10 py-5 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                      Explore All Services
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
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
}