import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  Zap,
  Brain,
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Play
} from 'lucide-react';

const AICybersecurityPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and neutralize cyber threats in real-time"
    },
    {
      icon: Shield,
      title: "Zero-Day Attack Prevention",
      description: "Proactive protection against unknown threats using behavioral analysis and AI prediction"
    },
    {
      icon: Network,
      title: "Network Security Monitoring",
      description: "24/7 monitoring of network traffic with instant threat detection and response"
    },
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "Military-grade encryption protocols to protect sensitive data and communications"
    },
    {
      icon: Eye,
      title: "Real-time Visibility",
      description: "Comprehensive dashboard providing complete visibility into security posture"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated threat response and incident management"
    }
  ];

  const useCases = [
    {
      title: "Enterprise Security",
      description: "Comprehensive protection for large organizations with multiple locations and complex networks",
      icon: Shield,
      benefits: ["Multi-location protection", "Centralized management", "Compliance automation"]
    },
    {
      title: "Financial Services",
      description: "Bank-level security for financial institutions handling sensitive customer data",
      icon: Shield,
      benefits: ["PCI DSS compliance", "Fraud detection", "Transaction monitoring"]
    },
    {
      title: "Healthcare Security",
      description: "HIPAA-compliant security for healthcare providers and patient data protection",
      icon: Shield,
      benefits: ["HIPAA compliance", "Patient data protection", "Medical device security"]
    },
    {
      title: "Government & Defense",
      description: "High-security solutions for government agencies and defense contractors",
      icon: Shield,
      benefits: ["FISMA compliance", "Classified data protection", "National security standards"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$4,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "AI threat detection",
        "Basic network monitoring",
        "Email security",
        "Standard support",
        "Security dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses and mid-size organizations",
      features: [
        "Advanced AI detection",
        "24/7 network monitoring",
        "Incident response",
        "Priority support",
        "Custom integrations",
        "Compliance reporting"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "one-time",
      description: "For large organizations requiring maximum security",
      features: [
        "Full AI security suite",
        "Custom threat models",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated security team",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CISO",
      company: "Global Financial Corp",
      content: "The AI Cybersecurity Platform has transformed our security posture. We've detected and prevented threats that would have gone unnoticed before.",
      rating: 5,
      avatar: "https://ziontechgroup.com/images/testimonials/jennifer-martinez.jpg"
    },
    {
      name: "David Thompson",
      role: "IT Director",
      company: "Healthcare Systems Inc",
      content: "This platform has given us peace of mind knowing our patient data is protected by the most advanced AI security available.",
      rating: 5,
      avatar: "https://ziontechgroup.com/images/testimonials/david-thompson.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Security Manager",
      company: "Tech Innovations Ltd",
      content: "The automated threat response has reduced our incident response time from hours to minutes. Game-changing technology.",
      rating: 5,
      avatar: "https://ziontechgroup.com/images/testimonials/sarah-chen.jpg"
    }
  ];

  const securityFeatures = [
    "Real-time threat detection",
    "Behavioral analysis",
    "Machine learning algorithms",
    "Zero-day attack prevention",
    "Network traffic analysis",
    "Endpoint protection",
    "Email security",
    "Web application firewall",
    "Data loss prevention",
    "Compliance automation"
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Cybersecurity Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced threat detection and response system that uses machine learning to identify, analyze, and neutralize cybersecurity threats in real-time across enterprise networks." />
        <meta name="keywords" content="AI cybersecurity, threat detection, network security, machine learning security, enterprise security" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-cybersecurity-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  Advanced AI-Powered Security
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  AI-Powered
                  <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Cybersecurity Platform
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                  Protect your organization with the most advanced AI-powered cybersecurity platform. 
                  Real-time threat detection, automated response, and comprehensive protection against 
                  the latest cyber threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                  >
                    Get Protected Today
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Link>
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300 flex items-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Threat Detection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-400">Real-time Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">500%</div>
                  <div className="text-gray-400">ROI within 6 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
                  <div className="text-gray-400">Successful Breaches</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience next-generation cybersecurity powered by artificial intelligence
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
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored cybersecurity solutions for every industry and organization size
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-400 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                            {benefit}
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

        {/* Security Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Security Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every aspect of your digital infrastructure protected by AI-powered security
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-red-400 font-medium text-sm">{feature}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Security Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to meet your cybersecurity needs
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
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
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
                    <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400 text-sm">{plan.period}</div>
                    <p className="text-gray-300 mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Trusted by Security Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join organizations that have transformed their security with AI-powered protection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-red-400">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Don't wait until it's too late. Protect your organization with the most advanced AI-powered cybersecurity available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  Get Protected Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-300 mb-8">
                  Ready to secure your organization? Our cybersecurity experts are here to help you implement the most advanced protection available.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Request a Security Assessment
                </h3>
                <p className="text-gray-300 mb-6">
                  Get a comprehensive evaluation of your current security posture and recommendations for improvement.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Vulnerability assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Security audit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Compliance review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Implementation roadmap</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 text-center block"
                >
                  Schedule Assessment
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICybersecurityPlatform;