import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  BarChart3, 
  Globe, 
  Zap, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Lock,
  Target,
  Eye,
  Cpu
} from 'lucide-react';

const AIAutonomousCybersecurityThreatIntelligencePlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and analyze cyber threats in real-time with 99.9% accuracy"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: "Predictive Threat Intelligence",
      description: "Forecast emerging cyber threats and vulnerabilities before they become active attacks"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Autonomous Response & Mitigation",
      description: "AI-driven incident response that automatically contains and neutralizes threats within seconds"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: "Real-time Security Analytics",
      description: "Live dashboards showing threat landscape, attack patterns, and security posture metrics"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Global Threat Intelligence Network",
      description: "Access to worldwide threat data, attack patterns, and security intelligence from millions of sources"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Zero-Day Vulnerability Detection",
      description: "Identify and patch unknown vulnerabilities before they can be exploited by attackers"
    }
  ];

  const pricingPlans = [
    {
      name: "SMB Security",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small to medium businesses requiring enterprise-grade cybersecurity protection",
      features: [
        "Up to 500 endpoints",
        "Basic threat detection",
        "Email security",
        "Web filtering",
        "24/7 monitoring",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise Security",
      price: "$5,999",
      period: "/month",
      description: "Ideal for growing enterprises with complex security requirements",
      features: [
        "Up to 5,000 endpoints",
        "Advanced AI threat detection",
        "Real-time monitoring",
        "Custom security policies",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Multi-site protection"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Global Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For multinational corporations requiring comprehensive cybersecurity intelligence",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Multi-region protection",
        "Dedicated security team",
        "24/7 support",
        "Advanced compliance tools",
        "White-label solutions",
        "International deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Detect threats 10x faster than traditional security solutions",
    "Reduce false positives by 90% with AI-powered analysis",
    "Achieve 99.9% threat detection accuracy across all attack vectors",
    "Cut incident response time from hours to seconds",
    "Prevent 95% of cyber attacks before they can cause damage",
    "Reduce security operations costs by 40-60% through automation"
  ];

  const securityModules = [
    {
      category: "Threat Detection & Prevention",
      solutions: [
        "AI-powered malware detection",
        "Behavioral analysis",
        "Network traffic monitoring",
        "Endpoint protection",
        "Cloud security monitoring"
      ]
    },
    {
      category: "Incident Response & Recovery",
      solutions: [
        "Automated threat containment",
        "Forensic analysis tools",
        "Recovery automation",
        "Incident playbooks",
        "Post-incident reporting"
      ]
    },
    {
      category: "Vulnerability Management",
      solutions: [
        "Automated vulnerability scanning",
        "Patch management",
        "Configuration assessment",
        "Risk scoring",
        "Compliance monitoring"
      ]
    },
    {
      category: "Security Intelligence",
      solutions: [
        "Threat intelligence feeds",
        "Attack pattern analysis",
        "Security research",
        "Threat hunting tools",
        "Security awareness training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Autonomous Cybersecurity Threat Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              Protect your organization with intelligent AI-driven threat detection, 
              autonomous incident response, and predictive cybersecurity intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Cybersecurity Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform provides comprehensive cybersecurity protection that learns, adapts, 
              and responds to threats autonomously, ensuring your organization stays secure 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform addresses every aspect of cybersecurity, providing integrated 
              solutions that work together to create an intelligent, adaptive, and impenetrable security posture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Eye className="w-6 h-6 text-red-500 mr-3" />}
                  {index === 1 && <Zap className="w-6 h-6 text-blue-500 mr-3" />}
                  {index === 2 && <Target className="w-6 h-6 text-green-500 mr-3" />}
                  {index === 3 && <Brain className="w-6 h-6 text-purple-500 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900">{module.category}</h3>
                </div>
                <ul className="space-y-2">
                  {module.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of organizations worldwide in their mission to achieve 
              impenetrable cybersecurity through intelligent AI-driven protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology & Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and cybersecurity technologies with seamless integration capabilities 
              for your existing security infrastructure and tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Brain className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Advanced algorithms for threat detection, behavioral analysis, and autonomous response
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Big Data Analytics</h3>
              <p className="text-gray-600">
                Real-time processing and analysis of massive security datasets for threat intelligence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation & Orchestration</h3>
              <p className="text-gray-600">
                Automated incident response, threat containment, and security workflow automation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zero Trust Security</h3>
              <p className="text-gray-600">
                Comprehensive zero trust architecture with continuous verification and least privilege access
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your organization's security requirements and budget. 
              All plans include our core AI-powered cybersecurity intelligence capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-red-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations worldwide in their mission to achieve 
              impenetrable cybersecurity. Our team of security experts is ready to help you get started.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-red-300" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-red-300" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-red-300" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Visit Our Website
            </h3>
            <p className="text-gray-300 mb-6">
              Learn more about our comprehensive cybersecurity solutions and explore our full service portfolio.
            </p>
            <a 
              href="https://ziontechgroup.com/services/ai-autonomous-cybersecurity-threat-intelligence-platform"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousCybersecurityThreatIntelligencePlatform;