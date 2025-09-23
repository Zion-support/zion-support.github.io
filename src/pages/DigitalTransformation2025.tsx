import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const DigitalTransformation2025: React.FC = () => {
  const services = [
    {
      title: "Cloud Migration Strategy",
      description: "Complete migration to cloud infrastructure with zero downtime and enhanced security.",
      icon: "☁️",
      features: ["AWS/Azure/GCP Migration", "Data Migration", "Application Modernization", "Security Enhancement"]
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of business processes to improve efficiency and reduce costs.",
      icon: "⚙️",
      features: ["Workflow Automation", "RPA Implementation", "API Integration", "System Integration"]
    },
    {
      title: "Change Management",
      description: "Comprehensive change management to ensure smooth digital transformation adoption.",
      icon: "🔄",
      features: ["Training Programs", "Change Communication", "User Adoption", "Performance Monitoring"]
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning and roadmap development for sustainable digital transformation.",
      icon: "📋",
      features: ["Digital Roadmap", "Technology Assessment", "ROI Analysis", "Risk Management"]
    }
  ];

  const phases = [
    {
      phase: "Assessment",
      title: "Current State Analysis",
      description: "Comprehensive evaluation of existing systems, processes, and technology stack.",
      duration: "2-4 weeks",
      deliverables: ["Technology Audit", "Process Analysis", "Gap Assessment", "Recommendations"]
    },
    {
      phase: "Planning",
      title: "Strategic Roadmap",
      description: "Development of detailed transformation strategy and implementation timeline.",
      duration: "3-6 weeks",
      deliverables: ["Digital Strategy", "Implementation Plan", "Resource Allocation", "Timeline"]
    },
    {
      phase: "Implementation",
      title: "Execution & Migration",
      description: "Phased implementation of digital solutions with minimal business disruption.",
      duration: "12-24 weeks",
      deliverables: ["System Deployment", "Data Migration", "Process Automation", "Training"]
    },
    {
      phase: "Optimization",
      title: "Continuous Improvement",
      description: "Ongoing optimization and support to maximize digital transformation benefits.",
      duration: "Ongoing",
      deliverables: ["Performance Monitoring", "Optimization", "Support", "Scaling"]
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Cost Reduction",
      detail: "Average cost savings through digital transformation"
    },
    {
      metric: "60%",
      description: "Efficiency Gain",
      detail: "Improvement in operational efficiency"
    },
    {
      metric: "80%",
      description: "Faster Processes",
      detail: "Reduction in process completion time"
    },
    {
      metric: "95%",
      description: "Customer Satisfaction",
      detail: "Improvement in customer experience scores"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full text-sm font-semibold mb-6">
                🔄 NEW: Digital Transformation 2025
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Digital Transformation Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete digital transformation solutions including cloud migration, 
                process automation, and organizational change management. Transform 
                your business for the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start Transformation
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Digital Transformation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital transformation solutions designed to modernize your 
                business operations and drive sustainable growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Transformation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful digital transformation 
                with minimal disruption to your business operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        Phase {index + 1}
                      </span>
                      <span className="text-sm text-gray-500">{phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-2"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transformation Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable results that drive business growth and competitive advantage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">{benefit.metric}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.description}</h3>
                  <p className="text-gray-600">{benefit.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world examples of successful digital transformations across various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Manufacturing Company</h3>
                    <p className="text-gray-500">Industrial Automation</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    50% Efficiency Gain
                  </span>
                </div>
                <p className="text-gray-600">
                  Implemented IoT sensors and predictive maintenance systems, resulting in 
                  50% improvement in operational efficiency and 30% reduction in maintenance costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Retail Chain</h3>
                    <p className="text-gray-500">Omnichannel Integration</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    35% Sales Increase
                  </span>
                </div>
                <p className="text-gray-600">
                  Unified online and offline customer experience with AI-powered personalization, 
                  leading to 35% increase in sales and 60% improvement in customer satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    F
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Financial Services</h3>
                    <p className="text-gray-500">Cloud Migration</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    40% Cost Reduction
                  </span>
                </div>
                <p className="text-gray-600">
                  Migrated legacy systems to cloud infrastructure with enhanced security, 
                  achieving 40% cost reduction and 99.9% uptime with improved scalability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Start your digital transformation journey today and unlock the full potential 
                of your business with our proven methodology and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalTransformation2025;