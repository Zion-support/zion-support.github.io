import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Globe,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
  Phone,
  Mail,
  MapPin,
  Zap,
  Target,
  Users,
  BarChart3,
  Activity,
  Network,
  Server,
  Key,
  Fingerprint,
  ShieldCheck,
  AlertCircle,
  Search,
  Monitor,
  FileText,
  Globe2,
  Smartphone,
  Laptop
} from 'lucide-react';

export default function AICybersecurityThreatIntelligenceAdvanced() {
  const features = [
    "Real-time Threat Detection & Analysis",
    "AI-Powered Behavioral Analytics",
    "Advanced Malware Detection Engine",
    "Zero-Day Threat Prevention",
    "Intelligent Incident Response Automation",
    "Threat Intelligence Sharing Network",
    "Advanced Persistent Threat (APT) Detection",
    "Cloud Security Posture Management",
    "IoT & OT Security Monitoring",
    "Compliance & Regulatory Reporting"
  ];

  const benefits = [
    "Detect threats 10x faster than traditional methods",
    "Reduce false positives by 90%",
    "Prevent 99.9% of cyber attacks",
    "Reduce incident response time by 80%",
    "Achieve 100% compliance with security standards",
    "Protect against emerging AI-powered threats"
  ];

  const threatTypes = [
    "Ransomware & Malware",
    "Phishing & Social Engineering",
    "Advanced Persistent Threats (APT)",
    "Zero-Day Exploits",
    "Insider Threats",
    "Supply Chain Attacks",
    "Cloud Security Breaches",
    "IoT Device Vulnerabilities"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email security",
        "24/7 monitoring",
        "Standard support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 1,000 endpoints",
        "Advanced AI threat detection",
        "Behavioral analytics",
        "Incident response automation",
        "Priority support",
        "Advanced reporting & analytics",
        "Threat intelligence feeds"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Advanced threat hunting",
        "Dedicated security team",
        "Custom integrations",
        "On-premise deployment",
        "Custom SLA & support"
      ],
      popular: false
    }
  ];

  const technologies = [
    "Machine Learning & AI",
    "Natural Language Processing",
    "Computer Vision",
    "Behavioral Analytics",
    "Threat Intelligence Feeds",
    "Cloud Security (AWS/Azure/GCP)",
    "Zero Trust Architecture",
    "Blockchain Security"
  ];

  const stats = [
    { number: "1M+", label: "Threats Blocked", icon: Shield },
    { number: "99.9%", label: "Detection Rate", icon: Eye },
    { number: "10x", label: "Faster Response", icon: Zap },
    { number: "24/7", label: "Protection", icon: Clock }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "NIST Cybersecurity Framework",
    "FedRAMP",
    "SOX Compliance"
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Threat Intelligence Advanced - Zion Tech Group | Next-Gen Cyber Defense</title>
        <meta name="description" content="Advanced AI-powered cybersecurity threat intelligence platform. Detect threats 10x faster, reduce false positives by 90%, and achieve 99.9% threat prevention." />
        <meta name="keywords" content="AI cybersecurity, threat intelligence, cyber defense, security monitoring, threat detection, AI security" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence-advanced" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2 text-red-400" />
                AI-Powered Cyber Defense
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Cybersecurity <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Threat Intelligence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Stay ahead of evolving cyber threats with our advanced AI-powered threat intelligence platform. 
                Detect threats 10x faster, reduce false positives by 90%, and achieve 99.9% threat prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-red-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform combines cutting-edge technology with military-grade security 
                to protect your organization from the most sophisticated cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Security Benefits</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Threat Protection</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform protects against all types of cyber threats, from basic malware to sophisticated 
                nation-state attacks and emerging AI-powered threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={threat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{threat}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Security Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs. All plans include a 30-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-red-500/50 bg-gradient-to-br from-zinc-800/50 to-red-900/20' 
                      : 'border-zinc-700/50'
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
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    Start Free Trial
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Compliance</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform meets the highest security and compliance standards, ensuring your organization 
                meets all regulatory requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300">{standard}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Security Tech</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with the latest AI and cybersecurity technologies to ensure your organization 
                stays protected against evolving threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600/20 to-orange-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Secure</span> Your Organization?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of organizations that trust our AI-powered cybersecurity platform. 
                Start your free trial today and experience the future of cyber defense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Touch</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Ready to enhance your cybersecurity posture? Our security experts are here to help.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Schedule Security Consultation
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}