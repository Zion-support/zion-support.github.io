import React from 'react';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
      <p className="text-zion-slate-light">The terms governing the use of our services.</p>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  ArrowRight,
  Building,
  Lock,
  Eye,
  Database,
  Server,
  Network,
  Zap,
  Brain,
  Cloud,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Terms() {
  const serviceTerms = [
    {
      title: 'Service Availability',
      description: 'We strive to provide reliable and consistent service availability',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      details: [
        '99.9% uptime commitment',
        '24/7 monitoring and support',
        'Scheduled maintenance windows',
        'Performance optimization'
      ]
    },
    {
      title: 'Data Security',
      description: 'Your data security is our top priority',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Enterprise-grade encryption',
        'Access controls and authentication',
        'Regular security audits',
        'Compliance with industry standards'
      ]
    },
    {
      title: 'Support Services',
      description: 'Comprehensive support for all our services',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Technical support 24/7',
        'Documentation and training',
        'Implementation assistance',
        'Ongoing maintenance'
      ]
    }
  ];

  const userObligations = [
    {
      title: 'Account Security',
      description: 'Maintain the security of your account and credentials',
      icon: Lock,
      color: 'from-blue-500 to-cyan-500',
      obligations: [
        'Keep passwords secure and confidential',
        'Notify us of unauthorized access',
        'Use strong authentication methods',
        'Regular password updates'
      ]
    },
    {
      title: 'Acceptable Use',
      description: 'Use our services responsibly and legally',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      obligations: [
        'Comply with applicable laws',
        'Respect intellectual property rights',
        'Avoid harmful or malicious activities',
        'Maintain professional conduct'
      ]
    },
    {
      title: 'Data Compliance',
      description: 'Ensure compliance with data protection requirements',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      obligations: [
        'Obtain necessary consents',
        'Handle data responsibly',
        'Respect privacy rights',
        'Report data incidents'
      ]
    }
  ];

  const paymentTerms = [
    {
      title: 'Billing Cycles',
      description: 'Clear and transparent billing practices',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Monthly or annual billing options',
        'Pro-rated adjustments for changes',
        'Advance notice for price changes',
        'Multiple payment methods accepted'
      ]
    },
    {
      title: 'Payment Terms',
      description: 'Standard payment terms and conditions',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Net 30 payment terms',
        'Late payment fees apply',
        'Suspension for non-payment',
        'Dispute resolution process'
      ]
    },
    {
      title: 'Refund Policy',
      description: 'Fair and reasonable refund policies',
      icon: ArrowRight,
      color: 'from-purple-500 to-pink-500',
      details: [
        '30-day money-back guarantee',
        'Pro-rated refunds for early termination',
        'Service credit for outages',
        'Case-by-case consideration'
      ]
    }
  ];

  const intellectualProperty = [
    {
      title: 'Our IP Rights',
      description: 'Zion Tech Group retains ownership of our intellectual property',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      rights: [
        'Software and technology platforms',
        'Proprietary algorithms and methods',
        'Brand names and trademarks',
        'Documentation and training materials'
      ]
    },
    {
      title: 'Your IP Rights',
      description: 'You retain ownership of your intellectual property',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      rights: [
        'Your business data and content',
        'Custom configurations and workflows',
        'Feedback and suggestions',
        'Third-party integrations'
      ]
    },
    {
      title: 'Licenses',
      description: 'Licensing terms for our services',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      rights: [
        'Non-exclusive service licenses',
        'Limited to authorized users',
        'No transfer or sublicensing',
        'Termination upon contract end'
      ]
    }
  ];

  const liabilityLimitations = [
    {
      title: 'Service Limitations',
      description: 'Limitations on our service commitments',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500',
      limitations: [
        'No guarantee of specific results',
        'Services provided "as is"',
        'Exclusion of implied warranties',
        'Force majeure exclusions'
      ]
    },
    {
      title: 'Liability Caps',
      description: 'Limitations on our liability',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      limitations: [
        'Limited to fees paid',
        'No consequential damages',
        'No indirect losses',
        'Statutory limitations apply'
      ]
    },
    {
      title: 'Indemnification',
      description: 'Mutual indemnification obligations',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      limitations: [
        'Defend against third-party claims',
        'Cover reasonable legal costs',
        'Prompt notification required',
        'Cooperation in defense'
      ]
    }
  ];

  const terminationTerms = [
    {
      title: 'Termination by You',
      description: 'Your rights to terminate services',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      terms: [
        '30-day written notice required',
        'Payment for services rendered',
        'Data export assistance',
        'Return of company property'
      ]
    },
    {
      title: 'Termination by Us',
      description: 'Our rights to terminate services',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      terms: [
        'Material breach of terms',
        'Non-payment of fees',
        'Illegal or harmful activities',
        '30-day notice for convenience'
      ]
    },
    {
      title: 'Post-Termination',
      description: 'Obligations after service termination',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      terms: [
        'Data retention policies',
        'Confidentiality obligations',
        'Return of materials',
        'Final billing and settlement'
      ]
    }
  ];

  const contactInfo = [
    {
      title: 'Legal Department',
      description: 'For legal questions and contract matters',
      email: 'legal@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    {
      title: 'Contract Management',
      description: 'For contract modifications and renewals',
      email: 'contracts@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service, user obligations, payment terms, and service conditions."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group services. Please read them carefully 
              before using our services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-slate-400 mb-2">
            <Clock className="w-4 h-4" />
            <span>Last Updated: December 2024</span>
          </div>
          <p className="text-slate-300">
            These terms are effective as of the date above and apply to all users of Zion Tech Group services.
          </p>
        </motion.div>
      </div>

      {/* Service Terms */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Service Terms & Conditions
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${term.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <term.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{term.title}</h3>
                  <p className="text-slate-400 text-sm">{term.description}</p>
                </div>
                
                <div className="space-y-3">
                  {term.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* User Obligations */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          User Obligations & Responsibilities
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {userObligations.map((obligation, index) => (
            <motion.div
              key={obligation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${obligation.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <obligation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{obligation.title}</h3>
                <p className="text-slate-400 text-sm">{obligation.description}</p>
              </div>
              
              <div className="space-y-3">
                {obligation.obligations.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Terms */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Payment Terms & Billing
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${term.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <term.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{term.title}</h3>
                  <p className="text-slate-400 text-sm">{term.description}</p>
                </div>
                
                <div className="space-y-3">
                  {term.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Intellectual Property */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Intellectual Property Rights
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {intellectualProperty.map((ip, index) => (
            <motion.div
              key={ip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${ip.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <ip.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{ip.title}</h3>
                <p className="text-slate-400 text-sm">{ip.description}</p>
              </div>
              
              <div className="space-y-3">
                {ip.rights.map((right, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{right}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Liability Limitations */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Liability & Limitations
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {liabilityLimitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${limitation.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <limitation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{limitation.title}</h3>
                  <p className="text-slate-400 text-sm">{limitation.description}</p>
                </div>
                
                <div className="space-y-3">
                  {limitation.limitations.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Termination Terms */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Termination & Cancellation
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {terminationTerms.map((term, index) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${term.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <term.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{term.title}</h3>
                <p className="text-slate-400 text-sm">{term.description}</p>
              </div>
              
              <div className="space-y-3">
                {term.terms.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Contact & Legal Inquiries
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <p className="text-slate-400 mb-6">{contact.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-orange-400 text-sm font-medium">@</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-orange-400 text-sm font-medium">📞</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-orange-400 text-sm font-medium">📍</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Updates */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Terms Updates & Modifications
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto mb-6">
            We may update these terms from time to time to reflect changes in our services, 
            legal requirements, or business practices. We will notify you of any material changes 
            by posting the updated terms on this page.
          </p>
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <Info className="w-4 h-4" />
            <span>Check this page regularly for updates</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
