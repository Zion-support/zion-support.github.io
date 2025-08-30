import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Eye,
  AlertTriangle,
  Network,
  Server,
  Bot,
  Sparkles,
  Target,
  BarChart3,
  Settings,
  Globe,
  Rocket,
  Activity,
  ShieldCheck,
  Fingerprint,
  Key,
  Monitor,
  Database,
  Cloud
} from 'lucide-react';

export default function AICybersecurityIntelligencePlatform() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze threats in real-time",
      icon: Eye,
      benefits: ["99.9% threat detection rate", "Zero false positives", "Real-time monitoring"]
    },
    {
      title: "Behavioral Analytics",
      description: "Learn normal user behavior patterns to detect anomalies and potential threats",
      icon: Brain,
      benefits: ["User behavior profiling", "Anomaly detection", "Predictive threat modeling"]
    },
    {
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to threats instantly without human intervention",
      icon: Bot,
      benefits: ["Instant threat containment", "Automated remediation", "Reduced response time"]
    },
    {
      title: "Threat Intelligence",
      description: "Global threat intelligence network providing real-time updates and insights",
      icon: Globe,
      benefits: ["Global threat database", "Real-time updates", "Community-driven insights"]
    }
  ];

  const pricing = [
    {
      plan: "Essential",
      price: "$1,800",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard security reports",
        "24/7 monitoring"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$3,500",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced threat detection",
        "Priority support",
        "Custom security policies",
        "Threat intelligence feeds",
        "Compliance reporting"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$8,000",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced analytics",
        "Custom integrations",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const securityCapabilities = [
    {
      category: "Network Security",
      features: [
        "Intrusion Detection & Prevention",
        "Network Traffic Analysis",
        "DDoS Protection",
        "VPN Security",
        "Firewall Management"
      ],
      icon: Network
    },
    {
      category: "Endpoint Security",
      features: [
        "Advanced Malware Protection",
        "Device Control",
        "Application Whitelisting",
        "Data Loss Prevention",
        "Mobile Device Security"
      ],
      icon: Shield
    },
    {
      category: "Cloud Security",
      features: [
        "Cloud Access Security Broker",
        "Container Security",
        "API Security",
        "Cloud Workload Protection",
        "Multi-cloud Security"
      ],
      icon: Cloud
    },
    {
      category: "Data Protection",
      features: [
        "Encryption at Rest & Transit",
        "Key Management",
        "Data Classification",
        "Privacy Compliance",
        "Backup Security"
      ],
      icon: Lock
    }
  ];

  const complianceStandards = [
    { name: "SOC 2 Type II", status: "Certified", icon: CheckCircle },
    { name: "ISO 27001", status: "Certified", icon: CheckCircle },
    { name: "GDPR", status: "Compliant", icon: CheckCircle },
    { name: "HIPAA", status: "Compliant", icon: CheckCircle },
    { name: "PCI DSS", status: "Compliant", icon: CheckCircle },
    { name: "NIST", status: "Compliant", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI-Powered Cybersecurity Intelligence Platform | Zion Tech Group"
        description="Protect your business with our AI-powered cybersecurity intelligence platform. Advanced threat detection, automated response, and comprehensive security monitoring."
        keywords="AI cybersecurity, threat detection, security intelligence, automated response, cybersecurity platform"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-zion-blue to-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-red-900/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>AI-Powered Security Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Intelligence Platform
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Stay ahead of cyber threats with our intelligent security platform. AI-powered detection, 
              automated response, and comprehensive protection for your digital assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with military-grade security protocols to provide 
              unparalleled protection for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-red-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Capabilities Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Protect every aspect of your digital infrastructure with our multi-layered security approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {securityCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <capability.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{capability.category}</h3>
                </div>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <ShieldCheck className="w-4 h-4 text-red-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform meets the highest security standards and compliance requirements across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 text-center hover:border-red-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <standard.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{standard.name}</h3>
                <p className="text-xs text-red-400 font-medium">{standard.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Security Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the security plan that fits your business needs. All plans include our core AI security features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-400 shadow-lg shadow-red-500/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/25'
                    : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already protected by our AI-powered cybersecurity platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}