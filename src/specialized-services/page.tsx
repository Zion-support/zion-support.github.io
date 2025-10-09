'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, TrendingUp, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SpecializedServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations for complex problem solving',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology', 'Competitive advantage'],
      color: 'text-yellow-400',
      category: 'Quantum',
      link: '/quantum-computing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Intelligent Automation'],
      benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence'],
      color: 'text-green-400',
      category: 'Autonomous',
      link: '/autonomous-systems'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Lock,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance'],
      color: 'text-purple-400',
      category: 'Blockchain',
      link: '/blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for real-time processing',
      icon: Globe,
      price: '$1,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable connectivity'],
      color: 'text-cyan-400',
      category: 'IoT',
      link: '/iot-edge'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics', 'Competitive intelligence'],
      color: 'text-blue-400',
      category: 'Analytics',
      link: '/business-intelligence'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
      benefits: ['Increased productivity', 'Consistent quality', '24/7 operation', 'Cost reduction'],
      color: 'text-orange-400',
      category: 'Robotics',
      link: '/robotics'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      icon: Building,
      price: 'Custom Pricing',
      features: ['Enterprise Architecture', 'Legacy Modernization', 'Digital Transformation', 'Change Management', 'Training & Support', 'ROI Optimization'],
      benefits: ['Scalable solutions', 'Future-proof architecture', 'Digital transformation', 'Competitive advantage'],
      color: 'text-indigo-400',
      category: 'Enterprise',
      link: '/enterprise'
    },
    {
      title: 'Analytics Tools',
      description: 'Advanced analytics and business intelligence tools for data-driven decisions',
      icon: BarChart3,
      price: '$1,800/month',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'API Integration'],
      benefits: ['Better insights', 'Faster decisions', 'Data-driven culture', 'Competitive intelligence'],
      color: 'text-emerald-400',
      category: 'Analytics',
      link: '/analytics-tools'
    },
    {
      title: 'Business Apps',
      description: 'Custom business applications tailored to specific industry needs',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Custom Development', 'Industry Solutions', 'Integration APIs', 'Mobile Apps', 'Web Applications', 'Maintenance & Support'],
      benefits: ['Tailored solutions', 'Industry expertise', 'Seamless integration', 'Ongoing support'],
      color: 'text-violet-400',
      category: 'Applications',
      link: '/business-apps'
    },
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management and financial tracking for businesses',
      icon: Calculator,
      price: '$299/month',
      features: ['Expense Tracking', 'Receipt OCR', 'Budget Management', 'Approval Workflows', 'Reporting & Analytics', 'Integration APIs'],
      benefits: ['Automated tracking', 'Cost control', 'Compliance', 'Financial insights'],
      color: 'text-rose-400',
      category: 'Finance',
      link: '/expense-tracker'
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced project and task management with AI-powered optimization',
      icon: CheckCircle,
      price: '$199/month',
      features: ['Task Management', 'Project Planning', 'Team Collaboration', 'Time Tracking', 'Resource Allocation', 'Progress Analytics'],
      benefits: ['Better organization', 'Team efficiency', 'Project success', 'Resource optimization'],
      color: 'text-lime-400',
      category: 'Productivity',
      link: '/task-manager-pro'
    },
    {
      title: 'Smart Analytics',
      description: 'Intelligent analytics platform with AI-powered insights and recommendations',
      icon: TrendingUp,
      price: '$1,600/month',
      features: ['AI Insights', 'Predictive Analytics', 'Anomaly Detection', 'Custom Dashboards', 'Real-time Alerts', 'Data Integration'],
      benefits: ['Intelligent insights', 'Proactive alerts', 'Better decisions', 'Competitive advantage'],
      color: 'text-amber-400',
      category: 'Analytics',
      link: '/smart-analytics'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Specialized Solutions - Zion Tech Group"
        description="Advanced specialized solutions including quantum computing, autonomous systems, blockchain, IoT, robotics, and enterprise solutions. Transform your business with cutting-edge technology."
        keywords={['quantum computing', 'autonomous systems', 'blockchain', 'IoT', 'robotics', 'enterprise solutions', 'business intelligence', 'analytics']}
        canonicalUrl="https://ziontechgroup.com/specialized-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch">
              Specialized Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Cutting-edge technologies for next-generation business solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our advanced specialized solutions designed to transform your business with 
              quantum computing, autonomous systems, blockchain technology, and more.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3 text-center">Key Features:</h4>
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
                    <h4 className="text-pink-400 font-semibold mb-3 text-center">Benefits:</h4>
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
                    <div className={`text-2xl font-bold mb-4 neon-text ${service.color}`}>
                      {service.price}
                    </div>
                    <a 
                      href={service.link}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mb-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our specialized solutions are designed to give you a competitive edge in today's 
                rapidly evolving technological landscape. Let's discuss how we can help your business 
                achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SpecializedServicesPage;