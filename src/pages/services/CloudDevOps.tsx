import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield, ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern DevOps practices.",
      features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes"]
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",
      features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable database solutions with high availability and disaster recovery.",
      features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]
    }
  ];

  const platforms = [
    {
      name: "AWS",
      description: "Amazon Web Services cloud platform solutions",
      icon: "☁️"
    },
    {
      name: "Azure",
      description: "Microsoft Azure cloud services and solutions",
      icon: "🔷"
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform infrastructure and services",
      icon: "🔵"
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategy implementation",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services</title>
        <meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."/>
        <meta property="og:title" content="Cloud & DevOps — Zion Tech Group"/>
        <meta property="og:description" content="Expert cloud migration and DevOps implementation services for modern infrastructure."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/cloud-devops"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops"/>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your infrastructure with modern cloud migration and DevOps practices. 
              Scale efficiently, deploy faster, and maintain reliability with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Cloud & DevOps Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions and DevOps implementation for modern enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cloud Platform Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep expertise across all major cloud platforms with certified professionals and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud and DevOps experts help you build a scalable, reliable, and efficient infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Start Your Cloud Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;
