import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Globe,
  Zap,
  Target,
  Award,
  ArrowRight,
  Security,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Database,
  Network,
  Key
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      title: "Enterprise-Grade Encryption",
      description: "256-bit AES encryption for data at rest and in transit",
      icon: Lock,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Zero Trust Architecture",
      description: "Verify every user and device before granting access",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Factor Authentication",
      description: "Multiple layers of identity verification",
      icon: Key,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Threat Detection",
      description: "AI-powered security monitoring and alerting",
      icon: Eye,
      color: "from-red-500 to-orange-500"
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Compliance",
    "HIPAA Compliance",
    "PCI DSS Level 1"
  ];

  const securityAreas = [
    {
      category: "Data Security",
      items: ["End-to-end encryption", "Secure data centers", "Regular security audits", "Data backup and recovery"]
    },
    {
      category: "Network Security",
      items: ["DDoS protection", "Firewall management", "Intrusion detection", "VPN access"]
    },
    {
      category: "Application Security",
      items: ["Secure code practices", "Regular penetration testing", "Vulnerability scanning", "Security training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your security is our priority. We implement enterprise-grade security measures 
              to protect your data and ensure compliance with industry standards.
            </p>
          </div>
          
          {/* Key Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className={`inline-flex p-4 rounded-full mb-4 bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance Standards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Compliance & Certifications</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Security Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Security Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{area.category}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our security solutions can protect your organization and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link 
                to="/about"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;