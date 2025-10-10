'use client';
import React from 'react';
import { Cpu, Settings, Lock, Globe, BarChart, Building, CheckCircle, ArrowRight, Zap, Brain, Shield, Target, Users, DollarSign, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum algorithms and computing infrastructure for complex problem solving',
      icon: Cpu,
      price: 'Custom Pricing',
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Quantum Error Correction'
      ],
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      category: 'Quantum Technology'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing intelligent systems that operate independently with minimal human intervention',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'Autonomous Decision Making',
        'Self-Healing Infrastructure',
        'Predictive Maintenance',
        'Adaptive Learning',
        'Real-time Optimization',
        'Exception Handling'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved reliability',
        '24/7 autonomous operation',
        'Scalable intelligence'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      category: 'Autonomous Technology'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications, smart contracts, and Web3 infrastructure development',
      icon: Lock,
      price: 'Custom Pricing',
      features: [
        'Smart Contract Development',
        'DApp Creation',
        'DeFi Solutions',
        'NFT Marketplaces',
        'Token Economics',
        'Web3 Integration'
      ],
      benefits: [
        'Decentralized security',
        'Transparent operations',
        'Reduced intermediaries',
        'Global accessibility'
      ],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30',
      category: 'Blockchain Technology'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for real-time data processing',
      icon: Globe,
      price: 'Custom Pricing',
      features: [
        'IoT Device Development',
        'Edge Computing Infrastructure',
        'Real-time Data Processing',
        'Sensor Integration',
        'Edge AI Implementation',
        'IoT Security'
      ],
      benefits: [
        'Real-time insights',
        'Reduced latency',
        'Improved efficiency',
        'Cost optimization'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      category: 'IoT Technology'
    },
    {
      title: 'Business Intelligence Solutions',
      description: 'Advanced analytics and business intelligence platforms for data-driven decision making',
      icon: BarChart,
      price: 'Custom Pricing',
      features: [
        'Advanced Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Real-time Dashboards',
        'Custom Reporting',
        'Data Integration'
      ],
      benefits: [
        'Data-driven insights',
        'Improved decision making',
        'Competitive advantage',
        'Operational efficiency'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      category: 'Business Intelligence'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotics and automation systems for industrial and commercial applications',
      icon: Building,
      price: 'Custom Pricing',
      features: [
        'Industrial Robotics',
        'Service Robotics',
        'Autonomous Navigation',
        'Human-Robot Interaction',
        'Robotic Process Automation',
        'AI-Powered Control'
      ],
      benefits: [
        'Increased productivity',
        'Reduced human error',
        '24/7 operation',
        'Cost efficiency'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      category: 'Robotics Technology'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols and compliance standards'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team and account management'
    },
    {
      icon: Zap,
      title: 'Custom Integration',
      description: 'Seamless integration with existing enterprise systems'
    },
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Specialized <span className="text-cyan-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge specialized technologies and solutions for enterprise clients who demand the absolute best in innovation and performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Custom Development
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Enterprise Support
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Advanced Security
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Scalable Solutions
              </span>
            </div>
          </div>
        </section>

        {/* Specialized Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Specialized Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technologies and solutions designed for enterprise clients who need cutting-edge innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} ${service.borderColor} border rounded-xl p-6 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <div>
                      <h3 className={`text-xl font-bold ${service.color}`}>
                        {service.title}
                      </h3>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <Star className="w-3 h-3 mr-2 text-yellow-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className={`text-2xl font-bold ${service.color}`}>
                      {service.price}
                    </span>
                    <button className={`${service.color} hover:text-white transition-colors flex items-center`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All our specialized solutions come with enterprise-grade features and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our specialized solutions team to discuss your unique requirements and get a custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-3 text-lg">
                Get Custom Quote
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 text-lg rounded-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecializedServicesPage;