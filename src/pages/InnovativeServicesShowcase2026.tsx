import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Lock, 
  Globe, 
  Heart, 
  Code, 
  Users, 
  BarChart3, 
  MessageCircle, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Scale,
  Home,
  Truck,
  ShoppingCart,
  FileText,
  Building2,
  Package,
  Route,
  Warehouse,
  Eye,
  Search,
  Calculator,
  ChartLine,
  PieChart,
  Globe2,
  Award,
  Briefcase,
  LineChart,
  AlertTriangle,
  Database,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  CreditCard,
  Filter,
  SortAsc,
  SortDesc,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  DollarSign,
  Activity,
  Atom,
  TrendingDown,
  Calendar,
  Clock,
  Gavel,
  BookOpen,
  FileCheck,
  AlertTriangle as AlertTriangleIcon,
  Download,
  Upload,
  Share2,
  Settings
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const newServices = [
    {
      title: "AI Legal Document Analysis Platform",
      description: "Revolutionize legal document review with 99.5% accuracy. Automate compliance monitoring, risk assessment, and contract analysis using advanced AI technology.",
      icon: Scale,
      href: "/services/ai-legal-document-analysis",
      price: "From $299/month",
      features: ["AI-Powered Analysis", "Compliance Monitoring", "Risk Assessment", "Legal Research"],
      benefits: ["99.5% accuracy", "90% time savings", "50+ regulations", "10,000+ firms"],
      color: "from-blue-500 to-blue-600",
      category: "Legal Tech"
    },
    {
      title: "AI Real Estate Investment Platform",
      description: "Make smarter real estate investments with AI-driven insights. 95% accuracy in market analysis, predictive analytics, and global market access for optimal returns.",
      icon: Home,
      href: "/services/ai-real-estate-investment-platform",
      price: "From $99/month",
      features: ["AI Market Analysis", "Predictive Analytics", "ROI Calculator", "Global Markets"],
      benefits: ["95% accuracy", "40% better returns", "150+ countries", "50,000+ users"],
      color: "from-green-500 to-green-600",
      category: "Real Estate"
    },
    {
      title: "AI Supply Chain Optimization Platform",
      description: "Transform your supply chain with AI-driven optimization. 95% forecast accuracy, 30% cost reduction, and real-time global visibility.",
      icon: Truck,
      href: "/services/ai-supply-chain-optimization-platform",
      price: "From $499/month",
      features: ["AI Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management"],
      benefits: ["95% accuracy", "30% cost reduction", "80% stockout reduction", "100+ countries"],
      color: "from-blue-500 to-blue-600",
      category: "Supply Chain"
    },
    {
      title: "AI E-commerce Optimization Platform",
      description: "Transform your e-commerce business with AI-driven optimization. 35% conversion increase, 25% AOV improvement, and intelligent product recommendations.",
      icon: ShoppingCart,
      href: "/services/ai-ecommerce-optimization-platform",
      price: "From $199/month",
      features: ["AI Product Recommendations", "Dynamic Pricing", "Customer Analytics", "Visual Search"],
      benefits: ["35% conversion increase", "25% AOV improvement", "40% retention", "90% search accuracy"],
      color: "from-purple-500 to-purple-600",
      category: "E-commerce"
    }
  ];

  const existingServices = [
    {
      title: "AI Sales Copilot",
      description: "Intelligent sales automation with 40% conversion improvement",
      icon: Users,
      href: "/services/ai-sales-copilot",
      price: "From $2,200/month",
      features: ["Lead Scoring", "Predictive Analytics", "Automated Follow-ups"],
      benefits: ["40% conversion improvement", "Automated workflows", "AI insights"],
      color: "from-green-500 to-green-600",
      category: "Sales & Marketing"
    },
    {
      title: "Cloud FinOps Optimizer",
      description: "Reduce cloud costs by 40% with AI-powered optimization",
      icon: Cloud,
      href: "/services/cloud-finops-optimizer",
      price: "From $1,800/month",
      features: ["Cost Optimization", "Waste Detection", "Real-time Monitoring"],
      benefits: ["40% cost reduction", "Real-time monitoring", "Automated optimization"],
      color: "from-blue-500 to-blue-600",
      category: "Cloud & DevOps"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automated compliance monitoring with 90% violation reduction",
      icon: Shield,
      href: "/services/ai-compliance-assistant",
      price: "From $2,500/month",
      features: ["24/7 Monitoring", "Regulatory Updates", "Risk Assessment"],
      benefits: ["90% violation reduction", "24/7 monitoring", "Automated updates"],
      color: "from-red-500 to-red-600",
      category: "Compliance & Security"
    },
    {
      title: "AI Healthcare Platform",
      description: "Revolutionize healthcare with AI-powered diagnostics and patient care",
      icon: Heart,
      href: "/services/ai-healthcare-platform",
      price: "From $3,000/month",
      features: ["Medical Imaging", "Patient Monitoring", "Drug Discovery"],
      benefits: ["Advanced diagnostics", "Patient monitoring", "Drug discovery"],
      color: "from-purple-500 to-purple-600",
      category: "Healthcare"
    }
  ];

  const categories = [
    { name: "Legal Tech", icon: Scale, count: 1, color: "from-blue-500 to-blue-600" },
    { name: "Real Estate", icon: Home, count: 1, color: "from-green-500 to-green-600" },
    { name: "Supply Chain", icon: Truck, count: 1, color: "from-blue-500 to-blue-600" },
    { name: "E-commerce", icon: ShoppingCart, count: 1, color: "from-purple-500 to-purple-600" },
    { name: "Sales & Marketing", icon: Users, count: 1, color: "from-green-500 to-green-600" },
    { name: "Cloud & DevOps", icon: Cloud, count: 1, color: "from-blue-500 to-blue-600" },
    { name: "Compliance & Security", icon: Shield, count: 1, color: "from-red-500 to-red-600" },
    { name: "Healthcare", icon: Heart, count: 1, color: "from-purple-500 to-purple-600" }
  ];

  const stats = [
    { number: "8+", label: "Innovative Services", icon: Rocket },
    { number: "95%+", label: "AI Accuracy", icon: Target },
    { number: "40%+", label: "Performance Improvement", icon: TrendingUp },
    { number: "150+", label: "Countries Served", icon: Globe2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Innovative Services Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's latest innovative micro-SaaS services and AI solutions. From legal tech to real estate, supply chain to e-commerce - transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="innovative services, micro-SaaS, AI solutions, legal tech, real estate AI, supply chain optimization, e-commerce AI, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Rocket className="w-12 h-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative Services Showcase 2026
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our latest cutting-edge micro-SaaS services and AI solutions designed to 
              transform your business across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-colors">
                Explore All Services
              </button>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              New Innovative Services 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest cutting-edge micro-SaaS solutions powered by advanced AI technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {newServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                      <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our established AI-powered solutions trusted by leading enterprises worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {existingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-lg font-bold text-gray-900 mb-3">{service.price}</div>
                <div className="mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 mb-1">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-sm text-gray-600">{category.count} service{category.count !== 1 ? 's' : ''}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose from our innovative AI-powered solutions and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-colors">
                Explore All Services
              </button>
              <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Have Questions? We're Here to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
