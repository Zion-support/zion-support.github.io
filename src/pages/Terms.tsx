import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Lock, 
  Users, 
  Globe, 
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
  Rocket,
  DollarSign,
  Scale,
  Gavel,
  BookOpen,
  HelpCircle
} from 'lucide-react';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    color: 'from-green-400 to-emerald-500',
    content: [
      {
        subtitle: 'Agreement to Terms',
        description: 'By accessing and using Zion Tech Group services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services.',
        items: [
          'You must be at least 18 years old to use our services',
          'You represent that you have the legal capacity to enter into agreements',
          'You agree to comply with all applicable laws and regulations',
          'You accept responsibility for all activities under your account'
        ]
      },
      {
        subtitle: 'Modifications to Terms',
        description: 'We reserve the right to modify these terms at any time. We will notify users of material changes through our website or email.',
        items: [
          'Changes will be effective immediately upon posting',
          'Continued use constitutes acceptance of modified terms',
          'Material changes will be communicated in advance',
          'You can review current terms on our website at any time'
        ]
      }
    ]
  },
  {
    title: 'Service Description',
    icon: Rocket,
    color: 'from-blue-400 to-cyan-500',
    content: [
      {
        subtitle: 'Technology Services',
        description: 'Zion Tech Group provides comprehensive technology solutions including:',
        items: [
          'AI & Analytics services and consulting',
          'Cloud infrastructure and DevOps solutions',
          'Cybersecurity and compliance services',
          'Digital transformation and consulting',
          'Custom software development',
          'IT infrastructure management'
        ]
      },
      {
        subtitle: 'Service Availability',
        description: 'We strive to provide reliable services but cannot guarantee:',
        items: [
          '100% uptime or uninterrupted access',
          'Compatibility with all devices or browsers',
          'Specific performance or response times',
          'Availability in all geographic locations'
        ]
      }
    ]
  },
  {
    title: 'User Accounts and Responsibilities',
    icon: Users,
    color: 'from-purple-400 to-pink-500',
    content: [
      {
        subtitle: 'Account Creation',
        description: 'To access certain services, you may need to create an account. You are responsible for:',
        items: [
          'Providing accurate and complete information',
          'Maintaining the security of your credentials',
          'Notifying us immediately of unauthorized access',
          'Keeping your contact information current'
        ]
      },
      {
        subtitle: 'Prohibited Activities',
        description: 'You agree not to use our services for:',
        items: [
          'Illegal or unauthorized purposes',
          'Transmitting harmful or malicious code',
          'Attempting to gain unauthorized access',
          'Interfering with service operation',
          'Violating intellectual property rights'
        ]
      }
    ]
  },
  {
    title: 'Payment and Billing',
    icon: DollarSign,
    color: 'from-yellow-400 to-orange-500',
    content: [
      {
        subtitle: 'Service Fees',
        description: 'Fees for our services are as quoted and may include:',
        items: [
          'One-time setup and implementation fees',
          'Monthly or annual subscription fees',
          'Usage-based charges for certain services',
          'Additional support or consulting fees'
        ]
      },
      {
        subtitle: 'Payment Terms',
        description: 'Payment terms and conditions include:',
        items: [
          'Invoices are due within 30 days of issue',
          'Late payments may incur additional charges',
          'We may suspend services for non-payment',
          'Refunds are subject to our refund policy'
        ]
      }
    ]
  },
  {
    title: 'Intellectual Property',
    icon: Shield,
    color: 'from-red-400 to-orange-500',
    content: [
      {
        subtitle: 'Our Intellectual Property',
        description: 'Zion Tech Group retains ownership of:',
        items: [
          'Our proprietary software and technology',
          'Service marks, trademarks, and logos',
          'Documentation and training materials',
          'Custom algorithms and methodologies'
        ]
      },
      {
        subtitle: 'Your Intellectual Property',
        description: 'You retain ownership of your content and data:',
        items: [
          'Your business data and information',
          'Custom requirements and specifications',
          'Your proprietary business processes',
          'Feedback and suggestions you provide'
        ]
      }
    ]
  },
  {
    title: 'Privacy and Data Protection',
    icon: Lock,
    color: 'from-indigo-400 to-purple-500',
    content: [
      {
        subtitle: 'Data Handling',
        description: 'We handle your data in accordance with our Privacy Policy:',
        items: [
          'We collect only necessary information',
          'Data is processed securely and confidentially',
          'We do not sell or rent your personal data',
          'You control your data and can request deletion'
        ]
      },
      {
        subtitle: 'Data Security',
        description: 'We implement security measures including:',
        items: [
          'Encryption of data in transit and at rest',
          'Access controls and authentication',
          'Regular security audits and monitoring',
          'Compliance with industry standards'
        ]
      }
    ]
  },
  {
    title: 'Limitation of Liability',
    icon: Scale,
    color: 'from-gray-400 to-slate-500',
    content: [
      {
        subtitle: 'Liability Limitations',
        description: 'Our liability is limited as follows:',
        items: [
          'We are not liable for indirect or consequential damages',
          'Total liability is limited to fees paid in the 12 months prior',
          'We are not liable for third-party actions or content',
          'Exclusions apply for gross negligence or willful misconduct'
        ]
      },
      {
        subtitle: 'Service Disclaimers',
        description: 'We provide services "as is" and disclaim:',
        items: [
          'Warranties of merchantability or fitness',
          'Guarantees of specific results or outcomes',
          'Compatibility with all systems or requirements',
          'Uninterrupted or error-free service'
        ]
      }
    ]
  },
  {
    title: 'Termination and Cancellation',
    icon: Gavel,
    color: 'from-pink-400 to-rose-500',
    content: [
      {
        subtitle: 'Service Termination',
        description: 'Services may be terminated under certain conditions:',
        items: [
          'Breach of these terms of service',
          'Non-payment of fees',
          'Violation of applicable laws',
          'Mutual agreement to terminate'
        ]
      },
      {
        subtitle: 'Post-Termination',
        description: 'Upon termination of services:',
        items: [
          'Access to services will be discontinued',
          'Data will be handled according to our data retention policy',
          'Outstanding fees must be paid',
          'Intellectual property rights remain as specified'
        ]
      }
    ]
  }
];

