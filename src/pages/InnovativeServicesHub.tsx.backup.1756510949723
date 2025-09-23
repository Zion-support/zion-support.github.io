import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  TrendingUp, 
  Users,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Code,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Key,
  BarChart3,
  Globe2,
  ShieldCheck
} from 'lucide-react';

const InnovativeServicesHub: React.FC = () => {
  const serviceCategories = [
    {
      id: 'ultimate-2025',
      title: 'Ultimate Innovative Services 2025',
      description: 'Revolutionary micro SAAS, IT, and AI services that push the boundaries of technology',
      icon: Rocket,
      color: 'from-blue-600 to-purple-600',
      route: '/ultimate-services-2025',
      features: ['AI-Powered Solutions', 'Quantum Computing', 'Blockchain Innovation', 'Edge Computing'],
      stats: { services: 10, avgROI: '500%', innovation: 'Revolutionary' }
    },
    {
      id: 'advanced-2026',
      title: 'Advanced Innovative Services 2026',
      description: 'Cutting-edge futuristic technologies including brain-computer interfaces and space mining',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      route: '/advanced-services-2026',
      features: ['Brain-Computer Interfaces', 'Space Mining', 'Synthetic Biology', 'Fusion Energy'],
      stats: { services: 10, avgROI: '1000%', innovation: 'Futuristic' }
    },
    {
      id: 'core-it',
      title: 'Core IT & Infrastructure',
      description: 'Enterprise-grade IT solutions and infrastructure services for modern businesses',
      icon: Server,
      color: 'from-green-600 to-teal-600',
      route: '/services',
      features: ['Cloud Services', 'Cybersecurity', 'IT Infrastructure', 'Digital Transformation'],
      stats: { services: 15, avgROI: '300%', innovation: 'Enterprise' }
    },
    {
      id: 'green-tech',
      title: 'Green Technology Solutions',
      description: 'Sustainable and eco-friendly technology solutions for a better future',
      icon: Globe,
      color: 'from-emerald-600 to-green-600',
      route: '/green-it',
      features: ['Renewable Energy', 'Carbon Reduction', 'Sustainable Computing', 'Green AI'],
      stats: { services: 8, avgROI: '400%', innovation: 'Sustainable' }
    }
  ];

  const featuredServices = [
    {
      title: 'Quantum AI Neural Networks',
      description: 'Revolutionary AI powered by quantum computing principles',
      category: 'AI & Quantum',
      price: '$50,000',
      roi: '800%',
      delivery: '6 months'
    },
    {
      title: 'Brain-Computer Interface Platform',
      description: 'Direct neural interface for human-computer interaction',
      category: 'Neurotech',
      price: '$100,000',
      roi: '1200%',
      delivery: '12 months'
    },
    {
      title: 'Autonomous Space Mining System',
      description: 'AI-powered space exploration and resource extraction',
      category: 'Space Tech',
      price: '$500,000',
      roi: '2000%',
      delivery: '18 months'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative Services Hub
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the future of technology with our comprehensive portfolio of innovative services
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200">
              🚀 40+ Services
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200">
              💰 500%+ ROI
            </span>
            <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-pink-200">
              ⚡ Cutting-Edge Tech
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200">
              🌍 Global Impact
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-blue-400 mb-2">40+</div>
            <div className="text-slate-300">Innovative Services</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-green-400 mb-2">500%+</div>
            <div className="text-slate-300">Average ROI</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-slate-300">Technology Categories</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-slate-300">Global Clients</div>
          </div>
        </div>
      </motion.div>

      {/* Service Categories */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Service Categories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From revolutionary AI to sustainable green technology, discover the perfect solution for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-3">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{category.stats.services}</div>
                    <div className="text-xs text-slate-400">Services</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{category.stats.avgROI}</div>
                    <div className="text-xs text-slate-400">Avg ROI</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{category.stats.innovation}</div>
                    <div className="text-xs text-slate-400">Level</div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={category.route}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 group-hover:gap-3"
                >
                  Explore {category.title}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Featured Services */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Revolutionary Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our most innovative and high-impact solutions that are transforming industries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm text-yellow-400 font-medium">Featured</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Category:</span>
                  <span className="text-blue-400">{service.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Price:</span>
                  <span className="text-green-400 font-bold">{service.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">ROI:</span>
                  <span className="text-purple-400 font-bold">{service.roi}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Delivery:</span>
                  <span className="text-orange-400">{service.delivery}</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 border-t border-slate-700/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team of innovation experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your journey into the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-slate-300 mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-slate-300 mb-3">Send us a detailed message</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300 mb-3">Come see our innovation center</p>
              <p className="text-green-400 font-medium">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
            >
              Visit Our Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InnovativeServicesHub;