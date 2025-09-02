import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Eye,
  Globe,
  PieChart,
  Monitor,
  FileText,
  Share2,
  DollarSign,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIFinancialAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze financial data for predictive insights."
    },
    {
      icon: TrendingUp,
      title: "Real-time Monitoring",
      description: "Monitor financial performance and market trends in real-time with automated alerts."
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "Forecast financial outcomes and identify investment opportunities with AI models."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Generate detailed financial reports and visualizations for better decision-making."
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "Get automated financial insights and recommendations based on data analysis."
    },
    {
      icon: DollarSign,
      title: "Risk Assessment",
      description: "Identify and assess financial risks with AI-powered risk modeling and analysis."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Better Investment Decisions",
      description: "Make more informed investment decisions with AI-powered financial analysis."
    },
    {
      icon: Lightbulb,
      title: "Risk Mitigation",
      description: "Identify and mitigate financial risks before they impact your business."
    },
    {
      icon: Clock,
      title: "Faster Analysis",
      description: "Accelerate financial analysis and reporting with automated processes."
    },
    {
      icon: Star,
      title: "Improved ROI",
      description: "Increase return on investment with data-driven financial strategies."
    }
  ];

  const analyticsTypes = [
    {
      title: "Market Analysis",
      description: "Comprehensive market trend analysis and competitive intelligence."
    },
    {
      title: "Portfolio Optimization",
      description: "AI-powered portfolio optimization and asset allocation strategies."
    },
    {
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies."
    },
    {
      title: "Performance Tracking",
      description: "Real-time performance monitoring and benchmarking."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Financial Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Transform your financial decision-making with AI-powered analytics and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Financial Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive financial analytics capabilities to improve decision-making.
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
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Financial Analytics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered financial analytics that improve decision-making and ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Analytics Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports various financial analytics types to meet your analysis needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsTypes.map((analyticsType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {analyticsType.title}
                </h3>
                <p className="text-gray-600">
                  {analyticsType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Analytics?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join organizations that are already leveraging AI to improve financial decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}