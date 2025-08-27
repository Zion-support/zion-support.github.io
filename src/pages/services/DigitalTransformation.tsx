import React from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Zap, 
  Users, 
  BarChart3, 
  Shield, 
  Cloud,
  Globe,
  Cpu,
  Database,
  Network,
  Lock
} from 'lucide-react';

const DigitalTransformation = () => {
  const transformationServices = [
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      icon: Zap,
      features: ["Process mapping", "Automation", "Performance metrics", "Continuous improvement"]
    },
    {
      title: "Customer Experience",
      description: "Transform customer interactions with digital solutions",
      icon: Users,
      features: ["User journey mapping", "Digital touchpoints", "Personalization", "Feedback systems"]
    },
    {
      title: "Data & Analytics",
      description: "Leverage data for informed decision-making",
      icon: BarChart3,
      features: ["Data collection", "Analytics platforms", "Business intelligence", "Predictive modeling"]
    },
    {
      title: "Cloud Migration",
      description: "Modernize infrastructure with cloud solutions",
      icon: Cloud,
      features: ["Migration planning", "Cloud strategy", "Cost optimization", "Performance tuning"]
    }
  ];

  const transformationAreas = [
    { 
      area: "Business Processes", 
      solutions: ["Workflow automation", "Process optimization", "Digital workflows", "Performance monitoring"] 
    },
    { 
      area: "Technology Infrastructure", 
      solutions: ["Cloud migration", "Modern architecture", "Integration", "Scalability"] 
    },
    { 
      area: "Data & Analytics", 
      solutions: ["Data strategy", "Analytics platforms", "Business intelligence", "Data governance"] 
    },
    { 
      area: "Customer Experience", 
      solutions: ["Digital touchpoints", "User experience", "Customer journey", "Feedback systems"] 
>>>>>>> 21609cb0b9465853a33ecfd9fe47ae5458ef4cd4
    }
  ];

  const benefits = [
<<<<<<< HEAD
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
=======
    "Improved operational efficiency and productivity",
    "Enhanced customer experience and satisfaction",
    "Better data-driven decision making",
    "Reduced operational costs and complexity",
    "Increased agility and innovation capability",
    "Competitive advantage in digital markets"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group"
        description="Comprehensive digital transformation services to modernize your business operations and customer experience."
        keywords="digital transformation, process automation, customer experience, data analytics, cloud migration"
        canonical="https://ziontechgroup.com/services/digital-transformation"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Digital Transformation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Digitally</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate your business growth with comprehensive digital transformation 
              services that modernize operations, enhance customer experience, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end digital transformation solutions designed to modernize your business 
              and create competitive advantages in the digital economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformation Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive coverage across all critical transformation domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                <ul className="space-y-2">
                  {area.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> 21609cb0b9465853a33ecfd9fe47ae5458ef4cd4
          </div>
        </section>

<<<<<<< HEAD
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
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with digital innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
>>>>>>> 21609cb0b9465853a33ecfd9fe47ae5458ef4cd4
          </div>
        </section>

<<<<<<< HEAD
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
=======
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our digital transformation experts help you modernize your operations, 
            enhance customer experience, and drive innovation in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Transformation Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> 21609cb0b9465853a33ecfd9fe47ae5458ef4cd4
  );
};

export default DigitalTransformation;
