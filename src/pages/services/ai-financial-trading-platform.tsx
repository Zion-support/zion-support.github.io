import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  TrendingUp,
  BarChart3,
  Shield,
  Cpu,
  Activity,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Database,
  Clock,
  Users,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Download,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertCircle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  BookOpen,
  Code,
  Server,
  Cloud,
  Lock,
  Eye,
  EyeOff,
  RefreshCw,
  Save,
  Share2,
  Copy,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Edit,
  Trash2,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Image,
  Video,
  Music,
  File,
  Folder,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  WifiOff,
  BluetoothOff,
  BatteryCharging,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalOff,
  WifiHigh,
  WifiMedium,
  WifiLow,
  WifiOff2,
  BluetoothHigh,
  BluetoothMedium,
  BluetoothLow,
  BluetoothOff2,
  BatteryHigh,
  BatteryMedium,
  BatteryLow,
  BatteryEmpty,
  BatteryCharging2,
  BatteryFull,
  BatteryHalf,
  BatteryQuarter,
  BatteryThreeQuarters,
  BatteryEmpty2,
  BatteryCharging3,
  BatteryFull2,
  BatteryHalf2,
  BatteryQuarter2,
  BatteryThreeQuarters2,
  DollarSign,
  Coins,
  Wallet,
  CreditCard,
  PiggyBank,
  Banknote,
  Receipt,
  Calculator,
  PieChart,
  LineChart,
  CandlestickChart,
  AreaChart,
  ScatterChart,
  RadarChart,
  HeatMap,
  TreeMap,
  FunnelChart,
  GaugeChart,
  WaterfallChart,
  BoxPlot,
  ViolinPlot,
  Histogram,
  DensityPlot,
  CorrelationMatrix,
  NetworkGraph,
  SankeyDiagram,
  ChordDiagram,
  SunburstChart,
  TreemapChart,
  VoronoiDiagram,
  DelaunayTriangulation,
  ConvexHull,
  MinimumSpanningTree,
  ShortestPath,
  MaximumFlow,
  MinimumCut,
  Matching,
  Coloring,
  Clustering,
  Classification,
  Regression,
  DimensionalityReduction,
  FeatureSelection,
  ModelSelection,
  CrossValidation,
  HyperparameterTuning,
  EnsembleMethods,
  DeepLearning,
  NeuralNetworks,
  ConvolutionalNeuralNetworks,
  RecurrentNeuralNetworks,
  LongShortTermMemory,
  GatedRecurrentUnit,
  Transformer,
  AttentionMechanism,
  SelfAttention,
  MultiHeadAttention,
  PositionalEncoding,
  LayerNormalization,
  Dropout,
  BatchNormalization,
  ResidualConnections,
  SkipConnections,
  DenseConnections,
  HighwayNetworks,
  ResNet,
  DenseNet,
  Inception,
  VGG,
  AlexNet,
  LeNet,
  MobileNet,
  EfficientNet,
  YOLO,
  RCNN,
  FastRCNN,
  FasterRCNN,
  MaskRCNN,
  SSD,
  RetinaNet,
  FPN,
  PANet,
  BiFPN,
  NASNet,
  AutoML,
  NeuralArchitectureSearch,
  HyperparameterOptimization,
  MetaLearning,
  FewShotLearning,
  ZeroShotLearning,
  TransferLearning,
  DomainAdaptation,
  AdversarialTraining,
  GenerativeAdversarialNetworks,
  VariationalAutoencoders,
  FlowBasedModels,
  DiffusionModels,
  EnergyBasedModels,
  ScoreBasedModels,
  DenoisingScoreMatching,
  SlicedScoreMatching,
  LangevinDynamics,
  HamiltonianMonteCarlo,
  MetropolisHastings,
  GibbsSampling,
  ImportanceSampling,
  RejectionSampling,
  SequentialMonteCarlo,
  ParticleFiltering,
  KalmanFilter,
  ExtendedKalmanFilter,
  UnscentedKalmanFilter,
  ParticleFilter,
  EnsembleKalmanFilter,
  VariationalInference,
  ExpectationMaximization,
  ExpectationPropagation,
  BeliefPropagation,
  MessagePassing,
  JunctionTree,
  FactorGraph,
  BayesianNetwork,
  MarkovChain,
  HiddenMarkovModel,
  ConditionalRandomField,
  MaximumEntropy,
  LogisticRegression,
  SupportVectorMachine,
  RandomForest,
  GradientBoosting,
  XGBoost,
  LightGBM,
  CatBoost,
  AdaBoost,
  NaiveBayes,
  KNearestNeighbors,
  KMeans,
  HierarchicalClustering,
  DBSCAN,
  SpectralClustering,
  PrincipalComponentAnalysis,
  IndependentComponentAnalysis,
  FactorAnalysis,
  CanonicalCorrelationAnalysis,
  LinearDiscriminantAnalysis,
  QuadraticDiscriminantAnalysis,
  FisherDiscriminantAnalysis,
  MultipleDiscriminantAnalysis,
  KernelMethods,
  RadialBasisFunction,
  PolynomialKernel,
  SigmoidKernel,
  LaplacianKernel,
  ChiSquareKernel,
  HistogramIntersectionKernel,
  StringKernel,
  GraphKernel,
  TreeKernel,
  ConvolutionalKernel,
  RecurrentKernel,
  AttentionKernel,
  TransformerKernel,
  NeuralKernel,
  DeepKernel,
  MultiTaskLearning,
  MultiLabelLearning,
  MultiInstanceLearning,
  SemiSupervisedLearning,
  ActiveLearning,
  ReinforcementLearning,
  QLearning,
  SARSA,
  ActorCritic,
  PolicyGradient,
  REINFORCE,
  A3C,
  A2C,
  PPO,
  TRPO,
  DDPG,
  TD3,
  SAC,
  SoftQ,
  MaximumEntropyRL,
  InverseRL,
  ImitationLearning,
  BehavioralCloning,
  GenerativeAdversarialImitationLearning,
  AdversarialInverseRL,
  MetaRL,
  HierarchicalRL,
  MultiAgentRL,
  GameTheory,
  NashEquilibrium,
  Minimax,
  AlphaZero,
  AlphaGo,
  AlphaStar,
  MuZero,
  EfficientZero,
  Dreamer,
  WorldModels,
  ModelBasedRL,
  ModelFreeRL,
  OnPolicyRL,
  OffPolicyRL,
  OnlineRL,
  OfflineRL,
  BatchRL,
  ContinuousRL,
  DiscreteRL,
  MultiDiscreteRL,
  BoxRL,
  DiscreteBoxRL,
  MultiDiscreteBoxRL,
  TupleRL,
  DictRL,
  NestedRL,
  FlatRL,
  HierarchicalRL2,
  MultiLevelRL,
  LayeredRL,
  ModularRL,
  CompositionalRL,
  DecomposableRL,
  FactorizedRL,
  StructuredRL,
  RelationalRL,
  LogicalRL,
  SymbolicRL,
  NeurosymbolicRL,
  HybridRL,
  IntegratedRL,
  UnifiedRL,
  HolisticRL,
  SystemicRL,
  EmergentRL,
  SelfOrganizingRL,
  AdaptiveRL,
  EvolutionaryRL,
  GeneticRL,
  CoevolutionaryRL,
  CompetitiveRL,
  CooperativeRL,
  CollaborativeRL,
  CoordinatedRL,
  SynchronizedRL,
  SynchronizedRL2,
  SynchronizedRL3,
  SynchronizedRL4,
  SynchronizedRL5,
  SynchronizedRL6,
  SynchronizedRL7,
  SynchronizedRL8,
  SynchronizedRL9,
  SynchronizedRL10
} from 'lucide-react';

