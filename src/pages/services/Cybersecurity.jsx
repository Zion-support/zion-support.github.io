import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Target, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Database,
  Cpu,
  Network,
  FileText,
  MessageCircle,
  Server,
  Smartphone,
  Cloud
} from 'lucide-react';

export default function Cybersecurity() {
  const cybersecurityServices = [
    {
      name: 'Threat Detection & Response',
      description: 'Advanced threat detection and automated incident response platform',
      href: '/pages/services/IncidentResponsePlatform',
      icon: Eye,
      features: ['Real-time threat detection', 'Automated response', '24/7 monitoring', 'Threat intelligence'],
      price: '$399/month',
      category: 'Threat Management'
    },
    {
      name: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and risk assessment services',
      href: '/pages/AIAutonomousVulnerabilityAssessment',
      icon: Target,
      features: ['Automated scanning', 'Risk scoring', 'Remediation guidance', 'Compliance reporting'],
      price: '$299/month',
      category: 'Risk Assessment'
    },
    {
      name: 'Penetration Testing',
      description: 'Ethical hacking and security testing services',
      href: '/pages/AIAutonomousPenetrationTesting',
      icon: Lock,
      features: ['Web application testing', 'Network testing', 'Social engineering', 'Detailed reports'],
      price: '$2,500/project',
      category: 'Security Testing'
    },
    {
      name: 'Security Compliance',
      description: 'SOC2, ISO 27001, and regulatory compliance automation',
      href: '/pages/soc2-compliance-automation',
      icon: CheckCircle,
      features: ['Automated compliance', 'Policy management', 'Audit preparation', 'Continuous monitoring'],
      price: '$599/month',
      category: 'Compliance'
    }
  ];

  const specializedSecurity = [
    {
      name: 'API Security',
      description: 'Comprehensive API security and protection solutions',
      href: '/pages/AIAutonomousAPISecurity',
      icon: Database,
      features: ['API authentication', 'Rate limiting', 'Threat protection', 'Monitoring'],
      price: '$199/month',
      category: 'API Security'
    },
    {
      name: 'Container Security',
      description: 'Security for Docker containers and Kubernetes environments',
      href: '/pages/AIAutonomousContainerSecurity',
      icon: Cpu,
      features: ['Image scanning', 'Runtime protection', 'Policy enforcement', 'Vulnerability management'],
      price: '$249/month',
      category: 'Container Security'
    },
    {
      name: 'Mobile Security',
      description: 'Mobile device and application security solutions',
      href: '/pages/AIAutonomousMobileSecurity',
      icon: Smartphone,
      features: ['App security', 'Device management', 'Data protection', 'Compliance'],
      price: '$179/month',
      category: 'Mobile Security'
    },
    {
      name: 'Network Security',
      description: 'Advanced network security and monitoring',
      href: '/pages/AIAutonomousNetworkSecurity',
      icon: Network,
      features: ['Firewall management', 'Intrusion detection', 'Traffic analysis', 'Threat prevention'],
      price: '$349/month',
      category: 'Network Security'
    }
  ];

  const benefits = [
    {
      title: 'AI-Powered Security',
      description: 'Leverage AI for advanced threat detection and response',
      icon: Shield
    },
    {
      title: '24/7 Protection',
      description: 'Round-the-clock security monitoring and response',
      icon: Clock
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      icon: CheckCircle
    },
    {
      title: 'Expert Support',
      description: 'Dedicated security experts at your service',
      icon: Users
    }
  ];

  return (
    <>
      <SEO 
        title="Cybersecurity Services - Threat Detection, Compliance & Security Testing | Zion Tech Group" 
        description="Comprehensive cybersecurity services including threat detection, vulnerability assessment, penetration testing, compliance automation, and specialized security solutions. Protect your business with enterprise-grade security."
        canonical="/services/cybersecurity"
        url="https://ziontechgroup.com/services/cybersecurity"
      />

      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Protect your business with enterprise-grade security solutions
            </p>
            <p className="text-lg text-white/80 mb-8">
              Our comprehensive cybersecurity services combine AI-powered threat detection, automated compliance, and expert security testing to protect your business from evolving cyber threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Cybersecurity Services */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Core Cybersecurity Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cybersecurityServices.map((service, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Security Services */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Specialized Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedSecurity.map((service, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions designed to detect, prevent, and respond to threats in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Schedule Security Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}