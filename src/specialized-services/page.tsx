'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Atom, Cpu, Lock, Globe, BarChart, Settings, ArrowRight, CheckCircle, TrendingUp, Shield, Zap, Brain } from 'lucide-react';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations for enterprise applications',
      icon: Atom,
      price: 'Custom Pricing',
      features: [
        'Quantum Algorithm Development',
        'Quantum Security Implementation',
        'Optimization Problems Solving',
        'Research & Development',
        'Quantum Machine Learning',
        'Cryptography Solutions'
      ],
      benefits: [
        'Exponential computational speedup',
        'Unbreakable quantum security',
        'Future-proof technology',
        'Competitive advantage'
      ],
      color: 'text-yellow-400',
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations with intelligent automation',
      icon: Cpu,
      price: 'Custom Pricing',
      features: [
        'Self-Healing Systems',
        'Predictive Maintenance',
        'Resource Optimization',
        'Performance Monitoring',
        'Adaptive Learning',
        'Intelligent Automation'
      ],
      benefits: [
        'Zero-downtime operations',
        'Predictive maintenance',
        'Cost optimization',
        'Scalable intelligence'
      ],
      color: 'text-green-400',
      category: 'Autonomous'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications for modern businesses',
      icon: Lock,
      price: '$2,999/month',
      features: [
        'Smart Contract Development',
        'DApp Creation',
        'Token Economics Design',
        'DeFi Solutions',
        'NFT Platforms',
        'DAO Implementation'
      ],
      benefits: [
        'Decentralized security',
        'Transparent operations',
        'Tokenization capabilities',
        'Community governance'
      ],
      color: 'text-purple-400',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for real-time data processing',
      icon: Globe,
      price: '$1,999/month',
      features: [
        'Device Management',
        'Edge Analytics',
        'Real-time Processing',
        'Security Implementation',
        'Data Collection',
        'Remote Monitoring'
      ],
      benefits: [
        'Real-time insights',
        'Reduced latency',
        'Cost efficiency',
        'Scalable connectivity'
      ],
      color: 'text-cyan-400',
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for strategic decision-making',
      icon: BarChart,
      price: '$2,299/month',
      features: [
        'Data Warehousing',
        'ETL Processes',
        'Advanced Analytics',
        'Executive Dashboards',
        'Predictive Modeling',
        'Real-time Reporting'
      ],
      benefits: [
        'Data-driven decisions',
        'Predictive insights',
        'Real-time analytics',
        'Competitive intelligence'
      ],
      color: 'text-blue-400',
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'Robotic Process Automation',
        'Computer Vision Integration',
        'Human-Robot Collaboration',
        'Maintenance Systems',
        'Quality Control',
        'Assembly Automation'
      ],
      benefits: [
        'Increased productivity',
        'Consistent quality',
        '24/7 operation',
        'Cost reduction'
      ],
      color: 'text-orange-400',
      category: 'Robotics'
    }
  ];

  const caseStudies = [
    {
      title: 'Quantum Security Implementation',
      company: 'Fortune 500 Financial Services',
      challenge: 'Need for unbreakable encryption for sensitive financial data',
      solution: 'Implemented quantum key distribution and quantum-resistant algorithms',
      results: '100% security guarantee, zero breaches, 40% cost reduction'
    },
    {
      title: 'Autonomous Manufacturing System',
      company: 'Global Manufacturing Corp',
      challenge: 'Manual processes causing delays and quality issues',
      solution: 'Deployed self-optimizing robotic systems with AI monitoring',
      results: '60% productivity increase, 90% quality improvement, 50% cost savings'
    },
    {
      title: 'Blockchain Supply Chain',
      company: 'International Logistics',
      challenge: 'Lack of transparency and traceability in supply chain',
      solution: 'Built comprehensive blockchain-based tracking system',
      results: 'Complete transparency, 80% faster dispute resolution, 30% efficiency gain'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Specialized Solutions - Zion Tech Group"
        description="Cutting-edge specialized solutions including quantum computing, autonomous systems, blockchain, IoT, and robotics for next-generation business transformation."
        keywords={['quantum computing', 'autonomous systems', 'blockchain', 'IoT', 'robotics', 'business intelligence', 'specialized solutions']}
        canonicalUrl="https://ziontechgroup.com/specialized-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Specialized Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Cutting-edge technologies for next-generation business solutions
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
                Transform your business with our advanced specialized solutions including quantum computing, 
                autonomous systems, blockchain technology, IoT, and robotics. Stay ahead of the competition 
                with future-ready technology.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {specializedServices.map((service, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-4 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900 inline-flex items-center`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results:</h4>
                    <p className="text-sm text-gray-300">{study.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Quantum Computing', icon: Atom, color: 'text-yellow-400' },
                { name: 'Machine Learning', icon: Brain, color: 'text-purple-400' },
                { name: 'Blockchain', icon: Lock, color: 'text-cyan-400' },
                { name: 'IoT & Edge', icon: Globe, color: 'text-green-400' },
                { name: 'Robotics', icon: Settings, color: 'text-orange-400' },
                { name: 'Analytics', icon: BarChart, color: 'text-blue-400' },
                { name: 'Security', icon: Shield, color: 'text-red-400' },
                { name: 'Automation', icon: Zap, color: 'text-pink-400' }
              ].map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <tech.icon className={`w-8 h-8 mx-auto mb-3 ${tech.color}`} />
                  <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our specialized solutions can revolutionize your operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <span>Call (302) 464-0950</span>
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