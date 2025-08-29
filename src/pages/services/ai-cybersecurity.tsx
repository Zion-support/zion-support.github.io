import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  BarChart3,
  Database,
  Cloud,
  Lock,
  Globe,
  Cpu,
  Server,
  Smartphone,
  Monitor,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Eye,
  AlertTriangle,
  Key,
  Network,
  Bug,
  Fingerprint
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICybersecurity() {
  const features = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and respond to threats in real-time',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Behavioral Analysis',
      description: 'Monitor user and system behavior to detect anomalies and potential security breaches',
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Automated Response',
      description: 'Instant threat response and mitigation without human intervention',
      icon: Zap,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Predictive Security',
      description: 'Forecast potential threats before they materialize using AI analytics',
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Zero-Day Protection',
      description: 'Protect against unknown threats using AI pattern recognition',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance checking and reporting for regulatory requirements',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const securityServices = [
    {
      title: 'Network Security',
      description: 'AI-powered firewall and intrusion detection systems',
      icon: Network,
      features: ['Real-time monitoring', 'Threat blocking', 'Traffic analysis', 'DDoS protection']
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced protection for all devices and endpoints',
      icon: Smartphone,
      features: ['Malware detection', 'Device control', 'Data encryption', 'Remote wiping']
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure user authentication and authorization',
      icon: Fingerprint,
      features: ['Multi-factor authentication', 'Role-based access', 'Single sign-on', 'Privilege management']
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data security and privacy solutions',
      icon: Lock,
      features: ['Encryption at rest', 'Data loss prevention', 'Backup security', 'Compliance tools']
    }
  ];

  const benefits = [
    '99.9% threat detection accuracy',
    'Real-time threat response in milliseconds',
    'Reduced false positives by 80%',
    '24/7 automated security monitoring',
    'Compliance with major security standards',
    'Scalable protection for any organization size'
  ];

  const useCases = [
    {
      title: 'Financial Institutions',
      description: 'Protect sensitive financial data and prevent fraud with AI-powered security',
      icon: Building,
      benefits: ['Fraud detection', 'Compliance automation', 'Real-time monitoring', 'Risk assessment']
    },
    {
      title: 'Healthcare Organizations',
      description: 'Secure patient data and maintain HIPAA compliance with intelligent security',
      icon: Heart,
      benefits: ['HIPAA compliance', 'Patient data protection', 'Access control', 'Audit trails']
    },
    {
      title: 'Government Agencies',
      description: 'Protect national security with advanced AI cybersecurity solutions',
      icon: Shield,
      benefits: ['Classified data protection', 'Threat intelligence', 'Incident response', 'Compliance']
    },
    {
      title: 'E-commerce Companies',
      description: 'Secure customer transactions and protect against cyber attacks',
      icon: ShoppingCart,
      benefits: ['Payment security', 'Customer data protection', 'Fraud prevention', 'Business continuity']
    }
  ];

  const threats = [
    'Ransomware attacks',
    'Phishing campaigns',
    'DDoS attacks',
    'Data breaches',
    'Insider threats',
    'Advanced persistent threats (APTs)',
    'Zero-day exploits',
    'Social engineering'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions that protect your organization from evolving threats. Real-time detection, automated response, and predictive security."
        keywords="AI cybersecurity, threat detection, security automation, cyber protection, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI Security Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with next-generation AI-powered cybersecurity. 
              Our platform provides real-time threat detection, automated response, 
              and predictive security to stay ahead of evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Get Protected
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                Security Assessment
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-xl">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">False Positive Reduction</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">Milliseconds</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge technology with 
              security expertise to deliver unparalleled protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From network security to data protection, our AI platform covers 
              every aspect of cybersecurity your organization needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-400/30">
                    <service.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered security 
              that revolutionizes how you protect your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-xl hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform serves organizations across all industries, 
              providing tailored security solutions for unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-400/30">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Threats We Protect Against
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform identifies and neutralizes a wide range of cyber threats, 
              keeping your organization safe in an ever-evolving threat landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-xl hover:border-red-400/40 transition-all duration-300 text-center"
              >
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <span className="text-gray-300 font-medium">{threat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the cybersecurity revolution with our AI platform. 
              Protect your organization with intelligence-driven security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Get Protected Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-green-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon components
const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);