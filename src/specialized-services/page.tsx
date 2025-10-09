'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle, Atom, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology', 'Competitive advantage'],
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Intelligent Automation'],
      benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence'],
      category: 'Autonomous'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Lock,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance'],
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Globe,
      price: '$1,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable connectivity'],
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics', 'Competitive intelligence'],
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
      benefits: ['Increased productivity', 'Consistent quality', '24/7 operation', 'Cost reduction'],
      category: 'Robotics'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      icon: Building,
      price: 'Custom Pricing',
      features: ['Enterprise Architecture', 'Legacy Modernization', 'Digital Transformation', 'Change Management', 'Training & Support', 'ROI Optimization'],
      benefits: ['Scalable solutions', 'Future-proof architecture', 'Digital transformation', 'Competitive advantage'],
      category: 'Enterprise'
    },
    {
      title: 'Analytics Tools',
      description: 'Advanced analytics and business intelligence tools for data-driven decisions',
      icon: BarChart3,
      price: '$1,800/month',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'API Integration'],
      benefits: ['Better insights', 'Faster decisions', 'Data-driven culture', 'Competitive intelligence'],
      category: 'Analytics'
    },
    {
      title: 'Business Apps',
      description: 'Custom business applications tailored to specific industry needs',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Custom Development', 'Industry Solutions', 'Integration APIs', 'Mobile Apps', 'Web Applications', 'Maintenance & Support'],
      benefits: ['Tailored solutions', 'Industry expertise', 'Seamless integration', 'Ongoing support'],
      category: 'Applications'
    },
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management and financial tracking for businesses',
      icon: Calculator,
      price: '$299/month',
      features: ['Expense Tracking', 'Receipt OCR', 'Budget Management', 'Approval Workflows', 'Reporting & Analytics', 'Integration APIs'],
      benefits: ['Automated tracking', 'Cost control', 'Compliance', 'Financial insights'],
      category: 'Finance'
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced project and task management with AI-powered optimization',
      icon: CheckCircle,
      price: '$199/month',
      features: ['Task Management', 'Project Planning', 'Team Collaboration', 'Time Tracking', 'Resource Allocation', 'Progress Analytics'],
      benefits: ['Better organization', 'Team efficiency', 'Project success', 'Resource optimization'],
      category: 'Productivity'
    },
    {
      title: 'Smart Analytics',
      description: 'Intelligent analytics platform with AI-powered insights and recommendations',
      icon: TrendingUp,
      price: '$1,600/month',
      features: ['AI Insights', 'Predictive Analytics', 'Anomaly Detection', 'Custom Dashboards', 'Real-time Alerts', 'Data Integration'],
      benefits: ['Intelligent insights', 'Proactive alerts', 'Better decisions', 'Competitive advantage'],
      category: 'Analytics'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Specialized Solutions - Zion Tech Group"
        description="Cutting-edge specialized solutions including quantum computing, autonomous systems, blockchain, IoT, and enterprise-grade applications."
        keywords={['specialized solutions', 'quantum computing', 'autonomous systems', 'blockchain', 'IoT', 'enterprise solutions', 'business intelligence']}
        canonicalUrl="https://ziontechgroup.com/specialized-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch">
              Specialized Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Cutting-edge technologies for next-generation business solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our advanced specialized solutions including quantum computing, 
              autonomous systems, blockchain technology, and enterprise-grade applications.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-pink-400 font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4 neon-text">{service.price}</div>
                    <a 
                      href="/contact" 
                      className="cyber-button px-6 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our specialized solutions team to discuss how we can help you implement 
              cutting-edge technology solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SpecializedServicesPage;