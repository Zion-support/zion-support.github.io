import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Eye, 
  Lock, 
  AlertTriangle, 
  Zap, 
  Cpu, 
  Network, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Sparkles,
  Activity,
  BarChart3,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AICybersecurityPlatform() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time",
      icon: Brain,
      benefits: ["Zero-day threat detection", "Behavioral analysis", "Predictive threat modeling", "Automated response"]
    },
    {
      title: "Intelligent Incident Response",
      description: "Automated incident response with human oversight and learning capabilities",
      icon: Zap,
      benefits: ["Instant threat containment", "Automated remediation", "Learning from incidents", "Escalation protocols"]
    },
    {
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive security analytics with actionable insights and compliance reporting",
      icon: BarChart3,
      benefits: ["Real-time dashboards", "Compliance reporting", "Risk assessment", "Performance metrics"]
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: Lock,
      benefits: ["Continuous authentication", "Micro-segmentation", "Least privilege access", "Identity verification"]
    }
  ];

  const securityModules = [
    {
      name: "Network Security",
      capabilities: ["Intrusion Detection", "Firewall Management", "DDoS Protection", "Traffic Analysis"],
      aiFeatures: ["Anomaly detection", "Threat correlation", "Automated blocking", "Traffic optimization"]
    },
    {
      name: "Endpoint Protection",
      capabilities: ["Malware Detection", "Device Control", "Data Loss Prevention", "Application Control"],
      aiFeatures: ["Behavioral analysis", "Threat hunting", "Automated quarantine", "Risk scoring"]
    },
    {
      name: "Cloud Security",
      capabilities: ["Cloud Access Security", "Data Protection", "Compliance Monitoring", "Identity Management"],
      aiFeatures: ["Cloud-native protection", "API security", "Automated compliance", "Threat intelligence"]
    },
    {
      name: "Data Security",
      capabilities: ["Encryption", "Access Control", "Data Classification", "Privacy Protection"],
      aiFeatures: ["Smart encryption", "Dynamic access control", "Data discovery", "Privacy automation"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      challenges: ["Regulatory compliance", "Fraud detection", "Data protection", "Real-time monitoring"],
      solutions: ["Automated compliance", "AI fraud detection", "Encrypted data handling", "24/7 monitoring"],
      roi: "40-60% cost reduction"
    },
    {
      industry: "Healthcare",
      challenges: ["HIPAA compliance", "Patient data security", "Medical device security", "Ransomware protection"],
      solutions: ["Compliance automation", "Data encryption", "Device monitoring", "Threat prevention"],
      roi: "50-70% security improvement"
    },
    {
      industry: "Manufacturing",
      challenges: ["OT security", "Supply chain protection", "Intellectual property", "Operational continuity"],
      solutions: ["OT monitoring", "Supply chain security", "IP protection", "Business continuity"],
      roi: "30-50% risk reduction"
    },
    {
      industry: "Government",
      challenges: ["National security", "Data classification", "Access control", "Threat intelligence"],
      solutions: ["Security clearance", "Data governance", "Identity management", "Intelligence sharing"],
      roi: "Enhanced national security"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$1,200",
      period: "/month",
      description: "Perfect for small businesses starting their security journey",
      features: [
        "AI threat detection (basic)",
        "Endpoint protection (up to 100 devices)",
        "Basic reporting",
        "Email support",
        "Standard compliance templates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$3,500",
      period: "/month",
      description: "Ideal for growing organizations with advanced security needs",
      features: [
        "Advanced AI threat detection",
        "Endpoint protection (up to 500 devices)",
        "Cloud security integration",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom compliance reporting",
        "24/7 monitoring"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "Comprehensive security platform for large enterprises",
      features: [
        "Full AI-powered security suite",
        "Unlimited device protection",
        "Custom security policies",
        "Dedicated security team",
        "24/7 premium support",
        "White-label solutions",
        "On-premise deployment",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const complianceFrameworks = [
    "SOC 2 Type II", "ISO 27001", "NIST Cybersecurity Framework", "GDPR", "HIPAA", 
    "PCI DSS", "FedRAMP", "SOX", "GLBA", "CCPA"
  ];

  const threatIntelligence = [
    {
      source: "Global Threat Feed",
      coverage: "Real-time global threat intelligence",
      updates: "Every 15 minutes"
    },
    {
      source: "Dark Web Monitoring",
      coverage: "Continuous dark web surveillance",
      updates: "Real-time"
    },
    {
      source: "Vulnerability Database",
      coverage: "Comprehensive vulnerability tracking",
      updates: "Daily"
    },
    {
      source: "Industry Intelligence",
      coverage: "Sector-specific threat insights",
      updates: "Real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO 
        title="AI-Powered Cybersecurity Platform | Zion Tech Group"
        description="Advanced AI-driven cybersecurity platform providing real-time threat detection, automated response, and comprehensive protection for modern enterprises."
        keywords="cybersecurity, AI security, threat detection, incident response, zero trust, compliance"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Cybersecurity Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Next-generation cybersecurity powered by artificial intelligence. 
              Detect, respond, and prevent threats in real-time with automated 
              intelligence that learns and adapts to protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating security elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of cybersecurity with intelligent automation and real-time protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-red-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete protection across all attack vectors with AI-enhanced capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{module.name}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Core Capabilities:</h4>
                  <ul className="space-y-2 mb-4">
                    {module.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Shield className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">AI Features:</h4>
                  <ul className="space-y-1">
                    {module.aiFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Brain className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for every industry with proven ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2 mb-4">
                    {useCase.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2 mb-4">
                    {useCase.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-semibold">
                    Expected ROI: {useCase.roi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Intelligence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-red-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-gray-300 mb-6">
                Meet industry standards and regulatory requirements with automated compliance monitoring and reporting.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {complianceFrameworks.map((framework, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{framework}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Threat Intelligence */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Threat Intelligence
              </h2>
              <p className="text-gray-300 mb-6">
                Stay ahead of threats with real-time intelligence from global sources and dark web monitoring.
              </p>
              <div className="space-y-4">
                {threatIntelligence.map((intel, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">{intel.source}</h4>
                    <p className="text-gray-300 text-sm mb-2">{intel.coverage}</p>
                    <p className="text-gray-400 text-xs">Updates: {intel.updates}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your organization's needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Secure Your Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations that trust our AI-powered cybersecurity platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                Contact Security Team
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free trial includes full platform access for 30 days
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}