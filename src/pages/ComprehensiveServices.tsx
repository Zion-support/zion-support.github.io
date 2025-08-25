<<<<<<< HEAD
import { useState } from 'react';
import { Search, Star, Users, Zap, Brain, Shield, Settings, Phone, Mail, MapPin } from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Service data directly in the component
  const services = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "AI & Analytics",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms",
      price: 2500,
      pricingModel: "monthly",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"]
    },
    {
      id: 2,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      description: "Seamless migration to cloud platforms with optimization for performance and cost",
      price: 15000,
      pricingModel: "project-based",
      features: ["AWS/Azure/GCP migration", "Performance optimization", "Cost optimization", "Security implementation"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance"],
      tags: ["Cloud", "Migration", "AWS", "Azure", "GCP"]
    },
    {
      id: 3,
      name: "Cybersecurity & Compliance",
      category: "Security",
      description: "Comprehensive cybersecurity solutions and compliance management",
      price: 3500,
      pricingModel: "monthly",
      features: ["Threat detection", "Vulnerability assessment", "Compliance monitoring", "Incident response"],
      benefits: ["Protection against threats", "Regulatory compliance", "Risk mitigation", "Business continuity"],
      tags: ["Cybersecurity", "Compliance", "Security", "Risk Management"]
    },
    {
      id: 4,
      name: "Digital Transformation Consulting",
      category: "Consulting",
      description: "Strategic guidance for digital transformation initiatives",
      price: 200,
      pricingModel: "hourly",
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management"],
      benefits: ["Improved efficiency", "Cost savings", "Competitive advantage", "Future readiness"],
      tags: ["Digital Transformation", "Consulting", "Strategy", "Process Optimization"]
    },
    {
      id: 5,
      name: "Custom Software Development",
      category: "Development",
      description: "Tailored software solutions built to your specific business requirements",
      price: 85000,
      pricingModel: "project-based",
      features: ["Custom applications", "Web development", "Mobile apps", "API development"],
      benefits: ["Tailored solutions", "Competitive advantage", "Scalability", "Integration"],
      tags: ["Software Development", "Custom Apps", "Web Development", "Mobile Apps"]
    },
    {
      id: 6,
      name: "Data Management & Governance",
      category: "Data Services",
      description: "Comprehensive data management, governance, and quality solutions",
      price: 1800,
      pricingModel: "monthly",
      features: ["Data governance", "Quality management", "Master data management", "Data cataloging"],
      benefits: ["Data quality", "Compliance", "Efficiency", "Trust"],
      tags: ["Data Management", "Governance", "Quality", "Compliance"]
    }
  ];

  const categories = ['all', 'AI & Analytics', 'Cloud Services', 'Security', 'Consulting', 'Development', 'Data Services'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Comprehensive Services & Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our extensive portfolio of AI-powered services, cloud solutions, cybersecurity, 
            and digital transformation services designed to accelerate your business growth.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <span className="text-2xl font-bold text-blue-400">
                    {formatPrice(service.price, service.pricingModel)}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
=======
<<<<<<< HEAD
=======
import { useState } from 'react';
import { Search, Star, Users, Zap, Brain, Shield, Settings, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

import { motion } from 'framer-motion';
import ComprehensiveServicesShowcase from '../components/ComprehensiveServicesShowcase';
import { 
  Brain, 
  Code, 
  Zap, 
  Shield,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Users
} from 'lucide-react';

const ComprehensiveServices = () => {
  const stats = [
    { icon: Brain, number: "50+", label: "AI Solutions", color: "text-cyan-400" },
    { icon: Code, number: "100+", label: "IT Services", color: "text-purple-400" },
    { icon: Zap, number: "75+", label: "Micro SAAS", color: "text-green-400" },
    { icon: Shield, number: "25+", label: "Security Tools", color: "text-orange-400" }
  ];

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Advanced IT Infrastructure",
      description: "Comprehensive technology solutions that ensure reliability, security, and scalability for your business.",
      features: ["Cloud Migration", "DevOps Automation", "Network Security", "Data Management"]
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Micro SAAS Excellence",
      description: "Scalable software solutions designed for modern businesses, from startups to enterprises.",
      features: ["Business Automation", "Customer Management", "Financial Tools", "Team Collaboration"]
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: "Quantum-Ready Security",
      description: "Future-proof cybersecurity solutions that protect against current and emerging threats.",
      features: ["Threat Detection", "Encryption", "Compliance", "Incident Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">
                Tech Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our complete portfolio of cutting-edge technology solutions designed to 
              transform your business and accelerate your digital transformation journey.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-16">
        <ComprehensiveServicesShowcase />
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
              <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
};

<<<<<<< HEAD
export default ComprehensiveServices;
=======
export default ComprehensiveServices;
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
