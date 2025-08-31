import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {
  Shield,
  Eye,
  AlertTriangle,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Globe,
  Database,
  Cpu,
  Lock,
  Activity,
  Network,
  Server,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Brain,
  BarChart3,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  Fingerprint,
  Key,
  Monitor,
  Search,
  Filter,
  Bell,
  Settings
} from 'lucide-react';

export default function AICybersecurityThreatDetectionEnterprise() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and analyze threats in real-time with 99.9% accuracy, reducing false positives by 95%."
    },
    {
      icon: Eye,
      title: "24/7 Network Monitoring",
      description: "Continuous monitoring of your entire network infrastructure, including endpoints, servers, cloud services, and IoT devices."
    },
    {
      icon: Shield,
      title: "Zero-Day Threat Protection",
      description: "Behavioral analysis and anomaly detection that identifies unknown threats before they can cause damage to your systems."
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to threats within seconds, containing and neutralizing attacks before they spread."
    },
    {
      icon: Network,
      title: "Threat Intelligence Integration",
      description: "Real-time integration with global threat intelligence feeds, providing context and attribution for detected threats."
    },
    {
      icon: Users,
      title: "Advanced User Behavior Analytics",
      description: "AI-driven analysis of user behavior patterns to detect insider threats and compromised accounts in real-time."
    }
  ];

  const pricing = [
    {
      name: "Essential",
      price: "$3,499",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 endpoints",
        "Basic AI threat detection",
        "24/7 monitoring",
        "Email alerts",
        "Standard reporting",
        "Cloud deployment"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$6,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 500 endpoints",
        "Advanced AI detection",
        "Automated response",
        "Custom dashboards",
        "Priority support",
        "Hybrid deployment"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$14,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Full automation",
        "White-label solution",
        "24/7 dedicated support",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "99.9% Threat Detection Rate",
      description: "Our AI algorithms detect threats with industry-leading accuracy, ensuring comprehensive protection."
    },
    {
      icon: Clock,
      title: "Response Time < 30 Seconds",
      description: "Automated threat response eliminates manual intervention and reduces attack impact significantly."
    },
    {
      icon: TrendingUp,
      title: "Reduce Security Costs by 40%",
      description: "Automation and AI reduce the need for large security teams while improving protection."
    },
    {
      icon: Users,
      title: "24/7 Security Operations",
      description: "Continuous monitoring and automated response provide round-the-clock protection without human fatigue."
    }
  ];

  const threatTypes = [
    {
      icon: AlertTriangle,
      title: "Malware & Ransomware",
      description: "Advanced detection of sophisticated malware, including zero-day variants and polymorphic threats."
    },
    {
      icon: Network,
      title: "Network Attacks",
      description: "Real-time detection of DDoS attacks, port scanning, and network intrusion attempts."
    },
    {
      icon: Users,
      title: "Insider Threats",
      description: "Behavioral analysis to identify compromised accounts and malicious insider activities."
    },
    {
      icon: Server,
      title: "Application Vulnerabilities",
      description: "Continuous scanning and monitoring of web applications and APIs for security weaknesses."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Cybersecurity Threat Detection Enterprise | Zion Tech Group"
        description="Protect your organization with our enterprise-grade AI Cybersecurity Threat Detection platform. Real-time monitoring, automated response, and 99.9% threat detection accuracy."
        keywords="AI cybersecurity, threat detection, enterprise security, cybersecurity platform, AI security, threat intelligence, automated response"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Threat Detection Enterprise
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with the most advanced AI-powered cybersecurity platform. 
              Get 99.9% threat detection accuracy, automated response, and 24/7 protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with enterprise-grade security features 
              to provide comprehensive protection against all types of cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform detects and protects against all types of cyber threats, 
              from sophisticated malware to insider attacks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <threat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{threat.title}</h3>
                  <p className="text-gray-300">{threat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Security Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations using our platform have achieved remarkable results in threat detection, 
              response time, and overall security posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that best fits your organization's size and protection needs. 
              All plans include our core AI capabilities and enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-gradient-to-br from-slate-800/50 to-red-500/10' 
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
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
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations that have transformed their cybersecurity 
              with our AI-powered threat detection platform. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our AI Cybersecurity Threat Detection platform? 
                Our security experts are here to help you find the perfect solution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-red-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200">
                Contact Security Team
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}