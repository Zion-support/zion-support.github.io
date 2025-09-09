import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Brain, 
  Server, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Code,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  FileText,
  Smartphone,
  Monitor,
  HardDrive,
  ShieldCheck,
  Leaf,
  Eye2,
  Settings3,
  Cloud2
} from 'lucide-react';

const ComprehensiveServicesOverview2027: React.FC = () => {
  const serviceCategories = [
    {
      title: "Micro SAAS Services",
      description: "Specialized software solutions that solve specific business problems",
      icon: Package,
      color: "from-zion-cyan to-zion-blue",
      services: [
        {
          title: "Customer Relationship Management",
          price: "Starting at $29/month",
          marketSize: "$45.5B",
          growthRate: "12.5% annually"
        },
        {
          title: "AI-Powered Content Creation Suite",
          price: "Starting at $79/month",
          marketSize: "$21.3B",
          growthRate: "280% annually"
        },
        {
          title: "Quantum-Enhanced Data Analytics",
          price: "Starting at $299/month",
          marketSize: "$23.1B",
          growthRate: "320% annually"
        },
        {
          title: "Autonomous Supply Chain Platform",
          price: "Starting at $199/month",
          marketSize: "$25.8B",
          growthRate: "300% annually"
        },
        {
          title: "Edge Computing Management Suite",
          price: "Starting at $149/month",
          marketSize: "$19.8B",
          growthRate: "300% annually"
        },
        {
          title: "Blockchain Business Solutions",
          price: "Starting at $399/month",
          marketSize: "$67.4B",
          growthRate: "87.7% annually"
        }
      ],
      link: "/micro-saas"
    },
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions that transform business operations",
      icon: Brain,
      color: "from-zion-purple to-zion-cyan",
      services: [
        {
          title: "AI Strategy Consulting",
          price: "$2,500 - $15,000",
          marketSize: "$15.2B",
          growthRate: "25.3% annually"
        },
        {
          title: "Custom AI Model Development",
          price: "$5,000 - $50,000",
          marketSize: "$23.1B",
          growthRate: "320% annually"
        },
        {
          title: "Quantum AI Computing",
          price: "$10,000 - $100,000",
          marketSize: "$31.2B",
          growthRate: "280% annually"
        },
        {
          title: "Autonomous AI Systems",
          price: "$5,000 - $50,000/month",
          marketSize: "$28.9B",
          growthRate: "350% annually"
        },
        {
          title: "AI-Powered Cybersecurity",
          price: "$3,500 - $30,000/month",
          marketSize: "$31.2B",
          growthRate: "280% annually"
        },
        {
          title: "AI Healthcare Diagnostics",
          price: "$5,000 - $75,000",
          marketSize: "$34.2B",
          growthRate: "320% annually"
        }
      ],
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT solutions that drive digital transformation and business growth",
      icon: Server,
      color: "from-zion-blue to-zion-purple",
      services: [
        {
          title: "Cloud Infrastructure Management",
          price: "$1,500 - $8,000/month",
          marketSize: "$178.5B",
          growthRate: "15.7% annually"
        },
        {
          title: "Cybersecurity Services",
          price: "$2,000 - $15,000",
          marketSize: "$182.3B",
          growthRate: "13.4% annually"
        },
        {
          title: "Quantum Computing Solutions",
          price: "$25,000 - $500,000",
          marketSize: "$31.2B",
          growthRate: "280% annually"
        },
        {
          title: "Edge Computing Infrastructure",
          price: "$5,000 - $50,000/month",
          marketSize: "$19.8B",
          growthRate: "300% annually"
        },
        {
          title: "AI Infrastructure & MLOps",
          price: "$8,000 - $75,000/month",
          marketSize: "$23.1B",
          growthRate: "320% annually"
        },
        {
          title: "5G & Next-Gen Networks",
          price: "$20,000 - $150,000",
          marketSize: "$28.9B",
          growthRate: "350% annually"
        }
      ],
      link: "/it-services"
    }
  ];

  const marketInsights = [
    {
      title: "Total Addressable Market",
      value: "$2.1 Trillion",
      description: "Combined market size across all service categories",
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Average Growth Rate",
      value: "187%",
      description: "Annual growth rate across innovative services",
      icon: Rocket,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Service Categories",
      value: "3",
      description: "Comprehensive service portfolios",
      icon: Package,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Innovation Focus",
      value: "100%",
      description: "Cutting-edge technology solutions",
      icon: Star,
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Package className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Comprehensive <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span> 2027
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative micro SAAS, AI, and IT services. 
                Transform your business with cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Overview
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the market landscape and growth opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${insight.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <insight.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent mb-2">
                  {insight.value}
                </div>
                <p className="text-zion-slate-light">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Service</span> Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions across three major technology domains
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-3xl p-8"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-xl text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Pricing:</span>
                          <span className="text-zion-cyan font-semibold">{service.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Market Size:</span>
                          <span className="text-zion-cyan font-semibold">{service.marketSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Growth Rate:</span>
                          <span className="text-zion-cyan font-semibold">{service.growthRate}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    to={category.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Explore {category.title}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Leading the way in innovative technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Expertise",
                description: "Deep knowledge across all service domains"
              },
              {
                icon: Rocket,
                title: "Innovation First",
                description: "Cutting-edge solutions and emerging technologies"
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Enterprise-grade security and reliability"
              },
              {
                icon: Users,
                title: "Client Success",
                description: "Proven track record of successful implementations"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our team to discuss your specific needs and discover how our comprehensive services can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
              <p className="text-zion-slate-light">{contactInfo.address}</p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-block"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview2027;