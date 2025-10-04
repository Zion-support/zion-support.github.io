import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, AlertTriangle, Zap, TrendingUp } from 'lucide-react';

const CybersecurityAI: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that identify and neutralize threats in real-time with 99.9% accuracy.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance of your entire digital infrastructure with instant threat response capabilities.'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement comprehensive zero-trust architecture that verifies every access request and transaction.'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Intelligent automated responses that contain and eliminate threats within seconds of detection.'
    }
  ];

  const securityServices = [
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure with AI-powered intrusion detection and prevention systems.',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated blocking', 'Incident response']
    },
    {
      title: 'Endpoint Protection',
      description: 'Secure all devices and endpoints with advanced behavioral analysis and threat prevention.',
      features: ['Device monitoring', 'Malware detection', 'Behavioral analysis', 'Automatic quarantine']
    },
    {
      title: 'Data Protection',
      description: 'Safeguard sensitive data with encryption, access controls, and data loss prevention.',
      features: ['Data encryption', 'Access controls', 'DLP monitoring', 'Compliance reporting']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions for multi-cloud and hybrid environments.',
      features: ['Cloud monitoring', 'Config management', 'Identity management', 'Compliance automation']
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'ISO 27001',
    'HIPAA',
    'GDPR',
    'PCI DSS',
    'NIST Framework'
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Cybersecurity AI - Zion Tech Group | AI-Powered Security Solutions</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Achieve 99.9% threat detection accuracy with our advanced machine learning security systems." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Advanced Cybersecurity AI
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with next-generation AI-powered cybersecurity solutions that detect, 
                analyze, and neutralize threats with unprecedented accuracy and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Secure Your Business
                </Link>
                <Link 
                  to="/services"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Statistics */}
        <div className="py-16 bg-red-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">&lt;1s</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">Zero</div>
                <div className="text-gray-300">False Positives</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Security Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive protection powered by advanced artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                    <div className="bg-gradient-to-br from-red-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Security Services */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-300">
                End-to-end protection for every aspect of your digital infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="py-24 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Compliance & Certifications
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our security solutions meet the highest industry standards and regulatory requirements, 
                  ensuring your business stays compliant while maintaining robust protection.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-4 border border-red-500/20 text-center">
                      <span className="text-white font-semibold">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Security Guarantee</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">24/7 Security Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-300">Instant Threat Alerts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">Continuous Security Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Protect your business with our advanced AI-powered 
              cybersecurity solutions that adapt and evolve with emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Get Security Assessment
              </Link>
              <Link 
                to="/services"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityAI;