<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
=======
import React, { useState, useEffect } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Search,
  Filter,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
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
  TrendingUp,
  Scale,
  Gauge,
  Heart,
  Home
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const featuredServices = [
    {
      title: "AI Carbon Footprint Management Platform",
      description: "Revolutionary AI-powered sustainability platform for businesses. Track, analyze, and reduce carbon emissions with 95% accuracy while achieving regulatory compliance and cost savings.",
      price: "From $299/month",
      features: ["AI-Powered Carbon Tracking", "Sustainability Reporting", "Carbon Reduction Recommendations", "Supply Chain Monitoring"],
      href: "/services/ai-carbon-footprint-management-platform",
      color: "from-green-400 to-emerald-500",
      popular: true,
      icon: Leaf,
      benefits: ["30% average energy savings", "100% regulatory compliance", "25-40% cost reduction", "Enhanced brand reputation"]
    },
    {
      title: "AI Mental Health Support Platform",
      description: "Transform mental health support with our revolutionary AI platform. Get 24/7 emotional support, personalized therapy, and crisis intervention when you need it most.",
      price: "From $49/month",
      features: ["24/7 AI Mental Health Support", "Personalized Therapy Sessions", "Mood & Wellness Tracking", "Professional Integration"],
      href: "/services/ai-mental-health-support-platform",
      color: "from-blue-400 to-purple-500",
      popular: false,
      icon: Heart,
      benefits: ["24/7 availability", "100% privacy & security", "80% cost effective", "95% evidence-based"]
    },
    {
      title: "AI Smart Home Energy Management Platform",
      description: "Transform your home into an intelligent, energy-efficient ecosystem. Our AI platform optimizes energy consumption, reduces costs by up to 30%, and gives you complete control.",
      price: "From $19/month",
      features: ["AI Energy Optimization", "Smart Device Integration", "Real-time Monitoring", "Predictive Analytics"],
      href: "/services/ai-smart-home-energy-management-platform",
      color: "from-green-400 to-blue-500",
      popular: false,
      icon: Home,
      benefits: ["30% energy savings", "$200+ monthly savings", "25% environmental impact", "24/7 convenience"]
=======
  CheckCircle,
  ArrowRight
import { SEO              } from '../components/SEO';
import { revolutionaryMicroSaasServices2026,
  revolutionaryITInfrastructureServices2026,
  revolutionaryAIServices2026,
  ALL_REVOLUTIONARY_SERVICES_2026
             } from '../data/comprehensiveServices2026';
const ComprehensiveServicesShowcase2026: React.FC = (): JSX.Element => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const categories = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.innovationLevel)))];
  const filtered = ALL_REVOLUTIONARY_SERVICES_2026;
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);

    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);

    return filtered;
  }, [searchTerm, selectedCategory, selectedInnovationLevel]);
  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (category) {;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Neural Networks': return <Brain className="w-5 h-5" />;
      case 'Blockchain Development': return <Shield className="w-5 h-5" />;
      case 'Quantum Computing Infrastructure': return <Cpu className="w-5 h-5" />;
      case 'Edge Computing': return <Network className="w-5 h-5" />;
      case 'Autonomous Systems': return <Brain className="w-5 h-5" />;
      case 'Quantum AI': return <Zap className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;

  };
  const getInnovationLevelColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (level) {;
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Breakthrough': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    }
  ];

  const allServices = [
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Advanced analytics and insights for data-driven decision making",
          price: "From $199/month",
          href: "/services/ai-business-intelligence-dashboard"
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer service with 24/7 availability",
          price: "From $299/month",
          href: "/services/ai-customer-support-automation"
        },
        {
          name: "AI Project Management Platform",
          description: "Smart project planning and execution with AI insights",
          price: "From $399/month",
          href: "/services/ai-project-management-platform"
        }
      ]
    },
    {
      category: "Cybersecurity & Compliance",
      services: [
        {
          name: "AI Cybersecurity Platform",
          description: "Advanced threat detection and prevention",
          price: "From $599/month",
          href: "/services/ai-cybersecurity-platform"
        },
        {
          name: "AI Compliance Assistant",
          description: "Automated compliance monitoring and reporting",
          price: "From $199/month",
          href: "/services/ai-compliance-assistant"
        },
        {
          name: "Zero Trust Network Architecture",
          description: "Modern security framework implementation",
          price: "From $799/month",
          href: "/services/ZeroTrustNetworkArchitecture"
        }
      ]
    },
    {
      category: "Financial & Trading",
      services: [
        {
          name: "AI Financial Trading Platform",
          description: "Intelligent trading with predictive analytics",
          price: "From $1,999/month",
          href: "/services/ai-financial-trading-platform"
        },
        {
          name: "AI Financial Risk Management",
          description: "Comprehensive risk assessment and mitigation",
          price: "From $899/month",
          href: "/services/ai-financial-risk-management"
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "Cloud cost optimization and management",
          price: "From $299/month",
          href: "/services/cloud-finops-optimizer"
        }
      ]
    },
    {
      category: "Healthcare & Life Sciences",
      services: [
        {
          name: "AI Healthcare Analytics Platform",
          description: "Advanced healthcare data analysis and insights",
          price: "From $799/month",
          href: "/services/ai-healthcare-analytics-platform"
        },
        {
          name: "AI Healthcare Diagnostics",
          description: "Intelligent diagnostic assistance and analysis",
          price: "From $1,299/month",
          href: "/services/ai-healthcare-diagnostics-platform"
        },
        {
          name: "AI Healthcare Predictive Analytics",
          description: "Predictive healthcare insights and prevention",
          price: "From $599/month",
          href: "/services/ai-healthcare-predictive-analytics"
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and current technology landscape",
      icon: Search
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a customized solution architecture",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build and thoroughly test your solution",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Comprehensive Services Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of innovative AI, IT, and micro SAAS services for 2026. From carbon footprint management to mental health support, we have solutions for every business need." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, carbon management, mental health, smart home, cybersecurity, healthcare analytics, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2026" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                <Rocket className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our revolutionary suite of AI-powered services, IT solutions, and innovative micro SAAS platforms. 
              Transform your business with cutting-edge technology and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services 2026
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative and impactful services designed to transform 
              businesses across industries.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-lg border-2 ${
                  service.popular 
                    ? 'border-green-400 bg-slate-800 scale-105' 
                    : 'border-slate-600 bg-slate-700'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex justify-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-full`}>
                    <service.icon className="h-8 w-8 text-white" />
=======
              Revolutionary Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                2026
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
<<<<<<< HEAD

=======
            >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              Experience the future with Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services.
              Quantum computing, edge AI, autonomous agents, and blockchain solutions that redefine what's possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400"

              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {ALL_REVOLUTIONARY_SERVICES_2026.length} Revolutionary Services
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Up to 1000x Performance Improvement
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Market Leading Innovation
              </span>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"

                  {categories.map(category              => (
                    <option key={category} value={category} className="bg-zinc-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                {/* Innovation Level Filter */}
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"

                  {innovationLevels.map(level              => (
                    <option key={level} value={level} className="bg-zinc-800 text-white">
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index)              => (
                <motion.div
                  key={service.id}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  animate = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
<<<<<<< HEAD

                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-sm text-zinc-400">{service.category}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-zinc-300 mb-4 line-clamp-3">{service.description}</p>
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-white">
                        ${'price' in service ? service.price.toLocaleString() : service.hourlyRate}
                      </span>
                      <span className="text-zinc-400">
                        /{'pricingModel' in service ? service.pricingModel : 'hour'}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">{'marketPrice' in service ? service.marketPrice : `$${service.projectRate?.toLocaleString()}/project`}</p>
                  </div>
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-zinc-400">Market Size:</span>
                        <p className="text-white font-medium">{'marketSize' in service ? service.marketSize : 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-zinc-400">Growth Rate:</span>
                        <p className="text-white font-medium">{'growthRate' in service ? service.growthRate : 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                  {/* Target Audience */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Contact Information */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Mail className="w-4 h-4 text-green-400" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span className="line-clamp-1">{service.contactInfo.address}</span>
                      </div>
                    </div>
                    {/* CTA Button */}
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"

                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                >
                  <category.icon className="h-5 w-5" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {category.count}
                  </span>
                </motion.button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              ))}
            </div>
<<<<<<< HEAD
          </div>

          {/* Search and Filter */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange = {
  (e) => setPriceRange([priceRange[0],
  parseInt(e.target.value)])

}
                className="w-full"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index)              => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 

}}
                animate = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {React.createElement(getCategoryIcon(service.category), {
                      className: "h-8 w-8 text-blue-400"
                    })}
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    <div className="text-sm text-gray-400">{service.pricingModel}</div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="block w-full py-3 px-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services across all major 
              technology domains and business needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="p-6 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-400 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="text-green-400 font-semibold mb-4">{service.price}</div>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful delivery 
              and maximum value for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already experiencing the benefits 
              of our innovative services. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to explore our comprehensive service portfolio? Our team of experts 
                is here to help you find the perfect solution for your business needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-lg border border-slate-600"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Request Information
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <select className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-blue-400">
                  <option value="">Select Service Category</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity & Compliance</option>
                  <option value="financial">Financial & Trading</option>
                  <option value="healthcare">Healthcare & Life Sciences</option>
                  <option value="sustainability">Sustainability & Energy</option>
                  <option value="smart-home">Smart Home & IoT</option>
                </select>
                <textarea
                  placeholder="Tell us about your business needs and goals"
                  rows={4}
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
