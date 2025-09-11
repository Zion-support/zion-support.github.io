import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Users,
  Smartphone,
  Globe,
  Shield,
  Settings
} from 'lucide-react';
import SEO from '../../../components/SEO';

const AIAutoEmailResponder: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Instant Response Generation",
      description: "AI-powered email responses generated in seconds with context-aware content and personalized messaging."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Respond to customer inquiries instantly, even outside business hours, improving customer satisfaction."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-language Support",
      description: "Automatically detect and respond in the customer's preferred language for global reach."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Routing",
      description: "Intelligent email categorization and routing to appropriate team members when human intervention is needed."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track response times, customer satisfaction, and email volume with detailed analytics and insights."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless handoff between AI and human agents with full conversation context and history."
    }
  ];

  const benefits = [
    {
      metric: "90%",
      description: "Instant response rate"
    },
    {
      metric: "40%",
      description: "Increase in customer satisfaction"
    },
    {
      metric: "60%",
      description: "Reduction in response time"
    },
    {
      metric: "50%",
      description: "Time saved on routine emails"
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle common inquiries, FAQs, and support requests automatically with intelligent responses."
    },
    {
      title: "Sales Inquiries",
      description: "Qualify leads and provide product information instantly to capture sales opportunities."
    },
    {
      title: "Appointment Booking",
      description: "Automate scheduling and confirmation emails with calendar integration and availability checking."
    },
    {
      title: "Order Updates",
      description: "Send shipping confirmations, tracking information, and delivery updates automatically."
    }
  ];

  const integrations = [
    "Gmail & Outlook",
    "Slack & Teams",
    "CRM Systems",
    "Help Desk Platforms",
    "E-commerce Platforms",
    "Calendar Applications"
  ];

  return (
    <>
      <SEO 
        title="AI Auto Email Responder - Zion Tech Group"
        description="Automate customer communication with AI-powered email responses. Achieve 90% instant response rate and increase customer satisfaction by 40%."
        keywords="AI email responder, automated email responses, customer communication, email automation, AI customer service, instant responses"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-cyan-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Auto Email Responder
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Transform customer communication with intelligent email automation that responds instantly, 24/7, with personalized and context-aware messages.
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
                Intelligent Email Automation
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our AI Email Responder combines natural language processing with business logic to deliver human-like responses instantly.
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
                Proven Results
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Organizations using our AI Email Responder see dramatic improvements in customer communication efficiency.
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
                Perfect For Every Business Need
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                From customer support to sales inquiries, our AI Email Responder handles all types of customer communication.
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
                Works with your existing tools and platforms for a smooth implementation experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                Ready to Automate Your Email Communication?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join businesses already using AI to provide instant, personalized customer responses 24/7.
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

export default AIAutoEmailResponder;