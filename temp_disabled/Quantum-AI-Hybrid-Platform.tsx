import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Database, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Network,
  Code,
  Server,
  Chip,
  Atom,
  Rocket,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Satellite,
  Navigation,
  Telescope,
  Planet,
  Orbit,
  Signal,
  Wifi,
  DollarSign,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  Building2,
  Eye,
  Leaf,
  Factory,
  Car,
  Truck,
  Ship,
  Plane,
  Train,
  Cpu,
  HardDrive,
  Activity,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitPullRequestClosed,
  GitBranchPlus,
  GitCommitPlus,
  GitPullRequestPlus,
  GitMergePlus,
  GitComparePlus,
  GitPullRequestClosedPlus,
  GitBranchMinus,
  GitCommitMinus,
  GitPullRequestMinus,
  GitMergeMinus,
  GitCompareMinus,
  GitPullRequestClosedMinus,
  ShoppingCart
} from 'lucide-react';

const QuantumAIHybridPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const features = [
    {
      category: 'Quantum Computing',
      items: [
        'Quantum algorithm optimization',
        'Quantum machine learning models',
        'Quantum error correction',
        'Quantum random number generation',
        'Quantum key distribution (QKD)',
        'Post-quantum cryptography'
      ]
    },
    {
      category: 'AI Integration',
      items: [
        'Hybrid quantum-classical ML',
        'Quantum neural networks',
        'Quantum feature selection',
        'Quantum optimization algorithms',
        'Quantum-enhanced deep learning',
        'Quantum natural language processing'
      ]
    },
    {
      category: 'Advanced Analytics',
      items: [
        'Quantum-enhanced data analysis',
        'Real-time quantum simulations',
        'Quantum Monte Carlo methods',
        'Quantum Fourier transforms',
        'Quantum principal component analysis',
        'Quantum clustering algorithms'
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        'Quantum-resistant encryption',
        'Quantum-secure communications',
        'Zero-knowledge quantum proofs',
        'Quantum blockchain integration',
        'SOC 2 Type II compliance',
        'GDPR and CCPA compliance'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$4,999',
      period: '/month',
      description: 'Perfect for research institutions and startups',
      features: [
        'Up to 100 quantum operations/day',
        '5 quantum algorithms',
        'Basic quantum ML models',
        'Email support',
        'Standard security features'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$12,999',
      period: '/month',
      description: 'Ideal for growing quantum research teams',
      features: [
        'Up to 1,000 quantum operations/day',
        '25 quantum algorithms',
        'Advanced quantum ML suite',
        'Priority support',
        'Enhanced security features',
        'Custom quantum circuits'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$29,999',
      period: '/month',
      description: 'For large enterprises and research organizations',
      features: [
        'Unlimited quantum operations',
        'Unlimited quantum algorithms',
        'Full quantum AI platform',
        '24/7 dedicated support',
        'Enterprise security features',
        'Custom quantum development',
        'On-premise quantum deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Exponential Performance',
      description: 'Achieve quantum advantage with 1000x faster computation for complex problems'
    },
    {
      icon: DollarSign,
      title: 'Future-Proof Investment',
      description: 'Stay ahead of the curve with quantum-resistant security and algorithms'
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum-secure communications and post-quantum cryptography'
    },
    {
      icon: Users,
      title: 'Research Leadership',
      description: 'Lead innovation in quantum computing and AI research'
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Portfolio optimization, risk assessment, and quantum trading algorithms',
      icon: DollarSign
    },
    {
      industry: 'Pharmaceutical Research',
      description: 'Drug discovery, molecular modeling, and protein folding',
      icon: Users
    },
    {
      industry: 'Logistics & Supply Chain',
      description: 'Route optimization, inventory management, and quantum scheduling',
      icon: Truck
    },
    {
      industry: 'Climate Modeling',
      description: 'Weather prediction, climate simulation, and environmental analysis',
      icon: Globe
    }
  ];

  const quantumAdvantages = [
    {
      title: 'Quantum Supremacy',
      description: 'Solve problems that are impossible for classical computers',
      icon: Atom
    },
    {
      title: 'Quantum Speedup',
      description: 'Exponential speedup for specific computational tasks',
      icon: Zap
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum correlations for enhanced processing',
      icon: Network
    },
    {
      title: 'Quantum Parallelism',
      description: 'Process multiple possibilities simultaneously',
      icon: Cpu
    }
  ];

  return (
    <>
      <SEO 
        title="Quantum AI Hybrid Platform | Zion Tech Group"
        description="Revolutionize your computing capabilities with our Quantum AI Hybrid Platform. Combine quantum computing power with artificial intelligence for unprecedented performance."
        keywords="quantum computing, quantum AI, hybrid platform, quantum machine learning, quantum algorithms"
        canonicalUrl="https://ziontechgroup.com/services/quantum-ai-hybrid-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                  <Atom className="w-5 h-5 text-indigo-400" />
                  <span className="text-indigo-400 text-sm font-medium">Quantum-Powered Platform</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Quantum AI
                  <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Hybrid Platform
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Experience the future of computing with our revolutionary Quantum AI Hybrid Platform. 
                  Combine the power of quantum computing with artificial intelligence to solve 
                  previously impossible problems and achieve quantum advantage.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quantum Advantages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Advantages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the revolutionary capabilities that set quantum computing apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quantumAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Quantum AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to harness the power of quantum computing and AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <Atom className="w-6 h-6 text-indigo-400 mr-3" />
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access quantum computing power with flexible, scalable pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-indigo-500/50 bg-indigo-500/5' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Quantum AI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your research and business operations with quantum computing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum AI platform delivers breakthrough results across diverse industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-12"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Experience Quantum Computing?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join the quantum revolution and solve previously impossible problems
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                    Contact Sales
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-center">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumAIHybridPlatform;