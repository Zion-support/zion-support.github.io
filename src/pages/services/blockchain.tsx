import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Link as LinkIcon,
  Zap,
  Target,
  TrendingUp,
  Users,
  Building,
  Cpu,
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
  Brain,
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
  Goose as GooseIcon2,
  Coins,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingUp as TrendingUpIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon3,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Activity as ActivityIcon,
  Eye as EyeIcon2,
  Lock as LockIcon2,
  Cloud as CloudIcon3,
  Server as ServerIcon,
  Brain as BrainIcon,
  CircuitBoard as CircuitBoardIcon,
  Microscope as MicroscopeIcon2,
  Flask as FlaskIcon,
  TestTube as TestTubeIcon,
  Calculator as CalculatorIcon,
  AlertTriangle as AlertTriangleIcon,
  Security as SecurityIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Monitor as MonitorIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Smartphone as SmartphoneIcon,
  GitBranch as GitBranchIcon2,
  GitCommit as GitCommitIcon2,
  GitPullRequest as GitPullRequestIcon2,
  GitMerge as GitMergeIcon2,
  Package as PackageIcon2,
  Settings as SettingsIcon2,
  Terminal as TerminalIcon2,
  Database as DatabaseIcon3,
  Layers as LayersIcon4,
  Box as BoxIcon2,
  Container as ContainerIcon2,
  FileText as FileTextIcon2,
  PieChart as PieChartIcon2,
  LineChart as LineChartIcon2,
  BarChart as BarChartIcon2,
  TrendingDown as TrendingDownIcon2,
  RefreshCw as RefreshCwIcon2,
  RotateCcw as RotateCcwIcon2,
  Repeat as RepeatIcon2,
  Shuffle as ShuffleIcon2,
  Move as MoveIcon2,
  Copy as CopyIcon2,
  Edit as EditIcon2,
  Trash as TrashIcon2,
  Save as SaveIcon2,
  Download as DownloadIcon2,
  Upload as UploadIcon2,
  Share as ShareIcon2,
  Link as LinkIcon3,
  ExternalLink as ExternalLinkIcon2,
  Mail as MailIcon2,
  Phone as PhoneIcon2,
  MessageSquare as MessageSquareIcon2,
  Video as VideoIcon2,
  Camera as CameraIcon2,
  Image as ImageIcon2,
  File as FileIcon2,
  Folder as FolderIcon2,
  Archive as ArchiveIcon2,
  BookOpen as BookOpenIcon2,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  MapPin as MapPinIcon2,
  Navigation as NavigationIcon2,
  Compass as CompassIcon2,
  Globe as GlobeIcon3,
  Map as MapIcon2,
  Layers as LayersIcon5,
  Grid as GridIcon2,
  List as ListIcon2,
  Menu as MenuIcon2,
  MoreHorizontal as MoreHorizontalIcon2,
  MoreVertical as MoreVerticalIcon2,
  Plus as PlusIcon2,
  Minus as MinusIcon2,
  X as XIcon2,
  Search as SearchIcon3,
  Filter as FilterIcon2,
  SortAsc as SortAscIcon2,
  SortDesc as SortDescIcon2,
  ChevronUp as ChevronUpIcon2,
  ChevronDown as ChevronDownIcon2,
  ChevronLeft as ChevronLeftIcon2,
  ChevronRight as ChevronRightIcon2,
  ArrowUp as ArrowUpIcon2,
  ArrowDown as ArrowDownIcon2,
  ArrowLeft as ArrowLeftIcon2,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon2,
  AlertCircle as AlertCircleIcon2,
  CheckCircle2 as CheckCircle2Icon2,
  XCircle as XCircleIcon2,
  MinusCircle as MinusCircleIcon2,
  PlusCircle as PlusCircleIcon2,
  Circle as CircleIcon2,
  Square as SquareIcon2,
  Triangle as TriangleIcon2,
  Hexagon as HexagonIcon2,
  Octagon as OctagonIcon2,
  Star as StarIcon4,
  Heart as HeartIcon3,
  ThumbsUp as ThumbsUpIcon2,
  ThumbsDown as ThumbsDownIcon2,
  Smile as SmileIcon2,
  Frown as FrownIcon2,
  Meh as MehIcon2,
  Laugh as LaughIcon2,
  Cry as CryIcon2,
  Wink as WinkIcon2,
  Zap as ZapIcon3,
  Flash as FlashIcon2,
  Thunder as ThunderIcon2,
  Rain as RainIcon2,
  Snow as SnowIcon2,
  Cloud as CloudIcon4,
  Sun as SunIcon2,
  Moon as MoonIcon2,
  Sunrise as SunriseIcon2,
  Sunset as SunsetIcon2,
  Wind as WindIcon2,
  Thermometer as ThermometerIcon2,
  Droplets as DropletsIcon2,
  Umbrella as UmbrellaIcon2,
  Tree as TreeIcon2,
  Leaf as LeafIcon2,
  Flower as FlowerIcon2,
  Seed as SeedIcon2,
  Sprout as SproutIcon2,
  Plant as PlantIcon2,
  Bug as BugIcon3,
  Butterfly as ButterflyIcon2,
  Bird as BirdIcon2,
  Fish as FishIcon2,
  Cat as CatIcon2,
  Dog as DogIcon2,
  Horse as HorseIcon2,
  Cow as CowIcon2,
  Pig as PigIcon2,
  Sheep as SheepIcon2,
  Goat as GoatIcon2,
  Chicken as ChickenIcon2,
  Duck as DuckIcon3,
  Turkey as TurkeyIcon3,
  Eagle as EagleIcon3,
  Hawk as HawkIcon3,
  Owl as OwlIcon3,
  Crow as CrowIcon3,
  Sparrow as SparrowIcon3,
  Robin as RobinIcon3,
  Bluejay as BluejayIcon3,
  Cardinal as CardinalIcon2,
  Goldfinch as GoldfinchIcon3,
  Hummingbird as HummingbirdIcon3,
  Woodpecker as WoodpeckerIcon3,
  Seagull as SeagullIcon3,
  Pelican as PelicanIcon3,
  Swan as SwanIcon3,
  Goose as GooseIcon3,
  AppWindow
} from 'lucide-react';

