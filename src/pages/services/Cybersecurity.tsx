<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  Zap,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  BarChart3,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Database,
  Eye,
  Key,
  Lock,
  Monitor,
  Network,
  Play,
  Server,
  Shield,
  Target,
  Users
import { Link } from 'react-router-dom';
export default function CybersecurityServices() {
  const cyberServices = [
    {
      name: "Security Assessment & Auditing",
      description: "Comprehensive security evaluation and compliance auditing",
      icon: Eye,
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits and compliance",
        "Risk analysis and reporting"
      ],
      price: "From $3,500",
      duration: "2-6 weeks"
    },
    {
      name: "Threat Detection & Response",
      description: "Advanced threat monitoring and incident response",
      icon: AlertTriangle,
      features: [
        "24/7 security monitoring",
        "Threat intelligence",
        "Incident response planning",
        "Forensic analysis"
      ],
      price: "From $5,000/month",
      duration: "Ongoing"
    },
    {
      name: "Identity & Access Management",
      description: "Secure user authentication and authorization systems",
      icon: Key,
      features: [
        "Single sign-on (SSO)",
        "Multi-factor authentication",
        "Role-based access control",
        "Privileged access management"
      ],
      price: "From $4,200",
      duration: "4-8 weeks"
    },
    {
      name: "Data Protection & Encryption",
      description: "Comprehensive data security and encryption solutions",
      icon: Lock,
      features: [
        "Data encryption at rest and in transit",
        "Data loss prevention",;
        "Backup and recovery",;
        "Compliance frameworks (GDPR, HIPAA, SOC2)";
      ],;
      price: "From $6,000",;
      duration: "4-10 weeks";
    };
  ];
  const securityTechnologies = [;
    { name: "SIEM", description: "Security Information and Event Management", icon: Monitor },;
    { name: "EDR", description: "Endpoint Detection and Response", icon: Server },;
    { name: "NGFW", description: "Next-Generation Firewall", icon: Network },;
    { name: "WAF", description: "Web Application Firewall", icon: Shield },;
    { name: "DLP", description: "Data Loss Prevention", icon: Database },;
    { name: "IAM", description: "Identity and Access Management", icon: Key };
  ];
  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance",
      icon: Shield,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      icon: Lock,
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      icon: Eye,
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      icon: Users,
      color: "from-red-500 to-pink-600"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      icon: CreditCard,
      color: "from-orange-500 to-amber-600"
    },
    {
    };
      name: "NIST",;
      description: "National Institute of Standards and Technology",;
      icon: Award,;
      color: "from-cyan-500 to-blue-600";
    };
  ];
=======
import React from 'react.ts';
import { SEO              } from '../../components/SEO';
import { Shield, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Lock, 
  Clock,
  BarChart3,
  AlertTriangle,
  Eye
             } from 'lucide-react.ts';

export default function Cybersecurity(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO 
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive security solutions that protect your digital assets and ensure business continuity. Advanced AI-powered threat detection and zero trust security."
      />
      
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions. From threat detection
              to compliance management, we secure your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
=======
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive security solutions that protect your digital assets and ensure business continuity. Safeguard your organization with our advanced cybersecurity services.
              </p>
            </div>
            <div className="mb-16">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
              >
                Get Started with Cybersecurity
              </a>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cyberServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-slate-400 text-sm">{service.duration}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200"
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Security Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We leverage cutting-edge security tools and technologies to protect your infrastructure
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {securityTechnologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Compliance Frameworks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance solutions
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with our advanced cybersecurity services
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                <div className={`p-3 bg-gradient-to-r ${framework.color} rounded-lg w-12 h-12 mb-4 flex items-center justify-center`}>
                  <framework.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{framework.name}</h3>
                <p className="text-slate-300 text-sm">{framework.description}</p>
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-400" />
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Threat Detection</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence that identifies and responds to threats in real-time
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Zero Trust Security</h3>
              <p className="text-gray-300">
                Implement zero trust architecture to verify every user and device access attempt
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Protection & Encryption</h3>
              <p className="text-gray-300">
                Comprehensive data security with advanced encryption and access controls
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Incident Response</h3>
              <p className="text-gray-300">
                Rapid response and recovery services to minimize damage from security incidents
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Analytics</h3>
              <p className="text-gray-300">
                Advanced analytics and reporting to monitor security posture and compliance
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Training</h3>
              <p className="text-gray-300">
                Comprehensive security awareness training for your organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our cybersecurity solutions can protect your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                Schedule Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Explore All Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Start protecting your digital assets with our comprehensive cybersecurity services
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
          >
            Get Started with Cybersecurity
          </a>
        </div>
      </section>
    </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  );
}