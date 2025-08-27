import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
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

const contactInfo = {
  email: 'privacy@ziontechgroup.com',
  phone: '+1 302 464 0950',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

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
              </p>
            </div>
          </motion.div>
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
