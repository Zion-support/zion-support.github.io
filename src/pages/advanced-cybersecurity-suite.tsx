import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Globe,
  Zap,
  Target,
  Award,
  ArrowRight,
  Shield as Security,
  Monitor,
  Smartphone,
  Server,
  Database,
  Network,
  Code,
  Brain,
  Cpu,
  Building,
  CheckCircle,
  Cloud
} from 'lucide-react';

export default function AdvancedCybersecuritySuite() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention across all attack vectors',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Comprehensive identity and access management with continuous verification',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: '24/7 security operations center with AI-driven incident response',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI Security Intelligence',
      description: 'Machine learning algorithms that adapt to evolving cyber threats',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const securityServices = [
    {
      title: 'Network Security',
      description: 'Advanced firewall protection, intrusion detection, and network segmentation',
      icon: Network,
      items: ['Next-gen firewalls', 'Intrusion Prevention Systems', 'Network segmentation', 'DDoS protection']
    },
    {
      title: 'Endpoint Security',
      description: 'Comprehensive protection for all devices and endpoints',
      icon: Monitor,
      items: ['Antivirus & antimalware', 'Endpoint detection & response', 'Device control', 'Data loss prevention']
    },
    {
      title: 'Cloud Security',
      description: 'Multi-cloud security with compliance and governance',
      icon: Cloud,
      items: ['Cloud access security broker', 'Container security', 'API security', 'Cloud compliance']
    },
    {
      title: 'Data Protection',
      description: 'Encryption, backup, and disaster recovery solutions',
      icon: Database,
      items: ['Data encryption', 'Backup & recovery', 'Data classification', 'Privacy compliance']
    }
  ];

  const threatIntelligence = [
    { category: 'Malware Analysis', coverage: '99.9%', response: '< 1 minute' },
    { category: 'Phishing Detection', coverage: '99.8%', response: '< 30 seconds' },
    { category: 'Ransomware Protection', coverage: '99.9%', response: '< 2 minutes' },
    { category: 'Zero-day Threats', coverage: '95%', response: '< 5 minutes' },
    { category: 'APT Detection', coverage: '98%', response: '< 10 minutes' }
  ];

  const complianceFrameworks = [
    { framework: 'SOC 2 Type II', status: 'Certified', icon: CheckCircle },
    { framework: 'ISO 27001', status: 'Certified', icon: CheckCircle },
    { framework: 'NIST Cybersecurity', status: 'Compliant', icon: CheckCircle },
    { framework: 'GDPR', status: 'Compliant', icon: CheckCircle },
    { framework: 'HIPAA', status: 'Compliant', icon: CheckCircle },
    { framework: 'PCI DSS', status: 'Compliant', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-zion-purple rounded-2xl flex items-center justify-center">
              <Security className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced Cybersecurity Suite
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Enterprise-grade cybersecurity solutions powered by AI and machine learning. 
            Protect your organization from advanced threats with our comprehensive security suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-zion-purple hover:from-red-600 hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Security Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Next-Generation Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity suite combines cutting-edge technology with proven security practices 
              to deliver unmatched protection for your digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              End-to-end cybersecurity solutions covering all aspects of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-zion-purple rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="text-zion-slate-light">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI-Powered Threat Intelligence
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real-time threat detection and response with industry-leading coverage and response times
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {threatIntelligence.map((threat, index) => (
              <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-red-500 mb-2">{threat.coverage}</div>
                <div className="text-lg font-semibold text-white mb-2">{threat.category}</div>
                <div className="text-sm text-zion-slate-light">Response: {threat.response}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet regulatory requirements and industry standards with our certified security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => {
              const Icon = framework.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{framework.framework}</div>
                  <div className="text-green-500 font-medium">{framework.status}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-zion-purple/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Secure Your Digital Future Today
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Don't wait for a security breach. Protect your organization with the most advanced 
            cybersecurity solutions available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-zion-purple hover:from-red-600 hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Security Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}