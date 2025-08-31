import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Shield, 
  Atom, 
  Network, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Zap,
  Brain,
  Globe
} from 'lucide-react';

const EnterpriseServicesShowcase2025: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />,
      title: "AI Business Intelligence Platform Enterprise",
      description: "Transform your business with AI-powered predictive analytics, real-time BI dashboards, and automated insights that drive 25% revenue growth.",
      keyFeatures: [
        "AI-Powered Predictive Analytics",
        "Real-Time BI Dashboard",
        "Multi-User Collaboration",
        "Enterprise Security (SOC 2)",
        "Data Integration Hub",
        "Automated Insights"
      ],
      pricing: "Starting at $2,999/month",
      route: "/services/ai-business-intelligence-platform-enterprise",
      color: "cyan"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: "AI Cybersecurity Threat Detection Enterprise",
      description: "Protect your enterprise with 99.9% threat detection accuracy, 24/7 monitoring, and automated response capabilities that reduce security costs by 40%.",
      keyFeatures: [
        "AI-Powered Threat Detection",
        "24/7 Security Monitoring",
        "Automated Response",
        "Zero-Day Protection",
        "Multi-Layer Defense",
        "Compliance & Reporting"
      ],
      pricing: "Starting at $3,499/month",
      route: "/services/ai-cybersecurity-threat-detection-enterprise",
      color: "red"
    },
    {
      icon: <Atom className="w-12 h-12 text-purple-400" />,
      title: "AI Quantum Computing Solutions Enterprise",
      description: "Unlock the future of computing with 1000x faster processing, AI-enhanced quantum algorithms, and real-time error correction for breakthrough computational capabilities.",
      keyFeatures: [
        "Quantum-Classical Hybrid Computing",
        "AI-Enhanced Quantum Algorithms",
        "Real-Time Error Correction",
        "Quantum-Safe Security",
        "Distributed Quantum Computing",
        "Quantum Data Management"
      ],
      pricing: "Starting at $4,999/month",
      route: "/services/ai-quantum-computing-solutions-enterprise",
      color: "purple"
    },
    {
      icon: <Network className="w-12 h-12 text-green-400" />,
      title: "AI Blockchain Web3 Solutions Enterprise",
      description: "Revolutionize your business with intelligent smart contracts, automated DeFi strategies, and seamless multi-chain integration that reduces costs by 60%.",
      keyFeatures: [
        "AI-Powered Smart Contracts",
        "Multi-Chain Integration",
        "Automated DeFi Strategies",
        "Enhanced Security",
        "Decentralized Data Management",
        "Web3 Infrastructure"
      ],
      pricing: "Starting at $3,999/month",
      route: "/services/ai-blockchain-web3-solutions-enterprise",
      color: "green"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Unmatched Performance",
      description: "Experience 10x to 1000x improvements in processing speed, accuracy, and efficiency across all enterprise operations."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI-Powered Intelligence",
      description: "Leverage advanced machine learning algorithms for predictive analytics, automated decision-making, and intelligent process optimization."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and comprehensive audit trails for complete peace of mind."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Scalability",
      description: "Built for enterprise scale with unlimited scalability, multi-region deployment, and 24/7 global support coverage."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive suite of enterprise-grade AI services including Business Intelligence, Cybersecurity, Quantum Computing, and Blockchain Web3 solutions." />
        <meta name="keywords" content="enterprise AI services, business intelligence, cybersecurity, quantum computing, blockchain, Web3, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise Services Showcase
                <span className="text-cyan-400 block">2025</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover Zion Tech Group's comprehensive suite of enterprise-grade AI services. 
                Transform your business with cutting-edge technology that delivers measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Four revolutionary services designed to transform your enterprise operations
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-${service.color}-500 transition-colors`}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className={`w-4 h-4 text-${service.color}-400 mr-2 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  <Link
                    to={service.route}
                    className={`w-full bg-${service.color}-500 hover:bg-${service.color}-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enterprise-grade solutions with proven results and unmatched support
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
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Join leading enterprises that trust Zion Tech Group for their AI transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <p className="text-xl text-gray-300 mb-8">
                Ready to discuss your enterprise AI transformation? Contact our team today.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
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

export default EnterpriseServicesShowcase2025;