import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Users,
  Heart,
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
  Telescope
} from 'lucide-react';

export function SpaceTechnologyPage() {
  const spaceServices = [
    {
      category: 'Satellite Technology',
      services: [
        {
          name: 'Satellite Design & Development',
          description: 'Custom satellite solutions for various applications',
          icon: Rocket,
          href: '/services/satellite-design',
          features: ['Payload Design', 'Orbital Mechanics', 'Systems Integration']
        },
        {
          name: 'Ground Station Operations',
          description: 'Ground-based satellite communication and control systems',
          icon: Globe,
          href: '/services/ground-station-operations',
          features: ['Communication Systems', 'Tracking & Control', 'Data Reception']
        },
        {
          name: 'Satellite Constellation Management',
          description: 'Manage multiple satellites for global coverage',
          icon: Network,
          href: '/services/satellite-constellation',
          features: ['Orbital Coordination', 'Network Optimization', 'Redundancy Planning']
        }
      ]
    },
    {
      category: 'Space Data & Analytics',
      services: [
        {
          name: 'Earth Observation Analytics',
          description: 'Analyze satellite imagery for environmental and commercial insights',
          icon: Eye,
          href: '/services/earth-observation-analytics',
          features: ['Image Processing', 'Change Detection', 'Environmental Monitoring']
        },
        {
          name: 'Space Weather Monitoring',
          description: 'Monitor solar activity and space weather conditions',
          icon: Sun,
          href: '/services/space-weather-monitoring',
          features: ['Solar Activity Tracking', 'Geomagnetic Monitoring', 'Early Warning Systems']
        },
        {
          name: 'Astronomical Data Processing',
          description: 'Process and analyze astronomical observations and data',
          icon: Telescope,
          href: '/services/astronomical-data-processing',
          features: ['Data Reduction', 'Image Analysis', 'Statistical Modeling']
        }
      ]
    },
    {
      category: 'Space Infrastructure',
      services: [
        {
          name: 'Launch Vehicle Technology',
          description: 'Advanced propulsion and launch vehicle systems',
          icon: Rocket,
          href: '/services/launch-vehicle-technology',
          features: ['Propulsion Systems', 'Vehicle Design', 'Launch Operations']
        },
        {
          name: 'Space Habitation Systems',
          description: 'Life support and habitation systems for space missions',
          icon: Building,
          href: '/services/space-habitation-systems',
          features: ['Life Support', 'Environmental Control', 'Resource Management']
        },
        {
          name: 'Space Debris Management',
          description: 'Track and mitigate space debris for orbital safety',
          icon: AlertTriangle,
          href: '/services/space-debris-management',
          features: ['Debris Tracking', 'Collision Avoidance', 'Removal Technologies']
        }
      ]
    },
    {
      category: 'Commercial Space Applications',
      services: [
        {
          name: 'Space Tourism',
          description: 'Commercial space travel and tourism services',
          icon: Users,
          href: '/services/space-tourism',
          features: ['Safety Systems', 'Experience Design', 'Regulatory Compliance']
        },
        {
          name: 'Space Mining',
          description: 'Extract resources from asteroids and celestial bodies',
          icon: HardDrive,
          href: '/services/space-mining',
          features: ['Resource Assessment', 'Extraction Methods', 'Transport Systems']
        },
        {
          name: 'Space Manufacturing',
          description: 'Manufacture products in microgravity environments',
          icon: Settings,
          href: '/services/space-manufacturing',
          features: ['Microgravity Processing', 'Quality Control', 'Production Scaling']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Global Coverage',
      description: 'Provide services and connectivity worldwide'
    },
    {
      icon: Target,
      title: 'Precision Monitoring',
      description: 'Monitor Earth and space with high accuracy'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Drive technological advancement and discovery'
    },
    {
      icon: Rocket,
      title: 'Future Growth',
      description: 'Access to new markets and opportunities'
    }
  ];

  const technologies = [
    'Satellite Communication', 'GPS & Navigation', 'Remote Sensing',
    'Propulsion Systems', 'Life Support Systems', 'Robotics & Automation',
    'Artificial Intelligence', 'Machine Learning', 'Data Analytics',
    'Quantum Computing', 'Advanced Materials', '3D Printing'
  ];

  const applications = [
    {
      industry: 'Telecommunications',
      uses: ['Global Internet Coverage', 'Mobile Communications', 'Data Transmission', 'Emergency Communications']
    },
    {
      industry: 'Agriculture',
      uses: ['Crop Monitoring', 'Soil Analysis', 'Weather Forecasting', 'Precision Farming']
    },
    {
      industry: 'Environmental Monitoring',
      uses: ['Climate Change Tracking', 'Deforestation Monitoring', 'Ocean Health', 'Air Quality']
    },
    {
      industry: 'Defense & Security',
      uses: ['Surveillance', 'Navigation', 'Communication', 'Intelligence Gathering']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Reach for the stars with cutting-edge space technology solutions. 
              From satellite systems to space exploration, we're pushing the boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Explore Space Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all duration-200 font-medium"
              >
                View Space Projects
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
              Why Space Technology?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Space technology opens new frontiers for innovation, provides global 
              connectivity, and enables scientific discovery that benefits humanity.
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
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Services Grid */}
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
              Space Technology Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive space technology portfolio covers satellite systems, 
              space data analytics, infrastructure, and commercial applications.
            </p>
          </motion.div>

          <div className="space-y-12">
            {spaceServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-violet-400 flex items-center space-x-3">
                  <category.icon className="w-6 h-6" />
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
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                              <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
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

      {/* Applications Section */}
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
              Space technology has applications across multiple industries, providing 
              critical services and enabling new capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-violet-400">{application.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {application.uses.map((use, useIndex) => (
                    <div key={useIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Space Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge space technologies and innovations to deliver 
              robust, reliable, and advanced space solutions.
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
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the space revolution and discover how our space technology solutions 
              can open new frontiers for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Space Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all duration-200 font-medium"
              >
                View Space Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SpaceTechnologyPage;