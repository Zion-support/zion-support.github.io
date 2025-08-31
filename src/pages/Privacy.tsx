import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Lock, Eye, Database, Users, Globe,
  CheckCircle, AlertCircle, Info, Calendar,
  ArrowRight, ChevronDown, ChevronRight, Mail, Phone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Privacy() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const privacySections = [
    {
      id: 'overview',
      title: 'Privacy Policy Overview',
      description: 'How we protect your privacy and handle your data',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or interact with us.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This policy applies to all users of our services, including customers, website visitors, and anyone who provides us with personal information. By using our services, you consent to the collection and use of information in accordance with this policy.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Last Updated</h4>
                <p className="text-gray-300 text-sm">This Privacy Policy was last updated on December 1, 2024. We may update this policy from time to time, and we will notify you of any changes.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-collection',
      title: 'Information We Collect',
      description: 'Types of data we collect and how we collect it',
      icon: Database,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Personal Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Name, email address, phone number, and company information</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Account credentials and profile information</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Billing and payment information</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Communication preferences and marketing preferences</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Usage Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Service usage patterns and analytics data</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Device information and IP addresses</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Cookies and similar tracking technologies</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Log files and system information</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Data Collection Methods</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Direct input through forms and account creation</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Automated collection through our services and website</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Third-party integrations and partnerships</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Customer support interactions and feedback</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Information',
      description: 'Purposes for which we use your data',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Service Provision</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Providing and maintaining our AI services and platform</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Processing transactions and managing billing</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Customer support and technical assistance</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Account management and user authentication</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Service Improvement</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Analyzing usage patterns to improve our services</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Developing new features and functionality</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Conducting research and analytics</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Quality assurance and testing</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Communication</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Sending service updates and notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Marketing communications (with your consent)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Responding to inquiries and support requests</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Legal and regulatory compliance</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing and Disclosure',
      description: 'When and how we share your information',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">We Do Not Sell Your Data</h4>
            <p className="text-gray-300 leading-relaxed">
              Zion Tech Group does not sell, rent, or trade your personal information to third parties for their marketing purposes. Your data is valuable and we are committed to protecting it.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Limited Sharing Scenarios</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Service Providers:</strong> Trusted third-party vendors who help us operate our services</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>With Your Consent:</strong> When you explicitly authorize us to share information</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Data Protection Standards</h4>
            <p className="text-gray-300 leading-relaxed">
              All third-party service providers are carefully selected and must meet our strict data protection standards. We ensure they implement appropriate security measures and use your data only for specified purposes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security and Protection',
      description: 'How we protect your information',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Security Measures</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>End-to-end encryption for data in transit and at rest</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Multi-factor authentication and access controls</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>24/7 monitoring and threat detection</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Employee training on data protection and security</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Data Retention</h4>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Incident Response</h4>
            <p className="text-gray-300 leading-relaxed">
              In the unlikely event of a data breach, we have comprehensive incident response procedures in place. We will notify affected users and relevant authorities as required by law, and take immediate steps to contain and remediate any security issues.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      description: 'Your rights regarding your personal information',
      icon: CheckCircle,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Access and Control</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Access:</strong> Request a copy of your personal information</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Correction:</strong> Update or correct inaccurate information</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Deletion:</strong> Request deletion of your personal data</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Portability:</strong> Receive your data in a portable format</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Marketing Preferences</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Opt-out of marketing communications at any time</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Manage your communication preferences</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Control cookie and tracking preferences</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">How to Exercise Your Rights</h4>
            <p className="text-gray-300 leading-relaxed">
              To exercise any of your privacy rights, contact us at privacy@ziontechgroup.com or use the privacy controls in your account settings. We will respond to your request within 30 days and may need to verify your identity before processing certain requests.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      description: 'How we handle data across borders',
      icon: Globe,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Global Operations</h4>
            <p className="text-gray-300 leading-relaxed">
              Zion Tech Group operates globally and may transfer your personal information to countries other than your country of residence. We ensure that all international data transfers comply with applicable data protection laws and regulations.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Transfer Safeguards</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Standard Contractual Clauses (SCCs) for EU data transfers</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Adequacy decisions for countries with equivalent protection</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Binding corporate rules for intra-group transfers</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Additional technical and organizational safeguards</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Data Localization</h4>
            <p className="text-gray-300 leading-relaxed">
              Where required by local law, we may store your data in specific geographic regions. We will inform you of any such requirements and ensure compliance with applicable regulations.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking Technologies',
      description: 'How we use cookies and similar technologies',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Types of Cookies</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Essential Cookies:</strong> Required for basic website functionality</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Performance Cookies:</strong> Help us understand how visitors use our site</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Cookie Management</h4>
            <p className="text-gray-300 leading-relaxed">
              You can control cookies through your browser settings and our cookie consent manager. You can delete existing cookies and set your browser to refuse cookies, though this may affect website functionality.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Third-Party Tracking</h4>
            <p className="text-gray-300 leading-relaxed">
              We may use third-party analytics and advertising services that use cookies and similar technologies. These services have their own privacy policies, and we encourage you to review them.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      description: 'How we protect children\'s information',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Age Restrictions</h4>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Educational Use</h4>
            <p className="text-gray-300 leading-relaxed">
              For educational institutions using our services, we may collect information about students as authorized by the institution and in compliance with applicable laws such as FERPA (Family Educational Rights and Privacy Act).
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Parental Consent</h4>
            <p className="text-gray-300 leading-relaxed">
              Where required by law, we will obtain parental consent before collecting personal information from children. We will also provide parents with information about our data practices and their rights regarding their child's information.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'changes-updates',
      title: 'Changes to This Policy',
      description: 'How we update our privacy policy',
      icon: Calendar,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Policy Updates</h4>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Notification of Changes</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Email notifications for significant changes</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Website banners and in-app notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Account dashboard updates</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>30-day advance notice for material changes</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Continued Use</h4>
            <p className="text-gray-300 leading-relaxed">
              Your continued use of our services after any changes to this Privacy Policy constitutes acceptance of the updated policy. If you do not agree with the changes, you may need to discontinue using our services.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group protects your privacy, collects and uses your data, and ensures compliance with data protection regulations."
        keywords="privacy policy, data protection, GDPR, data privacy, Zion Tech Group, personal information"
        canonicalUrl="https://ziontechgroup.com/privacy"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <Lock className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">SOC 2 Type II</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {/* Section Content */}
                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6 border-t border-white/10"
                  >
                    <div className="pt-6">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact our privacy team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-3">Send us a detailed message</p>
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  privacy@ziontechgroup.com
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm mb-3">Speak with our privacy team</p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  +1 (555) 123-4567
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-blue-400 font-semibold mb-2">Data Protection Officer</h4>
                  <p className="text-gray-300 text-sm">
                    For complex privacy matters or to exercise your data rights, you can also contact our Data Protection Officer directly at <strong>dpo@ziontechgroup.com</strong>. We are committed to responding to all privacy inquiries within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
