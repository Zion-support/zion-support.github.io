import React from 'react';
import { motion } from 'framer-motion';

const UltimateServicesShowcase2025: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your business with intelligent automation that learns and adapts to your needs",
      icon: "🤖",
      features: ["Process Automation", "Predictive Analytics", "Intelligent Decision Making", "Cost Reduction"],
      price: "From $5,000/month",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem solving and optimization",
      icon: "⚛️",
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
      price: "From $10,000/month",
      category: "Quantum Tech"
    },
    {
      id: 3,
      title: "Neural Interface Development",
      description: "Develop direct brain-computer interfaces for enhanced human capabilities",
      icon: "🧬",
      features: ["BCI Development", "Neural Signal Processing", "Cognitive Enhancement", "Medical Applications"],
      price: "From $15,000/month",
      category: "Neural Tech"
    },
    {
      id: 4,
      title: "Blockchain & Web3 Solutions",
      description: "Build decentralized applications and smart contracts for the future of the internet",
      icon: "🔗",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces", "DAO Governance"],
      price: "From $8,000/month",
      category: "Blockchain"
    },
    {
      id: 5,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions with automated deployment and monitoring",
      icon: "☁️",
      features: ["Cloud Migration", "Container Orchestration", "CI/CD Pipelines", "Monitoring"],
      price: "From $3,000/month",
      category: "Cloud Services"
    },
    {
      id: 6,
      title: "Cybersecurity & Threat Intelligence",
      description: "Advanced security solutions to protect against evolving cyber threats",
      icon: "🛡️",
      features: ["Threat Detection", "Security Audits", "Penetration Testing", "Incident Response"],
      price: "From $6,000/month",
      category: "Security"
    },
    {
      id: 7,
      title: "Data Analytics & Business Intelligence",
      description: "Transform raw data into actionable insights for better decision making",
      icon: "📊",
      features: ["Data Visualization", "Predictive Modeling", "Real-time Analytics", "Custom Dashboards"],
      price: "From $4,000/month",
      category: "Analytics"
    },
    {
      id: 8,
      title: "Mobile & Web Development",
      description: "Modern, responsive applications that deliver exceptional user experiences",
      icon: "📱",
      features: ["React/Next.js Apps", "Mobile Apps", "Progressive Web Apps", "API Development"],
      price: "From $2,500/month",
      category: "Development"
    },
    {
      id: 9,
      title: "Machine Learning & AI Research",
      description: "Cutting-edge AI research and development for next-generation applications",
      icon: "🧠",
      features: ["ML Model Development", "Deep Learning", "Computer Vision", "Natural Language Processing"],
      price: "From $12,000/month",
      category: "AI Research"
    }
  ];

  const categories = ["All", "AI Solutions", "Quantum Tech", "Neural Tech", "Blockchain", "Cloud Services", "Security", "Analytics", "Development", "AI Research"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6">
              🚀 ULTIMATE SERVICES • 2025
            </div>
            <h1 className="text-5xl font-bold mb-6">Ultimate Services Showcase 2025</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of cutting-edge services designed to transform your business and accelerate growth
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                View All Services
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Get Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                category === "All"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
              <p className="text-gray-600">
                Over 500+ successful projects delivered with 99.9% client satisfaction rate
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                We use the latest technologies and methodologies to deliver innovative solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">
                24/7 support and maintenance to ensure your solutions run smoothly
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive innovation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateServicesShowcase2025;