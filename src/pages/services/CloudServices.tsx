import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Globe, Shield, Zap } from 'lucide-react';

const CloudServices: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud Platform",
      features: ["Auto-scaling", "Load balancing", "99.9% uptime", "Global CDN"]
    },
    {
      icon: Server,
      title: "DevOps & Automation",
      description: "Streamlined deployment pipelines and infrastructure as code",
      features: ["CI/CD pipelines", "Container orchestration", "Monitoring", "Automated testing"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Robust data storage, backup, and analytics solutions",
      features: ["Database optimization", "Real-time backups", "Data analytics", "Compliance"]
    },
    {
      icon: Globe,
      title: "Edge Computing",
      description: "Low-latency edge solutions for global performance",
      features: ["Edge deployment", "Content delivery", "Regional optimization", "Real-time processing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Cloud & DevOps
            </span>
            <br />
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern cloud infrastructure and DevOps solutions for scalable, reliable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
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
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Contact us to discuss your cloud and DevOps requirements
            </p>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 inline-block"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;