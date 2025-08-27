import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  BookOpen,
  Scale,
  Gavel
} from 'lucide-react';
import { Link } from 'react-router-dom';

const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    content: [
      {
        subtitle: 'Agreement to Terms',
        description: 'By accessing or using Zion Tech Group\'s platform, services, or website, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use our services.',
        items: []
      },
      {
        subtitle: 'Updates to Terms',
        description: 'We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on our platform and updating the "Last Updated" date.',
        items: []
      },
      {
        subtitle: 'Continued Use',
        description: 'Your continued use of our services after any changes to these Terms constitutes acceptance of the new Terms.',
        items: []
      }
    ]
  },
  {
    id: 'services',
    title: 'Description of Services',
    icon: Globe,
    content: [
      {
        subtitle: 'Platform Overview',
        description: 'Zion Tech Group provides an AI marketplace platform that connects businesses with technology talent, services, and solutions. Our services include:',
        items: [
          'AI and technology service marketplace',
          'Talent matching and recruitment services',
          'Equipment and hardware marketplace',
          'Consulting and advisory services',
          'Platform access and user management'
        ]
      },
      {
        subtitle: 'Service Availability',
        description: 'We strive to maintain high service availability but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or technical issues.',
        items: []
      },
      {
        subtitle: 'Service Modifications',
        description: 'We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.',
        items: []
      }
    ]
  },
  {
    id: 'user-accounts',
    title: 'User Accounts and Registration',
    icon: Users,
    content: [
      {
        subtitle: 'Account Creation',
        description: 'To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration.',
        items: []
      },
      {
        subtitle: 'Account Security',
        description: 'You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must:',
        items: [
          'Use strong, unique passwords',
          'Keep your login credentials confidential',
          'Notify us immediately of any unauthorized access',
          'Log out when using shared devices'
        ]
      },
      {
        subtitle: 'Account Termination',
        description: 'We may terminate or suspend your account if you violate these Terms or for other legitimate business reasons.',
        items: []
      }
    ]
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use Policy',
    icon: Shield,
    content: [
      {
        subtitle: 'Permitted Uses',
        description: 'You may use our services for lawful business purposes related to technology services, talent acquisition, and marketplace transactions.',
        items: []
      },
      {
        subtitle: 'Prohibited Activities',
        description: 'You must not use our services to:',
        items: [
          'Violate any applicable laws or regulations',
          'Infringe on intellectual property rights',
          'Transmit harmful, offensive, or inappropriate content',
          'Attempt to gain unauthorized access to our systems',
          'Interfere with the proper functioning of our platform',
          'Engage in fraudulent or deceptive practices',
          'Harass, abuse, or harm other users',
          'Distribute malware or harmful code'
        ]
      },
      {
        subtitle: 'Content Standards',
        description: 'All content posted on our platform must be accurate, lawful, and appropriate for a professional business environment.',
        items: []
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Rights',
    icon: Lock,
    content: [
      {
        subtitle: 'Our Rights',
        description: 'Zion Tech Group and its licensors own all intellectual property rights in our platform, including:',
        items: [
          'Software, code, and technical infrastructure',
          'Brand names, logos, and trademarks',
          'Platform design and user interface',
          'Proprietary algorithms and methodologies'
        ]
      },
      {
        subtitle: 'Your Rights',
        description: 'You retain ownership of content you create and submit to our platform, including:',
        items: [
          'Profile information and professional credentials',
          'Service descriptions and portfolio content',
          'User-generated reviews and feedback',
          'Original creative works and materials'
        ]
      },
      {
        subtitle: 'License Grant',
        description: 'By using our services, you grant us a limited license to use, display, and distribute your content as necessary to provide our services.',
        items: []
      }
    ]
  },
  {
    id: 'privacy-data',
    title: 'Privacy and Data Protection',
    icon: Shield,
    content: [
      {
        subtitle: 'Data Collection',
        description: 'We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws.',
        items: []
      },
      {
        subtitle: 'Data Security',
        description: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
        items: []
      },
      {
        subtitle: 'Data Sharing',
        description: 'We may share your information with service providers, business partners, and other users as described in our Privacy Policy.',
        items: []
      }
    ]
  },
  {
    id: 'payment-terms',
    title: 'Payment and Financial Terms',
    icon: Scale,
    content: [
      {
        subtitle: 'Service Fees',
        description: 'Some services may require payment of fees. All fees are clearly stated and must be paid in advance unless otherwise agreed.',
        items: []
      },
      {
        subtitle: 'Payment Methods',
        description: 'We accept various payment methods including credit cards, bank transfers, and digital wallets. Payment processing is handled by secure third-party providers.',
        items: []
      },
      {
        subtitle: 'Refunds and Cancellations',
        description: 'Refund policies vary by service type. Please review specific service terms for refund and cancellation details.',
        items: []
      }
    ]
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers and Limitations',
    icon: AlertTriangle,
    content: [
      {
        subtitle: 'Service Availability',
        description: 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.',
        items: []
      },
      {
        subtitle: 'Third-Party Services',
        description: 'We may integrate with or link to third-party services. We are not responsible for the content, privacy practices, or availability of these services.',
        items: []
      },
      {
        subtitle: 'Limitation of Liability',
        description: 'To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        items: []
      }
    ]
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    icon: Gavel,
    content: [
      {
        subtitle: 'Informal Resolution',
        description: 'We encourage users to resolve disputes informally through direct communication and our customer support team.',
        items: []
      },
      {
        subtitle: 'Arbitration',
        description: 'Any disputes that cannot be resolved informally may be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
        items: []
      },
      {
        subtitle: 'Governing Law',
        description: 'These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States.',
        items: []
      }
    ]
  }
];

const contactInfo = {
  email: 'legal@ziontechgroup.com',
  phone: '+1 302 464 0950',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Terms() {
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
              <FileText className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Terms of Service</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Please read these terms carefully before using our platform and services.
            </p>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-zion-cyan mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Last Updated: January 2025</span>
              </div>
              <p className="text-zion-slate-light text-sm">
                These terms govern your use of Zion Tech Group's AI marketplace platform and services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Terms Content */}
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
                Welcome to Zion Tech Group. These Terms of Service ("Terms") constitute a legally binding agreement between you 
                and Zion Tech Group ("we," "us," or "our") regarding your use of our AI marketplace platform and related services.
              </p>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                If you do not agree to these Terms, you must not use our services.
              </p>
              <p className="text-zion-slate-light leading-relaxed">
                These Terms apply to all users of our platform, including but not limited to businesses, service providers, 
                talent, and visitors to our website.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
          {termsSections.map((section, index) => (
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

          {/* Important Notices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Important Notices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Legal Compliance</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Users are responsible for ensuring their use of our services complies with applicable laws and regulations in their jurisdiction.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">Security Requirements</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Users must maintain appropriate security measures and not share account credentials or sensitive information.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-zion-purple" />
                  <h3 className="text-lg font-semibold text-white">User Conduct</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  All users must conduct themselves professionally and respectfully when interacting with other platform users.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-8 h-8 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Data Protection</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Users must respect the privacy and data protection rights of other users and comply with our Privacy Policy.
                </p>
              </div>
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
                If you have any questions about these Terms of Service or need legal assistance, 
                please contact our legal team using the information below:
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
                    <ExternalLink className="w-5 h-5 text-zion-cyan" />
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
                to="/privacy"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <Shield className="w-12 h-12 text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Privacy Policy</h3>
                <p className="text-zion-slate-light text-sm">Learn how we protect and handle your personal information.</p>
              </Link>
              
              <Link
                to="/cookies"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <Lock className="w-12 h-12 text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Cookie Policy</h3>
                <p className="text-zion-slate-light text-sm">Understand our use of cookies and tracking technologies.</p>
              </Link>
              
              <Link
                to="/contact"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <MessageCircle className="w-12 h-12 text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
                <p className="text-zion-slate-light text-sm">Get help with legal questions or service issues.</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
