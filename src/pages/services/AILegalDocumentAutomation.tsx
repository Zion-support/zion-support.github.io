import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Scale,
  Search,
  Download,
  Upload,
  BarChart3,
  Users,
  Globe,
  Lock
} from 'lucide-react';

const AILegalDocumentAutomation = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Document Automation | Zion Tech Group</title>
        <meta name="description" content="Streamline legal document processing with AI-powered automation. Reduce manual work, improve accuracy, and accelerate legal workflows with our advanced AI legal document automation platform." />
        <meta name="keywords" content="AI legal automation, document processing, legal AI, contract analysis, legal workflow automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-legal-document-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <Scale className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Legal Document
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}Automation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your legal practice with AI-powered document automation. 
                Process contracts, analyze legal documents, and streamline workflows 
                with unprecedented speed and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 hover:border-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Legal AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI legal document automation platform combines advanced machine learning 
                with legal expertise to deliver unmatched performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8 text-cyan-400" />,
                  title: "Contract Analysis",
                  description: "Automatically analyze contracts for key terms, risks, and compliance issues with 99% accuracy."
                },
                {
                  icon: <Search className="w-8 h-8 text-cyan-400" />,
                  title: "Document Search",
                  description: "Find relevant information across thousands of legal documents in seconds using natural language queries."
                },
                {
                  icon: <Brain className="w-8 h-8 text-cyan-400" />,
                  title: "Legal Research",
                  description: "AI-powered legal research that identifies relevant case law, statutes, and precedents automatically."
                },
                {
                  icon: <Clock className="w-8 h-8 text-cyan-400" />,
                  title: "Workflow Automation",
                  description: "Automate routine legal tasks like document review, approval workflows, and deadline tracking."
                },
                {
                  icon: <Shield className="w-8 h-8 text-cyan-400" />,
                  title: "Compliance Monitoring",
                  description: "Continuously monitor documents for compliance with changing regulations and legal requirements."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
                  title: "Analytics & Insights",
                  description: "Gain insights into legal operations with detailed analytics and performance metrics."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Legal Practice
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of legal professionals who have revolutionized their practice with AI automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-6">
                  {[
                    "Reduce document processing time by 90%",
                    "Improve accuracy and reduce human errors",
                    "Lower operational costs significantly",
                    "Enhance client satisfaction with faster turnaround",
                    "Ensure compliance with automated monitoring",
                    "Scale your practice without proportional cost increases"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
              >
                <h4 className="text-xl font-semibold text-white mb-6">Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-cyan-400 font-semibold">90% Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accuracy Rate</span>
                    <span className="text-cyan-400 font-semibold">99.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-cyan-400 font-semibold">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-cyan-400 font-semibold">98%</span>
                  </div>
                </div>
              </motion.div>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Legal Practice?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the future of legal document automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 hover:border-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalDocumentAutomation;