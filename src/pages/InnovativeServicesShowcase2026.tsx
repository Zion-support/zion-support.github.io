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
  Car
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const newServices = [
    {
      id: 'ai-legal-document-analysis',
      title: 'AI Legal Document Analysis Platform',
      description: 'Revolutionize legal document processing with AI-powered analysis. Reduce review time by 80%, improve accuracy by 95%, and ensure compliance.',
      icon: Scale,
      href: '/services/ai-legal-document-analysis',
      color: 'from-blue-600 to-purple-600',
      features: [
        'AI-Powered Analysis with 95% accuracy',
        'Intelligent Search across legal documents',
        'Compliance Monitoring & Risk Assessment',
        'Automated Review & Analytics Dashboard'
      ],
      pricing: 'From $299/month',
      category: 'Legal Tech',
      stats: {
        accuracy: '95%',
        timeSavings: '80%',
        costReduction: '60%'
      }
    },
    {
      id: 'ai-real-estate-investment-analytics',
      title: 'AI Real Estate Investment Analytics',
      description: 'Transform your real estate investments with AI-powered market analysis, ROI predictions, and comprehensive property insights.',
      icon: Building2,
      href: '/services/ai-real-estate-investment-analytics',
      color: 'from-green-600 to-blue-600',
      features: [
        'AI Market Predictions with 92% accuracy',
        'Investment ROI Calculator',
        'Geographic Intelligence & Market Trends',
        'Property Search Engine & Risk Assessment'
      ],
      pricing: 'From $199/month',
      category: 'Real Estate Tech',
      stats: {
        accuracy: '92%',
        timeSavings: '80%',
        roiImprovement: '40%'
      }
    },
    {
      id: 'ai-supply-chain-optimization-enhanced',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Revolutionize your supply chain operations with AI-powered optimization. Reduce costs by 40%, improve delivery times by 50%.',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization-enhanced',
      color: 'from-blue-600 to-indigo-600',
      features: [
        'AI-Powered Demand Forecasting (94% accuracy)',
        'Intelligent Route Optimization',
        'Smart Inventory Management',
        'Global Supply Chain Visibility'
      ],
      pricing: 'From $399/month',
      category: 'Supply Chain Tech',
      stats: {
        accuracy: '94%',
        costReduction: '40%',
        deliveryImprovement: '50%'
      }
    }
  ];

  const categories = [
    {
      name: 'Legal Technology',
      icon: Scale,
      description: 'AI-powered legal document analysis and compliance solutions',
      count: 1,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Real Estate Technology',
      icon: Building2,
      description: 'AI-driven investment analytics and market intelligence',
      count: 1,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Supply Chain Technology',
      icon: Truck,
      description: 'AI-powered optimization and logistics solutions',
      count: 1,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const benefits = [
    "Cut operational costs by 25-60%",
    "Improve accuracy by 92-95%",
    "Reduce processing time by 50-80%",
    "Enhance decision-making with AI insights",
    "Scale operations without proportional cost increases",
    "Stay ahead of competition with cutting-edge technology"
  ];

  const stats = [
    { number: '3', label: 'New Services Launched', icon: Rocket },
    { number: '95%', label: 'Average Accuracy Rate', icon: Target },
    { number: '60%', label: 'Average Cost Reduction', icon: DollarSign },
    { number: '80%', label: 'Average Time Savings', icon: Clock }
  ];

  const industries = [
    { name: "Legal", icon: Scale, description: "Document analysis and compliance" },
    { name: "Real Estate", icon: Building2, description: "Investment analytics and market intelligence" },
    { name: "Manufacturing", icon: Factory, description: "Supply chain optimization" },
    { name: "Retail", icon: Package, description: "Inventory and logistics management" },
    { name: "Healthcare", icon: Shield, description: "Supply chain and compliance" },
    { name: "Finance", icon: DollarSign, description: "Risk assessment and analytics" }
  ];

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's latest innovative AI services launched in 2026. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services 2026, innovative technology, legal tech, real estate tech, supply chain optimization, Zion Tech Group" />
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

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest AI-powered solutions are designed to transform industries and drive unprecedented business growth.
              </p>
            </motion.div>

            <div className="space-y-12">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Service Icon and Basic Info */}
                    <div className="text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color}`}>
                          <service.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-700/50 text-zinc-300 text-sm font-medium mb-4">
                        {service.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-purple-400 mb-4">{service.pricing}</div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center bg-zinc-700/30 rounded-lg p-3">
                            <div className="text-2xl font-bold text-purple-400">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={service.href}
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <button className="px-6 py-3 border border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                          Start Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions across different industries and business domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="text-sm text-purple-400 font-medium">{category.count} Service{category.count !== 1 ? 's' : ''}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and growth with our AI-powered solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services are designed to address the unique challenges and opportunities across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                      <industry.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of businesses who have already revolutionized their operations with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+1 302 464 0950</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
