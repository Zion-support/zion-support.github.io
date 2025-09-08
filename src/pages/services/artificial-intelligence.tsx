import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Zap,
  Target,
  TrendingUp,
  Users,
  Building,
  Database,
  Network,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Code,
  BarChart3,
  Activity,
  Eye,
  Lock,
  Cloud,
  Server,
  CircuitBoard,
  Microscope,
  Flask,
  TestTube,
  Calculator,
  AlertTriangle,
  Security,
  Key,
  Fingerprint,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  Package,
  Settings,
  Terminal,
  Database as DatabaseIcon,
  Layers,
  Box,
  Container,
  FileText,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  RefreshCw,
  RotateCcw,
  Repeat,
  Shuffle,
  Move,
  Copy,
  Edit,
  Trash,
  Save,
  Download,
  Upload,
  Share,
  Link as LinkIcon,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare,
  Video,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Compass,
  Globe as GlobeIcon,
  Map,
  Layers as LayersIcon,
  Grid,
  List,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Wink,
  Zap as ZapIcon,
  Flash,
  Thunder,
  Rain,
  Snow,
  Cloud as CloudIcon,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Tree,
  Leaf,
  Flower,
  Seed,
  Sprout,
  Plant,
  Bug,
  Butterfly,
  Bird,
  Fish,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Sparrow,
  Robin,
  Bluejay,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Swan,
  Goose,
  Duck as DuckIcon,
  Turkey as TurkeyIcon,
  Eagle as EagleIcon,
  Hawk as HawkIcon,
  Owl as OwlIcon,
  Crow as CrowIcon,
  Sparrow as SparrowIcon,
  Robin as RobinIcon,
  Bluejay as BluejayIcon,
  Goldfinch as GoldfinchIcon,
  Hummingbird as HummingbirdIcon,
  Woodpecker as WoodpeckerIcon,
  Seagull as SeagullIcon,
  Pelican as PelicanIcon,
  Swan as SwanIcon,
  Goose as GooseIcon,
  Search as SearchIcon,
  FileSearch,
  Bug as BugIcon,
  Virus,
  Fire,
  Water,
  Mountain,
  Beach,
  Forest,
  Desert,
  Island,
  Volcano,
  Earthquake,
  Tsunami,
  Hurricane,
  Tornado,
  Lightning,
  Rainbow,
  Aurora,
  Eclipse,
  Comet,
  Meteor,
  Asteroid,
  Planet,
  Galaxy,
  Universe,
  Atom,
  Molecule,
  DNA,
  Cell,
  Microscope as MicroscopeIcon,
  Telescope,
  Satellite,
  Rocket,
  Space,
  Time,
  Infinity,
  Pi,
  Sigma,
  Omega,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega as OmegaIcon,
  Bot,
  MessageCircle,
  Command,
  Workflow,
  GitBranch as GitBranchIcon,
  GitCommit as GitCommitIcon,
  GitPullRequest as GitPullRequestIcon,
  GitMerge as GitMergeIcon,
  Package as PackageIcon,
  Settings as SettingsIcon,
  Terminal as TerminalIcon,
  Database as DatabaseIcon2,
  Layers as LayersIcon2,
  Box as BoxIcon,
  Container as ContainerIcon,
  FileText as FileTextIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon,
  TrendingDown as TrendingDownIcon,
  RefreshCw as RefreshCwIcon,
  RotateCcw as RotateCcwIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  Move as MoveIcon,
  Copy as CopyIcon,
  Edit as EditIcon,
  Trash as TrashIcon,
  Save as SaveIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Link as LinkIcon2,
  ExternalLink as ExternalLinkIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MessageSquare as MessageSquareIcon,
  Video as VideoIcon,
  Camera as CameraIcon,
  Image as ImageIcon,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  BookOpen as BookOpenIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
  Navigation as NavigationIcon,
  Compass as CompassIcon,
  Globe as GlobeIcon2,
  Map as MapIcon,
  Layers as LayersIcon3,
  Grid as GridIcon,
  List as ListIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Search as SearchIcon2,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ArrowUp as ArrowUpIcon,
  ArrowDown as ArrowDownIcon,
  ArrowLeft as ArrowLeftIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  AlertCircle as AlertCircleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  MinusCircle as MinusCircleIcon,
  PlusCircle as PlusCircleIcon,
  Circle as CircleIcon,
  Square as SquareIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Star as StarIcon2,
  Heart as HeartIcon2,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Laugh as LaughIcon,
  Cry as CryIcon,
  Wink as WinkIcon,
  Zap as ZapIcon2,
  Flash as FlashIcon,
  Thunder as ThunderIcon,
  Rain as RainIcon,
  Snow as SnowIcon,
  Cloud as CloudIcon2,
  Sun as SunIcon,
  Moon as MoonIcon,
  Sunrise as SunriseIcon,
  Sunset as SunsetIcon,
  Wind as WindIcon,
  Thermometer as ThermometerIcon,
  Droplets as DropletsIcon,
  Umbrella as UmbrellaIcon,
  Tree as TreeIcon,
  Leaf as LeafIcon,
  Flower as FlowerIcon,
  Seed as SeedIcon,
  Sprout as SproutIcon,
  Plant as PlantIcon,
  Bug as BugIcon2,
  Butterfly as ButterflyIcon,
  Bird as BirdIcon,
  Fish as FishIcon,
  Cat as CatIcon,
  Dog as DogIcon,
  Horse as HorseIcon,
  Cow as CowIcon,
  Pig as PigIcon,
  Sheep as SheepIcon,
  Goat as GoatIcon,
  Chicken as ChickenIcon,
  Duck as DuckIcon2,
  Turkey as TurkeyIcon2,
  Eagle as EagleIcon2,
  Hawk as HawkIcon2,
  Owl as OwlIcon2,
  Crow as CrowIcon2,
  Sparrow as SparrowIcon2,
  Robin as RobinIcon2,
  Bluejay as BluejayIcon2,
  Cardinal as CardinalIcon,
  Goldfinch as GoldfinchIcon2,
  Hummingbird as HummingbirdIcon2,
  Woodpecker as WoodpeckerIcon2,
  Seagull as SeagullIcon2,
  Pelican as PelicanIcon2,
  Swan as SwanIcon2,
  Goose as GooseIcon2
} from 'lucide-react';

