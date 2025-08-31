import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Zap, 
  Rocket, 
  Target, 
  Users, 
  Globe, 
  Database, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Cpu,
  Network,
  BookOpen,
  GraduationCap,
  Building2,
  Atom,
  Satellite,
  Search,
  FileText,
  Server,
  Truck,
  Leaf,
  TrendingUp,
  Lock,
  Lightbulb,
  Sparkles
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Research Assistant",
      description: "AI-powered research that works 24/7, continuously gathering and analyzing data from multiple sources",
      price: "From $299/month",
      features: ["Autonomous research", "Multi-source intelligence", "Predictive analytics", "Collaborative research"],
      link: "/services/ai-autonomous-research-assistant",
      category: "AI & Research"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Threat Intelligence",
      description: "Advanced AI-powered threat detection with 99.9% accuracy and real-time response capabilities",
      price: "From $499/month",
      features: ["AI threat detection", "Real-time monitoring", "Predictive intelligence", "Automated response"],
      link: "/services/ai-cybersecurity-threat-intelligence",
      category: "Cybersecurity"
    },
    {
      icon: Heart,
      title: "AI Healthcare Diagnostics Platform",
      description: "Revolutionary AI-powered healthcare diagnostics with 99.7% accuracy for early disease detection",
      price: "From $799/month",
      features: ["AI-powered diagnosis", "Multi-modal analysis", "Predictive healthcare", "HIPAA compliant"],
      link: "/services/ai-healthcare-diagnostics-platform",
      category: "Healthcare"
    },
    {
      icon: Search,
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO optimization using AI to boost search rankings and drive organic traffic",
      price: "From $399/month",
      features: ["AI keyword research", "Content optimization", "Ranking analysis", "Competitive insights"],
      link: "/services/ai-powered-seo",
      category: "Digital Marketing"
    },
    {
      icon: Users,
      title: "AI Customer Success Automation",
      description: "Automate customer success workflows with AI-powered insights and proactive engagement",
      price: "From $599/month",
      features: ["Customer insights", "Automated workflows", "Predictive analytics", "Success scoring"],
      link: "/services/ai-customer-success-automation",
      category: "Customer Success"
    },
    {
      icon: Truck,
      title: "AI Supply Chain Optimization",
      description: "Optimize supply chains with AI-powered forecasting, inventory management, and logistics optimization",
      price: "From $899/month",
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Risk management"],
      link: "/services/ai-supply-chain-optimization-enhanced",
      category: "Supply Chain"
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Comprehensive cloud infrastructure and DevOps automation for scalable applications",
      price: "From $1,299/month",
      features: ["Cloud migration", "DevOps automation", "Infrastructure as code", "Monitoring & alerting"],
      link: "/services/cloud-devops",
      category: "Cloud & Infrastructure"
    },
    {
      icon: Server,
      title: "IT Infrastructure Management",
      description: "End-to-end IT infrastructure management with proactive monitoring and optimization",
      price: "From $1,499/month",
      features: ["Infrastructure monitoring", "Performance optimization", "Capacity planning", "Disaster recovery"],
      link: "/services/it-infrastructure-management",
      category: "Infrastructure"
    },
    {
      icon: Lock,
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity protection for businesses of all sizes",
      price: "From $799/month",
      features: ["Threat detection", "Vulnerability assessment", "Security monitoring", "Incident response"],
      link: "/services/cybersecurity",
      category: "Security"
    },
    {
      icon: Database,
      title: "Data Analytics Platform",
      description: "Advanced data analytics and business intelligence platform for data-driven decisions",
      price: "From $1,199/month",
      features: ["Data visualization", "Predictive analytics", "Real-time dashboards", "Custom reporting"],
      link: "/services/ai-data-analytics-platform",
      category: "Analytics"
    }
  ];

  const emergingTech = [
    {
      icon: Atom,
      title: "Quantum Edge Computing",
      description: "Next-generation quantum computing solutions for complex computational challenges",
      price: "From $2,999/month",
      features: ["Quantum algorithms", "Edge computing", "Hybrid quantum-classical", "Performance optimization"],
      link: "/services/quantum-edge-computing-solutions",
      category: "Quantum Computing"
    },
    {
      icon: Satellite,
      title: "Space Technology Platform",
      description: "Innovative space technology solutions for satellite operations and space exploration",
      price: "From $3,999/month",
      features: ["Satellite operations", "Space data analytics", "Orbital mechanics", "Mission planning"],
      link: "/services/ai-space-technology-platform",
      category: "Space Tech"
    },
    {
      icon: Network,
      title: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain solutions for secure, transparent business operations",
      price: "From $1,999/month",
      features: ["Smart contracts", "DeFi solutions", "NFT platforms", "Supply chain tracking"],
      link: "/services/blockchain-enterprise-solutions",
      category: "Blockchain"
    },
    {
      icon: Leaf,
      title: "Sustainability & Green IT",
      description: "Eco-friendly technology solutions for sustainable business operations",
      price: "From $699/month",
      features: ["Carbon footprint tracking", "Energy optimization", "Green computing", "Sustainability reporting"],
      link: "/services/sustainability",
      category: "Sustainability"
    }
  ];

  const microSaaS = [
    {
      icon: Building2,
      title: "AI Project Management Platform",
      description: "Intelligent project management with AI-powered insights and automation",
      price: "From $399/month",
      features: ["AI task prioritization", "Resource optimization", "Risk assessment", "Progress tracking"],
      link: "/services/ai-project-management-platform",
      category: "Project Management"
    },
    {
      icon: TrendingUp,
      title: "AI Financial Risk Management",
      description: "Advanced financial risk assessment and management using AI algorithms",
      price: "From $1,199/month",
      features: ["Risk modeling", "Portfolio optimization", "Fraud detection", "Compliance monitoring"],
      link: "/services/ai-financial-risk-management-enhanced",
      category: "Financial Services"
    },
    {
      icon: FileText,
      title: "AI Legal Document Automation",
      description: "Automate legal document creation and analysis with AI-powered intelligence",
      price: "From $899/month",
      features: ["Document generation", "Contract analysis", "Legal research", "Compliance checking"],
      link: "/services/ai-legal-document-automation-platform",
      category: "Legal Tech"
    },
    {
      icon: GraduationCap,
      title: "AI Educational Content Creation",
      description: "Create engaging educational content with AI-powered tools and insights",
      price: "From $599/month",
      features: ["Content generation", "Curriculum design", "Assessment tools", "Learning analytics"],
      link: "/services/ai-educational-content-creation-platform",
      category: "Education"
    }
  ];

  const allServices = [...aiServices, ...itServices, ...emergingTech, ...microSaaS];

  const categories = [
    { name: "All Services", icon: Globe, count: allServices.length },
    { name: "AI & Research", icon: Brain, count: aiServices.length },
    { name: "IT & Infrastructure", icon: Server, count: itServices.length },
    { name: "Emerging Tech", icon: Rocket, count: emergingTech.length },
    { name: "Micro SaaS", icon: Building2, count: microSaaS.length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === "All Services" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>2026 Innovation Showcase</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Showcase 2026</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover our complete portfolio of innovative AI, IT, and specialized technology solutions. 
              From cutting-edge AI research to enterprise infrastructure, we have the expertise to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, features, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {selectedCategory === "All Services" ? "All Services" : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} services found. Explore our comprehensive portfolio of innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive portfolio of innovative services and start your 
              digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Complete Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
