import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Globe,
  Clock,
  Star
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Advanced machine learning models that forecast trends, customer behavior, and business outcomes with high accuracy.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards that provide instant insights into key performance indicators and business metrics.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI-driven recommendations for optimizing business processes, resource allocation, and strategic decision-making.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with existing data sources, databases, and business applications for unified insights.",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const benefits = [
    "Increase revenue by 25-40% through data-driven insights",
    "Reduce operational costs by 15-30% with optimized processes",
    "Improve customer satisfaction by 35% with predictive analytics",
    "Accelerate decision-making by 60% with real-time intelligence",
    "Identify new market opportunities with AI-powered trend analysis",
    "Enhance risk management with predictive risk modeling"
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: [
        "Fraud detection and prevention",
        "Credit risk assessment",
        "Investment portfolio optimization",
        "Customer churn prediction"
      ]
    },
    {
      industry: "Healthcare",
      applications: [
        "Patient outcome prediction",
        "Resource allocation optimization",
        "Disease pattern analysis",
        "Treatment effectiveness assessment"
      ]
    },
    {
      industry: "Manufacturing",
      applications: [
        "Predictive maintenance",
        "Quality control optimization",
        "Supply chain optimization",
        "Production efficiency analysis"
      ]
    },
    {
      industry: "Retail",
      applications: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Price optimization",
        "Marketing campaign effectiveness"
      ]
    }
  ];

  const technologies = [
    "Machine Learning Algorithms",
    "Deep Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Time Series Analysis",
    "Anomaly Detection",
    "Clustering & Classification",
    "Regression Analysis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {" "}That Transforms
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlock the power of your data with AI-driven business intelligence solutions that provide 
              real-time insights, predictive analytics, and actionable recommendations to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-purple-500/50 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful AI-Powered Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge machine learning with intuitive 
              analytics to deliver actionable insights that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in performance, efficiency, and profitability with our 
              AI Business Intelligence solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence solutions are tailored to meet the unique challenges 
              and opportunities across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Technologies</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built on cutting-edge AI and machine learning technologies to deliver 
              the most accurate and actionable business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations that are already leveraging AI-powered business intelligence 
                to gain competitive advantages and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-purple-500/50 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}