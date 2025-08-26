import React from 'react';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Cloud, Server, GitBranch, Shield, Zap, TrendingUp, Users, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

const CloudDevOps: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
<<<<<<< HEAD
      description: "Seamless migration to cloud infrastructure with zero downtime"
=======
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Multi-cloud Strategy"],
      icon: "☁️"
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with automated pipelines",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
      icon: "⚡"
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications efficiently",
      features: ["Kubernetes", "Docker", "Service Mesh", "Microservices Architecture"],
      icon: "📦"
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
<<<<<<< HEAD
      description: "Automated infrastructure management and deployment"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Streamlined development and deployment workflows"
    },
    {
      icon: Shield,
      title: "DevSecOps",
      description: "Security integrated into every stage of development"
    }
  ];

  const benefits = [
    "Faster deployment cycles by 60%",
    "Reduced infrastructure costs by 30%",
    "Improved system reliability and uptime",
    "Enhanced team collaboration and productivity",
    "Scalable solutions that grow with your business"
=======
      description: "Version-controlled infrastructure management and deployment",
      features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure Automation"],
      icon: "🏗️"
    }
  ];

  const cloudPlatforms = [
    { name: "Amazon Web Services", icon: "🔶", description: "Enterprise-grade cloud solutions" },
    { name: "Microsoft Azure", icon: "🔷", description: "Hybrid cloud and enterprise integration" },
    { name: "Google Cloud Platform", icon: "🔸", description: "AI-first cloud infrastructure" },
    { name: "Multi-Cloud", icon: "🌈", description: "Best-of-breed cloud strategy" }
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cloud & DevOps - Zion Tech Group"
        description="Streamline your development and operations with modern cloud infrastructure and DevOps practices."
        keywords="cloud services, DevOps, infrastructure as code, CI/CD, cloud migration"
        canonical="https://ziontechgroup.com/services/cloud"
      />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cloud & DevOps
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              {" "}Excellence
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Accelerate your development cycles, improve reliability, and scale your infrastructure 
            with our comprehensive cloud and DevOps solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
              Start Your DevOps Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our DevOps Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end DevOps solutions designed to transform your development and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our DevOps Solutions?</h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of modern DevOps practices with our expert team
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how DevOps can streamline your development process and improve your infrastructure.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}DevOps
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with modern cloud infrastructure, 
              automated DevOps practices, and scalable solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Cloud Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Certified experts across all major cloud platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to modernize your infrastructure and accelerate delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud & DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and best practices to maximize your cloud investment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Faster Deployment</h3>
                <p className="text-gray-300">Automated pipelines reduce deployment time from days to minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-300">Right-size resources and implement cost management strategies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reliability</h3>
                <p className="text-gray-300">High availability and disaster recovery for business continuity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud and DevOps solutions can accelerate your digital transformation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Cloud Journey
            </Link>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  );
};

export default CloudDevOps;