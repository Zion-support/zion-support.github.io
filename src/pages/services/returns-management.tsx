import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  Package, 
  Truck, 
  BarChart3, 
  Users, 
  Zap,
  Shield,
  Globe,
  Smartphone,
  Settings
} from 'lucide-react';
import SEO from '../../../components/SEO';

const ReturnsManagement: React.FC = () => {
  const features = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automated Returns Processing",
      description: "Streamlined returns workflow with AI-powered decision making and automated approval processes."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Inventory Management",
      description: "Real-time inventory updates and intelligent restocking recommendations based on return patterns."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Seamless Logistics",
      description: "Integrated shipping labels, tracking, and reverse logistics for hassle-free returns."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Comprehensive reporting on return reasons, trends, and opportunities for product improvement."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Experience",
      description: "Self-service returns portal with real-time status updates and communication tools."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Policy Automation",
      description: "Flexible return policies with automated rule enforcement and exception handling."
    }
  ];

  const benefits = [
    {
      metric: "70%",
      description: "Faster returns processing"
    },
    {
      metric: "40%",
      description: "Reduction in return costs"
    },
    {
      metric: "85%",
      description: "Customer satisfaction"
    },
    {
      metric: "50%",
      description: "Time saved on manual tasks"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Returns",
      description: "Handle online retail returns with automated processing and customer self-service options."
    },
    {
      title: "B2B Returns",
      description: "Streamline business-to-business returns with bulk processing and approval workflows."
    },
    {
      title: "Subscription Returns",
      description: "Manage recurring service cancellations and product returns efficiently."
    },
    {
      title: "International Returns",
      description: "Handle cross-border returns with compliance and logistics optimization."
    }
  ];

  const integrations = [
    "E-commerce Platforms",
    "ERP Systems",
    "Shipping Carriers",
    "Payment Processors",
    "CRM Systems",
    "Analytics Tools"
  ];

  return (
    <>
      <SEO 
        title="Returns Management - Zion Tech Group"
        description="Streamline your returns process with AI-powered automation. Process returns 70% faster and reduce costs by 40% while improving customer satisfaction."
        keywords="returns management, automated returns, reverse logistics, customer returns, returns processing, inventory management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Returns Management
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Transform your returns process with intelligent automation that processes returns 70% faster while reducing costs and improving customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Watch Demo
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
                Intelligent Returns Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our Returns Management system combines AI, automation, and customer experience optimization to deliver exceptional returns processing.
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
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-cyan-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Organizations using our Returns Management system see significant improvements in efficiency and customer satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-cyan-200">{benefit.description}</p>
                </motion.div>
              ))}
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For Every Business
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                From e-commerce to B2B, our Returns Management system adapts to your business model and industry requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-cyan-200">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Works with your existing systems and platforms for a smooth implementation experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center"
                >
                  <p className="text-cyan-200 font-medium">{integration}</p>
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
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Returns?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join businesses already using AI-powered returns management to improve efficiency and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReturnsManagement;