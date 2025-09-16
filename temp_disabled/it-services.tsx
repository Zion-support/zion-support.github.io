import React from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';

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
    marketPrice: '$5,000 - $15,000/month',
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
    marketPrice: '$8,000 - $25,000/month',
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
    marketPrice: '$3,000 - $12,000/month',
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
    marketPrice: '$15,000 - $75,000/month',
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
    marketPrice: '$6,000 - $20,000/month',
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
    marketPrice: '$4,000 - $15,000/month',
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
    marketPrice: '$8,000 - $30,000/month',
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
    marketPrice: '$3,000 - $12,000/month',
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
    marketPrice: '$6,000 - $20,000/month',
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
    marketPrice: '$5,000 - $18,000/month',
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
    marketPrice: '$4,000 - $15,000/month',
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
    marketPrice: '$3,000 - $12,000/month',
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
    marketPrice: '$5,000 - $18,000/month',
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
    marketPrice: '$3,000 - $12,000/month',
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
    marketPrice: '$8,000 - $30,000/month',
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
    marketPrice: '$2,500 - $9,000/month',
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
    marketPrice: '$3,000 - $12,000/month',
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
    marketPrice: '$4,000 - $15,000/month',
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
    marketPrice: '$5,000 - $18,000/month',
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
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/itsm',
    popular: false
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Deploy and manage edge computing infrastructure for low-latency applications.',
    icon: Server,
    features: ['Edge Node Deployment'Content Delivery Networks'IoT Integration'Real-time Processing'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Complete blockchain infrastructure setup and management for enterprise applications.',
    icon: Network,
    features: ['Blockchain Deployment'Smart Contract Development'Node Management'Security Hardening'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Blockchain',
    popular: true
  },
  {
    title: '5G Network Implementation',
    description: '5G network infrastructure designdeploymentand optimization services.',
    icon: Network,
    features: ['5G Core Network'RAN Implementation'Network Slicing'Performance Optimization'],
    pricing: '$100,000 - $500,000/project',
    category: '5G Technology'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform development and device management solutions.',
    icon: Cpu,
    features: ['Device Management'Data Analytics'Real-time Monitoring'Security Framework'],
    pricing: '$25,000 - $125,000/project',
    category: 'IoT',
    popular: true
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation consulting and implementation services.',
    icon: Zap,
    features: ['Technology Assessment'Digital Strategy'Change Management'Implementation Support'],
    pricing: '$50,000 - $300,000/project',
    category: 'Consulting',
    popular: true
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps culture implementation with CI/CD pipelines and automation.',
    icon: Settings,
    features: ['CI/CD Pipelines'Infrastructure as Code'Automated Testing'Deployment Automation'],
    pricing: '$15,000 - $75,000/setup',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implement microservices architecture for scalable applications.',
    icon: Server,
    features: ['Service Design'API Gateway'Service Mesh'Container Orchestration'],
    pricing: '$40,000 - $200,000/project',
    category: 'Architecture'
  },
  {
    title: 'Data Center Migration Services',
    description: 'Complete data center migration and consolidation services.',
    icon: Server,
    features: ['Migration Planning'Data Transfer'Downtime Minimization'Testing & Validation'],
    pricing: '$25,000 - $150,000/project',
    category: 'Migration'
  },
  {
    title: 'Disaster Recovery Solutions',
    description: 'Comprehensive disaster recovery and business continuity solutions.',
    icon: Shield,
    features: ['Backup Strategies'Recovery Testing'Failover Systems'RTO/RPO Optimization'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Disaster Recovery',
    popular: true
  },
  {
    title: 'API Management Platform',
    description: 'Complete API management platform with securitymonitoringand analytics.',
    icon: Network,
    features: ['API Gateway'Rate Limiting'Authentication'Analytics Dashboard'],
    pricing: '$10,000 - $50,000/setup',
    category: 'API Management'
  },
  {
    title: 'Identity & Access Management (IAM)',
    description: 'Comprehensive identity and access management solutions for enterprise security.',
    icon: Lock,
    features: ['Single Sign-On'Multi-Factor Authentication'Role-Based Access'Compliance Reporting'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Performance Testing & Optimization',
    description: 'Comprehensive performance testing and optimization services for applications.',
    icon: Zap,
    features: ['Load Testing'Stress Testing'Performance Profiling'Optimization Recommendations'],
    pricing: '$5,000 - $25,000/project',
    category: 'Performance'
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Optimize cloud infrastructure costs and resource utilization.',
    icon: DollarSign,
    features: ['Cost Analysis'Resource Rightsizing'Reserved Instances'Cost Monitoring'],
    pricing: '$10,000 - $50,000/project',
    category: 'Cloud Optimization',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Implement IT service management processes and tools for better service delivery.',
    icon: Settings,
    features: ['Incident Management'Change Management'Service Catalog'SLA Monitoring'],
    pricing: '$20,000 - $100,000/setup',
    category: 'ITSM'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model for enhanced enterprise security.',
    icon: Shield,
    features: ['Identity Verification'Device Trust'Network Segmentation'Continuous Monitoring'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Security Architecture',
    popular: true
  },
  {
    title: 'Hybrid Cloud Solutions',
    description: 'Design and implement hybrid cloud solutions for seamless cloud integration.',
    icon: Cloud,
    features: ['Multi-cloud Strategy'Data Synchronization'Workload Migration'Security Integration'],
    pricing: '$40,000 - $200,000/project',
    category: 'Hybrid Cloud'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management and optimization services.',
    icon: Package,
    features: ['Asset Discovery'License Management'Lifecycle Tracking'Cost Optimization'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Network Security Operations Center (SOC)',
    description: '24/7 security monitoring and incident response services.',
    icon: Shield,
    features: ['Threat Monitoring'Incident Response'Security Analytics'Compliance Reporting'],
    pricing: '$50,000 - $250,000/month',
    category: 'SOC Services',
    popular: true
  },
  {
    title: 'IT Governance & Risk Management',
    description: 'Comprehensive IT governance and risk management framework implementation.',
    icon: Lock,
    features: ['Risk Assessment'Policy Development'Compliance Monitoring'Audit Support'],
    pricing: '$25,000 - $125,000/project',
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const it-services: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">it-services</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default it-services;