export function BlockchainPage() {
  const blockchainServices = [
    {
      category: 'Blockchain Development',
      services: [
        {
          name: 'Smart Contract Development',
          description: 'Secure and audited smart contracts for various use cases',
          icon: Code,
          href: '/services/smart-contract-development',
          features: ['Contract Design', 'Security Auditing', 'Testing & Deployment', 'Maintenance']
        },
        {
          name: 'DApp Development',
          description: 'Decentralized applications built on blockchain technology',
          icon: AppWindow,
          href: '/services/dapp-development',
          features: ['Frontend Development', 'Backend Integration', 'User Experience', 'Deployment']
        },
        {
          name: 'Blockchain Infrastructure',
          description: 'Build and deploy custom blockchain networks',
          icon: Network,
          href: '/services/blockchain-infrastructure',
          features: ['Network Design', 'Consensus Mechanisms', 'Node Management', 'Scalability']
        }
      ]
    },
    {
      category: 'DeFi & Financial Solutions',
      services: [
        {
          name: 'DeFi Protocol Development',
          description: 'Decentralized finance protocols and applications',
          icon: Coins,
          href: '/services/defi-protocol-development',
          features: ['Lending Platforms', 'DEX Development', 'Yield Farming', 'Risk Management']
        },
        {
          name: 'Token Development',
          description: 'Custom token creation and management systems',
          icon: Wallet,
          href: '/services/token-development',
          features: ['Token Standards', 'Minting & Burning', 'Distribution', 'Governance']
        },
        {
          name: 'Payment Solutions',
          description: 'Blockchain-based payment and remittance systems',
          icon: CreditCard,
          href: '/services/blockchain-payment-solutions',
          features: ['Cross-border Payments', 'Microtransactions', 'Settlement', 'Compliance']
        }
      ]
    },
    {
      category: 'Enterprise Blockchain',
      services: [
        {
          name: 'Supply Chain Solutions',
          description: 'Transparent and traceable supply chain management',
          icon: Package,
          href: '/services/blockchain-supply-chain',
          features: ['Product Tracking', 'Authenticity Verification', 'Compliance', 'Analytics']
        },
        {
          name: 'Identity Management',
          description: 'Self-sovereign identity and verification systems',
          icon: Shield,
          href: '/services/blockchain-identity-management',
          features: ['Digital Identity', 'Verification', 'Privacy', 'Compliance']
        },
        {
          name: 'Asset Tokenization',
          description: 'Convert real-world assets to digital tokens',
          icon: Building,
          href: '/services/asset-tokenization',
          features: ['Asset Valuation', 'Token Creation', 'Trading Platform', 'Regulatory Compliance']
        }
      ]
    },
    {
      category: 'Blockchain Consulting',
      services: [
        {
          name: 'Strategy & Architecture',
          description: 'Blockchain strategy and technical architecture planning',
          icon: Target,
          href: '/services/blockchain-strategy-architecture',
          features: ['Use Case Analysis', 'Technology Selection', 'Implementation Roadmap', 'ROI Analysis']
        },
        {
          name: 'Security & Auditing',
          description: 'Comprehensive blockchain security assessment',
          icon: Lock,
          href: '/services/blockchain-security-auditing',
          features: ['Smart Contract Auditing', 'Network Security', 'Penetration Testing', 'Compliance Review']
        },
        {
          name: 'Training & Education',
          description: 'Blockchain technology training for teams',
          icon: Users,
          href: '/services/blockchain-training-education',
          features: ['Technical Training', 'Best Practices', 'Hands-on Workshops', 'Ongoing Support']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Immutable and tamper-proof data records'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Complete visibility into transactions and data'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency',
      description: 'Streamlined processes and reduced intermediaries'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Borderless and permissionless access'
    }
  ];

  const technologies = [
    'Ethereum', 'Hyperledger Fabric', 'Polkadot', 'Solana',
    'Smart Contracts', 'Web3.js', 'Solidity', 'Rust',
    'IPFS', 'Zero-Knowledge Proofs', 'Layer 2 Solutions', 'Cross-Chain Bridges'
  ];

  const industries = [
    {
      industry: 'Finance & Banking',
      applications: ['Cross-border Payments', 'Trade Finance', 'Asset Management', 'Regulatory Compliance']
    },
    {
      industry: 'Supply Chain',
      applications: ['Product Tracking', 'Authenticity Verification', 'Quality Assurance', 'Compliance Management']
    },
    {
      industry: 'Healthcare',
      applications: ['Medical Records', 'Drug Traceability', 'Clinical Trials', 'Patient Data Management']
    },
    {
      industry: 'Real Estate',
      applications: ['Property Tokenization', 'Title Management', 'Rental Agreements', 'Investment Platforms']
    }
  ];

  const blockchainFeatures = [
    'Decentralization', 'Immutability', 'Transparency', 'Security',
    'Smart Contracts', 'Consensus Mechanisms', 'Cryptographic Security', 'Distributed Ledger',
    'Token Economics', 'Governance Models', 'Interoperability', 'Scalability'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center">
                <LinkIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Blockchain Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with revolutionary blockchain solutions. From DeFi to 
              enterprise applications, we're building the decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Explore Blockchain Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-200 font-medium"
              >
                View Blockchain Projects
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
              Why Blockchain?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Blockchain technology offers unprecedented levels of security, transparency, 
              and efficiency for modern business operations.
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
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Services Grid */}
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
              Blockchain Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive blockchain portfolio covers development, DeFi solutions, 
              enterprise applications, and strategic consulting.
            </p>
          </motion.div>

          <div className="space-y-12">
            {blockchainServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-green-400 flex items-center space-x-3">
                  <LinkIcon className="w-6 h-6" />
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
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
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
              Blockchain technology is revolutionizing industries across the board. Discover 
              how our solutions can transform your sector.
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
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{industry.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industry.applications.map((application, applicationIndex) => (
                    <div key={applicationIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Features Section */}
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
              Blockchain Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our blockchain solutions leverage the core features that make this technology 
              revolutionary for modern business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blockchainFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{feature}</span>
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
              Blockchain Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with leading blockchain platforms and technologies to deliver 
              robust, scalable, and secure solutions.
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
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Blockchain?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the blockchain revolution and discover how decentralized technology 
              can transform your business operations and create new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Blockchain Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-200 font-medium"
              >
                View Blockchain Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlockchainPage;