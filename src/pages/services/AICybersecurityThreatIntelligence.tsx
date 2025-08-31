import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu,
  Database,
  Lock,
  BarChart3,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Award,
  Target,
  Workflow,
  Zap,
  Brain,
  Network,
  Code,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Activity,
  Fingerprint,
  Key,
  Server
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICybersecurityThreatIntelligence() {
  const features = [
    { icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze cyber threats in real-time"
    },
    { icon: Eye,
      title: "24/7 Threat Monitoring",
      description: "Continuous monitoring of network traffic, endpoints, and cloud environments for suspicious activities"
    },
    { icon: AlertTriangle,
      title: "Predictive Threat Intelligence",
      description: "AI algorithms that predict potential threats before they materialize using behavioral analysis"
    },
    { icon: Shield,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to threats instantly, minimizing damage and recovery time"
    },
    { icon: Network,
      title: "Threat Hunting & Analysis",
      description: "Proactive threat hunting using AI to identify hidden threats and attack patterns"
    },
    { icon: Workflow,
      title: "Security Orchestration",
      description: "Automated security workflows that coordinate responses across multiple security tools"
    }
  ];

  const pricingTiers = [
    { name: "Threat Intelligence Starter",
      price: "$599",
      period: "monthly",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 endpoints monitored",
        "Basic threat detection",
        "Email alerts",
        "Standard reporting",
        "Email support",
        "Basic threat intelligence feeds"
      ],
      bestFor: "Small businesses, startups, small IT teams"
    },
    { name: "Threat Intelligence Professional",
      price: "$1,499",
      period: "monthly",
      description: "Advanced features for growing organizations",
      features: [
        "Up to 1,000 endpoints monitored",
        "Advanced AI threat detection",
        "Real-time alerts and notifications",
        "Advanced analytics and reporting",
        "Priority support",
        "Custom threat intelligence feeds",
        "API access",
        "Threat hunting tools"
      ],
      bestFor: "Medium businesses, growing companies, security teams"
    },
    { name: "Threat Intelligence Enterprise",
      price: "$3,999",
      period: "monthly",
      description: "Full-scale threat intelligence platform for large enterprises",
      features: [
        "Unlimited endpoints monitored",
        "Custom AI model training",
        "Advanced threat hunting",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "On-premise deployment options",
        "Security consulting services"
      ],
      bestFor: "Large enterprises, government agencies, financial institutions"
    }
  ];

  const useCases = [
    { title: "Financial Services",
      description: "Protect financial data, prevent fraud, and ensure regulatory compliance",
      icon: DollarSign
    },
    { title: "Healthcare",
      description: "Secure patient data, protect medical devices, and ensure HIPAA compliance",
      icon: Users
    },
    { title: "Government",
      description: "National security, critical infrastructure protection, and classified data security",
      icon: Shield
    },
    { title: "Manufacturing",
      description: "Industrial control system security and supply chain protection",
      icon: Factory
    },
    { title: "Retail & E-commerce",
      description: "Customer data protection, payment security, and fraud prevention",
      icon: ShoppingCart
    },
    { title: "Education",
      description: "Student data protection, research security, and academic integrity",
      icon: BookOpen
    }
  ];

  const benefits = [
    "99.9% threat detection accuracy with AI",
    "Real-time threat response in milliseconds",
    "Reduced false positives by 80%",
    "24/7 automated security monitoring",
    "Predictive threat prevention",
    "Comprehensive compliance reporting"
  ];

  const securityCapabilities = [
    { title: "Machine Learning Detection",
      description: "Advanced ML algorithms that learn from threats and improve detection over time",
      icon: Brain
    },
    { title: "Behavioral Analysis",
      description: "AI-powered analysis of user and system behavior to identify anomalies",
      icon: Activity
    },
    { title: "Threat Intelligence Feeds",
      description: "Real-time feeds from global threat intelligence sources and security researchers",
      icon: Globe
    },
    { title: "Vulnerability Assessment",
      description: "Automated scanning and assessment of system vulnerabilities",
      icon: Eye
    },
    { title: "Incident Response Automation",
      description: "Automated response workflows that minimize threat impact and recovery time",
      icon: Zap
    },
    { title: "Compliance Reporting",
      description: "Automated compliance reports for SOC 2, ISO 27001, GDPR, and other standards",
      icon: FileText
    }
  ];

  const threatTypes = [
    { title: "Ransomware Attacks",
      description: "AI detection and prevention of ransomware before encryption occurs",
      icon: Lock
    },
    { title: "Phishing Campaigns",
      description: "Advanced detection of sophisticated phishing attempts and social engineering",
      icon: Mail
    },
    { title: "DDoS Attacks",
      description: "Real-time detection and mitigation of distributed denial of service attacks",
      icon: Network
    },
    { title: "Insider Threats",
      description: "Behavioral analysis to identify malicious insider activities",
      icon: Users
    },
    { title: "Zero-Day Exploits",
      description: "AI-powered detection of previously unknown vulnerabilities and exploits",
      icon: AlertTriangle
    },
    { title: "Advanced Persistent Threats",
      description: "Long-term threat detection and response for sophisticated attackers",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO 
        title="AI Cybersecurity Threat Intelligence - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform that detects, analyzes, and responds to cyber threats in real-time."
        keywords="AI cybersecurity, threat intelligence, threat detection, cybersecurity AI, security automation, threat hunting"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Revolutionary AI Cybersecurity Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Threat Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with our revolutionary AI-powered cybersecurity platform. 
              Detect, analyze, and respond to cyber threats in real-time with unprecedented accuracy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
              Secure Your Organization
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 hover:bg-red-500/20 font-semibold rounded-lg transition-colors">
              Request Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary AI Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform combines cutting-edge artificial intelligence with 
              advanced security capabilities to provide unprecedented threat protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage state-of-the-art AI technologies to enhance every aspect of your cybersecurity posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform protects against all types of cyber threats, from common attacks to sophisticated nation-state campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <threat.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{threat.title}</h3>
                <p className="text-gray-300">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Cybersecurity Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your security needs with our transparent, 
              enterprise-grade pricing structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1 ? 'border-red-500/50 bg-red-500/10' : 'border-white/10'
                } hover:border-red-500/50 transition-all`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-400 mb-6">
                  <strong>Best for:</strong> {tier.bestFor}
                </div>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI cybersecurity platform is protecting organizations 
              across industries with tailored security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented security protection and threat intelligence 
              with our cutting-edge AI cybersecurity technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-lg text-gray-300">{benefit}</p>
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
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI cybersecurity revolution and protect your organization 
              with our advanced threat intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                Secure Your Organization
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 hover:bg-red-500/20 font-semibold rounded-lg transition-colors">
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}