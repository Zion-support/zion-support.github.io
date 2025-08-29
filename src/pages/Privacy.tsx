import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  FileText, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building,
  Heart,
  Star,
  Award,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Cloud,
  Rocket
} from 'lucide-react';

const privacySections = [
  {
    title: 'Information We Collect',
    icon: Database,
    color: 'from-blue-400 to-cyan-500',
    content: [
      {
        subtitle: 'Personal Information',
        description: 'We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:',
        items: [
          'Name, email address, and contact information',
          'Company name and job title',
          'Payment and billing information',
          'Communication preferences'
        ]
      },
      {
        subtitle: 'Usage Information',
        description: 'We automatically collect certain information about your use of our services, including:',
        items: [
          'IP address and device information',
          'Pages visited and features used',
          'Time spent on our services',
          'Error logs and performance data'
        ]
      },
      {
        subtitle: 'Technical Information',
        description: 'We collect technical information about your device and how you interact with our services:',
        items: [
          'Browser type and version',
          'Operating system and device type',
          'Network information and connection speed',
          'Cookies and similar technologies'
        ]
      }
    ]
  },
  {
    title: 'How We Use Your Information',
    icon: Eye,
    color: 'from-purple-400 to-pink-500',
    content: [
      {
        subtitle: 'Service Delivery',
        description: 'We use your information to provide, maintain, and improve our services:',
        items: [
          'Process transactions and manage accounts',
          'Provide customer support and respond to inquiries',
          'Send service-related communications',
          'Personalize your experience'
        ]
      },
      {
        subtitle: 'Business Operations',
        description: 'We use information to operate our business effectively:',
        items: [
          'Analyze usage patterns and improve services',
          'Develop new features and products',
          'Ensure security and prevent fraud',
          'Comply with legal obligations'
        ]
      },
      {
        subtitle: 'Marketing and Communications',
        description: 'With your consent, we may use your information for:',
        items: [
          'Sending promotional materials and newsletters',
          'Providing information about new services',
          'Conducting surveys and research',
          'Personalized advertising (where permitted)'
        ]
      }
    ]
  },
  {
    title: 'Information Sharing and Disclosure',
    icon: Users,
    color: 'from-green-400 to-emerald-500',
    content: [
      {
        subtitle: 'Service Providers',
        description: 'We may share your information with trusted third-party service providers who:',
        items: [
          'Host our services and infrastructure',
          'Process payments and transactions',
          'Provide analytics and monitoring',
          'Deliver customer support services'
        ]
      },
      {
        subtitle: 'Legal Requirements',
        description: 'We may disclose your information when required by law:',
        items: [
          'To comply with legal processes or government requests',
          'To protect our rights, property, or safety',
          'To investigate potential violations of our terms',
          'In connection with legal proceedings'
        ]
      },
      {
        subtitle: 'Business Transfers',
        description: 'In the event of a business transfer or merger:',
        items: [
          'Your information may be transferred to the new entity',
          'We will notify you of any material changes',
          'Your privacy rights will continue to be protected',
          'You may opt out of certain transfers'
        ]
      }
    ]
  },
  {
    title: 'Data Security and Protection',
    icon: Lock,
    color: 'from-red-400 to-orange-500',
    content: [
      {
        subtitle: 'Security Measures',
        description: 'We implement comprehensive security measures to protect your information:',
        items: [
          'Encryption of data in transit and at rest',
          'Multi-factor authentication and access controls',
          'Regular security audits and penetration testing',
          'Employee training on data protection'
        ]
      },
      {
        subtitle: 'Data Retention',
        description: 'We retain your information only as long as necessary:',
        items: [
          'To provide our services and fulfill obligations',
          'To comply with legal and regulatory requirements',
          'To resolve disputes and enforce agreements',
          'To improve our services and develop new features'
        ]
      },
      {
        subtitle: 'Incident Response',
        description: 'In the event of a data security incident:',
        items: [
          'We will investigate and assess the situation',
          'Notify affected individuals as required by law',
          'Take immediate steps to contain and remediate',
          'Implement additional security measures'
        ]
      }
    ]
  },
  {
    title: 'Your Privacy Rights',
    icon: Shield,
    color: 'from-yellow-400 to-orange-500',
    content: [
      {
        subtitle: 'Access and Control',
        description: 'You have the right to access and control your personal information:',
        items: [
          'View and update your account information',
          'Download a copy of your data',
          'Correct inaccurate or incomplete information',
          'Request deletion of your data'
        ]
      },
      {
        subtitle: 'Communication Preferences',
        description: 'You can control how we communicate with you:',
        items: [
          'Opt out of marketing communications',
          'Choose your preferred communication methods',
          'Set frequency and timing of messages',
          'Unsubscribe from specific types of communications'
        ]
      },
      {
        subtitle: 'Data Portability',
        description: 'You have the right to data portability:',
        items: [
          'Receive your data in a structured format',
          'Transfer your data to another service provider',
          'Request data in commonly used formats',
          'Receive assistance with data transfers'
        ]
      }
    ]
  }
];

