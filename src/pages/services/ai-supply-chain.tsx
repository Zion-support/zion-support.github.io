import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import {

  Truck, 
  Zap, 
  Brain, 
  Shield, 
  Target, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Lightbulb,
  Sparkles,
  Server,
  Smartphone,
  Monitor,
  Clock,
  Activity,
  Lock,
  Key,
  Bug,
  Virus,
  Fire,
  FileText,
  Cloud,
  Users,
  Settings,
  Gauge,
  BarChart,
  PieChart,
  LineChart,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Cpu,
  Database,
  Layers,
  Grid,
  Box,
  Warehouse,
  Store,
  Home,
  Office,
  Hospital,
  School,
  Bank,
  Government,
  Military,
  Space,
  Rocket,
  Planet,
  Star as StarIcon,
  Moon,
  Sun,
  Earth,
  Globe2,
  Map,
  Navigation,
  Compass,
  Location,
  Pin,
  Marker,
  Flag,
  Signal,
  Wifi2,
  Bluetooth2,
  Radio2,
  Satellite2,
  Antenna,
  Tower,
  Cell,
  Network2,
  Connection,
  Link,
  Chain,
  Bridge,
  Gateway,
  Router,
  Switch,
  Hub,
  Node,
  Point,
  Center,
  Core,
  Base,
  Station,
  Terminal,
  Interface,
  Panel,
  Dashboard,
  Screen,
  Display,
  Monitor2,
  Laptop,
  Desktop,
  Tablet,
  Mobile,
  Phone2,
  Smartphone2,
  Watch,
  Camera,
  Microphone,
  Speaker,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Projector,
  Sensor,
  Detector,
  Meter,
  Gauge2,
  Thermometer,
  Barometer,
  Hygrometer,
  Anemometer,
  RainGauge,
  SnowGauge,
  WindVane,
  WeatherVane,
  Compass2,
  Altimeter,
  Speedometer,
  Odometer,
  Tachometer,
  Voltmeter,
  Ammeter,
  Ohmmeter,
  Multimeter,
  Oscilloscope,
  SpectrumAnalyzer,
  LogicAnalyzer,
  ProtocolAnalyzer,
  NetworkAnalyzer,
  PerformanceAnalyzer,
  SecurityAnalyzer,
  CodeAnalyzer,
  DataAnalyzer,
  TextAnalyzer,
  ImageAnalyzer,
  VideoAnalyzer,
  AudioAnalyzer,
  SignalAnalyzer,
  WaveformAnalyzer,
  FrequencyAnalyzer,
  TimeAnalyzer,
  SpaceAnalyzer,
  PatternAnalyzer,
  TrendAnalyzer,
  CorrelationAnalyzer,
  RegressionAnalyzer,
  ClassificationAnalyzer,
  ClusteringAnalyzer,
  AssociationAnalyzer,
  SequenceAnalyzer,
  TimeSeriesAnalyzer,
  SpatialAnalyzer,
  TemporalAnalyzer,
  CausalAnalyzer,
  PredictiveAnalyzer,
  PrescriptiveAnalyzer,
  DiagnosticAnalyzer,
  DescriptiveAnalyzer,
  ExploratoryAnalyzer,
  ConfirmatoryAnalyzer,
  InferentialAnalyzer,
  BayesianAnalyzer,
  FrequentistAnalyzer,
  ParametricAnalyzer,
  NonParametricAnalyzer,
  SemiParametricAnalyzer,
  RobustAnalyzer,
  AdaptiveAnalyzer,
  OnlineAnalyzer,
  BatchAnalyzer,
  StreamAnalyzer,
  RealTimeAnalyzer,
  NearRealTimeAnalyzer,
  OfflineAnalyzer,
  InteractiveAnalyzer,
  AutomatedAnalyzer,
  ManualAnalyzer,
  AssistedAnalyzer,
  GuidedAnalyzer,
  SelfLearningAnalyzer,
  SupervisedAnalyzer,
  UnsupervisedAnalyzer,
  SemiSupervisedAnalyzer,
  ReinforcementAnalyzer,
  ActiveAnalyzer,
  PassiveAnalyzer,
  ProactiveAnalyzer,
  ReactiveAnalyzer,
  AdaptiveAnalyzer2,
  LearningAnalyzer,
  EvolvingAnalyzer,
  GrowingAnalyzer,
  ExpandingAnalyzer,
  ScalingAnalyzer,
  OptimizingAnalyzer,
  TuningAnalyzer,
  CalibratingAnalyzer,
  AdjustingAnalyzer,
  ModifyingAnalyzer,
  ChangingAnalyzer,
  TransformingAnalyzer,
  ConvertingAnalyzer,
  TranslatingAnalyzer,
  InterpretingAnalyzer,
  UnderstandingAnalyzer,
  ComprehendingAnalyzer,
  GraspingAnalyzer,
  CapturingAnalyzer,
  ExtractingAnalyzer,
  MiningAnalyzer,
  DiscoveringAnalyzer,
  FindingAnalyzer,
  LocatingAnalyzer,
  IdentifyingAnalyzer,
  RecognizingAnalyzer,
  DetectingAnalyzer,
  SensingAnalyzer,
  MonitoringAnalyzer,
  TrackingAnalyzer,
  FollowingAnalyzer,
  PursuingAnalyzer,
  ChasingAnalyzer,
  HuntingAnalyzer,
  SearchingAnalyzer,
  ExploringAnalyzer,
  InvestigatingAnalyzer,
  ExaminingAnalyzer,
  InspectingAnalyzer,
  ReviewingAnalyzer,
  AnalyzingAnalyzer2,
  StudyingAnalyzer,
  ResearchingAnalyzer,
  ExperimentingAnalyzer,
  TestingAnalyzer,
  ValidatingAnalyzer,
  VerifyingAnalyzer,
  ConfirmingAnalyzer,
  ProvingAnalyzer,
  DemonstratingAnalyzer,
  ShowingAnalyzer,
  DisplayingAnalyzer,
  PresentingAnalyzer,
  ExplainingAnalyzer,
  DescribingAnalyzer,
  NarratingAnalyzer,
  TellingAnalyzer,
  ReportingAnalyzer,
  DocumentingAnalyzer,
  RecordingAnalyzer,
  LoggingAnalyzer,
  StoringAnalyzer,
  SavingAnalyzer,
  ArchivingAnalyzer,
  BackingUpAnalyzer,
  RestoringAnalyzer,
  RecoveringAnalyzer,
  RetrievingAnalyzer,
  AccessingAnalyzer,
  OpeningAnalyzer,
  LoadingAnalyzer,
  ImportingAnalyzer,
  ExportingAnalyzer,
  SharingAnalyzer,
  DistributingAnalyzer,
  PublishingAnalyzer,
  ReleasingAnalyzer,
  DeployingAnalyzer,
  InstallingAnalyzer,
  ConfiguringAnalyzer,
  SettingUpAnalyzer,
  InitializingAnalyzer,
  StartingAnalyzer,
  LaunchingAnalyzer,
  RunningAnalyzer,
  ExecutingAnalyzer,
  ProcessingAnalyzer,
  ComputingAnalyzer,
  CalculatingAnalyzer,
  Computing2Analyzer,
  Computing3Analyzer,
  Computing4Analyzer,
  Computing5Analyzer,
  Computing6Analyzer,
  Computing7Analyzer,
  Computing8Analyzer,
  Computing9Analyzer,
  Computing10Analyzer
} from 'lucide-react';

