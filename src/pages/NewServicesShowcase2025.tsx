import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Bot, TrendingUp, Target, MessageCircle, BarChart3, 
  DollarSign, Users, Check, ArrowRight, ExternalLink, Phone, Mail,
  Calendar, Shield, Filter, Headphones, Calculator, PieChart,
  ArrowRight, ExternalLink, Phone, Mail, Globe, TrendingUp, Shield, Leaf, Cpu, Atom, Wifi, CheckCircle, Star
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      name: 'AI Supply Chain Risk Management',
      description: 'Protect your business from supply chain disruptions with AI-driven risk assessment, real-time monitoring, and predictive analytics.',
      features: ['AI-powered risk assessment', 'Real-time disruption alerts', 'Predictive analytics', 'Multi-tier supplier analysis'],
      pricing: 'Starting at $299/mo',
      benefits: ['60-80% reduction in disruptions', '90% faster risk assessment', '30-60 days early warning'],
      color: 'from-orange-600 via-red-600 to-red-800',
      icon: Shield,
      path: '/services/ai-supply-chain-risk-management'
    },
    {
      name: 'AI ESG Compliance Platform',
      description: 'Streamline your ESG compliance with AI-driven data collection, automated reporting, and real-time sustainability monitoring.',
      features: ['AI-powered data collection', 'Automated compliance reporting', 'Real-time sustainability tracking', 'Carbon footprint optimization'],
      pricing: 'Starting at $399/mo',
      benefits: ['85% faster reporting time', '90% improved compliance accuracy', '70% reduced tracking costs'],
      color: 'from-green-600 via-emerald-600 to-teal-800',
      icon: Leaf,
      path: '/services/ai-esg-compliance-platform'
    },
    {
      name: 'AI Digital Twin Platform',
      description: 'Create intelligent digital replicas of your physical assets with AI-driven monitoring, predictive analytics, and real-time optimization.',
      features: ['AI-powered digital twin creation', 'Real-time IoT integration', 'Predictive maintenance', '3D visualization support'],
      pricing: 'Starting at $599/mo',
      benefits: ['25-40% reduction in operational costs', '30-50% improvement in uptime', '20-35% cut in maintenance costs'],
      color: 'from-blue-600 via-indigo-600 to-purple-800',
      icon: Cpu,
      path: '/services/ai-digital-twin-platform'
    },
    {
      name: 'AI Quantum Computing Platform',
      description: 'Harness the power of quantum computing with AI-driven optimization, hybrid quantum-classical solutions, and breakthrough computational capabilities.',
      features: ['AI-powered quantum optimization', 'Hybrid quantum-classical computing', 'Quantum machine learning', 'Real-time circuit simulation'],
      pricing: 'Starting at $1,299/mo',
      benefits: ['1000x faster problem solving', '60-80% reduction in computational costs', 'Breakthrough scientific discoveries'],
      color: 'from-purple-600 via-indigo-600 to-blue-800',
      icon: Atom,
      path: '/services/ai-quantum-computing-platform'
    },
    {
      name: 'AI Edge Computing Platform',
      description: 'Bring AI processing to the edge with intelligent device management, real-time data processing, and distributed computing capabilities.',
      features: ['AI-powered edge management', 'Real-time data processing', 'Distributed AI deployment', 'Edge-to-cloud synchronization'],
      pricing: 'Starting at $499/mo',
      benefits: ['80-90% reduction in latency', '60-70% cut in bandwidth costs', 'Enhanced data privacy and security'],
      color: 'from-teal-600 via-cyan-600 to-blue-800',
      icon: Wifi,
      path: '/services/ai-edge-computing-platform'
    }
  ];

  const industries = [
    'Manufacturing & Industry 4.0',
    'Smart Cities & Infrastructure',
    'Healthcare & Medical Devices',
    'Financial Services & Banking',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Retail & E-commerce',
    'Cybersecurity & Defense'
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="New AI-Powered Micro SAAS Services 2025 - Zion Tech Group"
        description="Discover our revolutionary new AI-powered micro SAAS services for project management, customer support, financial analytics, and marketing automation."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 text-center text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Star className="w-4 h-4 mr-2" /> 2025 Innovative Services Showcase
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">New AI-Powered Services 2025</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our latest cutting-edge AI services designed to transform your business operations, 
            enhance efficiency, and drive innovation across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Explore Services
            </a>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary AI Services</h2>
          <p className="text-xl text-gray-600">Transform your business with our latest AI-powered solutions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {newServices.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                </div>
                <p className="text-lg opacity-90">{service.description}</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Proven Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                    <a 
                      href={service.path}
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Our AI services are designed for organizations across all sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-600">Leading the future of AI-powered business solutions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
            <p className="text-gray-600">Cutting-edge AI technology and innovative solutions that keep you ahead of the competition.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Grade</h3>
            <p className="text-gray-600">Robust, scalable solutions designed for enterprise environments with enterprise-level support.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of delivering measurable business value and ROI for our clients.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already using our AI-powered services to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Phone className="w-8 h-8 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our AI experts</p>
            <a href={`tel:${contactInfo.phone}`} className="text-purple-600 hover:text-purple-700 font-semibold">
              {contactInfo.phone}
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href={`mailto:${contactInfo.email}`} className="text-purple-600 hover:text-purple-700 font-semibold">
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Website</h3>
          <p className="text-gray-600 mb-6">
            Learn more about our complete suite of AI-powered business solutions and discover how we can help transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={contactInfo.website} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
            >
              Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{contactInfo.address}</span>
          </div>
        </div>
      </section>
    </div>
  );
}