import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  FileText, 
  Search, 
  Zap, 
  BarChart3, 
  Scale, 
  Gavel,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  BookOpen,
  Filter,
  Clock,
  Award,
  Lock
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
      icon: Search,
      title: "Intelligent Document Review",
      description: "AI-powered analysis of legal documents with automated contract review and risk assessment."
    },
    {
      icon: Brain,
      title: "Legal Research Assistant",
      description: "Advanced legal research automation that finds relevant cases, statutes, and precedents."
    },
    {
      icon: FileText,
      title: "Contract Generation",
      description: "Intelligent contract creation with automated clause suggestions and compliance checking."
    },
    {
      icon: Zap,
      title: "Due Diligence Automation",
      description: "Streamlined due diligence processes with AI-powered document analysis and risk identification."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated compliance tracking and regulatory change management across multiple jurisdictions."
    },
    {
      icon: BarChart3,
      title: "Legal Analytics",
      description: "Data-driven insights into case outcomes, litigation trends, and legal strategy optimization."
    }
  ];

  const benefits = [
    "Reduce legal document review time by 60-80%",
    "Improve contract accuracy and compliance by 40-60%",
    "Cut legal research costs by 30-50%",
    "Enhance risk identification and mitigation",
    "Streamline due diligence processes",
    "Provide 24/7 legal research capabilities"
  ];

  const useCases = [
    {
      industry: "Corporate Law",
      applications: ["Contract review", "M&A due diligence", "Compliance monitoring", "Risk assessment"]
    },
    {
      industry: "Litigation",
      applications: ["Case research", "Document discovery", "Evidence analysis", "Strategy planning"]
    },
    {
      industry: "Real Estate",
      applications: ["Lease agreements", "Title searches", "Regulatory compliance", "Transaction support"]
    },
    {
      industry: "Intellectual Property",
      applications: ["Patent research", "Trademark analysis", "IP portfolio management", "Infringement detection"]
    }
  ];

  const legalServices = [
    {
      name: "Contract Management",
      icon: FileText,
      description: "AI-powered contract lifecycle management with automated review and analysis"
    },
    {
      name: "Legal Research",
      icon: Search,
      description: "Intelligent legal research automation across multiple jurisdictions and databases"
    },
    {
      name: "Compliance & Risk",
      icon: Shield,
      description: "Automated compliance monitoring and risk assessment tools"
    },
    {
      name: "Document Analysis",
      icon: Brain,
      description: "Advanced document processing with AI-powered insights and recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm font-medium">AI Legal Tech</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionize Legal Practice with
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                AI-Powered Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your legal practice with intelligent automation that streamlines research, 
              enhances document review, and delivers superior client outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300">
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
              Advanced Legal Technology Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered legal platform combines cutting-edge technology with legal expertise 
              to deliver exceptional results and efficiency gains.
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Legal Technology Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Streamline your legal practice with intelligent automation that handles 
              every aspect of modern legal work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable Legal Practice Improvements
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real improvements in your legal practice with AI-powered technology 
              that continuously optimizes and improves results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Practice Areas</h3>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4"
                >
                  <h4 className="text-lg font-semibold text-red-400 mb-3">{useCase.industry}</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of law firms already using AI legal technology to increase efficiency, 
              improve accuracy, and deliver better client outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}