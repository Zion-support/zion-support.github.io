import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Heart, 
  Truck, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Eye,
  Target,
  Rocket,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin,
  Package,
  Stethoscope,
  Factory,
  Cloud,
  Network,
  Server,
  Sparkles,
  Code,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Building2,
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
  Waterfall
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      name: "AI Quantum Financial Analytics Platform",
      description: "Revolutionary quantum AI platform for financial modeling, risk assessment, and portfolio optimization with 95%+ accuracy",
      href: "/services/ai-quantum-financial-analytics-platform",
      icon: DollarSign,
      color: "from-blue-500 to-purple-600",
      category: "Financial Services",
      pricing: "From $2,500/month",
      features: ["Quantum AI Algorithms", "Real-time Risk Management", "95%+ Market Prediction", "Regulatory Compliance"]
    },
    {
      name: "AI Healthcare Analytics Platform",
      description: "Advanced healthcare AI platform for diagnostics, patient monitoring, and population health management",
      href: "/services/ai-healthcare-analytics-platform",
      icon: Heart,
      color: "from-green-500 to-emerald-600",
      category: "Healthcare",
      pricing: "From $1,500/month",
      features: ["AI Diagnostics", "Predictive Analytics", "HIPAA Compliant", "Population Health"]
    },
    {
      name: "AI Supply Chain Optimization Platform",
      description: "Intelligent supply chain management with AI-powered forecasting, route optimization, and risk management",
      href: "/services/ai-supply-chain-optimization-platform",
      icon: Truck,
      color: "from-orange-500 to-red-600",
      category: "Supply Chain",
      pricing: "From $2,000/month",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Analytics"]
    },
    {
      name: "AI Content Creation Studio Pro",
      description: "Professional AI-powered content creation platform for marketing, social media, and creative projects",
      href: "/services/AI-Content-Creation-Studio-Pro",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      category: "Content Creation",
      pricing: "From $500/month",
      features: ["AI Writing", "Visual Design", "Content Optimization", "Multi-platform Publishing"]
    },
    {
      name: "Quantum AI Trading Platform",
      description: "Next-generation quantum computing platform for algorithmic trading and market analysis",
      href: "/services/Quantum-AI-Trading-Platform",
      icon: Atom,
      color: "from-orange-500 to-red-600",
      category: "Trading & Finance",
      pricing: "From $5,000/month",
      features: ["Quantum Algorithms", "Real-time Trading", "Risk Management", "Market Analysis"]
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      services: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"]
    },
    {
      name: "Financial Technology",
      description: "Innovative fintech solutions for modern financial institutions",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-600",
      services: ["Risk Management", "Portfolio Optimization", "Trading Platforms", "Compliance Tools"]
    },
    {
      name: "Healthcare Technology",
      description: "Advanced healthcare solutions powered by AI and data analytics",
      icon: Heart,
      color: "from-green-500 to-emerald-600",
      services: ["Diagnostic Tools", "Patient Monitoring", "Population Health", "Clinical Research"]
    },
    {
      name: "Supply Chain & Logistics",
      description: "Intelligent supply chain optimization and logistics management",
      icon: Truck,
      color: "from-orange-500 to-red-600",
      services: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"]
    },
    {
      name: "Content & Creative",
      description: "AI-powered content creation and creative automation tools",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      services: ["Content Generation", "Visual Design", "Marketing Automation", "Creative AI"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problems",
      icon: Atom,
      color: "from-orange-500 to-red-600",
      services: ["Quantum Algorithms", "Financial Modeling", "Scientific Computing", "Optimization"]
    }
  ];

  const benefits = [
    "Reduce operational costs by 20-40% through AI optimization",
    "Improve accuracy and efficiency by 90%+ with machine learning",
    "Scale operations seamlessly with cloud-native architecture",
    "Ensure compliance with industry standards and regulations",
    "Get real-time insights and predictive analytics",
    "Integrate with existing systems and workflows"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}AI & IT Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of cutting-edge AI, IT, and micro SAAS solutions designed to transform 
              your business operations and drive innovation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most innovative and transformative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 text-blue-400 text-xs font-medium rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <p className="text-blue-400 font-semibold text-sm">{service.pricing}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
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
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 group-hover:scale-105"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions across all major technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with proven results and cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations already using our innovative services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Demo
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>

            <div className="mt-8 text-gray-400">
              <p>Contact us: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;