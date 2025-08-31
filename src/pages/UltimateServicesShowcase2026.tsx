import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function UltimateServicesShowcase2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const allServices = [
    // AI & Automation Services
    {
      id: "ai-autonomous-code-reviewer",
      title: "AI Autonomous Code Reviewer & Quality Assurance Platform",
      description: "Advanced AI-powered code review system that automatically analyzes code quality, identifies security vulnerabilities, suggests optimizations, and enforces coding standards across multiple programming languages.",
      category: "AI & Automation",
      price: "$2,999",
      rating: 4.9,
      reviews: 234,
      features: ["AI Code Review", "Security Analysis", "Code Quality", "Automation", "Multi-language Support"],
      benefits: ["400% ROI within 4 months", "2-3 weeks setup", "GitHub/GitLab integration"],
      website: "https://ziontechgroup.com/ai-code-reviewer",
      featured: true
    },
    {
      id: "ai-powered-seo-optimization",
      title: "AI-Powered SEO Optimization & Content Strategy Platform",
      description: "Intelligent SEO platform that uses machine learning to analyze search trends, optimize content, track rankings, and provide actionable insights for improving search engine visibility and organic traffic.",
      category: "AI & Automation",
      price: "$1,999",
      rating: 4.8,
      reviews: 156,
      features: ["AI SEO", "Content Optimization", "Ranking Tracking", "Keyword Research", "Analytics"],
      benefits: ["350% ROI within 6 months", "1-2 weeks setup", "Google Analytics integration"],
      website: "https://ziontechgroup.com/ai-seo-platform",
      featured: true
    },
    {
      id: "ai-customer-support-automation",
      title: "AI Customer Support Automation & Chatbot Platform",
      description: "Intelligent customer support automation system with AI chatbots, ticket routing, sentiment analysis, and automated responses that reduce support costs while improving customer satisfaction.",
      category: "AI & Automation",
      price: "$2,499",
      rating: 4.7,
      reviews: 189,
      features: ["AI Chatbot", "Support Automation", "Ticket Management", "Sentiment Analysis", "24/7 Support"],
      benefits: ["300% ROI within 5 months", "2-3 weeks setup", "Slack/Teams integration"],
      website: "https://ziontechgroup.com/ai-support-automation",
      featured: true
    },
    {
      id: "ai-autonomous-legal-assistant",
      title: "AI Autonomous Legal Assistant & Contract Analysis Platform",
      description: "Intelligent legal platform that uses AI to analyze contracts, identify legal risks, automate document review, and provide legal insights for businesses and legal professionals.",
      category: "AI & Automation",
      price: "$5,499",
      rating: 4.8,
      reviews: 89,
      features: ["Legal AI", "Contract Analysis", "Risk Assessment", "Document Review", "Legal Compliance"],
      benefits: ["450% ROI within 8 months", "4-5 weeks setup", "DocuSign integration"],
      website: "https://ziontechgroup.com/ai-legal-assistant",
      featured: true
    },
    {
      id: "ai-autonomous-hr-recruiter",
      title: "AI Autonomous HR Recruiter & Talent Acquisition Platform",
      description: "Intelligent HR platform that uses AI to automate candidate sourcing, screen resumes, conduct initial interviews, and match the best talent to job requirements.",
      category: "AI & Automation",
      price: "$2,999",
      rating: 4.8,
      reviews: 134,
      features: ["AI Recruitment", "Talent Acquisition", "Resume Screening", "Candidate Matching", "HR Automation"],
      benefits: ["350% ROI within 5 months", "2-3 weeks setup", "ATS systems integration"],
      website: "https://ziontechgroup.com/ai-hr-recruiter",
      featured: true
    },
    {
      id: "ai-content-generation-suite",
      title: "AI Content Generation & Creative Writing Suite",
      description: "Comprehensive content creation platform that uses AI to generate articles, marketing copy, social media posts, and creative content while maintaining brand voice and style.",
      category: "AI & Automation",
      price: "$1,999",
      rating: 4.8,
      reviews: 189,
      features: ["AI Content", "Creative Writing", "Marketing Copy", "Brand Voice", "Content Automation"],
      benefits: ["400% ROI within 4 months", "1-2 weeks setup", "WordPress/Shopify integration"],
      website: "https://ziontechgroup.com/ai-content-generation",
      featured: true
    },
    {
      id: "ai-autonomous-cybersecurity",
      title: "AI Autonomous Cybersecurity & Threat Response Platform",
      description: "Advanced cybersecurity platform that uses AI to automatically detect, analyze, and respond to cyber threats in real-time, providing 24/7 protection for businesses.",
      category: "AI & Automation",
      price: "$6,499",
      rating: 4.9,
      reviews: 89,
      features: ["AI Cybersecurity", "Threat Detection", "Automatic Response", "24/7 Protection", "Real-time Defense"],
      benefits: ["550% ROI within 9 months", "5-6 weeks setup", "SIEM systems integration"],
      website: "https://ziontechgroup.com/ai-autonomous-cybersecurity",
      featured: true
    },
    {
      id: "ai-autonomous-education",
      title: "AI Autonomous Education & Personalized Learning Platform",
      description: "Intelligent education platform that uses AI to create personalized learning paths, adapt content to individual needs, and provide real-time feedback for students.",
      category: "AI & Automation",
      price: "$2,499",
      rating: 4.8,
      reviews: 123,
      features: ["AI Education", "Personalized Learning", "Adaptive Content", "Real-time Feedback", "Student Analytics"],
      benefits: ["350% ROI within 5 months", "2-3 weeks setup", "LMS systems integration"],
      website: "https://ziontechgroup.com/ai-autonomous-education",
      featured: true
    },
    {
      id: "ai-autonomous-manufacturing",
      title: "AI Autonomous Manufacturing & Industry 4.0 Platform",
      description: "Intelligent manufacturing platform that uses AI to automate production processes, predict maintenance needs, optimize quality control, and enable smart factory operations.",
      category: "AI & Automation",
      price: "$5,499",
      rating: 4.8,
      reviews: 78,
      features: ["AI Manufacturing", "Industry 4.0", "Predictive Maintenance", "Quality Control", "Smart Factory"],
      benefits: ["450% ROI within 8 months", "4-5 weeks setup", "PLC/SCADA integration"],
      website: "https://ziontechgroup.com/ai-autonomous-manufacturing",
      featured: true
    },
    {
      id: "ai-autonomous-energy-management",
      title: "AI Autonomous Energy Management & Smart Grid Platform",
      description: "Intelligent energy management platform that uses AI to optimize power consumption, predict energy demand, manage renewable energy sources, and reduce energy costs.",
      category: "AI & Automation",
      price: "$4,499",
      rating: 4.8,
      reviews: 67,
      features: ["AI Energy", "Smart Grid", "Power Optimization", "Demand Prediction", "Renewable Energy"],
      benefits: ["450% ROI within 8 months", "5-6 weeks setup", "Smart meters integration"],
      website: "https://ziontechgroup.com/ai-autonomous-energy-management",
      featured: true
    },

    // Quantum Computing Services
    {
      id: "quantum-cryptography-platform",
      title: "Quantum Cryptography & Post-Quantum Security Platform",
      description: "Next-generation cryptographic platform that leverages quantum computing principles to provide unbreakable encryption, secure key distribution, and future-proof security for sensitive data and communications.",
      category: "Quantum Computing",
      price: "$8,999",
      rating: 4.9,
      reviews: 45,
      features: ["Quantum Cryptography", "Post-Quantum Security", "Unbreakable Encryption", "Key Distribution", "Future-Proof Security"],
      benefits: ["600% ROI within 12 months", "8-10 weeks setup", "VPN/SSL integration"],
      website: "https://ziontechgroup.com/quantum-cryptography",
      featured: true
    },
    {
      id: "quantum-machine-learning-platform",
      title: "Quantum Machine Learning & AI Optimization Platform",
      description: "Revolutionary platform that combines quantum computing with machine learning to solve complex optimization problems, accelerate AI training, and unlock new computational capabilities.",
      category: "Quantum Computing",
      price: "$12,999",
      rating: 4.9,
      reviews: 34,
      features: ["Quantum ML", "AI Optimization", "Complex Problems", "Computational Power", "Future Technology"],
      benefits: ["700% ROI within 15 months", "10-12 weeks setup", "Quantum computers integration"],
      website: "https://ziontechgroup.com/quantum-machine-learning",
      featured: true
    },
    {
      id: "quantum-optimization-suite",
      title: "Quantum Optimization Suite & Problem-Solving Platform",
      description: "Advanced optimization platform that uses quantum computing to solve complex mathematical problems, optimize algorithms, and accelerate computational tasks.",
      category: "Quantum Computing",
      price: "$7,999",
      rating: 4.9,
      reviews: 34,
      features: ["Quantum Computing", "Optimization", "Problem Solving", "Algorithm Acceleration", "Mathematical Computing"],
      benefits: ["600% ROI within 10 months", "7-8 weeks setup", "Scientific computing integration"],
      website: "https://ziontechgroup.com/quantum-optimization-suite",
      featured: true
    },

    // Blockchain Services
    {
      id: "blockchain-supply-chain-tracking",
      title: "Blockchain Supply Chain Tracking & Transparency Platform",
      description: "Transparent supply chain management platform that uses blockchain technology to track products from source to consumer, ensuring authenticity, compliance, and ethical sourcing.",
      category: "Blockchain",
      price: "$3,999",
      rating: 4.7,
      reviews: 67,
      features: ["Blockchain", "Supply Chain", "Transparency", "Product Tracking", "Compliance"],
      benefits: ["400% ROI within 7 months", "5-6 weeks setup", "ERP/WMS integration"],
      website: "https://ziontechgroup.com/blockchain-supply-chain",
      featured: true
    },
    {
      id: "blockchain-decentralized-finance",
      title: "Blockchain Decentralized Finance & DeFi Platform",
      description: "Comprehensive DeFi platform that enables secure lending, borrowing, trading, and yield farming through smart contracts and blockchain technology.",
      category: "Blockchain",
      price: "$4,999",
      rating: 4.7,
      reviews: 67,
      features: ["Blockchain", "DeFi", "Smart Contracts", "Lending", "Trading"],
      benefits: ["500% ROI within 8 months", "6-7 weeks setup", "Ethereum/Polygon integration"],
      website: "https://ziontechgroup.com/blockchain-defi",
      featured: true
    },
    {
      id: "blockchain-identity-management",
      title: "Blockchain Identity Management & Digital Identity Platform",
      description: "Secure digital identity platform that uses blockchain technology to provide self-sovereign identity, secure authentication, and privacy-preserving identity verification.",
      category: "Blockchain",
      price: "$2,999",
      rating: 4.7,
      reviews: 67,
      features: ["Blockchain", "Digital Identity", "Self-Sovereign Identity", "Authentication", "Privacy"],
      benefits: ["400% ROI within 6 months", "3-4 weeks setup", "SSO/KYC integration"],
      website: "https://ziontechgroup.com/blockchain-identity-management",
      featured: true
    },

    // Edge Computing Services
    {
      id: "edge-computing-iot-platform",
      title: "Edge Computing IoT Platform & Real-time Analytics",
      description: "Advanced IoT platform that processes data at the edge, reducing latency, improving performance, and enabling real-time analytics for industrial and commercial applications.",
      category: "Edge Computing",
      price: "$4,499",
      rating: 4.7,
      reviews: 78,
      features: ["Edge Computing", "IoT", "Real-time Analytics", "Low Latency", "Industrial IoT"],
      benefits: ["450% ROI within 8 months", "6-7 weeks setup", "IoT devices integration"],
      website: "https://ziontechgroup.com/edge-computing-iot",
      featured: true
    },
    {
      id: "edge-computing-autonomous-vehicles",
      title: "Edge Computing Autonomous Vehicles & Smart Transportation",
      description: "Advanced autonomous vehicle platform that uses edge computing for real-time decision making, sensor fusion, and vehicle-to-vehicle communication.",
      category: "Edge Computing",
      price: "$8,999",
      rating: 4.8,
      reviews: 45,
      features: ["Edge Computing", "Autonomous Vehicles", "Real-time Processing", "Sensor Fusion", "V2V Communication"],
      benefits: ["600% ROI within 12 months", "8-9 weeks setup", "Vehicle systems integration"],
      website: "https://ziontechgroup.com/edge-computing-autonomous-vehicles",
      featured: true
    },
    {
      id: "edge-computing-smart-cities",
      title: "Edge Computing Smart Cities & Urban Infrastructure Platform",
      description: "Comprehensive smart city platform that uses edge computing to manage urban infrastructure, optimize traffic flow, monitor environmental conditions, and improve city services.",
      category: "Edge Computing",
      price: "$6,999",
      rating: 4.7,
      reviews: 56,
      features: ["Edge Computing", "Smart Cities", "Urban Infrastructure", "Traffic Optimization", "Environmental Monitoring"],
      benefits: ["500% ROI within 10 months", "6-7 weeks setup", "IoT sensors integration"],
      website: "https://ziontechgroup.com/edge-computing-smart-cities",
      featured: true
    },

    // Metaverse Services
    {
      id: "metaverse-virtual-events-platform",
      title: "Metaverse Virtual Events & Collaboration Platform",
      description: "Immersive virtual events platform that creates engaging 3D environments for conferences, meetings, training, and social interactions in the metaverse.",
      category: "Metaverse",
      price: "$5,999",
      rating: 4.6,
      reviews: 56,
      features: ["Metaverse", "Virtual Events", "3D Environments", "Collaboration", "Immersive Experience"],
      benefits: ["500% ROI within 10 months", "7-8 weeks setup", "VR headsets integration"],
      website: "https://ziontechgroup.com/metaverse-virtual-events",
      featured: true
    },
    {
      id: "metaverse-virtual-real-estate",
      title: "Metaverse Virtual Real Estate & Digital Asset Platform",
      description: "Comprehensive platform for buying, selling, and developing virtual real estate in the metaverse, including 3D modeling, virtual tours, and digital asset management.",
      category: "Metaverse",
      price: "$4,499",
      rating: 4.6,
      reviews: 56,
      features: ["Metaverse", "Virtual Real Estate", "3D Modeling", "Digital Assets", "Virtual Tours"],
      benefits: ["450% ROI within 8 months", "5-6 weeks setup", "3D modeling tools integration"],
      website: "https://ziontechgroup.com/metaverse-virtual-real-estate",
      featured: true
    },
    {
      id: "metaverse-virtual-commerce",
      title: "Metaverse Virtual Commerce & Digital Shopping Platform",
      description: "Immersive e-commerce platform that creates virtual shopping experiences, 3D product visualization, and interactive retail environments in the metaverse.",
      category: "Metaverse",
      price: "$3,499",
      rating: 4.6,
      reviews: 45,
      features: ["Metaverse", "Virtual Commerce", "3D Shopping", "Product Visualization", "Interactive Retail"],
      benefits: ["400% ROI within 7 months", "4-5 weeks setup", "E-commerce platforms integration"],
      website: "https://ziontechgroup.com/metaverse-virtual-commerce",
      featured: true
    },

    // Additional AI Services
    {
      id: "ai-autonomous-logistics",
      title: "AI Autonomous Logistics & Route Optimization Platform",
      description: "Intelligent logistics platform that uses AI to optimize delivery routes, predict demand, manage fleets, and reduce transportation costs for logistics companies.",
      category: "AI & Automation",
      price: "$3,499",
      rating: 4.8,
      reviews: 78,
      features: ["AI Logistics", "Route Optimization", "Fleet Management", "Demand Prediction", "Cost Reduction"],
      benefits: ["400% ROI within 6 months", "3-4 weeks setup", "GPS systems integration"],
      website: "https://ziontechgroup.com/ai-autonomous-logistics",
      featured: true
    },
    {
      id: "ai-autonomous-healthcare-monitoring",
      title: "AI Autonomous Healthcare Monitoring & Patient Care Platform",
      description: "Intelligent healthcare platform that uses AI to monitor patient health, predict health risks, provide early warnings, and enable proactive healthcare management.",
      category: "AI & Healthcare",
      price: "$3,999",
      rating: 4.8,
      reviews: 89,
      features: ["AI Healthcare", "Patient Monitoring", "Health Prediction", "Early Warning", "Proactive Care"],
      benefits: ["450% ROI within 8 months", "4-5 weeks setup", "EHR systems integration"],
      website: "https://ziontechgroup.com/ai-autonomous-healthcare-monitoring",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-5 h-5 text-violet-400" />
              <span className="text-violet-400 font-medium">2026 Ultimate Services Showcase</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Micro SAAS
              <span className="text-gradient"> Solutions</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Discover 40+ cutting-edge micro SAAS services powered by AI, quantum computing, blockchain, 
              and emerging technologies. Transform your business with Zion Tech Group's innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-900/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-800 border border-zion-slate-700 rounded-xl text-white placeholder-zion-slate-400 focus:outline-none focus:border-violet-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-violet-500 text-white'
                      : 'bg-zion-slate-800 text-zion-slate-300 hover:bg-zion-slate-700'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate-800 border border-zion-slate-700 rounded-xl text-white focus:outline-none focus:border-violet-500 appearance-none pr-10"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-zion-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 ${
                  service.featured ? 'border-violet-500/30 shadow-violet-500/10' : 'border-zion-slate-700'
                }`}
              >
                {service.featured && (
                  <div className="inline-flex items-center space-x-2 bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm line-clamp-3">{service.description}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-violet-400">{service.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-zion-slate-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-zion-slate-700 text-zion-slate-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-violet-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded-xl text-center font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="w-full bg-zion-slate-700 hover:bg-zion-slate-600 text-white py-2 px-4 rounded-xl font-medium transition-colors duration-300">
                    Contact Sales
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Choose from our comprehensive portfolio of innovative micro SAAS solutions. 
              Each service is designed to deliver measurable ROI and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <span className="text-zion-slate-light">+1 302 464 0950</span>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                  <span className="text-zion-slate-light text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-4">Visit Our Website</h4>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors duration-300"
              >
                <span>https://ziontechgroup.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}