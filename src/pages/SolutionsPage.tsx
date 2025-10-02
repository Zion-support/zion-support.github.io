import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Building, Shield, Zap } from 'lucide-react';

interface SolutionsPageProps {
  category?: string;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ category }) => {
  const { category: urlCategory } = useParams();
  const activeCategory = category || urlCategory || 'overview';

  const solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI solutions for large-scale enterprise operations',
      icon: Building,
      features: [
        'Enterprise LLM Orchestration',
        'Cognitive Orchestration Platform',
        'Real-Time Intelligence Mesh',
        'Advanced Cybersecurity AI',
        'Autonomous Workflow Management'
      ],
      stats: { value: '$84.7B', label: 'Value Creation' },
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'smb',
      title: 'SMB Solutions',
      description: 'Scalable AI solutions designed for small and medium businesses',
      icon: Users,
      features: [
        'AI Workflow Automation',
        'Smart Document Processing',
        'Intelligent Analytics',
        'Cost-Optimized AI Services',
        'Rapid Deployment Solutions'
      ],
      stats: { value: '520%', label: 'Productivity Increase' },
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'startup',
      title: 'Startup Solutions',
      description: 'Innovative AI technologies to accelerate startup growth',
      icon: Zap,
      features: [
        'AI-Powered MVP Development',
        'Rapid Prototyping Tools',
        'Scalable AI Infrastructure',
        'Startup-Friendly Pricing',
        'Expert AI Consultation'
      ],
      stats: { value: '10.2x', label: 'Faster Development' },
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'government',
      title: 'Government Solutions',
      description: 'Secure AI solutions for government agencies and public sector',
      icon: Shield,
      features: [
        'FedRAMP Compliant AI',
        'Secure Data Processing',
        'Government-Grade Security',
        'Compliance Automation',
        'Public Sector Optimization'
      ],
      stats: { value: '99.8%', label: 'Compliance Rate' },
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      description: 'AI solutions transforming healthcare delivery and patient care',
      icon: CheckCircle,
      features: [
        'Medical AI Workflows',
        'Patient Data Analytics',
        'Diagnostic AI Support',
        'Healthcare Automation',
        'HIPAA Compliant Solutions'
      ],
      stats: { value: '73%', label: 'Cost Reduction' },
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'financial',
      title: 'Financial Solutions',
      description: 'Advanced AI solutions for financial services and fintech',
      icon: Building,
      features: [
        'Fraud Detection AI',
        'Risk Assessment Automation',
        'Financial Analytics',
        'Regulatory Compliance',
        'Real-Time Trading AI'
      ],
      stats: { value: '$18.4B', label: 'FinTech Success' },
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const selectedSolution = solutions.find(s => s.id === activeCategory) || solutions[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {selectedSolution.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {selectedSolution.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  activeCategory === solution.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${selectedSolution.color} flex items-center justify-center mb-8`}>
                <selectedSolution.icon className="text-white" size={40} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedSolution.title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                {selectedSolution.description}
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {selectedSolution.stats.value}
                </div>
                <div className="text-gray-600">
                  {selectedSolution.stats.label}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {selectedSolution.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Solutions Overview */}
      {activeCategory === 'overview' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                All Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI solutions for every industry and business size
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="text-sm font-semibold text-blue-600 mb-4">
                    {solution.stats.value} {solution.stats.label}
                  </div>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SolutionsPage;