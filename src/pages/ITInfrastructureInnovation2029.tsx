import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  Server, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Lock, 
  Zap, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Globe, 
  Code, 
  GitBranch, 
  Activity, 
  BarChart3, 
  Users, 
  Building2, 
  Car, 
  Plane, 
  Ship, 
  Factory, 
  Warehouse, 
  ShoppingCart, 
  Bank, 
  GraduationCap, 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  TrendingUp,
  Star,
  ArrowRight,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  MessageCircle,
  PhoneCall,
  VideoCall,
  MailOpen,
  Send,
  Plus,
  Minus,
  Bot,
  GitFork,
  Sparkles,
  MessageSquare,
  FileText,
  Search,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  BookOpen as BookIcon,
  GraduationCap as GraduationIcon,
  DollarSign as DollarIcon,
  CreditCard as CreditIcon,
  ShoppingCart as CartIcon,
  Truck as TruckIcon,
  Warehouse as WarehouseIcon,
  Factory as FactoryIcon,
  Building2 as BuildingIcon,
  Home as HomeIcon,
  Store as StoreIcon,
  Bank as BankIcon,
  Insurance as InsuranceIcon,
  Law as LawIcon,
  Gavel as GavelIcon,
  FileText as FileIcon,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Search as SearchIcon2,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ExternalLink as ExternalLinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  MessageCircle as MessageIcon,
  PhoneCall as PhoneCallIcon,
  VideoCall as VideoCallIcon,
  MailOpen as MailOpenIcon,
  Send as SendIcon,
  Plus as PlusIcon,
  Minus as MinusIcon
} from 'lucide-react';

