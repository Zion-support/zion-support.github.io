import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Scale, 
  Building2, 
  Truck, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Globe,
  Shield,
  BarChart3,
  Clock,
  DollarSign,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Search,
  Filter,
  PieChart,
  LineChart,
  FileText,
  Route,
  Warehouse,
  Home,
  Package,
  Factory,
  Ship,
  Plane,
  Car,
  Heart,
  ShoppingCart,
  Atom,
  Wifi,
  Server,
  Palette,
  PenTool,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Copy,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const services = [
    {
      id: 'ai-autonomous-logistics',
      title: 'AI Autonomous Logistics Platform',
      description: 'Revolutionize your logistics operations with AI-powered autonomous fleet management and intelligent route optimization.',
      icon: Truck,
      category: 'AI & Automation',
      price: '$599/month',
      features: [
        'AI-Powered Fleet Management',
        'Intelligent Route Optimization',
        'Smart Package Tracking',
        'Global Supply Chain Visibility',
        'Predictive Analytics (95% accuracy)',
        'Security & Compliance'
      ],
      benefits: [
        '40% reduction in delivery costs',
        '60% improvement in delivery times',
        '95% route optimization accuracy',
        '80% reduction in fuel consumption'
      ],
      href: '/services/ai-autonomous-logistics-platform',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'ai-quantum-neural',
      title: 'AI Quantum Neural Network Platform',
      description: 'Experience the future of AI with our revolutionary quantum neural network platform for unprecedented computational power.',
      icon: Atom,
      category: 'Quantum AI',
      price: '$1,999/month',
      features: [
        'Quantum Neural Networks',
        'Advanced AI Models',
        'Quantum Circuit Optimization',
        'Distributed Computing',
        'Real-time Processing',
        'Quantum Security'
      ],
      benefits: [
        '1000x faster computation',
        'Unlimited scalability',
        'Quantum advantage',
        'Future-proof technology'
      ],
      href: '/services/ai-quantum-neural-network-platform',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai-space-tech',
      title: 'AI Space Technology Platform',
      description: 'Explore the final frontier with our AI-powered space technology platform for satellite operations and space exploration.',
      icon: Rocket,
      category: 'Space Tech',
      price: '$2,499/month',
      features: [
        'Satellite AI Management',
        'Space Data Analytics',
        'Orbital Optimization',
        'Space Weather Prediction',
        'Mission Planning AI',
        'Global Coverage'
      ],
      benefits: [
        'Global satellite coverage',
        'Real-time space data',
        'Advanced mission planning',
        'Space exploration support'
      ],
      href: '/services/ai-space-technology-platform',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const categories = [
    { name: 'All', count: services.length },
    { name: 'AI & Automation', count: services.filter(s => s.category === 'AI & Automation').length },
    { name: 'Quantum AI', count: services.filter(s => s.category === 'Quantum AI').length },
    { name: 'Space Tech', count: services.filter(s => s.category === 'Space Tech').length }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's latest innovative AI services launched in 2026. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services 2026, innovative technology, autonomous logistics, quantum AI, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2 text-purple-400" />
                New in 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Innovative Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Showcase 2026</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our latest AI-powered solutions designed to revolutionize industries and transform business operations. 
                Experience unprecedented efficiency, accuracy, and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50'
                  }`}
                >
                  {category.name} ({category.count})
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
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-purple-400 font-semibold">{service.price}</div>
                    <Link
                      to={service.href}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of businesses already using our innovative solutions to drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
