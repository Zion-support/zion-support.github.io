import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Rocket,
  Cpu,
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Search,
  Filter,
  Target,
  Palette,
  Truck,
  Play,

  Factory,
  Store,
  Stethoscope,
  Eye,
  Activity,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'fintech', name: 'FinTech', icon: DollarSign }
  ];

  const allServices = [
    // New Featured Services 2025
    {
      name: 'AI Enterprise Resource Optimizer',
      description: 'Transform your enterprise efficiency with AI-powered resource optimization. Maximize productivity, minimize costs, and achieve unprecedented operational excellence.',
      category: 'ai-analytics',
      icon: Brain,
      href: '/services/ai-enterprise-resource-optimizer',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'AI-Powered Resource Allocation',
        'Real-Time Analytics Dashboard',
        'Automated Optimization',
        'Team Productivity Enhancement',
        'Multi-Cloud Resource Management'
      ],
      pricing: 'From $299/month',
      featured: true,
      benefits: [
        'Up to 40% cost reduction',
        '30% productivity improvement',
        'Real-time optimization',
        'Predictive analytics',
        'Multi-cloud support'
      ],
      useCases: ['Manufacturing', 'Healthcare', 'Retail', 'Technology']
    },
    {
      name: 'AI Sustainability Analytics Platform',
      description: 'Transform your business sustainability with AI-powered analytics. Measure, optimize, and lead the way in environmental responsibility.',
      category: 'sustainability',
      icon: Leaf,
      href: '/services/ai-sustainability-analytics-platform',
      color: 'from-green-600 to-emerald-600',
      features: [
        'AI-Powered Environmental Impact Analysis',
        'Real-Time Sustainability Monitoring',
        'Comprehensive ESG Analytics',
        'Automated Sustainability Optimization',
        'Global Compliance & Standards'
      ],
      pricing: 'From $199/month',
      featured: true,
      benefits: [
        'Carbon footprint reduction',
        'ESG compliance automation',
        'Cost savings through optimization',
        'Stakeholder transparency',
        'Regulatory compliance'
      ],
      useCases: ['Manufacturing', 'Retail', 'Technology', 'Healthcare']
    },
    {
      name: 'AI Digital Twin Platform',
      description: 'Create intelligent digital replicas of your physical assets with AI-powered monitoring, predictive analytics, and real-time optimization.',
      category: 'emerging-tech',
      icon: Cube,
      href: '/services/ai-digital-twin-platform',
      color: 'from-purple-600 to-indigo-600',
      features: [
        'AI-Powered Digital Twin Creation',
        'Real-Time Monitoring & Visualization',
        'Predictive Analytics & Maintenance',
        'Multi-Asset Management',
        'Cloud-Native Architecture'
      ],
      pricing: 'From $399/month',
      featured: true,
      benefits: [
        'Predictive maintenance',
        'Performance optimization',
        'Cost reduction',
        'Risk assessment',
        'Real-time monitoring'
      ],
      useCases: ['Manufacturing', 'Smart Cities', 'Healthcare', 'Energy & Utilities']
    },
    // Existing Services
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      category: 'ai-analytics',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time monitoring'],
      pricing: 'Custom pricing',
      featured: false,
      benefits: ['Workflow optimization', 'Process automation', 'Enterprise integration', 'Real-time monitoring'],
      useCases: ['Enterprise', 'Manufacturing', 'Technology', 'Healthcare']
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'AI-powered threat detection and response for comprehensive security',
      category: 'cybersecurity',
      icon: Shield,
      href: '/services/ai-cybersecurity-platform',
      color: 'from-red-600 to-orange-600',
      features: ['AI-Powered Threat Detection', 'Zero-Trust Architecture', '24/7 Security Monitoring', 'End-to-End Encryption'],
      pricing: 'From $149/month',
      featured: false,
      benefits: ['Threat prevention', 'Compliance automation', 'Real-time response', 'Cost reduction'],
      useCases: ['Enterprise', 'Healthcare', 'Finance', 'Technology']
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Predictive diagnostics and care optimization powered by AI',
      category: 'healthcare',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      color: 'from-red-600 to-pink-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization', 'Patient monitoring'],
      pricing: 'From $2,000/month',
      featured: false,
      benefits: ['Improved diagnostics', 'Better patient outcomes', 'Cost optimization', 'Efficiency gains'],
      useCases: ['Hospitals', 'Clinics', 'Research', 'Pharmaceuticals']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const featuredServices = allServices.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI-powered services. 
              Transform your business with intelligent solutions designed for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Services 2025
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative and transformative services that are reshaping industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-bl-lg">
                  Featured
                </div>
                
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-cyan-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-cyan-400">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.pricing}</div>
                  <p className="text-gray-400 text-sm">Starting price</p>
                </div>

                <Link
                  to={service.href}
                  className="w-full text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Filter by category to find the perfect solution for your business needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-cyan-900/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{service.pricing}</div>
                </div>

                <Link
                  to={service.href}
                  className="w-full text-center py-2 px-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who are already leveraging our innovative services to gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
