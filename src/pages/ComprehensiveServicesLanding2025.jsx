import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
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
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Cloud,
  Lock,
  Heart,
  BarChart3,
  Target,
  PieChart,
  LineChart,
  BarChart,
  Eye,
  Monitor,
  Layers,
  Activity,
  FileText,
  Settings,
  RefreshCw,
  TrendingDown,
  Globe2,
  Leaf,
  Building2,
  Car,
  Factory,
  Store,
  Banknote,
  Truck,
  Wrench,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { additionalInnovativeMicroSaasServices } from '../data/innovativeMicroSaasServices2025';

export default function ComprehensiveServicesLanding2025() {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  const serviceCategories = [
    {
      name: 'AI & Content Management',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Transform your content strategy with AI-powered creation, optimization, and distribution',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'AI & Content Management')
    },
    {
      name: 'Cybersecurity & Quantum',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Protect your business with next-generation quantum-resistant cybersecurity solutions',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Cybersecurity')
    },
    {
      name: 'Business Automation',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      description: 'Automate and optimize your business operations with intelligent AI platforms',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Business Automation')
    },
    {
      name: 'Edge Computing & IoT',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      description: 'Bring AI and analytics to the edge for real-time processing and decision-making',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Edge Computing')
    },
    {
      name: 'Sustainability & ESG',
      icon: Leaf,
      color: 'from-teal-600 to-green-600',
      description: 'Measure, optimize, and report on your environmental impact and sustainability metrics',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Sustainability')
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-pink-600 to-red-600',
      description: 'Improve patient outcomes with AI-powered healthcare analytics and clinical decision support',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Healthcare')
    },
    {
      name: 'Financial Technology',
      icon: Banknote,
      color: 'from-yellow-600 to-orange-600',
      description: 'Revolutionize your financial operations with AI-powered trading and risk management',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Financial Technology')
    },
    {
      name: 'Supply Chain & Logistics',
      icon: Truck,
      color: 'from-indigo-600 to-purple-600',
      description: 'Optimize your supply chain with end-to-end visibility and predictive analytics',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Supply Chain')
    },
    {
      name: 'Digital Twin & 3D',
      icon: Globe2,
      color: 'from-violet-600 to-purple-600',
      description: 'Create virtual representations of physical assets for optimization and simulation',
      services: additionalInnovativeMicroSaasServices.filter(s => s.category === 'Digital Twin')
    }
  ];

  const stats = [
    { label: 'Total Services', value: additionalInnovativeMicroSaasServices.length, icon: Server },
    { label: 'Service Categories', value: serviceCategories.length, icon: Layers },
    { label: 'Average ROI', value: '400%+', icon: TrendingUp },
    { label: 'Countries Served', value: '50+', icon: Globe },
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Uptime SLA', value: '99.9%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Landing 2025 - Zion Tech Group"
        description="Discover our complete portfolio of innovative micro SAAS services for 2025. AI-powered solutions, quantum cybersecurity, edge computing, healthcare analytics, and more. Transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Landing 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your one-stop destination for cutting-edge micro SAAS solutions. From AI-powered content management 
              to quantum cybersecurity, we deliver innovative technology that drives growth and efficiency across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
              >
                Get Pricing Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-purple-400" />
              <a href={contactInfo.website} className="text-white font-semibold hover:text-blue-400 transition-colors">
                {contactInfo.website}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-orange-400" />
              <span className="text-white font-semibold">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Zion Tech Group by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive service portfolio delivers exceptional value and results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative micro SAAS services across all major industries and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{category.services.length}</div>
                  <div className="text-gray-400 text-sm">Services Available</div>
                </div>
                <div className="space-y-3 mb-6">
                  {category.services.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{service.title}</span>
                    </div>
                  ))}
                  {category.services.length > 3 && (
                    <div className="text-blue-400 text-sm font-medium">
                      +{category.services.length - 3} more services
                    </div>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  View Category
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most advanced and in-demand micro SAAS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {additionalInnovativeMicroSaasServices.slice(0, 8).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-3xl font-bold text-blue-400">{service.currency}{service.price.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                    <div className="text-gray-300 text-sm">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{service.estimatedDelivery}</div>
                    <div className="text-gray-300 text-sm">Delivery</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">4.9</span>
                    <span className="text-gray-400 text-sm">(127 reviews)</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights & ROI */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services deliver exceptional returns on investment with proven market performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30"
            >
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">400%</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30"
            >
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30"
            >
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl border border-orange-500/30"
            >
              <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our comprehensive micro SAAS services can drive your business forward
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send Email
              </motion.a>
              <motion.a
                href={contactInfo.website}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
