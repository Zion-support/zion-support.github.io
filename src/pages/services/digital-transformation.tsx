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
  Goose as GooseIcon
} from 'lucide-react';

export function DigitalTransformationPage() {
  const transformationServices = [
    {
      category: 'Strategy & Consulting',
      services: [
        {
          name: 'Digital Strategy Development',
          description: 'Comprehensive digital transformation roadmap and strategy',
          icon: Target,
          href: '/services/digital-strategy',
          features: ['Current State Assessment', 'Future State Vision', 'Implementation Roadmap']
        },
        {
          name: 'Change Management',
          description: 'Organizational change management and digital adoption',
          icon: Users,
          href: '/services/change-management',
          features: ['Stakeholder Engagement', 'Training Programs', 'Cultural Transformation']
        },
        {
          name: 'Process Optimization',
          description: 'Streamline and optimize business processes with digital tools',
          icon: RefreshCw,
          href: '/services/process-optimization',
          features: ['Process Mapping', 'Automation Opportunities', 'Efficiency Metrics']
        }
      ]
    },
    {
      category: 'Technology Implementation',
      services: [
        {
          name: 'Legacy System Modernization',
          description: 'Transform legacy systems into modern, scalable solutions',
          icon: RefreshCw,
          href: '/services/legacy-modernization',
          features: ['System Assessment', 'Migration Strategy', 'Modern Architecture']
        },
        {
          name: 'Cloud Migration',
          description: 'Migrate applications and infrastructure to the cloud',
          icon: Cloud,
          href: '/services/cloud-migration',
          features: ['Migration Planning', 'Data Migration', 'Performance Optimization']
        },
        {
          name: 'API Development',
          description: 'Build robust APIs for system integration and data exchange',
          icon: Code,
          href: '/services/api-development',
          features: ['API Design', 'Integration Services', 'Documentation']
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          name: 'Data Strategy',
          description: 'Develop comprehensive data strategy and governance',
          icon: Database,
          href: '/services/data-strategy',
          features: ['Data Governance', 'Quality Management', 'Compliance Framework']
        },
        {
          name: 'Business Intelligence',
          description: 'Transform data into actionable business insights',
          icon: BarChart3,
          href: '/services/business-intelligence',
          features: ['Dashboard Development', 'KPI Tracking', 'Predictive Analytics']
        },
        {
          name: 'Data Lake & Warehouse',
          description: 'Build scalable data infrastructure for analytics',
          icon: Layers,
          href: '/services/data-infrastructure',
          features: ['Data Architecture', 'ETL Processes', 'Data Modeling']
        }
      ]
    },
    {
      category: 'Customer Experience',
      services: [
        {
          name: 'Digital Customer Journey',
          description: 'Design seamless digital customer experiences',
          icon: Users,
          href: '/services/customer-journey',
          features: ['Journey Mapping', 'UX Design', 'Customer Analytics']
        },
        {
          name: 'Omnichannel Strategy',
          description: 'Create consistent experiences across all channels',
          icon: Globe,
          href: '/services/omnichannel',
          features: ['Channel Integration', 'Content Strategy', 'Performance Tracking']
        },
        {
          name: 'Customer Analytics',
          description: 'Understand customer behavior and preferences',
          icon: Activity,
          href: '/services/customer-analytics',
          features: ['Behavior Tracking', 'Segmentation', 'Personalization']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes'
    },
    {
      icon: TrendingUp,
      title: 'Better Customer Experience',
      description: 'Deliver seamless digital experiences to customers'
    },
    {
      icon: Target,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time insights'
    },
    {
      icon: Rocket,
      title: 'Competitive Advantage',
      description: 'Stay ahead with innovative digital solutions'
    }
  ];

  const technologies = [
    'Cloud Computing', 'AI & Machine Learning', 'Big Data Analytics',
    'Internet of Things', 'Blockchain', 'Robotic Process Automation',
    'Mobile Applications', 'Web Technologies', 'API Management',
    'Data Visualization', 'Business Intelligence', 'Cybersecurity'
  ];

  const industries = [
    {
      industry: 'Financial Services',
      transformations: ['Digital Banking', 'Fintech Integration', 'Regulatory Compliance', 'Risk Management']
    },
    {
      industry: 'Healthcare',
      transformations: ['Electronic Health Records', 'Telemedicine', 'Patient Engagement', 'Clinical Analytics']
    },
    {
      industry: 'Manufacturing',
      transformations: ['Smart Manufacturing', 'Supply Chain Optimization', 'Predictive Maintenance', 'Quality Control']
    },
    {
      industry: 'Retail',
      transformations: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Omnichannel Experience']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business for the digital age. We help organizations modernize, 
              innovate, and thrive in an increasingly digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-200 font-medium"
              >
                View Success Stories
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
              Why Digital Transformation?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Digital transformation is not just about technology—it's about fundamentally 
              changing how your business operates and delivers value to customers.
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
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
              Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach covers strategy, technology implementation, 
              data analytics, and customer experience transformation.
            </p>
          </motion.div>

          <div className="space-y-12">
            {transformationServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-green-400 flex items-center space-x-3">
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
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Industry Transformations Section */}
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
              Industry-Specific Transformations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every industry has unique challenges and opportunities. We provide 
              tailored digital transformation solutions for your specific sector.
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
                  {industry.transformations.map((transformation, transformationIndex) => (
                    <div key={transformationIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{transformation}</span>
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
              Enabling Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to enable digital transformation 
              and create competitive advantages for our clients.
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Digital transformation is a journey, not a destination. Let's discuss 
              how we can help you navigate this journey and achieve lasting success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-200 font-medium"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DigitalTransformationPage;