'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Bot
  Zap
  Cpu
  Database
  Shield
  Globe
  Rocket
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Sparkles,
  Settings,
  Workflow,
  Cog,
  Wrench,
  Gauge,
  Layers
} from 'lucide-react';

const AdvancedAutomationSolutions2030Showcase = () => {
  const [activeTabsetActiveTab] = useState('overview');
  const [currentSolutionsetCurrentSolution] = useState(0);

  const solutions = [
    {
      id: 'autonomous-operations',
      title: 'Autonomous Business Operations',
      description: 'Fully autonomous business systems that can run entire operations without human interventionadapting and optimizing in real-time.',
      features: [
        'Self-healing systems',
        'Predictive maintenance',
        'Autonomous decision making',
        'Real-time optimization'
      ],
      impact: 'Reduce operational costs by 80% while increasing efficiency by 300%',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      roi: '500% ROI'
    },
    {
      id: 'intelligent-workflows',
      title: 'Intelligent Workflow Automation',
      description: 'AI-powered workflow systems that learnadaptand optimize business processes automatically across all departments.',
      features: [
        'Process mining and optimization',
        'Dynamic workflow adaptation',
        'Cross-departmental coordination',
        'Intelligent task routing'
      ],
      impact: 'Streamline operations and eliminate bottlenecks automatically',
      icon: Workflow,
      color: 'from-green-500 to-emerald-500',
      roi: '400% ROI'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Engine',
      description: 'Advanced AI systems that predict future trendsrisksand opportunities with unprecedented accuracy.',
      features: [
        'Real-time trend analysis',
        'Risk prediction and mitigation',
        'Opportunity identification',
        'Automated reporting'
      ],
      impact: 'Make data-driven decisions with 95% accuracy',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      roi: '600% ROI'
    },
    {
      id: 'cognitive-automation',
      title: 'Cognitive Process Automation',
      description: 'AI systems that can understandlearnand execute complex cognitive tasks that previously required human intelligence.',
      features: [
        'Natural language processing',
        'Document understanding',
        'Decision tree automation',
        'Exception handling'
      ],
      impact: 'Automate complex cognitive tasks with human-level accuracy',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      roi: '700% ROI'
    }
  ];

  const automationStats = [
    { label: 'Process Efficiency'value: '95%'icon: Gaugedescription: 'Average improvement' },
    { label: 'Cost Reduction'value: '80%'icon: TrendingUpdescription: 'Operational savings' },
    { label: 'Error Reduction'value: '99%'icon: Shieldescription: 'Human error elimination' },
    { label: 'Time Savings'value: '90%'icon: Zapdescription: 'Task completion time' }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      title: 'Smart Manufacturing Revolution',
      description: 'Fully automated production lines with predictive maintenance and quality control.',
      benefits: ['Zero-defect production'Predictive maintenance'Supply chain optimization'Energy efficiency'],
      icon: Cog,
      savings: '$2M+ annually'
    },
    {
      name: 'Healthcare',
      title: 'Automated Healthcare Systems',
      description: 'AI-powered patient carediagnosis assistanceand administrative automation.',
      benefits: ['Patient monitoring'Diagnostic assistance'Administrative automation'Treatment optimization'],
      icon: Shield,
      savings: '$5M+ annually'
    },
    {
      name: 'Finance',
      title: 'Intelligent Financial Operations',
      description: 'Automated tradingrisk managementand compliance monitoring systems.',
      benefits: ['Automated trading'Risk assessment'Compliance monitoring'Fraud detection'],
      icon: TrendingUp,
      savings: '$10M+ annually'
    },
    {
      name: 'Retail',
      title: 'Smart Retail Automation',
      description: 'Inventory managementcustomer serviceand personalized shopping experiences.',
      benefits: ['Inventory optimization'Customer service bots'Personalized recommendations'Supply chain management'],
      icon: Users,
      savings: '$3M+ annually'
    }
  ];

  const automationFeatures = [
    {
      category: 'Intelligence',
      title: 'AI-Powered Decision Making',
      description: 'Advanced AI systems that make complex business decisions autonomously.',
      icon: Brain,
      capabilities: ['Pattern recognition'Predictive modeling'Risk assessment'Strategic planning']
    },
    {
      category: 'Integration',
      title: 'Seamless System Integration',
      description: 'Connect and automate across all your existing systems and platforms.',
      icon: Layers,
      capabilities: ['API integration'Data synchronization'Workflow orchestration'Real-time monitoring']
    },
    {
      category: 'Scalability',
      title: 'Infinite Scalability',
      description: 'Automation solutions that grow with your business needs.',
      icon: Globe,
      capabilities: ['Cloud-native architecture'Auto-scaling'Global deployment'Multi-tenant support']
    },
    {
      category: 'Security',
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security for all automated processes and data.',
      icon: Shield,
      capabilities: ['End-to-end encryption'Access control'Audit trails'Compliance monitoring']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSolution((prev) => (prev + 1) % solutions.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-lg font-semibold text-blue-400">Advanced Automation 2030</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Automation Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with next-generation automation solutions that thinklearnand adapt. 
              Experience the future of intelligent automation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Calculate ROI
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary Automation Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the automation technologies that will transform your business operations
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solutionindex) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0y: 20 }}
              whileInView={{ opacity: 1y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${solution.color} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group`}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <solution.icon className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-white/80 bg-white/20 px-3 py-1 rounded-full">
                    {solution.roi}
                  </span>
                </div>
                <p className="text-white/90 mb-6 text-lg">{solution.description}</p>
                <div className="space-y-2 mb-6">
                  {solution.features.map((featureidx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-300 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">Impact: {solution.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Stats */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Automation Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {automationStats.map((statindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0scale: 0.8 }}
                whileInView={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Applications */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-12">Industry Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industryindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <industry.icon className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                      {industry.name}
                    </span>
                  </div>
                  <span className="text-green-400 font-bold text-sm">{industry.savings}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{industry.title}</h4>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  {industry.benefits.map((benefitidx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation Features */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-12">Automation Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationFeatures.map((featureindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0y: 20 }}
                whileInView={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-2">
                  {feature.category}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-1">
                  {feature.capabilities.map((capabilityidx) => (
                    <div key={idx} className="text-xs text-gray-400">
                      • {capability}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our automation solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Automation Journey
              <Rocket className="w-5 h-5 ml-2 inline" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedAutomationSolutions2030Showcase;