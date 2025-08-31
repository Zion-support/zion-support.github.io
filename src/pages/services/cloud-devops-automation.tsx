import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  GitBranch, 
  Zap, 
  Shield, 
  Monitor,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  Globe
} from 'lucide-react';

const CloudDevOpsAutomation = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Unified management across AWS, Azure, Google Cloud, and private cloud environments with automated provisioning and scaling.'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Automation',
      description: 'End-to-end automation of build, test, and deployment processes with intelligent rollback capabilities.'
    },
    {
      icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and ARM templates for consistent, repeatable infrastructure deployment.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Automated security scanning, compliance checks, and vulnerability management across all environments.'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting with AI-powered anomaly detection and root cause analysis.'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker management with automated scaling, load balancing, and service mesh implementation.'
    }
  ];

  const benefits = [
    'Reduce deployment time by 90%',
    'Improve system reliability by 99.9%',
    'Cut infrastructure costs by 40%',
    'Enable zero-downtime deployments',
    'Automate security and compliance',
    'Scale infrastructure automatically'
  ];

  const services = [
    {
      title: 'Cloud Migration & Strategy',
      description: 'Comprehensive cloud migration planning and execution with minimal downtime and maximum efficiency.'
    },
    {
      title: 'DevOps Transformation',
      description: 'Cultural and technical transformation to implement DevOps best practices and automation.'
    },
    {
      title: 'Infrastructure Automation',
      description: 'Complete automation of infrastructure provisioning, configuration, and management.'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of application and infrastructure performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Cloud & DevOps Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cloud & DevOps Automation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with our comprehensive cloud and DevOps automation solutions. 
              Streamline operations, reduce costs, and deliver value faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Start Free Assessment
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team delivers end-to-end cloud and DevOps automation that transforms your 
              development and operations processes.
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
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Operations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to deliver robust, scalable, and secure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'AWS', icon: Cloud },
              { name: 'Azure', icon: Cloud },
              { name: 'GCP', icon: Cloud },
              { name: 'Kubernetes', icon: Server },
              { name: 'Docker', icon: Server },
              { name: 'Terraform', icon: GitBranch },
              { name: 'Jenkins', icon: GitBranch },
              { name: 'Prometheus', icon: Monitor }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Automate Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that have transformed their operations with our cloud and DevOps automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Free Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsAutomation;