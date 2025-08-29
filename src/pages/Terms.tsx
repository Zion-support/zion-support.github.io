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
  Brain,
  Scale,
  Gavel,
  Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Terms() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['overview']);

  const termsCategories = [
    { id: 'all', name: 'All Terms', count: 32, color: 'from-indigo-500 to-purple-600' },
    { id: 'overview', name: 'Terms Overview', count: 6, color: 'from-blue-500 to-cyan-600' },
    { id: 'services', name: 'Service Terms', count: 8, color: 'from-green-500 to-emerald-600' },
    { id: 'usage', name: 'Usage Terms', count: 6, color: 'from-orange-500 to-red-600' },
    { id: 'legal', name: 'Legal Terms', count: 12, color: 'from-purple-500 to-pink-600' }
  ];

  const termsOverview = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      description: 'By using our services, you agree to be bound by these terms and conditions',
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-600',
      featured: true,
      details: [
        'Automatic acceptance upon service use',
        'Binding agreement for all users',
        'Updates and modifications apply',
        'Continued use after changes',
        'Right to terminate for violations'
      ]
    },
    {
      id: 'scope',
      title: 'Scope of Services',
      description: 'Comprehensive technology services and solutions provided by Zion Tech Group',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      featured: true,
      details: [
        'AI and machine learning services',
        'Cloud computing and DevOps',
        'Cybersecurity and compliance',
        'Digital transformation consulting',
        'Technical training and support'
      ]
    },
    {
      id: 'eligibility',
      title: 'Eligibility Requirements',
      description: 'Requirements for using our services and maintaining accounts',
      icon: User,
      color: 'from-purple-500 to-pink-600',
      featured: false,
      details: [
        'Minimum age requirements',
        'Legal capacity to contract',
        'Valid payment methods',
        'Compliance with laws',
        'Acceptable use policies'
      ]
    },
    {
      id: 'modifications',
      title: 'Terms Modifications',
      description: 'How and when we may modify these terms of service',
      icon: Edit3,
      color: 'from-orange-500 to-red-600',
      featured: false,
      details: [
        'Right to modify terms',
        'Notification of changes',
        'Effective date of modifications',
        'Continued use acceptance',
        'Material change notifications'
      ]
    },
    {
      id: 'termination',
      title: 'Termination Rights',
      description: 'Conditions under which services may be terminated',
      icon: XCircle,
      color: 'from-indigo-500 to-purple-600',
      featured: false,
      details: [
        'User termination rights',
        'Company termination rights',
        'Effect of termination',
        'Data retention policies',
        'Post-termination obligations'
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      description: 'Legal jurisdiction and governing law for these terms',
      icon: Scale,
      color: 'from-teal-500 to-cyan-600',
      featured: false,
      details: [
        'Delaware state law',
        'Federal law application',
        'Dispute resolution procedures',
        'Jurisdiction agreements',
        'Choice of law provisions'
      ]
    }
  ];

  const serviceTerms = [
    {
      id: 'service-description',
      title: 'Service Description',
      description: 'Detailed description of services provided by Zion Tech Group',
      category: 'services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      details: [
        'Technology consulting services',
        'Software development and integration',
        'Cloud infrastructure management',
        'Security and compliance services',
        'Training and certification programs'
      ],
      limitations: 'Services subject to availability and capacity',
      exclusions: 'Third-party products and services not included'
    },
    {
      id: 'service-availability',
      title: 'Service Availability',
      description: 'Service uptime, maintenance, and availability commitments',
      category: 'services',
      icon: Monitor,
      color: 'from-green-500 to-emerald-600',
      details: [
        '99.9% uptime commitment',
        'Scheduled maintenance windows',
        'Emergency maintenance procedures',
        'Service level agreements',
        'Compensation for downtime'
      ],
      limitations: 'Excludes force majeure events',
      exclusions: 'User-caused service interruptions'
    },
    {
      id: 'service-quality',
      title: 'Service Quality',
      description: 'Quality standards and performance commitments',
      category: 'services',
      icon: Award,
      color: 'from-purple-500 to-pink-600',
      details: [
        'Professional service standards',
        'Industry best practices',
        'Quality assurance processes',
        'Performance monitoring',
        'Continuous improvement'
      ],
      limitations: 'Subject to user cooperation',
      exclusions: 'Third-party system limitations'
    },
    {
      id: 'service-changes',
      title: 'Service Changes',
      description: 'How services may be modified or discontinued',
      category: 'services',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      details: [
        'Right to modify services',
        'Advance notice requirements',
        'User impact minimization',
        'Alternative service options',
        'Compensation for changes'
      ],
      limitations: 'Emergency changes may be immediate',
      exclusions: 'Force majeure events'
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services',
      description: 'Integration with and use of third-party services',
      category: 'services',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      details: [
        'Third-party integrations',
        'Service provider relationships',
        'Data sharing agreements',
        'Liability limitations',
        'User consent requirements'
      ],
      limitations: 'Subject to third-party terms',
      exclusions: 'Third-party service failures'
    },
    {
      id: 'service-support',
      title: 'Service Support',
      description: 'Technical support and customer service provisions',
      category: 'services',
      icon: MessageCircle,
      color: 'from-teal-500 to-cyan-600',
      details: [
        '24/7 technical support',
        'Multiple support channels',
        'Response time commitments',
        'Escalation procedures',
        'Support documentation'
      ],
      limitations: 'Subject to support tier',
      exclusions: 'Custom development requests'
    },
    {
      id: 'service-licenses',
      title: 'Service Licenses',
      description: 'Licensing terms for software and intellectual property',
      category: 'services',
      icon: FileCode,
      color: 'from-yellow-500 to-orange-600',
      details: [
        'Software license grants',
        'Intellectual property rights',
        'Usage restrictions',
        'License termination',
        'Survival of terms'
      ],
      limitations: 'Non-transferable licenses',
      exclusions: 'Open source components'
    },
    {
      id: 'service-warranties',
      title: 'Service Warranties',
      description: 'Warranties and disclaimers related to services',
      category: 'services',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      details: [
        'Service performance warranties',
        'Professional service warranties',
        'Warranty disclaimers',
        'Warranty limitations',
        'Remedy provisions'
      ],
      limitations: 'Subject to warranty terms',
      exclusions: 'Implied warranties disclaimed'
    }
  ];

  const usageTerms = [
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      description: 'Rules and guidelines for acceptable use of our services',
      category: 'usage',
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-600',
      prohibited: [
        'Illegal activities and content',
        'Harmful or malicious code',
        'Unauthorized access attempts',
        'Service abuse or overload',
        'Violation of third-party rights'
      ],
      consequences: 'Immediate suspension or termination',
      reporting: '24/7 abuse reporting system'
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      description: 'Responsibilities and obligations of service users',
      category: 'usage',
      icon: User,
      color: 'from-green-500 to-emerald-600',
      obligations: [
        'Compliance with terms',
        'Security of account credentials',
        'Payment of service fees',
        'Cooperation with support',
        'Reporting of issues'
      ],
      consequences: 'Account suspension or termination',
      reporting: 'Regular compliance monitoring'
    },
    {
      id: 'data-responsibilities',
      title: 'Data Responsibilities',
      description: 'User responsibilities for data and content',
      category: 'usage',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      responsibilities: [
        'Data backup and protection',
        'Content ownership verification',
        'Privacy compliance',
        'Data accuracy maintenance',
        'Security best practices'
      ],
      consequences: 'Data loss or service suspension',
      reporting: 'Data incident reporting'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description: 'Intellectual property rights and usage',
      category: 'usage',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      rights: [
        'User content ownership',
        'Service IP protection',
        'License grants',
        'Trademark usage',
        'Copyright compliance'
      ],
      consequences: 'Legal action and termination',
      reporting: 'IP violation reporting'
    },
    {
      id: 'privacy-compliance',
      title: 'Privacy Compliance',
      description: 'Privacy and data protection requirements',
      category: 'usage',
      icon: Lock,
      color: 'from-indigo-500 to-purple-600',
      requirements: [
        'Data protection compliance',
        'Privacy policy adherence',
        'Consent management',
        'Data subject rights',
        'Breach notification'
      ],
      consequences: 'Regulatory penalties',
      reporting: 'Privacy incident reporting'
    },
    {
      id: 'security-requirements',
      title: 'Security Requirements',
      description: 'Security standards and requirements for users',
      category: 'usage',
      icon: Shield,
      color: 'from-teal-500 to-cyan-600',
      requirements: [
        'Access control measures',
        'Security best practices',
        'Incident reporting',
        'Vulnerability management',
        'Compliance with standards'
      ],
      consequences: 'Security review and suspension',
      reporting: 'Security incident reporting'
    }
  ];

  const legalTerms = [
    {
      id: 'liability-limitations',
      title: 'Liability Limitations',
      description: 'Limitations on company liability and damages',
      category: 'legal',
      icon: Scale,
      color: 'from-blue-500 to-cyan-600',
      limitations: [
        'Direct damages only',
        'Maximum liability caps',
        'Exclusion of consequential damages',
        'Force majeure exclusions',
        'Third-party liability'
      ],
      exceptions: 'Willful misconduct or gross negligence',
      jurisdiction: 'Delaware state law applies'
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      description: 'User indemnification obligations to company',
      category: 'legal',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      obligations: [
        'Defense of claims',
        'Payment of damages',
        'Settlement costs',
        'Legal fees coverage',
        'Third-party claims'
      ],
      scope: 'User-caused claims and damages',
      exceptions: 'Company negligence or misconduct'
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      description: 'Procedures for resolving disputes and conflicts',
      category: 'legal',
      icon: Gavel,
      color: 'from-purple-500 to-pink-600',
      procedures: [
        'Informal resolution first',
        'Mediation requirements',
        'Arbitration procedures',
        'Court jurisdiction',
        'Class action waivers'
      ],
      venue: 'Delaware courts',
      exceptions: 'Injunctive relief actions'
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      description: 'Events beyond reasonable control and their effects',
      category: 'legal',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600',
      events: [
        'Natural disasters',
        'Government actions',
        'War and civil unrest',
        'Labor disputes',
        'Technology failures'
      ],
      effects: 'Suspension of obligations',
      exceptions: 'Payment obligations continue'
    },
    {
      id: 'severability',
      title: 'Severability',
      description: 'Effect of invalid or unenforceable terms',
      category: 'legal',
      icon: FileCheck,
      color: 'from-indigo-500 to-purple-600',
      effects: [
        'Remaining terms valid',
        'Partial enforcement',
        'Reformation of terms',
        'Court modification',
        'Intent preservation'
      ],
      scope: 'Individual term invalidity',
      exceptions: 'Material term invalidity'
    },
    {
      id: 'entire-agreement',
      title: 'Entire Agreement',
      description: 'Complete agreement and integration of terms',
      category: 'legal',
      icon: FileText,
      color: 'from-teal-500 to-cyan-600',
      scope: [
        'All written agreements',
        'Oral agreements excluded',
        'Previous negotiations',
        'Representations excluded',
        'Modification requirements'
      ],
      effect: 'Supersedes all prior agreements',
      exceptions: 'Written modifications only'
    },
    {
      id: 'waiver',
      title: 'Waiver',
      description: 'Effect of waiving rights and remedies',
      category: 'legal',
      icon: CheckCircle,
      color: 'from-yellow-500 to-orange-600',
      effects: [
        'No implied waivers',
        'Written waiver required',
        'Specific right waiver',
        'Future right preservation',
        'Remedy preservation'
      ],
      scope: 'Individual right waivers',
      exceptions: 'Express written waivers'
    },
    {
      id: 'assignment',
      title: 'Assignment',
      description: 'Transfer and assignment of rights and obligations',
      category: 'legal',
      icon: Users,
      color: 'from-red-500 to-pink-600',
      restrictions: [
        'User assignment prohibited',
        'Company assignment allowed',
        'Successor obligations',
        'Third-party beneficiaries',
        'Transfer requirements'
      ],
      scope: 'Contract rights and obligations',
      exceptions: 'Company reorganization'
    },
    {
      id: 'notices',
      title: 'Notices',
      description: 'Requirements for official notices and communications',
      category: 'legal',
      icon: Mail,
      color: 'from-slate-500 to-gray-600',
      requirements: [
        'Written notice form',
        'Delivery methods',
        'Effective date rules',
        'Address requirements',
        'Electronic notice'
      ],
      scope: 'Official communications',
      exceptions: 'Emergency communications'
    },
    {
      id: 'survival',
      title: 'Survival',
      description: 'Terms that survive termination of services',
      category: 'legal',
      icon: Clock,
      color: 'from-cyan-500 to-blue-600',
      terms: [
        'Payment obligations',
        'Confidentiality provisions',
        'Intellectual property rights',
        'Liability limitations',
        'Dispute resolution'
      ],
      duration: 'Survive termination',
      exceptions: 'Express termination'
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      description: 'Applicable law and jurisdiction for disputes',
      category: 'legal',
      icon: Building,
      color: 'from-violet-500 to-purple-600',
      law: [
        'Delaware state law',
        'Federal law application',
        'Conflict of laws',
        'International considerations',
        'Regulatory compliance'
      ],
      jurisdiction: 'Delaware courts',
      exceptions: 'Federal jurisdiction'
    },
    {
      id: 'amendment',
      title: 'Amendment',
      description: 'Process for modifying and updating terms',
      category: 'legal',
      icon: Edit3,
      color: 'from-emerald-500 to-green-600',
      process: [
        'Company right to amend',
        'Notice requirements',
        'User acceptance methods',
        'Effective date rules',
        'Material change notice'
      ],
      scope: 'All terms subject to amendment',
      exceptions: 'User agreement required'
    },
    {
      id: 'headings',
      title: 'Section Headings',
      description: 'Effect and interpretation of section headings',
      category: 'legal',
      icon: FileText,
      color: 'from-rose-500 to-pink-600',
      effect: [
        'Descriptive purposes only',
        'No legal significance',
        'Interpretation guidance',
        'Organization aid',
        'Reference convenience'
      ],
      scope: 'All section headings',
      exceptions: 'None specified'
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
      case 'services':
        return 'text-blue-400 bg-blue-400/10';
      case 'usage':
        return 'text-green-400 bg-green-400/10';
      case 'legal':
        return 'text-purple-400 bg-purple-400/10';
      default:
        return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service, conditions, and legal agreements. Understand your rights and obligations when using our technology services."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Important legal terms and conditions that govern your use of Zion Tech Group services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search terms of service, conditions, or legal information..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Legal</div>
                <div className="text-slate-400 text-sm">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">User</div>
                <div className="text-slate-400 text-sm">Protection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Clear</div>
                <div className="text-slate-400 text-sm">Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Legal Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Terms Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Terms Overview</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Fundamental terms and conditions that apply to all Zion Tech Group services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {termsOverview.map((item, index) => (
              <div
                key={item.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  item.featured 
                    ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {item.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Core Term</span>
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

        {/* Service Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Terms</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Specific terms and conditions related to our technology services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceTerms.map((item, index) => (
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
                  <h4 className="text-sm font-semibold text-white mb-2">Details:</h4>
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-blue-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Limitations</span>
                    {item.limitations}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Exclusions</span>
                    {item.exclusions}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Usage Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Usage Terms</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Rules, guidelines, and requirements for using our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {usageTerms.map((item, index) => (
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
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {item.obligations || item.requirements || item.rights || item.responsibilities?.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Consequences</span>
                    {item.consequences}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Reporting</span>
                    {item.reporting}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legal Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Legal Terms</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Important legal provisions and protections for all parties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalTerms.map((item, index) => (
              <div
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
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
                  <h4 className="text-sm font-semibold text-white mb-2">Key Provisions:</h4>
                  <ul className="space-y-1">
                    {item.limitations || item.obligations || item.effects || item.procedures || item.events || item.terms || item.law || item.process || item.requirements?.map((provision, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-purple-400" />
                        {provision}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Scope</span>
                    {item.scope}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Exceptions</span>
                    {item.exceptions}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Details
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
          className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Terms?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our legal team is here to help you understand these terms and your rights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Contact Legal Team
            </button>
            <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
              Download Terms
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Scale className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Legal Compliance</h3>
              <p className="text-slate-400 text-sm">Full regulatory compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">User Protection</h3>
              <p className="text-slate-400 text-sm">Comprehensive user rights</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Clear Terms</h3>
              <p className="text-slate-400 text-sm">Easy to understand language</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
