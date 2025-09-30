import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  BarChart3, 
  Shield, 
  Code, 
  Target, 
  Zap, 
  Database, 
  Smartphone, 
  Globe, 
  Lock, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';

export default function Services(): React.JSX.Element {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Revolutionary AI solutions that transform your business operations with intelligent automation and predictive insights.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      features: [
        'Custom ML Models & Algorithms',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'AI-Powered Chatbots & Virtual Assistants',
        'Deep Learning & Neural Networks'
      ],
      benefits: ['40% faster decision making', '60% cost reduction', '95% accuracy improvement']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Multi-Cloud Strategy & Migration',
        'Container Orchestration (Kubernetes)',
        'Serverless Architecture',
        'DevOps & CI/CD Automation',
        'Cloud Security & Compliance',
        'Cost Optimization & Monitoring'
      ],
      benefits: ['99.9% uptime guarantee', '50% infrastructure cost savings', '3x faster deployment']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights that drive strategic business decisions.',
      icon: BarChart3,
      color: 'from-green-500 to-teal-600',
      features: [
        'Real-time Data Processing',
        'Advanced Business Intelligence',
        'Data Warehousing & Lakes',
        'Interactive Dashboards',
        'Machine Learning Analytics',
        'Data Governance & Quality'
      ],
      benefits: ['Real-time insights', 'Data-driven decisions', 'Competitive advantage']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions that protect your digital assets and ensure compliance.',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Identity & Access Management',
        'Data Encryption & Privacy',
        'Compliance & Risk Management',
        'Security Training & Awareness'
      ],
      benefits: ['Zero security breaches', '100% compliance', '24/7 monitoring']
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions that perfectly fit your business requirements and processes.',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      features: [
        'Web Applications (React, Next.js)',
        'Mobile Apps (iOS & Android)',
        'API Development & Integration',
        'Microservices Architecture',
        'Legacy System Modernization',
        'Quality Assurance & Testing'
      ],
      benefits: ['Custom-fit solutions', 'Scalable architecture', 'Modern technology stack']
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation services to modernize your business operations.',
      icon: Target,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Digital Strategy & Roadmapping',
        'Process Automation & Optimization',
        'Change Management & Training',
        'Technology Integration',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      benefits: ['Streamlined operations', 'Improved efficiency', 'Future-ready business']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connect and optimize your physical assets with cutting-edge IoT and edge computing solutions.',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'IoT Device Integration',
        'Edge Computing Solutions',
        'Real-time Data Processing',
        'Predictive Maintenance',
        'Smart Infrastructure',
        '5G & Connectivity'
      ],
      benefits: ['Real-time monitoring', 'Predictive maintenance', 'Operational efficiency']
    },
    {
      title: 'Blockchain & Web3',
      description: 'Secure, transparent, and decentralized solutions using blockchain technology.',
      icon: Lock,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Smart Contract Development',
        'DeFi & DApp Solutions',
        'NFT & Digital Assets',
        'Blockchain Integration',
        'Cryptocurrency Solutions',
        'Web3 Consulting'
      ],
      benefits: ['Enhanced security', 'Transparent transactions', 'Future-proof technology']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT solutions including cloud infrastructure, data analytics, cybersecurity, and custom software development." />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI & IT solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Comprehensive Technology Solutions
              <Star className="w-4 h-4 ml-2 animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Our <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent animate-gradient bg-300%">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Cutting-edge technology solutions designed to accelerate your business growth, 
              enhance security, and drive digital transformation across all industries.
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === index
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
{React.createElement(service.icon, { className: "w-5 h-5 inline mr-2" })}
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-16 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${services[activeService].color} mb-6`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {services[activeService].title}
                </h2>
                
                <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {services[activeService].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-zion-cyan">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue-light text-zion-blue-dark font-bold rounded-full hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
                <div className="grid gap-4">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color} mr-4`}></div>
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer ${
                  activeService === index ? 'ring-2 ring-zion-cyan' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-zion-cyan text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue-light/20 rounded-3xl p-12 border border-zion-cyan/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Let's discuss how our cutting-edge solutions can drive your digital transformation and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue-light text-zion-blue-dark font-bold rounded-full hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-full hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}