import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Brain, Shield, Users, Zap, Target, Star, ArrowRight, Activity, TrendingUp, Lock, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const financialServices = [
  {
    title: 'AI Financial Intelligence',
    description: 'Advanced AI-powered financial analysis and decision-making platforms',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-financial-intelligence',
    features: ['Risk Assessment', 'Portfolio Optimization', 'Market Analysis']
  },
  {
    title: 'Quantum Financial Trading',
    description: 'Quantum computing solutions for high-frequency trading and financial modeling',
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    href: '/quantum-financial-trading',
    features: ['Algorithmic Trading', 'Risk Management', 'Performance Optimization']
  },
  {
    title: 'Financial Analytics Platform',
    description: 'Comprehensive financial data analytics and reporting solutions',
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    href: '/financial-analytics-platform',
    features: ['Real-time Analytics', 'Custom Reporting', 'Data Visualization']
  },
  {
    title: 'Blockchain Financial Services',
    description: 'Secure blockchain-based financial transactions and smart contracts',
    icon: <Lock className="w-8 h-8 text-blue-400" />,
    href: '/blockchain-financial-services',
    features: ['Smart Contracts', 'DeFi Solutions', 'Secure Transactions']
  },
  {
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring and reporting for financial institutions',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/financial-compliance-automation',
    features: ['Regulatory Monitoring', 'Automated Reporting', 'Compliance Auditing']
  },
  {
    title: 'Financial Planning AI',
    description: 'Intelligent financial planning and wealth management platforms',
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    href: '/ai-financial-planning-platform',
    features: ['Personalized Planning', 'Goal Tracking', 'Investment Advice']
  }
];

export default function FinancialSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>financial-solutions | Zion Tech Group</title>
        <meta name="description" content="financial-solutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">financial-solutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};


export default NeuralInterface2026;
