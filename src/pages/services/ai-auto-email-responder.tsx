import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Clock, CheckCircle, ArrowRight, Brain, Globe, Server, Target, PieChart, Mail, Smartphone } from 'lucide-react';

export default function AIAutoEmailResponder() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Intelligent Email Responses',
      description: 'AI-powered email responses that understand context and provide relevant, helpful replies.'
    },
    {
      icon: Zap,
      title: 'Instant Response Time',
      description: 'Automatically respond to emails within seconds, improving customer satisfaction and engagement.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock email support without delays, ensuring customers always get timely responses.'
    },
    {
      icon: Target,
      title: 'Context-Aware Replies',
      description: 'Smart responses that understand email content and provide personalized, relevant information.'
    },
    {
      icon: PieChart,
      title: 'Performance Analytics',
      description: 'Track response times, customer satisfaction, and email handling efficiency with detailed metrics.'
    },
    {
      icon: Mail,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with your CRM system for automatic logging and customer tracking.'
    }
  ];

  const benefits = [
    'Reduce response time by 90%',
    'Increase customer satisfaction',
    '24/7 automated support',
    'Reduce manual email workload',
    'Improve response consistency',
    'Seamless CRM integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Email Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Auto Email Responder
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your email communication with AI-powered automatic responses that provide instant, intelligent replies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                Schedule Demo
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Email Automation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI email responder provides instant, context-aware replies that improve customer experience and team productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI Auto Email Responder?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your email communication with instant responses, improved customer satisfaction, and reduced workload.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                    <div className="text-slate-300 text-sm">Faster Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
                    <div className="text-slate-300 text-sm">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">Instant</div>
                    <div className="text-slate-300 text-sm">Replies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">AI-Powered</div>
                    <div className="text-slate-300 text-sm">Intelligence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Email Responses?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading companies that use AI to provide instant email responses and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}