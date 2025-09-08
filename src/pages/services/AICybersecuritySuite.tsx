  Shield, 
  Zap, 
  Brain, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Award,
  Lightbulb,
  Database,
  Network,
  Server,
  Globe,
  Clock,
  BarChart3,
  Cpu,
  Lock,
  Eye,
  Target,
  Rocket,
  Sparkles,
  AlertTriangle,
  Fingerprint,
  Key,
  Monitor,
  Activity
} from 'lucide-react';

export default function AICybersecuritySuite() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time",
      icon: Brain,
      benefits: [
        "99.9% threat detection rate",
        "Zero-day attack prevention",
        "Behavioral analysis",
        "Predictive threat modeling"
      ]
    },
    {
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security with AI-driven access control",
      icon: Shield,
      benefits: [
        "Continuous authentication",
        "Micro-segmentation",
        "Least privilege access",
        "Real-time risk assessment"
      ]
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven security orchestration with automated threat containment and remediation",
      icon: Zap,
      benefits: [
        "Instant threat containment",
        "Automated remediation",
        "Incident timeline analysis",
        "Forensic investigation"
      ]
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance monitoring and reporting for all major regulatory frameworks",
      icon: CheckCircle,
      benefits: [
        "GDPR compliance",
        "SOC 2 automation",
        "HIPAA compliance",
        "Real-time audit trails"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Security Starter",
      price: "$8,500",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic AI threat detection",
        "Up to 100 endpoints",
        "Standard security features",
        "Email support",
        "Basic compliance reporting",
        "Security dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Security Professional",
      price: "$18,500",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI threat detection",
        "Up to 500 endpoints",
        "Enhanced security suite",
        "Priority support",
        "Advanced compliance",
        "Custom integrations",
        "Performance optimization",
        "Security consulting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Security Enterprise",
      price: "$45,000",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Full security suite access",
        "Unlimited endpoints",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom security models",
        "White-label solutions",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: [
        "Fraud detection and prevention",
        "Regulatory compliance",
        "Secure transactions",
        "Risk assessment"
      ]
    },
    {
      industry: "Healthcare",
      applications: [
        "HIPAA compliance",
        "Patient data protection",
        "Medical device security",
        "Compliance monitoring"
      ]
    },
    {
      industry: "Manufacturing",
      applications: [
        "OT security",
        "Supply chain protection",
        "Intellectual property",
        "Industrial espionage prevention"
      ]
    },
    {
      industry: "Government",
      applications: [
        "Classified data protection",
        "National security",
        "Compliance automation",
        "Threat intelligence"
      ]
    }
  ];

  const securityMetrics = [
    {
      title: "Threat Detection Rate",
      description: "AI-powered detection with machine learning",
      icon: Eye,
      metric: "99.9%"
    },
    {
      title: "Response Time",
      description: "Automated incident response and containment",
      icon: Zap,
      metric: "<1 min"
    },
    {
      title: "False Positive Rate",
      description: "Minimal false alarms with AI validation",
      icon: Target,
      metric: "<0.1%"
    },
    {
      title: "Compliance Coverage",
      description: "Automated compliance for all major frameworks",
      icon: CheckCircle,
      metric: "100%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Suite - Zion Tech Group"
        description="Protect your business with AI-powered cybersecurity. Advanced threat detection, zero-trust architecture, and automated incident response."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with next-generation AI-powered cybersecurity. 
              Detect threats in real-time, automate incident response, and maintain 
              compliance with zero-trust architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-600 text-red-400 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/20 rounded-full blur-xl"></div>
      </section>

      {/* Security Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Unmatched Security Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Cybersecurity Suite delivers industry-leading security metrics 
              that protect your business around the clock.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300 text-center"
              >
                <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg mx-auto mb-4 w-fit">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-red-400 mb-2">{metric.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Cybersecurity Suite combines cutting-edge artificial intelligence with 
              proven security methodologies to deliver unmatched protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that best fits your business needs. All plans include 
              our core AI-powered security capabilities with scalable protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Cybersecurity Suite is protecting businesses across industries, 
              delivering enterprise-grade security with AI-powered intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust our AI Cybersecurity Suite to protect 
              their digital assets and maintain compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Contact Security Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}