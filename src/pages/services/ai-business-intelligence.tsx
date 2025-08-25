import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms that forecast trends and identify opportunities before they become apparent."
    },
    {
      icon: TrendingUp,
      title: "Real-time Insights",
      description: "Instant access to business metrics and KPIs with automated reporting and alerting systems."
    },
    {
      icon: Target,
      title: "Strategic Decision Support",
      description: "AI-powered recommendations that help executives make data-driven decisions with confidence."
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Intelligent report generation that adapts to user preferences and highlights key insights automatically."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with role-based access control and comprehensive audit trails."
    },
    {
      icon: Users,
      title: "Collaborative Analytics",
      description: "Team-based analytics platform that enables sharing and collaboration on insights and reports."
    }
  ];

  const benefits = [
    "Increase revenue by 15-25% through better decision making",
    "Reduce operational costs by 20-30% with process optimization",
    "Improve customer satisfaction scores by 25-35%",
    "Accelerate time-to-market by 40-50%",
    "Enhance risk management and compliance",
    "Enable data-driven culture transformation"
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Risk assessment", "Fraud detection", "Portfolio optimization", "Customer churn prediction"]
    },
    {
      industry: "Healthcare",
      applications: ["Patient outcome prediction", "Resource optimization", "Disease pattern analysis", "Treatment effectiveness"]
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Production planning"]
    },
    {
      industry: "Retail",
      applications: ["Demand forecasting", "Inventory optimization", "Customer segmentation", "Price optimization"]
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">AI Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of your data with advanced AI analytics, predictive insights, 
              and intelligent business automation that drives growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300">
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
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
              to deliver actionable insights that drive business success.
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real results with our AI Business Intelligence platform that delivers 
              quantifiable improvements across all aspects of your business.
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
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">{useCase.industry}</h4>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of companies already using AI Business Intelligence to gain 
              competitive advantage and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}