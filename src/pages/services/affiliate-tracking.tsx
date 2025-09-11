import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe,
  Smartphone,
  Settings,
  TrendingUp,
  Link
} from 'lucide-react';
import SEO from '../../../components/SEO';

const AffiliateTracking: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Affiliate Management",
      description: "Comprehensive affiliate onboarding, approval, and management with automated workflows and communication tools."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Real-time tracking of clicks, conversions, and revenue with detailed reporting and insights."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campaign Optimization",
      description: "AI-powered campaign analysis and optimization recommendations to maximize affiliate performance."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Payouts",
      description: "Streamlined commission calculations and automated payment processing with multiple payment methods."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Prevention",
      description: "Advanced fraud detection and prevention to protect your affiliate program from abuse and invalid clicks."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Platform Support",
      description: "Track affiliate performance across websites, mobile apps, and social media platforms."
    }
  ];

  const benefits = [
    {
      metric: "300%",
      description: "Increase in affiliate revenue"
    },
    {
      metric: "50%",
      description: "Reduction in fraud"
    },
    {
      metric: "80%",
      description: "Automation of tasks"
    },
    {
      metric: "24/7",
      description: "Real-time monitoring"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Affiliates",
      description: "Manage product affiliate programs with commission tracking and performance optimization."
    },
    {
      title: "SaaS Affiliates",
      description: "Track subscription-based affiliate programs with recurring commission structures."
    },
    {
      title: "Lead Generation",
      description: "Monitor lead quality and conversion rates from affiliate marketing campaigns."
    },
    {
      title: "Brand Partnerships",
      description: "Manage influencer and brand partnership programs with comprehensive tracking."
    }
  ];

  const integrations = [
    "E-commerce Platforms",
    "CRM Systems",
    "Payment Processors",
    "Analytics Tools",
    "Email Marketing",
    "Social Media Platforms"
  ];

  return (
    <>
      <SEO 
        title="Affiliate Tracking - Zion Tech Group"
        description="Maximize your affiliate program with AI-powered tracking and management. Increase affiliate revenue by 300% and reduce fraud by 50%."
        keywords="affiliate tracking, affiliate management, affiliate marketing, commission tracking, performance analytics, fraud prevention"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Affiliate Tracking
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Transform your affiliate program with intelligent tracking and management that increases revenue by 300% while reducing fraud and automating operations.
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
                Comprehensive Affiliate Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our Affiliate Tracking system combines advanced analytics, automation, and fraud prevention to maximize your affiliate program's success.
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
                Organizations using our Affiliate Tracking system see dramatic improvements in revenue and operational efficiency.
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
                Perfect For Every Business Model
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                From e-commerce to SaaS, our Affiliate Tracking system adapts to your business model and industry requirements.
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
                Ready to Maximize Your Affiliate Program?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join businesses already using AI-powered affiliate tracking to increase revenue and optimize performance.
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

export default AffiliateTracking;