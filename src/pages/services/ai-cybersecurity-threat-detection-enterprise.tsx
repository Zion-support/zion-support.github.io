import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Zap, 
  AlertTriangle, 
  Lock, 
  Network, 
  Brain,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  Activity
} from 'lucide-react';

const AICybersecurityThreatDetectionEnterprise: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-red-400" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and analyze threats in real-time with 99.9% accuracy and zero false positives."
    },
    {
      icon: <Eye className="w-6 h-6 text-red-400" />,
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of all network traffic, endpoints, and cloud environments with automated threat hunting and response."
    },
    {
      icon: <Zap className="w-6 h-6 text-red-400" />,
      title: "Automated Response",
      description: "Instant automated threat containment, isolation, and remediation with customizable response playbooks and escalation rules."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Zero-Day Protection",
      description: "Behavioral analysis and anomaly detection that identifies unknown threats before they can exploit vulnerabilities."
    },
    {
      icon: <Network className="w-6 h-6 text-red-400" />,
      title: "Multi-Layer Defense",
      description: "Comprehensive protection across network, endpoint, application, and data layers with unified threat intelligence."
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: "Compliance & Reporting",
      description: "SOC 2, ISO 27001, and GDPR compliant with automated compliance reporting and audit trail management."
    }
  ];

  const threatTypes = [
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Advanced Persistent Threats (APT)",
      description: "Sophisticated, long-term cyber attacks targeting specific organizations with custom malware and social engineering."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-400" />,
      title: "Ransomware & Malware",
      description: "Automated detection and blocking of ransomware, trojans, viruses, and other malicious software before execution."
    },
    {
      icon: <Network className="w-8 h-8 text-red-400" />,
      title: "Network Intrusions",
      description: "Real-time detection of unauthorized network access, DDoS attacks, and network reconnaissance activities."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Insider Threats",
      description: "Behavioral analysis to identify malicious or negligent insider activities and data exfiltration attempts."
    }
  ];

  const benefits = [
    {
      metric: "<30s",
      description: "Average response time to security threats"
    },
    {
      metric: "99.9%",
      description: "Threat detection accuracy rate"
    },
    {
      metric: "40%",
      description: "Reduction in security operations costs"
    },
    {
      metric: "24/7",
      description: "Automated security operations coverage"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,499",
      period: "/month",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email & web security",
        "Standard support",
        "Daily threat reports"
      ]
    },
    {
      plan: "Professional",
      price: "$5,999",
      period: "/month",
      features: [
        "Up to 500 endpoints",
        "Advanced threat detection",
        "Network & endpoint security",
        "Priority support",
        "Real-time monitoring",
        "Custom response rules"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$12,999",
      period: "/month",
      features: [
        "Unlimited endpoints",
        "Full threat intelligence",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Threat Detection Enterprise | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI-powered cybersecurity threat detection platform with 99.9% accuracy, 24/7 monitoring, and automated response capabilities." />
        <meta name="keywords" content="AI cybersecurity, threat detection, enterprise security, network security, endpoint protection, SOC 2 compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-cybersecurity-threat-detection-enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Threat Detection
                <span className="text-red-400 block">Enterprise Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your enterprise with the most advanced AI-powered cybersecurity platform. 
                Get 99.9% threat detection accuracy, 24/7 monitoring, and automated response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for enterprise scale with cutting-edge AI technology and comprehensive security coverage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Protect against all types of cyber threats with our AI-powered detection system
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{threat.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{threat.title}</h3>
                      <p className="text-gray-300">{threat.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Security Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See real results with our AI-powered cybersecurity platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Enterprise Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the security plan that fits your organization's needs and scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-red-500 ring-2 ring-red-500/20' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Enterprise?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Join leading enterprises that trust our AI-powered cybersecurity platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICybersecurityThreatDetectionEnterprise;