import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingDown, 
  BarChart3, 
  Zap, 
  Shield, 
  Users,
  Cloud,
  Target,
  Settings,
  Globe
} from 'lucide-react';
import SEO from '../../components/SEO';

const CloudFinOpsOptimizer: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "AI-powered cost analysis and recommendations to reduce cloud spending by 30-50% while maintaining performance."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Resource Management",
      description: "Intelligent resource scaling and right-sizing to eliminate waste and optimize utilization."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards showing cost trends, usage patterns, and optimization opportunities."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Optimization",
      description: "Set-and-forget policies that automatically optimize costs and resources based on usage patterns."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance & Governance",
      description: "Ensure cost controls and compliance with organizational policies and budgetary constraints."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Role-based access and collaboration tools for finance, IT, and business teams."
    }
  ];

  const benefits = [
    {
      metric: "30-50%",
      description: "Cloud cost reduction"
    },
    {
      metric: "40%",
      description: "Improvement in resource utilization"
    },
    {
      metric: "60%",
      description: "Time saved on cost management"
    },
    {
      metric: "24/7",
      description: "Automated monitoring"
    }
  ];

  const optimizationAreas = [
    {
      title: "Compute Optimization",
      description: "Right-size instances, implement auto-scaling, and use spot instances for cost savings."
    },
    {
      title: "Storage Optimization",
      description: "Optimize storage classes, implement lifecycle policies, and eliminate unused storage."
    },
    {
      title: "Network Optimization",
      description: "Reduce data transfer costs, optimize routing, and implement content delivery strategies."
    },
    {
      title: "Database Optimization",
      description: "Optimize database instances, implement caching, and use managed services efficiently."
    }
  ];

  const cloudProviders = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Oracle Cloud",
    "IBM Cloud",
    "Multi-Cloud"
  ];

  return (
    <>
      <SEO 
        title="Cloud FinOps Optimizer - Zion Tech Group"
        description="Optimize your cloud costs with AI-powered FinOps solutions. Reduce cloud spending by 30-50% and improve resource utilization by 40%."
        keywords="cloud finops, cost optimization, cloud cost management, finops optimization, cloud financial operations, cost reduction"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud FinOps Optimizer
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Transform your cloud financial operations with AI-powered cost optimization that reduces spending by 30-50% while improving performance and efficiency.
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
                Intelligent FinOps Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our Cloud FinOps Optimizer combines AI, machine learning, and financial expertise to deliver unprecedented cost optimization results.
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
                Organizations using our Cloud FinOps Optimizer see dramatic improvements in cost efficiency and resource utilization.
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

        {/* Optimization Areas Section */}
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
                Comprehensive Optimization
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our AI analyzes every aspect of your cloud infrastructure to identify optimization opportunities and implement cost-saving strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {optimizationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-cyan-200">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
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
                Multi-Cloud Support
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Optimize costs across all major cloud providers with unified FinOps management and cross-platform insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {cloudProviders.map((provider, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center"
                >
                  <p className="text-cyan-200 font-medium">{provider}</p>
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
                Ready to Optimize Your Cloud Costs?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join organizations already using AI-powered FinOps to reduce cloud spending and improve operational efficiency.
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

export default CloudFinOpsOptimizer;