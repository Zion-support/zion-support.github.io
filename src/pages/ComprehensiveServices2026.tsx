import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveServices2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai-solutions');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge artificial intelligence services'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      description: 'Revolutionary quantum computing solutions'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧠',
      color: 'from-green-500 to-teal-500',
      description: 'Brain-computer interface technologies'
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      icon: '🔗',
      color: 'from-orange-500 to-red-500',
      description: 'Decentralized blockchain solutions'
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      icon: '☁️',
      color: 'from-indigo-500 to-purple-500',
      description: 'Scalable cloud infrastructure'
    }
  ];

  const services = {
    'ai-solutions': [
      {
        name: 'Conscious AI Development',
        description: 'Build self-aware AI systems with emotional intelligence and ethical reasoning capabilities',
        features: ['Self-learning algorithms', 'Emotional recognition', 'Ethical decision making', 'Autonomous operation'],
        pricing: 'Custom Quote',
        duration: '6-12 months',
        icon: '🧠'
      },
      {
        name: 'AI-Powered Automation',
        description: 'Automate complex business processes with intelligent AI agents',
        features: ['Process optimization', 'Predictive analytics', 'Real-time monitoring', 'Self-healing systems'],
        pricing: 'From $10K/month',
        duration: '3-6 months',
        icon: '⚡'
      },
      {
        name: 'Machine Learning Platforms',
        description: 'Custom ML platforms for data analysis and predictive modeling',
        features: ['Data preprocessing', 'Model training', 'Deployment automation', 'Performance monitoring'],
        pricing: 'From $5K/month',
        duration: '2-4 months',
        icon: '📊'
      },
      {
        name: 'Natural Language Processing',
        description: 'Advanced NLP solutions for text analysis and language understanding',
        features: ['Sentiment analysis', 'Language translation', 'Text generation', 'Voice recognition'],
        pricing: 'From $3K/month',
        duration: '1-3 months',
        icon: '💬'
      }
    ],
    'quantum-computing': [
      {
        name: 'Quantum Algorithm Development',
        description: 'Develop quantum algorithms for complex optimization problems',
        features: ['Quantum optimization', 'Cryptographic security', 'Molecular simulation', 'Financial modeling'],
        pricing: 'Custom Quote',
        duration: '6-18 months',
        icon: '⚛️'
      },
      {
        name: 'Quantum Cloud Services',
        description: 'Access quantum computing power through our cloud platform',
        features: ['Quantum processors', 'API integration', 'Real-time monitoring', 'Scalable resources'],
        pricing: 'From $1K/hour',
        duration: 'Immediate',
        icon: '☁️'
      },
      {
        name: 'Quantum Cryptography',
        description: 'Unbreakable encryption using quantum key distribution',
        features: ['Quantum key generation', 'Secure communication', 'Tamper detection', 'Future-proof security'],
        pricing: 'From $50K',
        duration: '3-6 months',
        icon: '🔐'
      }
    ],
    'neural-interfaces': [
      {
        name: 'BCI Development',
        description: 'Build brain-computer interfaces for direct neural communication',
        features: ['Non-invasive sensors', 'Neural signal processing', 'Real-time feedback', 'Multi-user support'],
        pricing: 'Custom Quote',
        duration: '12-24 months',
        icon: '🧠'
      },
      {
        name: 'Neural Rehabilitation',
        description: 'AI-powered rehabilitation systems for neurological conditions',
        features: ['Personalized therapy', 'Progress tracking', 'Adaptive algorithms', 'Remote monitoring'],
        pricing: 'From $25K',
        duration: '6-12 months',
        icon: '🏥'
      },
      {
        name: 'Cognitive Enhancement',
        description: 'Enhance cognitive abilities through neural stimulation',
        features: ['Memory improvement', 'Focus enhancement', 'Learning acceleration', 'Safe protocols'],
        pricing: 'From $15K',
        duration: '3-9 months',
        icon: '⚡'
      }
    ],
    'blockchain': [
      {
        name: 'Smart Contract Development',
        description: 'Secure and efficient smart contracts for various applications',
        features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Multi-chain support'],
        pricing: 'From $5K',
        duration: '1-3 months',
        icon: '📜'
      },
      {
        name: 'DeFi Platforms',
        description: 'Decentralized finance platforms with advanced features',
        features: ['Yield farming', 'Liquidity pools', 'Governance tokens', 'Cross-chain bridges'],
        pricing: 'From $50K',
        duration: '6-12 months',
        icon: '💰'
      },
      {
        name: 'NFT Marketplaces',
        description: 'Custom NFT marketplaces with unique features',
        features: ['Minting tools', 'Auction systems', 'Royalty management', 'Multi-wallet support'],
        pricing: 'From $30K',
        duration: '3-6 months',
        icon: '🎨'
      }
    ],
    'cloud-services': [
      {
        name: 'Multi-Cloud Architecture',
        description: 'Hybrid cloud solutions across multiple providers',
        features: ['AWS integration', 'Azure compatibility', 'Google Cloud support', 'Cost optimization'],
        pricing: 'From $2K/month',
        duration: '1-2 months',
        icon: '☁️'
      },
      {
        name: 'Edge Computing',
        description: 'Distributed computing at the edge for low latency',
        features: ['Global CDN', 'Edge AI', 'Real-time processing', '5G integration'],
        pricing: 'From $1K/month',
        duration: '2-4 months',
        icon: '🌐'
      },
      {
        name: 'Serverless Solutions',
        description: 'Fully managed serverless applications',
        features: ['Auto-scaling', 'Pay-per-use', 'Zero maintenance', 'High availability'],
        pricing: 'From $500/month',
        duration: '1-2 months',
        icon: '⚡'
      }
    ]
  };

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'Healthcare',
      challenge: 'Needed AI-powered diagnostic system',
      solution: 'Conscious AI Development',
      results: '95% accuracy improvement, 60% cost reduction',
      logo: '🏥'
    },
    {
      company: 'FinanceFlow',
      industry: 'Financial Services',
      challenge: 'Quantum-resistant security implementation',
      solution: 'Quantum Cryptography',
      results: '100% security guarantee, 40% faster transactions',
      logo: '💰'
    },
    {
      company: 'NeuroTech Labs',
      industry: 'Research',
      challenge: 'Neural interface for medical research',
      solution: 'BCI Development',
      results: 'Real-time brain monitoring, 80% research efficiency gain',
      logo: '🧠'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Services...</h2>
          <p className="text-purple-200 mt-2">Preparing our comprehensive service offerings</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 COMPREHENSIVE SERVICES 2026 • BREAKTHROUGH SOLUTIONS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Technology Services
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge AI, quantum computing, and neural interface technologies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Service Categories</h2>
          <p className="text-xl text-purple-200">Choose from our comprehensive range of technology services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-xl text-white transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-br ${category.color} shadow-lg scale-105`
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold mb-2">{category.name}</h3>
              <p className="text-sm opacity-90">{category.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Selected Category Services */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {serviceCategories.find(cat => cat.id === selectedCategory)?.name} Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[selectedCategory as keyof typeof services].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{service.name}</h4>
                <p className="text-purple-200 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3">Key Features:</h5>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-purple-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-purple-300">Starting from</p>
                    <p className="text-xl font-bold">{service.pricing}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-300">Duration</p>
                    <p className="text-sm font-semibold">{service.duration}</p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white"
              >
                <div className="text-4xl mb-4">{study.logo}</div>
                <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                <p className="text-purple-300 mb-4">{study.industry}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-purple-200 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-purple-200 text-sm">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <p className="text-green-300 text-sm font-semibold">{study.results}</p>
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg transition-colors font-semibold">
                  Read Full Case Study
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Pricing Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$5K<span className="text-lg text-purple-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Basic AI integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Cloud hosting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Basic analytics</span>
                </li>
              </ul>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors font-semibold">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$25K<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Advanced AI solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Quantum computing access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 hover:bg-purple-50 py-3 rounded-lg transition-colors font-semibold">
                Choose Plan
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom<span className="text-lg text-purple-300">/quote</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Full AI ecosystem</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Neural interface development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>On-site consultation</span>
                </li>
              </ul>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our revolutionary technologies can accelerate your success
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2026;