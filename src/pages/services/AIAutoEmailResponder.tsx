import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Clock, Users, Shield, BarChart3, Target, Globe, Award, CheckCircle, Mail, Send } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutoEmailResponder() {
  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Email Responses",
      description: "AI-powered email generation that understands context and maintains your brand voice"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Reply to emails within seconds, improving customer satisfaction and engagement"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss an email with round-the-clock automated response capabilities"
    },
    {
      icon: Users,
      title: "Personalized Communication",
      description: "Tailor responses based on customer history, preferences, and behavior patterns"
    },
    {
      icon: Shield,
      title: "CRM Integration",
      description: "Seamlessly integrate with your CRM system for complete customer relationship management"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track response times, customer satisfaction, and email engagement metrics"
    }
  ];

  const benefits = [
    "Respond to emails 10x faster",
    "Improve customer satisfaction by 40%",
    "Reduce manual email work by 80%",
    "Handle 24/7 customer inquiries",
    "Maintain consistent brand voice",
    "Scale customer support efficiently"
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Automate responses to common inquiries and support tickets with intelligent routing"
    },
    {
      title: "Sales Follow-ups",
      description: "Automated follow-up sequences for leads and prospects with personalized messaging"
    },
    {
      title: "Appointment Scheduling",
      description: "Handle booking requests and appointment confirmations automatically"
    },
    {
      title: "Order Status Updates",
      description: "Provide real-time order updates and shipping information to customers"
    }
  ];

  const capabilities = [
    "Natural language understanding and generation",
    "Brand voice training and consistency",
    "Multi-language support",
    "Sentiment analysis and appropriate responses",
    "Automated email categorization and routing",
    "Template management and customization",
    "A/B testing for response optimization",
    "Integration with major email platforms"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Auto Email Responder - Zion Tech Group"
        description="Automate email responses with AI-powered intelligence, 24/7 availability, and personalized customer communication."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI-Powered Email Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Auto Email Responder
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your email communication with intelligent automation. Our AI Auto Email 
              Responder provides instant, personalized responses while maintaining your brand 
              voice and improving customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Automating
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Email Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI Auto Email Responder combines advanced language processing with 
              intelligent automation to revolutionize your email communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of businesses already achieving breakthrough results with AI email automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI email responder adapts to various business needs and communication scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with enterprise-grade AI technology for reliable email automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Automate Your Emails?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI to transform their email communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

