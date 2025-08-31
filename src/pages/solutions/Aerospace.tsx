import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Satellite, 
  Rocket, 
  Navigation, 
  Shield, 
  Globe, 
  TrendingUp, 
  Zap, 
  Target, 
  Database,
  Cloud,
  Lock,
  BarChart3,
  Award,
  CheckCircle,
  Compass,
  Radar,
  Engine
} from 'lucide-react';

export default function Aerospace() {
  const features = [
    {
      icon: Plane,
      title: "Flight Operations Optimization",
      description: "AI-powered flight planning, route optimization, and operational efficiency enhancement."
    },
    {
      icon: Satellite,
      title: "Satellite Systems Management",
      description: "Intelligent satellite operations, orbit management, and communication optimization."
    },
    {
      icon: Rocket,
      title: "Launch Vehicle Intelligence",
      description: "Advanced launch vehicle monitoring, predictive maintenance, and mission optimization."
    },
    {
      icon: Navigation,
      title: "Navigation & Control Systems",
      description: "AI-enhanced navigation systems, autonomous control, and precision guidance."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Comprehensive safety monitoring, threat detection, and security protocols."
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Worldwide aerospace operations with AI-powered monitoring and control."
    }
  ];

  const solutions = [
    {
      title: "Flight Management Platform",
      description: "Comprehensive AI platform for flight operations, planning, and optimization.",
      features: ["Route optimization", "Fuel efficiency", "Weather analysis", "Performance monitoring"]
    },
    {
      title: "Satellite Operations Center",
      description: "AI-driven satellite management with automated operations and predictive analytics.",
      features: ["Orbit management", "Communication optimization", "Predictive maintenance", "Mission planning"]
    },
    {
      title: "Launch Vehicle Systems",
      description: "Advanced monitoring and control systems for launch vehicles and space missions.",
      features: ["Real-time monitoring", "Predictive analytics", "Mission optimization", "Safety protocols"]
    },
    {
      title: "Aerospace Analytics",
      description: "Comprehensive analytics platform for aerospace operations and performance insights.",
      features: ["Performance metrics", "Operational insights", "Predictive modeling", "Risk assessment"]
    }
  ];

  const technologies = [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "IoT Sensors",
    "Edge Computing",
    "Cloud Computing",
    "Blockchain",
    "Quantum Computing",
    "5G Networks",
    "Satellite Technology"
  ];

  const benefits = [
    "Improve operational efficiency by 45%",
    "Reduce fuel consumption by 30%",
    "Enhance safety by 60%",
    "Increase mission success rate by 25%",
    "Enable predictive maintenance",
    "Optimize resource utilization"
  ];

  const caseStudies = [
    {
      title: "Commercial Airline",
      description: "Implemented AI flight optimization, achieving 30% fuel savings and 25% operational efficiency improvement.",
      metrics: ["30% fuel savings", "25% efficiency improvement", "40% cost reduction"]
    },
    {
      title: "Satellite Communications Company",
      description: "Deployed AI satellite management, resulting in 35% better coverage and 50% operational efficiency.",
      metrics: ["35% coverage improvement", "50% operational efficiency", "45% maintenance cost reduction"]
    },
    {
      title: "Space Launch Provider",
      description: "Integrated AI launch systems, achieving 20% higher mission success rate and 40% cost savings.",
      metrics: ["20% success rate increase", "40% cost savings", "30% faster mission planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Aerospace Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your aerospace operations with Zion Tech Group's AI-powered flight management, satellite operations, and launch vehicle intelligence solutions. Improve efficiency, enhance safety, and optimize mission success." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/aerospace" />
        <meta name="keywords" content="AI aerospace solutions, flight management, satellite operations, launch vehicle systems, aerospace analytics, flight optimization" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Aerospace Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your aerospace operations with cutting-edge AI technology. Optimize flights, enhance satellite operations, and maximize mission success with intelligent automation.
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
              Revolutionary Aerospace Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered solutions transform every aspect of aerospace operations
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
              Comprehensive Aerospace Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end solutions that transform your aerospace operations and mission success
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
              Built on the latest advancements in aerospace, AI, and space technology
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
              Transform Your Aerospace Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Achieve unprecedented results with our AI-powered aerospace solutions
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
              See how leading aerospace companies are transforming their operations with our solutions
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
              Ready to Transform Your Aerospace Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the AI revolution in aerospace and stay ahead of the competition
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
            Ready to get started? Contact our aerospace solutions experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
            <span>Email: aerospace@ziontechgroup.com</span>
            <span>Phone: +1 (555) 123-4567</span>
            <span>Support: 24/7 Available</span>
          </div>
        </div>
      </section>
    </div>
  );
}