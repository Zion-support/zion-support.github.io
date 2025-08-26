import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Network,
  Smartphone,
  CreditCard,
  Clock,
  Award,
  BarChart3,
  FileText,
  Server,
  Database,
  Key,
  Search,
  Monitor,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Bot,
  Sparkles,
  X,
  Cloud
} from 'lucide-react';

export default function CybersecurityServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cybersecurityServices = [
    {
      id: 1,
      title: "Advanced Threat Detection & Response",
      description: "AI-powered security monitoring with real-time threat detection and automated incident response.",
      category: "threat-detection",
      features: [
        "24/7 security monitoring",
        "AI-powered threat analysis",
        "Automated incident response",
        "Real-time alerts and notifications",
        "Threat intelligence integration"
      ],
      pricing: "Starting at $2,500/month",
      icon: Eye,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Zero Trust Security Architecture",
      description: "Implement comprehensive identity verification and access management across all systems.",
      category: "zero-trust",
      features: [
        "Multi-factor authentication",
        "Identity verification",
        "Access control policies",
        "Continuous monitoring",
        "Privileged access management"
      ],
      pricing: "Starting at $3,200/month",
      icon: Lock,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Cloud Security & Compliance",
      description: "Secure cloud infrastructure with compliance monitoring and data protection.",
      category: "cloud-security",
      features: [
        "Cloud security assessment",
        "Compliance monitoring",
        "Data encryption",
        "Security policy enforcement",
        "Regular security audits"
      ],
      pricing: "Starting at $2,800/month",
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Network Security & Firewall Management",
      description: "Comprehensive network protection with advanced firewall and intrusion prevention.",
      category: "network-security",
      features: [
        "Next-generation firewalls",
        "Intrusion prevention",
        "Network segmentation",
        "Traffic analysis",
        "Security policy management"
      ],
      pricing: "Starting at $1,800/month",
      icon: Network,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Endpoint Security & Device Management",
      description: "Protect all devices with advanced endpoint detection and response capabilities.",
      category: "endpoint-security",
      features: [
        "Endpoint detection and response",
        "Device management",
        "Malware protection",
        "Data loss prevention",
        "Remote device control"
      ],
      pricing: "Starting at $1,500/month",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Security Operations Center (SOC)",
      description: "Dedicated security team providing 24/7 monitoring and incident response.",
      category: "soc",
      features: [
        "24/7 security monitoring",
        "Dedicated security analysts",
        "Incident response team",
        "Threat hunting",
        "Security reporting"
      ],
      pricing: "Starting at $15,000/month",
      icon: Monitor,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: cybersecurityServices.length },
    { id: 'threat-detection', name: 'Threat Detection', count: cybersecurityServices.filter(s => s.category === 'threat-detection').length },
    { id: 'zero-trust', name: 'Zero Trust', count: cybersecurityServices.filter(s => s.category === 'zero-trust').length },
    { id: 'cloud-security', name: 'Cloud Security', count: cybersecurityServices.filter(s => s.category === 'cloud-security').length },
    { id: 'network-security', name: 'Network Security', count: cybersecurityServices.filter(s => s.category === 'network-security').length },
    { id: 'endpoint-security', name: 'Endpoint Security', count: cybersecurityServices.filter(s => s.category === 'endpoint-security').length },
    { id: 'soc', name: 'Security Operations', count: cybersecurityServices.filter(s => s.category === 'soc').length }
  ];

  const filteredServices = cybersecurityServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const securityMetrics = [
    { label: "Threats Blocked", value: "2.4M+", icon: Shield, color: "text-red-500" },
    { label: "Security Incidents", value: "0", icon: CheckCircle, color: "text-green-500" },
    { label: "Response Time", value: "< 5 min", icon: Clock, color: "text-blue-500" },
    { label: "Client Satisfaction", value: "99.8%", icon: Star, color: "text-yellow-500" }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "NIST Cybersecurity Framework",
    "GDPR Compliance",
    "HIPAA Compliance",
    "PCI DSS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-blue-500 p-4 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Cybersecurity</span> Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity services. Our expert team provides comprehensive security solutions to safeguard your digital assets.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search cybersecurity services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-red-400/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-red-500 text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {securityMetrics.map((metric, index) => (
              <div key={metric.label} className="text-center">
                <div className={`${metric.color} mb-2 flex justify-center`}>
                  <metric.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-zion-slate-light text-sm">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Cybersecurity Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden hover:border-red-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-center`}>
                  <service.icon className="w-12 h-12 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold">{service.pricing}</div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-red-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-red-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Industry Compliance & Standards
            </h2>
            <p className="text-zion-slate-light mb-8">
              Our cybersecurity solutions meet the highest industry standards and compliance requirements.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {complianceStandards.map((standard, index) => (
                <div key={standard} className="bg-zinc-700/50 rounded-lg p-4 border border-zinc-600/50">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-white font-medium">{standard}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Zion Tech Group for Cybersecurity?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified cybersecurity professionals with years of experience in protecting enterprise systems.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">24/7 Monitoring</h3>
              <p className="text-zion-slate-light">
                Round-the-clock security monitoring and rapid response to any security threats.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Proactive Defense</h3>
              <p className="text-zion-slate-light">
                Advanced threat intelligence and proactive security measures to prevent attacks before they happen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get in touch with our cybersecurity experts to discuss your security needs and get a personalized solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Security Assessment
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-colors">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-zinc-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-zion-slate-light mb-6">{selectedService.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Features:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                <p className="text-zion-cyan font-semibold text-lg">{selectedService.pricing}</p>
              </div>
              
              <div className="flex gap-4">
                <Link to="/contact" className="flex-1 bg-gradient-to-r from-red-500 to-blue-500 text-white py-3 px-6 rounded-lg text-center hover:from-red-600 hover:to-blue-600 transition-all duration-300">
                  Get Quote
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 border border-zinc-600 text-zion-slate-light py-3 px-6 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
