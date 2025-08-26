import React from 'react';
import { Link } from 'react-router-dom';
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
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink
} from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'January 15, 2024';
  const effectiveDate = 'January 15, 2024';

  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          description: 'We may collect personal information such as your name, email address, phone number, company name, and job title when you:',
          items: [
            'Contact us through our website forms',
            'Subscribe to our newsletters or communications',
            'Register for events, webinars, or workshops',
            'Request information about our services',
            'Apply for employment opportunities',
            'Engage with our customer support team'
          ]
        },
        {
          subtitle: 'Technical Information',
          description: 'We automatically collect certain technical information when you visit our website:',
          items: [
            'IP address and device information',
            'Browser type and version',
            'Operating system',
            'Pages visited and time spent',
            'Referring website',
            'Cookies and similar technologies'
          ]
        },
        {
          subtitle: 'Usage Information',
          description: 'We collect information about how you interact with our services:',
          items: [
            'Service usage patterns and preferences',
            'Communication preferences',
            'Feedback and survey responses',
            'Support ticket information'
          ]
        }
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Delivery',
          description: 'We use your information to:',
          items: [
            'Provide and improve our services',
            'Respond to your inquiries and requests',
            'Deliver requested information and materials',
            'Process registrations and payments',
            'Provide customer support and technical assistance'
          ]
        },
        {
          subtitle: 'Communication',
          description: 'We may use your information to:',
          items: [
            'Send newsletters and marketing communications',
            'Notify you about events and webinars',
            'Share important service updates',
            'Respond to your feedback and questions'
          ]
        },
        {
          subtitle: 'Business Operations',
          description: 'We use information to:',
          items: [
            'Analyze and improve our services',
            'Develop new products and features',
            'Ensure security and prevent fraud',
            'Comply with legal obligations'
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
          subtitle: 'Service Providers',
          description: 'We may share your information with trusted third-party service providers who:',
          items: [
            'Host our website and applications',
            'Process payments and transactions',
            'Provide customer support services',
            'Analyze website usage and performance',
            'Send communications on our behalf'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          description: 'We may disclose your information when required by law:',
          items: [
            'To comply with legal processes',
            'To protect our rights and property',
            'To prevent fraud or security threats',
            'To respond to government requests'
          ]
        },
        {
          subtitle: 'Business Transfers',
          description: 'In the event of a business merger, acquisition, or sale:',
          items: [
            'Your information may be transferred to the new entity',
            'We will notify you of any material changes',
            'Your privacy rights will continue to be protected'
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
            'Encryption of data in transit and at rest',
            'Regular security assessments and updates',
            'Access controls and authentication systems',
            'Secure data centers and infrastructure',
            'Employee training on data protection'
          ]
        },
        {
          subtitle: 'Data Retention',
          description: 'We retain your information only as long as necessary:',
          items: [
            'To provide our services',
            'To comply with legal obligations',
            'To resolve disputes and enforce agreements',
            'To improve our services and user experience'
          ]
        },
        {
          subtitle: 'Data Breach Response',
          description: 'In the event of a data breach, we will:',
          items: [
            'Immediately investigate and contain the breach',
            'Notify affected individuals as required by law',
            'Implement additional security measures',
            'Cooperate with law enforcement if necessary'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: Shield,
      content: [
        {
          subtitle: 'Access and Control',
          description: 'You have the right to:',
          items: [
            'Access your personal information',
            'Correct inaccurate or incomplete data',
            'Request deletion of your information',
            'Restrict processing of your data',
            'Port your data to another service'
          ]
        },
        {
          subtitle: 'Communication Preferences',
          description: 'You can control how we communicate with you:',
          items: [
            'Unsubscribe from marketing emails',
            'Update your communication preferences',
            'Opt out of certain data collection',
            'Request changes to your contact information'
          ]
        },
        {
          subtitle: 'Data Processing Consent',
          description: 'Where we rely on consent for data processing:',
          items: [
            'You can withdraw consent at any time',
            'Withdrawal does not affect past processing',
            'We will stop processing data upon withdrawal',
            'You can re-consent at any time'
          ]
        }
      ]
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking Technologies',
      icon: Globe,
      content: [
        {
          subtitle: 'Types of Cookies',
          description: 'We use various types of cookies:',
          items: [
            'Essential cookies for website functionality',
            'Analytics cookies to understand usage',
            'Marketing cookies for personalized content',
            'Preference cookies to remember your settings'
          ]
        },
        {
          subtitle: 'Third-Party Services',
          description: 'We may use third-party services that set cookies:',
          items: [
            'Google Analytics for website analytics',
            'Social media platforms for sharing features',
            'Advertising networks for relevant content',
            'Customer support tools for assistance'
          ]
        },
        {
          subtitle: 'Cookie Management',
          description: 'You can control cookies through:',
          items: [
            'Your browser settings and preferences',
            'Our cookie consent banner',
            'Third-party opt-out mechanisms',
            'Privacy preference centers'
          ]
        }
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Technology Drive, Suite 100, San Francisco, CA 94105',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This policy explains how we collect, use, and safeguard your data.
          </motion.p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Effective Date</h3>
                <p className="text-zion-slate-light">{effectiveDate}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Last Updated</h3>
                <p className="text-zion-slate-light">{lastUpdated}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Data Protection</h3>
                <p className="text-zion-slate-light">GDPR & CCPA Compliant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="space-y-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((content, contentIndex) => (
                    <div key={contentIndex} className="space-y-4">
                      <h3 className="text-xl font-semibold text-zion-cyan">{content.subtitle}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{content.description}</p>
                      <ul className="space-y-2">
                        {content.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-zion-slate-light">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
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
        </div>
      </section>

      {/* Additional Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Children's Privacy</h3>
                <p className="text-zion-slate-light mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13.
                </p>
                <p className="text-zion-slate-light">
                  If you believe we have collected information from a child under 13, please contact us 
                  immediately, and we will take steps to remove such information.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">International Data Transfers</h3>
                <p className="text-zion-slate-light mb-4">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data.
                </p>
                <p className="text-zion-slate-light">
                  For transfers to countries outside the European Economic Area, we use standard contractual 
                  clauses and other approved mechanisms.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h3>
              <p className="text-zion-slate-light">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on our website and updating the "Last Updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
            <p className="text-zion-slate-light text-center mb-8 max-w-3xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact our Privacy Team using the information below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light text-sm">{contactInfo.address}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Website</h3>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Your Privacy Matters
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We're committed to transparency and protecting your data. If you have any concerns 
              or questions about your privacy, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Our Team
              </Link>
              <Link
                to="/terms"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