const contactInfo = [
  {
    title: 'Legal Department',
    icon: Gavel,
    color: 'from-blue-400 to-cyan-500',
    details: [
      'Email: legal@ziontechgroup.com',
      'Phone: +1 (555) 012-3458',
      'Response time: Within 72 hours'
    ]
  },
  {
    title: 'General Support',
    icon: HelpCircle,
    color: 'from-green-400 to-emerald-500',
    details: [
      'Email: support@ziontechgroup.com',
      'Phone: +1 (555) 012-3456',
      'Response time: Within 24 hours'
    ]
  },
  {
    title: 'Business Inquiries',
    icon: Building,
    color: 'from-purple-400 to-pink-500',
    details: [
      'Email: business@ziontechgroup.com',
      'Phone: +1 (555) 012-3457',
      'Response time: Within 48 hours'
    ]
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Understand our service agreements, user responsibilities, and legal terms for using our technology solutions."
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Please read these terms carefully before using our services. They govern your use of Zion Tech Group's technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Privacy Policy
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
              These terms are effective as of the date above and apply to all users of our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          {termsSections.map((section, sectionIndex) => (
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

      {/* Important Notices */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
                  <p className="text-slate-300 text-sm">
                    These terms constitute a legally binding agreement. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you have any questions about these terms, please contact our legal department before using our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Additional Documents</h3>
                  <p className="text-slate-300 text-sm">
                    These terms should be read in conjunction with our Privacy Policy, Service Level Agreements (SLAs), and any other service-specific terms that may apply to particular services or features. All such documents are incorporated by reference into these terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Questions About These Terms?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team is here to help clarify any questions about our terms of service or legal agreements.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              By using our services, you agree to these terms. Contact us if you have any questions or need clarification.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Legal Team
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
