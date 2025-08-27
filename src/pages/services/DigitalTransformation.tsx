import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  CheckCircle, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  ArrowRight
} from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com"
  };

  const transformationServices = [
    {
      icon: "🚀",
      title: "Digital Strategy & Consulting",
      description: "Comprehensive digital transformation roadmap and strategic planning.",
      features: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Change management planning",
        "ROI analysis and forecasting"
      ]
    },
    {
      icon: "💻",
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable digital solutions.",
      features: [
        "System architecture redesign",
        "Cloud migration strategies",
        "API development and integration",
        "Performance optimization"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern digital operations.",
      features: [
        "Multi-cloud strategy",
        "Infrastructure as Code",
        "Automated scaling",
        "Cost optimization"
      ]
    },
    {
      icon: "🔒",
      title: "Cybersecurity Enhancement",
      description: "Advanced security measures for digital transformation initiatives.",
      features: [
        "Zero-trust architecture",
        "Identity and access management",
        "Threat detection and response",
        "Compliance automation"
      ]
    },
    {
      icon: "📊",
      title: "Data Analytics & AI",
      description: "Leverage data insights and AI for competitive advantage.",
      features: [
        "Data strategy and governance",
        "Business intelligence platforms",
        "Machine learning implementation",
        "Predictive analytics"
      ]
    },
    {
      icon: "🤝",
      title: "Customer Experience",
      description: "Digital-first customer engagement and experience optimization.",
      features: [
        "Omnichannel strategies",
        "Personalization engines",
        "Customer journey mapping",
        "Feedback and analytics"
      ]
    }
  ];

  const benefits = [
    "Increased operational efficiency and productivity",
    "Enhanced customer engagement and satisfaction",
    "Improved decision-making through data insights",
    "Reduced operational costs and overhead",
    "Faster time-to-market for new products/services",
    "Better employee productivity and satisfaction"
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation — Zion Tech Group | Business Modernization Services</title>
        <meta name="description" content="Transform your business with Zion Tech Group's digital transformation services. Modernize operations, enhance customer experience, and drive growth."/>
        <meta property="og:title" content="Digital Transformation — Zion Tech Group"/>
        <meta property="og:description" content="Comprehensive digital transformation solutions to modernize your business and drive competitive advantage."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/digital-transformation"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/digital-transformation"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital Transformation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge digital solutions that drive growth, 
              efficiency, and competitive advantage in the modern marketplace.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Started Today
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Learn More
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Digital Transformation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital transformation solutions designed to modernize your business 
                and position you for long-term success in the digital economy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Digital Transformation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Digital transformation is not just about technology—it's about fundamentally 
                changing how your business operates and delivers value to customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Benefit {index + 1}</h3>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our digital transformation experts help you navigate the journey to a 
              modern, efficient, and competitive digital business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformation;
