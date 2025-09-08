import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  Zap,
  Target,
  TrendingUp,
  Users,
  Heart,
  Building,
  Rocket,
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
  Goose as GooseIcon
} from 'lucide-react';

export function IoTEdgeComputingPage() {
  const iotServices = [
    {
      category: 'IoT Platform Development',
      services: [
        {
          name: 'IoT Platform Architecture',
          description: 'Design and build scalable IoT platforms for device management',
          icon: Cpu,
          href: '/services/iot-platform-architecture',
          features: ['Device Management', 'Data Collection', 'Scalable Infrastructure']
        },
        {
          name: 'Edge Computing Solutions',
          description: 'Process data at the edge for real-time insights and reduced latency',
          icon: Activity,
          href: '/services/edge-computing-solutions',
          features: ['Edge Processing', 'Real-time Analytics', 'Low Latency']
        },
        {
          name: 'IoT Device Management',
          description: 'Comprehensive device lifecycle management and monitoring',
          icon: Monitor,
          href: '/services/iot-device-management',
          features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates']
        }
      ]
    },
    {
      category: 'Data Processing & Analytics',
      services: [
        {
          name: 'Real-time Data Processing',
          description: 'Process IoT data streams in real-time for immediate insights',
          icon: TrendingUp,
          href: '/services/real-time-data-processing',
          features: ['Stream Processing', 'Real-time Analytics', 'Event Processing']
        },
        {
          name: 'IoT Data Analytics',
          description: 'Advanced analytics for IoT data to drive business insights',
          icon: BarChart3,
          href: '/services/iot-data-analytics',
          features: ['Predictive Analytics', 'Pattern Recognition', 'Performance Monitoring']
        },
        {
          name: 'Data Integration',
          description: 'Integrate IoT data with existing business systems',
          icon: Network,
          href: '/services/iot-data-integration',
          features: ['System Integration', 'API Development', 'Data Synchronization']
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          name: 'IoT Security Framework',
          description: 'Comprehensive security for IoT devices and networks',
          icon: Security,
          href: '/services/iot-security-framework',
          features: ['Device Authentication', 'Data Encryption', 'Threat Detection']
        },
        {
          name: 'Edge Security',
          description: 'Secure edge computing environments and data processing',
          icon: Lock,
          href: '/services/edge-security',
          features: ['Edge Authentication', 'Secure Processing', 'Compliance']
        },
        {
          name: 'Privacy Protection',
          description: 'Ensure data privacy and compliance in IoT deployments',
          icon: Eye,
          href: '/services/iot-privacy-protection',
          features: ['Data Anonymization', 'Privacy Controls', 'GDPR Compliance']
        }
      ]
    },
    {
      category: 'Industry Solutions',
      services: [
        {
          name: 'Smart Manufacturing',
          description: 'IoT solutions for industrial automation and monitoring',
          icon: Building,
          href: '/services/smart-manufacturing',
          features: ['Predictive Maintenance', 'Quality Control', 'Production Monitoring']
        },
        {
          name: 'Smart Cities',
          description: 'IoT infrastructure for urban development and management',
          icon: Globe,
          href: '/services/smart-cities',
          features: ['Traffic Management', 'Environmental Monitoring', 'Public Services']
        },
        {
          name: 'Connected Healthcare',
          description: 'IoT solutions for healthcare monitoring and patient care',
          icon: Heart,
          href: '/services/connected-healthcare',
          features: ['Patient Monitoring', 'Medical Devices', 'Health Analytics']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Get immediate insights from connected devices and sensors'
    },
    {
      icon: Target,
      title: 'Operational Efficiency',
      description: 'Optimize operations with data-driven decision making'
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Enable new business models and revenue streams'
    }
  ];

  const technologies = [
    'MQTT', 'CoAP', 'HTTP/HTTPS', 'WebSocket', 'LoRaWAN',
    'Zigbee', 'Bluetooth Low Energy', 'Wi-Fi 6', '5G', 'NB-IoT',
    'Apache Kafka', 'Apache Pulsar', 'Redis', 'InfluxDB', 'TimescaleDB',
    'TensorFlow Lite', 'ONNX Runtime', 'Edge ML', 'Federated Learning'
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management']
    },
    {
      industry: 'Healthcare',
      applications: ['Remote Patient Monitoring', 'Medical Device Management', 'Clinical Analytics', 'Asset Tracking']
    },
    {
      industry: 'Transportation',
      applications: ['Fleet Management', 'Traffic Optimization', 'Predictive Maintenance', 'Safety Monitoring']
    },
    {
      industry: 'Energy',
      applications: ['Smart Grid Management', 'Renewable Energy Monitoring', 'Demand Response', 'Asset Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                <Activity className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              IoT & Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Connect, collect, and compute at the edge. We help organizations build 
              intelligent IoT solutions that process data closer to the source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your IoT Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all duration-200 font-medium"
              >
                View IoT Cases
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
              Why IoT & Edge Computing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              IoT and edge computing enable organizations to collect data from connected 
              devices and process it closer to the source for faster insights and actions.
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
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Services Grid */}
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
              IoT & Edge Computing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive IoT portfolio covers platform development, edge computing, 
              data processing, security, and industry-specific solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {iotServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-emerald-400 flex items-center space-x-3">
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
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
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

      {/* Use Cases Section */}
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
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              IoT and edge computing are transforming industries across the board. 
              Discover how these technologies can benefit your specific sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">{useCase.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.applications.map((application, applicationIndex) => (
                    <div key={applicationIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>{application}</span>
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
              IoT & Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge IoT and edge computing technologies to deliver 
              robust, scalable, and secure solutions for our clients.
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
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your business with IoT and edge computing solutions that 
              provide real-time insights and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your IoT Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all duration-200 font-medium"
              >
                View IoT Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default IoTEdgeComputingPage;