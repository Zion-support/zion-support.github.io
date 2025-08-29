import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Network, 
  Shield, 
  Cloud, 
  Monitor, 
  Smartphone, 
  Laptop,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Cpu,
  HardDrive,
  Lock,
  BarChart3,
  Settings,
  Globe,
  Lightbulb,
  Code,
  Palette,
  Search,
  MessageSquare,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Fingerprint,
  Key,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  WifiOff,
  BluetoothOff,
  SatelliteOff,
  RadioOff,
  SignalOff,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe2,
  ShieldCheck,
  LockKeyhole,
  EyeOff,
  FileCheck,
  FileX,
  FileSearch,
  FileText2,
  FolderOpen,
  FolderClosed,
  HardDriveIcon,
  MemoryStick,
  Disc3,
  Disc,
  Disc2,
  DiscAlbum,
  DiscIcon,
  DiscIcon2,
  DiscIcon3,
  DiscIcon4,
  DiscIcon5,
  DiscIcon6,
  DiscIcon7,
  DiscIcon8,
  DiscIcon9,
  DiscIcon10,
  DiscIcon11,
  DiscIcon12,
  DiscIcon13,
  DiscIcon14,
  DiscIcon15,
  DiscIcon16,
  DiscIcon17,
  DiscIcon18,
  DiscIcon19,
  DiscIcon20,
  DiscIcon21,
  DiscIcon22,
  DiscIcon23,
  DiscIcon24,
  DiscIcon25,
  DiscIcon26,
  DiscIcon27,
  DiscIcon28,
  DiscIcon29,
  DiscIcon30,
  DiscIcon31,
  DiscIcon32,
  DiscIcon33,
  DiscIcon34,
  DiscIcon35,
  DiscIcon36,
  DiscIcon37,
  DiscIcon38,
  DiscIcon39,
  DiscIcon40,
  DiscIcon41,
  DiscIcon42,
  DiscIcon43,
  DiscIcon44,
  DiscIcon45,
  DiscIcon46,
  DiscIcon47,
  DiscIcon48,
  DiscIcon49,
  DiscIcon50,
  DiscIcon51,
  DiscIcon52,
  DiscIcon53,
  DiscIcon54,
  DiscIcon55,
  DiscIcon56,
  DiscIcon57,
  DiscIcon58,
  DiscIcon59,
  DiscIcon60,
  DiscIcon61,
  DiscIcon62,
  DiscIcon63,
  DiscIcon64,
  DiscIcon65,
  DiscIcon66,
  DiscIcon67,
  DiscIcon68,
  DiscIcon69,
  DiscIcon70,
  DiscIcon71,
  DiscIcon72,
  DiscIcon73,
  DiscIcon74,
  DiscIcon75,
  DiscIcon76,
  DiscIcon77,
  DiscIcon78,
  DiscIcon79,
  DiscIcon80,
  DiscIcon81,
  DiscIcon82,
  DiscIcon83,
  DiscIcon84,
  DiscIcon85,
  DiscIcon86,
  DiscIcon87,
  DiscIcon88,
  DiscIcon89,
  DiscIcon90,
  DiscIcon91,
  DiscIcon92,
  DiscIcon93,
  DiscIcon94,
  DiscIcon95,
  DiscIcon96,
  DiscIcon97,
  DiscIcon98,
  DiscIcon99,
  DiscIcon100
} from 'lucide-react';

const itServices = [
  {
    category: 'Infrastructure Management',
    services: [
      {
        name: 'Server Management',
        description: 'Comprehensive server administration, monitoring, and optimization',
        features: ['24/7 monitoring', 'Performance tuning', 'Security updates', 'Backup management'],
        icon: Server,
        color: 'from-blue-400 to-cyan-500'
      },
      {
        name: 'Network Administration',
        description: 'Design, implement, and maintain robust network infrastructure',
        features: ['Network design', 'Security configuration', 'Traffic monitoring', 'Troubleshooting'],
        icon: Network,
        color: 'from-green-400 to-emerald-500'
      },
      {
        name: 'Database Management',
        description: 'Database administration, optimization, and maintenance services',
        features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support'],
        icon: Database,
        color: 'from-purple-400 to-pink-500'
      }
    ]
  },
  {
    category: 'Cloud Solutions',
    services: [
      {
        name: 'Cloud Migration',
        description: 'Seamless migration to cloud platforms with minimal downtime',
        features: ['Strategy planning', 'Data migration', 'Application deployment', 'Performance optimization'],
        icon: Cloud,
        color: 'from-indigo-400 to-purple-500'
      },
      {
        name: 'Cloud Infrastructure',
        description: 'Design and implement scalable cloud-based solutions',
        features: ['Architecture design', 'Resource optimization', 'Cost management', 'Security implementation'],
        icon: Cloud,
        color: 'from-cyan-400 to-blue-500'
      },
      {
        name: 'Multi-Cloud Management',
        description: 'Unified management across multiple cloud platforms',
        features: ['Centralized monitoring', 'Cost optimization', 'Security compliance', 'Resource allocation'],
        icon: Globe2,
        color: 'from-teal-400 to-cyan-500'
      }
    ]
  },
  {
    category: 'Cybersecurity',
    services: [
      {
        name: 'Security Audits',
        description: 'Comprehensive security assessments and vulnerability testing',
        features: ['Penetration testing', 'Security reviews', 'Compliance audits', 'Risk assessment'],
        icon: Shield,
        color: 'from-red-400 to-pink-500'
      },
      {
        name: 'Security Implementation',
        description: 'Implement robust security measures and best practices',
        features: ['Firewall configuration', 'Access control', 'Encryption setup', 'Security monitoring'],
        icon: Lock,
        color: 'from-yellow-400 to-orange-500'
      },
      {
        name: 'Incident Response',
        description: 'Rapid response and recovery from security incidents',
        features: ['24/7 monitoring', 'Threat detection', 'Incident containment', 'Recovery planning'],
        icon: ShieldCheck,
        color: 'from-green-400 to-emerald-500'
      }
    ]
  },
  {
    category: 'Support & Maintenance',
    services: [
      {
        name: 'Help Desk Support',
        description: 'Professional technical support for all IT-related issues',
        features: ['24/7 availability', 'Remote assistance', 'Ticket management', 'Knowledge base'],
        icon: MessageSquare,
        color: 'from-blue-400 to-indigo-500'
      },
      {
        name: 'Preventive Maintenance',
        description: 'Proactive maintenance to prevent system failures',
        features: ['Regular updates', 'Performance monitoring', 'Health checks', 'Predictive maintenance'],
        icon: Settings,
        color: 'from-orange-400 to-red-500'
      },
      {
        name: 'Disaster Recovery',
        description: 'Comprehensive backup and recovery solutions',
        features: ['Backup strategies', 'Recovery planning', 'Testing procedures', 'Documentation'],
        icon: FileCheck,
        color: 'from-teal-400 to-green-500'
      }
    ]
  }
];

