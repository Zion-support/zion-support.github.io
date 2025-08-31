import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  CreditCard, 
  Calculator,
  ArrowRight,
  CheckCircle,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Comprehensive financial planning and management solutions'
  },
  {
    icon: TrendingUp,
    title: 'Investment Analytics',
    description: 'AI-powered investment insights and portfolio optimization'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Full compliance with financial regulations and standards'
  },
  {
    icon: BarChart3,
    title: 'Risk Management',
    description: 'Advanced risk assessment and mitigation strategies'
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Secure, scalable payment processing and management'
  },
  {
    icon: Calculator,
    title: 'Financial Modeling',
    description: 'Sophisticated financial modeling and forecasting tools'
  }
];

const solutions = [
  {
    title: 'AI-Powered Trading Platform',
    description: 'Advanced algorithmic trading with machine learning insights',
    features: ['Real-time Market Data', 'Algorithmic Trading', 'Risk Management', 'Performance Analytics']
  },
  {
    title: 'Financial Compliance Suite',
    description: 'Comprehensive compliance management for financial institutions',
    features: ['Regulatory Reporting', 'Audit Trails', 'Compliance Monitoring', 'Document Management']
  },
  {
    title: 'Portfolio Management',
    description: 'Intelligent portfolio optimization and risk management',
    features: ['Asset Allocation', 'Risk Assessment', 'Performance Tracking', 'Rebalancing']
  },
  {
    title: 'FinTech Solutions',
    description: 'Modern financial technology for digital banking and payments',
    features: ['Digital Banking', 'Payment Processing', 'Blockchain Integration', 'API Management']
  }
];

export default function FinancialSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Financial Solutions - Zion Tech Group" 
        description="AI-powered financial technology solutions, trading platforms, compliance management, and portfolio optimization for financial institutions." 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Financial Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your financial operations with AI-powered trading platforms, 
            compliance management, and portfolio optimization solutions. 
            Built for the modern financial landscape.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group for Financial Solutions?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our financial technology solutions are built with deep understanding of 
            financial markets, regulatory requirements, and institutional needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Financial Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to address the unique challenges of 
            financial institutions and trading operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Financial Security & Compliance</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our solutions meet the highest standards for financial data security and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
              <p className="text-gray-300">256-bit encryption and multi-factor authentication</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-300">SOX, PCI-DSS, and financial regulations compliance</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Audit Trails</h3>
              <p className="text-gray-300">Comprehensive logging and compliance reporting</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Operations?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our financial solutions can drive innovation, 
            ensure compliance, and optimize performance for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}