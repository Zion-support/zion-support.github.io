import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileText, Award, Users, Globe, Server } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      id: 1,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
      icon: Lock,
      status: "Active"
    },
    {
      id: 2,
      title: "Multi-Factor Authentication",
      description: "Enhanced security with SMS, email, and authenticator app verification options.",
      icon: Shield,
      status: "Active"
    },
    {
      id: 3,
      title: "Zero-Knowledge Architecture",
      description: "We cannot access your encrypted data, ensuring complete privacy and control.",
      icon: Eye,
      status: "Active"
    },
    {
      id: 4,
      title: "Regular Security Audits",
      description: "Third-party security assessments and penetration testing conducted quarterly.",
      icon: CheckCircle,
      status: "Active"
    },
    {
      id: 5,
      title: "SOC 2 Type II Compliance",
      description: "Certified compliance with industry security and privacy standards.",
      icon: Award,
      status: "Active"
    },
    {
      id: 6,
      title: "24/7 Security Monitoring",
      description: "Continuous threat detection and response with dedicated security operations center.",
      icon: Server,
      status: "Active"
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality.",
      status: "Certified",
      lastAudit: "2024-12-01",
      nextAudit: "2025-06-01"
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification.",
      status: "Certified",
      lastAudit: "2024-11-15",
      nextAudit: "2025-11-15"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection.",
      status: "Compliant",
      lastAudit: "2024-10-01",
      nextAudit: "Ongoing"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance for healthcare data.",
      status: "Compliant",
      lastAudit: "2024-09-01",
      nextAudit: "Ongoing"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for payment processing.",
      status: "Level 1",
      lastAudit: "2024-08-01",
      nextAudit: "2025-08-01"
    }
  ];

  const securityIncidents = [
    {
      year: 2024,
      incidents: 0,
      severity: "None",
      status: "Clean"
    },
    {
      year: 2023,
      incidents: 0,
      severity: "None",
      status: "Clean"
    },
    {
      year: 2022,
      incidents: 0,
      severity: "None",
      status: "Clean"
    }
  ];

  const privacyFeatures = [
    "Data minimization and purpose limitation",
    "Right to access and portability",
    "Right to erasure and rectification",
    "Transparent data processing",
    "Privacy by design principles",
    "Regular privacy impact assessments",
    "Data protection officer oversight",
    "Incident response procedures"
  ];

  return (
    <>
      <SEO 
        title="Security & Compliance - Zion Tech Group Trust & Safety" 
        description="Learn about our comprehensive security measures, compliance certifications, and commitment to protecting your data and privacy." 
        canonical="/security" 
        url="https://ziontechgroup.com/security"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security & Compliance
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Your trust is our priority. We implement industry-leading security measures 
              and maintain rigorous compliance standards to protect your data.
            </p>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.99%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">0</div>
              <div className="text-zion-slate-light text-sm">Security Breaches</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">5</div>
              <div className="text-zion-slate-light text-sm">Compliance Certifications</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Security Monitoring</div>
            </div>
          </div>

          {/* Security Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature) => (
                <div key={feature.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {feature.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Compliance & Certifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {standard.name}
                    </h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {standard.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Last Audit:</span>
                      <div className="text-white">{standard.lastAudit}</div>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Next Audit:</span>
                      <div className="text-white">{standard.nextAudit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Track Record */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Security Track Record
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {securityIncidents.map((record, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-zion-cyan mb-2">
                      {record.incidents}
                    </div>
                    <div className="text-zion-slate-light text-sm mb-2">
                      Security Incidents in {record.year}
                    </div>
                    <div className="text-white font-medium">
                      {record.status}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-zion-slate-light text-lg">
                  Zero security breaches since company inception
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Privacy & Data Protection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Privacy Features
                </h3>
                <ul className="space-y-3">
                  {privacyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Data Protection
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-slate-light text-sm">
                    <Globe className="w-4 h-4 text-zion-cyan" />
                    <span>Global data centers with local compliance</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light text-sm">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span>Role-based access control</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light text-sm">
                    <FileText className="w-4 h-4 text-zion-cyan" />
                    <span>Comprehensive audit logging</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light text-sm">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan" />
                    <span>Automated threat detection</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Trust & Transparency
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                We believe in complete transparency about our security practices. 
                Download our security whitepaper or schedule a security review with our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Download Security Whitepaper
                </button>
                <Link to="/contact" className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  Schedule Security Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}