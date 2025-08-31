import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Star, 
  TrendingUp, 
  Zap,
  Brain, 
  Shield, 
  Users, 
  Globe, 
  Smartphone, 
  Database,
  BarChart3,
  MessageSquare,
  Calendar,
  Target,
  Settings,
  Monitor,
  Cpu,
  Network,
  Lock,
  Cloud,
  Smartphone as Mobile,
  Leaf,
  Home,
  Building2,
  Car,
  Factory,
  ShoppingCart,
  CreditCard,
  FileText,
  Heart,
  Lightbulb,
  Rocket,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Atom,
  Wrench,
  Truck,
  Briefcase,
  Layers,
  Eye,
  Microscope,
  CircuitBoard,
  Building,
  Workflow
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const services = [
    {
      id: "ai-legal-document-automation",
      title: "AI Legal Document Automation Platform",
      description: "Advanced AI-powered platform that automates legal document creation, review, and analysis with 99.9% accuracy and compliance monitoring.",
      category: "Legal Technology",
      price: "$299/month",
      marketPrice: "$299 - $1,200/month",
      roi: "400-600%",
      icon: FileText,
      features: [
        "Document automation",
        "Template library",
        "Compliance monitoring",
        "AI-powered review",
        "Custom workflows"
      ],
      benefits: [
        "Reduce document creation time by 80%",
        "Improve accuracy by 99.9%",
        "Handle 3x more cases",
        "Ensure compliance",
        "Reduce legal costs"
      ],
      competitors: ["DocuSign", "ContractPodAi", "Evisort", "Kira Systems"],
      marketSize: "$2.8 billion by 2025"
    },
    {
      id: "ai-healthcare-diagnostics",
      title: "AI Healthcare Diagnostics Platform",
      description: "Revolutionary AI-powered platform that provides accurate medical diagnostics, treatment recommendations, and patient monitoring with 95%+ accuracy.",
      category: "Healthcare Technology",
      price: "$899/month",
      marketPrice: "$899 - $2,500/month",
      roi: "500-900%",
      icon: Heart,
      features: [
        "AI diagnostics",
        "Treatment recommendations",
        "Patient monitoring",
        "Clinical decision support",
        "Population health"
      ],
      benefits: [
        "Reduce diagnostic errors by 60%",
        "Improve patient outcomes by 40%",
        "Handle 2x more patients",
        "Optimize treatment plans",
        "Ensure compliance"
      ],
      competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare", "Epic"],
      marketSize: "$45.2 billion by 2025"
    },
    {
      id: "ai-financial-trading",
      title: "AI Financial Trading Platform",
      description: "Advanced AI-powered trading platform that provides real-time market analysis, automated trading strategies, and risk management with 85%+ win rate.",
      category: "Financial Technology",
      price: "$699/month",
      marketPrice: "$699 - $2,500/month",
      roi: "400-800%",
      icon: TrendingUp,
      features: [
        "AI market analysis",
        "Automated trading",
        "Risk management",
        "Portfolio optimization",
        "Real-time data"
      ],
      benefits: [
        "Reduce trading costs by 40%",
        "Improve win rate by 25%",
        "Increase returns by 35%",
        "Automate strategies",
        "Real-time monitoring"
      ],
      competitors: ["Bloomberg", "Thomson Reuters", "FactSet", "Refinitiv"],
      marketSize: "$31.8 billion by 2025"
    },
    {
      id: "ai-supply-chain-optimization",
      title: "AI Supply Chain Optimization Platform",
      description: "Intelligent supply chain platform that optimizes operations, predicts demand, and reduces costs through AI-powered analytics and automation.",
      category: "Supply Chain",
      price: "$599/month",
      marketPrice: "$599 - $1,900/month",
      roi: "300-700%",
      icon: Truck,
      features: [
        "Demand forecasting",
        "Inventory optimization",
        "Route optimization",
        "Risk assessment",
        "Real-time visibility"
      ],
      benefits: [
        "Reduce supply chain costs by 30%",
        "Improve inventory turnover by 40%",
        "Reduce lead times by 50%",
        "Mitigate risks",
        "Enhance collaboration"
      ],
      competitors: ["SAP", "Oracle", "Manhattan Associates", "JDA Software"],
      marketSize: "$18.7 billion by 2025"
    },
    {
      id: "ai-customer-experience-analytics",
      title: "AI Customer Experience Analytics Platform",
      description: "Advanced AI-powered platform that analyzes customer behavior, predicts needs, and optimizes customer journeys for maximum satisfaction and loyalty.",
      category: "Customer Experience",
      price: "$449/month",
      marketPrice: "$449 - $1,500/month",
      roi: "300-600%",
      icon: Users,
      features: [
        "Customer analytics",
        "Predictive insights",
        "Journey optimization",
        "Sentiment analysis",
        "Personalization"
      ],
      benefits: [
        "Reduce customer churn by 30%",
        "Improve conversion rates by 45%",
        "Increase customer lifetime value by 40%",
        "Enhance satisfaction",
        "Optimize experiences"
      ],
      competitors: ["Segment", "Amplitude", "Mixpanel", "Optimizely"],
      marketSize: "$38.5 billion by 2025"
    },
    {
      id: "ai-content-marketing-studio",
      title: "AI Content Marketing Studio",
      description: "Intelligent content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
      category: "Content Marketing",
      price: "$299/month",
      marketPrice: "$299 - $1,000/month",
      roi: "400-700%",
      icon: FileText,
      features: [
        "AI content generation",
        "SEO optimization",
        "Custom templates",
        "Analytics dashboard",
        "Multi-language support"
      ],
      benefits: [
        "Reduce content creation time by 80%",
        "Improve SEO rankings by 60%",
        "Increase engagement by 45%",
        "Scale content production",
        "Maintain quality"
      ],
      competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"],
      marketSize: "$18.9 billion by 2025"
    },
    {
      id: "ai-devops-automation",
      title: "AI DevOps Automation Platform",
      description: "Advanced DevOps platform that automates deployment, testing, and monitoring using AI to optimize performance and reduce operational overhead.",
      category: "DevOps",
      price: "$499/month",
      marketPrice: "$499 - $1,600/month",
      roi: "400-700%",
      icon: Settings,
      features: [
        "CI/CD automation",
        "AI-powered testing",
        "Performance monitoring",
        "Predictive analytics",
        "Custom workflows"
      ],
      benefits: [
        "Reduce deployment time by 70%",
        "Improve code quality by 50%",
        "Reduce downtime by 80%",
        "Automate operations",
        "Scale efficiently"
      ],
      competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions"],
      marketSize: "$16.8 billion by 2025"
    },
    {
      id: "ai-ecommerce-optimization",
      title: "AI E-commerce Optimization Platform",
      description: "Intelligent e-commerce platform that optimizes product recommendations, pricing, and customer experience to maximize sales and conversion rates.",
      category: "E-commerce",
      price: "$399/month",
      marketPrice: "$399 - $1,300/month",
      roi: "300-600%",
      icon: ShoppingCart,
      features: [
        "Product recommendations",
        "Dynamic pricing",
        "Customer segmentation",
        "Conversion optimization",
        "Analytics dashboard"
      ],
      benefits: [
        "Reduce cart abandonment by 40%",
        "Improve conversion rates by 35%",
        "Increase average order value by 25%",
        "Personalize experiences",
        "Maximize revenue"
      ],
      competitors: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
      marketSize: "$22.7 billion by 2025"
    },
    {
      id: "ai-mental-health-support",
      title: "AI Mental Health Support Platform",
      description: "Compassionate AI-powered platform that provides mental health support, crisis intervention, and wellness monitoring with 24/7 availability.",
      category: "Healthcare Technology",
      price: "$199/month",
      marketPrice: "$199 - $800/month",
      roi: "400-800%",
      icon: Heart,
      features: [
        "AI chat support",
        "Crisis detection",
        "Wellness tracking",
        "Personalized care",
        "24/7 availability"
      ],
      benefits: [
        "Reduce mental health costs by 50%",
        "Improve access to care by 80%",
        "Increase patient satisfaction by 60%",
        "Provide immediate support",
        "Scale care delivery"
      ],
      competitors: ["Woebot", "Wysa", "Ginger", "Talkspace"],
      marketSize: "$15.7 billion by 2025"
    },
    {
      id: "ai-carbon-footprint-management",
      title: "AI Carbon Footprint Management Platform",
      description: "Intelligent sustainability platform that tracks, analyzes, and optimizes carbon footprints to help organizations achieve net-zero emissions goals.",
      category: "Sustainability",
      price: "$349/month",
      marketPrice: "$349 - $1,200/month",
      roi: "300-600%",
      icon: Leaf,
      features: [
        "Carbon tracking",
        "Emissions analysis",
        "Optimization tools",
        "Compliance reporting",
        "Sustainability insights"
      ],
      benefits: [
        "Reduce carbon costs by 40%",
        "Improve sustainability scores by 60%",
        "Achieve compliance faster by 50%",
        "Track progress",
        "Meet ESG goals"
      ],
      competitors: ["Carbon Trust", "EcoAct", "South Pole", "ClimatePartner"],
      marketSize: "$8.6 billion by 2025"
    },
    {
      id: "ai-smart-home-energy",
      title: "AI Smart Home Energy Management Platform",
      description: "Intelligent home energy platform that optimizes energy usage, reduces costs, and integrates with smart home devices for maximum efficiency.",
      category: "Smart Home",
      price: "$149/month",
      marketPrice: "$149 - $600/month",
      roi: "200-500%",
      icon: Home,
      features: [
        "Energy monitoring",
        "Smart optimization",
        "Device integration",
        "Cost analysis",
        "Mobile app"
      ],
      benefits: [
        "Reduce energy costs by 30%",
        "Improve energy efficiency by 40%",
        "Increase home value by 15%",
        "Automate management",
        "Sustainable living"
      ],
      competitors: ["Nest", "Ecobee", "Honeywell", "Siemens"],
      marketSize: "$28.9 billion by 2025"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'legal', name: 'Legal Technology', icon: FileText },
    { id: 'healthcare', name: 'Healthcare Technology', icon: Heart },
    { id: 'financial', name: 'Financial Technology', icon: TrendingUp },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck },
    { id: 'customer-experience', name: 'Customer Experience', icon: Users },
    { id: 'content-marketing', name: 'Content Marketing', icon: FileText },
    { id: 'devops', name: 'DevOps', icon: Settings },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf },
    { id: 'smart-home', name: 'Smart Home', icon: Home }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service =>
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price':
        filtered.sort((a, b) => parseFloat(a.price.replace('$', '').replace('/month', '')) - parseFloat(b.price.replace('$', '').replace('/month', '')));
        break;
      case 'roi':
        filtered.sort((a, b) => parseFloat(b.roi.split('-')[0].replace('%', '')) - parseFloat(a.roi.split('-')[0].replace('%', '')));
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category.toLowerCase().replace(' ', '-'));
    return categoryData ? categoryData.icon : Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI-powered solutions that transform businesses, 
              enhance productivity, and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
            >
              {/* Service Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">{service.category}</div>
                  <div className="text-lg font-bold text-white">{service.price}</div>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Zap className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Market Price:</span>
                  <span className="text-white font-semibold">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-400">ROI:</span>
                  <span className="text-green-400 font-semibold">{service.roi}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-400">Market Size:</span>
                  <span className="text-blue-400 font-semibold">{service.marketSize}</span>
                </div>
              </div>

              {/* Competitors */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Competitors</h4>
                <div className="flex flex-wrap gap-2">
                  {service.competitors.slice(0, 3).map((competitor, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full border border-white/20"
                    >
                      {competitor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI-powered solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Call Us Now
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;