import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield,
  Lock,
  Eye,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  FileText,
  BookOpen,
  Users,
  Globe,
  MapPin,
  Calendar,
  User,
  Building,
  Zap,
  Cloud,
  ArrowRight,
  Settings,
  HelpCircle,
  MessageSquare,
  FileCode,
  Terminal,
  Database,
  Rocket,
  Target,
  TrendingUp,
  Award,
  Clock3,
  MessageCircle,
  Phone,
  Mail,
  Star,
  Monitor,
  Key,
  Fingerprint,
  Server,
  Network,
  AlertTriangle,
  XCircle,
  FileCheck,
  FileX,
  FileAlert,
  FileSearch,
  FileShield,
  FileLock,
  CreditCard,
  EyeOff,
  Trash2,
  Edit3,
  Copy,
  Share2,
  Pause,
  Brain
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Privacy() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['overview']);

  const privacyCategories = [
    { id: 'all', name: 'All Privacy', count: 28, color: 'from-blue-500 to-cyan-600' },
    { id: 'overview', name: 'Privacy Overview', count: 6, color: 'from-green-500 to-emerald-600' },
    { id: 'data-collection', name: 'Data Collection', count: 8, color: 'from-purple-500 to-pink-600' },
    { id: 'data-usage', name: 'Data Usage', count: 6, color: 'from-orange-500 to-red-600' },
    { id: 'user-rights', name: 'User Rights', count: 8, color: 'from-indigo-500 to-purple-600' }
  ];

  const privacyOverview = [
    {
      id: 'data-protection',
      title: 'Data Protection Principles',
      description: 'Core principles that guide how we protect and handle your personal information',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      featured: true,
      details: [
        'Lawfulness, fairness, and transparency',
        'Purpose limitation and data minimization',
        'Accuracy and storage limitation',
        'Integrity and confidentiality',
        'Accountability and compliance'
      ]
    },
    {
      id: 'privacy-by-design',
      title: 'Privacy by Design',
      description: 'Privacy considerations integrated into every aspect of our services',
      icon: Settings,
      color: 'from-green-500 to-emerald-600',
      featured: true,
      details: [
        'Proactive privacy protection',
        'Privacy as default setting',
        'Privacy embedded in design',
        'Full functionality and security',
        'End-to-end lifecycle protection'
      ]
    },
    {
      id: 'transparency',
      title: 'Transparency & Control',
      description: 'Clear information about data practices and user control options',
      icon: Eye,
      color: 'from-purple-500 to-pink-600',
      featured: false,
      details: [
        'Clear privacy notices',
        'Easy-to-understand language',
        'Granular consent options',
        'Real-time privacy controls',
        'Regular privacy updates'
      ]
    },
    {
      id: 'security-measures',
      title: 'Security Measures',
      description: 'Robust security measures to protect your personal information',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      featured: false,
      details: [
        'Encryption at rest and in transit',
        'Access controls and authentication',
        'Regular security audits',
        'Incident response procedures',
        'Employee training and awareness'
      ]
    },
    {
      id: 'compliance-standards',
      title: 'Compliance Standards',
      description: 'Adherence to international privacy and data protection standards',
      icon: FileCheck,
      color: 'from-indigo-500 to-purple-600',
      featured: false,
      details: [
        'GDPR compliance',
        'CCPA compliance',
        'SOC 2 Type II certification',
        'ISO 27001 certification',
        'Regular compliance audits'
      ]
    },
    {
      id: 'data-governance',
      title: 'Data Governance',
      description: 'Comprehensive policies and procedures for data management',
      icon: Database,
      color: 'from-teal-500 to-cyan-600',
      featured: false,
      details: [
        'Data classification policies',
        'Retention and deletion policies',
        'Data processing agreements',
        'Vendor management',
        'Regular policy reviews'
      ]
    }
  ];

  const dataCollection = [
    {
      id: 'personal-information',
      title: 'Personal Information',
      description: 'Types of personal information we may collect from you',
      category: 'collection',
      icon: User,
      color: 'from-blue-500 to-cyan-600',
      examples: [
        'Name, email address, and contact information',
        'Company and job title information',
        'Account credentials and preferences',
        'Communication and support history',
        'Device and browser information'
      ],
      purpose: 'Account management and service delivery',
      retention: 'As long as account is active plus 7 years'
    },
    {
      id: 'usage-data',
      title: 'Usage Data',
      description: 'Information about how you use our services',
      category: 'collection',
      icon: Monitor,
      color: 'from-green-500 to-emerald-600',
      examples: [
        'Service usage patterns and preferences',
        'Feature utilization and interactions',
        'Performance and error data',
        'Search queries and navigation',
        'Time spent on different features'
      ],
      purpose: 'Service improvement and optimization',
      retention: '2 years for analytics, 7 years for legal'
    },
    {
      id: 'technical-data',
      title: 'Technical Data',
      description: 'Technical information about your devices and connections',
      category: 'collection',
      icon: Server,
      color: 'from-purple-500 to-pink-600',
      examples: [
        'IP address and location data',
        'Device type and operating system',
        'Browser type and version',
        'Network connection information',
        'Performance metrics and logs'
      ],
      purpose: 'Security, troubleshooting, and optimization',
      retention: '90 days for operational, 2 years for security'
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies & Tracking',
      description: 'Use of cookies and similar technologies',
      category: 'collection',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      examples: [
        'Essential cookies for functionality',
        'Analytics cookies for insights',
        'Preference cookies for customization',
        'Marketing cookies for relevant content',
        'Third-party tracking technologies'
      ],
      purpose: 'Service functionality and user experience',
      retention: 'Varies by cookie type (session to 2 years)'
    },
    {
      id: 'third-party-data',
      title: 'Third-Party Data',
      description: 'Information we receive from third-party sources',
      category: 'collection',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      examples: [
        'Social media profile information',
        'Public records and databases',
        'Business intelligence services',
        'Partner and vendor information',
        'Publicly available information'
      ],
      purpose: 'Enhanced service delivery and insights',
      retention: 'As long as relevant plus 2 years'
    },
    {
      id: 'sensitive-data',
      title: 'Sensitive Data',
      description: 'Special categories of personal information',
      category: 'collection',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      examples: [
        'Health and medical information',
        'Financial and payment data',
        'Biometric identification data',
        'Political and religious beliefs',
        'Criminal record information'
      ],
      purpose: 'Limited to specific service requirements',
      retention: 'Minimum necessary, maximum 7 years'
    },
    {
      id: 'children-data',
      title: 'Children\'s Data',
      description: 'Special protection for children under 13 years old',
      category: 'collection',
      icon: Users,
      color: 'from-yellow-500 to-orange-600',
      examples: [
        'Age verification procedures',
        'Parental consent requirements',
        'Limited data collection',
        'Educational content only',
        'No marketing or tracking'
      ],
      purpose: 'Educational services only',
      retention: 'Until child reaches 13 or account closure'
    },
    {
      id: 'anonymized-data',
      title: 'Anonymized Data',
      description: 'Data that has been processed to remove personal identifiers',
      category: 'collection',
      icon: EyeOff,
      color: 'from-slate-500 to-gray-600',
      examples: [
        'Aggregated usage statistics',
        'Trend analysis and insights',
        'Research and development data',
        'Performance benchmarking',
        'Industry trend analysis'
      ],
      purpose: 'Research, analytics, and insights',
      retention: 'Indefinitely (no personal identifiers)'
    }
  ];

  const dataUsage = [
    {
      id: 'service-delivery',
      title: 'Service Delivery',
      description: 'Using your data to provide and improve our services',
      category: 'usage',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      examples: [
        'Account creation and management',
        'Service customization and preferences',
        'Technical support and troubleshooting',
        'Service updates and improvements',
        'Performance optimization'
      ],
      legalBasis: 'Contract performance and legitimate interest',
      userControl: 'Required for service functionality'
    },
    {
      id: 'communication',
      title: 'Communication',
      description: 'Keeping you informed about our services and updates',
      category: 'usage',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      examples: [
        'Service announcements and updates',
        'Security and privacy notifications',
        'Account and billing information',
        'Support and customer service',
        'Legal and compliance notices'
      ],
      legalBasis: 'Contract performance and legal obligation',
      userControl: 'Required for service delivery'
    },
    {
      id: 'marketing',
      title: 'Marketing & Advertising',
      description: 'Promoting relevant products and services',
      category: 'usage',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      examples: [
        'Product and service recommendations',
        'Personalized marketing content',
        'Newsletter and promotional emails',
        'Social media advertising',
        'Partner and affiliate marketing'
      ],
      legalBasis: 'Consent and legitimate interest',
      userControl: 'Fully opt-in with easy opt-out'
    },
    {
      id: 'analytics',
      title: 'Analytics & Research',
      description: 'Understanding usage patterns and improving services',
      category: 'usage',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      examples: [
        'Usage pattern analysis',
        'Feature performance evaluation',
        'User experience research',
        'Service optimization insights',
        'Industry trend analysis'
      ],
      legalBasis: 'Legitimate interest and consent',
      userControl: 'Opt-out available for non-essential'
    },
    {
      id: 'security',
      title: 'Security & Fraud Prevention',
      description: 'Protecting our services and users from threats',
      category: 'usage',
      icon: Lock,
      color: 'from-indigo-500 to-purple-600',
      examples: [
        'Threat detection and prevention',
        'Fraud monitoring and detection',
        'Account security verification',
        'Incident investigation and response',
        'Compliance and audit requirements'
      ],
      legalBasis: 'Legal obligation and legitimate interest',
      userControl: 'Required for security purposes'
    },
    {
      id: 'compliance',
      title: 'Legal & Compliance',
      description: 'Meeting legal obligations and regulatory requirements',
      category: 'usage',
      icon: FileCheck,
      color: 'from-teal-500 to-cyan-600',
      examples: [
        'Regulatory reporting requirements',
        'Tax and accounting obligations',
        'Legal dispute resolution',
        'Government requests and subpoenas',
        'Audit and compliance verification'
      ],
      legalBasis: 'Legal obligation and legitimate interest',
      userControl: 'Required by law'
    }
  ];

  const userRights = [
    {
      id: 'access',
      title: 'Right of Access',
      description: 'Request a copy of your personal information',
      category: 'rights',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      process: [
        'Submit request through privacy portal',
        'Verify your identity',
        'Receive data within 30 days',
        'Format of your choice',
        'No charge for reasonable requests'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'Excessive or repetitive requests may incur fees'
    },
    {
      id: 'rectification',
      title: 'Right of Rectification',
      description: 'Correct inaccurate or incomplete personal information',
      category: 'rights',
      icon: Edit3,
      color: 'from-green-500 to-emerald-600',
      process: [
        'Identify the specific data to correct',
        'Provide correct information',
        'Verification of identity',
        'Update within 30 days',
        'Notify third parties if applicable'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'May require additional verification'
    },
    {
      id: 'erasure',
      title: 'Right of Erasure',
      description: 'Request deletion of your personal information',
      category: 'rights',
      icon: Trash2,
      color: 'from-red-500 to-pink-600',
      process: [
        'Submit deletion request',
        'Verify your identity',
        'Review for legal exceptions',
        'Delete within 30 days',
        'Confirm deletion completion'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'Legal obligations, security, fraud prevention'
    },
    {
      id: 'portability',
      title: 'Right of Portability',
      description: 'Receive your data in a portable format',
      category: 'rights',
      icon: Download,
      color: 'from-purple-500 to-pink-600',
      process: [
        'Request data portability',
        'Specify format preference',
        'Verify your identity',
        'Prepare data package',
        'Deliver within 30 days'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'May exclude third-party data'
    },
    {
      id: 'restriction',
      title: 'Right of Restriction',
      description: 'Limit how we process your personal information',
      category: 'rights',
      icon: Pause,
      color: 'from-orange-500 to-red-600',
      process: [
        'Submit restriction request',
        'Specify processing limits',
        'Verify your identity',
        'Implement restrictions',
        'Notify you of changes'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'May affect service functionality'
    },
    {
      id: 'objection',
      title: 'Right of Objection',
      description: 'Object to specific processing activities',
      category: 'rights',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-600',
      process: [
        'Submit objection request',
        'Specify objection grounds',
        'Review and evaluate',
        'Respond within 30 days',
        'Implement if valid'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'Legitimate interests may override'
    },
    {
      id: 'automated-decision',
      title: 'Automated Decision Rights',
      description: 'Rights related to automated decision-making',
      category: 'rights',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      process: [
        'Request human review',
        'Express your point of view',
        'Challenge the decision',
        'Request explanation',
        'Appeal the outcome'
      ],
      timeframe: '30 days from request receipt',
      exceptions: 'Contract performance, legal requirements'
    },
    {
      id: 'complaint',
      title: 'Right to Complain',
      description: 'File complaints with supervisory authorities',
      category: 'rights',
      icon: MessageSquare,
      color: 'from-teal-500 to-cyan-600',
      process: [
        'Contact our privacy team first',
        'Escalate to supervisory authority',
        'Provide relevant details',
        'Cooperate with investigation',
        'Implement required changes'
      ],
      timeframe: 'Varies by jurisdiction',
      exceptions: 'None - fundamental right'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'collection':
        return 'text-blue-400 bg-blue-400/10';
      case 'usage':
        return 'text-green-400 bg-green-400/10';
      case 'rights':
        return 'text-purple-400 bg-purple-400/10';
      default:
        return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group protects your privacy, handles your data, and respects your rights. Comprehensive privacy policy and data protection information."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Your privacy is fundamental to us. Learn how we protect your data, respect your rights, and maintain transparency in all our practices.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search privacy policy, data handling, or user rights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Privacy First</div>
                <div className="text-slate-400 text-sm">Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-400 text-sm">Transparent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-slate-400 text-sm">User Rights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Privacy Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Privacy Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Privacy Overview</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Our commitment to protecting your privacy through comprehensive policies and practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyOverview.map((item, index) => (
              <div
                key={item.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  item.featured 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {item.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Core Principle</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Elements:</h4>
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data Collection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Data Collection</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Understanding what data we collect and why it's necessary for our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataCollection.map((item, index) => (
              <div
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {item.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-blue-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Purpose</span>
                    {item.purpose}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Retention</span>
                    {item.retention}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data Usage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Data Usage</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              How we use your data to provide, improve, and secure our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataUsage.map((item, index) => (
              <div
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {item.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Legal Basis</span>
                    {item.legalBasis}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">User Control</span>
                    {item.userControl}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User Rights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Comprehensive rights to control and manage your personal information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <div
                key={right.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${right.color} rounded-xl flex items-center justify-center`}>
                    <right.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                    <p className="text-slate-400 text-sm">{right.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Process:</h4>
                  <ul className="space-y-1">
                    {right.process.map((step, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-purple-400" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Timeframe</span>
                    {right.timeframe}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Exceptions</span>
                    {right.exceptions}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Exercise Right
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our privacy team is here to help you understand your rights and how we protect your data
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Contact Privacy Team
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Exercise Your Rights
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Privacy Support</h3>
              <p className="text-slate-400 text-sm">24/7 privacy assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Policy</h3>
              <p className="text-slate-400 text-sm">Complete privacy documentation</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
              <p className="text-slate-400 text-sm">Enterprise-grade security</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
