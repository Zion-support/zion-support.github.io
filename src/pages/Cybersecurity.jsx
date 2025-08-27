import React from 'react';
import { SEO } from "../components/SEOHead";
import { Shield, Lock, Eye, Users, Database, Network, Zap, Target, CheckCircle, BarChart3 } from 'lucide-react';
const Cybersecurity = () => {
    const securityServices = [
        {
            icon: Shield,
            title: "Advanced Threat Detection",
            description: "AI-powered threat detection and prevention systems",
            features: ["Real-time Monitoring", "Behavioral Analysis", "Machine Learning", "Automated Response"],
            path: "/ai-powered-enterprise-security"
        },
        {
            icon: Lock,
            title: "SOC2 Compliance Automation",
            description: "Automated compliance management and reporting",
            features: ["Automated Auditing", "Real-time Monitoring", "Compliance Reporting", "Risk Assessment"],
            path: "/soc2-compliance-automation"
        },
        {
            icon: Eye,
            title: "Zero Trust Architecture",
            description: "Comprehensive zero trust security implementation",
            features: ["Identity Verification", "Continuous Monitoring", "Least Privilege Access", "Micro-segmentation"],
            path: "/zero-trust-network-architecture"
        },
        {
            icon: Network,
            title: "Network Security",
            description: "Advanced network protection and monitoring",
            features: ["Firewall Management", "Intrusion Detection", "Traffic Analysis", "Vulnerability Scanning"],
            path: "/network-security"
        },
        {
            icon: Database,
            title: "Data Protection",
            description: "Comprehensive data security and privacy solutions",
            features: ["Encryption", "Access Control", "Data Loss Prevention", "Privacy Compliance"],
            path: "/data-protection"
        },
        {
            icon: Users,
            title: "Identity & Access Management",
            description: "Secure identity management and access control",
            features: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Identity Governance"],
            path: "/identity-access-management"
        }
    ];
    const securityFeatures = [
        {
            icon: CheckCircle,
            title: "24/7 Monitoring",
            description: "Continuous security monitoring and threat detection"
        },
        {
            icon: Zap,
            title: "Real-time Response",
            description: "Instant automated response to security incidents"
        },
        {
            icon: Target,
            title: "Proactive Defense",
            description: "Predictive security using AI and machine learning"
        },
        {
            icon: BarChart3,
            title: "Comprehensive Reporting",
            description: "Detailed security analytics and compliance reporting"
        }
    ];
    return (<div className="min-h-screen bg-background pt-20">
      <SEOHead title="Cybersecurity Solutions - Zion Tech Group" description="Comprehensive cybersecurity solutions including threat detection, compliance automation, zero trust architecture, and advanced security services from Zion Tech Group." keywords="cybersecurity, threat detection, SOC2 compliance, zero trust, network security, data protection" canonical="https://ziontechgroup.com/cybersecurity"/>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity for the
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Digital Age</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with cutting-edge cybersecurity solutions. 
              From threat detection to compliance automation, we secure your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Security Assessment
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cybersecurity portfolio covers all aspects of digital security, providing comprehensive 
              protection for your organization's most valuable assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service) => (<div key={service.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (<li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>))}
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience enterprise-grade security with our proven solutions and expert implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature) => (<div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Security Statistics */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-red-100">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-red-100">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">Compliance Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15min</div>
              <div className="text-red-100">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Compliance & Regulatory Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Stay compliant with industry standards and regulations through our automated compliance 
                management solutions. From SOC2 to GDPR, we ensure your organization meets all requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">SOC2 Type II Compliance</h3>
                    <p className="text-gray-600">Automated compliance monitoring and reporting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GDPR & Privacy</h3>
                    <p className="text-gray-600">Data protection and privacy compliance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Standards</h3>
                    <p className="text-gray-600">ISO 27001, NIST, and other frameworks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Security Certifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>SOC2 Type II</span>
                  <span className="font-bold">✓ Certified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ISO 27001</span>
                  <span className="font-bold">✓ Certified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>NIST Framework</span>
                  <span className="font-bold">✓ Compliant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>GDPR</span>
                  <span className="font-bold">✓ Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Protect your organization with our comprehensive 
            cybersecurity solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Security Assessment
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Download Security Guide
            </button>
          </div>
        </div>
      </section>
    </div>);
};
export default Cybersecurity;