const ITInfrastructureInnovation2029: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud-migration', name: 'Cloud Migration', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'devops-automation', name: 'DevOps & Automation', icon: GitBranch, color: 'from-green-500 to-emerald-500' },
    { id: 'data-infrastructure', name: 'Data Infrastructure', icon: Database, color: 'from-indigo-500 to-purple-500' },
    { id: 'network-security', name: 'Network & Security', icon: Network, color: 'from-yellow-500 to-orange-500' },
    { id: 'edge-computing', name: 'Edge Computing', icon: Cpu, color: 'from-gray-500 to-blue-500' },
    { id: 'quantum-ready', name: 'Quantum Ready', icon: Atom, color: 'from-purple-500 to-indigo-500' }
  ];

  const itInfrastructureServices = [
    // Cloud Migration Solutions
    {

      id: 'enterprise-cloud-migration',
      category: 'cloud-migration',
      title: 'Enterprise Cloud Migration Suite',
      description: 'Comprehensive cloud migration platform with automated assessment, planning, and execution for large-scale enterprise transformations.',
      features: [
        'Automated workload assessment and planning',
        'Multi-cloud strategy and optimization',
        'Zero-downtime migration execution',
        'Cost optimization and governance',
        'Integration with AWS, Azure, GCP, Oracle Cloud',
        'Real-time migration monitoring',
        'Rollback capabilities and disaster recovery',
        'Compliance and security validation'
      ],
      pricing: {

        assessment: '$15,000 - $50,000',
        migration: '$50,000 - $500,000',
        ongoing: '$5,000 - $25,000/month'
      },
      marketPrice: '$20,000 - $600,000',
      benefits: [
        'Reduce migration time by 60%',
        'Cut cloud costs by 30-40%',
        'Improve system performance by 50%',
        'Ensure 99.99% uptime during migration'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: 'https://ziontechgroup.com/enterprise-cloud-migration',
      demo: 'https://ziontechgroup.com/demo/enterprise-cloud-migration'
    },
    {

      id: 'legacy-modernization',
      category: 'cloud-migration',
      title: 'Legacy System Modernization',
      description: 'Transform legacy applications and infrastructure with modern cloud-native architectures and microservices.',
      features: [
        'Legacy application assessment and analysis',
        'Microservices architecture design',
        'Containerization and orchestration',
        'API modernization and integration',
        'Database migration and optimization',
        'Performance testing and optimization',
        'Training and knowledge transfer',
        'Ongoing support and maintenance'
      ],
      pricing: {

        assessment: '$10,000 - $30,000',
        modernization: '$30,000 - $300,000',
        support: '$2,000 - $15,000/month'
      },
      marketPrice: '$15,000 - $400,000',
      benefits: [
        'Improve system performance by 80%',
        'Reduce maintenance costs by 60%',
        'Enable rapid feature development',
        'Enhance scalability and reliability'
      ],
      icon: Server,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/legacy-modernization',
      demo: 'https://ziontechgroup.com/demo/legacy-modernization'
    },

    // Cybersecurity Solutions
    {

      id: 'zero-trust-security',
      category: 'cybersecurity',
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with continuous verification, micro-segmentation, and advanced threat detection.',
      features: [
        'Identity and access management (IAM)',
        'Network micro-segmentation',
        'Continuous monitoring and verification',
        'Advanced threat detection and response',
        'Data encryption and protection',
        'Compliance automation (SOC 2, ISO 27001)',
        'Security orchestration and automation',
        '24/7 security operations center'
      ],
      pricing: {

        implementation: '$25,000 - $150,000',
        monthly: '$3,000 - $20,000',
        annual: '$30,000 - $200,000'
      },
      marketPrice: '$35,000 - $250,000',
      benefits: [
        'Reduce security incidents by 90%',
        'Improve compliance scores by 95%',
        'Cut security response time by 80%',
        'Protect against 99.9% of threats'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      link: 'https://ziontechgroup.com/zero-trust-security',
      demo: 'https://ziontechgroup.com/demo/zero-trust-security'
    },
    {

      id: 'ai-threat-intelligence',
      category: 'cybersecurity',
      title: 'AI-Powered Threat Intelligence',
      description: 'Advanced threat intelligence platform using machine learning to detect, analyze, and respond to cyber threats in real-time.',
      features: [
        'AI-powered threat detection',
        'Behavioral analysis and anomaly detection',
        'Threat hunting and investigation',
        'Automated incident response',
        'Threat intelligence sharing',
        'Vulnerability assessment and management',
        'Security metrics and reporting',
        'Integration with SIEM and SOAR platforms'
      ],
      pricing: {

        starter: '$2,000/month',
        professional: '$5,000/month',
        enterprise: '$15,000/month'
      },
      marketPrice: '$2,500 - $18,000/month',
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Reduce false positives by 85%',
        'Automate 70% of security responses',
        'Improve threat detection accuracy by 95%'
      ],
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
      link: 'https://ziontechgroup.com/ai-threat-intelligence',
      demo: 'https://ziontechgroup.com/demo/ai-threat-intelligence'
    },

    // DevOps & Automation
    {

      id: 'devops-transformation',
      category: 'devops-automation',
      title: 'DevOps Transformation Platform',
      description: 'End-to-end DevOps transformation with CI/CD pipelines, infrastructure as code, and automated deployment strategies.',
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring and observability',
        'Automated testing and quality gates',
        'Release management and deployment',
        'DevOps culture and training',
        'Performance optimization and scaling'
      ],
      pricing: {

        assessment: '$8,000 - $25,000',
        implementation: '$25,000 - $150,000',
        ongoing: '$3,000 - $15,000/month'
      },
      marketPrice: '$15,000 - $200,000',
      benefits: [
        'Reduce deployment time by 90%',
        'Improve code quality by 60%',
        'Increase deployment frequency by 100x',
        'Reduce production incidents by 80%'
      ],
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: 'https://ziontechgroup.com/devops-transformation',
      demo: 'https://ziontechgroup.com/demo/devops-transformation'
    },
    {

      id: 'infrastructure-automation',
      category: 'devops-automation',
      title: 'Infrastructure Automation Suite',
      description: 'Comprehensive infrastructure automation platform for provisioning, configuration, and management across multiple cloud environments.',
      features: [
        'Multi-cloud infrastructure provisioning',
        'Configuration management automation',
        'Infrastructure monitoring and alerting',
        'Cost optimization and governance',
        'Security and compliance automation',
        'Disaster recovery automation',
        'Performance optimization',
        'Integration with major cloud providers'
      ],
      pricing: {

        starter: '$1,500/month',
        professional: '$4,000/month',
        enterprise: '$10,000/month'
      },
      marketPrice: '$2,000 - $12,000/month',
      benefits: [
        'Reduce infrastructure provisioning time by 95%',
        'Cut operational costs by 40%',
        'Improve system reliability by 99.9%',
        'Enable self-service infrastructure'
      ],
      icon: Server,
      color: 'from-blue-500 to-indigo-500',
      link: 'https://ziontechgroup.com/infrastructure-automation',
      demo: 'https://ziontechgroup.com/demo/infrastructure-automation'
    },

    // Data Infrastructure
    {

      id: 'data-lake-platform',
      category: 'data-infrastructure',
      title: 'Enterprise Data Lake Platform',
      description: 'Scalable data lake platform with real-time processing, analytics, and AI/ML capabilities for enterprise data management.',
      features: [
        'Multi-format data ingestion and storage',
        'Real-time stream processing',
        'Data governance and cataloging',
        'Advanced analytics and ML integration',
        'Data quality and validation',
        'Security and access control',
        'Performance optimization',
        'Integration with BI and analytics tools'
      ],
      pricing: {

        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: '$50,000/month'
      },
      marketPrice: '$8,000 - $60,000/month',
      benefits: [
        'Process data 100x faster than traditional systems',
        'Reduce data storage costs by 70%',
        'Enable real-time analytics and insights',
        'Improve data quality and governance'
      ],
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/data-lake-platform',
      demo: 'https://ziontechgroup.com/demo/data-lake-platform'
    },
    {

      id: 'data-warehouse-optimization',
      category: 'data-infrastructure',
      title: 'Data Warehouse Optimization',
      description: 'Performance optimization and modernization of existing data warehouses with cloud-native solutions and advanced analytics.',
      features: [
        'Performance analysis and optimization',
        'Query optimization and tuning',
        'Data modeling and architecture',
        'ETL/ELT pipeline optimization',
        'Cloud migration and modernization',
        'Advanced analytics integration',
        'Data governance and security',
        'Monitoring and alerting'
      ],
      pricing: {

        assessment: '$10,000 - $30,000',
        optimization: '$20,000 - $100,000',
        ongoing: '$2,000 - $10,000/month'
      },
      marketPrice: '$15,000 - $150,000',
      benefits: [
        'Improve query performance by 10x',
        'Reduce data processing costs by 50%',
        'Enable real-time analytics',
        'Improve data accessibility and insights'
      ],
      icon: BarChart3,
      color: 'from-green-500 to-blue-500',
      link: 'https://ziontechgroup.com/data-warehouse-optimization',
      demo: 'https://ziontechgroup.com/demo/data-warehouse-optimization'
    },

    // Network & Security
    {

      id: 'sd-wan-solution',
      category: 'network-security',
      title: 'Software-Defined WAN Solution',
      description: 'Next-generation SD-WAN solution with intelligent routing, security, and optimization for distributed enterprise networks.',
      features: [
        'Intelligent traffic routing and optimization',
        'Built-in security and firewall',
        'Application-aware policies',
        'Centralized management and monitoring',
        'Multi-cloud connectivity',
        'Quality of Service (QoS) management',
        'Bandwidth optimization',
        'Real-time analytics and reporting'
      ],
      pricing: {

        implementation: '$15,000 - $75,000',
        monthly: '$2,000 - $10,000',
        annual: '$20,000 - $100,000'
      },
      marketPrice: '$25,000 - $120,000',
      benefits: [
        'Reduce network costs by 40-60%',
        'Improve application performance by 50%',
        'Simplify network management',
        'Enhance security and compliance'
      ],
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://ziontechgroup.com/sd-wan-solution',
      demo: 'https://ziontechgroup.com/demo/sd-wan-solution'
    },

    // Edge Computing
    {

      id: 'edge-computing-platform',
      category: 'edge-computing',
      title: 'Edge Computing Platform',
      description: 'Distributed edge computing platform for IoT, real-time analytics, and low-latency applications across multiple locations.',
      features: [
        'Distributed edge node management',
        'Real-time data processing',
        'IoT device integration and management',
        'Low-latency application deployment',
        'Edge analytics and ML inference',
        'Security and access control',
        'Performance monitoring and optimization',
        'Integration with cloud platforms'
      ],
      pricing: {

        starter: '$3,000/month',
        professional: '$8,000/month',
        enterprise: '$25,000/month'
      },
      marketPrice: '$4,000 - $30,000/month',
      benefits: [
        'Reduce latency by 80-90%',
        'Cut bandwidth costs by 60%',
        'Enable real-time decision making',
        'Improve application performance'
      ],
      icon: Cpu,
      color: 'from-gray-500 to-blue-500',
      link: 'https://ziontechgroup.com/edge-computing-platform',
      demo: 'https://ziontechgroup.com/demo/edge-computing-platform'
    },

    // Quantum Ready
    {

      id: 'quantum-readiness-platform',
      category: 'quantum-ready',
      title: 'Quantum Readiness Platform',
      description: 'Comprehensive platform to prepare organizations for quantum computing with post-quantum cryptography and quantum-safe solutions.',
      features: [
        'Post-quantum cryptography implementation',
        'Quantum-safe key management',
        'Cryptographic agility framework',
        'Quantum threat assessment',
        'Migration planning and execution',
        'Compliance and certification support',
        'Training and education programs',
        'Ongoing quantum threat monitoring'
      ],
      pricing: {

        assessment: '$20,000 - $50,000',
        implementation: '$50,000 - $200,000',
        ongoing: '$5,000 - $20,000/month'
      },
      marketPrice: '$30,000 - $300,000',
      benefits: [
        'Protect against quantum threats',
        'Ensure long-term data security',
        'Maintain compliance and certification',
        'Future-proof your security infrastructure'
      ],
      icon: Atom,
      color: 'from-purple-500 to-indigo-500',
      link: 'https://ziontechgroup.com/quantum-readiness-platform',
      demo: 'https://ziontechgroup.com/demo/quantum-readiness-platform'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? itInfrastructureServices 
    : itInfrastructureServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Infrastructure Innovation 2029
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transform your IT infrastructure with cutting-edge cloud solutions, advanced cybersecurity, 
              and intelligent automation designed for the digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${

                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${

                  service.featured ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Featured Solution
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="space-y-1">
                      {Object.entries(service.pricing).map(([plan, price]) => (
                        <div key={plan} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">{plan}:</span>
                          <span className="font-semibold text-gray-900">{price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Market average: {service.marketPrice}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 font-medium"
                    >
                      Learn More
                    </a>
                    <a
                      href={service.demo}
                      className="flex-1 bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our team of infrastructure experts is ready to help you transform your IT environment 
              with cutting-edge solutions. Get in touch today to start your modernization journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructureInnovation2029;