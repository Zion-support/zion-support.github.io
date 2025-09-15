import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Brain, Users, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, Zap, TrendingUp, BarChart3, Target, Globe, Heart, Settings, Monitor, Smartphone, Laptop, Headphones } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AICustomerSupportAutomation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational AI that understands context and provides accurate responses"
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Support",
      description: "Seamless support across email, chat, social media, and phone"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human intervention"
    },
    {
      icon: Target,
      title: "Personalized Responses",
      description: "AI learns customer preferences and provides tailored solutions"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live insights into customer satisfaction and support performance"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR and SOC2 compliance"
    }
  ];

  const benefits = [
    "Reduce support costs by 60-80%",
    "Improve response time by 90%",
    "Increase customer satisfaction by 40-60%",
    "Handle 10x more support requests",
    "Reduce agent workload by 70%",
    "Provide 24/7 multilingual support"
  ];

  const solutions = [
    {
      title: "AI Chatbot Platform",
      description: "Intelligent conversational AI for website and app support",
      features: ["Natural language processing", "Multi-language support", "Integration APIs"],
      price: "From $2,000/month"
    },
    {
      title: "Email Support Automation",
      description: "AI-powered email categorization and response generation",
      features: ["Smart categorization", "Auto-response generation", "Sentiment analysis"],
      price: "From $1,500/month"
    },
    {
      title: "Voice Support AI",
      description: "Intelligent voice recognition and response system",
      features: ["Speech-to-text", "Voice synthesis", "Call routing"],
      price: "From $3,000/month"
    },
    {
      title: "Full Support Suite",
      description: "Complete AI-powered customer support solution",
      features: ["All channels", "Advanced analytics", "Custom integrations"],
      price: "From $5,000/month"
    }
  ];

  const useCases = [
    "E-commerce Customer Support",
    "SaaS Product Support",
    "Financial Services",
    "Healthcare Support",
    "Travel & Hospitality",
    "Education & Training"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Support Automation Services - Zion Tech Group"
        description="Revolutionary AI-powered customer support automation that reduces costs, improves response times, and enhances customer satisfaction. 24/7 intelligent support across all channels."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
              <MessageCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI Customer Support</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                AI Customer Support
              </span>
              <br />
              <span className="text-white">Automation</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI-powered automation that works 24/7. 
              Reduce costs, improve response times, and deliver exceptional customer experiences 
              across all channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Technology for Better Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered customer support platform combines natural language processing, 
              machine learning, and automation to deliver exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-400/40 group-hover:to-emerald-500/40 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered customer support automation delivers measurable improvements 
              in efficiency, cost reduction, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-slate-700/30 rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Flexible Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of AI-powered customer support solutions designed to 
              meet your specific business needs and scale with your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-3xl font-bold text-green-400 mb-6">{solution.price}</div>
                <button className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered customer support automation is successfully deployed across 
              diverse industries, helping organizations deliver exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Headphones className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution in customer support and deliver exceptional experiences 
              while reducing costs and improving efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}