const cookiesInfo = [
  {
    type: 'Essential Cookies',
    description: 'Required for basic website functionality',
    examples: ['Authentication', 'Security', 'Session management'],
    necessary: true
  },
  {
    type: 'Performance Cookies',
    description: 'Help us understand how visitors interact with our website',
    examples: ['Analytics', 'Error tracking', 'Performance monitoring'],
    necessary: false
  },
  {
    type: 'Functional Cookies',
    description: 'Enable enhanced functionality and personalization',
    examples: ['Language preferences', 'User settings', 'Customization'],
    necessary: false
  },
  {
    type: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and track marketing campaigns',
    examples: ['Advertising', 'Social media', 'Campaign tracking'],
    necessary: false
  }
];

const contactInfo = [
  {
    title: 'Privacy Officer',
    icon: Shield,
    color: 'from-blue-400 to-cyan-500',
    details: [
      'Email: privacy@ziontechgroup.com',
      'Phone: +1 (555) 012-3456',
      'Response time: Within 48 hours'
    ]
  },
  {
    title: 'Data Protection',
    icon: Lock,
    color: 'from-green-400 to-emerald-500',
    details: [
      'Email: dataprotection@ziontechgroup.com',
      'Phone: +1 (555) 012-3457',
      'Response time: Within 24 hours'
    ]
  },
  {
    title: 'Legal Department',
    icon: FileText,
    color: 'from-purple-400 to-pink-500',
    details: [
      'Email: legal@ziontechgroup.com',
      'Phone: +1 (555) 012-3458',
      'Response time: Within 72 hours'
    ]
  }
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information. Read our comprehensive privacy policy and data protection practices."
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
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Us
              </Link>
              <Link
                to="/terms"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Last Updated</span>
            </div>
            <p className="text-white text-lg">January 15, 2024</p>
            <p className="text-slate-400 text-sm mt-2">
              This privacy policy is effective as of the date above and applies to all users of our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          {privacySections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-8">
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-3">{content.subtitle}</h3>
                    <p className="text-slate-300 mb-4">{content.description}</p>
                    <ul className="space-y-2">
                      {content.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cookies Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cookie Policy
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We use cookies and similar technologies to enhance your experience and analyze our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookiesInfo.map((cookie, index) => (
              <motion.div
                key={cookie.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{cookie.type}</h3>
                  {cookie.necessary && (
                    <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">
                      Necessary
                    </span>
                  )}
                </div>
                <p className="text-slate-300 mb-4">{cookie.description}</p>
                <div>
                  <h4 className="text-slate-400 text-sm font-medium mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cookie.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Our Privacy Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have questions about your privacy or need to exercise your rights? Contact our dedicated privacy team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{contact.title}</h3>
                <div className="space-y-2">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-300 text-sm">{detail}</p>
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
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We're committed to transparency and protecting your privacy. Contact us with any questions or concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Privacy Team
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
