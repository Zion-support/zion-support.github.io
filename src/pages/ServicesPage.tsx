import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Rocket, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Workflow, 
  MessageCircle, 
  BarChart3, 
  Heart, 
  DollarSign, 
  Atom, 
  Satellite, 
  Truck, 
  Home, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Factory, 
  ShoppingCart, 
  Network, 
  Wifi, 
  Server, 
  Code, 
  Monitor, 
  Smartphone, 
  Activity, 
  Eye, 
  Search, 
  Settings, 
  Palette, 
  Video, 
  GraduationCap, 
  Handshake, 
  ShoppingBag, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Star as StarIcon,
  Users2, 
  Cog,
  ChevronRight,
  Play,
  ExternalLink,
  Filter,
  Grid,
  List,
  Search as SearchIcon,
  FileText,
  PenTool
} from 'lucide-react';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Zap,
      description: 'Scalable software-as-a-service solutions for modern businesses',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      icon: Brain,
      description: 'Intelligent automation and artificial intelligence solutions',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: Shield,
      description: 'Robust IT infrastructure and cybersecurity solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge technology solutions for the future',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'specialized-services',
      name: 'Specialized Services',
      icon: Briefcase,
      description: 'Industry-specific solutions and specialized consulting services',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: BarChart3,
      description: 'Advanced data analytics and business intelligence solutions',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const allServices = [
    // Micro SAAS Solutions
    {
      name: 'AI Sales Copilot',
      category: 'micro-saas',
      description: 'Intelligent sales automation with AI-powered lead scoring and customer insights. Boost conversion rates by 40% with predictive analytics and automated follow-ups.',
      href: '/services/ai-sales-copilot',
      price: '$299/month',
      features: ['AI Lead Scoring', 'Customer Insights', 'Sales Analytics', 'CRM Integration', 'Predictive Forecasting', 'Automated Follow-ups'],
      icon: Users,
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      name: 'Cloud FinOps Optimizer',
      category: 'micro-saas',
      description: 'Automated cloud cost optimization and financial operations management. Reduce cloud costs by up to 35% with intelligent resource allocation.',
      href: '/services/cloud-finops-optimizer',
      price: '$199/month',
      features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'Automated Scaling', 'Cost Anomaly Detection', 'ROI Analytics'],
      icon: DollarSign,
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      name: 'AI Compliance Assistant',
      category: 'micro-saas',
      description: 'Automated compliance monitoring and regulatory reporting for businesses. Stay compliant with GDPR, HIPAA, SOX, and industry regulations.',
      href: '/services/ai-compliance-assistant',
      price: '$399/month',
      features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trails', 'Policy Management', 'Compliance Scoring'],
      icon: Shield,
      rating: 4.7,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Project Management Platform',
      category: 'micro-saas',
      description: 'AI-powered project management with intelligent resource allocation. Increase project success rates by 50% with predictive risk management.',
      href: '/services/ai-project-management-platform',
      price: '$299/month',
      features: ['Smart Scheduling', 'Resource Optimization', 'Risk Prediction', 'Progress Tracking', 'Team Performance Analytics', 'Automated Reporting'],
      icon: Workflow,
      rating: 4.6,
      reviews: 203,
      popular: false
    },
    {
      name: 'AI Marketing Automation Platform',
      category: 'micro-saas',
      description: 'Intelligent marketing automation with personalized customer experiences. Increase engagement by 60% with AI-driven personalization.',
      href: '/services/ai-marketing-automation-platform',
      price: '$249/month',
      features: ['Personalization', 'Campaign Automation', 'Analytics', 'A/B Testing', 'Customer Journey Mapping', 'Predictive Analytics'],
      icon: TrendingUp,
      rating: 4.8,
      reviews: 167,
      popular: true
    },
    {
      name: 'AI HR Platform',
      category: 'micro-saas',
      description: 'Comprehensive HR management with AI-powered insights and automation. Streamline recruitment and improve employee satisfaction.',
      href: '/services/ai-hr-platform',
      price: '$349/month',
      features: ['Recruitment AI', 'Employee Analytics', 'Performance Management', 'Compliance', 'Talent Acquisition', 'Employee Engagement'],
      icon: Users2,
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      name: 'AI Document Intelligence',
      category: 'micro-saas',
      description: 'Intelligent document processing and analysis with OCR and NLP. Process documents 10x faster with 99% accuracy.',
      href: '/services/ai-document-intelligence',
      price: '$179/month',
      features: ['OCR Processing', 'Document Classification', 'Data Extraction', 'Contract Analysis', 'Compliance Checking', 'Workflow Automation'],
      icon: FileText,
      rating: 4.8,
      reviews: 98,
      popular: true
    },
    {
      name: 'AI Customer Experience Platform',
      category: 'micro-saas',
      description: 'Omnichannel customer experience management with AI-powered insights. Increase customer satisfaction by 45%.',
      href: '/services/ai-customer-experience-platform',
      price: '$229/month',
      features: ['Omnichannel Support', 'Sentiment Analysis', 'Customer Journey Analytics', 'Personalization Engine', 'Feedback Management', 'Predictive Support'],
      icon: MessageCircle,
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Supply Chain Optimizer',
      category: 'micro-saas',
      description: 'Intelligent supply chain management with predictive analytics and optimization. Reduce inventory costs by 25%.',
      href: '/services/ai-supply-chain-optimizer',
      price: '$399/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Optimization', 'Sustainability Tracking'],
      icon: Truck,
      rating: 4.7,
      reviews: 87,
      popular: false
    },
    {
      name: 'AI Financial Analytics Platform',
      category: 'micro-saas',
      description: 'Advanced financial analytics and forecasting with AI-powered insights. Make data-driven financial decisions with confidence.',
      href: '/services/ai-financial-analytics-platform',
      price: '$279/month',
      features: ['Financial Forecasting', 'Risk Analysis', 'Cash Flow Optimization', 'Investment Analytics', 'Fraud Detection', 'Regulatory Reporting'],
      icon: BarChart3,
      rating: 4.8,
      reviews: 112,
      popular: true
    },
    {
      name: 'AI Content Creation Suite',
      category: 'micro-saas',
      description: 'AI-powered content creation and optimization platform. Create engaging content 5x faster with AI assistance.',
      href: '/services/ai-content-creation-suite',
      price: '$149/month',
      features: ['Content Generation', 'SEO Optimization', 'Brand Voice Consistency', 'Multi-language Support', 'Content Analytics', 'Collaboration Tools'],
      icon: PenTool,
      rating: 4.6,
      reviews: 203,
      popular: false
    },
    {
      name: 'AI Security Operations Center',
      category: 'micro-saas',
      description: '24/7 AI-powered security monitoring and threat detection. Detect and respond to threats 10x faster.',
      href: '/services/ai-security-operations-center',
      price: '$499/month',
      features: ['Threat Detection', 'Incident Response', 'Vulnerability Scanning', 'Compliance Monitoring', 'Security Analytics', 'Automated Remediation'],
      icon: Shield,
      rating: 4.9,
      reviews: 78,
      popular: true
    },

    // AI & Automation
    {
      name: 'AI Business Intelligence',
      category: 'ai-automation',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence. Transform raw data into actionable insights with 95% accuracy.',
      href: '/services/ai-business-intelligence',
      price: '$499/month',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'Natural Language Queries', 'Automated Reporting'],
      icon: BarChart3,
      rating: 4.9,
      reviews: 245,
      popular: true
    },
    {
      name: 'AI Customer Support Automation',
      category: 'ai-automation',
      description: 'Intelligent customer support automation with natural language processing. Reduce response time by 80% and increase satisfaction by 45%.',
      href: '/services/ai-customer-support-automation',
      price: '$199/month',
      features: ['24/7 Support', 'Natural Language Processing', 'Ticket Automation', 'Customer Analytics', 'Sentiment Analysis', 'Multi-language Support'],
      icon: MessageCircle,
      rating: 4.8,
      reviews: 189,
      popular: true
    },
    {
      name: 'AI Enterprise Automation Platform',
      category: 'ai-automation',
      description: 'End-to-end enterprise automation with AI-powered workflows. Automate 70% of routine tasks and boost productivity by 60%.',
      href: '/services/ai-enterprise-automation-platform',
      price: 'Custom Pricing',
      features: ['Process Automation', 'Workflow Orchestration', 'Integration Hub', 'Analytics', 'RPA Integration', 'Custom AI Models'],
      icon: Cog,
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Code Review Assistant',
      category: 'ai-automation',
      description: 'Automated code review and quality assurance with AI-powered analysis. Catch bugs 5x faster and improve code quality by 40%.',
      href: '/services/ai-code-review-assistant',
      price: '$179/month',
      features: ['Automated Code Review', 'Bug Detection', 'Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Team Collaboration'],
      icon: Code,
      rating: 4.7,
      reviews: 203,
      popular: false
    },
    {
      name: 'AI DevOps Automation',
      category: 'ai-automation',
      description: 'Intelligent DevOps automation with predictive deployment and monitoring. Reduce deployment failures by 60% and improve uptime by 35%.',
      href: '/services/ai-devops-automation',
      price: '$299/month',
      features: ['Predictive Deployment', 'Automated Testing', 'Infrastructure Monitoring', 'Performance Optimization', 'Incident Response', 'CI/CD Automation'],
      icon: Server,
      rating: 4.8,
      reviews: 134,
      popular: true
    },
    {
      name: 'AI Legal Document Analyzer',
      category: 'ai-automation',
      description: 'Intelligent legal document analysis and contract review. Process legal documents 10x faster with 99% accuracy.',
      href: '/services/ai-legal-document-analyzer',
      price: '$399/month',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Document Summarization', 'Legal Research', 'Automated Drafting'],
      icon: FileText,
      rating: 4.9,
      reviews: 87,
      popular: true
    },
    {
      name: 'AI Fraud Detection Platform',
      category: 'ai-automation',
      description: 'Advanced fraud detection and prevention with machine learning. Detect fraudulent activities in real-time with 99.5% accuracy.',
      href: '/services/ai-fraud-detection-platform',
      price: '$449/month',
      features: ['Real-time Detection', 'Machine Learning Models', 'Risk Scoring', 'Transaction Monitoring', 'Behavioral Analysis', 'Compliance Reporting'],
      icon: Shield,
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Predictive Maintenance',
      category: 'ai-automation',
      description: 'Predictive maintenance for industrial equipment using AI and IoT. Reduce downtime by 50% and maintenance costs by 30%.',
      href: '/services/ai-predictive-maintenance',
      price: '$349/month',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration', 'Analytics Dashboard'],
      icon: Settings,
      rating: 4.8,
      reviews: 98,
      popular: false
    },
    {
      name: 'AI Healthcare Analytics',
      category: 'ai-automation',
      description: 'AI-powered healthcare analytics and patient care optimization. Improve patient outcomes by 25% with predictive healthcare insights.',
      href: '/services/ai-healthcare-analytics',
      price: '$599/month',
      features: ['Patient Risk Assessment', 'Treatment Optimization', 'Clinical Decision Support', 'Population Health Analytics', 'Drug Interaction Analysis', 'Outcome Prediction'],
      icon: Heart,
      rating: 4.9,
      reviews: 67,
      popular: true
    },
    {
      name: 'AI Content Moderation',
      category: 'ai-automation',
      description: 'Automated content moderation and safety monitoring. Moderate content 24/7 with 98% accuracy and reduce moderation costs by 70%.',
      href: '/services/ai-content-moderation',
      price: '$199/month',
      features: ['Real-time Moderation', 'Multi-language Support', 'Image & Video Analysis', 'Custom Rules Engine', 'API Integration', 'Analytics Dashboard'],
      icon: Eye,
      rating: 4.7,
      reviews: 189,
      popular: false
    },
    {
      name: 'AI Voice Analytics',
      category: 'ai-automation',
      description: 'Advanced voice analytics and speech recognition for customer interactions. Analyze customer sentiment and improve service quality.',
      href: '/services/ai-voice-analytics',
      price: '$249/month',
      features: ['Speech Recognition', 'Sentiment Analysis', 'Call Transcription', 'Quality Monitoring', 'Customer Insights', 'Performance Analytics'],
      icon: MessageCircle,
      rating: 4.8,
      reviews: 123,
      popular: true
    },
    {
      name: 'AI Email Marketing Optimizer',
      category: 'ai-automation',
      description: 'Intelligent email marketing optimization with AI-powered personalization. Increase open rates by 45% and click-through rates by 60%.',
      href: '/services/ai-email-marketing-optimizer',
      price: '$149/month',
      features: ['Send Time Optimization', 'Subject Line AI', 'Content Personalization', 'A/B Testing', 'Deliverability Optimization', 'Performance Analytics'],
      icon: Mail,
      rating: 4.6,
      reviews: 167,
      popular: false
    },

    // IT Infrastructure Services
    {
      name: 'Cloud Infrastructure Management',
      category: 'it-infrastructure',
      description: 'Comprehensive cloud infrastructure management and optimization. Reduce costs by 40% while improving performance and security.',
      href: '/services/cloud-infrastructure-management',
      price: '$399/month',
      features: ['Multi-cloud Management', 'Cost Optimization', 'Security Hardening', 'Performance Monitoring', 'Disaster Recovery', '24/7 Support'],
      icon: Cloud,
      rating: 4.8,
      reviews: 234,
      popular: true
    },
    {
      name: 'Cybersecurity Operations Center',
      category: 'it-infrastructure',
      description: '24/7 cybersecurity monitoring and threat response. Protect your business with enterprise-grade security and rapid incident response.',
      href: '/services/cybersecurity-operations-center',
      price: '$799/month',
      features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Vulnerability Management', 'Compliance Reporting', 'Security Training'],
      icon: Shield,
      rating: 4.9,
      reviews: 145,
      popular: true
    },
    {
      name: 'Network Security Assessment',
      category: 'it-infrastructure',
      description: 'Comprehensive network security assessment and penetration testing. Identify vulnerabilities and strengthen your security posture.',
      href: '/services/network-security-assessment',
      price: '$2,999/project',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audit', 'Risk Assessment', 'Remediation Plan', 'Compliance Check'],
      icon: Network,
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      name: 'Data Backup & Recovery',
      category: 'it-infrastructure',
      description: 'Automated data backup and disaster recovery solutions. Ensure business continuity with 99.9% uptime guarantee.',
      href: '/services/data-backup-recovery',
      price: '$199/month',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Cross-region Replication', 'RTO/RPO Optimization', 'Testing & Validation'],
      icon: Database,
      rating: 4.9,
      reviews: 178,
      popular: true
    },
    {
      name: 'IT Asset Management',
      category: 'it-infrastructure',
      description: 'Comprehensive IT asset lifecycle management and optimization. Track, manage, and optimize your IT investments.',
      href: '/services/it-asset-management',
      price: '$149/month',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Monitoring', 'Software Licensing', 'Depreciation Tracking'],
      icon: Monitor,
      rating: 4.7,
      reviews: 156,
      popular: false
    },
    {
      name: 'Mobile Device Management',
      category: 'it-infrastructure',
      description: 'Enterprise mobile device management and security. Secure and manage mobile devices across your organization.',
      href: '/services/mobile-device-management',
      price: '$99/month',
      features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring', 'Usage Analytics'],
      icon: Smartphone,
      rating: 4.8,
      reviews: 134,
      popular: true
    },
    {
      name: 'API Security Gateway',
      category: 'it-infrastructure',
      description: 'Advanced API security and management platform. Protect your APIs with enterprise-grade security and monitoring.',
      href: '/services/api-security-gateway',
      price: '$299/month',
      features: ['API Authentication', 'Rate Limiting', 'Threat Protection', 'Traffic Monitoring', 'Analytics Dashboard', 'Developer Portal'],
      icon: Lock,
      rating: 4.8,
      reviews: 98,
      popular: false
    },
    {
      name: 'Zero Trust Security Framework',
      category: 'it-infrastructure',
      description: 'Implement zero trust security architecture for maximum protection. Never trust, always verify with comprehensive security controls.',
      href: '/services/zero-trust-security',
      price: '$599/month',
      features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Access Control', 'Continuous Monitoring', 'Policy Enforcement'],
      icon: Shield,
      rating: 4.9,
      reviews: 67,
      popular: true
    },
    {
      name: 'Container Security Platform',
      category: 'it-infrastructure',
      description: 'Comprehensive container security and compliance management. Secure your containerized applications and infrastructure.',
      href: '/services/container-security-platform',
      price: '$349/month',
      features: ['Image Scanning', 'Runtime Protection', 'Compliance Monitoring', 'Vulnerability Management', 'Policy Enforcement', 'Incident Response'],
      icon: Server,
      rating: 4.7,
      reviews: 89,
      popular: false
    },
    {
      name: 'Edge Computing Infrastructure',
      category: 'it-infrastructure',
      description: 'Distributed edge computing infrastructure for low-latency applications. Bring computing closer to your users for better performance.',
      href: '/services/edge-computing-infrastructure',
      price: '$499/month',
      features: ['Global Edge Network', 'Low Latency', 'High Availability', 'Auto Scaling', 'Content Delivery', 'Real-time Processing'],
      icon: Globe,
      rating: 4.8,
      reviews: 112,
      popular: true
    },

    // Quantum Computing Services
    {
      name: 'Quantum Computing as a Service',
      category: 'quantum-computing',
      description: 'Access to quantum computing power for complex problem solving. Solve optimization problems 1000x faster than classical computers.',
      href: '/services/quantum-computing-as-a-service',
      price: '$999/month',
      features: ['Quantum Hardware Access', 'Algorithm Development', 'Problem Optimization', 'Research Support', 'Training & Education', 'Custom Solutions'],
      icon: Atom,
      rating: 4.9,
      reviews: 45,
      popular: true
    },
    {
      name: 'Quantum Machine Learning',
      category: 'quantum-computing',
      description: 'Quantum-enhanced machine learning for complex data analysis. Achieve quantum advantage in pattern recognition and optimization.',
      href: '/services/quantum-machine-learning',
      price: '$1,299/month',
      features: ['Quantum Algorithms', 'Pattern Recognition', 'Optimization Problems', 'Data Analysis', 'Model Training', 'Performance Benchmarking'],
      icon: Brain,
      rating: 4.8,
      reviews: 34,
      popular: false
    },
    {
      name: 'Quantum Cryptography',
      category: 'quantum-computing',
      description: 'Quantum-safe cryptography for future-proof security. Protect your data against quantum computer threats.',
      href: '/services/quantum-cryptography',
      price: '$799/month',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Security Assessment', 'Implementation Support', 'Compliance Guidance', 'Future-proofing'],
      icon: Lock,
      rating: 4.9,
      reviews: 28,
      popular: true
    },
    {
      name: 'Quantum Simulation Platform',
      category: 'quantum-computing',
      description: 'Quantum simulation for materials science and drug discovery. Accelerate research with quantum computational power.',
      href: '/services/quantum-simulation-platform',
      price: '$1,499/month',
      features: ['Molecular Simulation', 'Materials Research', 'Drug Discovery', 'Chemical Analysis', 'Research Collaboration', 'Academic Partnerships'],
      icon: Atom,
      rating: 4.8,
      reviews: 23,
      popular: false
    },

    // Emerging Technologies
    {
      name: 'IoT Edge Computing Platform',
      category: 'emerging-tech',
      description: 'Intelligent IoT edge computing for real-time data processing. Process data at the edge for faster insights and reduced latency.',
      href: '/services/iot-edge-computing-platform',
      price: '$299/month',
      features: ['Edge Processing', 'Real-time Analytics', 'Device Management', 'Data Synchronization', 'Security Monitoring', 'Scalable Infrastructure'],
      icon: Wifi,
      rating: 4.7,
      reviews: 156,
      popular: true
    },
    {
      name: 'Blockchain Enterprise Solutions',
      category: 'emerging-tech',
      description: 'Enterprise blockchain solutions for supply chain, finance, and identity management. Build trust and transparency in your business processes.',
      href: '/services/blockchain-enterprise-solutions',
      price: '$599/month',
      features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Asset Tokenization', 'Consensus Mechanisms', 'Integration Support'],
      icon: Coins,
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      name: 'Digital Twin Platform',
      category: 'emerging-tech',
      description: 'Create digital twins of physical assets for monitoring and optimization. Improve efficiency and predict maintenance needs.',
      href: '/services/digital-twin-platform',
      price: '$449/month',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation Engine', 'Performance Optimization', 'Maintenance Planning'],
      icon: Monitor,
      rating: 4.7,
      reviews: 67,
      popular: true
    },
    {
      name: 'Augmented Reality Business Solutions',
      category: 'emerging-tech',
      description: 'AR solutions for training, maintenance, and customer engagement. Enhance productivity and customer experience with immersive technology.',
      href: '/services/ar-business-solutions',
      price: '$399/month',
      features: ['AR Training', 'Remote Assistance', 'Product Visualization', 'Maintenance Guides', 'Customer Engagement', 'Analytics Dashboard'],
      icon: Eye,
      rating: 4.6,
      reviews: 78,
      popular: false
    },
    {
      name: '5G Network Optimization',
      category: 'emerging-tech',
      description: '5G network optimization and management for ultra-fast connectivity. Maximize 5G performance and coverage for your business.',
      href: '/services/5g-network-optimization',
      price: '$699/month',
      features: ['Network Planning', 'Coverage Optimization', 'Performance Monitoring', 'Capacity Management', 'Interference Analysis', 'ROI Optimization'],
      icon: Network,
      rating: 4.8,
      reviews: 45,
      popular: true
    },
    {
      name: 'Autonomous Systems Platform',
      category: 'emerging-tech',
      description: 'AI-powered autonomous systems for robotics and automation. Deploy intelligent autonomous solutions for various industries.',
      href: '/services/autonomous-systems-platform',
      price: '$1,199/month',
      features: ['Robotics Control', 'Autonomous Navigation', 'Machine Learning', 'Sensor Integration', 'Safety Systems', 'Performance Analytics'],
      icon: Cog,
      rating: 4.9,
      reviews: 34,
      popular: true
    },

    // Specialized Services
    {
      name: 'Healthcare Technology Solutions',
      category: 'specialized-services',
      description: 'Comprehensive healthcare technology solutions for hospitals and clinics. Improve patient care with digital health innovations.',
      href: '/services/healthcare-technology-solutions',
      price: '$899/month',
      features: ['Electronic Health Records', 'Telemedicine Platform', 'Patient Monitoring', 'Medical Imaging', 'Compliance Management', 'Analytics Dashboard'],
      icon: Heart,
      rating: 4.9,
      reviews: 67,
      popular: true
    },
    {
      name: 'Financial Technology Platform',
      category: 'specialized-services',
      description: 'Advanced fintech solutions for banks and financial institutions. Modernize your financial services with cutting-edge technology.',
      href: '/services/fintech-platform',
      price: '$1,299/month',
      features: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Regulatory Compliance', 'Fraud Detection', 'Customer Analytics'],
      icon: DollarSign,
      rating: 4.8,
      reviews: 89,
      popular: true
    },
    {
      name: 'Educational Technology Suite',
      category: 'specialized-services',
      description: 'Comprehensive edtech solutions for schools and universities. Transform education with digital learning platforms.',
      href: '/services/edtech-suite',
      price: '$499/month',
      features: ['Learning Management System', 'Virtual Classrooms', 'Student Analytics', 'Assessment Tools', 'Content Management', 'Parent Portal'],
      icon: GraduationCap,
      rating: 4.7,
      reviews: 123,
      popular: false
    },
    {
      name: 'Retail Technology Solutions',
      category: 'specialized-services',
      description: 'Omnichannel retail technology for modern commerce. Enhance customer experience and optimize operations.',
      href: '/services/retail-technology-solutions',
      price: '$599/month',
      features: ['Point of Sale', 'Inventory Management', 'Customer Analytics', 'E-commerce Integration', 'Loyalty Programs', 'Supply Chain Optimization'],
      icon: ShoppingBag,
      rating: 4.8,
      reviews: 98,
      popular: true
    },
    {
      name: 'Manufacturing Intelligence Platform',
      category: 'specialized-services',
      description: 'Smart manufacturing solutions with IoT and AI. Optimize production and improve quality with intelligent manufacturing.',
      href: '/services/manufacturing-intelligence-platform',
      price: '$799/month',
      features: ['Production Monitoring', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Integration', 'Energy Optimization', 'Safety Management'],
      icon: Factory,
      rating: 4.8,
      reviews: 76,
      popular: false
    },
    {
      name: 'Real Estate Technology Platform',
      category: 'specialized-services',
      description: 'Comprehensive proptech solutions for real estate professionals. Streamline operations and enhance customer experience.',
      href: '/services/proptech-platform',
      price: '$399/month',
      features: ['Property Management', 'Virtual Tours', 'Market Analytics', 'Lead Management', 'Document Management', 'Financial Tracking'],
      icon: Home,
      rating: 4.7,
      reviews: 89,
      popular: true
    },

    // Data & Analytics
    {
      name: 'Big Data Analytics Platform',
      category: 'data-analytics',
      description: 'Enterprise big data analytics for massive datasets. Extract insights from petabytes of data with advanced analytics.',
      href: '/services/big-data-analytics-platform',
      price: '$999/month',
      features: ['Data Processing', 'Machine Learning', 'Real-time Analytics', 'Data Visualization', 'Data Lake Management', 'Scalable Infrastructure'],
      icon: Database,
      rating: 4.8,
      reviews: 134,
      popular: true
    },
    {
      name: 'Customer Data Platform',
      category: 'data-analytics',
      description: 'Unified customer data platform for 360-degree customer view. Create personalized experiences with comprehensive customer insights.',
      href: '/services/customer-data-platform',
      price: '$449/month',
      features: ['Data Unification', 'Customer Segmentation', 'Behavioral Analytics', 'Personalization Engine', 'Privacy Compliance', 'Real-time Updates'],
      icon: Users,
      rating: 4.9,
      reviews: 167,
      popular: true
    },
    {
      name: 'Predictive Analytics Engine',
      category: 'data-analytics',
      description: 'Advanced predictive analytics for forecasting and decision making. Predict future trends with 95% accuracy.',
      href: '/services/predictive-analytics-engine',
      price: '$599/month',
      features: ['Forecasting Models', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning', 'Automated Insights', 'Custom Algorithms'],
      icon: TrendingUp,
      rating: 4.8,
      reviews: 98,
      popular: false
    },
    {
      name: 'Real-time Data Streaming',
      category: 'data-analytics',
      description: 'Real-time data streaming and processing platform. Process and analyze data streams in real-time for instant insights.',
      href: '/services/real-time-data-streaming',
      price: '$349/month',
      features: ['Stream Processing', 'Real-time Analytics', 'Event Processing', 'Data Integration', 'Scalable Architecture', 'Low Latency'],
      icon: Activity,
      rating: 4.7,
      reviews: 112,
      popular: true
    },
    {
      name: 'Data Governance Platform',
      category: 'data-analytics',
      description: 'Comprehensive data governance and compliance management. Ensure data quality, security, and regulatory compliance.',
      href: '/services/data-governance-platform',
      price: '$499/month',
      features: ['Data Quality Management', 'Privacy Controls', 'Compliance Monitoring', 'Data Lineage', 'Access Controls', 'Audit Trails'],
      icon: Shield,
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      name: 'Business Intelligence Dashboard',
      category: 'data-analytics',
      description: 'Interactive business intelligence dashboards for data-driven decisions. Visualize key metrics and KPIs in real-time.',
      href: '/services/business-intelligence-dashboard',
      price: '$299/month',
      features: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Monitoring', 'Mobile Access', 'Automated Alerts'],
      icon: BarChart3,
      rating: 4.7,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Workflow Orchestrator',
      category: 'ai-automation',
      description: 'Intelligent workflow orchestration and process optimization. Optimize business processes with AI-driven insights and automation.',
      href: '/services/ai-workflow-orchestrator',
      price: '$399/month',
      features: ['Workflow Design', 'Process Optimization', 'Integration Management', 'Performance Analytics', 'Bottleneck Detection', 'Resource Allocation'],
      icon: Workflow,
      rating: 4.7,
      reviews: 112,
      popular: false
    },
    {
      name: 'AI Financial Trading Platform',
      category: 'ai-automation',
      description: 'AI-powered financial trading with advanced algorithms and risk management. Achieve superior returns with algorithmic trading strategies.',
      href: '/services/ai-financial-trading-platform',
      price: 'Custom Pricing',
      features: ['Algorithmic Trading', 'Risk Management', 'Portfolio Optimization', 'Market Analysis', 'Real-time Execution', 'Backtesting'],
      icon: TrendingUp,
      rating: 4.8,
      reviews: 67,
      popular: true
    },
    {
      name: 'AI Healthcare Analytics Platform',
      category: 'ai-automation',
      description: 'Advanced healthcare analytics with AI-powered insights and predictions. Improve patient outcomes with predictive healthcare analytics.',
      href: '/services/ai-healthcare-analytics-platform',
      price: 'Custom Pricing',
      features: ['Patient Analytics', 'Clinical Insights', 'Predictive Modeling', 'Compliance', 'Drug Interaction Analysis', 'Treatment Optimization'],
      icon: Heart,
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Manufacturing Intelligence',
      category: 'ai-automation',
      description: 'Smart manufacturing solutions with AI-powered predictive maintenance and quality control. Reduce downtime by 40% and improve quality by 30%.',
      href: '/services/ai-manufacturing-intelligence',
      price: '$599/month',
      features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Analytics', 'Energy Management', 'Safety Monitoring'],
      icon: Factory,
      rating: 4.8,
      reviews: 134,
      popular: true
    },
    {
      name: 'AI Retail Intelligence Platform',
      category: 'ai-automation',
      description: 'Comprehensive retail analytics and automation platform. Increase sales by 35% with AI-driven customer insights and inventory optimization.',
      href: '/services/ai-retail-intelligence-platform',
      price: '$349/month',
      features: ['Customer Analytics', 'Inventory Optimization', 'Price Optimization', 'Demand Forecasting', 'Personalization', 'Fraud Detection'],
      icon: ShoppingCart,
      rating: 4.7,
      reviews: 167,
      popular: false
    },
    {
      name: 'AI Legal Research Assistant',
      category: 'ai-automation',
      description: 'AI-powered legal research and document analysis platform. Accelerate legal research by 10x with intelligent case law analysis.',
      href: '/services/ai-legal-research-assistant',
      price: '$299/month',
      features: ['Case Law Research', 'Document Analysis', 'Contract Review', 'Legal Precedent Analysis', 'Compliance Checking', 'Risk Assessment'],
      icon: BookOpen,
      rating: 4.9,
      reviews: 89,
      popular: true
    },
    {
      name: 'AI Real Estate Analytics',
      category: 'ai-automation',
      description: 'Advanced real estate market analysis and property valuation with AI. Make informed investment decisions with predictive market insights.',
      href: '/services/ai-real-estate-analytics',
      price: '$199/month',
      features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment', 'Trend Prediction', 'Portfolio Management'],
      icon: Home,
      rating: 4.6,
      reviews: 78,
      popular: false
    },

    // IT Infrastructure
    {
      name: 'Cloud & DevOps',
      category: 'it-infrastructure',
      description: 'Comprehensive cloud infrastructure and DevOps automation services. Accelerate deployment with 99.9% uptime and automated scaling.',
      href: '/services/cloud-devops',
      price: 'Custom Pricing',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Auto-scaling', 'Cost Optimization'],
      icon: Cloud,
      rating: 4.8,
      reviews: 234,
      popular: true
    },
    {
      name: 'Cybersecurity Solutions',
      category: 'it-infrastructure',
      description: 'Advanced cybersecurity protection and threat intelligence services. Protect your business with enterprise-grade security solutions.',
      href: '/services/cybersecurity',
      price: 'Custom Pricing',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Penetration Testing', 'Security Training'],
      icon: Lock,
      rating: 4.9,
      reviews: 189,
      popular: true
    },
    {
      name: 'Digital Transformation',
      category: 'it-infrastructure',
      description: 'End-to-end digital transformation consulting and implementation. Modernize your business with cutting-edge technology solutions.',
      href: '/services/digital-transformation',
      price: 'Custom Pricing',
      features: ['Strategy Development', 'Technology Selection', 'Change Management', 'Implementation Support', 'Legacy System Migration', 'Process Optimization'],
      icon: Rocket,
      rating: 4.7,
      reviews: 145,
      popular: false
    },
    {
      name: 'Healthcare Technology',
      category: 'it-infrastructure',
      description: 'Specialized healthcare technology solutions and consulting. HIPAA-compliant solutions for modern healthcare organizations.',
      href: '/services/healthcare-tech',
      price: 'Custom Pricing',
      features: ['HIPAA Compliance', 'Patient Data Security', 'Clinical Systems', 'Interoperability', 'Telemedicine Solutions', 'Health Analytics'],
      icon: Heart,
      rating: 4.8,
      reviews: 167,
      popular: true
    },
    {
      name: 'IoT & Edge Computing',
      category: 'it-infrastructure',
      description: 'Internet of Things and edge computing solutions for real-time data processing. Connect and analyze data from any device, anywhere.',
      href: '/services/iot-edge-computing',
      price: 'Custom Pricing',
      features: ['Sensor Networks', 'Edge Analytics', 'Real-time Processing', 'Device Management', 'Data Integration', 'Predictive Maintenance'],
      icon: Wifi,
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      name: 'IT Infrastructure Management',
      category: 'it-infrastructure',
      description: 'Comprehensive IT infrastructure management and optimization services. Ensure maximum uptime and performance for your critical systems.',
      href: '/services/it-infrastructure-management',
      price: 'Custom Pricing',
      features: ['Infrastructure Planning', 'Performance Optimization', 'Capacity Planning', 'Disaster Recovery', '24/7 Monitoring', 'Proactive Maintenance'],
      icon: Server,
      rating: 4.7,
      reviews: 123,
      popular: false
    },
    {
      name: 'Enterprise Network Solutions',
      category: 'it-infrastructure',
      description: 'Advanced enterprise networking solutions with SD-WAN and network security. Optimize connectivity and security across all locations.',
      href: '/services/enterprise-network-solutions',
      price: 'Custom Pricing',
      features: ['SD-WAN Implementation', 'Network Security', 'Bandwidth Optimization', 'Multi-site Connectivity', 'Network Monitoring', 'Performance Analytics'],
      icon: Network,
      rating: 4.8,
      reviews: 156,
      popular: true
    },
    {
      name: 'Data Center Services',
      category: 'it-infrastructure',
      description: 'Comprehensive data center services including colocation, cloud migration, and disaster recovery. Ensure business continuity with robust infrastructure.',
      href: '/services/data-center-services',
      price: 'Custom Pricing',
      features: ['Colocation Services', 'Cloud Migration', 'Disaster Recovery', 'Backup Solutions', 'Infrastructure Monitoring', 'Compliance Management'],
      icon: Database,
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      name: 'Managed IT Services',
      category: 'it-infrastructure',
      description: 'Complete managed IT services for businesses of all sizes. Focus on your business while we handle your IT infrastructure.',
      href: '/services/managed-it-services',
      price: 'Starting at $299/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'Security Management', 'Software Updates', 'Backup & Recovery', 'Help Desk Services'],
      icon: Settings,
      rating: 4.9,
      reviews: 267,
      popular: true
    },
    {
      name: 'IT Consulting & Strategy',
      category: 'it-infrastructure',
      description: 'Strategic IT consulting to align technology with business goals. Get expert guidance on technology decisions and implementations.',
      href: '/services/it-consulting-strategy',
      price: 'Custom Pricing',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance', 'Change Management', 'Training & Support'],
      icon: Target,
      rating: 4.8,
      reviews: 189,
      popular: false
    },

    // Quantum Computing
    {
      name: 'Quantum Computing as a Service',
      category: 'quantum-computing',
      description: 'Access to quantum computing resources and specialized algorithms',
      href: '/services/quantum-computing-as-a-service',
      price: 'Custom Pricing',
      features: ['Quantum Access', 'Algorithm Development', 'Problem Solving', 'Research Support'],
      icon: Atom,
      rating: 4.9,
      reviews: 45,
      popular: true
    },
    {
      name: 'Quantum AI Platform',
      category: 'quantum-computing',
      description: 'Hybrid quantum-classical AI platform for advanced problem solving',
      href: '/services/quantum-ai-hybrid-platform',
      price: 'Custom Pricing',
      features: ['Quantum Algorithms', 'AI Integration', 'Hybrid Computing', 'Performance Optimization'],
      icon: Brain,
      rating: 4.8,
      reviews: 67,
      popular: true
    },
    {
      name: 'Quantum Machine Learning',
      category: 'quantum-computing',
      description: 'Quantum-enhanced machine learning algorithms and applications',
      href: '/services/quantum-machine-learning',
      price: 'Custom Pricing',
      features: ['Quantum ML', 'Algorithm Optimization', 'Model Training', 'Performance Analysis'],
      icon: Cpu,
      rating: 4.7,
      reviews: 34,
      popular: false
    },

    // Emerging Technologies
    {
      name: 'Blockchain Solutions',
      category: 'emerging-tech',
      description: 'Enterprise blockchain solutions and decentralized applications. Build trust and transparency with distributed ledger technology.',
      href: '/services/blockchain-enterprise-solutions',
      price: 'Custom Pricing',
      features: ['Smart Contracts', 'DApp Development', 'Supply Chain', 'Identity Management', 'DeFi Solutions', 'NFT Platforms'],
      icon: Network,
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      name: 'Space Technology',
      category: 'emerging-tech',
      description: 'Innovative space technology solutions for satellite and space exploration. Connect the world with advanced space-based services.',
      href: '/services/space-tech',
      price: 'Custom Pricing',
      features: ['Satellite Operations', 'Space Analytics', 'Mission Planning', 'Ground Station Management', 'Earth Observation', 'Communication Systems'],
      icon: Satellite,
      rating: 4.8,
      reviews: 56,
      popular: true
    },
    {
      name: 'Sustainable Technology',
      category: 'emerging-tech',
      description: 'Green technology solutions for environmental sustainability. Reduce your carbon footprint with smart environmental solutions.',
      href: '/services/sustainable-technology',
      price: 'Custom Pricing',
      features: ['Energy Optimization', 'Carbon Tracking', 'Green Infrastructure', 'Sustainability Analytics', 'Renewable Energy', 'Waste Management'],
      icon: Leaf,
      rating: 4.7,
      reviews: 78,
      popular: false
    },
    {
      name: 'Augmented Reality Solutions',
      category: 'emerging-tech',
      description: 'Immersive AR solutions for training, visualization, and customer engagement. Transform how you interact with digital content.',
      href: '/services/augmented-reality-solutions',
      price: 'Custom Pricing',
      features: ['AR Training', '3D Visualization', 'Remote Assistance', 'Product Demos', 'Interactive Experiences', 'Mobile AR Apps'],
      icon: Eye,
      rating: 4.5,
      reviews: 67,
      popular: false
    },
    {
      name: 'Virtual Reality Platforms',
      category: 'emerging-tech',
      description: 'Immersive VR platforms for training, collaboration, and entertainment. Create engaging virtual experiences for your business.',
      href: '/services/virtual-reality-platforms',
      price: 'Custom Pricing',
      features: ['VR Training', 'Virtual Meetings', 'Product Visualization', 'Simulation Environments', 'Collaborative Spaces', 'Entertainment Solutions'],
      icon: Video,
      rating: 4.6,
      reviews: 89,
      popular: true
    },
    {
      name: '5G Network Solutions',
      category: 'emerging-tech',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity. Enable IoT, edge computing, and real-time applications.',
      href: '/services/5g-network-solutions',
      price: 'Custom Pricing',
      features: ['5G Infrastructure', 'Network Optimization', 'IoT Connectivity', 'Edge Computing', 'Low Latency Solutions', 'Network Slicing'],
      icon: Wifi,
      rating: 4.7,
      reviews: 123,
      popular: true
    },

    // Specialized Services
    {
      name: 'AI-Powered Legal Tech',
      category: 'specialized-services',
      description: 'Specialized legal technology solutions with AI-powered document analysis and case management. Streamline legal operations with intelligent automation.',
      href: '/services/ai-powered-legal-tech',
      price: 'Custom Pricing',
      features: ['Document Analysis', 'Case Management', 'Legal Research', 'Contract Review', 'Compliance Monitoring', 'Litigation Support'],
      icon: BookOpen,
      rating: 4.8,
      reviews: 78,
      popular: true
    },
    {
      name: 'FinTech Solutions',
      category: 'specialized-services',
      description: 'Comprehensive financial technology solutions for modern banking and investment. Secure, scalable, and compliant financial services.',
      href: '/services/fintech-solutions',
      price: 'Custom Pricing',
      features: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Regulatory Compliance', 'Fraud Detection', 'Investment Analytics'],
      icon: DollarSign,
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      name: 'EdTech Platforms',
      category: 'specialized-services',
      description: 'Advanced educational technology platforms with AI-powered learning analytics. Transform education with personalized learning experiences.',
      href: '/services/edtech-platforms',
      price: 'Custom Pricing',
      features: ['Learning Management', 'Personalized Learning', 'Assessment Tools', 'Analytics Dashboard', 'Collaboration Tools', 'Content Management'],
      icon: GraduationCap,
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      name: 'PropTech Solutions',
      category: 'specialized-services',
      description: 'Property technology solutions for real estate management and investment. Optimize property operations with smart building technology.',
      href: '/services/proptech-solutions',
      price: 'Custom Pricing',
      features: ['Property Management', 'Smart Building Systems', 'Investment Analytics', 'Tenant Management', 'Maintenance Automation', 'Energy Optimization'],
      icon: Home,
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      name: 'AgriTech Solutions',
      category: 'specialized-services',
      description: 'Agricultural technology solutions for smart farming and crop management. Increase yield and reduce costs with precision agriculture.',
      href: '/services/agritech-solutions',
      price: 'Custom Pricing',
      features: ['Precision Agriculture', 'Crop Monitoring', 'Weather Analytics', 'Irrigation Management', 'Yield Prediction', 'Supply Chain Tracking'],
      icon: Leaf,
      rating: 4.8,
      reviews: 67,
      popular: true
    },
    {
      name: 'MedTech Solutions',
      category: 'specialized-services',
      description: 'Medical technology solutions for healthcare providers and patients. Improve patient care with advanced medical technology.',
      href: '/services/medtech-solutions',
      price: 'Custom Pricing',
      features: ['Patient Monitoring', 'Medical Imaging', 'Telemedicine', 'Electronic Health Records', 'Clinical Decision Support', 'Medical Device Integration'],
      icon: Heart,
      rating: 4.9,
      reviews: 145,
      popular: true
    },

    // Data & Analytics
    {
      name: 'Big Data Analytics Platform',
      category: 'data-analytics',
      description: 'Comprehensive big data analytics platform for enterprise-scale data processing. Unlock insights from massive datasets with advanced analytics.',
      href: '/services/big-data-analytics-platform',
      price: 'Custom Pricing',
      features: ['Data Processing', 'Real-time Analytics', 'Machine Learning', 'Data Visualization', 'Data Governance', 'Scalable Infrastructure'],
      icon: Database,
      rating: 4.8,
      reviews: 189,
      popular: true
    },
    {
      name: 'Predictive Analytics Engine',
      category: 'data-analytics',
      description: 'Advanced predictive analytics engine with machine learning capabilities. Forecast trends and make data-driven decisions with confidence.',
      href: '/services/predictive-analytics-engine',
      price: '$399/month',
      features: ['Predictive Modeling', 'Trend Analysis', 'Risk Assessment', 'Forecasting', 'Anomaly Detection', 'Custom Algorithms'],
      icon: TrendingUp,
      rating: 4.7,
      reviews: 156,
      popular: false
    },
    {
      name: 'Real-time Data Streaming',
      category: 'data-analytics',
      description: 'Real-time data streaming and processing platform for instant insights. Process and analyze data streams in real-time for immediate action.',
      href: '/services/real-time-data-streaming',
      price: '$299/month',
      features: ['Stream Processing', 'Real-time Analytics', 'Event Processing', 'Data Integration', 'Low Latency Processing', 'Scalable Architecture'],
      icon: Activity,
      rating: 4.6,
      reviews: 123,
      popular: true
    },
    {
      name: 'Data Lake Solutions',
      category: 'data-analytics',
      description: 'Comprehensive data lake solutions for storing and analyzing structured and unstructured data. Centralize your data for better insights.',
      href: '/services/data-lake-solutions',
      price: 'Custom Pricing',
      features: ['Data Storage', 'Data Cataloging', 'Data Governance', 'Analytics Tools', 'Data Security', 'Scalable Architecture'],
      icon: Database,
      rating: 4.8,
      reviews: 134,
      popular: false
    },
    {
      name: 'Customer Data Platform',
      category: 'data-analytics',
      description: 'Unified customer data platform for 360-degree customer view. Create personalized experiences with comprehensive customer insights.',
      href: '/services/customer-data-platform',
      price: '$249/month',
      features: ['Customer Profiling', 'Data Unification', 'Behavioral Analytics', 'Segmentation', 'Personalization', 'Privacy Compliance'],
      icon: Users,
      rating: 4.9,
      reviews: 178,
      popular: true
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Zap;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Comprehensive
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                {' '}Service Portfolio
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              From micro SAAS solutions to enterprise AI platforms, discover the tools and expertise 
              your business needs to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-gradient-to-br ${category.color} p-8 rounded-xl text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-12 h-12 mr-4" />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="flex items-center text-sm">
                  <span className="mr-2">
                    {allServices.filter(service => service.category === category.id).length} Services
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-darker border-b border-zion-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-zion-slate-dark border border-zion-purple/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedCategory === 'all' ? 'All Services' : serviceCategories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-zion-slate-light">
              {filteredServices.length} services found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-zion-slate-light ml-1">{service.rating}</span>
                          </div>
                          <span className="text-sm text-zion-slate-light">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>

                  {/* Service Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Service Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium text-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service) => (
                <div key={service.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                          <p className="text-zion-slate-light mb-3">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                          <div className="flex items-center justify-end space-x-2 mb-2">
                            <div className="flex items-center">
                              <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-zion-slate-light ml-1">{service.rating}</span>
                            </div>
                            <span className="text-sm text-zion-slate-light">({service.reviews})</span>
                          </div>
                          {service.popular && (
                            <span className="px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-zion-slate-light">
                            Category: {serviceCategories.find(cat => cat.id === service.category)?.name}
                          </span>
                        </div>
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zion-slate-darker rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact Zion Tech Group today to discuss your specific needs and discover how our comprehensive 
            suite of AI, micro SAAS, and IT services can accelerate your digital transformation.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white/90 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-white/90 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-white/90 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              View Pricing Plans
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              Visit Our Website
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}