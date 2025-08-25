import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Zap, Brain, Network, Database, AlertTriangle, CheckCircle, BarChart3, Users, Globe } from 'lucide-react';

export default function AdvancedCybersecuritySuite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      <SEOHead 
        title="Advanced Cybersecurity Suite - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including AI-powered threat detection, quantum-safe encryption, and advanced security analytics for enterprise protection."
        keywords="cybersecurity, threat detection, quantum encryption, security analytics, enterprise security, AI security, network protection"
        type="website"
        url="https://ziontechgroup.com/advanced-cybersecurity-suite"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
            Advanced Cybersecurity Suite
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Next-generation cybersecurity powered by AI, quantum encryption, and advanced threat intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/services/cybersecurity"
              className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              View Security Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Comprehensive Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-6">
                <Brain className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Threat Detection</h3>
              <p className="text-gray-300">
                Machine learning algorithms that continuously learn and adapt to identify emerging threats in real-time.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-6">
                <Lock className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quantum-Safe Encryption</h3>
              <p className="text-gray-300">
                Future-proof encryption algorithms that protect against quantum computing threats.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-6">
                <Eye className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Advanced Monitoring</h3>
              <p className="text-gray-300">
                24/7 security monitoring with real-time alerts and automated response capabilities.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-6">
                <Network className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Network Security</h3>
              <p className="text-gray-300">
                Comprehensive network protection including firewalls, intrusion detection, and traffic analysis.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-6">
                <Database className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Data Protection</h3>
              <p className="text-gray-300">
                End-to-end data encryption, backup security, and compliance with data protection regulations.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Security Analytics</h3>
              <p className="text-gray-300">
                Advanced analytics and reporting to identify security trends and optimize protection strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Multi-Layer Security Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Perimeter Security</h3>
              <p className="text-gray-300">
                Firewalls, DDoS protection, and network segmentation to secure your digital boundaries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Access Control</h3>
              <p className="text-gray-300">
                Multi-factor authentication, role-based access control, and privileged access management.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Data Security</h3>
              <p className="text-gray-300">
                Encryption at rest and in transit, data loss prevention, and secure backup solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Monitoring & Response</h3>
              <p className="text-gray-300">
                Real-time threat detection, automated incident response, and security operations center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Industry Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">SOC 2 Type II</h3>
              <p className="text-gray-300">
                Service Organization Control 2 compliance for security, availability, and confidentiality.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">ISO 27001</h3>
              <p className="text-gray-300">
                International standard for information security management systems.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mx-auto mb-6">
                <Lock className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">GDPR Compliance</h3>
              <p className="text-gray-300">
                European data protection regulation compliance for data privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Secure Your Digital Assets Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our advanced cybersecurity suite provides enterprise-grade protection against evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/services/cybersecurity"
              className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              View Security Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}