import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Zap, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Cpu, 
  Database, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Target,
  Cloud,
  Network,
  Code,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Bug,
  Virus,
  Fingerprint,
  Search
} from 'lucide-react';

const AICybersecurityThreatIntelligence: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze threats in real-time",
      icon: Eye,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Behavioral Analytics",
      description: "Continuous monitoring of user and system behavior to detect anomalies and potential threats",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Threat Intelligence Sharing",
      description: "Collaborative platform for sharing threat intelligence across organizations and industries",
      icon: Network,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Response",
      description: "Intelligent automation that responds to threats instantly, reducing response time from hours to seconds",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Enterprise Security",
      description: "Comprehensive threat detection and response for large organizations",
      icon: Shield
    },
    {
      title: "Financial Services",
      description: "Advanced fraud detection and compliance monitoring",
      icon: BarChart3
    },
    {
      title: "Healthcare",
      description: "Protection of sensitive patient data and medical systems",
      icon: Users
    },
    {
      title: "Government",
      description: "National security and critical infrastructure protection",
      icon: Lock
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Up to 100 endpoints",
        "Standard analytics dashboard",
        "Email support",
        "Basic threat intelligence feeds"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Ideal for growing enterprises and mid-size companies",
      features: [
        "Advanced AI algorithms",
        "Unlimited endpoints",
        "Custom analytics and reporting",
        "Priority support",
        "Full API access",
        "Advanced threat intelligence"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$14,999",
      period: "/month",
      description: "For large organizations requiring maximum security",
      features: [
        "Full AI-powered protection",
        "Custom threat models",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom integrations",
        "White-label solutions"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Threat detection accuracy"
    },
    {
      metric: "90%",
      description: "Faster threat response time"
    },
    {
      metric: "75%",
      description: "Reduction in false positives"
    },
    {
      metric: "24/7",
      description: "Continuous monitoring and protection"
    }
  ];

  const threatTypes = [
    {
      title: "Malware Detection",
      description: "Advanced detection of viruses, ransomware, and other malicious software",
      icon: Virus
    },
    {
      title: "Phishing Prevention",
      description: "AI-powered identification of sophisticated phishing attempts",
      icon: Eye
    },
    {
      title: "Insider Threats",
      description: "Behavioral analysis to detect malicious insider activities",
      icon: Users
    },
    {
      title: "Zero-Day Exploits",
      description: "Predictive analysis to identify and prevent unknown vulnerabilities",
      icon: Bug
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Cybersecurity Threat Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead of cyber threats with our AI-powered threat intelligence platform that 
              provides real-time detection, analysis, and automated response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unmatched Security Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven cybersecurity that adapts and evolves with emerging threats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{benefit.metric}</span>
                </div>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make our platform the future of cybersecurity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform protects against all types of cyber threats with advanced detection and prevention
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <threat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{threat.title}</h3>
                <p className="text-gray-300 text-sm">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is protecting organizations across multiple industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your organization's cybersecurity needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500' 
                    : 'bg-slate-800/50 border border-slate-700'
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our cybersecurity experts to learn how our AI platform can protect your digital assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Request a Demo</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                />
                <textarea
                  placeholder="Tell us about your security challenges"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                >
                  Request Demo
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityThreatIntelligence;