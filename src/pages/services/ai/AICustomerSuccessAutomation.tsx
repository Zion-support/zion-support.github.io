import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Globe
} from 'lucide-react';
import { SEO } from '../../../components/SEO';

export default function AICustomerSuccessAutomation() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Customer Insights",
      description: "AI-powered analytics that predict customer behavior and identify churn risks before they happen."
    },
    {
      icon: MessageSquare,
      title: "Automated Communication",
      description: "Smart messaging systems that engage customers at the right time with personalized content."
    },
    {
      icon: Target,
      title: "Predictive Success Scoring",
      description: "Advanced algorithms that score customer success probability and recommend proactive actions."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards showing customer health, engagement metrics, and success indicators."
    }
  ];

  const benefits = [
    "Reduce customer churn by up to 40%",
    "Increase customer lifetime value by 25%",
    "Automate 80% of routine customer success tasks",
    "Improve customer satisfaction scores by 35%",
    "Scale customer success operations without proportional headcount increase"
  ];

  const useCases = [
    {
      title: "SaaS Companies",
      description: "Automate onboarding, feature adoption tracking, and renewal processes"
    },
    {
      title: "E-commerce Platforms",
      description: "Personalized recommendations and automated customer support"
    },
    {
      title: "Financial Services",
      description: "Risk assessment and proactive customer relationship management"
    },
    {
      title: "Healthcare Providers",
      description: "Patient engagement and appointment scheduling optimization"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Customer Success Automation | Zion Tech Group"
        description="Transform your customer success operations with AI-powered automation. Reduce churn, increase lifetime value, and scale efficiently."
        keywords="AI customer success, customer automation, churn prevention, customer lifetime value, AI analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Customer Success
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}Automation
                </span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Transform your customer success operations with intelligent automation. 
                Predict churn, automate engagement, and scale your success operations 
                with AI-powered insights and actions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our AI customer success platform combines cutting-edge machine learning 
                with intuitive automation to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                See real results with our AI customer success automation platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-zinc-800/50">
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
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our AI customer success automation works across diverse industries 
                and business models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-12 text-center border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Success?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using AI to automate their 
                customer success operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
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