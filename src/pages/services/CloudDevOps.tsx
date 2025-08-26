import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Cloud, Server, GitBranch, Shield, Zap, TrendingUp, Users, Globe } from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with zero downtime"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cloud & DevOps - Zion Tech Group"
        description="Streamline your development and operations with modern cloud infrastructure and DevOps practices."
        keywords="cloud services, DevOps, infrastructure as code, CI/CD, cloud migration"
        canonical="https://ziontechgroup.com/services/cloud"
      />

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
  );
};

export default CloudDevOps;