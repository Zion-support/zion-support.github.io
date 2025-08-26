import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Brain, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3, 
  Mail, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Megaphone,
  Filter
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "AI-powered segmentation that identifies and targets your most valuable customers with precision."
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Machine learning algorithms that predict customer behavior and optimize marketing strategies."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Real-time campaign optimization that automatically adjusts strategies for maximum ROI."
    },
    {
      icon: Users,
      title: "Personalization Engine",
      description: "Dynamic content personalization that delivers relevant messages to each customer segment."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Intelligent marketing automation that nurtures leads and customers through the entire journey."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Comprehensive analytics and insights that help you understand and improve campaign performance."
    }
  ];

  const benefits = [
    "Increase conversion rates by 30-50% with personalized campaigns",
    "Reduce customer acquisition costs by 25-40%",
    "Improve customer lifetime value by 35-60%",
    "Save 20-30 hours per week on manual marketing tasks",
    "Boost email open rates by 40-70%",
    "Enhance customer engagement and retention"
  ];

  const useCases = [
    {
      industry: "E-commerce",
      applications: ["Product recommendations", "Abandoned cart recovery", "Customer segmentation", "Dynamic pricing"]
    },
    {
      industry: "B2B Services",
      applications: ["Lead nurturing", "Account-based marketing", "Content personalization", "Sales enablement"]
    },
    {
      industry: "Healthcare",
      applications: ["Patient engagement", "Appointment reminders", "Health education", "Follow-up care"]
    },
    {
      industry: "Financial Services",
      applications: ["Cross-selling", "Risk assessment", "Customer onboarding", "Financial education"]
    }
  ];

  const marketingChannels = [
    {
      name: "Email Marketing",
      icon: Mail,
      description: "Intelligent email campaigns with personalization and automation"
    },
    {
      name: "Social Media",
      icon: MessageSquare,
      description: "Automated social media management and engagement"
    },
    {
      name: "Content Marketing",
      icon: Megaphone,
      description: "AI-powered content creation and distribution"
    },
    {
      name: "Advertising",
      icon: Target,
      description: "Programmatic advertising with real-time optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-medium">AI Marketing Automation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Supercharge Your Marketing with
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Automation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing operations with intelligent automation that personalizes experiences, 
              optimizes campaigns, and drives measurable results across all channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300">
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
              Powerful Marketing Automation Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform combines advanced automation with intelligent insights 
              to deliver personalized marketing experiences that convert.
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Channel Marketing Automation
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Orchestrate campaigns across all marketing channels with unified automation 
              that delivers consistent, personalized experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{channel.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable Marketing Results
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real improvements in your marketing performance with AI-powered automation 
              that continuously optimizes and improves results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Industry Applications</h3>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4"
                >
                  <h4 className="text-lg font-semibold text-green-400 mb-3">{useCase.industry}</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Marketing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of marketers already using AI automation to increase efficiency, 
              improve results, and scale their marketing operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}