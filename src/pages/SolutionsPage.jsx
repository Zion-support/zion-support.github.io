import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Rocket, 
  Globe, 
  Users, 
  Building,
  Leaf,
  Cpu,
  Eye,
  Lock,
  BarChart3,
  MessageSquare,
  FileText,
  DollarSign,
  Heart,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const SOLUTIONS_DATA = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: <Brain className="w-12 h-12" />,
    color: 'from-zion-cyan to-zion-blue',
    description: 'Cutting-edge artificial intelligence solutions that transform businesses through automation, insights, and intelligent decision-making.',
    features: [
      'AI Content Generation & Code Writing',
      'Computer Vision & Image Processing',
      'Natural Language Processing',
      'Predictive Analytics & Forecasting',
      'Machine Learning Model Training',
      'AI-Powered Automation',
      'Intelligent Chatbots & Assistants',
      'Real-time Data Analysis'
    ],
    services: [
      {
        name: 'AI Content Generator Pro',
        price: '$29/month',
        description: 'Generate high-quality content, code, and creative assets',
        rating: 4.9,
        reviews: 156
      },
      {
        name: 'AI Voice Cloning Studio',
        price: '$79/month',
        description: 'Professional voice cloning with 99.9% accuracy',
        rating: 4.9,
        reviews: 89
      },
      {
        name: 'AI Emotion Intelligence',
        price: '$149/month',
        description: 'Real-time emotion detection and sentiment analysis',
        rating: 4.8,
        reviews: 134
      }
    ],
    benefits: [
      'Increase productivity by up to 300%',
      'Reduce operational costs by 40-60%',
      'Improve decision-making accuracy',
      '24/7 automated operations',
      'Scalable AI infrastructure'
    ]
  },
  {
    id: 'blockchain-web3',
    title: 'Blockchain & Web3',
    icon: <Zap className="w-12 h-12" />,
    color: 'from-zion-purple to-zion-purple-dark',
    description: 'Next-generation decentralized applications, DeFi solutions, and blockchain infrastructure for the future of finance and technology.',
    features: [
      'Smart Contract Development',
      'DeFi Yield Optimization',
      'NFT Marketplace Creation',
      'DAO Governance Platforms',
      'Cross-chain Interoperability',
      'Blockchain Security Audits',
      'Web3 Infrastructure',
      'Decentralized Identity'
    ],
    services: [
      {
        name: 'DeFi Yield Optimizer',
        price: '$199/month',
        description: 'Automated DeFi yield farming across multiple protocols',
        rating: 4.8,
        reviews: 156
      },
      {
        name: 'NFT Marketplace Builder',
        price: '$399/month',
        description: 'Build and launch NFT marketplaces in 24 hours',
        rating: 4.7,
        reviews: 89
      },
      {
        name: 'DAO Governance Platform',
        price: '$249/month',
        description: 'Complete DAO governance with voting and treasury',
        rating: 4.8,
        reviews: 112
      }
    ],
    benefits: [
      'Transparent and trustless operations',
      'Reduced intermediary costs',
      'Global accessibility',
      'Programmable money and assets',
      'Community-driven governance'
    ]
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    icon: <Rocket className="w-12 h-12" />,
    color: 'from-zion-blue to-zion-blue-dark',
    description: 'Access to quantum computing power for solving complex optimization problems in logistics, finance, research, and enterprise applications.',
    features: [
      'Quantum Optimization Solvers',
      'Post-Quantum Cryptography',
      'Quantum Machine Learning',
      'Quantum Simulation',
      'Quantum Error Correction',
      'Hybrid Quantum-Classical Systems',
      'Quantum Cloud Access',
      'Quantum Algorithm Development'
    ],
    services: [
      {
        name: 'Quantum Optimization Solver',
        price: '$999/month',
        description: 'Access to quantum computing for complex problems',
        rating: 5.0,
        reviews: 45
      },
      {
        name: 'Quantum Cryptography Suite',
        price: '$599/month',
        description: 'Post-quantum cryptography for future-proof security',
        rating: 4.9,
        reviews: 78
      }
    ],
    benefits: [
      'Solve previously impossible problems',
      'Exponential speedup for optimization',
      'Future-proof security solutions',
      'Breakthrough research capabilities',
      'Competitive advantage in innovation'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: <Shield className="w-12 h-12" />,
    color: 'from-zion-purple to-zion-purple-dark',
    description: 'Enterprise-grade security solutions with AI-powered threat detection, zero-trust architecture, and comprehensive protection systems.',
    features: [
      'AI Threat Detection',
      'Zero Trust Security',
      'Penetration Testing',
      'Security Compliance',
      'Incident Response',
      'Vulnerability Assessment',
      'Security Awareness Training',
      '24/7 Security Monitoring'
    ],
    services: [
      {
        name: 'AI Threat Detection',
        price: '$99/month',
        description: 'Real-time cybersecurity with AI algorithms',
        rating: 4.9,
        reviews: 134
      },
      {
        name: 'Zero Trust Security Suite',
        price: '$499/month',
        description: 'Comprehensive zero-trust implementation',
        rating: 4.7,
        reviews: 78
      },
      {
        name: 'Penetration Testing Service',
        price: '$299/month',
        description: 'Regular security assessments and scanning',
        rating: 4.8,
        reviews: 92
      }
    ],
    benefits: [
      'Protect against advanced threats',
      'Meet compliance requirements',
      'Reduce security incidents by 90%',
      '24/7 automated protection',
      'Comprehensive security coverage'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-12 h-12" />,
    color: 'from-zion-blue to-zion-blue-dark',
    description: 'Scalable cloud infrastructure, DevOps automation, and edge computing solutions for modern, agile businesses.',
    features: [
      'Multi-Cloud Management',
      'DevOps Automation',
      'Edge Computing',
      'Container Orchestration',
      'Serverless Architecture',
      'Infrastructure as Code',
      'Cloud Migration',
      'Cost Optimization'
    ],
    services: [
      {
        name: 'Multi-Cloud Management',
        price: '$79/month',
        description: 'Unified management for AWS, Azure, Google Cloud',
        rating: 4.6,
        reviews: 145
      },
      {
        name: 'DevOps Automation Platform',
        price: '$49/month',
        description: 'Streamline CI/CD and infrastructure automation',
        rating: 4.7,
        reviews: 167
      },
      {
        name: 'Edge Computing Solutions',
        price: '$149/month',
        description: 'Deploy applications at the edge for performance',
        rating: 4.5,
        reviews: 73
      }
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve deployment speed by 10x',
      'Global performance optimization',
      'Scalable and flexible infrastructure',
      'Automated operations and maintenance'
    ]
  },
  {
    id: 'sustainability',
    title: 'Sustainability & Green Tech',
    icon: <Leaf className="w-12 h-12" />,
    color: 'from-zion-cyan to-zion-green',
    description: 'AI-powered sustainability solutions for carbon tracking, energy optimization, and building smart, eco-friendly cities.',
    features: [
      'Carbon Footprint Tracking',
      'Energy Optimization',
      'Smart City Solutions',
      'Green Building Management',
      'Sustainable Supply Chain',
      'Environmental Monitoring',
      'Renewable Energy Integration',
      'Circular Economy Solutions'
    ],
    services: [
      {
        name: 'AI Carbon Footprint Tracker',
        price: '$79/month',
        description: 'Intelligent carbon monitoring and reduction',
        rating: 4.8,
        reviews: 98
      },
      {
        name: 'AI Energy Optimization',
        price: '$299/month',
        description: 'Smart energy management for buildings and cities',
        rating: 4.9,
        reviews: 76
      }
    ],
    benefits: [
      'Reduce carbon emissions by 25-40%',
      'Lower energy costs by 20-35%',
      'Meet sustainability goals',
      'Improve brand reputation',
      'Comply with environmental regulations'
    ]
  }
];

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <SEO 
          title="Technology Solutions - Zion Tech Group" 
          description="Comprehensive technology solutions including AI, blockchain, quantum computing, cybersecurity, and sustainability services." 
          keywords="AI solutions, blockchain, quantum computing, cybersecurity, cloud infrastructure, sustainability, Zion Tech Group" 
          url="https://ziontechgroup.com/solutions"
        />
        
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions that drive innovation, security, and sustainability. 
              From AI and blockchain to quantum computing and green tech.
            </p>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SOLUTIONS_DATA.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}
              >
                {/* Solution Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center text-white`}>
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{solution.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {solution.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Preview */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Popular Services
                  </h4>
                  <div className="space-y-3">
                    {solution.services.slice(0, 2).map((service, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-white text-sm">{service.name}</span>
                          <span className="text-zion-purple font-bold">{service.price}</span>
                        </div>
                        <p className="text-zion-slate-light text-xs mb-2">{service.description}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-xs">★</span>
                            <span className="text-white text-xs font-medium">{service.rating}</span>
                          </div>
                          <span className="text-zion-slate-light text-xs">({service.reviews} reviews)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Business Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {solution.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Link to="/services">
                    <motion.button 
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-zion-cyan/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Services
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button 
                      className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div 
            className="bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple-dark/80 backdrop-blur-sm rounded-2xl p-12 text-center border border-zion-cyan/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-zion-cyan">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our cutting-edge technology solutions. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-zion-cyan/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}