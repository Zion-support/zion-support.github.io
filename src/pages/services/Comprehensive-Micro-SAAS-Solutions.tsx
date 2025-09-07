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
  ShoppingCart,
  FileText,
  MessageCircle,
  Settings,
  Calendar,
  Camera,
  Music,
  Gamepad2,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2 as Building2Icon,
  Factory as FactoryIcon,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Home,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa
} from 'lucide-react';

const ComprehensiveMicroSAASSolutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const microSAASCategories = [
    {
      id: 'all',
      name: 'All Solutions',
      icon: Star,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 'ai',
      name: 'AI-Powered',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'business',
      name: 'Business Tools',
      icon: Building2,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'productivity',
      name: 'Productivity',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: BarChart3,
      color: 'from-red-500 to-pink-600'
    }
  ];

  const microSAASSolutions = [
    {
      id: 'ai-content-studio',
      name: 'AI Content Creation Studio Pro',
      category: 'ai',
      description: 'Professional AI-powered content creation platform with advanced editing tools',
      price: '$299',
      period: '/month',
      features: [
        'AI-powered content generation',
        'Multi-language support',
        'SEO optimization tools',
        'Content calendar management',
        'Team collaboration features',
        'Analytics and performance tracking'
      ],
      icon: FileText,
      color: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      id: 'quantum-trading',
      name: 'Quantum AI Trading Platform',
      category: 'ai',
      description: 'Advanced AI-powered trading platform with quantum computing capabilities',
      price: '$1,999',
      period: '/month',
      features: [
        'Quantum-enhanced algorithms',
        'Real-time market analysis',
        'Risk management tools',
        'Portfolio optimization',
        'Multi-exchange support',
        'Advanced backtesting'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-blue-600',
      popular: false
    },
    {
      id: 'lead-gen-ai',
      name: 'LeadGen AI Microsite',
      category: 'business',
      description: 'AI-powered lead generation platform with intelligent targeting',
      price: '$99',
      period: '/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'CRM integration',
        'Analytics dashboard',
        'A/B testing tools',
        'Email automation'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      popular: false
    },
    {
      id: 'support-bot',
      name: 'Agentic Support Bot',
      category: 'ai',
      description: 'Intelligent customer support automation with natural language processing',
      price: '$149',
      period: '/month',
      features: [
        '24/7 automated support',
        'Multi-channel integration',
        'Knowledge base management',
        'Escalation handling',
        'Performance analytics',
        'Custom training'
      ],
      icon: MessageCircle,
      color: 'from-blue-500 to-green-600',
      popular: false
    },
    {
      id: 'reporting-studio',
      name: 'Automated Reporting Studio',
      category: 'analytics',
      description: 'Intelligent reporting and dashboard creation platform',
      price: '$79',
      period: '/month',
      features: [
        'Auto-data ingestion',
        'Smart dashboard creation',
        'Scheduled reporting',
        'PDF export capabilities',
        'Real-time updates',
        'Custom templates'
      ],
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      popular: false
    },
    {
      id: 'security-scanner',
      name: 'Security Posture Scanner',
      category: 'business',
      description: 'Continuous security monitoring and compliance checking platform',
      price: '$199',
      period: '/month',
      features: [
        'Continuous monitoring',
        'CIS benchmarks',
        'Vulnerability scanning',
        'Compliance reporting',
        'Alert management',
        'Remediation guidance'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      popular: false
    },
    {
      id: 'adaptive-learning',
      name: 'Adaptive Learning Platform',
      category: 'ai',
      description: 'Personalized learning experience with AI-driven content adaptation',
      price: '$399',
      period: '/month',
      features: [
        'AI content adaptation',
        'Progress tracking',
        'Personalized paths',
        'Assessment tools',
        'Multi-format content',
        'Analytics insights'
      ],
      icon: Users,
      color: 'from-purple-500 to-indigo-600',
      popular: false
    },
    {
      id: 'energy-optimizer',
      name: 'Sustainable Energy Optimizer',
      category: 'business',
      description: 'AI-powered energy consumption optimization and sustainability platform',
      price: '$599',
      period: '/month',
      features: [
        'Energy consumption analysis',
        'Optimization algorithms',
        'Sustainability reporting',
        'Cost savings tracking',
        'Predictive maintenance',
        'Green certification'
      ],
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes, not months'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Start small and scale as you grow'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 expert support and guidance'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 users',
        'Basic features',
        'Email support',
        'Standard security',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced features',
        'Priority support',
        'Enhanced security',
        'Advanced analytics',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'All features',
        '24/7 dedicated support',
        'Enterprise security',
        'Custom development',
        'On-premise option'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const filteredSolutions = activeCategory === 'all' 
    ? microSAASSolutions 
    : microSAASSolutions.filter(solution => solution.category === activeCategory);

  return (
    <>
      <SEO 
        title="Comprehensive Micro SAAS Solutions | Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS solutions designed to transform your business operations. AI-powered tools, analytics, and business solutions."
        keywords="micro SAAS, business tools, AI solutions, productivity tools, analytics platform"
        canonicalUrl="https://ziontechgroup.com/services/comprehensive-micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 text-sm font-medium">Micro SAAS Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Comprehensive
                  <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Micro SAAS Solutions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your business with our suite of innovative micro SAAS solutions. 
                  From AI-powered tools to business automation, we have everything you need 
                  to scale and succeed in the digital age.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Explore Solutions
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {microSAASCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 border rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 ${
                    solution.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-slate-700/50'
                  }`}
                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">{solution.price}</span>
                      <span className="text-gray-400 ml-1">{solution.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                    Learn More
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
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful tools without the complexity
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
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Tiers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs and scale as you grow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    tier.popular 
                      ? 'border-purple-500/50 bg-purple-500/5' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {tier.cta}
                  </button>
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
                className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-12"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start with one solution or build a complete ecosystem. Our micro SAAS approach 
                  gives you the flexibility to grow at your own pace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold">
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
                  <Phone className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-4" />
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

export default ComprehensiveMicroSAASSolutions;