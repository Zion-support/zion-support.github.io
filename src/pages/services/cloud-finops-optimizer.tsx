import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  DollarSign, 
  TrendingDown, 
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
  Server,
  Globe,
  Lock,
  Shield,
  TrendingUp,
  PieChart,
  Activity,
  Gauge
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function CloudFinOpsOptimizer() {
  const features = [
    {
      icon: Brain,
      title: 'AI Cost Optimization',
      description: 'Intelligent analysis and recommendations for cloud cost reduction'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Unified cost optimization across AWS, Azure, Google Cloud, and more'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Live cost monitoring and spending insights with predictive analytics'
    },
    {
      icon: TrendingDown,
      title: 'Automated Optimization',
      description: 'AI-driven resource scaling and cost-saving recommendations'
    },
    {
      icon: Shield,
      title: 'Compliance & Governance',
      description: 'Ensure cost controls and policy compliance across all cloud resources'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Balance cost efficiency with performance requirements'
    }
  ];

  const benefits = [
    'Reduce cloud costs by 30-50%',
    'Improve resource utilization by 40%',
    'Eliminate waste and unused resources',
    'Optimize performance-cost ratio',
    'Ensure budget compliance and forecasting',
    'Streamline FinOps processes'
  ];

  const optimizationAreas = [
    {
      area: 'Compute Optimization',
      description: 'Right-size instances, optimize auto-scaling, and leverage spot instances'
    },
    {
      area: 'Storage Optimization',
      description: 'Optimize storage classes, implement lifecycle policies, and reduce redundancy'
    },
    {
      area: 'Network Optimization',
      description: 'Optimize data transfer costs, implement CDN strategies, and reduce bandwidth'
    },
    {
      area: 'Database Optimization',
      description: 'Optimize database instances, implement caching, and optimize queries'
    },
    {
      area: 'Reserved Instances',
      description: 'Strategic planning and purchasing of reserved instances for maximum savings'
    },
    {
      area: 'Cost Allocation',
      description: 'Accurate cost tracking and allocation across teams and projects'
    }
  ];

  const cloudProviders = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'IBM Cloud',
    'Oracle Cloud',
    'Multi-Cloud Environments'
  ];

  return (
    <>
      <SEO 
        title="Cloud FinOps Optimizer - Cloud Cost Optimization | Zion Tech Group"
        description="Optimize your cloud costs with our AI-powered FinOps platform. Reduce cloud spending by 30-50% while maintaining performance and compliance."
        keywords="cloud finops, cloud cost optimization, AWS cost optimization, Azure cost management, cloud cost reduction, finops platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                AI-Powered Cloud Cost Optimization
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Cloud FinOps Optimizer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Maximize Cloud ROI
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your cloud financial operations with AI-powered cost optimization. Reduce cloud spending 
                by 30-50% while maintaining performance, compliance, and operational excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calculate Savings
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
                Advanced FinOps Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our Cloud FinOps Optimizer provides comprehensive cost management and optimization 
                capabilities across all major cloud platforms.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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
                Transform Your Cloud Economics
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience significant cost savings and improved operational efficiency with our FinOps platform.
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

        {/* Optimization Areas Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Optimization Coverage
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our platform optimizes every aspect of your cloud infrastructure for maximum cost efficiency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {optimizationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{area.area}</h3>
                  <p className="text-slate-300">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Multi-Cloud Support
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Optimize costs across all major cloud providers with unified management and insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudProviders.map((provider, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <span className="text-slate-300 text-lg">{provider}</span>
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
                Ready to Optimize Your Cloud Costs?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of organizations that have transformed their cloud economics 
                with our AI-powered FinOps platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}