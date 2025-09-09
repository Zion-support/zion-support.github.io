import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Shield, 
  Database, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Cpu,
  Network,
  Lock,
  Users,
  TrendingUp
} from 'lucide-react';

const Blockchain: React.FC = () => {
  const services = [
    {
      icon: Link,
      title: 'Smart Contracts',
      description: 'Develop and deploy secure, audited smart contracts for various blockchain platforms.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Shield,
      title: 'DeFi Solutions',
      description: 'Build decentralized finance applications with advanced security and compliance.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Database,
      title: 'NFT Platforms',
      description: 'Create and manage NFT marketplaces, collections, and digital asset ecosystems.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Blockchain Infrastructure',
      description: 'Design and implement scalable blockchain networks and infrastructure solutions.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Supply Chain Transparency',
      description: 'End-to-end traceability and verification for global supply chains.',
      icon: Network,
      features: ['Product tracking', 'Quality verification', 'Compliance monitoring', 'Audit trails']
    },
    {
      title: 'Digital Identity',
      description: 'Self-sovereign identity solutions for secure, privacy-preserving authentication.',
      icon: Users,
      features: ['Identity verification', 'Privacy protection', 'Access control', 'Credential management']
    },
    {
      title: 'Cross-Border Payments',
      description: 'Fast, secure, and cost-effective international payment solutions.',
      icon: TrendingUp,
      features: ['Instant transfers', 'Low fees', 'Multi-currency', 'Regulatory compliance']
    },
    {
      title: 'Asset Tokenization',
      description: 'Convert real-world assets into digital tokens for fractional ownership.',
      icon: Package,
      features: ['Real estate', 'Commodities', 'Art & collectibles', 'Investment vehicles']
    }
  ];

  const technologies = [
    'Ethereum',
    'Polygon',
    'Solana',
    'Polkadot',
    'Hyperledger',
    'IPFS',
    'Zero-Knowledge Proofs',
    'Layer 2 Scaling'
  ];

  const benefits = [
    {
      title: 'Transparency',
      description: 'Immutable, auditable records visible to all network participants.',
      icon: Monitor,
      metric: '100% Transparent'
    },
    {
      title: 'Security',
      description: 'Cryptographic security and decentralized consensus mechanisms.',
      icon: Shield,
      metric: 'Bank-grade Security'
    },
    {
      title: 'Efficiency',
      description: 'Automated processes reducing intermediaries and operational costs.',
      icon: Zap,
      metric: '90% Cost Reduction'
    },
    {
      title: 'Trust',
      description: 'Decentralized trust without requiring third-party intermediaries.',
      icon: Lock,
      metric: 'Zero Trust Model'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO, SupplyChain Corp',
      content: 'Zion Tech Group\'s blockchain solution transformed our supply chain visibility and compliance.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CEO, FinTech Startup',
      content: 'Their DeFi platform helped us launch innovative financial products in record time.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'VP Technology, Art Gallery',
      content: 'The NFT marketplace they built increased our digital art sales by 300%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Link className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge blockchain technology. 
            Build trust, transparency, and efficiency with decentralized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explore Blockchain Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Blockchain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Blockchain Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We work with leading blockchain platforms and technologies to deliver 
                robust, scalable, and secure solutions for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Blockchain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blockchain Process */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Blockchain Development Process</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <Settings className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Discovery & Planning</h3>
                <p className="text-gray-300 text-sm">
                  Understand requirements, choose appropriate blockchain platform, and design architecture
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <Code className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Development</h3>
                <p className="text-gray-300 text-sm">
                  Smart contract development, frontend integration, and blockchain infrastructure setup
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Shield className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Testing & Audit</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive testing, security audits, and performance optimization
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <Server className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Deployment</h3>
                <p className="text-gray-300 text-sm">
                  Mainnet deployment, monitoring setup, and ongoing support and maintenance
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build on the Blockchain?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the blockchain revolution and transform your business with decentralized solutions. 
              Partner with Zion Tech Group for innovative blockchain development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Blockchain Project
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Blockchain Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Blockchain;