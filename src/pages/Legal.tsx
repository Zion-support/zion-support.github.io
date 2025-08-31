import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scale, 
  Shield, 
  FileText, 
  Lock, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Users,
  Database,
  Cloud,
  Brain,
  Server,
  Building2,
  ArrowRight,
  BookOpen,
  Gavel,
  Eye,
  Key,
  Server as ServerIcon,
  Shield as ShieldIcon,
  Lock as LockIcon
} from 'lucide-react';

export function Legal() {
  const legalDocuments = [
    {
      name: "Terms of Service",
      description: "Our terms and conditions for using Zion Tech Group services",
      icon: FileText,
      url: "/terms",
      category: "Service Terms"
    },
    {
      name: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      icon: Shield,
      url: "/privacy",
      category: "Data Protection"
    },
    {
      name: "Cookie Policy",
      description: "Information about cookies and tracking technologies",
      icon: Eye,
      url: "/cookies",
      category: "Data Protection"
    },
    {
      name: "Acceptable Use Policy",
      description: "Guidelines for acceptable use of our services",
      icon: Users,
      url: "/acceptable-use",
      category: "Service Terms"
    },
    {
      name: "Data Processing Agreement",
      description: "GDPR-compliant data processing terms for enterprise clients",
      icon: Database,
      url: "/data-processing-agreement",
      category: "Compliance"
    },
    {
      name: "Service Level Agreement",
      description: "Performance commitments and service guarantees",
      icon: Server,
      url: "/service-level-agreement",
      category: "Service Terms"
    }
  ];

  const complianceCertifications = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      status: "Certified",
      icon: Shield,
      validUntil: "2025-12-31"
    },
    {
      name: "ISO 27001",
      description: "Information security management system",
      status: "Certified",
      icon: Lock,
      validUntil: "2025-06-30"
    },
    {
      name: "GDPR Compliance",
      description: "European data protection regulation compliance",
      status: "Compliant",
      icon: Globe,
      validUntil: "Ongoing"
    },
    {
      name: "HIPAA Compliance",
      description: "Healthcare data protection standards",
      status: "Compliant",
      icon: Building2,
      validUntil: "Ongoing"
    },
    {
      name: "CCPA Compliance",
      description: "California consumer privacy compliance",
      status: "Compliant",
      icon: Users,
      validUntil: "Ongoing"
    },
    {
      name: "FedRAMP Ready",
      description: "Federal government security requirements",
      status: "In Progress",
      icon: ServerIcon,
      validUntil: "2025-Q3"
    }
  ];

  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "End-to-end encryption for data in transit and at rest",
      icon: LockIcon,
      details: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "Encrypted database connections",
        "Secure key management"
      ]
    },
    {
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access control",
      icon: Key,
      details: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO) integration",
        "Privileged access management"
      ]
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and threat detection",
      icon: ShieldIcon,
      details: [
        "Real-time threat detection",
        "Security information and event management",
        "Vulnerability scanning and testing",
        "Incident response procedures"
      ]
    },
    {
      title: "Compliance Framework",
      description: "Comprehensive compliance and audit capabilities",
      icon: Scale,
      details: [
        "Regular security audits",
        "Compliance reporting",
        "Third-party security assessments",
        "Continuous monitoring and improvement"
      ]
    }
  ];

  const contactInfo = {
    legalEmail: "legal@ziontechgroup.com",
    privacyEmail: "privacy@ziontechgroup.com",
    generalEmail: "info@ziontechgroup.com",
    phone: "+1 (302) 464-0950",
    address: "364 E Main St STE 1008, Middletown, DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      <Helmet>
        <title>Legal & Compliance - Zion Tech Group | Terms, Privacy & Security</title>
        <meta name="description" content="Access Zion Tech Group's legal documents, compliance certifications, security measures, and privacy policies." />
        <meta name="keywords" content="legal, compliance, privacy policy, terms of service, GDPR, SOC 2, security, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/legal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Legal &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Compliance</span>
            </h1>
            <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
              Transparency and trust are fundamental to our business. Access our legal documents, 
              compliance certifications, and security measures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#legal-documents" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Legal Documents
            </a>
            <a 
              href={`mailto:${contactInfo.legalEmail}`} 
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Legal Team
            </a>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section id="legal-documents" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Legal Documents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalDocuments.map((document, index) => (
              <div key={index} className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <document.icon className="w-6 h-6 text-zion-cyan" />
                  <span className="text-sm text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded-full">
                    {document.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{document.name}</h3>
                <p className="text-zion-slate-400 mb-4">{document.description}</p>
                <a 
                  href={document.url}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  Read Document
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Compliance & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCertifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-slate-800 to-zion-slate-700 rounded-xl p-6 border border-zion-purple/20">
                <div className="flex items-center justify-between mb-4">
                  <cert.icon className="w-8 h-8 text-zion-cyan" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'Certified' || cert.status === 'Compliant' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-zion-slate-300 text-sm mb-3">{cert.description}</p>
                <div className="text-xs text-zion-slate-400">
                  Valid until: {cert.validUntil}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Security & Data Protection</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-purple/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <measure.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{measure.title}</h3>
                    <p className="text-zion-slate-300">{measure.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {measure.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-400">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Data Protection Principles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Minimization</h3>
                <p className="text-zion-slate-300 text-sm">We only collect data that is necessary for providing our services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Security by Design</h3>
                <p className="text-zion-slate-300 text-sm">Security measures are built into every aspect of our platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                <p className="text-zion-slate-300 text-sm">Clear information about how we process and protect your data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">User Control</h3>
                <p className="text-zion-slate-300 text-sm">You have full control over your data and privacy settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Legal & Compliance Contact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal Inquiries</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.legalEmail}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.legalEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <a href={`tel:${contactInfo.phone}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Privacy Inquiries</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.privacyEmail}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.privacyEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-zion-slate-300 mb-4">
                For legal inquiries, compliance questions, or privacy concerns, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${contactInfo.legalEmail}?subject=Legal Inquiry`}
                  className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Legal Inquiry
                </a>
                <a 
                  href={`mailto:${contactInfo.privacyEmail}?subject=Privacy Inquiry`}
                  className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Legal;