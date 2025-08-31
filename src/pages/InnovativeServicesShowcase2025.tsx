import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Atom,
  Car,
  Building2,
  PenTool,
  MessageSquare as MessageSquareIcon,
  Leaf,
  Factory,
  Gauge,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  Activity,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Rocket as RocketIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Eye as EyeIcon,
  MessageSquare as MessageSquareIcon2,
  FileText as FileTextIcon,
  Search as SearchIcon,
  Clock as ClockIcon,
  Atom as AtomIcon,
  Car as CarIcon,
  Building2 as Building2Icon,
  PenTool as PenToolIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Gauge as GaugeIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Automation', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-green-500 to-emerald-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'from-yellow-500 to-orange-500' },
    { id: 'edge', name: 'Edge Computing', icon: Cpu, color: 'from-gray-500 to-slate-500' },
    { id: 'financial', name: 'Financial Services', icon: BarChart, color: 'from-emerald-500 to-teal-500' },
    { id: 'supply-chain', name: 'Supply Chain', icon: Network, color: 'from-blue-500 to-indigo-500' },
    { id: 'customer', name: 'Customer Experience', icon: Users, color: 'from-pink-500 to-rose-500' }
  ];

  const getCategoryFromService = (service: any) => {
    if (service.category.toLowerCase().includes('ai') || service.category.toLowerCase().includes('automation')) return 'ai';
    if (service.category.toLowerCase().includes('quantum')) return 'quantum';
    if (service.category.toLowerCase().includes('cybersecurity') || service.category.toLowerCase().includes('security')) return 'cybersecurity';
    if (service.category.toLowerCase().includes('sustainability') || service.category.toLowerCase().includes('esg')) return 'sustainability';
    if (service.category.toLowerCase().includes('manufacturing')) return 'manufacturing';
    if (service.category.toLowerCase().includes('edge')) return 'edge';
    if (service.category.toLowerCase().includes('financial')) return 'financial';
    if (service.category.toLowerCase().includes('supply chain')) return 'supply-chain';
    if (service.category.toLowerCase().includes('customer')) return 'customer';
    return 'ai';
  };

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = activeCategory === 'all' || getCategoryFromService(service) === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI, Quantum Computing, 
              and Autonomous Systems solutions that transform businesses and industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{service.estimatedDelivery}</div>
                    <div className="text-xs text-gray-400">Delivery Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>

                {/* Service Actions */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Innovation Level Badge */}
                <div className="mt-4 flex justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Revolutionary' 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      : service.innovationLevel === 'Breakthrough'
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can revolutionize your operations, 
              enhance security, and drive unprecedented growth.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold text-lg">Zion Tech Group</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transforming businesses with cutting-edge AI, Quantum Computing, and Autonomous Systems
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">
              Website
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="tel:+13024640950" className="hover:text-white transition-colors">
              Phone
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InnovativeServicesShowcase2025;