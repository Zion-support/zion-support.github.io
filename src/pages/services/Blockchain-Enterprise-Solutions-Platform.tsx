import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Database, 
  Network, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Target,
  Activity,
  Eye,
  Search,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  DollarSign,
  Brain,
  Globe,
  Cpu,
  Code,
  BarChart3,
  TrendingUp,
  Rocket,
  Sparkles,
  Link,
  FileText,
  Key,
  Fingerprint,
  Server,
  Cloud,
  Zap,
  Atom,
  Building,
  Factory,
  Truck,
  Heart,
  ShoppingCart
} from 'lucide-react';

const BlockchainEnterpriseSolutionsPlatform: React.FC = () => {
  const features = [
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contracts for business automation, supply chain, and financial applications',
      icon: Code,
      benefits: ['Custom contract logic', 'Security auditing', 'Gas optimization', 'Multi-chain support']
    },
    {
      title: 'DeFi & Tokenization',
      description: 'Decentralized finance solutions and digital asset tokenization for enterprises',
      icon: DollarSign,
      benefits: ['Token creation', 'DeFi protocols', 'Liquidity pools', 'Yield farming']
    },
    {
      title: 'Supply Chain Transparency',
      description: 'End-to-end supply chain tracking and verification using blockchain technology',
      icon: Truck,
      benefits: ['Product tracking', 'Authenticity verification', 'Compliance monitoring', 'Real-time updates']
    },
    {
      title: 'Identity & Access Management',
      description: 'Decentralized identity solutions for secure and privacy-preserving authentication',
      icon: Key,
      benefits: ['Self-sovereign identity', 'Zero-knowledge proofs', 'Multi-factor auth', 'Privacy protection']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses exploring blockchain',
      features: [
        'Basic smart contracts',
        'Single blockchain support',
        'Standard security',
        'Email support',
        'Basic analytics',
        'Monthly reports'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,499',
      period: '/month',
      description: 'Ideal for growing enterprises and teams',
      features: [
        'Advanced smart contracts',
        'Multi-chain support',
        'Enhanced security',
        'Priority support',
        'Advanced analytics',
        'Real-time monitoring',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom blockchain networks',
        'White-label solutions',
        'Dedicated support',
        'On-premise deployment',
        'Custom protocols',
        'Advanced compliance',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Cross-border payments', 'Trade finance', 'Asset tokenization', 'Regulatory compliance'],
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      applications: ['Medical records', 'Drug supply chain', 'Clinical trials', 'Patient data privacy'],
      icon: Heart
    },
    {
      industry: 'Manufacturing',
      applications: ['Quality assurance', 'Parts tracking', 'Warranty management', 'Supplier verification'],
      icon: Factory
    },
    {
      industry: 'Retail & E-commerce',
      applications: ['Product authenticity', 'Loyalty programs', 'Supply chain tracking', 'Customer rewards'],
      icon: ShoppingCart
    }
  ];

  const blockchainTechnologies = [
    {
      name: 'Ethereum',
      description: 'Smart contract platform with extensive DeFi ecosystem',
      applications: ['Smart contracts', 'DeFi protocols', 'NFTs', 'DApps']
    },
    {
      name: 'Hyperledger Fabric',
      description: 'Enterprise-grade permissioned blockchain framework',
      applications: ['Supply chain', 'Identity management', 'Asset tracking', 'Compliance']
    },
    {
      name: 'Polkadot',
      description: 'Multi-chain network for interoperability',
      applications: ['Cross-chain communication', 'Parachain development', 'Scalability', 'Governance']
    },
    {
      name: 'Solana',
      description: 'High-performance blockchain for DeFi and NFTs',
      applications: ['High-speed transactions', 'Low fees', 'DeFi protocols', 'Gaming']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Blockchain Enterprise Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Blockchain Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of blockchain to create transparent, secure, and efficient business processes 
              that drive innovation and trust across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our blockchain platform combines cutting-edge technology with enterprise-grade security 
              to deliver solutions that transform business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Blockchain Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from leading blockchain platforms or let us help you select the best technology for your use case.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blockchainTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">Applications:</h4>
                <ul className="space-y-1">
                  {tech.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <ArrowRight className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Blockchain Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your blockchain implementation needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-indigo-500 bg-indigo-500/10' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how leading organizations across industries leverage blockchain 
              to solve complex business challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <ArrowRight className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace Blockchain Innovation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the blockchain revolution and transform your business operations 
              with transparent, secure, and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Blockchain Experts
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Video className="w-5 h-5 mr-2" />
                Schedule Blockchain Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainEnterpriseSolutionsPlatform;