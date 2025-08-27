import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
<<<<<<< HEAD
  Eye, 
  Database, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings,
  Trash2,
  Download,
  EyeOff,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const privacySections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: Database,
    content: [
      {
        subtitle: 'Personal Information',
        description: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:',
        items: [
          'Name, email address, and contact information',
          'Professional credentials and work history',
          'Payment and billing information',
          'Communication preferences and settings'
        ]
      },
      {
        subtitle: 'Usage Information',
        description: 'We automatically collect certain information about your use of our platform, including:',
        items: [
          'IP address and device information',
          'Pages visited and features used',
          'Search queries and interactions',
          'Performance and error data'
        ]
      },
      {
        subtitle: 'Third-Party Information',
        description: 'We may receive information from third parties, such as:',
        items: [
          'Social media platforms (if you connect accounts)',
          'Business partners and service providers',
          'Public databases and directories',
          'Referral programs and partnerships'
        ]
      }
    ]
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    icon: Settings,
    content: [
      {
        subtitle: 'Service Provision',
        description: 'We use your information to provide, maintain, and improve our services:',
        items: [
          'Process transactions and manage accounts',
          'Connect you with relevant talent and services',
          'Provide customer support and technical assistance',
          'Send service updates and notifications'
        ]
      },
      {
        subtitle: 'Communication',
        description: 'We may use your information to communicate with you about:',
        items: [
          'Service updates and new features',
          'Security alerts and account activity',
          'Marketing and promotional offers (with consent)',
          'Important policy changes and updates'
        ]
      },
      {
        subtitle: 'Analytics and Improvement',
        description: 'We analyze usage patterns to improve our platform:',
        items: [
          'Identify and fix technical issues',
          'Optimize user experience and performance',
          'Develop new features and services',
          'Ensure platform security and reliability'
        ]
      }
    ]
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    icon: Users,
    content: [
      {
        subtitle: 'With Your Consent',
        description: 'We may share your information when you explicitly consent to such sharing.',
        items: []
      },
      {
        subtitle: 'Service Providers',
        description: 'We share information with trusted third-party service providers who help us:',
        items: [
          'Process payments and transactions',
          'Provide hosting and infrastructure services',
          'Deliver customer support and analytics',
          'Maintain security and compliance'
        ]
      },
      {
        subtitle: 'Legal Requirements',
        description: 'We may disclose information when required by law or to:',
        items: [
          'Comply with legal obligations and court orders',
          'Protect our rights, property, and safety',
          'Investigate potential violations of our terms',
          'Prevent fraud and security threats'
        ]
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security and Protection',
    icon: Lock,
    content: [
      {
        subtitle: 'Security Measures',
        description: 'We implement comprehensive security measures to protect your information:',
        items: [
          'End-to-end encryption for sensitive data',
          'Multi-factor authentication and access controls',
          'Regular security audits and vulnerability assessments',
          'Employee training on data protection practices'
        ]
      },
      {
        subtitle: 'Data Retention',
        description: 'We retain your information only as long as necessary:',
        items: [
          'To provide our services and maintain accounts',
          'To comply with legal and regulatory requirements',
          'To resolve disputes and enforce agreements',
          'To improve our services and user experience'
        ]
      },
      {
        subtitle: 'Incident Response',
        description: 'In the event of a data security incident, we will:',
        items: [
          'Immediately investigate and contain the incident',
          'Notify affected users and authorities as required',
          'Implement additional security measures',
          'Provide support and guidance to affected users'
        ]
      }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Rights and Choices',
    icon: CheckCircle,
    content: [
      {
        subtitle: 'Access and Control',
        description: 'You have the right to access and control your personal information:',
        items: [
          'View and update your account information',
          'Download your data in a portable format',
          'Correct inaccurate or incomplete information',
          'Request deletion of your account and data'
        ]
      },
      {
        subtitle: 'Communication Preferences',
        description: 'You can control how we communicate with you:',
        items: [
          'Opt out of marketing communications',
          'Choose notification preferences',
          'Set privacy and visibility settings',
          'Manage third-party integrations'
        ]
      },
      {
        subtitle: 'Data Portability',
        description: 'You can request a copy of your data in a structured format.',
        items: []
      }
    ]
  },
  {
    id: 'cookies-tracking',
    title: 'Cookies and Tracking Technologies',
    icon: Eye,
    content: [
      {
        subtitle: 'Types of Cookies',
        description: 'We use various types of cookies and tracking technologies:',
        items: [
          'Essential cookies for platform functionality',
          'Analytics cookies to understand usage patterns',
          'Preference cookies to remember your settings',
          'Marketing cookies for personalized content'
        ]
      },
      {
        subtitle: 'Third-Party Services',
        description: 'We may use third-party services that collect information:',
        items: [
          'Analytics and performance monitoring',
          'Advertising and marketing services',
          'Social media integration features',
          'Payment processing and security services'
        ]
      },
      {
        subtitle: 'Managing Cookies',
        description: 'You can control cookie settings through:',
        items: [
          'Your browser settings and preferences',
          'Our cookie consent management tool',
          'Third-party opt-out mechanisms',
          'Platform privacy settings'
        ]
      }
    ]
  }
];

<<<<<<< HEAD
  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      title: 'Technical Data',
      description: 'IP address, browser type, device information, usage analytics',
      examples: ['Website analytics', 'Performance monitoring', 'Security logs']
    },
    {
      title: 'Business Information',
      description: 'Company details, project requirements, service preferences',
      examples: ['Service inquiries', 'Project consultations', 'Client communications']
    },
    {
      title: 'Communication Data',
      description: 'Email correspondence, chat logs, support tickets',
      examples: ['Customer support', 'Project updates', 'Marketing communications']
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our technology services and solutions'
    },
    {
      purpose: 'Communication',
      description: 'To respond to inquiries and provide customer support'
    },
    {
      purpose: 'Improvement',
      description: 'To enhance our services and develop new features'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud and ensure system security'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal obligations and regulatory requirements'
    },
    {
      purpose: 'Marketing',
      description: 'To send relevant updates and promotional materials (with consent)'
    }
  ];

  const dataSharing = [
    {
      category: 'Service Providers',
      description: 'Trusted third-party vendors who assist in service delivery',
      examples: ['Cloud hosting providers', 'Payment processors', 'Analytics services']
    },
    {
      category: 'Legal Requirements',
      description: 'When required by law or to protect our rights',
      examples: ['Court orders', 'Government requests', 'Legal proceedings']
    },
    {
      category: 'Business Transfers',
      description: 'In connection with business mergers or acquisitions',
      examples: ['Company sale', 'Asset transfer', 'Corporate restructuring']
    },
    {
      category: 'Consent',
      description: 'When you explicitly authorize us to share your information',
      examples: ['Partner integrations', 'Case studies', 'Testimonials']
=======
  CheckCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it"
    },
    {
      icon: Lock,
      title: "Control",
      description: "You have control over your personal data and can request changes or deletion"
>>>>>>> cursor/website-audit-and-enhancement-8260
    }
  ];
