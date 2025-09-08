import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Users,
  Building,
  Cpu,
  Database,
  Network,
  Globe,
  Star,
  Award,
  Lightbulb,
  Code,
  BarChart3,
  Activity,
  Server,
  Brain,
  CircuitBoard,
  Microscope,
  Flask,
  TestTube,
  Calculator,
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
  Cloud,
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
  Omega as OmegaIcon
} from 'lucide-react';

export function CybersecurityPage() {
  const cyberServices = [
    {
      category: 'Security Assessment & Testing',
      services: [
        {
          name: 'Penetration Testing',
          description: 'Comprehensive security testing to identify vulnerabilities',
          icon: BugIcon,
          href: '/services/penetration-testing',
          features: ['Network Testing', 'Web Application Testing', 'Social Engineering', 'Physical Security']
        },
        {
          name: 'Vulnerability Assessment',
          description: 'Systematic identification and analysis of security weaknesses',
          icon: SearchIcon,
          href: '/services/vulnerability-assessment',
          features: ['Automated Scanning', 'Manual Analysis', 'Risk Prioritization', 'Remediation Guidance']
        },
        {
          name: 'Security Audits',
          description: 'Comprehensive security reviews and compliance assessments',
          icon: FileSearch,
          href: '/services/security-audits',
          features: ['Policy Review', 'Compliance Checking', 'Gap Analysis', 'Recommendations']
        }
      ]
    },
    {
      category: 'Security Operations',
      services: [
        {
          name: 'Security Monitoring',
          description: '24/7 monitoring and threat detection services',
          icon: Monitor,
          href: '/services/security-monitoring',
          features: ['SIEM Implementation', 'Real-time Alerts', 'Incident Response', 'Threat Intelligence']
        },
        {
          name: 'Incident Response',
          description: 'Rapid response to security incidents and breaches',
          icon: AlertTriangle,
          href: '/services/incident-response',
          features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Lessons Learned']
        },
        {
          name: 'Threat Hunting',
          description: 'Proactive threat detection and investigation',
          icon: SearchIcon,
          href: '/services/threat-hunting',
          features: ['Advanced Analytics', 'Behavioral Analysis', 'Threat Intelligence', 'Proactive Defense']
        }
      ]
    },
    {
      category: 'Security Architecture',
      services: [
        {
          name: 'Zero Trust Architecture',
          description: 'Implement comprehensive zero trust security models',
          icon: Shield,
          href: '/services/zero-trust-architecture',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege']
        },
        {
          name: 'Cloud Security',
          description: 'Secure cloud infrastructure and applications',
          icon: Cloud,
          href: '/services/cloud-security',
          features: ['CSPM', 'Cloud Access Security', 'Data Protection', 'Compliance']
        },
        {
          name: 'Network Security',
          description: 'Protect network infrastructure and communications',
          icon: Network,
          href: '/services/network-security',
          features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Traffic Analysis']
        }
      ]
    },
    {
      category: 'Data Protection & Privacy',
      services: [
        {
          name: 'Data Encryption',
          description: 'Implement encryption for data at rest and in transit',
          icon: Lock,
          href: '/services/data-encryption',
          features: ['AES Encryption', 'Key Management', 'Hardware Security', 'Compliance']
        },
        {
          name: 'Privacy Compliance',
          description: 'Ensure compliance with data privacy regulations',
          icon: FileText,
          href: '/services/privacy-compliance',
          features: ['GDPR', 'CCPA', 'Data Mapping', 'Consent Management']
        },
        {
          name: 'Data Loss Prevention',
          description: 'Prevent unauthorized data access and exfiltration',
          icon: Eye,
          href: '/services/data-loss-prevention',
          features: ['Content Monitoring', 'Policy Enforcement', 'User Training', 'Incident Response']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach'
    },
    {
      icon: Target,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response'
    },
    {
      icon: TrendingUp,
      title: 'Risk Reduction',
      description: 'Minimize security vulnerabilities'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'Meet regulatory requirements'
    }
  ];

  const technologies = [
    'SIEM Systems', 'EDR Solutions', 'Firewall Technologies', 'Intrusion Detection',
    'Encryption Tools', 'Identity Management', 'Multi-Factor Authentication', 'Vulnerability Scanners',
    'Penetration Testing Tools', 'Forensic Tools', 'Threat Intelligence Platforms', 'Security Orchestration'
  ];

  const industries = [
    {
      industry: 'Financial Services',
      challenges: ['Regulatory Compliance', 'Fraud Prevention', 'Data Protection', 'Transaction Security']
    },
    {
      industry: 'Healthcare',
      challenges: ['HIPAA Compliance', 'Patient Data Security', 'Medical Device Security', 'Privacy Protection']
    },
    {
      industry: 'Manufacturing',
      challenges: ['OT Security', 'Supply Chain Security', 'Intellectual Property Protection', 'Industrial Espionage']
    },
    {
      industry: 'Government',
      challenges: ['Classified Information', 'Critical Infrastructure', 'National Security', 'Compliance Requirements']
    }
  ];

  const complianceFrameworks = [
    'ISO 27001', 'SOC 2', 'NIST Cybersecurity Framework', 'GDPR', 'CCPA', 'HIPAA', 'PCI DSS', 'SOX'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions. 
              From threat detection to incident response, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Secure Your Business</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-red-500 hover:text-red-400 transition-all duration-200 font-medium"
              >
                View Security Projects
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
              Why Cybersecurity Matters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In today's digital landscape, robust cybersecurity is not optional—it's essential 
              for protecting your business, customers, and reputation.
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
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Grid */}
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
              Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive cybersecurity portfolio covers assessment, operations, 
              architecture, and data protection to keep your organization secure.
            </p>
          </motion.div>

          <div className="space-y-12">
            {cyberServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center space-x-3">
                  <Shield className="w-6 h-6" />
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
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                              <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
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

      {/* Industry Challenges Section */}
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
              Industry-Specific Challenges
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Different industries face unique cybersecurity challenges. We understand 
              these nuances and provide tailored solutions.
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
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-red-400">{industry.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industry.challenges.map((challenge, challengeIndex) => (
                    <div key={challengeIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>{challenge}</span>
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
              Security Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge cybersecurity technologies and tools to provide 
              comprehensive protection for your organization.
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
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We help organizations meet and maintain compliance with industry standards 
              and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{framework}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't wait for a security breach. Contact us today to assess your 
              cybersecurity posture and implement robust protection measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-red-500 hover:text-red-400 transition-all duration-200 font-medium"
              >
                View Security Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CybersecurityPage;