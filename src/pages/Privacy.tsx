import React, { useState } from 'react';
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
  AlertCircle,
  Info,
  FileText,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface PolicySection {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}

const Privacy: React.FC = () => {
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

  const policySections: PolicySection[] = [
    {
      id: 'overview',
      title: 'Overview & Introduction',
      content: `Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.

This policy applies to all users of our services, including clients, website visitors, and anyone who provides personal information to Zion Tech Group. By using our services, you agree to the collection and use of information in accordance with this policy.`,
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: `We collect several types of information from and about users of our services:

Personal Information:
• Name, email address, phone number, and company information
• Professional credentials and business contact details
• Payment and billing information
• Communication preferences and marketing preferences

Technical Information:
• IP address, browser type, and device information
• Website usage data, pages visited, and time spent
• Cookies and similar tracking technologies
• Log files and server information

Business Information:
• Project requirements and technical specifications
• Service usage data and performance metrics
• Feedback, reviews, and support communications
• Contract and agreement information`,
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: `We use the information we collect for various purposes, including:

Service Delivery:
• Providing and maintaining our services
• Processing transactions and managing accounts
• Delivering customer support and technical assistance
• Customizing services to meet your specific needs

Business Operations:
• Improving our services and developing new features
• Conducting research and analysis
• Managing our business operations and internal processes
• Ensuring quality assurance and compliance

Communication:
• Sending important service updates and notifications
• Providing customer support and responding to inquiries
• Marketing and promotional communications (with your consent)
• Legal and regulatory communications

Security and Compliance:
• Protecting against fraud and unauthorized access
• Ensuring compliance with legal obligations
• Investigating and preventing security incidents
• Maintaining the integrity of our services`,
      icon: <Eye className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:

Service Providers:
• Cloud computing and hosting services
• Payment processing and financial services
• Customer support and communication tools
• Analytics and marketing services

Legal Requirements:
• Compliance with applicable laws and regulations
• Response to legal process and government requests
• Protection of our rights and property
• Emergency situations involving public safety

Business Transfers:
• In connection with mergers, acquisitions, or asset sales
• During due diligence and business negotiations
• As part of corporate restructuring or reorganization

With Your Consent:
• When you explicitly authorize us to share information
• For specific business purposes you approve
• In connection with partnerships or collaborations`,
      icon: <Users className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'data-security',
      title: 'Data Security and Protection',
      content: `We implement comprehensive security measures to protect your personal information:

Technical Safeguards:
• Encryption of data in transit and at rest
• Multi-factor authentication and access controls
• Regular security audits and vulnerability assessments
• Intrusion detection and prevention systems

Administrative Controls:
• Employee training on data protection and privacy
• Regular security awareness programs
• Incident response and breach notification procedures
• Vendor security assessments and monitoring

Physical Security:
• Secure data center facilities with 24/7 monitoring
• Controlled access to physical infrastructure
• Environmental controls and disaster recovery
• Secure disposal of physical media and documents

Ongoing Monitoring:
• Continuous security monitoring and threat detection
• Regular penetration testing and security assessments
• Compliance monitoring and reporting
• Security incident tracking and resolution`,
      icon: <Lock className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'data-retention',
      title: 'Data Retention and Deletion',
      content: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:

Retention Periods:
• Active client data: Duration of service relationship plus 7 years
• Marketing data: Until consent withdrawal or 2 years of inactivity
• Technical logs: 12 months for security and debugging purposes
• Financial records: 7 years for tax and compliance purposes

Deletion Process:
• Automatic deletion of expired data
• Manual deletion upon request (subject to legal requirements)
• Secure destruction of physical and digital records
• Verification of complete data removal

Legal Holds:
• Suspension of deletion during legal proceedings
• Preservation of evidence and compliance requirements
• Extended retention for regulatory compliance
• Documentation of retention decisions and rationale`,
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      content: `You have several rights regarding your personal information:

Access and Portability:
• Request access to your personal information
• Receive a copy of your data in portable format
• Review and verify the accuracy of your information
• Understand how we use and share your data

Correction and Updates:
• Request correction of inaccurate information
• Update your personal and business details
• Modify your communication preferences
• Change your account settings and permissions

Deletion and Restriction:
• Request deletion of your personal information
• Restrict processing of your data
• Withdraw consent for specific uses
• Object to certain processing activities

Data Portability:
• Export your data in machine-readable format
• Transfer your information to another service provider
• Request data in structured, commonly used format
• Facilitate data portability where technically feasible`,
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking Technologies',
      content: `We use cookies and similar technologies to enhance your experience:

Types of Cookies:
• Essential cookies for basic website functionality
• Performance cookies for analytics and optimization
• Functional cookies for personalized features
• Marketing cookies for targeted advertising

Cookie Management:
• Browser settings to control cookie preferences
• Opt-out mechanisms for non-essential cookies
• Cookie consent management tools
• Regular review and updates of cookie policies

Third-Party Services:
• Google Analytics for website analytics
• Social media plugins and sharing tools
• Advertising and marketing platforms
• Customer support and communication tools

Do Not Track:
• Respect for Do Not Track browser signals
• Alternative tracking prevention methods
• User choice and control over tracking
• Transparent disclosure of tracking practices`,
      icon: <Globe className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      content: `Your personal information may be transferred to and processed in countries other than your own:

Transfer Mechanisms:
• Adequacy decisions by relevant authorities
• Standard contractual clauses and data protection agreements
• Binding corporate rules and codes of conduct
• Certification schemes and approved mechanisms

Countries and Regions:
• United States (our primary operations)
• European Union and European Economic Area
• Other countries where we have operations
• Cloud service provider locations worldwide

Protection Measures:
• Equivalent data protection standards
• Appropriate safeguards and security measures
• Regular assessment of transfer risks
• Compliance with local data protection laws

Cross-Border Compliance:
• GDPR compliance for EU data subjects
• CCPA compliance for California residents
• Other applicable privacy regulations
• International data protection frameworks`,
      icon: <Globe className="w-6 h-6" />,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      content: `Our services are not intended for children under the age of 13:

Age Restrictions:
• Services designed for business and professional users
• No intentional collection of children's information
• Age verification for certain services
• Parental consent requirements where applicable

Protection Measures:
• Age screening and verification processes
• Parental consent mechanisms
• Special protections for minors
• Educational content about online safety

Reporting and Removal:
• Procedures for identifying children's data
• Prompt removal of children's information
• Reporting mechanisms for violations
• Cooperation with authorities and parents

Compliance Requirements:
• Children's Online Privacy Protection Act (COPPA)
• General Data Protection Regulation (GDPR)
• Other applicable children's privacy laws
• Industry best practices and guidelines`,
      icon: <Users className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'changes-updates',
      title: 'Changes to This Privacy Policy',
      content: `We may update this Privacy Policy from time to time:

Update Process:
• Regular review and assessment of privacy practices
• Updates to reflect changes in services and operations
• Modifications to comply with new laws and regulations
• Improvements based on feedback and best practices

Notification Methods:
• Email notifications to registered users
• Website announcements and banner notifications
• Updated policy posting with effective dates
• Clear indication of material changes

Review and Consent:
• Opportunity to review changes before implementation
• Continued use as acceptance of updated policy
• Option to withdraw consent for new uses
• Contact information for questions and concerns

Version Control:
• Clear version numbering and effective dates
• Archive of previous policy versions
• Change logs and summary of modifications
• Historical policy comparison tools`,
      icon: <FileText className="w-6 h-6" />,
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'contact-information',
      title: 'Contact Information and Support',
      content: `We welcome your questions and feedback about this Privacy Policy:

Primary Contact:
• Privacy Officer: privacy@ziontechgroup.com
• General Inquiries: info@ziontechgroup.com
• Phone: +1 (555) 123-4567
• Address: 364 E Main St STE 1008, Middletown, DE 19709

Data Protection Officer:
• EU Representative: dpo@ziontechgroup.com
• GDPR Compliance: gdpr@ziontechgroup.com
• International Inquiries: international@ziontechgroup.com

Support Channels:
• Privacy Policy Questions: privacy-support@ziontechgroup.com
• Data Rights Requests: data-rights@ziontechgroup.com
• Security Concerns: security@ziontechgroup.com
• Legal Inquiries: legal@ziontechgroup.com

Response Times:
• General inquiries: Within 24 hours
• Data rights requests: Within 30 days
• Security incidents: Immediate response
• Legal matters: Within 5 business days`,
      icon: <Mail className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const lastUpdated = 'December 15, 2024';
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            
            {/* Policy Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 border border-slate-600/30 rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300 text-sm">Last Updated</span>
                </div>
                <p className="text-white font-medium">{lastUpdated}</p>
              </div>
              
              <div className="bg-white/10 border border-slate-600/30 rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm">Effective Date</span>
                </div>
                <p className="text-white font-medium">{effectiveDate}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {policySections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => toggleSection(section.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left group ${
                    expandedSections.has(section.id)
                      ? 'border-cyan-500 bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                      : 'border-slate-600/30 bg-white/5 hover:border-slate-500/50 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm">
                        {index + 1}. {section.title}
                      </h3>
                    </div>
                    {expandedSections.has(section.id) ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {policySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 border border-slate-600/30 rounded-xl overflow-hidden backdrop-blur-md"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {index + 1}. {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-slate-400">
                    {expandedSections.has(section.id) ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-slate-600/30">
                      <div className="pt-4 text-slate-300 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About This Policy?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-slate-400 text-sm">privacy@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Download PDF</h4>
                  <p className="text-slate-400 text-sm">Privacy Policy</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Privacy Team
              </button>
              <button className="px-8 py-3 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                Download Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
