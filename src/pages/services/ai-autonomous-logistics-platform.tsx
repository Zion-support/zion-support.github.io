import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Target,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  ArrowRight,
  Leaf
} from 'lucide-react';

export default function AIAutonomousLogisticsPlatform() {
  const features = [
    "AI-powered route optimization with real-time traffic analysis",
    "Autonomous vehicle fleet management and coordination",
    "Predictive demand forecasting and inventory optimization",
    "Real-time shipment tracking with blockchain verification",
    "Smart warehouse automation and robotic picking systems",
    "Multi-modal transportation optimization (air, sea, land)",
    "Carbon footprint tracking and sustainability analytics",
    "Custom API integrations with major logistics platforms",
    "Advanced analytics dashboard with predictive insights",
    "24/7 AI customer support and issue resolution"
  ];

  const benefits = [
    "Reduce logistics costs by 30-45% through AI optimization",
    "Improve delivery accuracy to 99.8% with autonomous systems",
    "Cut carbon emissions by 25-40% with smart routing",
    "Increase warehouse efficiency by 50-70%",
    "Real-time visibility across entire supply chain",
    "Predictive maintenance reduces downtime by 60%",
    "Scalable solution for businesses of all sizes",
    "Compliance with international logistics standards",
    "Seamless integration with existing ERP systems",
    "AI-powered risk assessment and mitigation"
  ];

  const useCases = [
    "E-commerce fulfillment and last-mile delivery",
    "Manufacturing supply chain optimization",
    "Cold chain logistics for pharmaceuticals",
    "International trade and customs clearance",
    "Bulk cargo and container shipping",
    "Express delivery and time-sensitive shipments",
    "Reverse logistics and returns management",
    "Multi-warehouse network optimization",
    "Cross-border e-commerce logistics",
    "Emergency logistics and disaster response"
  ];

  const technologies = [
    "Machine Learning & Deep Neural Networks",
    "Computer Vision for Package Recognition",
    "Natural Language Processing for Documentation",
    "IoT Sensors and Edge Computing",
    "Blockchain for Supply Chain Transparency",
    "5G Networks for Real-time Communication",
    "Autonomous Vehicle Technology",
    "Predictive Analytics & Time Series Forecasting",
    "Cloud-native Architecture (AWS/Azure/GCP)",
    "Microservices & API-first Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Logistics Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered logistics platform with autonomous vehicles, predictive analytics, and real-time optimization. Reduce costs by 30-45% and improve efficiency by 50-70%." />
        <meta name="keywords" content="AI logistics, autonomous vehicles, supply chain optimization, warehouse automation, route optimization, predictive analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-logistics-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                <Truck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Logistics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your supply chain with AI-powered autonomous logistics. 
              Reduce costs by 30-45%, improve efficiency by 50-70%, and achieve 
              99.8% delivery accuracy with our cutting-edge platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
            >
              <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">30-45%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
            >
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50-70%</div>
              <div className="text-gray-300">Efficiency Improvement</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
            >
              <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-gray-300">Delivery Accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30"
            >
              <Leaf className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-gray-300">Carbon Reduction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with industry expertise 
              to deliver unprecedented logistics optimization and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-white text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Logistics Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency, cost savings, and operational 
              excellence with our AI-powered logistics platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-500/30"
              >
                <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse industries with specialized solutions 
              for every logistics challenge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <Package className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest AI, IoT, and cloud technologies for 
              maximum performance and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-500/30"
              >
                <Cpu className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-gray-200 text-lg">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs with flexible 
              pricing and no hidden costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">
                $2,999<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Up to 100 shipments/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Basic AI route optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Standard analytics dashboard
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl border-2 border-blue-400 transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $7,999<span className="text-lg text-blue-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Up to 1,000 shipments/month
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Advanced AI optimization
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Predictive analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                Custom<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Unlimited shipments
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Full AI autonomy
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  White-label solution
                </li>
              </ul>
              <button className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our logistics experts for a personalized 
              consultation and demo of our AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Address</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl border border-slate-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your logistics needs"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Request Free Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}