import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Lock,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  MessageSquare,
  FileText,
  Eye,
  Search,
  Filter,
  Analytics,
  Heart,
  Smile,
  Frown,
  Activity,
  PieChart,
  LineChart,
  UserCheck,
  UserX,
  UserPlus,
  TrendingDown,
  AlertTriangle,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Rocket,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Services = () => {
  const aiServices = [
    {
      title: "AI Content Intelligence Platform",
      description: "Transform your content strategy with AI-powered analysis, optimization, and audience intelligence",
      icon: Brain,
      href: "/services/ai-content-intelligence-platform",
      price: "From $99/month",
      features: ["Content Analysis", "Audience Intelligence", "Brand Monitoring", "Multi-Channel Integration"],
      color: "from-cyan-500 to-blue-600",
      category: "AI & Machine Learning"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Get real-time insights into customer behavior, sentiment, and journey optimization",
      icon: Users,
      href: "/services/ai-customer-experience-analytics",
      price: "From $149/month",
      features: ["Sentiment Analysis", "Predictive Analytics", "Customer Journey Mapping", "Real-time Monitoring"],
      color: "from-purple-500 to-pink-600",
      category: "AI & Machine Learning"
    },
    {
      title: "AI Financial Risk Management",
      description: "Protect your assets with AI-powered risk assessment, monitoring, and automated mitigation",
      icon: Shield,
      href: "/services/ai-financial-risk-management",
      price: "From $299/month",
      features: ["Risk Assessment", "Portfolio Monitoring", "Regulatory Compliance", "Multi-Asset Coverage"],
      color: "from-blue-500 to-indigo-600",
      category: "AI & Machine Learning"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Optimize your supply chain with predictive analytics and intelligent automation",
      icon: TrendingUp,
      href: "/services/ai-supply-chain-optimization",
      price: "From $199/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Optimization", "Risk Management"],
      color: "from-green-500 to-emerald-600",
      category: "AI & Machine Learning"
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Advanced threat detection and response with machine learning and behavioral analysis",
      icon: Lock,
      href: "/services/ai-cybersecurity-platform",
      price: "From $399/month",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Compliance Management"],
      color: "from-red-500 to-pink-600",
      category: "AI & Machine Learning"
    },
    {
      title: "AI Healthcare Platform",
      description: "Revolutionize healthcare with AI-powered diagnostics, patient monitoring, and predictive analytics",
      icon: Heart,
      href: "/services/ai-healthcare-platform",
      price: "From $599/month",
      features: ["Medical Imaging", "Patient Monitoring", "Predictive Diagnostics", "Clinical Decision Support"],
      color: "from-emerald-500 to-teal-600",
      category: "AI & Machine Learning"
    },
    {
      title: "AI Quantum Hybrid Platform",
      description: "Next-generation computing combining quantum and classical AI for complex problem solving",
      icon: Atom,
      href: "/services/ai-quantum-hybrid-platform",
      price: "From $1,999/month",
      features: ["Quantum Algorithms", "Hybrid Computing", "Optimization", "Simulation"],
      color: "from-violet-500 to-purple-600",
      category: "AI & Machine Learning"
    }
  ];

  const itServices = [
    {
      title: "Cloud & DevOps Automation",
      description: "Streamline your infrastructure with automated cloud management and CI/CD pipelines",
      icon: Cloud,
      href: "/services/cloud-devops",
      price: "From $199/month",
      features: ["Infrastructure as Code", "CI/CD Pipelines", "Monitoring", "Security"],
      category: "IT Infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including penetration testing and compliance management",
      icon: Shield,
      href: "/services/cybersecurity",
      price: "From $299/month",
      features: ["Penetration Testing", "Security Audits", "Compliance", "Incident Response"],
      category: "IT Infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "Transform your business with modern technology solutions and process optimization",
      icon: Rocket,
      href: "/services/digital-transformation",
      price: "From $499/month",
      features: ["Process Optimization", "Technology Integration", "Change Management", "Training"],
      category: "IT Infrastructure"
    },
    {
      title: "IT Infrastructure",
      description: "Modernize your IT infrastructure with scalable and secure solutions",
      icon: Cpu,
      href: "/services/it-infrastructure",
      price: "From $399/month",
      features: ["Network Design", "Server Management", "Backup Solutions", "Support"],
      category: "IT Infrastructure"
    }
  ];

  const microSaaSServices = [
    {
      title: "Micro CRM Platform",
      description: "Lightweight CRM solution designed for small businesses and startups",
      icon: Users,
      href: "/services/micro-crm",
      price: "From $49/month",
      features: ["Contact Management", "Sales Tracking", "Email Integration", "Reporting"],
      category: "Micro SaaS"
    },
    {
      title: "AI Workflow Automation",
      description: "Automate repetitive tasks and streamline business processes with AI",
      icon: Zap,
      href: "/services/ai-workflow-automation",
      price: "From $79/month",
      features: ["Process Automation", "AI Integration", "Custom Workflows", "Analytics"],
      category: "Micro SaaS"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom SaaS applications tailored to your specific business needs",
      icon: Building,
      href: "/services/micro-saas-solutions",
      price: "From $199/month",
      features: ["Custom Development", "Cloud Hosting", "API Integration", "Support"],
      category: "Micro SaaS"
    }
  ];

  const allServices = [...aiServices, ...itServices, ...microSaaSServices];
  const categories = ["All", "AI & Machine Learning", "IT Infrastructure", "Micro SaaS"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <SEO 
        title="Services | Zion Tech Group"
        description="Explore our comprehensive range of AI services, IT solutions, and Micro SaaS platforms. Transform your business with cutting-edge technology solutions."
        keywords="AI services, IT solutions, Micro SaaS, digital transformation, cloud computing, cybersecurity, business automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Comprehensive Technology Services</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our Services
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our comprehensive range of cutting-edge AI services, IT solutions, and Micro SaaS platforms. 
                Transform your business with innovative technology solutions designed for the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
                <a 
                  href="/contact" 
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-slate-700/80 text-gray-300 hover:bg-slate-600/80 border border-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive portfolio of innovative services designed to transform your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchTerm("");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team to discuss how our services can help drive your business forward.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <a href={contactInfo.website} className="text-gray-300 hover:text-white transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    Cutting-edge AI technology
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    Industry expertise
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    Scalable solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    24/7 support
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
