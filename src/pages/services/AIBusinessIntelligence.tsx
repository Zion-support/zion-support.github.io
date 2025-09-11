import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns and insights in your business data."
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Live monitoring and visualization of key performance indicators with customizable reporting."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using historical data and AI models."
    },
    {
      icon: Users,
      title: "User Behavior Analysis",
      description: "Deep insights into customer interactions and engagement patterns."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Monitor progress towards business objectives with automated alerts and recommendations."
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI-generated recommendations and actionable insights delivered in real-time."
    }
  ];

  const benefits = [
    "Increase revenue by 15-25% through data-driven decision making",
    "Reduce operational costs by 20-30% with optimized processes",
    "Improve customer satisfaction by 35% with personalized insights",
    "Accelerate time-to-market by 40% with predictive analytics",
    "Enhance team productivity by 25% with automated reporting",
    "Reduce risk by 30% with early warning systems"
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Customer segmentation, inventory optimization, and sales forecasting"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, resource allocation, and treatment optimization"
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and investment portfolio optimization"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization"
    },
    {
      industry: "Marketing",
      description: "Campaign performance analysis, audience targeting, and ROI optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with AI-powered analytics, real-time insights, and predictive intelligence. Get comprehensive business intelligence solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">AI Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}AI-Powered Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of your data with advanced AI analytics, real-time insights, 
              and predictive intelligence that drives strategic decision-making and business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
              to deliver actionable insights that drive business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI Business Intelligence solutions that deliver 
              quantifiable improvements across all aspects of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Scalable cloud infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Proven track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence solutions are designed to work across industries, 
              providing tailored insights for your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-12 rounded-2xl border border-cyan-400/20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their operations 
              with our AI Business Intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}