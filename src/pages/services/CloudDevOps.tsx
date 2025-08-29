import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Server, Database, Shield, Users, Globe, Award, BarChart3, CheckCircle, Target, Cpu } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function CloudDevOps() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency"
    },
    {
      icon: Zap,
      title: "DevOps Automation",
      description: "Automate your development and deployment pipelines for faster, more reliable releases"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Manage your infrastructure programmatically with Terraform, CloudFormation, and more"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimize database performance and ensure high availability across cloud environments"
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Implement robust security measures and compliance frameworks in the cloud"
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Empower your team with cloud and DevOps best practices and tools"
    }
  ];

  const benefits = [
    "Reduce deployment time by 80%",
    "Improve system reliability by 90%",
    "Cut infrastructure costs by 30-50%",
    "Enable faster feature delivery",
    "Enhance team collaboration and productivity",
    "Scale infrastructure automatically"
  ];

  const cloudPlatforms = [
    {
      title: "AWS",
      description: "Comprehensive cloud services with global infrastructure and advanced features"
    },
    {
      title: "Azure",
      description: "Microsoft's cloud platform with enterprise integration and hybrid capabilities"
    },
    {
      title: "Google Cloud",
      description: "AI-first cloud platform with advanced analytics and machine learning"
    },
    {
      title: "Multi-Cloud",
      description: "Strategic approach using multiple cloud providers for optimal performance and cost"
    }
  ];

  const capabilities = [
    "Cloud architecture design and implementation",
    "DevOps pipeline automation and optimization",
    "Infrastructure as Code (IaC) implementation",
    "Container orchestration with Kubernetes",
    "CI/CD pipeline setup and management",
    "Cloud cost optimization and monitoring",
    "Security and compliance implementation",
    "Disaster recovery and backup strategies"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group"
        description="Expert cloud migration and DevOps automation services to accelerate your digital transformation and improve operational efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud-First Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with expert cloud migration and 
              DevOps automation services. Build, deploy, and scale faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Start Migration
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                Free Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cloud & DevOps Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From cloud migration to DevOps automation, we provide end-to-end 
              solutions that transform your technology operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Operations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cloud and DevOps adoption delivers measurable improvements across 
              all aspects of your technology operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cloud Platform Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep expertise across all major cloud platforms to ensure you choose 
              the right solution for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{platform.title}</h3>
                <p className="text-slate-300">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Cloud & DevOps Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with industry expertise and proven methodologies for successful cloud adoption.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Scale in the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations already achieving breakthrough results 
              with cloud and DevOps transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Cloud Migration
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}