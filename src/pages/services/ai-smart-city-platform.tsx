import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  TrafficCone, 
  Lightbulb, 
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
  Cpu,
  Database,
  Network,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  ArrowRight,
  Leaf,
  Car,
  Wifi,
  Camera,
  Gauge,
  Activity,
  Smartphone,
  Satellite,
  Cloud,
  Server
} from 'lucide-react';

export default function AISmartCityPlatform() {
  const features = [
    "AI-powered traffic management with real-time optimization",
    "Smart energy grid management and demand forecasting",
    "Intelligent waste management and recycling optimization",
    "Public safety monitoring with predictive crime prevention",
    "Environmental monitoring and air quality management",
    "Smart parking systems with mobile app integration",
    "Public transportation optimization and route planning",
    "Water management and leak detection systems",
    "Noise pollution monitoring and control",
    "Citizen engagement platform with mobile applications"
  ];

  const benefits = [
    "Reduce traffic congestion by 35-50% with AI optimization",
    "Lower energy consumption by 25-40% through smart grids",
    "Improve public safety response times by 60-80%",
    "Cut operational costs by 30-45% with automation",
    "Enhance citizen satisfaction scores by 40-60%",
    "Reduce carbon emissions by 20-35% with smart systems",
    "Optimize resource allocation and reduce waste by 25-40%",
    "Improve emergency response coordination by 70-90%",
    "Real-time data insights for better decision making",
    "Scalable solution for cities of all sizes"
  ];

  const useCases = [
    "Metropolitan area traffic management",
    "Smart grid and renewable energy integration",
    "Public transportation optimization",
    "Environmental monitoring and sustainability",
    "Public safety and emergency response",
    "Waste management and recycling",
    "Water and sewage management",
    "Air quality and pollution control",
    "Noise monitoring and urban planning",
    "Citizen services and engagement"
  ];

  const technologies = [
    "Machine Learning & Deep Neural Networks",
    "IoT Sensors and Edge Computing",
    "Computer Vision for Traffic Analysis",
    "Natural Language Processing for Citizen Services",
    "5G Networks for Real-time Communication",
    "Blockchain for Data Security",
    "Cloud-native Architecture (AWS/Azure/GCP)",
    "Predictive Analytics & Time Series Forecasting",
    "Mobile Applications & APIs",
    "Real-time Data Processing & Analytics"
  ];

  const cityModules = [
    {
      name: "Smart Traffic Management",
      description: "AI-powered traffic signal optimization, congestion prediction, and emergency vehicle routing",
      price: "$15,000/month",
      features: ["Real-time traffic monitoring", "AI signal optimization", "Emergency vehicle priority", "Congestion prediction"]
    },
    {
      name: "Smart Energy Grid",
      description: "Intelligent energy distribution, demand forecasting, and renewable integration",
      price: "$12,000/month",
      features: ["Demand forecasting", "Grid optimization", "Renewable integration", "Peak load management"]
    },
    {
      name: "Public Safety Platform",
      description: "Predictive policing, emergency response coordination, and surveillance analytics",
      price: "$18,000/month",
      features: ["Crime prediction", "Emergency coordination", "Video analytics", "Response optimization"]
    },
    {
      name: "Environmental Monitoring",
      description: "Air quality monitoring, noise pollution control, and sustainability tracking",
      price: "$8,000/month",
      features: ["Air quality sensors", "Noise monitoring", "Pollution tracking", "Sustainability metrics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Smart City Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered smart city platform for urban infrastructure management. Reduce traffic by 35-50%, lower energy consumption by 25-40%, and improve public safety by 60-80%." />
        <meta name="keywords" content="AI smart city, urban infrastructure, traffic management, smart grid, public safety, environmental monitoring, IoT sensors" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-smart-city-platform" />
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
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart City Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform urban infrastructure with AI-powered smart city solutions. 
              Reduce traffic by 35-50%, lower energy consumption by 25-40%, and 
              improve public safety by 60-80% with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
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
              className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
            >
              <TrafficCone className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">35-50%</div>
              <div className="text-gray-300">Traffic Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
            >
              <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-gray-300">Energy Savings</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30"
            >
              <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">60-80%</div>
              <div className="text-gray-300">Safety Response</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-500/30"
            >
              <Leaf className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">20-35%</div>
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
              Advanced Smart City Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform integrates multiple urban systems to create 
              a truly intelligent and sustainable city infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30 hover:border-green-500/50 transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
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
              Transform Your City Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency, sustainability, and citizen 
              satisfaction with our AI-powered smart city platform.
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
              Urban Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse urban needs with specialized solutions 
              for every city infrastructure challenge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <Lightbulb className="h-8 w-8 text-green-400 mb-4" />
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
              maximum performance and urban scalability.
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

      {/* City Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modular Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the modules you need with flexible pricing and 
              seamless integration capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{module.name}</h3>
                <p className="text-gray-300 mb-6">{module.description}</p>
                <div className="text-3xl font-bold text-green-400 mb-6">{module.price}</div>
                <ul className="space-y-3 mb-8">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your city's needs with flexible 
              pricing and comprehensive support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-green-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Basic City</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">
                $25,000<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Up to 3 city modules
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Basic AI optimization
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
              <button className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl border-2 border-green-400 transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional City</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $75,000<span className="text-lg text-green-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Up to 8 city modules
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
              <button className="w-full py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise City</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                Custom<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  All city modules
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Smart City?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our smart city experts for a personalized 
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
                <div className="p-3 bg-green-500 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
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
                  placeholder="City/Government Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your smart city needs"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
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