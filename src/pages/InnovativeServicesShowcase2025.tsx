import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Car, 
  Building2, 
  Heart, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Globe, 
  Lock, 
  TrendingUp,
  BarChart3,
  Settings,
  Database,
  Network,
  Smartphone,
  Leaf,
  Target,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Atom,
  Cpu,
  Eye,
  FileText,
  MessageSquare,
  ShoppingCart,
  PenTool,
  Gauge,
  Wifi,
  Activity,
  Microscope,
  Pill,
  TrafficCone,
  Lightbulb
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'autonomous', name: 'Autonomous Systems', icon: Car, color: 'from-green-500 to-emerald-500' },
    { id: 'smart-city', name: 'Smart City', icon: Building2, color: 'from-orange-500 to-red-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-pink-500 to-purple-500' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud, color: 'from-indigo-500 to-purple-500' }
  ];

  const services = [
    {
      id: 'ai-autonomous-vehicle',
      name: 'AI Autonomous Vehicle Platform',
      description: 'Revolutionary AI-powered autonomous vehicle platform for fleet management, safety, and optimization.',
      category: 'autonomous',
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Advanced Computer Vision & Object Detection',
        'Real-time Sensor Fusion & Processing',
        'Predictive Analytics & Route Optimization',
        'Safety Systems & Collision Avoidance',
        'Fleet Management & Monitoring'
      ],
      benefits: [
        'Reduce operational costs by 30-40%',
        'Improve safety and reduce accidents by 80%',
        'Optimize routes and reduce fuel consumption',
        'Enable 24/7 autonomous operations'
      ],
      pricing: {
        starter: { price: 2999, period: 'month', description: 'For small fleets (5-20 vehicles)' },
        professional: { price: 7999, period: 'month', description: 'For medium fleets (21-100 vehicles)' },
        enterprise: { price: 19999, period: 'month', description: 'For large fleets (100+ vehicles)' }
      },
      href: '/services/ai-autonomous-vehicle-platform',
      featured: true
    },
    {
      id: 'ai-smart-city',
      name: 'AI Smart City Platform',
      description: 'Transform your city into a smart, sustainable, and efficient urban environment with AI-powered optimization.',
      category: 'smart-city',
      icon: Building2,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Intelligent Traffic Management & Optimization',
        'Smart Energy Grid Management & Distribution',
        'Environmental Monitoring & Air Quality Control',
        'Public Safety & Emergency Response Systems',
        'Smart Parking & Mobility Solutions'
      ],
      benefits: [
        'Reduce traffic congestion by 25-35%',
        'Lower energy consumption by 20-30%',
        'Improve public safety response times by 40%',
        'Reduce operational costs by 30-45%'
      ],
      pricing: {
        starter: { price: 4999, period: 'month', description: 'For small cities (50K-200K population)' },
        professional: { price: 14999, period: 'month', description: 'For medium cities (200K-1M population)' },
        enterprise: { price: 49999, period: 'month', description: 'For large cities (1M+ population)' }
      },
      href: '/services/ai-smart-city-platform',
      featured: true
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics Platform',
      description: 'Revolutionary AI-powered healthcare analytics platform for predictive diagnostics and clinical decision support.',
      category: 'healthcare',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      features: [
        'Predictive Disease Risk Assessment',
        'Real-time Patient Monitoring & Alerts',
        'Medical Image Analysis & Diagnosis',
        'Drug Interaction & Safety Analysis',
        'Population Health Analytics & Trends'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30-40%',
        'Reduce medical errors by 50-60%',
        'Lower healthcare costs by 25-35%',
        'Enhance patient outcomes and satisfaction'
      ],
      pricing: {
        starter: { price: 3999, period: 'month', description: 'For small clinics (10-50 providers)' },
        professional: { price: 9999, period: 'month', description: 'For medium hospitals (50-200 providers)' },
        enterprise: { price: 29999, period: 'month', description: 'For large health systems (200+ providers)' }
      },
      href: '/services/ai-healthcare-analytics-platform',
      featured: true
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence and analytics platform for data-driven decision making.',
      category: 'ai',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      features: [
        'Predictive Analytics & Forecasting',
        'Natural Language Processing',
        'Real-time Data Processing',
        'Advanced Visualization & Reporting',
        'Machine Learning Model Management'
      ],
      benefits: [
        'Improve decision making by 40-50%',
        'Reduce data processing time by 60-70%',
        'Increase operational efficiency by 25-35%',
        'Enable predictive insights and trends'
      ],
      pricing: {
        starter: { price: 1999, period: 'month', description: 'For small businesses (10-50 users)' },
        professional: { price: 5999, period: 'month', description: 'For medium businesses (50-200 users)' },
        enterprise: { price: 15999, period: 'month', description: 'For large enterprises (200+ users)' }
      },
      href: '/services/ai-business-intelligence',
      featured: false
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
      category: 'ai',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Quantum Algorithm Development',
        'Hybrid Quantum-Classical Computing',
        'Optimization Problem Solving',
        'Cryptography & Security',
        'Quantum Machine Learning'
      ],
      benefits: [
        'Solve complex problems exponentially faster',
        'Enable new computational capabilities',
        'Advance scientific research and discovery',
        'Transform industries with quantum advantage'
      ],
      pricing: {
        starter: { price: 9999, period: 'month', description: 'For research institutions' },
        professional: { price: 24999, period: 'month', description: 'For medium enterprises' },
        enterprise: { price: 59999, period: 'month', description: 'For large corporations' }
      },
      href: '/services/quantum-computing',
      featured: false
    },
    {
      id: 'iot-edge-computing',
      name: 'IoT Edge Computing Platform',
      description: 'Advanced IoT and edge computing platform for real-time data processing and intelligent automation.',
      category: 'infrastructure',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Real-time Data Processing',
        'Edge AI & Machine Learning',
        'IoT Device Management',
        'Predictive Maintenance',
        'Scalable Edge Infrastructure'
      ],
      benefits: [
        'Reduce latency by 80-90%',
        'Lower bandwidth costs by 40-50%',
        'Enable real-time decision making',
        'Improve system reliability and uptime'
      ],
      pricing: {
        starter: { price: 1499, period: 'month', description: 'For small deployments (100-500 devices)' },
        professional: { price: 3999, period: 'month', description: 'For medium deployments (500-2000 devices)' },
        enterprise: { price: 9999, period: 'month', description: 'For large deployments (2000+ devices)' }
      },
      href: '/services/iot-edge-computing',
      featured: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge AI-powered services and solutions. From autonomous vehicles to smart cities, healthcare analytics to quantum computing - discover the future of technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovation 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI-powered services and solutions. 
              From autonomous vehicles to smart cities, healthcare analytics to quantum computing - 
              experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border-2 ${
                  service.featured ? 'border-purple-500' : 'border-slate-600'
                } relative`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Pricing</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">${service.pricing.starter.price}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.starter.period}</div>
                      <div className="text-xs text-gray-500 mt-1">{service.pricing.starter.description}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">${service.pricing.professional.price}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.professional.period}</div>
                      <div className="text-xs text-gray-500 mt-1">{service.pricing.professional.description}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">${service.pricing.enterprise.price}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.enterprise.period}</div>
                      <div className="text-xs text-gray-500 mt-1">{service.pricing.enterprise.description}</div>
                    </div>
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="inline w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
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
              Choose from our comprehensive portfolio of innovative AI-powered services. 
              Contact us today to discuss your specific needs and get started on your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}