const itTechnologies = [
  {
    name: 'Virtualization',
    description: 'VMware, Hyper-V, and containerization solutions for efficient resource utilization',
    icon: Server,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Cloud Platforms',
    description: 'AWS, Azure, Google Cloud, and hybrid cloud solutions',
    icon: Cloud,
    color: 'from-indigo-400 to-purple-500'
  },
  {
    name: 'Network Security',
    description: 'Firewalls, VPNs, intrusion detection, and advanced threat protection',
    icon: Shield,
    color: 'from-red-400 to-pink-500'
  },
  {
    name: 'Monitoring Tools',
    description: 'Comprehensive monitoring and alerting for infrastructure and applications',
    icon: Monitor,
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Backup Solutions',
    description: 'Automated backup systems with disaster recovery capabilities',
    icon: HardDrive,
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Automation',
    description: 'Infrastructure as code and automated deployment pipelines',
    icon: Workflow,
    color: 'from-purple-400 to-pink-500'
  }
];

const successMetrics = [
  {
    metric: '99.9%',
    label: 'Uptime',
    description: 'Guaranteed system availability and reliability'
  },
  {
    metric: '50%',
    label: 'Cost Reduction',
    description: 'Average cost savings through IT optimization'
  },
  {
    metric: '4x',
    label: 'Efficiency Gain',
    description: 'Significant improvement in IT operations'
  },
  {
    metric: '<15min',
    label: 'Response Time',
    description: 'Average response time for critical issues'
  }
];

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
    applications: ['HIPAA compliance', 'Electronic health records', 'Medical device security', 'Patient data protection']
  },
  {
    name: 'Finance',
    icon: DollarSign,
    color: 'from-green-400 to-emerald-500',
    applications: ['PCI DSS compliance', 'Fraud detection systems', 'Secure trading platforms', 'Regulatory reporting']
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    color: 'from-blue-400 to-cyan-500',
    applications: ['Industrial IoT security', 'Supply chain systems', 'Quality control systems', 'Production monitoring']
  },
  {
    name: 'Retail',
    icon: ShoppingCart,
    color: 'from-purple-400 to-pink-500',
    applications: ['E-commerce platforms', 'Inventory management', 'Customer data security', 'Payment processing']
  },
  {
    name: 'Education',
    icon: Building,
    color: 'from-indigo-400 to-purple-500',
    applications: ['Student information systems', 'Learning management platforms', 'Campus network security', 'Digital resources']
  },
  {
    name: 'Government',
    icon: Shield,
    color: 'from-yellow-400 to-orange-500',
    applications: ['Compliance frameworks', 'Secure communications', 'Data classification', 'Access control systems']
  }
];

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support for modern businesses."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Server className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions that keep your business running smoothly. From infrastructure management to cybersecurity, we provide the expertise you need to succeed in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-400/25"
              >
                Get IT Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-colors duration-300"
              >
                Talk to Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven IT Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our IT services deliver measurable results and reliable performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From infrastructure to security, we cover all aspects of modern IT management
            </p>
          </motion.div>

          {itServices.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IT Technologies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage industry-leading tools and platforms to deliver superior IT solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{tech.name}</h4>
                <p className="text-slate-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Solutions Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our IT expertise spans diverse sectors with industry-specific solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{industry.name}</h4>
                </div>
                
                <div className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let our IT experts help you build a robust, secure, and scalable technology foundation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-400/25"
              >
                Get IT Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

