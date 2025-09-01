import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Brain, 
  Server, 
  Network, 
  Database,
  Users,
  Globe,
  BarChart3,
  ArrowRight,
  Star,
  Award,
  Clock,
  Target
} from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced AI-powered threat detection with real-time response capabilities',
      features: ['24/7 monitoring', 'Automated incident response', 'Threat intelligence feeds']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity verification and access control solutions',
      features: ['Multi-factor authentication', 'Single sign-on (SSO)', 'Privileged access management']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Continuous monitoring and analysis of security events across your infrastructure',
      features: ['SIEM integration', 'Behavioral analytics', 'Real-time alerts']
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Protect your network infrastructure with advanced security measures',
      features: ['Firewall management', 'Intrusion prevention', 'VPN solutions']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Safeguard sensitive data with encryption and access controls',
      features: ['Data encryption', 'Backup security', 'Compliance monitoring']
    },
    {
      icon: Brain,
      title: 'AI-Powered Security',
      description: 'Leverage artificial intelligence for proactive threat prevention',
      features: ['Machine learning', 'Predictive analytics', 'Automated threat hunting']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proactive Protection',
      description: 'Identify and neutralize threats before they impact your business'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and incident response'
    },
    {
      icon: Target,
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick incident response and recovery capabilities'
    }
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Government',
    'Education',
    'Technology',
    'Energy'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions powered by AI and advanced threat intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From threat detection to incident response, we provide end-to-end cybersecurity solutions to protect your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with cybersecurity experts who understand your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cybersecurity solutions are designed to meet the unique challenges of various industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Get in touch with our cybersecurity experts today for a comprehensive security assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Schedule Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;