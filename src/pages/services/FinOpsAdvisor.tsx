import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Play, 
  Settings, 
  Target, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function FinOpsAdvisor() {
  // Data arrays
  const features = [
    {
      title: 'Cost Analysis',
      description: 'Comprehensive cloud cost analysis and reporting',
      icon: DollarSign
    },
    {
      title: 'Resource Optimization',
      description: 'AI-powered resource optimization recommendations',
      icon: Settings
    },
    {
      title: 'Budget Management',
      description: 'Automated budget tracking and alerts',
      icon: Target
    }
  ];

  const benefits = [
    'Reduce cloud costs by up to 40%',
    'Improve resource utilization',
    'Automated cost optimization',
    'Real-time cost monitoring',
    'Predictive cost forecasting',
    'Compliance and governance'
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Optimize costs during peak seasons'
    },
    {
      industry: 'SaaS',
      description: 'Scale efficiently while controlling costs'
    },
    {
      industry: 'Healthcare',
      description: 'Ensure compliance with cost controls'
    },
    {
      industry: 'Finance',
      description: 'Real-time cost monitoring and alerts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="FinOps Advisor - Cloud Financial Operations Optimization"
        description="Optimize your cloud costs with AI-powered FinOps solutions. Reduce spending by up to 40% while improving resource utilization and governance."
        keywords={['FinOps', 'cloud cost optimization', 'resource management', 'budget management', 'cloud governance']}
      />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              FinOps Advisor
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              AI-powered cloud financial operations optimization to reduce costs, improve efficiency, and ensure compliance
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Play className="h-5 w-5" />
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive FinOps Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From cost analysis to automated optimization, our FinOps platform provides everything you need to manage cloud finances effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose FinOps Advisor?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Transform your cloud financial operations with intelligent automation and optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored FinOps solutions for various industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already saving millions with intelligent FinOps optimization
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Start Optimizing
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

