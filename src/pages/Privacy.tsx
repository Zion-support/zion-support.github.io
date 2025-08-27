<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  Database, 
  UserCheck, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  Clock,
  Calendar,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Privacy: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const privacySections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: <Database className="w-6 h-6" />,
      content: `We collect information you provide directly to us, such as when you create an account, 
      use our services, or contact us for support. This may include your name, email address, 
      phone number, company information, and any other information you choose to provide.`
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <Eye className="w-6 h-6" />,
      content: `We use the information we collect to provide, maintain, and improve our services, 
      to communicate with you, to develop new features, and to protect our users and services. 
      We may also use your information for research and analytics purposes.`
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      icon: <Globe className="w-6 h-6" />,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties 
      without your consent, except as described in this policy. We may share your information 
      with trusted third-party service providers who assist us in operating our services.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Shield className="w-6 h-6" />,
      content: `We implement appropriate technical and organizational security measures to protect 
      your personal information against unauthorized access, alteration, disclosure, or destruction. 
      These measures include encryption, access controls, and regular security assessments.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <UserCheck className="w-6 h-6" />,
      content: `You have the right to access, correct, or delete your personal information. You may also 
      have the right to restrict or object to certain processing of your information. 
      To exercise these rights, please contact us using the information provided below.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: <FileText className="w-6 h-6" />,
      content: `We use cookies and similar tracking technologies to enhance your experience on our website. 
      These technologies help us understand how you use our services and improve their functionality. 
      You can control cookie settings through your browser preferences.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Privacy <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect and handle your personal information 
              with the highest standards of security and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })}
                className="futuristic-button inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/terms"
                className="futuristic-button-outline inline-flex items-center"
              >
                View Terms
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="futuristic-text text-lg max-w-3xl mx-auto">
              At Zion Tech Group, we believe that privacy is a fundamental human right. 
              We are committed to protecting your personal information and being transparent 
              about how we collect, use, and safeguard your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="futuristic-card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure by Design</h3>
              <p className="text-zion-slate-light">
                We implement security measures at every level of our infrastructure to protect your data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="futuristic-card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transparent Practices</h3>
              <p className="text-zion-slate-light">
                We are open about our data practices and provide clear information about how we handle your information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="futuristic-card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-green to-zion-emerald rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Your Control</h3>
              <p className="text-zion-slate-light">
                You have full control over your personal information and can manage your privacy settings at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Privacy Policy Details
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Comprehensive information about how we handle your personal information and protect your privacy.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-zion-cyan">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-6 h-6 text-zion-slate-light" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-zion-slate-light" />
                  )}
                </button>
                
                {expandedSections.includes(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-zion-slate-light/20"
                  >
                    <p className="text-zion-slate-light leading-relaxed mt-4">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Questions About Privacy?
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="futuristic-card p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">+1-302-464-0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown, DE 19709</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Zion Tech Group Inc.</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="futuristic-card p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Time</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">We aim to respond within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Business days: Monday - Friday</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Available in multiple languages</span>
                  </div>
                </div>
              </motion.div>
=======
import { Shield, Lock, Eye, Database, Users, Calendar, Globe, Mail, Phone } from 'lucide-react';
export default function Privacy() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Your privacy and data security are our top priorities. Learn how we protect and handle your information.
          </p>
          <div className="mt-8 text-sm text-zion-slate-light">
            Last updated: {currentYear}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-zion-cyan" />
                Introduction
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-zion-cyan" />
                Information We Collect
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Professional background and expertise</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-zion-cyan" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-zion-slate-light">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about our offerings</li>
                  <li>Personalizing your experience</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-zion-cyan" />
                Information Sharing
              </h2>
              <p className="text-zion-slate-light mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>With trusted service providers who assist us in operating our website and services</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-zion-cyan" />
                Data Security
              </h2>
              <p className="text-zion-slate-light mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Data Retention
              </h2>
              <p className="text-zion-slate-light mb-6">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-zion-cyan" />
                International Data Transfers
              </h2>
              <p className="text-zion-slate-light mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-zion-cyan" />
                Your Rights
              </h2>
              <p className="text-zion-slate-light mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
              </ul>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Cookies and Tracking
              </h2>
              <p className="text-zion-slate-light mb-6">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-zion-cyan" />
                Children's Privacy
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Changes to This Policy
              </h2>
              <p className="text-zion-slate-light mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-zion-cyan" />
                Contact Us
              </h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-zion-slate-light rounded-lg p-6 space-y-3">
                <div className="flex items-center text-zion-slate-dark">
                  <Mail className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Email: privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-zion-slate-dark">
                  <Phone className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Phone: +1-555-123-4567</span>
                </div>
                <div className="flex items-center text-zion-slate-dark">
                  <Globe className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Website: https://ziontechgroup.com</span>
                </div>
              </div>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Last Updated */}
      <section className="py-12 border-t border-zion-slate-light/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zion-slate-light">
            Last updated: <span className="text-white font-medium">January 15, 2025</span>
          </p>
          <p className="text-zion-slate-light mt-2">
            This privacy policy is effective as of the date listed above and will remain in effect 
            except with respect to any changes in its provisions in the future.
          </p>
=======
      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">
            Have Questions About Privacy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our team is here to help clarify any concerns about how we handle your data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
            >
              Contact Privacy Team
            </a>
            <a
              href="/contact"
              className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
            >
              General Contact
            </a>
          </div>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Privacy;
=======
}
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
