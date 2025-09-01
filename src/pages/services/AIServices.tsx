import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Database, Cpu, Shield, Zap } from 'lucide-react';

const AIServices: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models and AI algorithms for business intelligence",
      features: ["Predictive analytics", "Natural language processing", "Computer vision", "Deep learning"]
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation for business processes and workflows",
      features: ["Process automation", "Chatbots & virtual assistants", "Document processing", "Decision engines"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced data processing and business intelligence solutions",
      features: ["Real-time analytics", "Data visualization", "Predictive modeling", "Business insights"]
    },
    {
      icon: Cpu,
      title: "AI Infrastructure",
      description: "Scalable AI infrastructure and model deployment solutions",
      features: ["Model deployment", "GPU optimization", "Edge AI", "MLOps pipelines"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              AI & Machine Learning
            </span>
            <br />
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-4">Transform Your Business with AI</h2>
            <p className="text-gray-300 mb-6">
              Let us help you harness the power of artificial intelligence
            </p>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-block"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIServices;