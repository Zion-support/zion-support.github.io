import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Zap, 
  Brain,
  Rocket,
  Star,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Target,
  CheckCircle,
  Settings,
  Eye,
  Database,
  Smartphone,
  Globe,
  Lock,
  Shield,
  TrendingUp
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIAutoEmailResponder() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Response Generation',
      description: 'AI-powered email responses that understand context and maintain human-like conversation'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Automated replies sent within seconds, ensuring 24/7 customer engagement'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Handle emails, chat messages, and social media inquiries automatically'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track response times, customer satisfaction, and engagement metrics'
    },
    {
      icon: Users,
      title: 'Personalized Communication',
      description: 'Tailored responses based on customer history and preferences'
    },
    {
      icon: Shield,
      title: 'Smart Escalation',
      description: 'Automatically route complex inquiries to human agents when needed'
    }
  ];

  const benefits = [
    'Respond to 90% of inquiries instantly',
    'Reduce response time from hours to seconds',
    'Increase customer satisfaction by 40%',
    'Handle 24/7 customer support',
    'Reduce support team workload by 60%',
    'Improve customer engagement rates'
  ];

  const useCases = [
    {
      industry: 'Customer Support',
      description: 'Automated responses to common questions and support requests'
    },
    {
      industry: 'Sales & Marketing',
      description: 'Instant follow-ups and lead nurturing communications'
    },
    {
      industry: 'E-commerce',
      description: 'Order confirmations, shipping updates, and customer inquiries'
    },
    {
      industry: 'Professional Services',
      description: 'Appointment scheduling, consultation requests, and service inquiries'
    }
  ];

  const integrations = [
    'Gmail & Outlook',
    'Slack & Microsoft Teams',
    'Zendesk & Freshdesk',
    'Salesforce & HubSpot',
    'Shopify & WooCommerce',
    'Custom API Integration'
  ];

  return (
    <>
      <SEO 
        title="AI Auto Email Responder - Intelligent Email Automation | Zion Tech Group"
        description="Transform customer communication with our AI Auto Email Responder. Instant, intelligent responses that boost engagement and customer satisfaction."
        keywords="AI email responder, email automation, customer support automation, intelligent email responses, 24/7 customer service"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-cyan-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Mail className="w-4 h-4 mr-2" />
                AI-Powered Email Intelligence
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Auto Email Responder
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  Intelligent Email Automation
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Never miss a customer inquiry again. Our AI Auto Email Responder provides instant, 
                intelligent responses that maintain human-like conversation quality while ensuring 24/7 availability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Advanced Email Automation Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI Auto Email Responder combines natural language processing with intelligent automation 
                to deliver exceptional customer experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your Customer Communication
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience immediate improvements in customer response times and satisfaction levels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI Auto Email Responder is designed to work across various industries and business models.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-slate-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Connect with your existing tools and platforms for immediate implementation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <span className="text-slate-300 text-lg">{integration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Email Responses?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of businesses that have transformed their customer communication 
                with AI-powered email automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}