import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Cpu, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Code,
  Cloud,
  Settings,
  Monitor,
  RefreshCw,
  Heart,
  Star,
  Brain,
  Bot,
  Database as DatabaseIcon,
  ShieldCheck,
  Globe2,
  BarChart,
  Zap
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const Cybersecurity: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description: "Advanced AI-powered threat detection systems that identify and neutralize cyber threats in real-time."
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Enterprise-grade encryption for data at rest and in transit, ensuring maximum security."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring with automated incident response and threat hunting."
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and penetration testing to identify and fix security gaps."
    }
  ];

  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do.",
      icon: Target,
      benefits: ["Vulnerability Discovery", "Security Assessment", "Compliance Testing", "Risk Mitigation"]
    },
    {
      title: "Security Audits",
      description: "Thorough security reviews of your infrastructure, applications, and processes.",
      icon: Monitor,
      benefits: ["Security Review", "Compliance Check", "Policy Assessment", "Recommendations"]
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery services when security incidents occur.",
      icon: AlertTriangle,
      benefits: ["24/7 Response", "Forensic Analysis", "Recovery Support", "Lessons Learned"]
    },
    {
      title: "Security Training",
      description: "Employee security awareness training to prevent social engineering attacks.",
      icon: Users,
      benefits: ["Awareness Training", "Phishing Simulations", "Best Practices", "Compliance"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Protect Your Assets",
      description: "Safeguard your data, systems, and reputation from cyber threats"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Meet industry standards and regulatory requirements with ease"
    },
    {
      icon: Eye,
      title: "Peace of Mind",
      description: "24/7 security monitoring gives you confidence in your digital safety"
    },
    {
      icon: Target,
      title: "Cost Effective",
      description: "Prevent costly data breaches and security incidents"
    }
  ];

  const technologies = [
    "AI-Powered Threat Detection",
    "Machine Learning Security",
    "Behavioral Analytics",
    "Zero Trust Architecture",
    "Multi-Factor Authentication",
    "Endpoint Detection & Response",
    "Security Information & Event Management",
    "Cloud Security Posture Management"
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for data security",
      requirements: ["Security", "Availability", "Processing Integrity", "Confidentiality", "Privacy"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      requirements: ["Risk Assessment", "Security Controls", "Continuous Improvement", "Documentation"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      requirements: ["Data Protection", "Privacy Rights", "Consent Management", "Breach Notification"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white">
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Protect your business with comprehensive cybersecurity solutions. From threat detection to compliance, we provide enterprise-grade security services."
        keywords="cybersecurity, threat detection, data protection, security audits, penetration testing, incident response, compliance"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Secure Your Digital Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive cybersecurity solutions that protect your business from evolving threats and ensure compliance with industry standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Core Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity solutions are built with cutting-edge technology to provide comprehensive protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your business from all angles
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance-focused security solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-red-400">{framework.name}</h3>
                <p className="text-gray-300 mb-6">{framework.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Requirements:</div>
                  {framework.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of comprehensive cybersecurity protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge security technologies that ensure comprehensive protection
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Cpu className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Protect your digital assets with enterprise-grade cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
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