=======
const contactInfo = {
  email: 'privacy@ziontechgroup.com',
  phone: '+1 302 464 0950',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
>>>>>>> cursor/expand-services-and-deploy-updates-fd31

export default function Privacy() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Privacy
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-lg text-gray-400">
              Last updated: {lastUpdated}
=======
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and handle your personal information
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
>>>>>>> cursor/website-audit-and-enhancement-8260
            </p>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Data Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect information to provide and improve our services, communicate with you, and ensure security.
=======
      {/* Privacy Principles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the highest standards of data security
>>>>>>> cursor/website-audit-and-enhancement-8260
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
=======
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
        </div>

<<<<<<< HEAD
      {/* Data Usage Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your information responsibly and only for purposes that benefit you and our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {use.purpose}
                </h3>
                <p className="text-gray-400">
                  {use.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information Sharing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We do not sell your personal information. We only share information in specific, limited circumstances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSharing.map((share, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{share.category}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {share.description}
                </p>
                <ul className="space-y-2">
                  {share.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Name, email address, and contact information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Business information and project requirements
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Communication preferences and feedback
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Technical information about your use of our services
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Provide and improve our services
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Communicate with you about our services
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Ensure security and prevent fraud
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Comply with legal obligations
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              You have the right to:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Access your personal information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Correct inaccurate information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Request deletion of your information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Object to processing of your information
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Data Security Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, access controls, and regular security audits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    End-to-end encryption for sensitive data
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Regular security assessments and penetration testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Employee training on data protection
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions about this privacy policy or want to exercise your data rights, 
                  please contact our privacy team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Privacy Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates & Changes */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Policy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the new policy on our website.
            </p>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-blue-400 font-semibold">Important Notice</span>
              </div>
              <p className="text-gray-300 text-center">
                This privacy policy was last updated on <strong>{lastUpdated}</strong>. 
                Please review it periodically to stay informed about how we protect your information.
=======
        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Privacy Policy</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Your privacy is our priority. Learn how we protect and handle your personal information.
            </p>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-zion-cyan mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Last Updated: January 2025</span>
              </div>
              <p className="text-zion-slate-light text-sm">
                This privacy policy describes how Zion Tech Group collects, uses, and protects your personal information.
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
              </p>
            </div>
          </motion.div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help. Contact us with any privacy-related questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/terms"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Terms of Service
            </Link>
          </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container-responsive py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI marketplace 
                platform and related services.
              </p>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                We are committed to transparency and will notify you of any material changes to this policy.
              </p>
              <p className="text-zion-slate-light leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us using the information provided at the bottom of this page.
              </p>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          {privacySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-8">
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex} className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
                    {content.subtitle && (
                      <h3 className="text-xl font-semibold text-white mb-4">{content.subtitle}</h3>
                    )}
                    {content.description && (
                      <p className="text-zion-slate-light mb-4 leading-relaxed">{content.description}</p>
                    )}
                    {content.items.length > 0 && (
                      <ul className="space-y-2">
                        {content.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-zion-slate-light">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Compliance and Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Compliance and Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'GDPR Compliance', description: 'We comply with the General Data Protection Regulation (GDPR) for EU users.' },
                { icon: Lock, title: 'SOC 2 Certified', description: 'Our security practices are audited and certified under SOC 2 standards.' },
                { icon: Database, title: 'ISO 27001', description: 'We maintain ISO 27001 certification for information security management.' },
                { icon: Globe, title: 'International Standards', description: 'We adhere to privacy laws and regulations in all jurisdictions we operate.' }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zion-slate-light text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact our Privacy Team using any of the following methods:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <FileText className="w-5 h-5 text-zion-cyan" />
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/terms"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <FileText className="w-12 h-12 text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Terms of Service</h3>
                <p className="text-zion-slate-light text-sm">Read our terms and conditions for using our platform.</p>
              </Link>
              
              <Link
                to="/cookies"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <Eye className="w-12 h-12 text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Cookie Policy</h3>
                <p className="text-zion-slate-light text-sm">Learn about our use of cookies and tracking technologies.</p>
              </Link>
              
              <Link
                to="/contact"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <MessageCircle className="w-12 h-12 text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
                <p className="text-zion-slate-light text-sm">Get help with privacy concerns or data requests.</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
