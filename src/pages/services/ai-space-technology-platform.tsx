import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Brain, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Monitor,
  Shield,
  Lock,
  Building,
  Cpu,
  Database,
  Network,
  Target
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISpaceTechnologyPlatform() {
  const features = [
    {
      title: "Satellite Data Analysis",
      description: "AI-powered processing of satellite imagery and space data for insights",
      icon: Satellite,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Space Mission Planning",
      description: "Intelligent mission design and trajectory optimization using AI algorithms",
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Astronomical Research",
      description: "AI-driven analysis of celestial data and space phenomena",
      icon: Globe,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Space Weather Monitoring",
      description: "Real-time monitoring and prediction of space weather events",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Autonomous Space Systems",
      description: "AI-powered autonomous navigation and decision-making for space vehicles",
      icon: Brain,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Space Debris Tracking",
      description: "Intelligent monitoring and collision avoidance for space debris",
      icon: Target,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Advanced space data analysis and insights",
    "Improved mission success rates and efficiency",
    "Real-time space weather monitoring and alerts",
    "Enhanced satellite operations and maintenance",
    "Autonomous space system capabilities",
    "Cost-effective space exploration solutions"
  ];

  const useCases = [
    {
      title: "Satellite Operations",
      description: "AI-powered satellite management and data processing",
      icon: Satellite
    },
    {
      title: "Space Exploration",
      description: "Mission planning and autonomous navigation systems",
      icon: Rocket
    },
    {
      title: "Earth Observation",
      description: "Environmental monitoring and climate change analysis",
      icon: Globe
    },
    {
      title: "Space Research",
      description: "Astronomical data analysis and scientific discovery",
      icon: Star
    }
  ];

  const technologies = [
    "Machine Learning & Deep Learning",
    "Computer Vision & Image Processing",
    "Autonomous Navigation Systems",
    "Real-time Data Processing",
    "Cloud Computing & Edge Processing",
    "Satellite Communication Protocols"
  ];

  return (
    <>
      <SEO 
        title="AI Space Technology Platform Development | Zion Tech Group"
        description="Revolutionize space technology with AI-powered platforms. Satellite operations, space mission planning, and autonomous space systems."
        keywords="ai space technology, satellite operations, space mission planning, autonomous space systems, space data analysis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                AI-Powered Space Technology
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Explore the
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"> Universe</span>
                with AI
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize space technology with AI-powered platforms. From satellite operations to space mission planning, 
                create the future of space exploration and research.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-200"
                >
                  Schedule Demo
                </Link>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Space Technology Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge AI capabilities designed for space exploration and satellite operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-indigo-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI-Powered Space Technology?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of intelligent space technology platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space Technology Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Versatile AI-powered solutions for space exploration and satellite operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-indigo-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with the latest AI and space technology innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-indigo-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore Space with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's build the future of space technology together with AI-powered platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}