export default function AIFinancialTradingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Trading",
      description: "Advanced machine learning algorithms for predictive trading strategies",
      benefits: ["Real-time market analysis", "Pattern recognition", "Risk assessment", "Automated decision making"]
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive trading performance metrics and insights",
      benefits: ["Portfolio tracking", "Performance benchmarking", "Risk metrics", "ROI analysis"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk management and compliance tools",
      benefits: ["Position sizing", "Stop-loss management", "Compliance monitoring", "Audit trails"]
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-low latency trading execution systems",
      benefits: ["Microsecond execution", "Market making", "Arbitrage opportunities", "Real-time data feeds"]
    }
  ];

  const useCases = [
    {
      title: "Institutional Trading",
      description: "Professional trading solutions for hedge funds and investment firms",
      icon: Users,
      examples: ["Portfolio management", "Algorithmic trading", "Risk management", "Compliance reporting"]
    },
    {
      title: "Retail Trading",
      description: "User-friendly trading platform for individual investors",
      icon: Phone,
      examples: ["Mobile trading", "Educational tools", "Social trading", "Paper trading"]
    },
    {
      title: "Quantitative Research",
      description: "Advanced research tools for quantitative analysts",
      icon: Code,
      examples: ["Backtesting", "Strategy development", "Data analysis", "Model validation"]
    },
    {
      title: "Market Making",
      description: "Automated market making and liquidity provision",
      icon: Activity,
      examples: ["Bid-ask spreads", "Liquidity management", "Inventory control", "P&L optimization"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for individual traders and small portfolios",
      features: [
        "Basic AI trading signals",
        "Real-time market data",
        "Portfolio tracking",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for active traders and growing portfolios",
      features: [
        "Advanced AI algorithms",
        "Custom trading strategies",
        "Risk management tools",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Multi-asset trading",
        "Backtesting platform"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For institutional clients and large portfolios",
      features: [
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "SLA guarantees",
        "Custom integrations",
        "Advanced compliance",
        "Multi-user access",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime', icon: CheckCircle },
    { number: '<1ms', label: 'Execution Time', icon: Zap },
    { number: '1000+', label: 'Trading Pairs', icon: TrendingUp },
    { number: '24/7', label: 'Trading', icon: Clock }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us an email'
    },
    {
      icon: MapPin,
      text: 'Middletown, DE 19709',
      href: 'https://maps.google.com/?q=Middletown,DE',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Hot New Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Financial Trading Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your trading with AI-powered algorithms, real-time analytics, and automated risk management. Trade smarter, faster, and more profitably.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold"
              >
                Start Trading
              </Link>
              <Link
                to="/demo"
                className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Trading Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered trading platform combines cutting-edge machine learning with institutional-grade infrastructure to deliver superior trading performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Trading Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive trading solutions designed for different types of traders and investment strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <ul className="space-y-2 text-left">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Trading Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of traders at every level, from beginners to professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 bg-slate-800/70' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start AI Trading?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to learn how AI-powered trading can transform your investment strategy and maximize your returns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <contact.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-semibold mb-2">{contact.text}</span>
                  <span className="text-gray-400 text-sm">{contact.description}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold"
              >
                Start AI Trading
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}