import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Sparkles,
  Rocket,
  Globe,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory,
  BarChart3,
  Calendar,
  Mail as MailIcon,
  Share2,
  Monitor,
  PieChart,
  Headphones,
  LifeBuoy,
  MessageSquare,
  Activity,
  Target as TargetIcon,
  TrendingDown,
  AlertTriangle as AlertTriangleIcon,
  Lock,
  Scale,
  Gauge,
  TrendingUp as TrendingUpIcon,
  AlertCircle,
  CheckSquare,
  FileText,
  BarChart,
  PieChart as PieChartIcon,
  Package,
  Route,
  Warehouse,
  MapPin,
  Navigation,
  Compass,
  Stethoscope,
  Activity as ActivityIcon,
  Pill,
  Microscope,
  Shield as ShieldIcon,
  Truck,
  PenTool,
  MessageSquare as MessageSquareIcon,
  AlertTriangle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2025() {
  const services = [
    {
      title: "AI Content Marketing Automation",
      description: "Transform your content marketing with AI-powered automation. Generate, optimize, and distribute content across all channels with intelligent automation.",
      icon: PenTool,
      path: "/services/ai-content-marketing-automation",
      features: ["AI Content Generation", "Multi-Format Content", "Performance Analytics", "Audience Segmentation", "Smart Scheduling", "Cross-Platform Distribution"],
      pricing: "Starting at $299/month",
      color: "from-cyan-500 to-purple-600",
      category: "Marketing & Content"
    },
    {
      title: "AI Customer Success Platform",
      description: "Transform customer success with AI-powered insights, automation, and predictive analytics. Reduce churn and increase customer lifetime value.",
      icon: MessageSquareIcon,
      path: "/services/ai-customer-success-platform",
      features: ["AI-Powered Insights", "Customer Journey Mapping", "Predictive Analytics", "Personalized Engagement", "Intelligent Support", "Success Metrics"],
      pricing: "Starting at $399/month",
      color: "from-green-500 to-blue-600",
      category: "Customer Success"
    },
    {
      title: "AI Financial Risk Management",
      description: "Transform financial risk management with AI-powered insights, compliance automation, and predictive analytics. Ensure regulatory compliance and optimize portfolio performance.",
      icon: Shield,
      path: "/services/ai-financial-risk-management",
      features: ["AI Risk Assessment", "Compliance Monitoring", "Predictive Analytics", "Portfolio Optimization", "Real-time Alerts", "Comprehensive Reporting"],
      pricing: "Starting at $899/month",
      color: "from-red-500 to-orange-600",
      category: "Financial Services"
    },
    {
      title: "AI Supply Chain Optimization Platform",
      description: "Transform your supply chain with AI-powered optimization, demand forecasting, and route planning. Reduce costs and improve efficiency with intelligent automation.",
      icon: Truck,
      path: "/services/ai-supply-chain-optimization-platform",
      features: ["AI Demand Forecasting", "Route Optimization", "Inventory Management", "Supplier Analytics", "Risk Management", "Performance Analytics"],
      pricing: "Starting at $499/month",
      color: "from-blue-500 to-cyan-600",
      category: "Supply Chain & Logistics"
    },
    {
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare delivery with AI-powered analytics, patient monitoring, and clinical decision support. Improve outcomes and reduce costs with intelligent healthcare technology.",
      icon: Heart,
      path: "/services/ai-healthcare-analytics-platform",
      features: ["AI Disease Prediction", "Patient Risk Assessment", "Treatment Optimization", "Population Health Analytics", "Real-time Monitoring", "Clinical Decision Support"],
      pricing: "Starting at $699/month",
      color: "from-emerald-500 to-teal-600",
      category: "Healthcare"
    },
    {
      title: "AI Business Intelligence Platform",
      description: "Advanced business intelligence with machine learning insights. Real-time data processing, predictive analytics, and custom dashboards for informed decision-making.",
      icon: Brain,
      path: "/services/ai-business-intelligence",
      features: ["Advanced Machine Learning", "Real-time Analytics", "Predictive Analytics", "Intelligent Automation", "Custom Dashboards", "API Integration"],
      pricing: "Starting at $599/month",
      color: "from-purple-500 to-pink-600",
      category: "Business Intelligence"
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Advanced security protocols and threat protection systems with AI-powered threat detection and automated response capabilities.",
      icon: Lock,
      path: "/services/ai-cybersecurity-platform",
      features: ["AI Threat Detection", "Automated Response", "Real-time Monitoring", "Vulnerability Assessment", "Compliance Management", "Incident Response"],
      pricing: "Starting at $799/month",
      color: "from-orange-500 to-red-600",
      category: "Cybersecurity"
    },
    {
      title: "AI Project Management Platform",
      description: "Intelligent project management with AI-powered insights, automated workflows, and predictive analytics for optimal project delivery.",
      icon: Target,
      path: "/services/ai-project-management-platform",
      features: ["AI Project Planning", "Resource Optimization", "Risk Prediction", "Automated Workflows", "Performance Analytics", "Team Collaboration"],
      pricing: "Starting at $449/month",
      color: "from-indigo-500 to-purple-600",
      category: "Project Management"
    }
  ];

  const categories = [
    "All Services",
    "Marketing & Content",
    "Customer Success", 
    "Financial Services",
    "Supply Chain & Logistics",
    "Healthcare",
    "Business Intelligence",
    "Cybersecurity",
    "Project Management"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");

  const filteredServices = selectedCategory === "All Services" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative AI Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of AI-powered services including content marketing automation, customer success platforms, financial risk management, and more."
        keywords="AI services, innovative technology, micro SAAS, AI platforms, business automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive suite of cutting-edge AI-powered services designed to transform 
              your business operations and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full mb-3">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-purple-400">{service.pricing}</p>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive suite of AI-powered services and start your digital transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-slate-300 hover:text-purple-400 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-purple-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}