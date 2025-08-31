import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Search,
  BookOpen,
  Clock,
  DollarSign,
  BarChart3,
  Lock,
  Eye,
  FileSearch,
  Truck,
  Target,
  AlertTriangle,
  Database,
  Network,
  Globe,
  Cpu,
  Package,
  Route,
  Warehouse,
  Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AISupplyChainOptimization: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Advanced machine learning algorithms for accurate demand prediction and inventory optimization'
    },
    {
      icon: Workflow,
      title: 'Supply Chain Automation',
      description: 'Intelligent automation of procurement, logistics, and distribution processes'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-driven risk assessment and mitigation strategies for supply chain disruptions'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous optimization of routes, inventory levels, and supplier selection'
    },
    {
      icon: Users,
      title: 'Supplier Intelligence',
      description: 'AI-powered supplier evaluation and relationship management'
    },
    {
      icon: CheckCircle,
      title: 'Performance Analytics',
      description: 'Comprehensive KPIs and performance tracking for supply chain optimization'
    }
  ];

  const useCases = [
    {
      title: 'Inventory Management',
      description: 'AI-powered demand forecasting and optimal stock level management',
      icon: Warehouse
    },
    {
      title: 'Route Optimization',
      description: 'Intelligent logistics routing for cost and time efficiency',
      icon: Route
    },
    {
      title: 'Supplier Management',
      description: 'AI-driven supplier evaluation and performance monitoring',
      icon: Users
    },
    {
      title: 'Risk Mitigation',
      description: 'Predictive risk assessment and disruption prevention',
      icon: Shield
    }
  ];

  const benefits = [
    'Reduce inventory costs by 30%',
    'Improve delivery times by 40%',
    'Lower operational costs by 25%',
    'Enhanced supplier performance and relationships',
    'Real-time visibility across the entire supply chain',
    'Scalable for any business size and complexity'
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Production planning and material optimization',
      icon: Factory
    },
    {
      title: 'Retail & E-commerce',
      description: 'Inventory management and fulfillment optimization',
      icon: Package
    },
    {
      title: 'Logistics & Transportation',
      description: 'Route optimization and fleet management',
      icon: Truck
    },
    {
      title: 'Healthcare',
      description: 'Medical supply chain and pharmaceutical logistics',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-amber-900 to-yellow-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-500/20 rounded-full">
                <Workflow className="w-12 h-12 text-orange-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered optimization, intelligent automation, and predictive insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Demo
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI-Powered Supply Chain Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI supply chain optimization platform combines cutting-edge machine learning with logistics expertise to deliver unprecedented efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inventory management to logistics optimization, our AI platform handles every aspect of supply chain operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI supply chain optimization platform serves diverse industries with specialized solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Supply Chain Optimization?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your supply chain operations with unprecedented efficiency, cost savings, and visibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Supply Chain with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join leading companies already using AI to revolutionize their supply chain operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;