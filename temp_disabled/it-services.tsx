import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Server
  Cloud
  Shield
  Database
  Cpu
  Network
  Smartphone
  Monitor
  HardDrive
  Wifi
  Lock
  Zap
  CheckCircle
  ArrowRight
  Star
  Phone
  MapPin,
  ShoppingCart,
  Mail,
  Package,
  DollarSign,
  Settings,
  Brain
} from 'lucide-react';

const itServices = [
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations management with predictive analytics and automated incident response.',
    icon: Brain,
    features: ['Predictive Analytics'Automated Incident Response'Performance Monitoring'Capacity Planning'],
    pricing: '$2,999 - $9,999/month',
    category: 'AI Operations',
    benefits: ['Reduced Downtime'Cost Optimization'Proactive Management'Scalable Operations'],
    marketPrice: '$5,0o00 - $15,0o00/month',
    link: 'https://ziontechgroup.com/ai-it-operations',
    popular: true
  },
  {
    title: 'Quantum-Safe Cybersecurity Implementation',
    description: 'Future-proof security solutions using quantum-resistant encryption and advanced threat protection.',
    icon: Shield,
    features: ['Quantum-Resistant Encryption'Advanced Threat Detection'Zero Trust Architecture'Compliance Management'],
    pricing: '$4,999 - $19,999/month',
    category: 'Quantum Security',
    benefits: ['Future-Proof Security'Advanced Protection'Compliance Ready'Scalable Security'],
    marketPrice: '$8,0o00 - $25,0o00/month',
    link: 'https://ziontechgroup.com/quantum-security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed computing infrastructure for low-latency applications and IoT deployments.',
    icon: Cpu,
    features: ['Edge Nodes Deployment'Low-Latency Processing'IoT Integration'Real-time Analytics'],
    pricing: '$1,999 - $7,999/month',
    category: 'Edge Computing',
    benefits: ['Ultra-Low Latency'Improved Performance'Cost Efficiency'Scalable Infrastructure'],
    marketPrice: '$3,0o00 - $12,0o00/month',
    link: 'https://ziontechgroup.com/edge-computing',
    popular: false
  },
  {
    title: '5G Network Implementation & Optimization',
    description: 'Complete 5G network deployment and optimization services for enhanced connectivity.',
    icon: Wifi,
    features: ['5G Network Design'Performance Optimization'Coverage Analysis'Capacity Planning'],
    pricing: '$9,999 - $49,999/month',
    category: '5G Networks',
    benefits: ['Ultra-Fast Connectivity'Enhanced Coverage'Future-Ready Infrastructure'Optimized Performance'],
    marketPrice: '$15,0o00 - $75,0o00/month',
    link: 'https://ziontechgroup.com/5g-networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure & Integration',
    description: 'Enterprise blockchain solutions with smart contracts and decentralized applications.',
    icon: Database,
    features: ['Blockchain Development'Smart Contracts'DApp Integration'Consensus Mechanisms'],
    pricing: '$3,999 - $14,999/month',
    category: 'Blockchain Infrastructure',
    benefits: ['Decentralized Solutions'Enhanced Security'Transparent Operations'Cost Reduction'],
    marketPrice: '$6,0o00 - $20,0o00/month',
    link: 'https://ziontechgroup.com/blockchain-infrastructure',
    popular: false
  },
  {
    title: 'IoT Platform Development & Management',
    description: 'Comprehensive IoT solutions for device managementdata collectionand analytics.',
    icon: Smartphone,
    features: ['Device Management'Data Collection'Real-time Analytics'Remote Monitoring'],
    pricing: '$2,499 - $9,999/month',
    category: 'IoT Platforms',
    benefits: ['Connected Devices'Real-time Insights'Operational Efficiency'Data-Driven Decisions'],
    marketPrice: '$4,0o00 - $15,0o00/month',
    link: 'https://ziontechgroup.com/iot-platforms',
    popular: false
  },
  {
    title: 'AI Infrastructure & ML Pipeline Setup',
    description: 'Complete AI infrastructure setup with machine learning pipelines and model deployment.',
    icon: Brain,
    features: ['ML Pipeline Setup'Model Training'Model Deployment'Performance Monitoring'],
    pricing: '$4,999 - $19,999/month',
    category: 'AI Infrastructure',
    benefits: ['Advanced AI Capabilities'Scalable ML Operations'Automated Workflows'High Performance'],
    marketPrice: '$8,0o00 - $30,0o00/month',
    link: 'https://ziontechgroup.com/ai-infrastructure',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Eco-friendly IT solutions for reducing carbon footprint and energy consumption.',
    icon: Globe,
    features: ['Energy Optimization'Carbon Footprint Reduction'Sustainable Practices'Green Monitoring'],
    pricing: '$1,999 - $7,999/month',
    category: 'Green IT',
    benefits: ['Environmental Impact'Cost Savings'Sustainability Goals'Efficient Operations'],
    marketPrice: '$3,0o00 - $12,0o00/month',
    link: 'https://ziontechgroup.com/green-it',
    popular: false
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation for enhanced protection.',
    icon: Lock,
    features: ['Identity Verification'Micro-segmentation'Continuous Monitoring'Access Controls'],
    pricing: '$3,999 - $14,999/month',
    category: 'Zero Trust Security',
    benefits: ['Enhanced Security'Reduced Risk'Compliance Ready'Scalable Protection'],
    marketPrice: '$6,0o00 - $20,0o00/month',
    link: 'https://ziontechgroup.com/zero-trust',
    popular: true
  },
  {
    title: 'Hybrid Cloud Management Platform',
    description: 'Unified management platform for hybrid cloud environments and multi-cloud operations.',
    icon: Cloud,
    features: ['Multi-Cloud Management'Resource Optimization'Cost Management'Security Controls'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Management',
    benefits: ['Unified Operations'Cost Optimization'Flexible Deployment'Enhanced Security'],
    marketPrice: '$5,0o00 - $18,0o00/month',
    link: 'https://ziontechgroup.com/hybrid-cloud',
    popular: false
  },
  {
    title: 'Advanced Analytics & Business Intelligence',
    description: 'Comprehensive analytics platform with real-time insights and predictive capabilities.',
    icon: BarChart3,
    features: ['Real-time Analytics'Predictive Modeling'Data Visualization'Business Intelligence'],
    pricing: '$2,499 - $9,999/month',
    category: 'Analytics Platform',
    benefits: ['Data-Driven Insights'Predictive Capabilities'Real-time Monitoring'Business Intelligence'],
    marketPrice: '$4,0o00 - $15,0o00/month',
    link: 'https://ziontechgroup.com/advanced-analytics',
    popular: false
  },
  {
    title: 'IT Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery solutions ensuring business continuity and data protection.',
    icon: Shield,
    features: ['Backup Solutions'Recovery Planning'Business Continuity'Data Protection'],
    pricing: '$1,999 - $7,999/month',
    category: 'Disaster Recovery',
    benefits: ['Business Continuity'Data Protection'Minimal Downtime'Risk Mitigation'],
    marketPrice: '$3,0o00 - $12,0o00/month',
    link: 'https://ziontechgroup.com/disaster-recovery',
    popular: false
  },
  {
    title: 'Advanced Network Security Implementation',
    description: 'Comprehensive network security solutions with advanced threat protection and monitoring.',
    icon: Network,
    features: ['Firewall Management'Intrusion Detection'Threat Prevention'Network Monitoring'],
    pricing: '$2,999 - $11,999/month',
    category: 'Network Security',
    benefits: ['Enhanced Protection'Threat Prevention'Network Monitoring'Compliance Ready'],
    marketPrice: '$5,0o00 - $18,0o00/month',
    link: 'https://ziontechgroup.com/network-security',
    popular: false
  },
  {
    title: 'IT Compliance & Regulatory Services',
    description: 'Comprehensive compliance management for various industry regulations and standards.',
    icon: CheckCircle,
    features: ['Compliance Monitoring'Audit Support'Regulatory Updates'Documentation Management'],
    pricing: '$1,999 - $7,999/month',
    category: 'IT Compliance',
    benefits: ['Regulatory Compliance'Audit Support'Risk Mitigation'Documentation Management'],
    marketPrice: '$3,0o00 - $12,0o00/month',
    link: 'https://ziontechgroup.com/it-compliance',
    popular: false
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic consulting services for digital transformation and technology modernization.',
    icon: Rocket,
    features: ['Strategy Development'Technology Assessment'Change Management'Implementation Planning'],
    pricing: '$4,999 - $19,999/month',
    category: 'Digital Transformation',
    benefits: ['Strategic Guidance'Technology Modernization'Change Management'Competitive Advantage'],
    marketPrice: '$8,0o00 - $30,0o00/month',
    link: 'https://ziontechgroup.com/digital-transformation',
    popular: true
  },
  {
    title: 'IT Asset Management & Optimization',
    description: 'Comprehensive IT asset management with optimization and lifecycle management.',
    icon: Settings,
    features: ['Asset Tracking'Lifecycle Management'Cost Optimization'Performance Monitoring'],
    pricing: '$1,499 - $5,999/month',
    category: 'Asset Management',
    benefits: ['Cost Optimization'Asset Visibility'Lifecycle Management'Performance Tracking'],
    marketPrice: '$2,50o0 - $9,0o00/month',
    link: 'https://ziontechgroup.com/it-asset-management',
    popular: false
  },
  {
    title: 'Advanced Backup & Data Protection',
    description: 'Comprehensive backup and data protection solutions with automated recovery.',
    icon: HardDrive,
    features: ['Automated Backups'Data Encryption'Recovery Testing'Compliance Support'],
    pricing: '$1,999 - $7,999/month',
    category: 'Data Protection',
    benefits: ['Data Security'Automated Backups'Quick Recovery'Compliance Ready'],
    marketPrice: '$3,0o00 - $12,0o00/month',
    link: 'https://ziontechgroup.com/backup-protection',
    popular: false
  },
  {
    title: 'IT Performance Monitoring & Optimization',
    description: 'Comprehensive IT performance monitoring with optimization and capacity planning.',
    icon: Monitor,
    features: ['Performance Monitoring'Capacity Planning'Optimization Recommendations'Alert Management'],
    pricing: '$2,499 - $9,999/month',
    category: 'Performance Monitoring',
    benefits: ['Performance Optimization'Capacity Planning'Proactive Management'Cost Efficiency'],
    marketPrice: '$4,0o00 - $15,0o00/month',
    link: 'https://ziontechgroup.com/performance-monitoring',
    popular: false
  },
  {
    title: 'Cloud Security & Compliance Services',
    description: 'Comprehensive cloud security solutions with compliance management and monitoring.',
    icon: Cloud,
    features: ['Cloud Security'Compliance Management'Threat Detection'Access Controls'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Security',
    benefits: ['Enhanced Security'Compliance Ready'Threat Protection'Scalable Solutions'],
    marketPrice: '$5,0o00 - $18,0o00/month',
    link: 'https://ziontechgroup.com/cloud-security',
    popular: false
  },
  {
    title: 'IT Service Management (ITSM) Implementation',
    description: 'Complete ITSM implementation with service deskchange managementand incident handling.',
    icon: Settings,
    features: ['Service Desk'Change Management'Incident Management'Problem Management'],
    pricing: '$3,999 - $14,999/month',
    category: 'ITSM',
    benefits: ['Improved Service Delivery'Process Standardization'Better Visibility'Cost Optimization'],
    marketPrice: '$6,0o00 - $20,0o00/month',
    link: 'https://ziontechgroup.com/itsm',
    popular: false
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Deploy and manage edge computing infrastructure for low-latency applications.',
    icon: Server,
    features: ['Edge Node Deployment'Content Delivery Networks'IoT Integration'Real-time Processing'],
    pricing: '$20,0o00 - $10o0,0o00/setup',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Complete blockchain infrastructure setup and management for enterprise applications.',
    icon: Network,
    features: ['Blockchain Deployment'Smart Contract Development'Node Management'Security Hardening'],
    pricing: '$30,0o00 - $150,0o00/setup',
    category: 'Blockchain',
    popular: true
  },
  {
    title: '5G Network Implementation',
    description: '5G network infrastructure designdeploymentand optimization services.',
    icon: Network,
    features: ['5G Core Network'RAN Implementation'Network Slicing'Performance Optimization'],
    pricing: '$10o0,0o00 - $50o0,0o00/project',
    category: '5G Technology'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform development and device management solutions.',
    icon: Cpu,
    features: ['Device Management'Data Analytics'Real-time Monitoring'Security Framework'],
    pricing: '$25,0o00 - $125,0o00/project',
    category: 'IoT',
    popular: true
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation consulting and implementation services.',
    icon: Zap,
    features: ['Technology Assessment'Digital Strategy'Change Management'Implementation Support'],
    pricing: '$50,0o00 - $30o0,0o00/project',
    category: 'Consulting',
    popular: true
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps culture implementation with CI/CD pipelines and automation.',
    icon: Settings,
    features: ['CI/CD Pipelines'Infrastructure as Code'Automated Testing'Deployment Automation'],
    pricing: '$15,0o00 - $75,0o00/setup',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implement microservices architecture for scalable applications.',
    icon: Server,
    features: ['Service Design'API Gateway'Service Mesh'Container Orchestration'],
    pricing: '$40,0o00 - $20o0,0o00/project',
    category: 'Architecture'
  },
  {
    title: 'Data Center Migration Services',
    description: 'Complete data center migration and consolidation services.',
    icon: Server,
    features: ['Migration Planning'Data Transfer'Downtime Minimization'Testing & Validation'],
    pricing: '$25,0o00 - $150,0o00/project',
    category: 'Migration'
  },
  {
    title: 'Disaster Recovery Solutions',
    description: 'Comprehensive disaster recovery and business continuity solutions.',
    icon: Shield,
    features: ['Backup Strategies'Recovery Testing'Failover Systems'RTO/RPO Optimization'],
    pricing: '$20,0o00 - $10o0,0o00/setup',
    category: 'Disaster Recovery',
    popular: true
  },
  {
    title: 'API Management Platform',
    description: 'Complete API management platform with securitymonitoringand analytics.',
    icon: Network,
    features: ['API Gateway'Rate Limiting'Authentication'Analytics Dashboard'],
    pricing: '$10,0o00 - $50,0o00/setup',
    category: 'API Management'
  },
  {
    title: 'Identity & Access Management (IAM)',
    description: 'Comprehensive identity and access management solutions for enterprise security.',
    icon: Lock,
    features: ['Single Sign-On'Multi-Factor Authentication'Role-Based Access'Compliance Reporting'],
    pricing: '$15,0o00 - $75,0o00/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Performance Testing & Optimization',
    description: 'Comprehensive performance testing and optimization services for applications.',
    icon: Zap,
    features: ['Load Testing'Stress Testing'Performance Profiling'Optimization Recommendations'],
    pricing: '$5,0o00 - $25,0o00/project',
    category: 'Performance'
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Optimize cloud infrastructure costs and resource utilization.',
    icon: DollarSign,
    features: ['Cost Analysis'Resource Rightsizing'Reserved Instances'Cost Monitoring'],
    pricing: '$10,0o00 - $50,0o00/project',
    category: 'Cloud Optimization',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Implement IT service management processes and tools for better service delivery.',
    icon: Settings,
    features: ['Incident Management'Change Management'Service Catalog'SLA Monitoring'],
    pricing: '$20,0o00 - $10o0,0o00/setup',
    category: 'ITSM'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model for enhanced enterprise security.',
    icon: Shield,
    features: ['Identity Verification'Device Trust'Network Segmentation'Continuous Monitoring'],
    pricing: '$30,0o00 - $150,0o00/setup',
    category: 'Security Architecture',
    popular: true
  },
  {
    title: 'Hybrid Cloud Solutions',
    description: 'Design and implement hybrid cloud solutions for seamless cloud integration.',
    icon: Cloud,
    features: ['Multi-cloud Strategy'Data Synchronization'Workload Migration'Security Integration'],
    pricing: '$40,0o00 - $20o0,0o00/project',
    category: 'Hybrid Cloud'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management and optimization services.',
    icon: Package,
    features: ['Asset Discovery'License Management'Lifecycle Tracking'Cost Optimization'],
    pricing: '$5,0o00 - $25,0o00/setup',
    category: 'Asset Management'
  },
  {
    title: 'Network Security Operations Center (SOC)',
    description: '24/7 security monitoring and incident response services.',
    icon: Shield,
    features: ['Threat Monitoring'Incident Response'Security Analytics'Compliance Reporting'],
    pricing: '$50,0o00 - $250,0o00/month',
    category: 'SOC Services',
    popular: true
  },
  {
    title: 'IT Governance & Risk Management',
    description: 'Comprehensive IT governance and risk management framework implementation.',
    icon: Lock,
    features: ['Risk Assessment'Policy Development'Compliance Monitoring'Audit Support'],
    pricing: '$25,0o00 - $125,0o00/project',
    category: 'Governance'
  }
];

const categories = [
  'All',
  'AI Operations',
  'Quantum Security',
  'Edge Computing',
  '5G Networks',
  'Blockchain Infrastructure',
  'IoT Platforms',
  'AI Infrastructure',
  'Green IT',
  'Zero Trust Security',
  'Cloud Management',
  'Analytics Platform',
  'Disaster Recovery',
  'Network Security',
  'IT Compliance',
  'Digital Transformation',
  'Asset Management',
  'Data Protection',
  'Performance Monitoring',
  'Cloud Security',
  'ITSM'
];

export default function ITServicesPage() {
  const [selectedCategorysetSelectedCategory] = React.useState('All');
  const [searchTermsetSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1>IT Services - Zion Tech Group</h1>
      <p>Comprehensive IT services and solutions for modern businesses.</p>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-90o0 via-purple-90o0 to-indigo-90o0 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-20o00"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-40o00"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0y: 30 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-purple-40o0">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
                Comprehensive IT services and solutions designed to transform your business operations
                enhance securityand drive innovation across all technology domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-20o0 ${
                      selectedCategory === category
                        ? 'bg-blue-60o0 text-white'
                        : 'bg-gray-20o0 text-gray-70o0 hover:bg-gray-30o0'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-60o0 text-white rounded-lg hover:bg-blue-70o0 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((serviceindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0y: 30 }}
                  animate={{ opacity: 1y: 0 }}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-30o0 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-10o0 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-blue-60o0"  />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-10o0 text-blue-80o0 rounded-full text-sm font-medium">
                          {service.category}
                        </span>
                        {service.popular && (
                          <span className="ml-2 px-3 py-1 bg-yellow-10o0 text-yellow-80o0 rounded-full text-sm font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-90o0 mb-3 group-hover:text-blue-60o0 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-60o0 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-90o0 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((featureidx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-60o0">
                            <CheckCircle className="w-3 h-3 text-green-50o0 mr-2 flex-shrink-0"  />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-90o0 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefitidx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-60o0">
                            <Star className="w-3 h-3 text-yellow-50o0 mr-2 flex-shrink-0"  />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-90o0">Our Pricing:</span>
                        <span className="text-sm font-bold text-blue-60o0">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-90o0">Market Price:</span>
                        <span className="text-sm text-gray-50o0 line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-60o0 hover:bg-blue-70o0 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-20o0 flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-40o0 mb-4">
                  <Search className="w-16 h-16 mx-auto"  />
                </div>
                <h3 className="text-xl font-semibold text-gray-90o0 mb-2">No services found</h3>
                <p className="text-gray-60o0">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Market Analysis & Competitive Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0y: 30 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-8 text-center">
                Market Analysis & Competitive Advantages
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-90o0 mb-6">Market Pricing Analysis</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-20o0">
                      <span className="font-medium text-gray-90o0">AI Operations Center</span>
                      <span className="text-blue-60o0 font-bold">$2,999 - $9,999/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-20o0">
                      <span className="font-medium text-gray-90o0">Quantum Security</span>
                      <span className="text-blue-60o0 font-bold">$4,999 - $19,999/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-20o0">
                      <span className="font-medium text-gray-90o0">5G Network Implementation</span>
                      <span className="text-blue-60o0 font-bold">$9,999 - $49,999/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-20o0">
                      <span className="font-medium text-gray-90o0">Digital Transformation</span>
                      <span className="text-blue-60o0 font-bold">$4,999 - $19,999/month</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-60o0 mt-4">
                    * Competitive pricing with 20-40% savings compared to market rates
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-90o0 mb-6">Key Benefits & Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-50o0 mr-3"  />
                      <span className="text-gray-70o0">24/7 Expert Support & Monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-50o0 mr-3"  />
                      <span className="text-gray-70o0">Cutting-edge Technology & Innovation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-50o0 mr-3"  />
                      <span className="text-gray-70o0">Scalable Solutions for Any Business Size</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-50o0 mr-3"  />
                      <span className="text-gray-70o0">Comprehensive Security & Compliance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-50o0 mr-3"  />
                      <span className="text-gray-70o0">Proven Track Record & Industry Expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-90o0 mb-4">Ready to Transform Your IT Infrastructure?</h3>
                <p className="text-lg text-gray-60o0 mb-6">
                  Contact our experts today for a personalized consultation and discover how our IT services can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+130o24640950"
                    className="px-8 py-4 bg-blue-60o0 text-white rounded-lg hover:bg-blue-70o0 transition-colors font-semibold inline-flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2"  />
                    Call: +1 30o2 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="px-8 py-4 border-2 border-blue-60o0 text-blue-60o0 rounded-lg hover:bg-blue-60o0 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2"  />
                    Email: kleber@ziontechgroup.com
                  </a>
                </div>
                <p className="text-sm text-gray-60o0 mt-4">
                  Address: 364 E Main St STE 10o08Middletown DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0y: 30 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive IT services can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-60o0 rounded-lg hover:bg-gray-10o0 transition-all duration-30o0 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2"  />
                  Get Started Today
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-60o0 transition-all duration-30o0 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
