import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
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
  TrendingUp as TrendingUpIcon,
  Scale,
  Gauge,
  Bot as BotIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon2
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      title: "AI Enterprise Automation Suite",
      description: "Transform business operations with intelligent automation that works 24/7. Reduce costs by 60%, increase productivity by 80%.",
      price: "From $299/month",
      features: ["AI-Powered Process Automation", "Intelligent Workflow Orchestration", "Real-time Business Intelligence"],
      href: "/services/ai-enterprise-automation-suite",
      color: "from-blue-400 to-purple-500",
      popular: true,
      icon: BotIcon,
      category: "AI Automation"
    },
    {
      title: "AI Cybersecurity Threat Intelligence Advanced",
      description: "Stay ahead of evolving cyber threats with our AI-powered platform. Detect threats 10x faster, reduce false positives by 90%.",
      price: "From $499/month",
      features: ["Real-time Threat Detection", "AI-Powered Behavioral Analytics", "Advanced Malware Detection"],
      href: "/services/ai-cybersecurity-threat-intelligence-advanced",
      color: "from-red-400 to-orange-500",
      popular: false,
      icon: ShieldIcon,
      category: "Cybersecurity"
    },
    {
      title: "AI Financial Risk Management Platform",
      description: "Transform financial risk management with AI-powered analytics. Reduce financial losses by 70%, improve returns by 40%.",
      price: "From $399/month",
      features: ["AI-Powered Risk Assessment", "Real-time Market Monitoring", "Compliance & Regulatory Reporting"],
      href: "/services/ai-financial-risk-management-platform",
      color: "from-green-400 to-emerald-500",
      popular: false,
      icon: TrendingUpIcon2,
      category: "Financial Services"
    },
    {
      title: "AI Supply Chain Optimization Enhanced",
      description: "Revolutionary supply chain optimization with AI. Reduce costs by 40% and improve delivery times by 50%.",
      price: "From $399/month",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management"],
      href: "/services/ai-supply-chain-optimization-enhanced",
      color: "from-blue-400 to-indigo-500",
      popular: false,
      icon: Network,
      category: "Supply Chain"
    },
    {
      title: "AI Sales Copilot",
      description: "Intelligent sales automation with 40% conversion improvement. Lead scoring, predictive analytics, and automated follow-ups.",
      price: "From $2,200/month",
      features: ["Lead Scoring", "Predictive Analytics", "Automated Follow-ups"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500",
      popular: false,
      icon: Users,
      category: "Sales & Marketing"
    },
    {
      title: "AI Healthcare Analytics Platform",
      description: "Advanced healthcare analytics powered by AI. Improve patient outcomes and operational efficiency.",
      price: "From $599/month",
      features: ["Patient Analytics", "Operational Insights", "Predictive Healthcare"],
      href: "/services/ai-healthcare-analytics-platform",
      color: "from-purple-400 to-pink-500",
      popular: false,
      icon: Activity,
      category: "Healthcare"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      count: 15,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Cybersecurity & Threat Intelligence",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      count: 12,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
    },
    {
      name: "Financial Services & Risk Management",
      description: "AI-powered financial solutions for modern institutions",
      icon: TrendingUp,
      count: 8,
      color: "from-green-400 to-emerald-500",
      services: ["Risk Assessment", "Portfolio Optimization", "Compliance Reporting", "Fraud Detection"]
    },
    {
      name: "Enterprise Automation",
      description: "Intelligent automation solutions for business operations",
      icon: Bot,
      count: 10,
      color: "from-purple-400 to-indigo-500",
      services: ["Process Automation", "Workflow Orchestration", "Business Intelligence", "Integration"]
    },
    {
      name: "Supply Chain & Logistics",
      description: "Smart supply chain and logistics optimization solutions",
      icon: Network,
      count: 6,
      color: "from-blue-400 to-cyan-500",
      services: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Real-time Tracking"]
    },
    {
      name: "Healthcare Technology",
      description: "Innovative healthcare solutions powered by AI",
      icon: Activity,
      count: 7,
      color: "from-pink-400 to-purple-500",
      services: ["Patient Analytics", "Diagnostic Support", "Operational Efficiency", "Predictive Healthcare"]
    }
  ];

  const stats = [
    { number: '100+', label: 'AI Services', icon: Brain },
    { number: '50+', label: 'Industry Solutions', icon: Target },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'AI Availability', icon: Clock }
  ];

  const benefits = [
    "Reduce operational costs by 40-70%",
    "Increase productivity by 60-80%",
    "Improve accuracy by 90-99%",
    "Accelerate decision-making by 3-5x",
    "Enable 24/7 automated operations",
    "Achieve regulatory compliance automatically"
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: "💳", description: "Risk management and fraud detection" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: "🛍️", description: "Customer analytics and inventory optimization" },
    { name: "Technology", icon: "💻", description: "Software development and cloud solutions" },
    { name: "Government", icon: "🏛️", description: "Digital transformation and security" }
  ];

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2025 - Zion Tech Group | Cutting-Edge AI & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive showcase of innovative AI, cybersecurity, financial, and automation services designed to transform your business in 2025." />
        <meta name="keywords" content="AI services 2025, innovative technology solutions, AI automation, cybersecurity, financial services, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                Innovation Showcase 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive collection of cutting-edge AI, cybersecurity, financial, and automation services 
                designed to transform your business and drive innovation across every aspect of your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
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
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
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
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Innovative Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and cutting-edge services that are transforming businesses across industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 border rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{service.category}</div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
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
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of services organized by category and industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <div className="text-sm text-gray-400">{category.count} services</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {service}
                      </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Business Results</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are designed to serve businesses across all major industries
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
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join hundreds of businesses that have transformed their operations with our innovative services. 
                Start your journey today and experience the future of business technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Ready to explore our innovative services? Our experts are here to help you find the perfect solution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}