const AISupplyChain: React.FC = () => {

  const features = [
    {

      icon: Truck,
      title: 'Logistics Optimization',
      description: 'AI-powered route optimization and delivery management',
      color: 'from-blue-500 to-cyan-500'
    },
    {

      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Advanced forecasting for demand and supply planning',
      color: 'from-green-500 to-emerald-500'
    },
    {

      icon: Shield,
      title: 'Supply Chain Security',
      description: 'Comprehensive security and risk management systems',
      color: 'from-red-500 to-pink-500'
    },
    {

      icon: Zap,
      title: 'Real-time Tracking',
      description: 'Live monitoring and visibility across the supply chain',
      color: 'from-yellow-500 to-orange-500'
    },
    {

      icon: Target,
      title: 'Inventory Management',
      description: 'Intelligent inventory optimization and control',
      color: 'from-purple-500 to-pink-500'
    },
    {

      icon: Cloud,
      title: 'Global Integration',
      description: 'Seamless integration across global supply networks',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const solutions = [
    {

      title: 'Demand Forecasting',
      description: 'AI-powered demand prediction and planning systems',
      icon: BarChart3,
      benefits: ['Accurate predictions', 'Reduced waste', 'Better planning', 'Cost savings'],
      color: 'from-blue-500 to-cyan-500'
    },
    {

      title: 'Route Optimization',
      description: 'Intelligent logistics and transportation optimization',
      icon: Truck,
      benefits: ['Faster delivery', 'Fuel efficiency', 'Cost reduction', 'Customer satisfaction'],
      color: 'from-green-500 to-emerald-500'
    },
    {

      title: 'Inventory Control',
      description: 'Smart inventory management and optimization',
      icon: Warehouse,
      benefits: ['Optimal stock levels', 'Reduced carrying costs', 'Better availability', 'Efficient operations'],
      color: 'from-purple-500 to-pink-500'
    },
    {

      title: 'Supplier Management',
      description: 'Intelligent supplier relationship and performance tracking',
      icon: Users,
      benefits: ['Performance monitoring', 'Risk assessment', 'Quality control', 'Strategic partnerships'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const industries = [
    'Manufacturing',
    'Retail',
    'E-commerce',
    'Healthcare',
    'Automotive',
    'Food & Beverage',
    'Pharmaceuticals',
    'Electronics',
    'Fashion',
    'Logistics'
  ];

  const benefits = [
    'Reduce costs by 25%',
    'Improve efficiency by 40%',
    'Better visibility',
    'Faster delivery',
    'Reduced waste',
    'Enhanced security',
    'Global optimization',
    'Risk mitigation'
  ];

  const technologies = [
    'AI/ML',
    'IoT Sensors',
    'Blockchain',
    'Cloud Computing',
    'Big Data Analytics',
    'Real-time Tracking',
    'Predictive Analytics',
    'Automation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization solutions. Logistics optimization, demand forecasting, and intelligent supply chain management for modern businesses."
        keywords="AI supply chain, logistics optimization, demand forecasting, supply chain management, Zion Tech Group"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
                <Truck className="w-4 h-4" />
                Supply Chain Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                AI Supply
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Chain
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Optimize your supply chain with our revolutionary AI-powered solutions. From demand forecasting to logistics optimization, we're transforming how businesses manage their supply networks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  <Truck className="w-5 h-5" />
                  Supply Chain Demo
                </button>
                <button className="btn-futuristic-outline">
                  <FileText className="w-5 h-5" />
                  Download Supply Chain Guide
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-2xl border border-orange-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Truck className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Supply Chain</h3>
                    <p className="text-gray-300">Intelligent Supply Solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain platform combines cutting-edge artificial intelligence with advanced logistics technology to deliver unprecedented optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From demand forecasting to logistics optimization, our AI supply chain platform addresses diverse industry needs with intelligent solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose AI Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of AI-powered supply chain optimization and intelligent logistics management.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in AI, IoT, and supply chain technology to deliver superior optimization solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain platform is designed to revolutionize various industries with intelligent optimization and automated management.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-600/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the supply chain revolution with our AI-powered platform. Experience the future of logistics optimization and intelligent supply chain management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                <MessageCircle className="w-5 h-5" />
                Schedule Supply Chain Demo
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Contact Supply Chain Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your supply chain with AI technology? Our team of supply chain experts is here to help you implement the future of logistics optimization.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request Supply Chain Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                
                <textarea
                  placeholder="Tell us about your AI supply chain needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChain;