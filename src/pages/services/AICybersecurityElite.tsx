import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Users, 
  Globe, 
  Database,
  Cpu,
  Network,
  Brain,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  AlertTriangle,
  Activity,
  Key
} from 'lucide-react';

const AICybersecurityElite: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time, 24/7"
    },
    {
      icon: Shield,
      title: "Zero-Day Vulnerability Protection",
      description: "Proactive defense against unknown threats using behavioral analysis and AI pattern recognition"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade encryption for data at rest and in transit with quantum-resistant algorithms"
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Instant threat containment and automated remediation workflows to minimize damage"
    },
    {
      icon: Users,
      title: "Identity & Access Management",
      description: "Multi-factor authentication, biometric verification, and role-based access control"
    },
    {
      icon: Globe,
      title: "Global Threat Intelligence",
      description: "Real-time threat feeds from 200+ global sources and dark web monitoring"
    }
  ];

  const pricing = [
    {
      name: "Essential",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI threat detection",
        "Firewall & intrusion prevention",
        "Email security & spam filtering",
        "Vulnerability scanning",
        "24/7 monitoring",
        "Basic incident response"
      ]
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Advanced AI threat detection",
        "Behavioral analytics",
        "Advanced endpoint protection",
        "Threat intelligence feeds",
        "Automated incident response",
        "Compliance reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$18,000",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Full AI cybersecurity suite",
        "Custom threat modeling",
        "Advanced forensics",
        "Dedicated security team",
        "Custom integrations",
        "White-label options",
        "On-premise deployment"
      ]
    }
  ];

  const securityFeatures = [
    {
      title: "Advanced Threat Hunting",
      description: "AI-powered proactive threat hunting that identifies and neutralizes threats before they can cause damage"
    },
    {
      title: "Behavioral Analytics",
      description: "Machine learning algorithms that detect anomalous behavior patterns and flag potential security risks"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive cloud security including container security, serverless protection, and multi-cloud management"
    },
    {
      title: "Compliance & Governance",
      description: "Automated compliance reporting for SOC 2, ISO 27001, GDPR, HIPAA, and other regulatory frameworks"
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "NIST Cybersecurity Framework",
    "CIS Controls",
    "FedRAMP"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Elite
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Protect your business with the most advanced AI-powered cybersecurity platform. 
              Real-time threat detection, automated response, and 24/7 protection against evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-slate text-white font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Security Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Military-Grade Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform combines cutting-edge technology with proven security practices 
              to provide comprehensive protection for your digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate p-8 rounded-xl border border-zion-slate-light hover:border-red-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Go beyond basic security with our advanced AI-powered cybersecurity features designed 
              to protect against the most sophisticated threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark p-8 rounded-xl border border-zion-slate-light"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform meets and exceeds the highest industry standards for cybersecurity, 
              ensuring your business remains compliant with regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate p-6 rounded-xl border border-zion-slate-light text-center"
              >
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{standard}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the security plan that fits your business needs. All plans include our core AI cybersecurity 
              engine and 24/7 threat monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark p-8 rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-red-500 shadow-2xl shadow-red-500/25' 
                    : 'border-zion-slate-light'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Protected
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get in touch with our cybersecurity experts to discuss how AI Cybersecurity Elite can protect 
              your organization from evolving cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Security Team</h3>
              <a 
                href="tel:+13024640950" 
                className="text-zion-slate-light hover:text-white transition-colors duration-300"
              >
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Security Team</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-zion-slate-light hover:text-white transition-colors duration-300"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Security Center</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zion-slate-light">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://ziontechgroup.com" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Visit Website
              <ExternalLink className="inline ml-1 h-4 w-4" />
            </a>
            <a 
              href="https://ziontechgroup.com/privacy" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="https://ziontechgroup.com/terms" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AICybersecurityElite;