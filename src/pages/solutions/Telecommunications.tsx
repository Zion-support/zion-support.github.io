import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Signal, 
  Wifi, 
  Smartphone, 
  Satellite, 
  Building2, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap, 
  Network,
  Router,
  Antenna,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Target,
  Award,
  CheckCircle
} from 'lucide-react';

export default function Telecommunications() {
  const features = [
    {
      icon: Signal,
      title: "5G Network Optimization",
      description: "AI-powered 5G network management for optimal performance, coverage, and user experience."
    },
    {
      icon: Wifi,
      title: "Smart Network Management",
      description: "Intelligent network monitoring, predictive maintenance, and automated optimization."
    },
    {
      icon: Smartphone,
      title: "Mobile Network Intelligence",
      description: "Advanced mobile network analytics and user behavior insights for better service delivery."
    },
    {
      icon: Satellite,
      title: "Satellite Communication",
      description: "AI-enhanced satellite network management and global connectivity solutions."
    },
    {
      icon: Building2,
      title: "Infrastructure Optimization",
      description: "Smart infrastructure management and optimization for maximum efficiency."
    },
    {
      icon: Globe,
      title: "Global Network Operations",
      description: "Worldwide network operations center with AI-powered monitoring and control."
    }
  ];

  const solutions = [
    {
      title: "Network Intelligence Platform",
      description: "Comprehensive AI platform for network monitoring, optimization, and predictive analytics.",
      features: ["Real-time monitoring", "Predictive maintenance", "Performance optimization", "Automated troubleshooting"]
    },
    {
      title: "5G Network Management",
      description: "Advanced 5G network management with AI-driven optimization and resource allocation.",
      features: ["Dynamic resource allocation", "Quality of service management", "Network slicing", "Edge computing integration"]
    },
    {
      title: "Customer Experience Analytics",
      description: "AI-powered analytics to understand and improve customer experience across all touchpoints.",
      features: ["Behavioral analysis", "Service quality metrics", "Predictive customer needs", "Personalized services"]
    },
    {
      title: "Security & Compliance",
      description: "Comprehensive security solutions for telecommunications networks and data protection.",
      features: ["Threat detection", "Compliance monitoring", "Data encryption", "Access control"]
    }
  ];

  const technologies = [
    "5G & 6G Networks",
    "Artificial Intelligence",
    "Machine Learning",
    "Edge Computing",
    "Cloud Computing",
    "IoT Integration",
    "Blockchain Security",
    "Quantum Computing",
    "Network Virtualization",
    "Software-Defined Networks"
  ];

  const benefits = [
    "Improve network performance by 40%",
    "Reduce operational costs by 35%",
    "Enhance customer satisfaction by 50%",
    "Increase network reliability by 60%",
    "Enable predictive maintenance",
    "Optimize resource utilization"
  ];

  const caseStudies = [
    {
      title: "Global Telecom Provider",
      description: "Implemented AI network optimization, achieving 40% performance improvement and 35% cost reduction.",
      metrics: ["40% performance improvement", "35% cost reduction", "60% faster issue resolution"]
    },
    {
      title: "Regional Mobile Operator",
      description: "Deployed smart network management, resulting in 50% better customer experience and 30% efficiency gains.",
      metrics: ["50% customer experience improvement", "30% efficiency gains", "45% network reliability increase"]
    },
    {
      title: "Satellite Communications Company",
      description: "Integrated AI satellite management, achieving 25% better coverage and 40% operational efficiency.",
      metrics: ["25% coverage improvement", "40% operational efficiency", "35% maintenance cost reduction"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Telecommunications Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your telecommunications business with Zion Tech Group's AI-powered network management, 5G optimization, and intelligent infrastructure solutions. Improve performance, reduce costs, and enhance customer experience." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/telecommunications" />
        <meta name="keywords" content="AI telecommunications solutions, 5G network management, network optimization, telecom infrastructure, network intelligence, 5G optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Telecommunications</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your telecommunications infrastructure with cutting-edge AI technology. Optimize networks, enhance performance, and deliver superior customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Telecom Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered solutions transform every aspect of telecommunications operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Telecom Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end solutions that transform your telecommunications infrastructure and operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on the latest advancements in telecommunications, AI, and network technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center hover:border-blue-500 transition-all duration-300"
              >
                <p className="text-white font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Telecom Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Achieve unprecedented results with our AI-powered telecommunications solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how leading telecommunications companies are transforming their operations with our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Telecom Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the AI revolution in telecommunications and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Ready to get started? Contact our telecommunications solutions experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
            <span>Email: telecom@ziontechgroup.com</span>
            <span>Phone: +1 (555) 123-4567</span>
            <span>Support: 24/7 Available</span>
          </div>
        </div>
      </section>
    </div>
  );
}