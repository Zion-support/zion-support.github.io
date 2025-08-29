import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Scale,
  Lock,
  Zap,
  Brain,
  Cloud,
  Rocket
} from 'lucide-react';

interface TermsSection {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}

const Terms: React.FC = () => {
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

  const termsSections: TermsSection[] = [
    {
      id: 'overview',
      title: 'Overview & Acceptance',
      content: `These Terms of Service ("Terms") govern your use of Zion Tech Group's services, website, and any related applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.

If you do not agree to these Terms, you must not use our Services. These Terms apply to all users, clients, and visitors of Zion Tech Group's Services.

Zion Tech Group reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of the Services after such changes constitutes acceptance of the new Terms.`,
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'services-description',
      title: 'Description of Services',
      content: `Zion Tech Group provides comprehensive technology consulting and development services, including:

AI & Machine Learning Solutions:
• Custom AI model development and deployment
• Natural language processing and computer vision
• Predictive analytics and business intelligence
• AI strategy consulting and implementation

Cloud & DevOps Services:
• Cloud infrastructure design and migration
• DevOps automation and CI/CD pipelines
• Containerization and orchestration
• Cloud cost optimization and management

Cybersecurity Services:
• Security assessments and penetration testing
• Compliance and regulatory support
• Incident response and threat detection
• Security architecture and implementation

Digital Transformation:
• Legacy system modernization
• Process automation and optimization
• Technology strategy and roadmapping
• Change management and training

Custom Software Development:
• Web and mobile application development
• API development and integration
• Database design and optimization
• Quality assurance and testing`,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'user-obligations',
      title: 'User Obligations and Responsibilities',
      content: `As a user of our Services, you agree to:

General Conduct:
• Provide accurate and complete information
• Maintain the security of your account credentials
• Use the Services only for lawful purposes
• Respect intellectual property rights

Service-Specific Requirements:
• Provide necessary access to systems and data
• Designate appropriate personnel for project coordination
• Participate in project meetings and reviews
• Provide timely feedback and approvals

Compliance and Legal:
• Comply with applicable laws and regulations
• Obtain necessary licenses and permissions
• Ensure data privacy and security compliance
• Maintain appropriate insurance coverage

Communication and Cooperation:
• Respond to requests within reasonable timeframes
• Provide clear project requirements and objectives
• Communicate changes and issues promptly
• Participate in training and knowledge transfer`,
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      content: `Intellectual property ownership is defined as follows:

Client-Owned IP:
• Pre-existing client systems and data
• Client-specific business logic and requirements
• Client trademarks and branding materials
• Client confidential information and trade secrets

Zion Tech Group IP:
• Proprietary frameworks and methodologies
• Reusable code libraries and components
• Technical documentation and training materials
• Service delivery processes and tools

Project Deliverables:
• Custom code developed for specific projects
• Project-specific documentation and reports
• Training materials created for client use
• Integration and configuration files

Licenses and Usage:
• Non-exclusive license to use deliverables
• Right to modify and maintain deliverables
• Restrictions on reverse engineering
• Prohibition of unauthorized distribution

Open Source and Third-Party:
• Disclosure of open source components
• Compliance with third-party licenses
• Attribution requirements and notices
• License compatibility verification`,
      icon: <Shield className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms and Billing',
      content: `Payment terms and conditions for our services:

Pricing Structure:
• Fixed-price projects with defined deliverables
• Time and materials billing for ongoing services
• Subscription-based pricing for managed services
• Custom pricing for enterprise engagements

Payment Schedule:
• Initial deposit upon project commencement
• Milestone payments for project phases
• Monthly billing for ongoing services
• Final payment upon project completion

Invoicing and Payment:
• Electronic invoicing with detailed breakdowns
• Net 30 payment terms for most services
• Early payment discounts available
• Late payment fees and interest charges

Expenses and Additional Costs:
• Travel and accommodation for on-site work
• Third-party software licenses and tools
• Hardware and infrastructure costs
• Overtime and expedited delivery charges

Refunds and Adjustments:
• No refunds for completed work
• Adjustments for scope changes
• Credits for service interruptions
• Dispute resolution procedures`,
      icon: <Scale className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality and Data Protection',
      content: `We are committed to protecting your confidential information:

Confidential Information:
• Business plans and strategies
• Technical specifications and designs
• Customer and employee data
• Financial and operational information

Protection Measures:
• Non-disclosure agreements with all personnel
• Secure data handling and storage
• Access controls and monitoring
• Regular security training and audits

Data Processing:
• Compliance with data protection regulations
• Secure transmission and storage
• Data minimization and retention policies
• Right to data deletion and portability

Breach Notification:
• Immediate notification of security incidents
• Detailed incident reports and analysis
• Remediation and prevention measures
• Regulatory reporting as required

Third-Party Access:
• Subcontractor confidentiality agreements
• Vendor security assessments
• Data processing agreements
• Regular compliance monitoring`,
      icon: <Lock className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'service-levels',
      title: 'Service Level Agreements',
      content: `Our commitment to service quality and availability:

Response Times:
• Critical issues: 1 hour response
• High priority: 4 hours response
• Medium priority: 24 hours response
• Low priority: 48 hours response

Availability Targets:
• Production systems: 99.9% uptime
• Development environments: 99.5% uptime
• Support services: 24/7 availability
• Maintenance windows: Scheduled in advance

Performance Standards:
• Application response times under 2 seconds
• Database query performance optimization
• Scalability for peak load handling
• Regular performance monitoring and tuning

Quality Assurance:
• Code review and testing requirements
• Security vulnerability assessments
• Performance and load testing
• User acceptance testing procedures

Escalation Procedures:
• Technical support escalation paths
• Management notification for critical issues
• Client communication protocols
• Emergency response procedures`,
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'limitations-liability',
      title: 'Limitations of Liability',
      content: `Limitations on our liability for services provided:

General Limitations:
• Services provided "as is" and "as available"
• No warranties of merchantability or fitness
• Exclusion of consequential and indirect damages
• Limitation of liability to fees paid

Specific Exclusions:
• Loss of profits or business opportunities
• Data loss or corruption
• Third-party service interruptions
• Force majeure events

Liability Caps:
• Maximum liability limited to service fees
• Per-incident liability limitations
• Annual aggregate liability caps
• Insurance coverage requirements

Indemnification:
• Client indemnification for third-party claims
• Zion Tech Group indemnification for IP claims
• Defense and settlement cooperation
• Insurance coverage coordination

Force Majeure:
• Natural disasters and weather events
• Government actions and regulations
• Infrastructure and utility failures
• Pandemic and health emergencies`,
      icon: <AlertCircle className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'termination',
      title: 'Termination and Suspension',
      content: `Terms for ending or suspending service relationships:

Termination by Client:
• 30-day written notice for most services
• Immediate termination for material breach
• Final payment and deliverable transfer
• Data export and system access removal

Termination by Zion Tech Group:
• 30-day notice for convenience termination
• Immediate termination for client breach
• Non-payment and violation consequences
• Service suspension and access restrictions

Suspension Conditions:
• Non-payment of outstanding invoices
• Violation of acceptable use policies
• Security threats or suspicious activity
• Regulatory compliance issues

Post-Termination Obligations:
• Return of client property and data
• Deletion of confidential information
• Final project documentation delivery
• Knowledge transfer and training completion

Transition Services:
• Extended support during transition period
• Documentation and system handover
• Training for replacement personnel
• Ongoing maintenance and support options`,
      icon: <Info className="w-6 h-6" />,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution and Governing Law',
      content: `Procedures for resolving disputes and legal matters:

Dispute Resolution Process:
• Informal negotiation and mediation
• Formal mediation with neutral third party
• Arbitration for unresolved disputes
• Litigation as last resort

Governing Law:
• Delaware law for most matters
• Federal law for intellectual property
• International law for cross-border services
• Choice of law provisions

Jurisdiction and Venue:
• Delaware courts for legal proceedings
• Federal courts for federal matters
• Arbitration location preferences
• Service of process requirements

Arbitration Terms:
• Binding arbitration for most disputes
• Single arbitrator for smaller claims
• Panel of three for larger disputes
• Expedited procedures available

Class Action Waiver:
• Individual arbitration only
• No class or representative actions
• Severability of arbitration clauses
• Right to opt-out procedures`,
      icon: <Scale className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'miscellaneous',
      title: 'Miscellaneous Provisions',
      content: `Additional terms and conditions:

Entire Agreement:
• These Terms constitute the complete agreement
• Supersedes all prior agreements and understandings
• Modifications must be in writing
• Severability of individual provisions

Assignment and Transfer:
• Client may not assign without consent
• Zion Tech Group may assign to affiliates
• Successor and assign obligations
• Change of control notifications

Independent Contractors:
• Zion Tech Group is an independent contractor
• No employment or partnership relationship
• Responsibility for taxes and benefits
• Professional liability insurance

Notices and Communications:
• Written notice requirements
• Electronic communication consent
• Service of legal documents
• Change of contact information

Survival of Terms:
• Confidentiality obligations
• Intellectual property rights
• Limitation of liability
• Dispute resolution procedures`,
      icon: <FileText className="w-6 h-6" />,
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'contact-information',
      title: 'Contact Information and Support',
      content: `How to reach us for questions and support:

General Inquiries:
• Email: info@ziontechgroup.com
• Phone: +1 (555) 123-4567
• Address: 364 E Main St STE 1008, Middletown, DE 19709
• Website: https://ziontechgroup.com

Legal and Compliance:
• Legal Department: legal@ziontechgroup.com
• Compliance Officer: compliance@ziontechgroup.com
• Data Protection: privacy@ziontechgroup.com
• Contract Questions: contracts@ziontechgroup.com

Technical Support:
• Technical Support: support@ziontechgroup.com
• Emergency Support: emergency@ziontechgroup.com
• Project Management: projects@ziontechgroup.com
• Training and Documentation: training@ziontechgroup.com

Business Development:
• Sales Inquiries: sales@ziontechgroup.com
• Partnership Opportunities: partnerships@ziontechgroup.com
• Media and Press: press@ziontechgroup.com
• Investor Relations: investors@ziontechgroup.com

Response Times:
• General inquiries: Within 24 hours
• Technical support: Within 4 hours
• Legal matters: Within 5 business days
• Emergency situations: Immediate response`,
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              These Terms of Service govern your use of Zion Tech Group's services and establish the legal 
              framework for our business relationship. Please read them carefully.
            </p>
            
            {/* Terms Info */}
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

      {/* Terms Content */}
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
              {termsSections.map((section, index) => (
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

          {/* Terms Sections */}
          <div className="space-y-6">
            {termsSections.map((section, index) => (
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
              Questions About These Terms?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              If you have any questions about these Terms of Service or need clarification on any provision, 
              please don't hesitate to contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Legal Department</h4>
                  <p className="text-slate-400 text-sm">legal@ziontechgroup.com</p>
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
                  <p className="text-slate-400 text-sm">Terms of Service</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Legal Team
              </button>
              <button className="px-8 py-3 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                Download Terms
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