export function ArtificialIntelligencePage() {
  const aiServices = [
    {
      category: 'Machine Learning & AI Development',
      services: [
        {
          name: 'Custom AI Models',
          description: 'Develop tailored machine learning models for your specific needs',
          icon: Brain,
          href: '/services/custom-ai-models',
          features: ['Model Development', 'Training & Optimization', 'Deployment', 'Maintenance']
        },
        {
          name: 'Natural Language Processing',
          description: 'AI-powered text and language understanding solutions',
          icon: MessageCircle,
          href: '/services/natural-language-processing',
          features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Chatbots']
        },
        {
          name: 'Computer Vision',
          description: 'AI systems for image and video analysis',
          icon: Eye,
          href: '/services/computer-vision',
          features: ['Image Recognition', 'Object Detection', 'Video Analysis', 'Quality Control']
        }
      ]
    },
    {
      category: 'AI Infrastructure & Platforms',
      services: [
        {
          name: 'AI Platform Development',
          description: 'Build scalable AI platforms and infrastructure',
          icon: Server,
          href: '/services/ai-platform-development',
          features: ['Scalable Architecture', 'Model Serving', 'Data Pipeline', 'Monitoring']
        },
        {
          name: 'MLOps & Model Management',
          description: 'Streamline machine learning operations and model lifecycle',
          icon: Workflow,
          href: '/services/mlops-model-management',
          features: ['Model Versioning', 'Automated Training', 'Deployment Pipeline', 'Performance Monitoring']
        },
        {
          name: 'AI Cloud Solutions',
          description: 'Cloud-based AI services and infrastructure',
          icon: Cloud,
          href: '/services/ai-cloud-solutions',
          features: ['Cloud AI Services', 'Scalable Computing', 'Cost Optimization', 'Security']
        }
      ]
    },
    {
      category: 'AI Applications & Solutions',
      services: [
        {
          name: 'Predictive Analytics',
          description: 'AI-powered forecasting and predictive modeling',
          icon: TrendingUp,
          href: '/services/predictive-analytics',
          features: ['Data Analysis', 'Forecasting Models', 'Risk Assessment', 'Business Intelligence']
        },
        {
          name: 'Process Automation',
          description: 'Intelligent automation using AI and RPA',
          icon: Bot,
          href: '/services/process-automation',
          features: ['Workflow Automation', 'Document Processing', 'Decision Support', 'Efficiency Optimization']
        },
        {
          name: 'AI-Powered Analytics',
          description: 'Advanced analytics and business intelligence with AI',
          icon: BarChart3,
          href: '/services/ai-powered-analytics',
          features: ['Data Mining', 'Pattern Recognition', 'Insight Generation', 'Visualization']
        }
      ]
    },
    {
      category: 'AI Consulting & Strategy',
      services: [
        {
          name: 'AI Strategy & Roadmap',
          description: 'Develop comprehensive AI adoption strategies',
          icon: Target,
          href: '/services/ai-strategy-roadmap',
          features: ['Technology Assessment', 'Implementation Planning', 'ROI Analysis', 'Change Management']
        },
        {
          name: 'AI Ethics & Governance',
          description: 'Ensure responsible and ethical AI implementation',
          icon: Shield,
          href: '/services/ai-ethics-governance',
          features: ['Bias Detection', 'Fairness Assessment', 'Transparency', 'Compliance']
        },
        {
          name: 'AI Training & Education',
          description: 'Train your team on AI technologies and best practices',
          icon: Users,
          href: '/services/ai-training-education',
          features: ['Technical Training', 'Best Practices', 'Hands-on Workshops', 'Ongoing Support']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Data-driven insights and predictive analytics'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI technology'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Unlock new possibilities and business models'
    }
  ];

  const technologies = [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision',
    'Neural Networks', 'TensorFlow', 'PyTorch', 'Scikit-learn',
    'Cloud AI Services', 'Edge AI', 'Federated Learning', 'AutoML'
  ];

  const industries = [
    {
      industry: 'Healthcare',
      applications: ['Medical Imaging', 'Drug Discovery', 'Patient Care', 'Diagnostic Support']
    },
    {
      industry: 'Finance',
      applications: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Customer Service']
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation']
    },
    {
      industry: 'Retail',
      applications: ['Personalization', 'Inventory Management', 'Demand Forecasting', 'Customer Analytics']
    }
  ];

  const aiCapabilities = [
    'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Transfer Learning',
    'Natural Language Generation', 'Speech Recognition', 'Image Generation', 'Anomaly Detection',
    'Recommendation Systems', 'Time Series Analysis', 'Clustering', 'Classification'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning 
              to intelligent automation, we're building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200 font-medium"
              >
                View AI Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Artificial Intelligence is revolutionizing industries by enabling automation, 
              improving decision-making, and unlocking new business opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive AI portfolio covers development, infrastructure, applications, 
              and strategic consulting to accelerate your AI journey.
            </p>
          </motion.div>

          <div className="space-y-12">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center space-x-3">
                  <Brain className="w-6 h-6" />
                  <span>{category.category}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI is transforming industries across the board. Discover how our solutions 
              can revolutionize your specific sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{industry.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industry.applications.map((application, applicationIndex) => (
                    <div key={applicationIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI expertise spans the full spectrum of machine learning and artificial 
              intelligence technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Technologies & Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the latest AI technologies, frameworks, and tools to deliver 
              cutting-edge solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the AI revolution and discover how artificial intelligence can transform 
              your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200 font-medium"
              >
                View AI Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ArtificialIntelligencePage;