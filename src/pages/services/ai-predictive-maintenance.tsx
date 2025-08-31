import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  Wrench,
  BarChart3,
  Shield,
  Cloud,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
  Target,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Download,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  BookOpen,
  Code,
  FileText,
  Activity as ActivityIcon,
  Layers,
  GitBranch,
  Key,
  Building2,
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

export default function AIPredictiveMaintenance() {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and notifications."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Smart Maintenance Scheduling",
      description: "Intelligent scheduling that optimizes maintenance windows and reduces downtime."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into equipment performance, trends, and optimization opportunities."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control, audit trails, and compliance features."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient infrastructure that grows with your business needs."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small facilities",
      features: [
        "Up to 50 equipment assets",
        "Basic predictive analytics",
        "Standard monitoring",
        "Email support",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing operations",
      features: [
        "Up to 200 equipment assets",
        "Advanced AI predictions",
        "Custom dashboards",
        "Priority support",
        "Unlimited team members",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited equipment assets",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "On-premise option",
        "Custom SLA",
        "Training & consultation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Reduce Downtime",
      description: "Prevent unexpected failures and reduce unplanned downtime by up to 90%"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Optimize Maintenance",
      description: "AI-driven scheduling reduces maintenance costs by 25-30%"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Extend Equipment Life",
      description: "Proactive maintenance extends equipment lifespan by 20-40%"
    },
    {
      icon: <Activity className="w-8 h-8 text-cyan-500" />,
      title: "Real-time Insights",
      description: "Instant visibility into equipment health and performance metrics"
    }
  ];

  const stats = [
    { number: '90%', label: 'Reduced Downtime', icon: TrendingUp },
    { number: '30%', label: 'Lower Maintenance Costs', icon: DollarSign },
    { number: '99.9%', label: 'Uptime', icon: CheckCircle },
    { number: '24/7', label: 'Monitoring', icon: Monitor }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Activity className="w-4 h-4 mr-2" />
              AI Predictive Maintenance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Predictive Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your maintenance operations with intelligent AI that predicts equipment failures before they happen, reducing downtime and costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold"
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive predictive maintenance platform powered by artificial intelligence and IoT sensors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered predictive maintenance and proactive equipment management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {benefit.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of facilities of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular
                    ? 'border-purple-500 bg-slate-800/70'
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
                Ready to Transform Your Maintenance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to learn how AI-powered predictive maintenance can revolutionize your operations.
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
                  <contact.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
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
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold"
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