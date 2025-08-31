import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedSEO, SEOConfigs } from '../../components/EnhancedSEO.tsx';
import { SEO } from "@/components/SEO";
import {
  Shield,
  Brain,
  Activity,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Globe,
  Lock,
  BarChart3,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Eye,
  AlertTriangle,
  Key,
  Fingerprint,
  Bug,
  Virus,
  Lock as LockIcon,
  ShieldCheck,
  Network as NetworkIcon,
  HardDrive
} from 'lucide-react';

const AIAutonomousCybersecurityOperations = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and analyze cyber threats in real-time with 99.9% accuracy."
    },
    {
      icon: Shield,
      title: "Autonomous Response",
      description: "Intelligent automated response systems that neutralize threats before they can cause damage."
    },
    {
      icon: Activity,
      title: "Behavioral Analytics",
      description: "AI-driven user behavior analysis to identify insider threats and anomalous activities."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network monitoring and protection with AI-powered intrusion detection."
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement and manage zero trust security models with AI-enhanced access control."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring with instant threat alerts and automated incident response."
    }
  ];

  const benefits = [
    "Reduce security incidents by 80-90%",
    "Automate 95% of security operations",
    "Respond to threats in milliseconds",
    "Reduce false positives by 70%",
    "Provide 24/7 autonomous protection",
    "Achieve SOC 2 compliance automatically"
  ];

  const pricing = [
    {
      name: "Small Business",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Automated response",
        "Security monitoring",
        "Email alerts",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "Ideal for medium to large organizations",
      features: [
        "Advanced AI threat detection",
        "Full autonomous response",
        "Behavioral analytics",
        "Zero trust implementation",
        "Priority support",
        "Custom training",
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: true
    },
    {
      name: "Government",
      price: "$4,999",
      period: "/month",
      description: "For government agencies and critical infrastructure",
      features: [
        "Custom AI models",
        "FedRAMP compliance",
        "Advanced threat hunting",
        "API access",
        "Dedicated support",
        "White-label solution",
        "Security clearance support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Threat Detection",
      description: "AI-powered identification and analysis of cyber threats in real-time",
      icon: Eye
    },
    {
      title: "Incident Response",
      description: "Automated response and containment of security incidents",
      icon: AlertTriangle
    },
    {
      title: "Vulnerability Management",
      description: "Continuous scanning and patching of security vulnerabilities",
      icon: Bug
    },
    {
      title: "Compliance",
      description: "Automated compliance monitoring and reporting",
      icon: ShieldCheck
    }
  ];

  const securityServices = [
    "Network Security",
    "Endpoint Protection",
    "Cloud Security",
    "Application Security",
    "Data Protection",
    "Identity Management",
    "Threat Intelligence",
    "Incident Response",
    "Vulnerability Assessment",
    "Security Training"
  ];

  return (
    <EnhancedSEO data={SEOConfigs.aiAutonomousCybersecurityOperations}>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark">
        <SEO
          title="AI Autonomous Cybersecurity Operations - Next-Gen Security"
          description="Transform your cybersecurity with AI-powered threat detection, autonomous response systems, and 24/7 protection. Achieve 99.9% threat detection accuracy and automated incident response."
          keywords="AI cybersecurity, autonomous security, threat detection, incident response, zero trust, network security, endpoint protection, security automation"
          canonical="https://ziontechgroup.com/services/ai-autonomous-cybersecurity-operations"
        />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-red-900/20 to-purple-900/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                New for 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Cybersecurity Operations
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your cybersecurity with AI-powered threat detection, autonomous response systems, 
                and 24/7 protection. Achieve 99.9% threat detection accuracy and automated incident response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-orange-400/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Security Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Security Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines advanced machine learning with cybersecurity expertise 
                to deliver autonomous threat detection, response, and protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Security Platform?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the future of cybersecurity with AI-powered threat detection, 
                autonomous response, and continuous protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Security Coverage
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI platform covers all aspects of cybersecurity, providing 
                comprehensive protection across your entire digital infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {securityServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 text-center hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-sm font-medium text-white">{service}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Specialized Security Applications
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From threat detection to incident response, our AI platform delivers specialized 
                security capabilities for every cybersecurity need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <useCase.icon className="w-10 h-10 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Security-Focused Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your organization's security needs. 
                All plans include our core AI security features and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zion-blue-dark border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-orange-400/50 bg-orange-500/5' 
                      : 'border-zion-purple/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Digital Assets?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading organizations that have already revolutionized 
                their cybersecurity with AI-powered autonomous protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-orange-400/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Security Assessment
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                  <span>Free security assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                  <span>SOC 2 compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                  <span>24/7 security monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedSEO>
  );
};

export default AIAutonomousCybersecurityOperations;