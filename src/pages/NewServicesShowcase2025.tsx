import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MapPin,
  FileText,
  Link as LinkIcon,
  TestTube,
  DollarSign,
  GraduationCap,
  Truck,
  Sun,
  Building2,
  Video,
  Star as StarIcon,
  Award,
  Clock,
  TrendingDown,
  Shield as SecurityIcon,
  Zap as LightningIcon
} from 'lucide-react';

export function NewServicesShowcase2025() {
  const newServices = [
    {
      id: 'ai-legal-tech-solutions',
      title: 'AI Legal Tech Solutions',
      description: 'Revolutionize legal practice with AI-powered contract analysis, legal research, and compliance automation',
      icon: FileText,
      color: 'from-indigo-600 to-blue-700',
      price: '$1,500 - $8,000/month',
      marketPrice: '$3,000 - $15,000/month',
      savings: 'Save up to 50%',
      features: [
        'Contract Analysis & Review',
        'Legal Research Automation',
        'Compliance Monitoring',
        'Document Generation',
        'Risk Assessment',
        'Case Law Analysis',
        'Legal Chatbot Support',
        'Regulatory Updates'
      ],
      benefits: [
        'Reduce legal review time by 70%',
        'Improve contract accuracy',
        'Automated compliance monitoring',
        'Cost-effective legal services',
        '24/7 legal support',
        'Enhanced risk management'
      ],
      useCases: [
        'Contract Management',
        'Legal Research',
        'Compliance Monitoring',
        'Document Review',
        'Risk Assessment',
        'Legal Operations',
        'Regulatory Compliance',
        'Litigation Support'
      ],
      industries: ['Legal Services', 'Corporate', 'Healthcare', 'Finance', 'Real Estate', 'Technology']
    },
    {
      id: 'blockchain-web3-development',
      title: 'Blockchain & Web3 Development',
      description: 'Build decentralized applications, smart contracts, and Web3 infrastructure for the future of the internet',
      icon: LinkIcon,
      color: 'from-orange-600 to-red-700',
      price: '$3,000 - $20,000/month',
      marketPrice: '$8,000 - $40,000/month',
      savings: 'Save up to 50%',
      features: [
        'Smart Contract Development',
        'DeFi Platform Building',
        'NFT Marketplace Creation',
        'Blockchain Infrastructure',
        'Web3 Integration',
        'Cryptocurrency Solutions',
        'Decentralized Apps (dApps)',
        'Blockchain Consulting'
      ],
      benefits: [
        'Future-proof technology investment',
        'Decentralized and secure solutions',
        'Transparent and immutable systems',
        'Reduced intermediary costs',
        'Global accessibility',
        'Innovation leadership'
      ],
      useCases: [
        'DeFi Applications',
        'NFT Marketplaces',
        'Supply Chain Tracking',
        'Voting Systems',
        'Digital Identity',
        'Asset Tokenization',
        'Gaming Platforms',
        'Financial Services'
      ],
      industries: ['Finance', 'Gaming', 'Supply Chain', 'Healthcare', 'Real Estate', 'Entertainment']
    },
    {
      id: 'advanced-robotics-automation',
      title: 'Advanced Robotics & Automation',
      description: 'Transform manufacturing and operations with intelligent robotics, automation, and Industry 4.0 solutions',
      icon: Cpu,
      color: 'from-gray-600 to-slate-700',
      price: '$5,000 - $30,000/month',
      marketPrice: '$12,000 - $60,000/month',
      savings: 'Save up to 50%',
      features: [
        'Industrial Robotics',
        'Collaborative Robots (Cobots)',
        'Process Automation',
        'Quality Control Systems',
        'Predictive Maintenance',
        'Safety Monitoring',
        'Integration Services',
        'Training & Support'
      ],
      benefits: [
        'Increase productivity by 40-60%',
        'Reduce operational costs',
        'Improve product quality',
        'Enhanced workplace safety',
        '24/7 operation capability',
        'Scalable automation'
      ],
      useCases: [
        'Manufacturing Automation',
        'Warehouse Operations',
        'Quality Inspection',
        'Material Handling',
        'Assembly Lines',
        'Packaging Systems',
        'Testing & Validation',
        'Maintenance Operations'
      ],
      industries: ['Manufacturing', 'Logistics', 'Automotive', 'Aerospace', 'Electronics', 'Food & Beverage']
    },
    {
      id: 'biotechnology-bioinformatics',
      title: 'Biotechnology & Bioinformatics',
      description: 'Accelerate scientific discovery with AI-powered bioinformatics, drug discovery, and genetic analysis',
      icon: TestTube,
      color: 'from-green-600 to-emerald-700',
      price: '$4,000 - $25,000/month',
      marketPrice: '$10,000 - $50,000/month',
      savings: 'Save up to 50%',
      features: [
        'Genomic Data Analysis',
        'Drug Discovery AI',
        'Protein Structure Prediction',
        'Clinical Trial Optimization',
        'Biomarker Discovery',
        'Genetic Risk Assessment',
        'Bioinformatics Pipelines',
        'Research Collaboration Tools'
      ],
      benefits: [
        'Accelerate research timelines',
        'Reduce development costs',
        'Improve drug efficacy',
        'Personalized medicine',
        'Enhanced data analysis',
        'Collaborative research'
      ],
      useCases: [
        'Drug Development',
        'Genetic Research',
        'Clinical Trials',
        'Disease Diagnosis',
        'Precision Medicine',
        'Agricultural Biotech',
        'Environmental Biology',
        'Pharmaceutical Research'
      ],
      industries: ['Pharmaceuticals', 'Healthcare', 'Agriculture', 'Research', 'Biotech', 'Environmental']
    },
    {
      id: 'fintech-solutions',
      title: 'Financial Technology Solutions',
      description: 'Modernize financial services with AI-powered banking, payment systems, and financial analytics',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-700',
      price: '$2,500 - $15,000/month',
      marketPrice: '$6,000 - $30,000/month',
      savings: 'Save up to 50%',
      features: [
        'Digital Banking Platforms',
        'Payment Processing Systems',
        'Fraud Detection AI',
        'Risk Management',
        'Financial Analytics',
        'Regulatory Compliance',
        'API Integration',
        'Mobile Banking Apps'
      ],
      benefits: [
        'Enhanced customer experience',
        'Reduced operational costs',
        'Improved security',
        'Regulatory compliance',
        'Real-time processing',
        'Scalable solutions'
      ],
      useCases: [
        'Digital Banking',
        'Payment Systems',
        'Investment Platforms',
        'Insurance Tech',
        'Lending Solutions',
        'Wealth Management',
        'RegTech Solutions',
        'Cryptocurrency Services'
      ],
      industries: ['Banking', 'Insurance', 'Investment', 'Lending', 'Payment Processing', 'Wealth Management']
    },
    {
      id: 'edtech-learning-platforms',
      title: 'Educational Technology Platforms',
      description: 'Transform education with AI-powered learning management, personalized education, and virtual classrooms',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-700',
      price: '$800 - $5,000/month',
      marketPrice: '$2,000 - $12,000/month',
      savings: 'Save up to 60%',
      features: [
        'Learning Management Systems',
        'Personalized Learning Paths',
        'Virtual Classrooms',
        'Assessment & Analytics',
        'Content Creation Tools',
        'Student Progress Tracking',
        'Collaborative Learning',
        'Mobile Learning Apps'
      ],
      benefits: [
        'Personalized learning experience',
        'Improved student engagement',
        'Better learning outcomes',
        'Reduced administrative burden',
        'Scalable education delivery',
        'Data-driven insights'
      ],
      useCases: [
        'K-12 Education',
        'Higher Education',
        'Corporate Training',
        'Online Learning',
        'Skills Development',
        'Language Learning',
        'Professional Certification',
        'Special Education'
      ],
      industries: ['Education', 'Corporate Training', 'Online Learning', 'Skills Development', 'Language Learning', 'Professional Development']
    },
    {
      id: 'supply-chain-logistics-ai',
      title: 'Supply Chain & Logistics AI',
      description: 'Optimize supply chains with AI-powered forecasting, route optimization, and inventory management',
      icon: Truck,
      color: 'from-purple-600 to-violet-700',
      price: '$2,000 - $12,000/month',
      marketPrice: '$5,000 - $25,000/month',
      savings: 'Save up to 52%',
      features: [
        'Demand Forecasting',
        'Route Optimization',
        'Inventory Management',
        'Supplier Risk Assessment',
        'Real-time Tracking',
        'Cost Optimization',
        'Sustainability Analytics',
        'Supply Chain Visibility'
      ],
      benefits: [
        'Reduce logistics costs by 20-30%',
        'Improve delivery times',
        'Optimize inventory levels',
        'Enhanced risk management',
        'Real-time visibility',
        'Sustainability improvements'
      ],
      useCases: [
        'Retail Supply Chains',
        'Manufacturing Logistics',
        'E-commerce Fulfillment',
        'Cold Chain Management',
        'International Shipping',
        'Last-mile Delivery',
        'Warehouse Operations',
        'Procurement Optimization'
      ],
      industries: ['Retail', 'Manufacturing', 'E-commerce', 'Logistics', 'Transportation', 'Warehousing']
    },
    {
      id: 'energy-sustainability-tech',
      title: 'Energy & Sustainability Technology',
      description: 'Drive the energy transition with smart grid solutions, renewable energy optimization, and sustainability analytics',
      icon: Sun,
      color: 'from-yellow-600 to-orange-700',
      price: '$3,000 - $18,000/month',
      marketPrice: '$7,000 - $35,000/month',
      savings: 'Save up to 49%',
      features: [
        'Smart Grid Management',
        'Renewable Energy Optimization',
        'Energy Storage Solutions',
        'Carbon Footprint Tracking',
        'Sustainability Reporting',
        'Energy Efficiency Analytics',
        'Grid Integration',
        'Predictive Maintenance'
      ],
      benefits: [
        'Reduce energy costs',
        'Improve sustainability',
        'Enhanced grid reliability',
        'Regulatory compliance',
        'Real-time monitoring',
        'Predictive insights'
      ],
      useCases: [
        'Utility Companies',
        'Renewable Energy',
        'Commercial Buildings',
        'Industrial Facilities',
        'Smart Cities',
        'Energy Trading',
        'Carbon Management',
        'Grid Infrastructure'
      ],
      industries: ['Utilities', 'Renewable Energy', 'Commercial Real Estate', 'Industrial', 'Smart Cities', 'Energy Trading']
    },
    {
      id: 'real-estate-technology',
      title: 'Real Estate Technology',
      description: 'Modernize real estate with AI-powered property management, market analysis, and virtual tours',
      icon: Building2,
      color: 'from-teal-600 to-cyan-700',
      price: '$1,200 - $8,000/month',
      marketPrice: '$3,000 - $18,000/month',
      savings: 'Save up to 56%',
      features: [
        'Property Management Systems',
        'Market Analysis AI',
        'Virtual Tours & AR',
        'Tenant Portal Solutions',
        'Maintenance Management',
        'Financial Analytics',
        'Document Management',
        'Mobile Applications'
      ],
      benefits: [
        'Improved property management',
        'Enhanced tenant experience',
        'Better market insights',
        'Reduced operational costs',
        'Increased property value',
        'Streamlined processes'
      ],
      useCases: [
        'Property Management',
        'Real Estate Investment',
        'Commercial Real Estate',
        'Residential Management',
        'Facility Management',
        'Property Development',
        'Real Estate Marketing',
        'Portfolio Management'
      ],
      industries: ['Real Estate', 'Property Management', 'Commercial Real Estate', 'Residential', 'Facility Management', 'Property Development']
    },
    {
      id: 'entertainment-media-ai',
      title: 'Entertainment & Media AI',
      description: 'Transform entertainment with AI-powered content creation, recommendation systems, and audience analytics',
      icon: Video,
      color: 'from-pink-600 to-rose-700',
      price: '$1,500 - $10,000/month',
      marketPrice: '$4,000 - $20,000/month',
      savings: 'Save up to 50%',
      features: [
        'Content Generation AI',
        'Recommendation Engines',
        'Audience Analytics',
        'Content Optimization',
        'Automated Editing',
        'Personalization Engines',
        'Trend Analysis',
        'Content Distribution'
      ],
      benefits: [
        'Increased audience engagement',
        'Personalized content delivery',
        'Improved content performance',
        'Reduced production costs',
        'Data-driven insights',
        'Scalable content creation'
      ],
      useCases: [
        'Streaming Platforms',
        'Social Media',
        'Gaming Industry',
        'News & Publishing',
        'Music & Audio',
        'Video Production',
        'Advertising',
        'Content Marketing'
      ],
      industries: ['Entertainment', 'Media', 'Gaming', 'Publishing', 'Music', 'Advertising']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { number: '25+', label: 'New Services Added', icon: StarIcon },
    { number: '50%+', label: 'Cost Savings', icon: TrendingDown },
    { number: '75+', label: 'Industries Served', icon: Building2 },
    { number: '24/7', label: 'Expert Support', icon: Clock }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              New for 2025
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionary New Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our cutting-edge micro SAAS solutions that are transforming industries worldwide. 
              Get enterprise-grade technology at startup-friendly prices with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:border-gray-500 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* New Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-4`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              
              {/* Pricing Section */}
              <div className="mb-4 p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                </div>
                <div className="text-sm text-green-400 font-medium">{service.savings}</div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Industries:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.industries.slice(0, 3).map((industry, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge solutions. 
              Get started today with a free consultation and see how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.phone}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.email}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium text-sm">{contactInfo.address}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:border-gray-500 transition-all duration-200"
              >
                Visit Website
                <Globe className="w-4 h-4 ml-2" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              All services include 24/7 support, comprehensive documentation, and ongoing updates
            </p>
          </div>
        </motion.div>

        {/* Why Choose Zion Tech Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Proven Track Record</h3>
              <p className="text-gray-400 text-sm">
                Successfully deployed 800+ solutions across 75+ industries with 99.9% success rate
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <LightningIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-400 text-sm">
                Latest AI, quantum computing, and emerging technologies to keep you ahead of the competition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Expert Team</h3>
              <p className="text-gray-400 text-sm">
                World-class engineers, data scientists, and industry experts dedicated to your success
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SecurityIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm">
                Bank-level security, compliance, and data protection for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Scalable Solutions</h3>
              <p className="text-gray-400 text-sm">
                Solutions that grow with your business, from startup to enterprise scale
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">
                Round-the-clock support and maintenance to ensure your systems run smoothly
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NewServicesShowcase2025;