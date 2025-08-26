import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, GitBranch, Server, Database, Globe, Cpu, Shield } from 'lucide-react';

const CloudDevOpsPage = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design, deploy, and manage scalable cloud infrastructure across AWS, Azure, and Google Cloud.'
    },
    {
      icon: Zap,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster, more reliable software delivery.'
    },
    {
      icon: GitBranch,
      title: 'DevOps Automation',
      description: 'Streamline development workflows with intelligent automation and orchestration tools.'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker management for scalable, portable application deployment.'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Cloud-native database solutions with automated scaling, backup, and optimization.'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Distributed content delivery networks for lightning-fast global performance.'
    }
  ];

  const benefits = [
    'Reduce deployment time by 80%',
    'Improve system reliability to 99.9%',
    'Scale infrastructure automatically',
    'Reduce operational costs by 40%',
    'Enable rapid feature delivery',
    'Ensure consistent environments'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Cloud & DevOps Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Accelerate your digital transformation with modern cloud infrastructure and DevOps practices. 
              Deploy faster, scale effortlessly, and maintain high availability with our expert solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Start Migration
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                DevOps Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cloud & DevOps Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From infrastructure design to continuous deployment, we provide end-to-end cloud and DevOps solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Cloud & DevOps?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Our platform combines industry best practices with cutting-edge automation to deliver 
                reliable, scalable, and cost-effective cloud solutions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <Cpu className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Cloud Migration
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Get a comprehensive assessment and migration plan for your infrastructure.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get Migration Plan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We work with all major cloud providers to give you the best solution for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">AWS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Amazon Web Services</h3>
              <p className="text-zion-slate-light">Enterprise-grade cloud infrastructure with global reach and advanced services.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">Azure</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Microsoft Azure</h3>
              <p className="text-zion-slate-light">Integrated cloud platform with enterprise-grade security and compliance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">GCP</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Google Cloud Platform</h3>
              <p className="text-zion-slate-light">Innovative cloud services with advanced AI and machine learning capabilities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the cloud revolution and accelerate your digital transformation with our expert team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Schedule Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Get Migration Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsPage;