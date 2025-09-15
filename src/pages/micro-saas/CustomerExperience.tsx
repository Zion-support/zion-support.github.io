import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Users, Star, ArrowRight, Shield, Cloud, Database, Cpu, TrendingUp, Target, Zap } from 'lucide-react';

export default function CustomerExperience() {
  const features = [
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Build lasting relationships with exceptional experiences'
    },
    {
      icon: MessageCircle,
      title: 'Multi-channel Support',
      description: 'Connect with customers across all platforms'
    },
    {
      icon: Users,
      title: 'Personalization',
      description: 'Tailored experiences for every customer'
    },
    {
      icon: Star,
      title: 'Loyalty Programs',
      description: 'Reward and retain your best customers'
    }
  ];

  const capabilities = [
    {
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint',
      icon: Target
    },
    {
      title: 'Sentiment Analysis',
      description: 'Understand customer emotions and feedback',
      icon: Heart
    },
    {
      title: 'Automated Engagement',
      description: 'Smart workflows for customer interactions',
      icon: Zap
    },
    {
      title: 'Performance Analytics',
      description: 'Track and improve customer experience metrics',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-medium">Customer Experience</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Delight Your
              <span className="text-gradient"> Customers</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Create exceptional customer experiences that drive loyalty, satisfaction,
              and business growth with our comprehensive CX platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Customer Experience?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform customer interactions into lasting relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to create exceptional customer experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{capability.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Customer Experience?
              </h2>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Start building exceptional customer relationships today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}