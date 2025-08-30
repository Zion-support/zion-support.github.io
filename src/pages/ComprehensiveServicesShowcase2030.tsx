import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Car,
  Satellite,
  Atom,
  Dna,
  Eye,
  Cube,
  VirtualReality,
  Quantum,
  Edge,
  Green,
  ZeroTrust,
  Hybrid,
  HPC,
  Blockchain,
  Search
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2030() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          id: 'ai-quantum-financial-trading-platform',
          name: 'AI Quantum Financial Trading Platform',
          description: 'Next-generation AI-powered quantum computing platform for high-frequency trading, risk management, and portfolio optimization.',
          price: '$25,000/month',
          marketPrice: '$25,000 - $100,000/month',
          features: ['Quantum computing-powered trading algorithms', 'Real-time market sentiment analysis', 'AI-driven risk assessment'],
          benefits: ['Increase trading performance by 300-500%', 'Reduce risk exposure by 80%', 'Execute trades in microseconds'],
          href: '/services/ai-quantum-financial-trading-platform',
          rating: 4.9,
          reviewCount: 89,
          roi: '1000% within 12 months',
          competitors: ['Palantir', 'Two Sigma', 'Jane Street', 'Citadel']
        },
        {
          id: 'ai-healthcare-diagnostics-platform',
          name: 'AI Healthcare Diagnostics Platform',
          description: 'Advanced AI-powered medical diagnostics platform that analyzes medical images, lab results, and patient data.',
          price: '$15,000/month',
          marketPrice: '$15,000 - $50,000/month',
          features: ['AI-powered medical image analysis', 'Lab result interpretation', 'Treatment recommendation engine'],
          benefits: ['Improve diagnostic accuracy by 95%', 'Reduce diagnosis time by 80%', 'Lower healthcare costs by 40%'],
          href: '/services/ai-healthcare-diagnostics-platform',
          rating: 4.9,
          reviewCount: 156,
          roi: '400% within 18 months',
          competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare']
        },
        {
          id: 'ai-autonomous-vehicle-systems',
          name: 'AI Autonomous Vehicle Systems',
          description: 'Advanced AI-powered autonomous vehicle systems for cars, trucks, drones, and robots with real-time decision making.',
          price: '$45,000/month',
          marketPrice: '$45,000 - $150,000/month',
          features: ['Real-time perception and recognition', 'Advanced path planning algorithms', 'Predictive safety systems'],
          benefits: ['Reduce accidents by 95%', 'Improve fuel efficiency by 30%', 'Enable 24/7 autonomous operation'],
          href: '/services/ai-autonomous-vehicle-systems',
          rating: 4.9,
          reviewCount: 78,
          roi: '700% within 24 months',
          competitors: ['Tesla', 'Waymo', 'Cruise', 'Aurora']
        },
        {
          id: 'ai-space-technology-platform',
          name: 'AI Space Technology Platform',
          description: 'Revolutionary AI platform for space exploration, satellite operations, space debris tracking, and extraterrestrial research.',
          price: '$60,000/month',
          marketPrice: '$60,000 - $200,000/month',
          features: ['Satellite orbit optimization', 'Space debris tracking and avoidance', 'Autonomous spacecraft navigation'],
          benefits: ['Optimize satellite operations by 80%', 'Reduce space debris collisions by 95%', 'Enable autonomous space missions'],
          href: '/services/ai-space-technology-platform',
          rating: 4.9,
          reviewCount: 45,
          roi: '1000% within 36 months',
          competitors: ['SpaceX', 'Blue Origin', 'Virgin Galactic', 'Maxar Technologies']
        }
      ]
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: Server,
      description: 'Advanced IT infrastructure and computing solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          id: 'quantum-computing-infrastructure-as-a-service',
          name: 'Quantum Computing Infrastructure as a Service',
          description: 'Enterprise-grade quantum computing infrastructure providing access to quantum processors, quantum memory, and quantum networking.',
          price: '$50,000/month',
          marketPrice: '$50,000 - $200,000/month',
          features: ['Access to quantum processors (50-1000+ qubits)', 'Quantum memory and storage systems', 'Quantum algorithm development tools'],
          benefits: ['Solve complex problems 1000x faster', 'Enable breakthrough discoveries', 'Future-proof your computational infrastructure'],
          href: '/services/quantum-computing-infrastructure-as-a-service',
          rating: 4.9,
          reviewCount: 67,
          roi: '800% within 24 months',
          competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum']
        },
        {
          id: 'edge-computing-infrastructure-platform',
          name: 'Edge Computing Infrastructure Platform',
          description: 'Comprehensive edge computing infrastructure that brings computation closer to data sources for real-time processing.',
          price: '$18,000/month',
          marketPrice: '$18,000 - $60,000/month',
          features: ['Distributed edge nodes worldwide', 'Real-time data processing', 'Low-latency application deployment'],
          benefits: ['Reduce latency by 90%', 'Lower bandwidth costs by 70%', 'Enable offline processing'],
          href: '/services/edge-computing-infrastructure-platform',
          rating: 4.8,
          reviewCount: 134,
          roi: '450% within 15 months',
          competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT Edge']
        },
        {
          id: 'green-it-infrastructure-solutions',
          name: 'Green IT Infrastructure Solutions',
          description: 'Sustainable and energy-efficient IT infrastructure solutions that reduce carbon footprint while maintaining high performance.',
          price: '$22,000/month',
          marketPrice: '$22,000 - $75,000/month',
          features: ['Energy-efficient server hardware', 'Renewable energy integration', 'Smart cooling and power management'],
          benefits: ['Reduce energy costs by 40%', 'Lower carbon footprint by 60%', 'Achieve sustainability goals'],
          href: '/services/green-it-infrastructure-solutions',
          rating: 4.8,
          reviewCount: 89,
          roi: '350% within 18 months',
          competitors: ['Google Cloud', 'Microsoft Azure', 'AWS', 'IBM Cloud']
        },
        {
          id: 'zero-trust-network-architecture',
          name: 'Zero Trust Network Architecture',
          description: 'Advanced zero trust security architecture that eliminates implicit trust and continuously validates every user, device, and transaction.',
          price: '$25,000/month',
          marketPrice: '$25,000 - $80,000/month',
          features: ['Identity and access management', 'Device trust verification', 'Network segmentation'],
          benefits: ['Reduce security breaches by 95%', 'Improve compliance by 100%', 'Lower security costs by 40%'],
          href: '/services/zero-trust-network-architecture',
          rating: 4.9,
          reviewCount: 178,
          roi: '500% within 12 months',
          competitors: ['Cisco', 'Palo Alto Networks', 'Fortinet', 'Check Point']
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Rocket,
      description: 'Breakthrough technologies and innovative solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          id: 'ai-quantum-machine-learning',
          name: 'AI Quantum Machine Learning Platform',
          description: 'Breakthrough quantum machine learning platform that combines quantum computing with AI to solve previously intractable problems.',
          price: '$35,000/month',
          marketPrice: '$35,000 - $120,000/month',
          features: ['Quantum neural networks', 'Quantum optimization algorithms', 'Quantum pattern recognition'],
          benefits: ['Solve complex problems 1000x faster', 'Achieve breakthrough accuracy in ML', 'Enable new types of AI applications'],
          href: '/services/ai-quantum-machine-learning',
          rating: 4.9,
          reviewCount: 56,
          roi: '800% within 24 months',
          competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum']
        },
        {
          id: 'ai-synthetic-biology-platform',
          name: 'AI Synthetic Biology Platform',
          description: 'Revolutionary AI platform for synthetic biology that designs, simulates, and optimizes biological systems.',
          price: '$40,000/month',
          marketPrice: '$40,000 - $150,000/month',
          features: ['AI-powered DNA sequence design', 'Biological system simulation', 'Protein structure prediction'],
          benefits: ['Accelerate biological research by 1000x', 'Design novel biological systems', 'Optimize industrial processes'],
          href: '/services/ai-synthetic-biology-platform',
          rating: 4.9,
          reviewCount: 34,
          roi: '900% within 30 months',
          competitors: ['Ginkgo Bioworks', 'Twist Bioscience', 'Zymergen', 'Benchling']
        },
        {
          id: 'ai-neuromorphic-computing-platform',
          name: 'AI Neuromorphic Computing Platform',
          description: 'Advanced neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing.',
          price: '$30,000/month',
          marketPrice: '$30,000 - $100,000/month',
          features: ['Brain-inspired neural architectures', 'Spiking neural networks', 'Event-driven processing'],
          benefits: ['Reduce power consumption by 90%', 'Improve learning efficiency by 1000x', 'Enable real-time AI processing'],
          href: '/services/ai-neuromorphic-computing-platform',
          rating: 4.8,
          reviewCount: 67,
          roi: '600% within 24 months',
          competitors: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip', 'General Vision']
        },
        {
          id: 'ai-digital-twin-platform',
          name: 'AI Digital Twin Platform',
          description: 'Comprehensive AI-powered digital twin platform that creates virtual replicas of physical systems for real-time monitoring.',
          price: '$25,000/month',
          marketPrice: '$25,000 - $80,000/month',
          features: ['Real-time physical system replication', 'Predictive maintenance and analytics', 'Performance optimization'],
          benefits: ['Reduce maintenance costs by 50%', 'Improve system performance by 40%', 'Prevent failures before they occur'],
          href: '/services/ai-digital-twin-platform',
          rating: 4.8,
          reviewCount: 145,
          roi: '500% within 18 months',
          competitors: ['Siemens', 'GE Digital', 'PTC', 'Dassault Systèmes']
        }
      ]
    }
  ];

  const filteredServices = serviceCategories.flatMap(category => 
    category.services.filter(service =>
      (selectedCategory === 'all' || category.id === selectedCategory) &&
      (searchTerm === '' || 
       service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our cutting-edge AI, IT infrastructure, and emerging technology services for 2030. Transform your business with innovative solutions."
        keywords="AI services, IT infrastructure, quantum computing, edge computing, synthetic biology, neuromorphic computing, digital twins, metaverse, 2030 technology"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Services Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              2030
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our revolutionary AI, IT infrastructure, and emerging technology services that will transform your business in 2030 and beyond.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing-2030"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  {/* Market Price */}
                  <div className="text-sm text-gray-400 mb-4">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI and Competitors */}
                <div className="mb-6 space-y-3">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 font-semibold text-sm">ROI</div>
                    <div className="text-green-300 text-sm">{service.roi}</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="text-blue-400 font-semibold text-sm">Competitors</div>
                    <div className="text-blue-300 text-sm">{service.competitors.slice(0, 2).join(', ')}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on emerging technologies, 
              industry insights, and exclusive service announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}