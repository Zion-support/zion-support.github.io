import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Satellite, 
  Globe, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Rocket, 
  Server,
  ArrowRight,
  Wifi,
  Activity,
  Lock,
  TrendingUp,
  CheckCircle,
  Orbit,
  Eye
} from 'lucide-react';

const SpaceTechSolutions = () => {
  const features = [
    {
      icon: <Satellite className="w-6 h-6" />,
      title: "Satellite Communications",
      description: "Advanced satellite communication systems for global connectivity and data transmission."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Earth Observation",
      description: "Satellite-based earth observation and remote sensing for environmental monitoring."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Space Data Analytics",
      description: "AI-powered analytics for processing and interpreting space-based data and imagery."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Space Cybersecurity",
      description: "Advanced security protocols for space systems and satellite communications."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Space Data Management",
      description: "Efficient storage and management of massive amounts of space data and imagery."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Ground Station Operations",
      description: "Automated ground station operations and satellite tracking systems."
    }
  ];

  const useCases = [
    {
      title: "Climate Monitoring",
      description: "Real-time climate and environmental monitoring using satellite data and AI analytics.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Disaster Response",
      description: "Rapid disaster assessment and response coordination using space-based imagery.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Agriculture",
      description: "Precision agriculture and crop monitoring through satellite imagery and analytics.",
      icon: <Satellite className="w-8 h-8" />
    },
    {
      title: "Urban Planning",
      description: "Smart city development and urban planning using space-based data and insights.",
              icon: <Eye className="w-8 h-8" />
    }
  ];

  const technologies = [
    "GPS", "Satellite Imagery", "Remote Sensing", "AI Analytics", "Cloud Computing", "IoT Integration", "5G Networks", "Quantum Computing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Space Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore the final frontier with cutting-edge space technology solutions. 
              From satellite communications to earth observation, we're building the future of space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space technology solutions cover the entire spectrum of space operations and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-indigo-400 transition-all duration-300"
              >
                <div className="text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Earth Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how space technology is solving real-world problems on Earth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-400 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver innovative space solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-indigo-400 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how space technology can transform your business and contribute to humanity's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/space-tech"
                className="inline-flex items-center px-8 py-4 border border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechSolutions;