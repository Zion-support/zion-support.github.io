import React from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Check, Shield, Lock, Eye, AlertTriangle, Users, Database, Globe } from 'lucide-react';

export default function Cybersecurity() {
  const securityServices = [
    {
      icon: Shield,
      title: 'Security Assessment & Testing',
      description: 'Comprehensive security evaluations to identify vulnerabilities and risks.',
      features: [
        'Penetration testing',
        'Vulnerability assessments',
        'Security architecture reviews',
        'Compliance audits'
      ]
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and authorization systems.',
      features: [
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'Role-based access control',
        'Privileged access management'
      ]
    },
    {
      icon: Eye,
      title: 'Security Monitoring & Response',
      description: '24/7 threat detection and incident response services.',
      features: [
        'Security information and event management',
        'Threat intelligence',
        'Incident response',
        'Forensic analysis'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and regulatory compliance.',
      features: [
        'Risk assessments',
        'Compliance frameworks (SOC2, ISO27001)',
        'Policy development',
        'Security training programs'
      ]
    },
    {
      icon: Database,
      title: 'Data Protection & Privacy',
      description: 'Safeguarding sensitive data and ensuring privacy compliance.',
      features: [
        'Data encryption',
        'Data loss prevention',
        'Privacy impact assessments',
        'GDPR compliance'
      ]
    },
    {
      icon: Globe,
      title: 'Network & Infrastructure Security',
      description: 'Securing network infrastructure and cloud environments.',
      features: [
        'Firewall management',
        'Intrusion detection systems',
        'Cloud security',
        'Secure remote access'
      ]
    }
  ];

  const complianceFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST Cybersecurity Framework',
    'CIS Controls',
    'FedRAMP'
  ];

  const securityTechnologies = [
    'CrowdStrike & SentinelOne',
    'Palo Alto Networks',
    'Cisco Security',
    'Microsoft Defender',
    'Splunk & QRadar',
    'Okta & Azure AD',
    'Qualys & Rapid7',
    'Proofpoint & Mimecast'
  ];

  const benefits = [
    'Protection against cyber threats and attacks',
    'Compliance with industry regulations',
    'Reduced security risks and vulnerabilities',
    'Enhanced customer trust and confidence',
    'Cost savings through risk mitigation',
    '24/7 security monitoring and support'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity Services - Zion Tech Group Security & Compliance Solutions" 
        description="Comprehensive cybersecurity services including threat detection, compliance management, and data protection to secure your business."
        keywords="cybersecurity, security services, threat detection, compliance, data protection, SOC2, ISO27001"
        canonical="https://ziontechgroup.com/services/cybersecurity"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Cybersecurity Services
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            Protect your business with enterprise-grade cybersecurity solutions. 
            From threat detection to compliance management, we keep you secure.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business 
              from evolving threats and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Cybersecurity Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our security experts combine deep technical knowledge with industry best practices 
                to deliver robust protection for your business assets and data.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Security Assessment</h3>
              <p className="text-gray-600 mb-6">
                Get a comprehensive evaluation of your current security posture and 
                receive actionable recommendations for improvement.
              </p>
              <Link
                to="/contact"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help businesses achieve and maintain compliance with major industry 
              standards and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <div key={framework} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-red-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{framework}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading security vendors to provide best-in-class 
              protection for your business environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {securityTechnologies.map((tech, index) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center hover:bg-red-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing and maintaining robust cybersecurity 
              measures for your business.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assess</h3>
                <p className="text-gray-600">
                  Evaluate current security posture and identify vulnerabilities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan</h3>
                <p className="text-gray-600">
                  Develop comprehensive security strategy and implementation plan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implement</h3>
                <p className="text-gray-600">
                  Deploy security solutions and establish monitoring systems
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor</h3>
                <p className="text-gray-600">
                  Continuous monitoring, updates, and incident response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Let our cybersecurity experts help you 
            build a robust defense against evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Protected Today
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}