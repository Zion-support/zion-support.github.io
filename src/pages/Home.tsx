import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Atom,
  Brain,
  Building,
  Car,
  CheckCircle,
  Clock,
  Cloud,
  Cpu,
  DollarSign,
  Globe2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.",
      icon: Brain,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      icon: Atom,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Blockchain Technology",
      description: "Secure and decentralized solutions for modern businesses with smart contracts and DeFi platforms.",
      icon: Shield,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT infrastructure management, cloud solutions, and digital transformation services.",
      icon: Cloud,
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      title: "Innovation",
      description: "Cutting-edge technology solutions that drive business growth and efficiency.",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      title: "Excellence",
      description: "World-class service delivery with attention to detail and quality.",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Reliability",
      description: "Dependable solutions that you can count on for your business success.",
      icon: Shield,
      color: "text-purple-600"
    },
    {
      title: "Growth",
      description: "Scalable solutions that grow with your business needs.",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-6"
            >
              Revolutionary Technology Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              We deliver cutting-edge AI, quantum computing, and blockchain solutions 
              that transform businesses and shape the future of technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our revolutionary technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;