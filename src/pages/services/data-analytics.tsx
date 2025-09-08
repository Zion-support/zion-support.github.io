import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
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

export function DataAnalyticsPage() {
  const analyticsServices = [
    {
      category: 'Data Strategy & Governance',
      services: [
        {
          name: 'Data Strategy Development',
          description: 'Comprehensive data strategy aligned with business objectives',
          icon: Target,
          href: '/services/data-strategy',
          features: ['Data Assessment', 'Governance Framework', 'Implementation Roadmap']
        },
        {
          name: 'Data Governance',
          description: 'Establish data quality, security, and compliance standards',
          icon: Shield,
          href: '/services/data-governance',
          features: ['Data Policies', 'Quality Standards', 'Compliance Framework']
        },
        {
          name: 'Data Architecture',
          description: 'Design scalable and efficient data infrastructure',
          icon: Database,
          href: '/services/data-architecture',
          features: ['Data Modeling', 'Integration Patterns', 'Scalability Planning']
        }
      ]
    },
    {
      category: 'Data Infrastructure',
      services: [
        {
          name: 'Data Lake & Warehouse',
          description: 'Build modern data storage and processing platforms',
          icon: Layers,
          href: '/services/data-infrastructure',
          features: ['Data Lake Design', 'Warehouse Architecture', 'ETL Processes']
        },
        {
          name: 'Big Data Processing',
          description: 'Process and analyze large-scale datasets efficiently',
          icon: Cpu,
          href: '/services/big-data-processing',
          features: ['Distributed Computing', 'Stream Processing', 'Batch Processing']
        },
        {
          name: 'Data Integration',
          description: 'Connect and synchronize data from multiple sources',
          icon: Network,
          href: '/services/data-integration',
          features: ['API Integration', 'ETL Pipelines', 'Real-time Sync']
        }
      ]
    },
    {
      category: 'Business Intelligence',
      services: [
        {
          name: 'Dashboard Development',
          description: 'Create interactive dashboards for data visualization',
          icon: BarChart3,
          href: '/services/dashboard-development',
          features: ['Custom Dashboards', 'Real-time Updates', 'Interactive Features']
        },
        {
          name: 'KPI Tracking',
          description: 'Monitor and track key performance indicators',
          icon: TrendingUp,
          href: '/services/kpi-tracking',
          features: ['KPI Definition', 'Automated Monitoring', 'Alert Systems']
        },
        {
          name: 'Reporting Solutions',
          description: 'Automated reporting and analytics solutions',
          icon: FileText,
          href: '/services/reporting-solutions',
          features: ['Automated Reports', 'Custom Templates', 'Scheduling']
        }
      ]
    },
    {
      category: 'Advanced Analytics',
      services: [
        {
          name: 'Predictive Analytics',
          description: 'Forecast future trends and outcomes using ML',
          icon: Brain,
          href: '/services/predictive-analytics',
          features: ['Statistical Modeling', 'Machine Learning', 'Forecasting']
        },
        {
          name: 'Customer Analytics',
          description: 'Understand customer behavior and preferences',
          icon: Users,
          href: '/services/customer-analytics',
          features: ['Behavior Analysis', 'Segmentation', 'Personalization']
        },
        {
          name: 'Operational Analytics',
          description: 'Optimize business operations with data insights',
          icon: Activity,
          href: '/services/operational-analytics',
          features: ['Process Optimization', 'Performance Monitoring', 'Efficiency Metrics']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time insights'
    },
    {
      icon: Target,
      title: 'Improved Efficiency',
      description: 'Optimize processes and identify performance bottlenecks'
    },
    {
      icon: TrendingUp,
      title: 'Better Customer Experience',
      description: 'Understand customer needs and personalize experiences'
    },
    {
      icon: Rocket,
      title: 'Competitive Advantage',
      description: 'Gain insights that drive innovation and growth'
    }
  ];

  const technologies = [
    'Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Apache Airflow',
    'Snowflake', 'Amazon Redshift', 'Google BigQuery', 'Azure Synapse',
    'Tableau', 'Power BI', 'Looker', 'QlikView',
    'Python', 'R', 'SQL', 'Scala', 'Java'
  ];

  const industries = [
    {
      industry: 'Financial Services',
      analytics: ['Risk Assessment', 'Fraud Detection', 'Customer Segmentation', 'Portfolio Optimization']
    },
    {
      industry: 'Healthcare',
      analytics: ['Clinical Analytics', 'Patient Outcomes', 'Resource Optimization', 'Predictive Medicine']
    },
    {
      industry: 'Manufacturing',
      analytics: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Analytics']
    },
    {
      industry: 'Retail',
      analytics: ['Customer Behavior', 'Inventory Management', 'Sales Forecasting', 'Market Basket Analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your data into actionable insights. We help organizations harness 
              the power of data to drive better decisions and achieve business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Unlock Your Data</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 font-medium"
              >
                View Analytics Cases
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
              Why Data Analytics?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In today's data-driven world, organizations that can effectively analyze 
              and act on their data gain significant competitive advantages.
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
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Services Grid */}
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
              Data Analytics Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive analytics portfolio covers strategy, infrastructure, 
              business intelligence, and advanced analytics to drive business value.
            </p>
          </motion.div>

          <div className="space-y-12">
            {analyticsServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-indigo-400 flex items-center space-x-3">
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
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                              <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
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

      {/* Industry Analytics Section */}
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
              Industry-Specific Analytics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every industry has unique data challenges and opportunities. We provide 
              tailored analytics solutions for your specific sector.
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
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">{industry.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industry.analytics.map((analytic, analyticIndex) => (
                    <div key={analyticIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span>{analytic}</span>
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
              Analytics Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with leading analytics technologies and platforms to deliver 
              robust, scalable, and efficient data solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your data into actionable insights that drive business growth 
              and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Analytics Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 font-medium"
              >
                View Analytics Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalyticsPage;