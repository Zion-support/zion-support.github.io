import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Target, TrendingUp, Users, Zap, Shield, BarChart3, Globe, Award, CheckCircle, Phone, Mail } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISalesCopilot() {
  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Lead Qualification",
      description: "AI-powered lead scoring and qualification to focus on high-value prospects"
    },
    {
      icon: Target,
      title: "Personalized Outreach",
      description: "Automated, personalized messaging that resonates with each prospect"
    },
    {
      icon: TrendingUp,
      title: "Sales Performance Analytics",
      description: "Real-time insights into sales activities, conversion rates, and pipeline health"
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Automated CRM updates and intelligent follow-up scheduling"
    },
    {
      icon: Zap,
      title: "Predictive Sales Intelligence",
      description: "AI-driven insights on when and how to engage prospects for maximum success"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in compliance features and secure data handling for enterprise use"
    }
  ];

  const benefits = [
    "Increase sales productivity by 50%",
    "Improve lead conversion rates by 35%",
    "Reduce sales cycle time by 40%",
    "Automate 80% of repetitive sales tasks",
    "Provide 24/7 prospect engagement",
    "Generate 3x more qualified leads"
  ];

  const useCases = [
    {
      title: "B2B Sales Teams",
      description: "Streamline enterprise sales processes with AI-powered lead management and follow-up automation"
    },
    {
      title: "E-commerce & Retail",
      description: "Personalize customer interactions and drive conversions with intelligent product recommendations"
    },
    {
      title: "SaaS Companies",
      description: "Scale sales operations efficiently with automated qualification and personalized onboarding"
    },
    {
      title: "Real Estate",
      description: "Qualify leads automatically and provide instant responses to property inquiries"
    }
  ];

  const capabilities = [
    "Natural language processing for customer interactions",
    "Machine learning-based lead scoring",
    "Automated email and message generation",
    "CRM integration and synchronization",
    "Multi-channel communication support",
    "Advanced analytics and reporting",
    "Custom workflow automation",
    "Real-time performance monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Revolutionize your sales process with AI-powered automation, lead qualification, and personalized customer engagement."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI-Powered Sales Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Sales Copilot
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with intelligent automation. Our AI Sales Copilot 
              qualifies leads, personalizes outreach, and manages customer relationships 
              to drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
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
              Intelligent Sales Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI Sales Copilot combines advanced machine learning with sales expertise 
              to deliver results that transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
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
              Proven Sales Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join hundreds of sales teams already achieving breakthrough results with AI automation.
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
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
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
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI Sales Copilot adapts to various industries and business models.
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
              Built with cutting-edge AI technology for enterprise-grade performance.
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
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Revolutionize Your Sales?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join the AI sales revolution and start closing more deals with less effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

