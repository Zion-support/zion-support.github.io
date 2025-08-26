import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Zap, 
  Users, 
  Code,
  Lock,
  Server,
  Network,
  Smartphone,
  BarChart3,
  Cpu,
  Rocket,
  Target
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Target },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Server },
    { id: 'digital', name: 'Digital Transformation', icon: Rocket },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'mobile', name: 'Mobile & Web', icon: Smartphone }
  ];

  const services = [
    {
      id: 'ai-autonomous-systems',
      title: 'AI Autonomous Systems',
      description: 'Advanced AI systems that operate independently to solve complex business problems.',
      category: 'ai',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/services/ai-autonomous-systems'
    },
    {
      id: 'cybersecurity-suite',
      title: 'Comprehensive Cybersecurity',
      description: 'End-to-end security solutions protecting your digital assets and infrastructure.',
      category: 'cybersecurity',
      icon: Shield,
      features: ['Threat Detection', 'Zero Trust Architecture', 'Incident Response', 'Security Audits'],
      link: '/services/cybersecurity'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description: 'Scalable cloud infrastructure and streamlined development operations.',
      category: 'cloud',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
      link: '/services/cloud-devops'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Robust and scalable IT infrastructure solutions for modern businesses.',
      category: 'infrastructure',
      icon: Server,
      features: ['Network Design', 'Data Centers', 'Virtualization', 'Backup & Recovery'],
      link: '/services/infrastructure'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business processes with cutting-edge digital solutions.',
      category: 'digital',
      icon: Rocket,
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
      link: '/services/digital-transformation'
    },
    {
      id: 'ai-business-solutions',
      title: 'AI Business Solutions',
      description: 'AI-powered tools and solutions designed to enhance business operations.',
      category: 'ai',
      icon: Cpu,
      features: ['Business Intelligence', 'Process Optimization', 'Customer Analytics', 'Risk Management'],
      link: '/services/ai-business-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Services',
      description: 'Next-generation quantum computing solutions for complex computational challenges.',
      category: 'ai',
      icon: Zap,
      features: ['Quantum Algorithms', 'Quantum Machine Learning', 'Optimization Problems', 'Research & Development'],
      link: '/services/quantum-computing'
    },
    {
      id: 'mobile-web-development',
      title: 'Mobile & Web Development',
      description: 'Custom mobile applications and web solutions for modern businesses.',
      category: 'mobile',
      icon: Smartphone,
      features: ['React Native', 'Progressive Web Apps', 'Responsive Design', 'Performance Optimization'],
      link: '/services/mobile-web-development'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights for strategic decision-making.',
      category: 'ai',
      icon: BarChart3,
      features: ['Data Warehousing', 'Real-time Analytics', 'Dashboard Creation', 'Predictive Modeling'],
      link: '/services/data-analytics'
    },
    {
      id: 'blockchain-solutions',
      title: 'Blockchain & Web3',
      description: 'Innovative blockchain solutions for secure and transparent business operations.',
      category: 'digital',
      icon: Lock,
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Tracking'],
      link: '/services/blockchain'
    },
    {
      id: 'edge-computing',
      title: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for real-time data processing.',
      category: 'infrastructure',
      icon: Network,
      features: ['IoT Integration', 'Real-time Processing', 'Low Latency', 'Distributed Networks'],
      link: '/services/edge-computing'
    },
    {
      id: 'api-development',
      title: 'API Development & Integration',
      description: 'Robust API solutions for seamless system integration and data exchange.',
      category: 'mobile',
      icon: Code,
      features: ['RESTful APIs', 'GraphQL', 'API Gateway', 'Third-party Integration'],
      link: '/services/api-development'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Comprehensive technology solutions to transform your business
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From AI-powered automation to robust cybersecurity, we provide cutting-edge solutions 
            that drive innovation and growth across all industries.
          </p>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-12 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                    : 'border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
