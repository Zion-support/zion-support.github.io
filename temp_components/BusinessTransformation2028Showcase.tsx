'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  TrendingUp
  DollarSign
  Users
  Zap
  Shield
  Target,
  BarChart3,
  Clock,
  CheckCircle,
  PlayCircle,
  Download,
  ExternalLink,
  Building2,
  Globe,
  Brain,
  Rocket
} from 'lucide-react';

const BusinessTransformation2028Showcase = () => {
  const [activeSolutionsetActiveSolution] = useState('ai-automation');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const solutions = {
    'ai-automation': {
      title: 'AI-Powered Business Automation',
      subtitle: 'Transform your operations with intelligent automation',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      roi: '500%',
      timeToValue: '30 days',
      content: [
        {
          title: 'Autonomous Process Management',
          description: 'AI systems that independently manage complex business processes with minimal human intervention.',
          features: ['End-to-end automation'Self-optimizing workflows'Predictive maintenance'],
          metrics: { efficiency: '+300%'cost: '-60%'time: '-80%' },
          category: 'Process Automation'
        },
        {
          title: 'Intelligent Decision Engine',
          description: 'AI-powered decision support system that analyzes data and provides strategic recommendations.',
          features: ['Real-time analytics'Predictive insights'Risk assessment'],
          metrics: { accuracy: '95%'speed: '+500%'confidence: '98%' },
          category: 'Decision Support'
        },
        {
          title: 'Customer Experience AI',
          description: 'Advanced AI that personalizes customer interactions and anticipates needs.',
          features: ['Personalized experiences'Proactive support'Emotion recognition'],
          metrics: { satisfaction: '+85%'retention: '+70%'revenue: '+45%' },
          category: 'Customer Experience'
        }
      ]
    },
    'quantum-optimization': {
      title: 'Quantum Business Optimization',
      subtitle: 'Leverage quantum computing for complex business problems',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      roi: '1000%',
      timeToValue: '60 days',
      content: [
        {
          title: 'Quantum Supply Chain Optimization',
          description: 'Quantum algorithms that solve complex supply chain problems in real-time.',
          features: ['Multi-variable optimization'Real-time adjustments'Cost minimization'],
          metrics: { efficiency: '+400%'cost: '-50%'delivery: '+90%' },
          category: 'Supply Chain'
        },
        {
          title: 'Quantum Financial Modeling',
          description: 'Advanced financial models powered by quantum computing for risk analysis and portfolio optimization.',
          features: ['Risk assessment'Portfolio optimization'Market prediction'],
          metrics: { accuracy: '+200%'risk: '-75%'returns: '+150%' },
          category: 'Finance'
        },
        {
          title: 'Quantum Resource Allocation',
          description: 'Optimal allocation of resources across multiple projects and departments.',
          features: ['Multi-project optimization'Resource balancing'Priority management'],
          metrics: { utilization: '+80%'efficiency: '+250%'output: '+180%' },
          category: 'Resource Management'
        }
      ]
    },
    'neural-business': {
      title: 'Neural Business Intelligence',
      subtitle: 'Direct brain-computer interfaces for business operations',
      icon: Target,
      color: 'from-pink-600 to-rose-600',
      roi: '800%',
      timeToValue: '45 days',
      content: [
        {
          title: 'Thought-Controlled Analytics',
          description: 'Analyze complex data through direct neural interface for instant insights.',
          features: ['Thought-based queries'Instant visualization'Pattern recognition'],
          metrics: { speed: '+1000%'accuracy: '+95%'insights: '+300%' },
          category: 'Analytics'
        },
        {
          title: 'Neural Team Collaboration',
          description: 'Enhanced team collaboration through shared neural networks and thought synchronization.',
          features: ['Shared mental models'Instant communication'Collective intelligence'],
          metrics: { collaboration: '+400%'creativity: '+250%'productivity: '+180%' },
          category: 'Collaboration'
        },
        {
          title: 'Emotional Business Intelligence',
          description: 'AI that reads and responds to emotional cues in business interactions.',
          features: ['Emotion recognition'Mood analysis'Empathetic responses'],
          metrics: { engagement: '+120%'satisfaction: '+90%'retention: '+65%' },
          category: 'Emotional Intelligence'
        }
      ]
    },
    'future-operations': {
      title: 'Future-Ready Operations',
      subtitle: 'Prepare your business for the next decade',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      roi: '1200%',
      timeToValue: '90 days',
      content: [
        {
          title: 'Autonomous Business Units',
          description: 'Self-managing business units that operate independently with minimal oversight.',
          features: ['Autonomous decision making'Self-optimization'Adaptive strategies'],
          metrics: { autonomy: '95%'efficiency: '+350%'innovation: '+200%' },
          category: 'Autonomous Operations'
        },
        {
          title: 'Predictive Business Modeling',
          description: 'Advanced models that predict future business scenarios and market conditions.',
          features: ['Scenario planning'Market prediction'Risk forecasting'],
          metrics: { accuracy: '92%'preparation: '+400%'advantage: '+300%' },
          category: 'Predictive Analytics'
        },
        {
          title: 'Interplanetary Business Networks',
          description: 'Business operations that span multiple planets and space environments.',
          features: ['Multi-planetary coordination'Space logistics'Universal commerce'],
          metrics: { reach: '∞'efficiency: '+500%'innovation: '+1000%' },
          category: 'Space Commerce'
        }
      ]
    }
  };

  const solutionTabs = [
    { id: 'ai-automation'label: 'AI Automation'icon: Brain },
    { id: 'quantum-optimization'label: 'Quantum Optimization'icon: Zap },
    { id: 'neural-business'label: 'Neural Business'icon: Target },
    { id: 'future-operations'label: 'Future Operations'icon: Rocket }
  ];

  const currentSolution = solutions[activeSolution as keyof typeof solutions];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            <span>Business Transformation 2028</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Business
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leverage cutting-edge AIquantum computingand neural interfaces to revolutionize 
            your business operations and achieve unprecedented growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>500%+ Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>30-90 Day Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Solution Tabs */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {solutionTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSolution(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSolution === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Solution Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0y: 30 }}
            animate={{ opacity: 1y: 0 }}
            exit={{ opacity: 0y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Solution Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                <currentSolution.icon className="w-4 h-4" />
                <span>{currentSolution.title}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentSolution.title}
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                {currentSolution.subtitle}
              </p>

              {/* ROI and Time Metrics */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{currentSolution.roi}</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{currentSolution.timeToValue}</div>
                  <div className="text-sm text-gray-400">Time to Value</div>
                </div>
              </div>
            </div>

            {/* Solution Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentSolution.content.map((solutionindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0y: 30 }}
                  animate={{ opacity: 1y: 0 }}
                  transition={{ duration: 0.5delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Category Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {solution.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <currentSolution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(solution.metrics).map(([keyvalue]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <span>Learn More</span>
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders who are already leveraging these technologies to achieve 
            unprecedented growth and competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Rocket className="w-5 h-5" />
              <span>Start Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Industry Recognition</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Global Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessTransformation2028Showcase;