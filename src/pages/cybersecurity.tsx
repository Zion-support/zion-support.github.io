import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Users,
  Database,
  Network,
  Smartphone,
  Server,
  Cpu,
  BarChart3,
  TrendingUp,
  Activity,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Globe,
  Building,
  FileText,
  Monitor,
  AlertCircle,
  ShieldCheck,
  LockKeyhole,
  Cloud
} from 'lucide-react';

export default function Cybersecurity() {
  const services = [
    {
      title: "Zero Trust Security",
      description: "Implement comprehensive zero-trust architecture for enhanced network security.",
      icon: Shield,
      features: ["Identity verification", "Access control", "Network segmentation", "Continuous monitoring"]
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI algorithms to detect and respond to security threats in real-time.",
      icon: Eye,
      features: ["Behavioral analysis", "Anomaly detection", "Predictive analytics", "Automated response"]
    },
    {
      title: "Endpoint Security",
      description: "Protect all devices and endpoints with comprehensive security solutions.",
      icon: Smartphone,
      features: ["Device encryption", "Malware protection", "Data loss prevention", "Remote management"]
    },
    {
      title: "Cloud Security",
      description: "Secure cloud environments with enterprise-grade security controls.",
      icon: Cloud,
      features: ["Cloud access security", "Data encryption", "Compliance monitoring", "Threat intelligence"]
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring and rapid incident response capabilities.",
      icon: AlertTriangle,
      features: ["Real-time monitoring", "Rapid response", "Forensic analysis", "Recovery planning"]
    },
    {
      title: "Compliance & Governance",
      description: "Ensure regulatory compliance with comprehensive security frameworks.",
      icon: FileText,
      features: ["GDPR compliance", "SOC 2 certification", "ISO 27001", "Regular audits"]
    }
  ];

  const solutions = [
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions for large organizations.",
      icon: Building,
      features: ["Advanced threat protection", "Security operations center", "Risk management", "Employee training"]
    },
    {
      title: "Small Business Security",
      description: "Affordable security solutions designed for growing businesses.",
      icon: Users,
      features: ["Essential protection", "Easy management", "Cost-effective", "24/7 support"]
    },
    {
      title: "Healthcare Security",
      description: "HIPAA-compliant security solutions for healthcare organizations.",
      icon: ShieldCheck,
      features: ["Patient data protection", "HIPAA compliance", "Secure communications", "Audit trails"]
    },
    {
      title: "Financial Security",
      description: "Bank-grade security for financial institutions and fintech companies.",
      icon: LockKeyhole,
      features: ["Fraud detection", "Transaction monitoring", "Regulatory compliance", "Secure APIs"]
    }
  ];

  const benefits = [
    {
      title: "Proactive Protection",
      description: "Identify and prevent threats before they impact your business.",
      icon: Shield
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous security monitoring and threat detection.",
      icon: Monitor
    },
    {
      title: "Compliance Ready",
      description: "Meet regulatory requirements and industry standards.",
      icon: CheckCircle
    },
    {
      title: "Cost Effective",
      description: "Reduce security incidents and associated costs.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity
            <span className="text-zion-cyan"> Solutions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Protect your digital assets with enterprise-grade cybersecurity solutions. 
            Stay ahead of evolving threats with AI-powered detection and response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105"
            >
              Get Protected
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Security Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From threat detection to incident response, we provide end-to-end cybersecurity solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored cybersecurity solutions for your industry's unique challenges and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-zion-slate-light mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of enterprise-grade security protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how our cybersecurity solutions can protect your digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/security-assessment"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}