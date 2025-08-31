import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Lock,
  Target,
  Rocket,
  Activity,
  Clock,
  Star,
  Brain,
  Network,
  Database,
  FileText,
  Server,
  Cloud,
  Smartphone,
  Monitor
} from 'lucide-react';

const AICybersecurityThreatIntelligencePlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and analyze threats in real-time with 99.9% accuracy"
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 surveillance across all endpoints, networks, and cloud environments with instant threat alerts"
    },
    {
      icon: Shield,
      title: "Automated Response",
      description: "Intelligent threat containment and mitigation without human intervention, reducing response time by 90%"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection with advanced firewall, intrusion detection, and traffic analysis"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Multi-cloud security with automated compliance monitoring and threat prevention across all platforms"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "End-to-end encryption, data loss prevention, and automated backup with ransomware protection"
    }
  ];

  const benefits = [
    "Detect threats 90% faster than traditional methods",
    "Reduce false positives by 80%",
    "Automated response reduces incident resolution time by 95%",
    "24/7 protection with zero downtime",
    "Compliance automation for SOC2, GDPR, HIPAA",
    "Predictive threat intelligence prevents attacks before they happen"
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$799",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI threat detection",
        "Real-time monitoring",
        "Basic automated response",
        "Email alerts",
        "Basic reporting",
        "Email support",
        "Up to 100 endpoints"
      ],
      cta: "Start Protection",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Advanced protection for growing businesses",
      features: [
        "Everything in Essential",
        "Advanced AI models",
        "Full automated response",
        "Real-time alerts",
        "Advanced analytics",
        "Priority support",
        "Up to 1,000 endpoints",
        "Compliance monitoring"
      ],
      cta: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Comprehensive security for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "White-label solutions",
        "API access",
        "Dedicated security team",
        "Custom integrations",
        "Unlimited endpoints",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Bank-grade security with regulatory compliance and fraud detection",
      icon: Shield
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant security with patient data protection",
      icon: Users
    },
    {
      title: "Manufacturing",
      description: "OT/IT security with industrial threat intelligence",
      icon: Server
    },
    {
      title: "Government",
      description: "Classified information protection with national security standards",
      icon: Lock
    }
  ];

  const securityMetrics = [
    {
      metric: "99.9%",
      label: "Threat Detection Accuracy",
      description: "AI-powered detection with minimal false positives"
    },
    {
      metric: "90%",
      label: "Faster Threat Detection",
      description: "Compared to traditional security methods"
    },
    {
      metric: "95%",
      label: "Faster Response Time",
      description: "Automated incident response and resolution"
    },
    {
      metric: "24/7",
      label: "Continuous Protection",
      description: "Round-the-clock security monitoring"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Cybersecurity Threat Intelligence Platform | Zion Tech Group"
        description="Advanced AI-powered cybersecurity platform with real-time threat detection, automated response, and 99.9% accuracy. Protect your business from evolving cyber threats."
        keywords="AI cybersecurity, threat intelligence, threat detection, automated response, network security, cloud security"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>AI-Powered Security</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Cybersecurity
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Threat Intelligence Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stay ahead of cyber threats with our revolutionary AI-powered security platform. 
                Detect, analyze, and respond to threats in real-time with 99.9% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-red-500/30 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Metrics */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-red-400 mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive protection across all attack vectors 
                with intelligent automation and real-time response capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI Security Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of cybersecurity with AI-powered protection that adapts 
                to evolving threats and provides unmatched security coverage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Security Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible security plans designed to protect businesses of all sizes 
                with enterprise-grade AI-powered protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-red-500 bg-slate-800/80 scale-105' 
                      : 'border-slate-700 bg-slate-800/50 hover:border-red-500/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry-Specific Security Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed to meet the unique security requirements 
                of different industries with specialized protection and compliance features.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl p-12 text-center border border-red-500/30"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait until it's too late. Join thousands of businesses that trust our 
                AI-powered security platform to protect their digital assets and reputation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-red-500/30 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Need help? Contact our security team at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
                <p>Or call us at <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 (302) 464-0950</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICybersecurityThreatIntelligencePlatform;